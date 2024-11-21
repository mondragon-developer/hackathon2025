import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 2rem;
  background: #FFF;
  color: #1E1E4C;
  text-align: center;
`;

const RegistrationForm = () => (
  <FormWrapper id="register">
    <h2>Register Now</h2>
    <p>Click the button below to secure your spot.</p>
    <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
      <button style={{ padding: '10px 20px', background: '#ED6842', color: '#FFF', border: 'none', cursor: 'pointer' }}>
        Register
      </button>
    </a>
  </FormWrapper>
);

export default RegistrationForm;
