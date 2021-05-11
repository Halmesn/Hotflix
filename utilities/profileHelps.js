export const resetProfilePage = (profile, setProfileState) => {
  if (!profile || profile.length === 0) {
    setProfileState('empty');
    return;
  }
  if (profile) {
    setProfileState('manage');
  }
};

const profileArray = [{ name: '', avatar: '' }];

const profile = {
  userEmail: [{ name: '', avatar: '' }],
  userEmail2: [
    { name: '', avatar: '' },
    { name: '', avatar: '' },
  ],
};
