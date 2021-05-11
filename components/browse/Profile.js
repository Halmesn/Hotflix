import * as styled from './styles';

import { resetProfilePage } from 'utilities/profileHelps';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Profile({ profile, setProfile }) {
  const [profileState, setProfileState] = useState(() =>
    !profile || profile.length === 0 ? 'empty' : 'normal'
  );
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isManaging, setIsManaging] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const renderAvatars = () => {
    const avatars = [];
    for (let count = 1; count <= 11; count++) {
      const src = `/images/avatars/Avatar_${
        count < 10 ? '0' + count : count
      }.png`;
      avatars.push(
        <styled.AvatarItem key={`${src}_grid`}>
          <Image
            src={src}
            alt="nextflix avatar"
            width={200}
            height={200}
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
          <styled.Title>Edit Profile</styled.Title>
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
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder="Display Name"
          />
          <styled.Wrapper>
            <styled.ActionButton
              white
              disabled={inputValue === ''}
              onClick={() => {
                setProfile([
                  ...profile,
                  {
                    name: inputValue,
                    avatar: selectedAvatar || '/images/avatars/placeholder.png',
                  },
                ]);
                setSelectedAvatar(null);
                setInputValue('');
                setProfileState('normal');
              }}
            >
              SAVE
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                resetProfilePage(profile, setProfileState);
                setSelectedAvatar(null);
                setInputValue('');
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
          <styled.ActionButton onClick={() => setProfileState('manage')}>
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
              <styled.Wrapper className="flex"></styled.Wrapper>
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
              <styled.Wrapper className="placeholder" key={item.avatar}>
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
          <styled.ActionButton onClick={() => setProfileState('normal')}>
            DONE
          </styled.ActionButton>
        </styled.Container>
      );
    }

    if (profileState === 'edit') {
      return <div>delete!</div>;
    }

    if (profileState === 'delete') {
      return <div>delete!</div>;
    }
  };

  return <styled.Profile>{renderContent()}</styled.Profile>;
}
