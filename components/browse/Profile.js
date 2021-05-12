import * as styled from './styles';

import { resetProfilePage } from 'utilities/profileHelps';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/client';

export default function Profile({ profile, setProfile, userEmail }) {
  const [profileState, setProfileState] = useState('empty');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setProfileState(!profile || profile.length === 0 ? 'empty' : 'normal');
  }, [profile]);

  const isNameExisting = profile.some(({ name }) => name === displayName);

  const nameStrictCheck = () => {
    const otherProfiles = profile.filter(({ name }) => name !== editingUser);
    return otherProfiles.some(({ name }) => name === displayName);
  };

  const renderAvatars = () => {
    const avatarUsed = profile.map((item) => item.avatar);
    const avatars = [];
    for (let count = 1; count <= 11; count++) {
      const src = `/images/avatars/Avatar_${
        count < 10 ? '0' + count : count
      }.png`;
      const className = avatarUsed.find((item) => item === src) ? 'used' : '';
      avatars.push(
        <styled.AvatarItem key={`${src}_grid`}>
          <Image
            src={src}
            alt="nextflix avatar"
            width={200}
            height={200}
            className={`avatar ${className}`}
            onClick={() => {
              setSelectedAvatar(src);
              if (!editingUser) {
                setProfileState('add');
              } else {
                setProfileState('edit');
              }
            }}
          />
        </styled.AvatarItem>
      );
    }
    return avatars;
  };

  const renderContent = () => {
    if (profileState === 'empty') {
      return (
        <styled.Container>
          <styled.Title>Add a new profile to start</styled.Title>
          <styled.Wrapper>
            <styled.Wrapper
              onClick={() => setProfileState('add')}
              className="placeholder"
            >
              <styled.Placeholder />
              <styled.Description>Add profile</styled.Description>
              <styled.AddIcon />
            </styled.Wrapper>
          </styled.Wrapper>
        </styled.Container>
      );
    }

    if (profileState === 'add') {
      return (
        <styled.Container>
          <styled.Title>Add Profile</styled.Title>
          <styled.Wrapper
            onClick={() => setProfileState('avatar')}
            className="edit-profile"
          >
            <Image
              src={
                selectedAvatar
                  ? selectedAvatar
                  : '/images/avatars/placeholder.png'
              }
              alt="avatar image"
              width={250}
              height={250}
            />
            <styled.EditIcon />
          </styled.Wrapper>
          <styled.Input
            value={displayName}
            onChange={({ target }) => setDisplayName(target.value)}
            placeholder="Display Name"
          />
          {isNameExisting && (
            <styled.InputError>
              This name is already taken. Please try again.
            </styled.InputError>
          )}
          {!selectedAvatar && (
            <styled.InputError>
              Please choose a unique avatar.
            </styled.InputError>
          )}
          <styled.Wrapper>
            <styled.ActionButton
              white
              disabled={displayName === '' || isNameExisting || !selectedAvatar}
              onClick={() => {
                setProfile([
                  ...profile,
                  {
                    name: displayName,
                    avatar: selectedAvatar || '/images/avatars/placeholder.png',
                  },
                ]);
                setSelectedAvatar(null);
                setDisplayName('');
                setProfileState('normal');
              }}
            >
              SAVE
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                resetProfilePage(profile, setProfileState);
                setSelectedAvatar(null);
                setDisplayName('');
              }}
            >
              CANCEL
            </styled.ActionButton>
          </styled.Wrapper>
        </styled.Container>
      );
    }

    if (profileState === 'normal') {
      return (
        <styled.Container>
          <styled.Title>Who's watching?</styled.Title>
          <styled.Wrapper className="profile-grid">
            {profile.map((item) => (
              <styled.Wrapper className="placeholder" key={item.avatar}>
                <styled.Placeholder url={item.avatar} className="light" />
                <styled.Description>{item.name}</styled.Description>
              </styled.Wrapper>
            ))}
          </styled.Wrapper>

          <styled.ActionButton
            onClick={() => {
              setProfileState('manage');
            }}
          >
            MANAGE PROFILES
          </styled.ActionButton>
        </styled.Container>
      );
    }

    if (profileState === 'avatar') {
      return (
        <styled.Container>
          <styled.Wrapper>
            <styled.AvatarHeader>
              <styled.Wrapper className="flex">
                <styled.Wrapper
                  className="arrow"
                  onClick={() => {
                    if (!editingUser) {
                      setProfileState('add');
                    } else {
                      setProfileState('edit');
                    }
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
    }

    if (profileState === 'manage') {
      return (
        <styled.Container>
          <styled.Title>Manage Profiles:</styled.Title>
          <styled.Wrapper className="profile-grid">
            {profile.map((item) => (
              <styled.Wrapper
                className="placeholder"
                key={item.avatar}
                onClick={() => {
                  setEditingUser(item.name);
                  setDisplayName(item.name);
                  setProfileState('edit');
                }}
              >
                <styled.Placeholder url={item.avatar} />
                <styled.Description>{item.name}</styled.Description>
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
          <styled.ActionButton white onClick={() => setProfileState('normal')}>
            DONE
          </styled.ActionButton>
        </styled.Container>
      );
    }

    if (profileState === 'edit') {
      return (
        <styled.Container>
          <styled.Title>Edit Profile</styled.Title>
          <styled.Wrapper
            onClick={() => setProfileState('avatar')}
            className="edit-profile"
          >
            <Image
              src={
                selectedAvatar
                  ? selectedAvatar
                  : profile.find((item) => item.name === editingUser).avatar
              }
              alt="avatar image"
              width={250}
              height={250}
            />
            <styled.EditIcon />
          </styled.Wrapper>
          <styled.Input
            value={displayName}
            onChange={({ target }) => setDisplayName(target.value)}
          />
          {nameStrictCheck() && (
            <styled.InputError>
              This name is already taken. Please try again.
            </styled.InputError>
          )}
          <styled.Wrapper>
            <styled.ActionButton
              white
              disabled={displayName === '' || nameStrictCheck()}
              onClick={() => {
                const profileCopy = [...profile];
                const index = profileCopy.findIndex(
                  (item) => item.name === editingUser
                );
                profileCopy[index].name = displayName;
                profileCopy[index].avatar =
                  selectedAvatar || profileCopy[index].avatar;
                setProfile(profileCopy);
                setSelectedAvatar(null);
                setEditingUser(null);
                setDisplayName('');
                setProfileState('manage');
              }}
            >
              SAVE
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                resetProfilePage(profile, setProfileState);
                setSelectedAvatar(null);
                setEditingUser(null);
                setDisplayName('');
              }}
            >
              CANCEL
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                setProfileState('delete');
              }}
            >
              DELETE PROFILE
            </styled.ActionButton>
          </styled.Wrapper>
        </styled.Container>
      );
    }

    if (profileState === 'delete') {
      return (
        <styled.Container>
          <styled.Wrapper className="delete">
            <styled.Title>Confirm Deletion</styled.Title>
            <p>
              Are you sure you want to delete this profile? You will not be able
              to revert this process.
            </p>
          </styled.Wrapper>
          <styled.Wrapper>
            <styled.ActionButton
              white
              onClick={() => {
                const profileCopy = [...profile];
                const index = profileCopy.findIndex(
                  (item) => item.name === editingUser
                );
                const accountsArray =
                  JSON.parse(
                    window.localStorage.getItem('nextflix-accounts')
                  ) || [];
                profileCopy.splice(index, 1);
                setEditingUser(null);
                setDisplayName('');
                setProfile(profileCopy);
                const userToBeUpdated = accountsArray.find(
                  (account) => account.email === userEmail
                );
                if (userToBeUpdated) {
                  userToBeUpdated.profiles = profileCopy;
                }
                localStorage.setItem(
                  'nextflix-accounts',
                  JSON.stringify(accountsArray)
                );
                resetProfilePage(profileCopy, setProfileState);
              }}
            >
              YES
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                setProfileState('edit');
              }}
            >
              CANCEL
            </styled.ActionButton>
          </styled.Wrapper>
        </styled.Container>
      );
    }
  };

  return <styled.Profile>{renderContent()}</styled.Profile>;
}
