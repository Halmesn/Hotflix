import * as styled from './styles';

import FooterContent from './FooterContent';

import { ProfileContext } from 'components/layout/Layout';

import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Footer() {
  const router = useRouter();
  const url = router.pathname;
  const { selectedProfile } = useContext(ProfileContext);

  return (
    <styled.Footer url={url} selectedProfile={selectedProfile}>
      <FooterContent />
    </styled.Footer>
  );
}
