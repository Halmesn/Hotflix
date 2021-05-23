import * as styled from './searchResultsStyles';

export default function SearchResults({ searchResults }) {
  return (
    <style.SearchResults>
      {searchResults.length > 0 ? (
        <styled.Row>
          {searchResults.map((result) => (
            <styled.CardContainer key={result.id}></styled.CardContainer>
          ))}
        </styled.Row>
      ) : (
        <styled.NoMatch />
      )}
    </style.SearchResults>
  );
}
