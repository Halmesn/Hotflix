import Footer from './footer/Footer';
import Header from './header/Header';

import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;

  return (
    <>
      <Header />
      <main>{children}</main>
      {url === '/signup' || url === '/signin' || <Footer />}
    </>
  );
}
