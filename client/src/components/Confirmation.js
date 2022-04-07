// Confirmation component : page which indicates the user that it's purchase has been completed

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  return (
    <Container>
      <Logo>Random.co</Logo>
      <ConfirmationMessage>THANK YOU FOR YOUR ORDER</ConfirmationMessage>
      <Text>
        You'll be receiving a confirmation email with order details. We'll
        notify you when order has shipped.
      </Text>
      <NavigationLink to="/">CONTINUE SHOPPING</NavigationLink>
    </Container>
  );
};

export default Confirmation;

// Styles

const Container = styled.div``;

const Logo = styled.h1``;

const ConfirmationMessage = styled.h2``;

const Text = styled.h2``;

const NavigationLink = styled(NavLink)``;
