import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: #1e1e4c;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 Jewish Leadership Academy</p>
      <p>975 NW 95th Street, Miami FL 33150 | (305) 305-306-2660</p>
    </FooterWrapper>
  );
};

export default Footer;
