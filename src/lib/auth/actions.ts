'use server'

import { signIn, auth } from "@/src/auth";

export async function getSession() {
    try {
        const session = await auth();
        // will this Error just get tossed down to the catch block
        if (!session) return Error('no valid session');
        return session;
    } catch (err) {
        console.error('no valid session:', err);
    }
}

export async function googleLogin() {
    await signIn('google', { redirectTo: '/' });
}