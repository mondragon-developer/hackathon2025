import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #1e1e4c;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* Ensures items are on opposite sides */
  align-items: center; /* Vertically centers items */
`;

const Button = styled.a`
  background: #ed6842;
  color: white;
  padding: 0.8rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;

  &:hover {
    background: #d45a2e;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0; /* Ensures no extra spacing */
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>JLA Hackathon 2025</Logo>
    <Button href="#register">REGISTER HERE</Button>
  </HeaderWrapper>
);

export default Header;
