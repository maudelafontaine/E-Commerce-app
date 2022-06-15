import React from "react";
import styled from "styled-components";

const CustomerForm = () => {
  return (
    <Container>
      <Title>CHECKOUT</Title>
      <Text>Shipping Address</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-size: 30px;
`;

const Text = styled.p``;

export default CustomerForm;
