import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import hashPass from "./lib/auth/hash";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // we can specify which fields should be submitted by populating the credentials object
            credentials: {
                email: { type: 'text' },
                passphrase: { type: 'text' },
            },

            // function that handles custom logic to determine valid user
            authorize: async(credentials) => {
                const email = credentials.email as string;
                const passphrase = credentials.passphrase as string;

                if (!email || !passphrase) throw new Error('missing credentials');

                const passHash = await hashPass(passphrase);

                const user = await prisma.user.findUnique({
                    where: { email: email, pass_phrase: passHash }
                });

                if (!user) throw new Error('invalid credentials');

                return user;
            }   
        })
    ]
});