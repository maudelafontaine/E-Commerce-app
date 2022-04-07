// About us component : page with details about our project team

import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <Title>About us</Title>
      <Text>
        We are three students from the Web Development Concordia Bootcamp 2022
        trying to sell our very best selection of products for your everyday
        needs.
      </Text>
      <Picture src="/assets/Trio.PNG" />
      <Trio>Maude, Vlad, Colby.</Trio>
    </Container>
  );
};

export default AboutUs;

// Styles :

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.h2`
  color: #003399;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 38px;
`;

const Text = styled.h2`
  font-size: 22px;
  color: black;
  margin-bottom: 20px;
`;

const Picture = styled.img`
  width: 600px;
  height: 350px;
  border-radius: 25px;
  margin-top: 20px;
  /* border-top: 6px solid blue;
  border-bottom: 4px solid blue; */
`;

const Trio = styled.h2`
  font-size: 18px;
  color: black;
  margin-top: 20px;
`;
