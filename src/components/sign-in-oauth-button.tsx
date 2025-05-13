'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth-client';

interface SignInOauthButtonProps {
  provider: 'google' | 'github';
  signUp?: boolean;
}

export const SignInOauthButton = ({
  provider,
  signUp,
}: SignInOauthButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setIsPending(true);

    await signIn.social({
      provider,
      callbackURL: '/profile',
      errorCallbackURL: '/auth/login/error',
    });

    setIsPending(false);
  }

  const action = signUp ? 'Up' : 'In';
  const providerName = provider === 'google' ? 'Google' : 'GitHub';

  return (
    <Button onClick={handleClick} disabled={isPending}>
      Sign {action} with {providerName}
    </Button>
  );
};
