import * as styled from './styles';

import { ProfileContext } from 'components/layout/Layout';

import { useContext } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/client';

export default function UserMenu() {
  const { selectedProfile, setSelectedProfile, profile, windowWidth } =
    useContext(ProfileContext);
  const { avatar: profileAvatar, name: profileName } = selectedProfile;

  return (
    <styled.Wrapper className="menu">
      <styled.Menu className="button">
        <Image
          src={profileAvatar}
          alt={`${profileName}'s avatar`}
          width={windowWidth < 600 ? 28 : 32}
          height={windowWidth < 600 ? 28 : 32}
        />
        <styled.Dropdown className="dropdown">
          {profile.map(({ name, avatar }) => (
            <styled.DropdownOptions
              key={name}
              onClick={() =>
                name !== profileName && setSelectedProfile({ name, avatar })
              }
            >
              <styled.Wrapper className="image">
                <Image
                  src={avatar}
                  alt={`${name}'s avatar`}
                  width={windowWidth < 600 ? 28 : 32}
                  height={windowWidth < 600 ? 28 : 32}
                />
              </styled.Wrapper>
              {name}
            </styled.DropdownOptions>
          ))}
          <styled.DropdownOptions
            className="text"
            onClick={() => setSelectedProfile(null)}
          >
            Manage Profiles
          </styled.DropdownOptions>
          <styled.DropdownOptions className="text" onClick={() => signOut()}>
            Sign out of Hotflix
          </styled.DropdownOptions>
        </styled.Dropdown>
        <styled.Caret className="caret"></styled.Caret>
      </styled.Menu>
    </styled.Wrapper>
  );
}
