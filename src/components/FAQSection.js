import React from "react";
import styled from "styled-components";

const FAQWrapper = styled.div`
  padding: 2rem;
  background: #fff;
`;

const FAQTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin-bottom: 1rem;
`;

const FAQSection = () => {
  return (
    <FAQWrapper>
      <FAQTitle>FAQs</FAQTitle>
      <FAQList>
        <FAQItem>
          Will lunch be provided? Yes, kosher meals are included.
        </FAQItem>
        <FAQItem>
          Can parents attend? Yes, we have dedicated spaces for parents.
        </FAQItem>
        <FAQItem>
          Is there a registration fee? Yes, it's $20 per participant.
        </FAQItem>
        <FAQItem>
          Do participants need prior experience? No, all skill levels are
          welcome!
        </FAQItem>
      </FAQList>
    </FAQWrapper>
  );
};

export default FAQSection;
