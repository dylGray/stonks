/*
*   api/auth/[...nextauth]/ is a 'catch-all' route.
*   When Google sends a user to the redirect URI /api/auth/callback/google/, Next.js hands that request to NextAuth,
*   which automatically parses the 'callback' and 'google' parts to finsih the login flow.
*/

import { handlers } from "@/src/auth";
export const { GET, POST } = handlers;