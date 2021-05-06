import * as styled from './styles';

import { FormContext } from './AuthForm';

import { useContext } from 'react';

export default function SignIn() {
  const {
    enteredEmail,
    setEnteredEmail,
    enteredPassword,
    setEnteredPassword,
    setMode,
  } = useContext(FormContext);

  return (
    <>
      <styled.MainForm>
        <styled.Title>Sign in</styled.Title>
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
            />
            <styled.Label htmlFor="password">Password</styled.Label>
          </styled.InputField>
          <styled.ActionButton>Sign in</styled.ActionButton>
        </styled.Form>
      </styled.MainForm>

      <styled.SubForm>
        <styled.SubTitle>
          New to Nextflix?{' '}
          <span
            onClick={() => {
              setMode('signup');
            }}
          >
            Sign up now.
          </span>
        </styled.SubTitle>
        <styled.SubTitle center>Or sign in with</styled.SubTitle>
        <styled.Social>
          <styled.SocialBtn>
            <styled.FacebookIcon />
            Facebook
          </styled.SocialBtn>
          <styled.SocialBtn>
            <styled.GoogleIcon />
            Google
          </styled.SocialBtn>
        </styled.Social>
      </styled.SubForm>
    </>
  );
}
