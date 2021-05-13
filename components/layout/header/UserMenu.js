import * as styled from './styles';

import Image from 'next/image';

export default function UserMenu({ selectedProfile }) {
  const { avatar, name } = selectedProfile;
  return (
    <styled.Menu>
      <Image src={avatar} alt={`${name}'s avatar`} width={36} height={36} />
      <styled.Dropdown className="dropdown">
        <styled.DropdownOptions>
          <Image src={avatar} alt={`${name}'s avatar`} width={36} height={36} />
          {name}
        </styled.DropdownOptions>
        <styled.DropdownOptions className="text">
          Manage Profiles
        </styled.DropdownOptions>
        <styled.DropdownOptions className="text">
          Sign out of Nextflix
        </styled.DropdownOptions>
      </styled.Dropdown>
    </styled.Menu>
  );
}
