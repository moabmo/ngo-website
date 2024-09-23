import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #002147;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #002147;
  color: white;
  padding: 20px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1500;

  @media (min-width: 769px) {
    position: static;
    width: auto;
    height: auto;
    transform: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: white;
    margin: 15px 0;
    text-decoration: none;
    font-size: 18px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 0;
    a {
      margin: 0 15px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <h1 style={{ color: 'white' }}>Alliance Trust Foundation</h1>
        <MenuButton onClick={toggleSidebar}>&#9776;</MenuButton>
        <Sidebar open={isOpen}>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </NavLinks>
        </Sidebar>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
