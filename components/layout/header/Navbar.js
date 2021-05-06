import * as styled from './styles';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const url = router.pathname;
  const href = url === '/account' ? '/' : '#';

  return (
    <styled.Nav>
      <Link href={href}>
        <a>
          <styled.Logo>
            <Image
              src="/images/misc/logo.png"
              alt="Nextflix logo"
              width={200}
              height={65}
              layout="responsive"
            />
          </styled.Logo>
        </a>
      </Link>
      {url === '/' && <styled.SignIn href="/account">Sign in</styled.SignIn>}
    </styled.Nav>
  );
}
