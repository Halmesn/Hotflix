import Footer from './footer/Footer';
import Header from './header/Header';

import { useState, createContext } from 'react';

export const UserState = createContext();

export default function Layout({ children }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <UserState.Provider value={{ selectedProfile, setSelectedProfile }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </UserState.Provider>
  );
}
