import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Message>Free shipping and returns on orders over $100</Message>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ccd9ff;
  height: 5vh;
`;

const Message = styled.h2`
  color: black;
  font-size: 15px;
`;
