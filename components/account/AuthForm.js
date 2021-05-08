import * as styled from './styles';

import FormSpinner from './FormSpinner';
import { signIn } from 'next-auth/client';

import { getInputProps, getDisplayText } from 'utilities/formHelpers';

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
    setEnteredPassword(process.env.NEXT_PUBLIC_TRIAL_ACCOUNT_PASSWORD);
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
        setSuccess(null);
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
        return;
      }
      setError(null);
      router.replace('/browse');
    }
  };

  return (
    <styled.FormWrapper>
      <styled.MainForm onSubmit={onFormSubmit}>
        <styled.Title>{getDisplayText(mode)}</styled.Title>
        {error && <styled.Error>{error}</styled.Error>}
        {success && (
          <styled.Success>
            Successfully signed up! Now you can{' '}
            <span onClick={() => setMode('signin')}>sign in.</span>
          </styled.Success>
        )}
        <styled.Form>
          <styled.InputField>
            <styled.Input
              {...getInputProps('email', enteredEmail, setError)}
              onChange={({ target }) => setEnteredEmail(target.value)}
            />
            <styled.Label htmlFor="email">Email address</styled.Label>
          </styled.InputField>
          <styled.InputField>
            <styled.Input
              {...getInputProps('password', enteredPassword, setError)}
              onChange={({ target }) => setEnteredPassword(target.value)}
            />
            <styled.Label htmlFor="password">Password</styled.Label>
          </styled.InputField>
          <styled.AuthButton disabled={isLoading}>
            {isLoading ? <FormSpinner /> : getDisplayText(mode)}
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
        <styled.SubTitle center>
          {getDisplayText(mode, 'option')}
        </styled.SubTitle>
        {mode === 'signin' ? (
          <styled.BtnContainer>
            <styled.OthersBtn onClick={() => signIn('google')}>
              <styled.GoogleIcon />
              Google
            </styled.OthersBtn>
            <styled.OthersBtn onClick={() => signIn('facebook')}>
              <styled.FacebookIcon />
              Facebook
            </styled.OthersBtn>
          </styled.BtnContainer>
        ) : (
          <styled.BtnContainer center>
            <styled.OthersBtn onClick={onTrialClick}>
              <styled.UserIcon />
              Use our trial account!
            </styled.OthersBtn>
          </styled.BtnContainer>
        )}
      </styled.SubForm>
    </styled.FormWrapper>
  );
}
