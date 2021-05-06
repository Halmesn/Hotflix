import * as styled from './styles';

import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
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
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <styled.Label htmlFor="password">Password</styled.Label>
          </styled.InputField>
          <styled.ActionButton>Sign up</styled.ActionButton>
        </styled.Form>
      </styled.MainForm>

      <styled.SubForm>
        <styled.SubTitle>
          Already a user? <span>Sign in now.</span>
        </styled.SubTitle>
        <styled.SubTitle center>Or sign up with</styled.SubTitle>
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
