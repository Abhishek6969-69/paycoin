"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authOptions = void 0;
const client_1 = __importDefault(require("@repo/db/client"));
const credentials_1 = __importDefault(require("next-auth/providers/credentials"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.authOptions = {
    providers: [
        (0, credentials_1.default)({
            name: 'Credentials',
            credentials: {
                name: { label: "Name", type: "text", placeholder: "your name", required: true },
                phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            // TODO: User credentials type from next-aut
            async authorize(credentials) {
                // Do zod validation, OTP validation here
                const hashedPassword = await bcryptjs_1.default.hash(credentials.password, 10);
                const existingUser = await client_1.default.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });
                if (existingUser) {
                    const passwordValidation = await bcryptjs_1.default.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        console.log(existingUser.name);
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        };
                    }
                    return null;
                }
                try {
                    const user = await client_1.default.user.create({
                        data: {
                            name: credentials.name,
                            number: credentials.phone,
                            password: hashedPassword,
                        }
                    });
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    };
                }
                catch (e) {
                    await client_1.default.$disconnect();
                    console.error(e);
                }
                return null;
            },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async jwt({ token, user }) {
            console.log("JWT user data:", user); // Debugging
            // When the user is returned from authorize, attach the name to the token
            if (user) {
                token.name = user.name || token.name;
                token.email = user.email || token.email;
            }
            return token;
        },
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }) {
            console.log(session, "sss");
            session.user.id = token.sub;
            session.user.token = token.jti;
            session.user.name = token.name || session.user.name;
            session.user.email = token.email || session.user.email;
            try {
                await client_1.default.balance.upsert({
                    where: { userId: Number(session.user.id) },
                    update: {}, // Do nothing if balance exists
                    create: {
                        userId: Number(session.user.id),
                        amount: Number((Math.random() * 1000000)),
                        locked: 0,
                    }
                });
            }
            catch (e) {
                await client_1.default.$disconnect();
            }
            finally {
                (async () => {
                    await client_1.default.$disconnect(); // Close Prisma connection on successful execution
                });
            }
            return session;
        }
    },
    pages: {
        signIn: '/user/signin'
    }
};
