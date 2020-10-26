import React from 'react';
import { stripScripts, stripTags } from '../utils/textUtils';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import userAvatarPlaceholder from '../assets/avatardefault.png';

const UserList = styled.ul`
  padding: 0;
  > li {
    display: grid;
    grid-template-columns: 65px 1fr 3fr;
    grid-template-rows: 65px;
    grid-column-gap: 8px;
    list-style: none;
    text-align: left;
    font-size: 14px;
    border: 1px solid #eee;
    > div {
      &:not(:last-child) {
        border-bottom: 0;
      }
    }
    .user__avatar {
      grid-area: 1 / 1 / 3 / 2;
      border-right: 1px solid #eee;
      img {
        display: block;
        width: 100%;
      }
    }
    .user__name {
      grid-area: 1 / 2 / 3 / 3;
      border-right: 1px solid #eee;
      > h4 {
        margin: 0 0 16px 0;
      }
      > p {
        margin: 0;
      }
    }
    .user__bio {
      grid-area: 1 / 3 / 3 / 4;
      padding-bottom: 16;
    }
  }
`;

const handleImageError = (e) => {
  e.target.src = userAvatarPlaceholder;
};

const Users = ({ users = [], loading }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <UserList>
      {users.map((user) => (
        <li key={user.uuid}>
          <div className="user__avatar">
            <img
              src={user.avatar}
              alt={user.name.substring(0, 1)}
              onError={handleImageError}
            />
          </div>
          <div className="user__name">
            <h4>{user.name}</h4> <p>{user.company}</p>
            <DropdownMenu users={users} />
          </div>
          <div className="user__bio">{stripTags(stripScripts(user.bio))}</div>
        </li>
      ))}
    </UserList>
  );
};

export default Users;
