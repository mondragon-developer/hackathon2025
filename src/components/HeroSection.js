import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background: #ED6842;
  color: white;
  text-align: center;
  padding: 5rem 1rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
`;

const HeroSection = () => (
  <HeroWrapper>
    <h1>Welcome to JLA Hackathon 2024</h1>
    <p>Join the most innovative minds and create solutions for tomorrow.</p>
  </HeroWrapper>
);

export default HeroSection;
