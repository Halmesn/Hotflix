import * as styled from './styles';

import { FormContext } from './AuthForm';

import { useContext } from 'react';

export default function SignUp() {
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
        <styled.Title>Sign up</styled.Title>
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
          <styled.ActionButton>Sign up</styled.ActionButton>
        </styled.Form>
      </styled.MainForm>

      <styled.SubForm>
        <styled.SubTitle>
          Already a user?{' '}
          <span
            onClick={() => {
              setMode('signin');
            }}
          >
            Sign in now.
          </span>
        </styled.SubTitle>
      </styled.SubForm>
    </>
  );
}
