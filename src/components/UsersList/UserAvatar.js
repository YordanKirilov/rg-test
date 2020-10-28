import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import userAvatarPlaceholder from '../../assets/avatardefault.png';

const UserAvatarDiv = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  border-right: 1px solid #eee;
`;

const UserAvatarImg = styled.img`
  display: block;
  width: 100%;
  ${(props) =>
    props.fullscreen &&
    css`
      width: 80vh;
      height: 80vh;
      margin: auto;
      position: fixed;
      z-index: 200;
    `}
`;

const handleImageError = (e) => {
  e.target.src = userAvatarPlaceholder;
};

const UserAvatar = ({ user }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => setFullscreen(!fullscreen);
  return (
    <UserAvatarDiv>
      <UserAvatarImg
        src={user.avatar}
        alt={user.name.substring(0, 1)}
        onError={handleImageError}
        onClick={toggleFullscreen}
        fullscreen={fullscreen}
      />
    </UserAvatarDiv>
  );
};

export default UserAvatar;
