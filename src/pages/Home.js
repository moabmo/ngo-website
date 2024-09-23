import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background-color: #5F9EA0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const RoundedButton = styled.button`
  padding: 10px 20px;
  background-color: #002147;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5F9EA0;
    color: #002147;
    border: 1px solid #002147;
  }
`;

const Home = () => (
  <HeroSection>
    <div>
      <h1>Welcome to Our NGO</h1>
      <p>Empowering communities and driving change</p>
      <RoundedButton>Learn More</RoundedButton>
    </div>
  </HeroSection>
);

export default Home;
