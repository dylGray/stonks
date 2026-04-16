'use server'

import { signIn } from "@/src/auth";

export async function googleLogin() {
    await signIn('google', { redirectTo: '/' });
}