import Footer from './footer/Footer';
import Header from './header/Header';

import { useState, createContext } from 'react';

export const ProfileContext = createContext();

export default function Layout({ children }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ProfileContext.Provider>
  );
}
