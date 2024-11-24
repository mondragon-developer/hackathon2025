import React from "react";
import styled from "styled-components";

const ScheduleWrapper = styled.div`
  padding: 2rem;
  background: #cfdfe9;
  color: #1e1e4c;
`;

const ScheduleTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ScheduleItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ScheduleSection = () => {
  return (
    <ScheduleWrapper>
      <ScheduleTitle>Event Schedule</ScheduleTitle>
      <ScheduleList>
        <ScheduleItem>8:30 AM - Arrival & Check-in</ScheduleItem>
        <ScheduleItem>9:15 AM - Mini Challenges</ScheduleItem>
        <ScheduleItem>10:30 AM - Team Events</ScheduleItem>
        <ScheduleItem>12:30 PM - Lunch Break</ScheduleItem>
        <ScheduleItem>2:00 PM - Awards Ceremony</ScheduleItem>
      </ScheduleList>
    </ScheduleWrapper>
  );
};

export default ScheduleSection;
