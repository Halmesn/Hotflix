import * as styled from './styles';

import { getSearchResults as fetchSearchResults } from 'helpers/browseHelpers';

import { ProfileContext } from 'components/layout/Layout';

import { useState, useRef, useEffect, useContext } from 'react';

export default function Search() {
  const { setSearchResults, searchInput, setSearchInput, category } =
    useContext(ProfileContext);
  const [isActive, setIsActive] = useState(false);
  const [debounceInput, setDebounceInput] = useState(searchInput);

  const searchRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setDebounceInput(searchInput), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

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
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </styled.Search>
  );
}
