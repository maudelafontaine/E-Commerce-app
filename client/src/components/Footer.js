import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Interaction>
        <Newsletter>
          <h2>NEWSLETTER SIGNUP</h2>
          <Signup placeholder="Enter you email"></Signup>
          <Btn>Sign up</Btn>
        </Newsletter>
        <SocialMedia>
          <h2>SOCIAL MEDIA</h2>
          <AiFillInstagram size={25} />
          <AiFillFacebook size={25} />
          <AiFillTwitterCircle size={25} />
          <FaPinterest size={25} />
        </SocialMedia>
      </Interaction>
      <Menu>
        <h2>MENU</h2>
        <nav>
          <NavigationLink to="/about">About us</NavigationLink>
          <h2>Contact</h2>
          <h2>Terms of Service</h2>
          <h2>Returns</h2>
          <h2>Shipping FAQ</h2>
          <h2>Help FAQ</h2>
          <h2>Careers</h2>
          <h2>Privacy policy</h2>
        </nav>
      </Menu>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #0073e6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 20vh;
`;

const Interaction = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Newsletter = styled.div`
  margin-top: 10px;
  margin-right: 20px;
`;

const Signup = styled.input`
  margin-top: 5px;
  border-color: white;
`;

const Btn = styled.button`
  background-color: black;
  margin-left: 4px;
`;

const SocialMedia = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationLink = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 20px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
