import AuthForm from './AuthForm';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthState() {
  const router = useRouter();
  // check if query is an empty obj, if it's coming from subscribe component it'll not be empty.
  const fromSubscriber = Object.keys(router.query).length === 0;
  const subscriberEmail = router.query.email;

  const [mode, setMode] = useState(fromSubscriber ? 'signin' : 'signup');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  useEffect(() => subscriberEmail && setEnteredEmail(subscriberEmail), []);

  const formState = {
    enteredEmail,
    setEnteredEmail,
    enteredPassword,
    setEnteredPassword,
    mode,
    setMode,
  };

  return <AuthForm formState={formState} />;
}
