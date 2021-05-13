import * as styled from './styles';

import UserMenu from './UserMenu';
import { UserState } from 'components/layout/Layout';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Navbar() {
  const router = useRouter();
  const url = router.pathname;
  const href = url === '/account' ? '/' : '#';
  const { selectedProfile } = useContext(UserState);

  return (
    <styled.Nav>
      <Link href={href}>
        <a>
          <styled.Logo url={url}>
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
      {url === '/browse' && selectedProfile && (
        <UserMenu selectedProfile={selectedProfile} />
      )}
      {url === '/' && <styled.SignIn href="/account">Sign in</styled.SignIn>}
    </styled.Nav>
  );
}
