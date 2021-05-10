import Footer from './footer/Footer';
import Header from './header/Header';

import { useState, createContext } from 'react';

export const UserState = createContext();

export default function Layout({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserState.Provider value={{ currentUser, setCurrentUser }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </UserState.Provider>
  );
}
