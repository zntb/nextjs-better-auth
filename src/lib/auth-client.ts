import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
