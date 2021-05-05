import * as styled from './SubscribeStyles';

import { RightArrow } from 'components/icons/SubscribeIcon';

export default function Subscribe() {
  return (
    <styled.Subscribe>
      <styled.Title>
        Ready to watch Nextflix? Enter your email or use{' '}
        <span>trial account</span> to start today!
      </styled.Title>
      <styled.Wrapper>
        <styled.InputField>
          <styled.Input
            type="email"
            id="email"
            autoComplete="email"
            minLength="5"
            required
          />
          <styled.Label htmlFor="email">Email address</styled.Label>
          <styled.Error>{null}</styled.Error>
        </styled.InputField>
        <styled.SubmitBtn>
          Get Started
          <RightArrow />
        </styled.SubmitBtn>
      </styled.Wrapper>
    </styled.Subscribe>
  );
}
