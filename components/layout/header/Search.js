import * as styled from './styles';

import { useState, useRef, useEffect } from 'react';

export default function Search() {
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const onOutsideClick = (e) =>
      (searchRef.current && searchRef.current.contains(e.target)) ||
      setIsActive(false);

    document.addEventListener('click', onOutsideClick);

    return () => document.removeEventListener('click', onOutsideClick);
  }, []);

  return (
    <styled.Search className={`${isActive ? 'active' : ''}`} ref={searchRef}>
      <styled.Wrapper onClick={() => setIsActive(!isActive)}>
        <styled.SearchIcon />
      </styled.Wrapper>
      <styled.Input placeholder="Movie or TV show titles" />
    </styled.Search>
  );
}
