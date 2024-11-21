import './App.css';

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import RegistrationForm from './components/RegistrationForm';

const App = () => (
  <>
    <Header />
    <HeroSection />
    <InfoSection />
    <RegistrationForm />
  </>
);

export default App;
