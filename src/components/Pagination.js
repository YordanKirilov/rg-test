import React from 'react';
import styled from 'styled-components';

//TODO:(yk) Better styling for last page - pagination jumps top after last element
const StyledUl = styled.ul`
  display: flex;
  margin: auto;
  padding: 0;
  li {
    list-style: none;
    a {
      padding: 8px 12px;
      display: block;
      color: #2972fb;
      text-decoration: none;
      background: #eee;
      border: 1px solid #eee;
      &:hover {
        background: #ddd;
      }
    }
  }
`;

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <StyledUl>
        {pageNumbers.map((number) => (
          // TODO:(yk) Add 'active/current' styling for page navigation
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </StyledUl>
    </nav>
  );
};

export default Pagination;
