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
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <styled.MainForm onSubmit={onFormSubmit}>
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
        <styled.SubTitle center>Don't want to be bothered?</styled.SubTitle>
        <styled.BtnContainer center>
          <styled.OthersBtn onClick={onTrialClick}>
            <styled.UserIcon />
            Use our trial account!
          </styled.OthersBtn>
        </styled.BtnContainer>
      </styled.SubForm>
    </>
  );
}
