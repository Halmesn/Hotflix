import * as Styled from './styles';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export const FormContext = createContext();

export default function AuthForm() {
  const router = useRouter();
  // check if query is an empty obj, if it's coming from subscribe component it'll not be empty.
  const fromSubscriber = Object.keys(router.query).length === 0;
  const subscriberEmail = router.query.email;

  const [mode, setMode] = useState(fromSubscriber ? 'signin' : 'signup');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  useEffect(() => {
    if (subscriberEmail) setEnteredEmail(subscriberEmail);
  }, []);

  const formState = {
    enteredEmail,
    setEnteredEmail,
    enteredPassword,
    setEnteredPassword,
    setMode,
  };

  return (
    <Styled.FormWrapper>
      <FormContext.Provider value={formState}>
        {mode === 'signup' ? <SignUp /> : <SignIn />}
      </FormContext.Provider>
    </Styled.FormWrapper>
  );
}
