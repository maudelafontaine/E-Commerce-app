import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <Picture src="/assets/dog.jpg" />
      <Message>Get -25% on our latest Pets watch theme collection</Message>
      <Btn>Shop now</Btn>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const Message = styled.h2`
  color: black;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const Btn = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  width: 130px;
  height: 60px;
  border-color: white;
  font-weight: bold;
  color: #003399;
`;
