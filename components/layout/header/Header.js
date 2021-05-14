import * as styled from './styles';

import Navbar from './Navbar';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const url = router.pathname;

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) setShowBackground(true);
      else setShowBackground(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <styled.Header showBackground={showBackground} url={url}>
      <Navbar />
    </styled.Header>
  );
}
