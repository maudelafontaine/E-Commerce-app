// Confirmation component : page which indicates the user that it's purchase has been completed

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  return (
    <Container>
      <Logo>RandomCo</Logo>
      <ConfirmationMessage>THANK YOU FOR YOUR ORDER!</ConfirmationMessage>
      <Text>
        You'll be receiving a confirmation email with order details. We'll
        notify you when your order has been shipped.
      </Text>
      <NavigationLink to="/">CONTINUE SHOPPING</NavigationLink>
    </Container>
  );
};

export default Confirmation;

// Styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-color: #adebeb;
`;

const Logo = styled.h1`
  font-size: 34px;
  color: black;
  padding: 10px;
`;

const ConfirmationMessage = styled.h2`
  color: black;
  margin-top: 20px;
  padding: 10px;
`;

const Text = styled.h2`
  color: black;
  padding: 8px;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;
  background-color: white;
  margin-top: 60px;
`;
