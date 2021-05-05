import * as styled from './HeaderStyles';

import Image from 'next/image';

export default function Navbar() {
  return (
    <styled.Nav>
      <styled.Logo>
        <Image
          src="/images/misc/logo.png"
          alt="Nextflix logo"
          width={180}
          height={60}
        />
      </styled.Logo>
      <styled.SignIn href="/login">Sign in</styled.SignIn>
    </styled.Nav>
  );
}
