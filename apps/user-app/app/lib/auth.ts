import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: "Name", type: "text", placeholder: "your name" },
                phone: { label: "Phone number", type: "tel", maxlength: "10", placeholder: "1231231231" },
                password: { label: "Password", type: "password" }
            },
            // Authorize handles both sign-in and sign-up: if user exists we verify password, otherwise create a new user
            async authorize(credentials: any) {
                if (!credentials || !credentials.phone || !credentials.password) {
                    // Missing required fields
                    throw new Error('Missing phone or password');
                }

                // Normalize phone (remove non-digits)
                const phone = String(credentials.phone).replace(/\D/g, '');
                if (phone.length < 6) {
                    throw new Error('Invalid phone number');
                }

                // Check for existing user
                const existingUser = await db.user.findFirst({ where: { number: phone } });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        };
                    }

                    // Wrong password
                    throw new Error('Invalid phone or password');
                }

                // Create new user (sign-up on first use)
                try {
                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
                    const user = await db.user.create({
                        data: {
                            name: credentials.name || null,
                            number: phone,
                            password: hashedPassword,
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    };
                } catch (e) {
                    console.error('Error creating user in authorize:', e);
                    throw new Error('Unable to create user');
                }
            },
        })
    ],
    secret: process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.name = user.name || token.name;
                token.email = user.email || token.email;
            }
            return token;
        },
        // Populate session.user with id/email/name and ensure Balance exists
        async session({ token, session }: any) {
            session.user.id = token.sub;
            session.user.token = token.jti;
            session.user.name = token.name || session.user.name;
            session.user.email = token.email || session.user.email;

            // Ensure balance exists for this user, but don't disconnect Prisma here (it is a shared client)
            try {
                if (session.user?.id) {
                    await db.balance.upsert({
                        where: { userId: Number(session.user.id) },
                        update: {},
                        create: {
                            userId: Number(session.user.id),
                            amount: 0,
                            locked: 0,
                        }
                    });
                }
            } catch (e) {
                console.error('Error upserting balance in session callback:', e);
            }

            return session;
        }
    },
    pages: {
        signIn: '/user/signin'
    }
};