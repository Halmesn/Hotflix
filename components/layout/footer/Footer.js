import * as styled from './styles';

import FooterContent from './FooterContent';

import { UserState } from 'components/layout/Layout';

import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Footer() {
  const router = useRouter();
  const url = router.pathname;
  const { currentUser } = useContext(UserState);

  return (
    <styled.Footer url={url} currentUser={currentUser}>
      <FooterContent />
    </styled.Footer>
  );
}
