import * as styled from './searchResultsStyles';
import Card from './Card';
import { BackIcon } from './playerStyles';

import { ProfileContext } from 'components/layout/Layout';
import { useContext } from 'react';

import { isMobile } from 'react-device-detect';

export default function SearchResults() {
  const { searchResults, setSearchResults, setSearchInput } =
    useContext(ProfileContext);

  return (
    <styled.SearchResults>
      <styled.BackButton
        onClick={() => {
          setSearchResults(null);
          setSearchInput('');
        }}
      >
        <BackIcon />
      </styled.BackButton>
      {searchResults.length > 0 ? (
        <styled.Row className="normal" dragging={false} isMobile={isMobile}>
          {searchResults.map((result) => (
            <Card
              key={result.id}
              item={result}
              dragging={false}
              isMobile={isMobile}
              section={null}
              mouseDown={false}
            />
          ))}
        </styled.Row>
      ) : (
        <styled.NoMatch>
          <p>Your search did not have any matches.</p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords.</li>
            <li>Looking for a movie? Be sure to have movie tab selected</li>
            <li>Select TV shows if otherwise</li>
          </ul>
        </styled.NoMatch>
      )}
    </styled.SearchResults>
  );
}
