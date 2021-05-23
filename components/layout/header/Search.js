import * as styled from './styles';

import { getSearchResults as fetchSearchResults } from 'helpers/browseHelpers';

import { ProfileContext } from 'components/layout/Layout';

import { useState, useRef, useEffect, useContext } from 'react';

export default function Search({ category }) {
  const { setSearchResults } = useContext(ProfileContext);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState('');
  const [debounceInput, setDebounceInput] = useState(input);

  const searchRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setDebounceInput(input), 1000);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const getSearchResults = async () => {
      const data = await fetchSearchResults(category, debounceInput);
      setSearchResults(data);
    };

    if (debounceInput) getSearchResults();
    else setSearchResults(null);
  }, [debounceInput]);

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
      <styled.Input
        placeholder="Movie or TV show titles"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </styled.Search>
  );
}
