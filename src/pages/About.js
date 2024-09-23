import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px;
  background-color: #f4f4f4;
  color: #002147;
  text-align: center;
`;

const AllianceSection = styled.div`
  margin-top: 40px;
  background-color: #e0f7fa;
  padding: 20px;
  border-radius: 10px;
`;

const About = () => (
  <AboutContainer>
    <h2>Our Vision</h2>
    <p>We aim to create sustainable solutions that empower communities.</p>

    <h2>Our Mission</h2>
    <p>We are dedicated to improving lives through education, healthcare, and economic support.</p>

    <h2>Our Values</h2>
    <p>Integrity, Collaboration, and Impact.</p>

    <AllianceSection>
      <h2>Alliance Trust Foundation</h2>
      <p>
        Alliance Trust Foundation is committed to serving the community through impactful
        projects that foster social and economic development. Based in Dallas, Texas, we support initiatives in education, healthcare, and community empowerment.
      </p>
      <div>
        <p><strong>Address:</strong> 2924 Skillman Street, 75231 Dallas, Texas, USA</p>
        <p><strong>Telephone No:</strong> +1 469 740 7148</p>
        <p><strong>Contact Person:</strong> Dr. David Abel</p>
        <p><strong>Project Manager:</strong> Ms. Dina Adams</p>
      </div>
    </AllianceSection>
  </AboutContainer>
);

export default About;
