/*
*   Initializes our NextAuth.js configuration. Links our GCC credentials to our app.
*   Exporting universal methods...
*   - auth: fetch the session in server components
*   - handlers: for the /api/auth/[...nextauth] route handler
*   - signIn/signOut: triggers for server actions or client components
*/

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";

// exported methods to trigger Google OAuth, sign out, and grab session data
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    // callback function runs after signIn method has been triggered
    // and Google has sent back the users account information
    callbacks: {
        async signIn({ account, profile }) {
            if (!account || account.provider !== 'google' || !profile?.email) {
                return false;
            }

            // locate user with provided email from Google
            const userExists = await prisma.user.findUnique({
                where: { email: profile.email }
            });

            if (!userExists) return false
            return true;
        }
    },
    pages: {
        error: '/onboard'
    }
});