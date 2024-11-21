import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  padding: 2rem;
  background: #CFDFE9;
  color: #1E1E4C;
  text-align: left;
`;

const InfoSection = () => (
  <InfoWrapper>
    <h2>About the Hackathon</h2>
    <p>Hosted by the STEM-Computer Science Department at JLA.</p>
    <h3>Key Information</h3>
    <ul>
      <li><strong>Dates:</strong> February 6, 2025</li>
      <li><strong>Location:</strong> Jewish Leadership Academy, Miami</li>
      <li><strong>Registration Fee:</strong> $50 per participant</li>
      <li><strong>Main Topic:</strong> Building Community Resilience</li>
    </ul>
  </InfoWrapper>
);

export default InfoSection;
