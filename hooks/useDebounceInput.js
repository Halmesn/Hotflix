import { useState, useEffect } from 'react';

export default function useDebounceInput() {
  const [searchInput, setSearchInput] = useState('');
  const [debounceInput, setDebounceInput] = useState(searchInput);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceInput(searchInput), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  return [searchInput, setSearchInput, debounceInput];
}
