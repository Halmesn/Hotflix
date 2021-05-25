import * as styled from './profileStyles';

import { ProfileContext } from 'components/layout/Layout';
import { updateAccount, getLocalAccounts } from 'helpers/profileHelpers';

import { useState, useContext } from 'react';
import Image from 'next/image';

export default function Profile() {
  const { profile, setProfile, setSelectedProfile, userEmail } =
    useContext(ProfileContext);

  const [profileState, setProfileState] = useState(
    !profile || profile.length === 0 ? 'empty' : 'normal'
  );
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [displayName, setDisplayName] = useState('');

  // helper functions, I didn't abstract them because some of them will take heaps of props.

  const isNameExisting = () => {
    switch (profileState) {
      case 'add':
        return profile.some(({ name }) => name === displayName);

      case 'edit':
        return profile
          .filter(({ name }) => name !== editingUser)
          .some(({ name }) => name === displayName);
    }
  };

  const resetProfile = (state, clearEditingUser = false) => {
    setSelectedAvatar(null);
    setDisplayName('');
    setProfileState(state);
    clearEditingUser && setEditingUser(null);
  };

  const updateProfile = (operation) => {
    const profileCopy = [...profile];
    const index = profileCopy.findIndex(({ name }) => name === editingUser);

    switch (operation) {
      case 'update':
        profileCopy[index].name = displayName;
        profileCopy[index].avatar = selectedAvatar || profileCopy[index].avatar;
        return profileCopy;

      case 'delete':
        profileCopy.splice(index, 1);
        return profileCopy;
    }
  };

  // button clicks

  const onSaveClick = () => {
    switch (profileState) {
      case 'add':
        const addedProfile = [
          ...profile,
          {
            name: displayName,
            avatar: selectedAvatar || '/images/avatars/placeholder.png',
          },
        ];
        setProfile(addedProfile);
        resetProfile('normal');
        return;

      case 'edit':
        const updatedProfile = updateProfile('update');
        const state = !profile || profile.length === 0 ? 'empty' : 'manage';

        setProfile(updatedProfile);
        resetProfile(state, true);
    }
  };

  const onCancelClick = () => {
    const state = !profile || profile.length === 0 ? 'empty' : 'manage';

    switch (profileState) {
      case 'add':
        resetProfile(state);

      case 'edit':
        resetProfile(state, true);
    }
  };

  const onDeleteClick = () => {
    const updatedProfile = updateProfile('delete');
    setProfile(updatedProfile);

    const localAccounts = getLocalAccounts();
    updateAccount(updatedProfile, localAccounts, userEmail);

    const state =
      !updatedProfile || updatedProfile.length === 0 ? 'empty' : 'manage';

    resetProfile(state, true);
  };

  const onAvatarClick = (avatar, name) => {
    switch (profileState) {
      case 'avatar':
        setSelectedAvatar(avatar);
        if (!editingUser) setProfileState('add');
        else setProfileState('edit');
        return;

      case 'normal':
        setSelectedProfile({ name, avatar });
        return;
    }
  };

  // render functions

  const renderAvatars = () => {
    const avatars = [];
    const avatarUsed = profile.map(({ avatar }) => avatar);
    for (let count = 1; count <= 11; count++) {
      const src = `/images/avatars/Avatar_${
        count < 10 ? '0' + count : count
      }.png`;
      const isAvatarUsed = avatarUsed.find((item) => item === src) && 'used';
      avatars.push(
        <styled.AvatarItem key={`${src}_grid`}>
          <Image
            src={src}
            alt="hotflix avatar"
            width={200}
            height={200}
            className={`avatar ${isAvatarUsed}`}
            onClick={() => onAvatarClick(src)}
          />
        </styled.AvatarItem>
      );
    }
    return avatars;
  };

  const renderError = () => {
    const errorMessage =
      (isNameExisting() && 'This name is already taken. Please try again.') ||
      (profileState === 'add' &&
        !selectedAvatar &&
        'Please choose a unique avatar.') ||
      null;
    return (
      errorMessage && <styled.InputError>{errorMessage}</styled.InputError>
    );
  };

  const renderOperation = () => {
    return (
      <styled.Container>
        <styled.Title>{`${
          profileState === 'add' ? 'Add' : 'Edit'
        } Profile`}</styled.Title>
        <styled.Wrapper
          onClick={() => setProfileState('avatar')}
          className="edit-profile"
        >
          <Image
            src={
              selectedAvatar ||
              (profileState === 'add'
                ? '/images/avatars/placeholder.png'
                : profile.find(({ name }) => name === editingUser).avatar)
            }
            alt="avatar image"
            width={250}
            height={250}
          />
          <styled.EditIcon />
        </styled.Wrapper>
        <styled.NameInput
          value={displayName}
          onChange={({ target }) => setDisplayName(target.value)}
          placeholder="Display Name"
        />
        {renderError()}
        <styled.Wrapper className="buttons">
          <styled.ActionButton
            white
            disabled={
              displayName === '' ||
              isNameExisting() ||
              (profileState === 'add' && !selectedAvatar)
            }
            onClick={() => onSaveClick()}
          >
            SAVE
          </styled.ActionButton>
          <styled.ActionButton onClick={() => onCancelClick()}>
            CANCEL
          </styled.ActionButton>
          {profileState === 'edit' && (
            <styled.ActionButton onClick={() => setProfileState('delete')}>
              DELETE PROFILE
            </styled.ActionButton>
          )}
        </styled.Wrapper>
      </styled.Container>
    );
  };

  const renderContent = () => {
    switch (profileState) {
      case 'empty':
        return (
          <styled.Container>
            <styled.Title>Add a new profile to start</styled.Title>
            <styled.Wrapper>
              <styled.Wrapper
                onClick={() => setProfileState('add')}
                className="placeholder"
              >
                <styled.Placeholder empty />
                <styled.Description>Add profile</styled.Description>
                <styled.AddIcon />
              </styled.Wrapper>
            </styled.Wrapper>
          </styled.Container>
        );

      case 'normal':
        return (
          <styled.Container>
            <styled.Title>Who's watching?</styled.Title>
            <styled.Wrapper className="profile-grid">
              {profile.map(({ name, avatar }) => (
                <styled.Wrapper className="placeholder" key={avatar}>
                  <styled.Placeholder
                    url={avatar}
                    className="light"
                    onClick={() => onAvatarClick(avatar, name)}
                  />
                  <styled.Description>{name}</styled.Description>
                </styled.Wrapper>
              ))}
            </styled.Wrapper>
            <styled.ActionButton onClick={() => setProfileState('manage')}>
              MANAGE PROFILES
            </styled.ActionButton>
          </styled.Container>
        );

      case 'add':
      case 'edit':
        return renderOperation();

      case 'avatar':
        return (
          <styled.Container>
            <styled.Wrapper>
              <styled.AvatarHeader>
                <styled.Wrapper className="flex">
                  <styled.Wrapper
                    className="arrow"
                    onClick={() => {
                      if (!editingUser) setProfileState('add');
                      else setProfileState('edit');
                    }}
                  >
                    <styled.LeftArrow />
                  </styled.Wrapper>
                  <styled.Wrapper className="text">
                    <h1>Edit Profile</h1>
                    <p>Choose a profile icon.</p>
                  </styled.Wrapper>
                </styled.Wrapper>
                {editingUser && (
                  <styled.Wrapper className="flex">
                    <p>{editingUser}</p>
                    <Image
                      src={
                        profile.find(({ name }) => name === editingUser).avatar
                      }
                      alt="avatar image"
                      width={60}
                      height={60}
                    />
                  </styled.Wrapper>
                )}
              </styled.AvatarHeader>
              <styled.AvatarGrid>{renderAvatars()}</styled.AvatarGrid>
            </styled.Wrapper>
          </styled.Container>
        );

      case 'manage':
        return (
          <styled.Container>
            <styled.Title>Manage Profiles:</styled.Title>
            <styled.Wrapper className="profile-grid">
              {profile.map(({ name, avatar }) => (
                <styled.Wrapper
                  className="placeholder"
                  key={avatar}
                  onClick={() => {
                    setEditingUser(name);
                    setDisplayName(name);
                    setProfileState('edit');
                  }}
                >
                  <styled.Placeholder url={avatar} />
                  <styled.Description>{name}</styled.Description>
                  <styled.EditIcon />
                </styled.Wrapper>
              ))}
              {profile.length < 5 && (
                <styled.Wrapper
                  onClick={() => setProfileState('add')}
                  className="placeholder"
                >
                  <styled.Placeholder />
                  <styled.Description>Add profile</styled.Description>
                  <styled.AddIcon />
                </styled.Wrapper>
              )}
            </styled.Wrapper>
            <styled.ActionButton
              white
              onClick={() => setProfileState('normal')}
            >
              DONE
            </styled.ActionButton>
          </styled.Container>
        );

      case 'delete':
        return (
          <styled.Container>
            <styled.Wrapper className="delete">
              <styled.Title>Confirm Deletion</styled.Title>
              <p>
                Are you sure you want to delete this profile? You will not be
                able to revert this process.
              </p>
            </styled.Wrapper>
            <styled.Wrapper>
              <styled.ActionButton white onClick={() => onDeleteClick()}>
                YES
              </styled.ActionButton>
              <styled.ActionButton onClick={() => setProfileState('edit')}>
                CANCEL
              </styled.ActionButton>
            </styled.Wrapper>
          </styled.Container>
        );
    }
  };

  return <styled.Profile>{renderContent()}</styled.Profile>;
}
