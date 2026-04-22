/*
*   api/auth/[...nextauth]/ is a 'catch-all' route handler
*/

import { handlers } from "@/src/auth";
export const { GET, POST } = handlers;