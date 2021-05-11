export const createAccount = (profile, accounts, userEmail) => {
  const newUser = {};
  newUser.email = userEmail;
  newUser.profiles = profile;
  const newAccounts = [...accounts, newUser];
  if (accounts.some(({ email }) => email === userEmail)) return;
  localStorage.setItem('nextflix-accounts', JSON.stringify(newAccounts));
};

export const updateAccount = (profile, accounts, userEmail) => {
  const accountToBeUpdated = accounts.find(({ email }) => email === userEmail);
  if (!accountToBeUpdated) return;
  accountToBeUpdated.profiles = profile;
  localStorage.setItem('nextflix-accounts', JSON.stringify(accounts));
};

export const getLocalAccounts = () => {
  return JSON.parse(window.localStorage.getItem('nextflix-accounts')) || [];
};

export const resetProfilePage = (profile, setProfileState) => {
  if (!profile || profile.length === 0) {
    setProfileState('empty');
    return;
  } else {
    setProfileState('manage');
  }
};
