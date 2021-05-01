import { GlobalStyles } from 'styles/GlobalStyle';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
