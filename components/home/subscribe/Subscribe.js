import * as styled from './styles';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Subscribe() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/account',
      query: { email: inputValue },
    });
  };

  return (
    <styled.Subscribe onSubmit={onFormSubmit}>
      <styled.Title>
        Ready to watch Nextflix? Enter your email and try it out today!
      </styled.Title>
      <styled.Wrapper>
        <styled.InputField>
          <styled.Input
            type="email"
            id="email"
            autoComplete="email"
            minLength="5"
            required
            value={inputValue}
            onChange={onInputChange}
          />
          <styled.Label htmlFor="email">Email address</styled.Label>
          {/* <styled.Error>{null}</styled.Error> */}
        </styled.InputField>
        <styled.SubmitBtn>
          Get Started
          <styled.RightArrow />
        </styled.SubmitBtn>
      </styled.Wrapper>
    </styled.Subscribe>
  );
}
