import Profile from './Profile';
import Content from './Content';

import { ProfileContext } from 'components/layout/Layout';
import {
  createAccount,
  updateAccount,
  getLocalAccounts,
} from 'helpers/profileHelps';

import { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/client';

export default function Nextflix() {
  const [session, loading] = useSession();
  const [profile, setProfile] = useState();
  const [falseLoading, setFalseLoading] = useState(false);
  const { selectedProfile, setSelectedProfile } = useContext(ProfileContext);

  const userEmail = session.user.email;

  useEffect(() => {
    const localAccounts = getLocalAccounts();

    const profiles =
      localAccounts.find(({ email }) => email === userEmail)?.profiles || [];

    const userSelectedProfile = localAccounts.find(
      ({ email }) => email === userEmail
    )?.selectedProfile;

    setProfile(profiles);
    setSelectedProfile(userSelectedProfile);
  }, []);

  useEffect(() => {
    const localAccounts = getLocalAccounts();

    if (profile?.length === 0) {
      createAccount(profile, localAccounts, userEmail);
      return;
    }

    updateAccount(profile, localAccounts, userEmail, selectedProfile);
  }, [profile, selectedProfile]);

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
    <Content />
  ) : (
    profile !== undefined && (
      <Profile
        profile={profile}
        setProfile={setProfile}
        setSelectedProfile={setSelectedProfile}
        userEmail={userEmail}
      />
    )
  );
}
