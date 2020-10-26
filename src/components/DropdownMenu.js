import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MenuButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  position: relative;
  z-index: 10;
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
`;

const Menu = styled.nav`
  width: 240px;
  background: #ffffff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 20;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #dddddd;
  }

  li a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #2972fb;
    &:hover {
      background-color: #ddd;
    }
  }
`;

const DropdownMenu = ({ users, user, onUserColorChange }) => {
  const [active, setActive] = useState(false);
  const toggleDropdown = () => setActive(!active);

  return (
    <MenuContainer>
      <MenuButton onClick={toggleDropdown} className="menu-trigger">
        User Color
      </MenuButton>
      <Menu active={active}>
        <ul>
          <li>
            <a
              href="!#"
              onClick={() => {
                onUserColorChange(user.uuid, '#eeffee');
                toggleDropdown();
              }}>
              green
            </a>
          </li>
          <li>
            <a
              href="!#"
              onClick={() => {
                onUserColorChange(user.uuid, '#eeeeff');
                toggleDropdown();
              }}>
              blue
            </a>
          </li>
          <li>
            <a
              href="!#"
              onClick={() => {
                onUserColorChange(user.uuid, '#ffeeee');
                toggleDropdown();
              }}>
              red
            </a>
          </li>
        </ul>
      </Menu>
    </MenuContainer>
  );
};

export default DropdownMenu;
