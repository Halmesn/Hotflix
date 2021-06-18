import * as styled from './styles';

import UserMenu from './UserMenu';
import Search from './Search';
import { ProfileContext } from 'components/layout/Layout';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

export default function Navbar({ url }) {
  const href = url === '/account' ? '/' : '#';
  const { selectedProfile, setSelectedProfile, category, setCategory } =
    useContext(ProfileContext);

  return (
    <styled.Nav url={url}>
      <styled.Wrapper className="primary-nav">
        <Link href={href}>
          <a>
            <styled.Logo url={url}>
              <Image
                src="/images/misc/logo.png"
                alt="Hotflix logo"
                width={200}
                height={65}
                layout="responsive"
              />
            </styled.Logo>
          </a>
        </Link>
        {url === '/browse' && selectedProfile && (
          <styled.Category category={category}>
            <li onClick={() => setCategory('TVShows')}>TV Shows</li>
            <li onClick={() => setCategory('movies')}>Movies</li>
          </styled.Category>
        )}
      </styled.Wrapper>
      {url === '/browse' && selectedProfile && (
        <styled.Wrapper className="secondary-nav">
          <Search />
          <UserMenu
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
          />
        </styled.Wrapper>
      )}

      {url === '/' && <styled.SignIn href="/account">Sign in</styled.SignIn>}
    </styled.Nav>
  );
}
