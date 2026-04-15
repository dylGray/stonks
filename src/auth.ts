/*
*   Initializes our NextAuth.js configuration. Links our GCC credentials to our app.
*   Exporting universal methods...
*   - auth: fetch the session in server components
*   - handlers: for the /api/auth/[...nextauth] route handler
*   - signIn/signOut: triggers for server actions or client components
*/

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});