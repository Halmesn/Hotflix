export const resetProfilePage = (profile, setProfileState) => {
  if (!profile || profile.length === 0) {
    setProfileState('empty');
    return;
  }
  if (profile) setProfileState('normal');
};
