import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px;
  background-color: #5F9EA0;
  color: white;
`;

const ServiceCard = styled.div`
  width: 30%;
  margin: 15px;
  padding: 20px;
  background-color: #002147;
  border-radius: 10px;
`;

const Services = () => (
  <ServicesContainer>
    <ServiceCard>
      <h3>Education Support</h3>
      <p>We provide access to quality education in underdeveloped areas.</p>
    </ServiceCard>
    <ServiceCard>
      <h3>Healthcare Initiatives</h3>
      <p>Our healthcare programs focus on maternal and child health.</p>
    </ServiceCard>
    <ServiceCard>
      <h3>Economic Empowerment</h3>
      <p>We help communities build sustainable businesses and economic growth.</p>
    </ServiceCard>
  </ServicesContainer>
);

export default Services;
