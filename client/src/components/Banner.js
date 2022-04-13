// Banner component : display message such as a promotion

import React from "react";
import styled from "styled-components";

import { FaCanadianMapleLeaf } from "react-icons/fa";

const Banner = () => {
  return (
    <Container>
      <Message>
        Free shipping on orders over $100 <FaCanadianMapleLeaf size={"15px"} />
      </Message>
    </Container>
  );
};

export default Banner;

// Styles

// Banner container
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ffe6e6;
  height: 5vh;
`;

// Message to display
const Message = styled.h2`
  color: black;
  font-size: 15px;
`;
