import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .menu-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto; /* Strictly for positioning */
    padding: 4px 8px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.4s ease;
    cursor: pointer;
    position: relative;
    z-index: 10;
    :hover {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    }
    &:focus {
      outline: none;
    }
    span {
      font-weight: 700;
      vertical-align: middle;
      font-size: 14px;
      margin: 0 10px;
    }
  }

  .menu {
    width: 240px;
    background: #ffffff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 20;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li a {
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
  const [isActive, setIsActive] = useState(false);
  const toggleDropdown = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <button onClick={toggleDropdown} className="menu-trigger">
        <span>User Color</span>
      </button>
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
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
                console.log(users);
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
      </nav>
    </MenuContainer>
  );
};

export default DropdownMenu;
