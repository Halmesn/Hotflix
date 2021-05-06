import * as Styled from './styles';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AuthForm() {
  return (
    <Styled.FormWrapper>
      <SignUp />
    </Styled.FormWrapper>
  );
}
