import React from 'react';
import { stripScripts, stripTags } from '../utils/textUtils';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import userAvatarPlaceholder from '../assets/avatardefault.png';

const UserList = styled.ul`
  padding: 0;
`;

const UserItem = styled.li`
  display: grid;
  grid-template-columns: 65px 1fr 3fr;
  grid-template-rows: 65px;
  grid-column-gap: 8px;
  list-style: none;
  text-align: left;
  font-size: 14px;
  border: 1px solid #eee;
  background: ${(props) => props.userColor || 'white'};
  > div {
    &:not(:last-child) {
      border-bottom: 0;
    }
  }
`;

const UserAvatar = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  border-right: 1px solid #eee;
  img {
    display: block;
    width: 100%;
  }
`;

const UserInfo = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  border-right: 1px solid #eee;
  > h4 {
    margin: 0 0 16px 0;
  }
  > p {
    margin: 0;
  }
`;

const UserBio = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  padding-bottom: 16px;
`;

const handleImageError = (e) => {
  e.target.src = userAvatarPlaceholder;
};

const Users = ({ currentUsers = [], loading, onUserColorChange }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <UserList>
      {currentUsers.map((user) => (
        <UserItem key={user.uuid} userColor={user.color}>
          <UserAvatar>
            <img
              src={user.avatar}
              alt={user.name.substring(0, 1)}
              onError={handleImageError}
            />
          </UserAvatar>
          <UserInfo>
            <h4>{user.name}</h4> <p>{user.company}</p>
            <DropdownMenu user={user} onUserColorChange={onUserColorChange} />
          </UserInfo>
          <UserBio>{stripTags(stripScripts(user.bio))}</UserBio>
        </UserItem>
      ))}
    </UserList>
  );
};

export default Users;
