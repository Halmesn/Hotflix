import * as styled from './styles';

import FormSpinner from './FormSpinner';
import { signIn } from 'next-auth/client';

import { getInputProps, getDisplayText } from 'helpers/authFormHelpers';

import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';

const reducer = (state, action) => {
  switch (action.type) {
    case 'idle':
      return { error: null };
    case 'pending': {
      return { status: 'pending', error: null };
    }
    case 'resolved': {
      return { status: 'resolved', error: null };
    }
    case 'rejected': {
      return { status: 'rejected', error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default function AuthForm({ formState }) {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    error: null,
  });
  const { status, error } = state;

  const router = useRouter();

  const {
    enteredEmail,
    setEnteredEmail,
    enteredPassword,
    setEnteredPassword,
    mode,
    setMode,
  } = formState;

  useEffect(() => dispatch({ type: 'idle' }), [mode]);

  const onTrialClick = () => {
    setEnteredEmail('guest@hotflix.com');
    setEnteredPassword(process.env.NEXT_PUBLIC_TRIAL_ACCOUNT_PASSWORD);
    setMode('signin');
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    dispatch({ type: 'pending' });

    if (mode === 'signup') {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const data = await response.json();
        dispatch({ type: 'rejected', error: data.message });
        return;
      }
      dispatch({ type: 'resolved' });
    }

    if (mode === 'signin') {
      const result = await signIn('credentials', {
        redirect: false,
        ...formData,
      });
      if (result.error) {
        dispatch({ type: 'rejected', error: result.error });
        return;
      }
      router.replace('/browse');
    }
  };

  return (
    <styled.FormWrapper>
      <styled.MainForm onSubmit={onFormSubmit}>
        <styled.Title>{getDisplayText(mode)}</styled.Title>
        {error && <styled.Error>{error}</styled.Error>}
        {status === 'resolved' && mode === 'signup' && (
          <styled.Success>
            Successfully signed up! Now you can{' '}
            <span onClick={() => setMode('signin')}>sign in.</span>
          </styled.Success>
        )}
        <styled.Form>
          <styled.InputField>
            <styled.Input
              {...getInputProps('email', enteredEmail, dispatch)}
              onChange={({ target }) => setEnteredEmail(target.value)}
            />
            <styled.Label htmlFor="email">Email address</styled.Label>
          </styled.InputField>
          <styled.InputField>
            <styled.Input
              {...getInputProps('password', enteredPassword, dispatch)}
              onChange={({ target }) => setEnteredPassword(target.value)}
            />
            <styled.Label htmlFor="password">Password</styled.Label>
          </styled.InputField>
          <styled.AuthButton disabled={status === 'pending'}>
            {status === 'pending' ? <FormSpinner /> : getDisplayText(mode)}
          </styled.AuthButton>
        </styled.Form>
      </styled.MainForm>

      <styled.SubForm>
        <styled.SubTitle>
          {getDisplayText(mode, 'subtitle')}
          <span
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {getDisplayText(mode, 'switch')} now.
          </span>
        </styled.SubTitle>
        <styled.SubTitle center>Don't want to be bothered?</styled.SubTitle>

        <styled.BtnContainer center>
          <styled.OthersBtn onClick={onTrialClick}>
            <styled.UserIcon />
            Use trial account
          </styled.OthersBtn>
        </styled.BtnContainer>
      </styled.SubForm>
    </styled.FormWrapper>
  );
}
