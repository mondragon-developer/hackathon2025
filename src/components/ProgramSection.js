import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-hackathon-2025.png";

const SectionWrapper = styled.div`
  background: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: center;

  img {
    width: 150px;
    height: auto;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #1e1e4c;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .important-text {
    color: #ed6842;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
  background: #1e1e4c;
  color: white;
  border-radius: 10px;
  padding: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;

      span {
        font-weight: bold;
        color: #ed6842;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;

  a {
    background: #ed6842;
    color: white;
    padding: 0.8rem 2rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      background: #d45a2e;
    }
  }
`;

const ProgramSection = () => (
  <SectionWrapper>
    {/* Left Section */}
    <LeftSection>
      <img src={logo} alt="JLA Logo" />
      <h2>Thursday, February 6th, 2025</h2>
      <p>
        The JLA Hackathon is an exciting event for innovative minds to come
        together, collaborate, and create impactful solutions.
      </p>
      <p>
        We are accepting registrations for all students interested in technology
        and innovation.
      </p>
      <p className="important-text">Registration closes on January 20th</p>
    </LeftSection>

    {/* Right Section */}
    <RightSection>
      <h3>PROGRAM</h3>
      <ul>
        <li>
          <span>8:30 AM - 9:00 AM:</span> Arrival & Check-In
        </li>
        <li>
          <span>9:15 AM - 10:30 AM:</span> Team Formation & Brainstorming
        </li>
        <li>
          <span>10:30 AM - 10:40 AM:</span> Break
        </li>
        <li>
          <span>10:40 AM - 12:30 PM:</span> Coding Sessions
        </li>
        <li>
          <span>12:30 PM - 2:00 PM:</span> Lunch & Networking
        </li>
        <li>
          <span>2:00 PM - 3:00 PM:</span> Project Demos & Awards Ceremony
        </li>
      </ul>
    </RightSection>

    {/* Register Button
    <ButtonWrapper>
      <a href="#register">REGISTER HERE</a>
    </ButtonWrapper> */}
  </SectionWrapper>
);

export default ProgramSection;
