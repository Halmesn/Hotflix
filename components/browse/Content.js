import Profile from './Profile';
import Billboard from './Billboard';
import { UserState } from 'components/layout/Layout';

import { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/client';

export default function Content() {
  const [session, loading] = useSession();
  const userEmail = session.user.email;
  const [profile, setProfile] = useState([]);
  const [falseLoading, setFalseLoading] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserState);

  useEffect(() => {
    setFalseLoading(true);
    setTimeout(() => {
      setFalseLoading(false);
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [currentUser]);

  useEffect(() => {
    const accountsArray =
      JSON.parse(window.localStorage.getItem('nextflix-accounts')) || [];

    if (profile.length === 0) {
      const newUser = {};
      newUser.email = userEmail;
      newUser.profiles = profile;
      const newAccountsArray = [...accountsArray, newUser];
      if (accountsArray.some((account) => account.email === userEmail)) return;
      localStorage.setItem(
        'nextflix-accounts',
        JSON.stringify(newAccountsArray)
      );
      return;
    }

    const userToBeUpdated = accountsArray.find(
      (account) => account.email === userEmail
    );
    if (userToBeUpdated) {
      console.log(profile);
      userToBeUpdated.profiles = profile;
    }
    localStorage.setItem('nextflix-accounts', JSON.stringify(accountsArray));
  }, [profile]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const localAccounts = JSON.parse(
      window.localStorage.getItem('nextflix-accounts')
    );
    const profile = localAccounts?.find(
      (account) => account.email === session.user.email
    )?.profiles;
    if (!profile) return;
    setProfile(profile);
  }, []);

  return currentUser ? (
    <Billboard />
  ) : (
    <Profile profile={profile} setProfile={setProfile} userEmail={userEmail} />
  );
}
