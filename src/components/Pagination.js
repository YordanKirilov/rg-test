import React from 'react';
import styled from 'styled-components';

const PaginationList = styled.ul`
  padding: 0;
  text-align: right;
`;

const PaginationItem = styled.li`
  list-style: none;
  display: inline-block;
`;

const PaginationLink = styled.a`
  padding: 8px 12px;
  display: block;
  text-decoration: none;
  border: 1px solid #eee;
  color: ${(props) => (props.active ? '#eee' : '#2972fb')};
  background: ${(props) => (props.active ? '#2972fb' : '#eee')};
  &:hover {
    color: #2972fb;
    background: #ddd;
  }
`;
const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <PaginationList>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              active={number === currentPage ? true : false}
              onClick={() => {
                paginate(number);
              }}
              href="!#">
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationList>
    </nav>
  );
};

export default Pagination;
