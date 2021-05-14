import * as styled from './styles';

import { useState, useRef, useEffect } from 'react';

export default function Search() {
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) =>
      (searchRef.current && searchRef.current.contains(e.target)) ||
      setIsActive(false);

    document.body.addEventListener('click', onBodyClick);

    return () => document.body.removeEventListener('click', onBodyClick);
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
