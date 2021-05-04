import Footer from './footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
