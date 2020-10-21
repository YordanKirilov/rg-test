import React from 'react';
import { stripScripts, stripTags } from '../utils/textUtils';
import styled from 'styled-components';

const StyledUl = styled.ul`
  li {
    display: flex;
    list-style: none;
    text-align: left;
    span {
      display: block;
      padding: 4px;
      border: 1px solid #eee;
      flex: 1;
    }
    .user__avatar {
      width: 64px;
    }
    .user__name {
      width: 128px;
    }
    .user__company {
      width: 128px;
    }
  }
`;

const Users = ({ users = [], loading }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <StyledUl>
      {users.map((user) => (
        <li key={user.uuid}>
          <span className="user__avatar">
            <img src={user.avatar} />
          </span>
          <span className="user__name">{user.name}</span>
          <span className="user__bio">{stripTags(stripScripts(user.bio))}</span>
          <span className="user__company">{user.company}</span>
        </li>
      ))}
    </StyledUl>
  );
};

export default Users;
