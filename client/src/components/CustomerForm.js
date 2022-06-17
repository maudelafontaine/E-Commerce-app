import React from "react";
import styled from "styled-components";

const CustomerForm = () => {
  return (
    <Container>
      <Title>CHECKOUT</Title>
      <AddressContainer>
        <Text>Shipping Address</Text>
        <NameContainer>
          <Label>
            {/* First Name */}
            First Name
            <Input type="text" name="firstName" />
          </Label>
          <Label>
            {/* Last Name */}
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
            <Input type="text" name="Apt" style={{ width: "50px" }} />
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
          <Label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              padding: "0px",
              marginLeft: "10px",
            }}
          >
            Sign Up to our Newsletter
            <Input
              type="checkbox"
              name="terms"
              style={{ marginLeft: "10px", marginTop: "0px" }}
            />
          </Label>
          <Text
            style={{
              fontSize: "15px",
              marginLeft: "10px",
              borderBottom: "none",
            }}
          >
            By signing up for the newsletter, you are agreeing to receive
            promotional emails from RandCo. You may later unsubscribe. You may
            contact Loblaws Inc using the information below.
          </Text>
        </NewsletterContainer>
        <Input type="submit" value="Confirm" style={{ border: "none" }} />
      </AddressContainer>
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
  font-size: 28px;
`;

const Text = styled.p`
  font-size: 25px;
  padding-top: 10px;
  margin-bottom: 20px;
  border-bottom: 3px solid black;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 4px solid black; */
  width: 1000px;
`;

const HomeAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 4px solid black; */
`;

const OtherAddressInfoContainer = styled.div`
  display: block;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 4px solid black; */
`;

const Label = styled.label`
  color: black;
  padding: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 4px;
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* align-items: center; */
  border: 2px solid black;
`;

const AddressContainer = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  background-color: pink;
  padding-bottom: 20px;
`;

export default CustomerForm;
