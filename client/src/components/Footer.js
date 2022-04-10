/* Footer component : has info relative to 
- footer menu : fake links to pages and one link to About us page
- social links : fake links to our social medias
- newsletter sign up : form to register to our newsletter 
*/
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
      <Menu>
        <ul
          style={{
            fontSize: "22px",
            fontFamily: "var(--font-body)",
            fontWeight: "bold",
            color: "#003399",
          }}
        >
          MENU
        </ul>
        <nav>
          <NavigationLink
            to="/about"
            style={{ fontFamily: "var(--font-body)" }}
          >
            About us
          </NavigationLink>
        </nav>
        <li>Contact</li>
        <li>Terms of Service</li>
        <li>Returns</li>
        <li>Shipping FAQ</li>
        <li>Help FAQ</li>
        <li>Careers</li>
        <li>Privacy policy</li>
      </Menu>
      <SocialMedia>
        <h2 style={{ color: "#003399", fontSize: "22px" }}>SOCIAL LINKS</h2>
        <Icons>
          <AiFillInstagram size={33} />
          <AiFillFacebook size={33} />
          <AiFillTwitterCircle size={33} />
          <FaPinterest size={33} />
        </Icons>
      </SocialMedia>
      <Newsletter>
        <h2 style={{ color: "#003399", fontSize: "22px" }}>
          NEWSLETTER SIGN UP
        </h2>
        <Signup placeholder="Enter you email"></Signup>
        <Btn>Sign up</Btn>
      </Newsletter>
    </Container>
  );
};

export default Footer;

// Styles :

// Footer container
const Container = styled.div`
  /* background-hicolor: #c0c0c0; */
  background-color: #ff9999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 250px;
`;

// Footer menu container
const Menu = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  color: #ebf0fa;
`;

// About us page link
const NavigationLink = styled(NavLink)`
  font-family: var(--font-body);
  font-size: 18px;
  /* font-weight: bold; */
  color: #ebf0fa;
  text-decoration: none;
  margin: 4px;

  &:hover {
    color: #4775d1;
    cursor: pointer;
  }
`;

// Social media icons container
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

// List of social media icons
const SocialMedia = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

// Newsletter container
const Newsletter = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  color: #003399;
  display: flex;
  flex-direction: column;
`;

// Newsletter input
const Signup = styled.input`
  margin-top: 5px;
  border-color: white;
  font-size: 18px;
`;

// Sign in for newsletter button
const Btn = styled.button`
  background-color: black;
  font-size: 20px;
`;
