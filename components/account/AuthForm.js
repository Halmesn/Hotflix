import * as styled from './styles';

import FormSpinner from './FormSpinner';
import { signIn } from 'next-auth/client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthForm({ formState }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    enteredEmail,
    setEnteredEmail,
    enteredPassword,
    setEnteredPassword,
    mode,
    setMode,
  } = formState;

  useEffect(() => {
    setError(null);
    setSuccess(null);
  }, [mode]);

  const onTrialClick = () => {
    setEnteredEmail('guest@nextflix.com');
    setEnteredPassword('nextflix');
    setMode('signin');
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (mode === 'signup') {
      setIsLoading(true);
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const data = await response.json();
          setIsLoading(false);
          throw new Error(data.message);
        }
        setIsLoading(false);
        setSuccess(true);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    if (mode === 'signin') {
      setIsLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        ...formData,
      });
      if (result.error) {
        setError(result.error);
        setIsLoading(false);
      }
      if (!result.error) {
        setIsLoading(false);
        setError(null);
        console.log(result);
        router.replace('/browse');
      }
    }
  };

  return (
    <styled.FormWrapper>
      <styled.MainForm onSubmit={onFormSubmit}>
        <styled.Title>{mode === 'signin' ? 'Sign in' : 'Sign up'}</styled.Title>
        {error ? <styled.Error>{error}</styled.Error> : null}
        {success ? (
          <styled.Success>
            Successfully signed up! Now you can{' '}
            <span
              onClick={() => {
                setMode('signin');
              }}
            >
              sign in.
            </span>
          </styled.Success>
        ) : null}
        <styled.Form>
          <styled.InputField>
            <styled.Input
              type="email"
              id="email"
              autoComplete="email"
              minLength="5"
              required
              value={enteredEmail}
              onChange={({ target }) => {
                setEnteredEmail(target.value);
              }}
              onFocus={() => {
                setError(null);
              }}
            />
            <styled.Label htmlFor="email">Email address</styled.Label>
          </styled.InputField>
          <styled.InputField>
            <styled.Input
              type="password"
              id="password"
              minLength="4"
              required
              value={enteredPassword}
              onChange={({ target }) => {
                setEnteredPassword(target.value);
              }}
              onFocus={() => {
                setError(null);
              }}
            />
            <styled.Label htmlFor="password">Password</styled.Label>
          </styled.InputField>
          <styled.AuthButton disabled={isLoading}>
            {isLoading ? (
              <FormSpinner />
            ) : mode === 'signin' ? (
              'Sign in'
            ) : (
              'Sign up'
            )}
          </styled.AuthButton>
        </styled.Form>
      </styled.MainForm>

      <styled.SubForm>
        <styled.SubTitle>
          {mode === 'signin' ? 'New to Nextflix?' : 'Already a user?'}{' '}
          <span
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin');
            }}
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'} now.
          </span>
        </styled.SubTitle>
        {mode === 'signin' ? (
          <>
            <styled.SubTitle center>Or sign in with</styled.SubTitle>
            <styled.BtnContainer>
              <styled.OthersBtn>
                <styled.FacebookIcon />
                Facebook
              </styled.OthersBtn>
              <styled.OthersBtn>
                <styled.GoogleIcon />
                Google
              </styled.OthersBtn>
            </styled.BtnContainer>
          </>
        ) : (
          <>
            <styled.SubTitle center>Don't want to be bothered?</styled.SubTitle>
            <styled.BtnContainer center>
              <styled.OthersBtn onClick={onTrialClick}>
                <styled.UserIcon />
                Use our trial account!
              </styled.OthersBtn>
            </styled.BtnContainer>
          </>
        )}
      </styled.SubForm>
    </styled.FormWrapper>
  );
}
