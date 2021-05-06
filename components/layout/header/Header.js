import * as styled from './styles';

import Navbar from './Navbar';

import { useState, useEffect } from 'react';

export default function Header() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <styled.Header showBackground={showBackground}>
      <Navbar />
    </styled.Header>
  );
}
