import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

img {
  width: 100%;
  max-width: 100%;
  display: block;
  object-fit: cover;
}

a {
  text-decoration: none;
}
`;
