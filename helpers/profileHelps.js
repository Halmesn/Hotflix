export const createAccount = (profile, accounts, userEmail) => {
  const newUser = { selectedProfile: null };
  newUser.email = userEmail;
  newUser.profiles = profile;
  const newAccounts = [...accounts, newUser];
  if (accounts.some(({ email }) => email === userEmail)) return;
  localStorage.setItem('nextflix-accounts', JSON.stringify(newAccounts));
};

export const updateAccount = (
  profile,
  accounts,
  userEmail,
  selectedProfile
) => {
  const accountToBeUpdated = accounts.find(({ email }) => email === userEmail);
  if (!accountToBeUpdated) return;
  accountToBeUpdated.profiles = profile;
  accountToBeUpdated.selectedProfile = selectedProfile;
  localStorage.setItem('nextflix-accounts', JSON.stringify(accounts));
};

export const clearAccount = (accounts) => {
  accounts.forEach((account) => {
    account.selectedProfile = null;
  });
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
