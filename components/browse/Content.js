import Profile from './Profile';
import Billboard from './Billboard';
import { UserState } from 'components/layout/Layout';

import { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/client';

export default function Content() {
  const [session, loading] = useSession();
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
    if (typeof window === 'undefined' || !session.user.email) return;
    const localAccounts = JSON.parse(window.localStorage.getItem('accounts'));
    const profile = localAccounts?.find(
      (account) => account.email === session.user.email
    );
    if (!profile) return;
    setProfile(profile);
  }, []);

  return currentUser ? (
    <Billboard />
  ) : (
    <Profile profile={profile} setProfile={setProfile} />
  );
}
