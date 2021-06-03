/**
 * create an account object in localStorage
 *
 * @param {Array} profile - an array contains user name and avatar
 * @param {Array} accounts - an array contains accounts that has been signed in
 * @param {String} userEmail - a string coming from Next-auth
 */
export const createAccount = (profile, accounts, userEmail) => {
  const newUser = { selectedProfile: null };
  newUser.email = userEmail;
  newUser.profiles = profile;
  const newAccounts = [...accounts, newUser];
  if (accounts.some(({ email }) => email === userEmail)) return;
  localStorage.setItem('hotflix-accounts', JSON.stringify(newAccounts));
};

/**
 * update an account info after user chooses profile
 *
 * @param {Array} profile - an array contains objects of user name and avatar
 * @param {Array} accounts - an array contains accounts that has been signed in
 * @param {Object} selectedProfile - an object contains user name and avatar
 * @param {String} userEmail - a string coming from Next-auth
 */
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
  localStorage.setItem('hotflix-accounts', JSON.stringify(accounts));
};

/**
 * update an account info after user signs out.
 *
 * @param {Array} accounts - an array contains accounts that has been signed in
 */
export const clearAccount = (accounts) => {
  accounts.forEach((account) => {
    account.selectedProfile = null;
  });
  localStorage.setItem('hotflix-accounts', JSON.stringify(accounts));
};

export const getLocalAccounts = () =>
  JSON.parse(window.localStorage.getItem('hotflix-accounts')) || [];

/**
 * A condition check to update profile state for better user experience
 *
 * @param {Array} profile - an array contains objects of user name and avatar
 * @param {Function} setProfileState - a function to update profile state
 */
export const resetProfilePage = (profile, setProfileState) => {
  if (!profile || profile.length === 0) {
    setProfileState('empty');
    return;
  } else {
    setProfileState('manage');
  }
};
