import Footer from './footer/Footer';
import Header from './header/Header';

import {
  createAccount,
  updateAccount,
  clearAccount,
  getLocalAccounts,
} from 'helpers/profileHelpers';

import useWindowWidth from 'hooks/useWindowWidth';
import useDebounceInput from 'hooks/useDebounceInput';

import { useState, createContext, useEffect } from 'react';
import { useSession } from 'next-auth/client';

export const ProfileContext = createContext();

export default function Layout({ children }) {
  const [session] = useSession();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profile, setProfile] = useState();
  const [category, setCategory] = useState('TVShows');
  const [searchResults, setSearchResults] = useState(null);
  const [searchInput, setSearchInput, debounceInput] = useDebounceInput();
  const windowWidth = useWindowWidth();

  const userEmail = session?.user.email;

  const providerValue = {
    profile,
    setProfile,
    windowWidth,
    selectedProfile,
    setSelectedProfile,
    category,
    setCategory,
    userEmail,
    searchResults,
    setSearchResults,
    searchInput,
    setSearchInput,
    debounceInput,
  };

  useEffect(() => setCategory('TVShows'), [selectedProfile]);

  useEffect(() => setSearchInput(''), [selectedProfile, category]);

  //get or remove user's profile details from localStorage
  useEffect(() => {
    const localAccounts = getLocalAccounts();
    if (!session) {
      clearAccount(localAccounts);
      return;
    }

    const profiles =
      localAccounts.find(({ email }) => email === userEmail)?.profiles || [];

    const userSelectedProfile = localAccounts.find(
      ({ email }) => email === userEmail
    )?.selectedProfile;

    setProfile(profiles);
    setSelectedProfile(userSelectedProfile);
  }, [session]);

  // create or update user's profile in localStorage
  useEffect(() => {
    if (!session) return;
    const localAccounts = getLocalAccounts();

    if (profile?.length === 0) {
      createAccount(profile, localAccounts, userEmail);
      return;
    }

    updateAccount(profile, localAccounts, userEmail, selectedProfile);
  }, [profile, selectedProfile, session]);

  return (
    <ProfileContext.Provider value={providerValue}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ProfileContext.Provider>
  );
}
