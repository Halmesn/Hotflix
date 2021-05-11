import * as styled from './styles';

import { resetProfilePage } from 'utilities/profileHelps';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Profile({ profile, setProfile }) {
  const [profileState, setProfileState] = useState(() =>
    !profile || profile.length === 0 ? 'empty' : 'normal'
  );
  const [selectedAvatar, setSelectedAvatar] = useState(null);
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
          <styled.AvatarList>
            <styled.AvatarContainer onClick={() => setProfileState('add')}>
              <styled.Avatar />
              <styled.Description>Add profile</styled.Description>
              <styled.AddIcon />
            </styled.AvatarContainer>
          </styled.AvatarList>
        </styled.Container>
      );
    }

    if (profileState === 'add') {
      return (
        <styled.Container>
          <styled.Title>Edit Profile</styled.Title>
          <styled.ProfileEdit
            onClick={() => {
              setProfileState('avatar');
            }}
          >
            <Image
              src={
                selectedAvatar
                  ? selectedAvatar
                  : '/images/avatars/placeholder.png'
              }
              alt="avatar placeholder"
              width={250}
              height={250}
            />
            <styled.EditIcon />
          </styled.ProfileEdit>
          <styled.Input
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder="Display Name"
          />
          <styled.ProfileControl>
            <styled.ActionButton
              white
              disabled={inputValue === ''}
              onClick={() => {
                setProfile([
                  ...profile,
                  { name: inputValue, avatar: selectedAvatar },
                ]);
                setEditingUser(null);
              }}
            >
              SAVE
            </styled.ActionButton>
            <styled.ActionButton
              onClick={() => {
                resetProfilePage(profile, setProfileState);
              }}
            >
              CANCEL
            </styled.ActionButton>
          </styled.ProfileControl>
        </styled.Container>
      );
    }

    if (profileState === 'normal') {
      return (
        <styled.Container>
          <styled.Title>Who's watching?</styled.Title>
          <styled.AvatarList>
            {profile.map((item) => (
              <styled.AvatarContainer key={item.avatar}>
                <styled.Avatar url={item.avatar} className="light" />
                <styled.Description>{item.name}</styled.Description>
              </styled.AvatarContainer>
            ))}
          </styled.AvatarList>
          <styled.ActionButton onClick={() => setProfileState('add')}>
            MANAGE PROFILES
          </styled.ActionButton>
        </styled.Container>
      );
    }

    if (profileState === 'avatar') {
      return (
        <styled.Container>
          <styled.AvatarWrapper>
            <styled.AvatarHeader>
              <styled.AvatarWrapper className="flex">
                <styled.AvatarWrapper
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
                </styled.AvatarWrapper>
                <styled.AvatarWrapper className="text">
                  <h1>Edit Profile</h1>
                  <p>Choose a profile icon.</p>
                </styled.AvatarWrapper>
              </styled.AvatarWrapper>
              <styled.AvatarWrapper className="flex"></styled.AvatarWrapper>
            </styled.AvatarHeader>
            <styled.AvatarGrid>{renderAvatars()}</styled.AvatarGrid>
          </styled.AvatarWrapper>
        </styled.Container>
      );
    }

    if (profileState === 'edit') {
      return <div>edit!</div>;
    }

    if (profileState === 'delete') {
      return <div>delete!</div>;
    }
  };

  return <styled.Profile>{renderContent()}</styled.Profile>;
}
