import Profile from './Profile';
import Billboard from './Billboard';

import { UserState } from 'components/layout/Layout';
import {
  createAccount,
  updateAccount,
  getLocalAccounts,
} from 'utilities/profileHelps';

import { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/client';

export default function Content() {
  const [session, loading] = useSession();
  const [profile, setProfile] = useState([]);
  const [falseLoading, setFalseLoading] = useState(false);
  const { selectedProfile, setSelectedProfile } = useContext(UserState);

  const userEmail = session.user.email;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const localAccounts = getLocalAccounts();

    const profiles = localAccounts.find(({ email }) => email === userEmail)
      ?.profiles;

    if (!profiles) return;
    setProfile(profiles);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const localAccounts = getLocalAccounts();

    if (profile.length === 0) {
      createAccount(profile, localAccounts, userEmail);
      return;
    }

    updateAccount(profile, localAccounts, userEmail);
  }, [profile]);

  useEffect(() => {
    setFalseLoading(true);
    setTimeout(() => {
      setFalseLoading(false);
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [selectedProfile]);

  return selectedProfile ? (
    <Billboard />
  ) : (
    <Profile profile={profile} setProfile={setProfile} userEmail={userEmail} />
  );
}
