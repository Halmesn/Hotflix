import * as styled from './styles';

import UserMenu from './UserMenu';
import Search from './Search';
import { ProfileContext } from 'components/layout/Layout';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';

export default function Navbar() {
  const router = useRouter();
  const url = router.pathname;
  const href = url === '/account' ? '/' : '#';
  const { selectedProfile, setSelectedProfile } = useContext(ProfileContext);
  const [activeCategory, setActiveCategory] = useState('TV');

  const onCategoryClick = (category) => setActiveCategory(category);

  return (
    <styled.Nav>
      <styled.Wrapper className="primary-nav">
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
          <styled.Category activeCategory={activeCategory}>
            <li onClick={() => onCategoryClick('TV')}>TV Shows</li>
            <li onClick={() => onCategoryClick('movie')}>Movies</li>
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
