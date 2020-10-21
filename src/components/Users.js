import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  text-align: left;
`;

const Users = ({ users = [], loading }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <StyledUl>
      {users.map((user) => (
        <li key={user.uuid}>{user.name}</li>
      ))}
    </StyledUl>
  );
};

export default Users;
