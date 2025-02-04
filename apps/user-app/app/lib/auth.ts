import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            name:{label:"Name", type:"text",placeholder:"your name", required:true},
            phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
            password: { label: "Password", type: "password", required: true }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    number: credentials.phone
                }
            });

            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    console.log(existingUser.name)
                    return {
                        
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        email: existingUser.number
                    };
                }
                return null
            }

            try {
                const user = await db.user.create({
                    data: {
                        name:credentials.name,
                        number: credentials.phone,
                        password: hashedPassword,

                    }
                });
            
                return {
                    id: user.id.toString(),
                    
                    name: user.name,
                    email: user.number
                }
            } catch(e) {
               await  db.$disconnect()
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async jwt({ token, user }:{token:any,user:any}) {
            console.log("JWT user data:", user); // Debugging
            // When the user is returned from authorize, attach the name to the token
            if (user) {
              token.name = user.name || token.name;
              token.email=user.email || token.email
            }
            return token;
          },
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            console.log(session,"sss")
            session.user.id = token.sub
            session.user.token=token.jti
            session.user.name=token.name || session.user.name;  
            session.user.email=token.email || session.user.email;
            try{
                await db.balance.upsert({
                    where: { userId: Number(session.user.id) },
                    update: {},  // Do nothing if balance exists
                    create: { 
                        userId: Number(session.user.id), 
                        amount:Number((Math.random() * 1000000)), 
                        locked: 0,
                    }
                });
            }
            catch(e){
             await db.$disconnect()   
            }
            finally{(async () => {
                await db.$disconnect(); // Close Prisma connection on successful execution
              });
            }
            
            
          
            
            return session
        }
    },
    pages: {
        signIn: '/user/signin'
       
  }
  
}