import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px;
  background-color: #f4f4f4;
  color: #002147;
`;

const TeamMember = styled.div`
  width: 30%;
  text-align: center;
  margin: 15px;
  padding: 20px;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
`;

const Team = () => (
  <TeamContainer>
    <TeamMember>
      <TeamImage src="https://via.placeholder.com/150" alt="Dr. David Abel" />
      <h3>Dr. David Abel</h3>
      <p>Founder & President</p>
      <p>Leading our efforts in building sustainable communities through impactful programs.</p>
    </TeamMember>
    <TeamMember>
      <TeamImage src="https://via.placeholder.com/150" alt="Ms. Dina Adams" />
      <h3>Ms. Dina Adams</h3>
      <p>Project Manager</p>
      <p>Overseeing our global initiatives and ensuring successful project execution.</p>
    </TeamMember>
    <TeamMember>
      <TeamImage src="https://via.placeholder.com/150" alt="Jane Doe" />
      <h3>Jane Doe</h3>
      <p>Executive Director</p>
      <p>Leading operations and ensuring organizational alignment with our mission.</p>
    </TeamMember>
    <TeamMember>
      <TeamImage src="https://via.placeholder.com/150" alt="John Smith" />
      <h3>John Smith</h3>
      <p>Program Manager</p>
      <p>Developing and managing key initiatives to uplift communities.</p>
    </TeamMember>
    <TeamMember>
      <TeamImage src="https://via.placeholder.com/150" alt="Emily Jones" />
      <h3>Emily Jones</h3>
      <p>Operations Lead</p>
      <p>Ensuring smooth operations across all our programs and projects.</p>
    </TeamMember>
  </TeamContainer>
);

export default Team;
