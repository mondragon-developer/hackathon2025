import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const RegisterButton = styled.a`
  background: #ed6842;
  color: white;
  padding: 0.8rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;

  &:hover {
    background: #d45a2e;
  }
`;

const RegistrationButton = () => {
  return (
    <ButtonWrapper>
      <RegisterButton href="https://docs.google.com/forms/d/e/1FAIpQLSfCoYvLdCYRkKNiDG_ZwS6CXC8wwhchACuIi8RbS_4fwYMBXA/viewform">
        Register Here
      </RegisterButton>
    </ButtonWrapper>
  );
};

export default RegistrationButton;
