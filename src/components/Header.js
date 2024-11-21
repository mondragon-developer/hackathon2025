import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #1E1E4C;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      color: #ED6842; /* Burnt Sienna for hover effect */
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Hackathon 2025</h1>
    <Nav>
      <a href="#about">About</a>
      <a href="#dates">Dates</a>
      <a href="#register">Register</a>
    </Nav>
  </HeaderWrapper>
);

export default Header;
