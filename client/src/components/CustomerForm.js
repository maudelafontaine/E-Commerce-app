import React from "react";
import styled from "styled-components";

const CustomerForm = () => {
  return (
    <Container>
      <Title>CHECKOUT</Title>
      <Text>Shipping Address</Text>
      <NameContainer>
        <Label>
          First Name
          <Input type="text" name="firstName" />
        </Label>
        <Label>
          Last Name
          <Input type="text" name="LastName" />
        </Label>
      </NameContainer>
      <HomeAddressContainer>
        <Label>
          Address
          <Input type="text" name="Address" />
        </Label>
        <Label>
          Apt
          <Input type="text" name="Apt" />
        </Label>
      </HomeAddressContainer>
      <OtherAddressInfoContainer>
        <Label>
          City
          <Input type="text" name="City" />
        </Label>
        <Label>
          Province
          <Input type="text" name="Province" />
        </Label>
        <Label>
          Postal Code
          <Input type="text" name="PostalCode" />
        </Label>
      </OtherAddressInfoContainer>
      <Label>
        Country
        <Input type="text" name="Country" />
      </Label>
      <Label>
        Phone Number
        <Input type="text" name="PhoneNumber" />
      </Label>
      <Label>
        Email Address
        <Input type="email" name="firstName" placeholder="Email" />
      </Label>
      <NewsletterContainer>
        <Label>
          Sign Up to our Newsletter
          <Input type="checkbox" name="terms" />
        </Label>
        <Text style={{ fontSize: "15px" }}>
          By signing up for the newsletter, you are agreeing to receive
          promotional emails from RandCo. You may later unsubscribe. You may
          contact Loblaws Inc using the information below.
        </Text>
      </NewsletterContainer>
      <Input type="submit" value="Confirm" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f5f5f5;
  padding-left: 30px;
`;

const Title = styled.h1`
  color: black;
  padding-top: 50px;
`;

const Text = styled.p`
  font-size: 25px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
`;

const HomeAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
`;

const OtherAddressInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
`;

const Label = styled.label`
  color: black;
`;

const Input = styled.input``;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* align-items: center; */
  border: 4px solid black;
`;

export default CustomerForm;
