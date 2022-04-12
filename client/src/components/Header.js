// Header component : acts like a navigation bar and as features such as a search bar

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const logoStyle = {
    fontSize: "44px",
    marginLeft: "10px",
    marginRight: "20px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif",
  };

  return (
    <Container>
      <NavigationLink to="/" style={logoStyle}>
        RandomCo
      </NavigationLink>
      <SearchContainer>
        <Search placeholder="Search"></Search>
        <SearchBtn>
          <BiSearch
            size={"30px"}
            style={{
              marginLeft: "-10px",
            }}
          />
        </SearchBtn>
      </SearchContainer>
      <Dropdown>
        <DropdownBtn>Categories</DropdownBtn>
        <DropdownContent>
          <Link to="/category/entertainment">Entertainment</Link>
          <Link to="/category/fitness">Fitness</Link>
          <Link to="/category/industrial">Industrial</Link>
          <Link to="/category/gaming">Gaming</Link>
          <Link to="/category/lifestyle">Lifestyle</Link>
          <Link to="/category/medical">Medical</Link>
          <Link to="/category/pets">Pets</Link>
        </DropdownContent>
      </Dropdown>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/wishlist">
        <AiFillHeart size={"30px"} />
      </NavigationLink>
      <NavigationLink to="/cart">
        <AiOutlineShoppingCart size={"26px"} style={{ color: "black" }} />
      </NavigationLink>
    </Container>
  );
};

export default Header;

// Styles :

// Header container
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #ff6666;
  height: 10vh;
`;

// Search feature
const SearchContainer = styled.div``;

const Search = styled.input`
  border-color: white;
  margin-right: 20px;
  margin-left: 50px;
  font-size: 14px;
`;

const SearchBtn = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 40px;
`;

// Dropdown menu for categories
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownBtn = styled.button`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 22px;
  background-color: #ff6666;
  padding: 10px;
  border: none;

  &:hover {
    color: #ffe6e6;
    background-color: #ff6666;
  }
`;

const Link = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  border-left: 5px solid #ff6666;
  display: block;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #adebeb;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  font-family: var(--font-body);
  font-size: 18px;
  margin-right: 16px;

  &:hover ${DropdownContent} {
    display: block;
    background-color: white;
  }

  &:hover ${DropdownBtn} {
    color: white;
  }
`;

// Links (login, wishlist, cart )
const NavigationLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  position: relative;

  &:hover {
    cursor: pointer;
    /* text-decoration: underline;
    text-decoration-color: #ebf0fa;
    text-decoration-thickness: 3px; */
    /* color: #ebf0fa; */
    border-bottom: 3px solid black;
  }
`;

// Notes :
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover

// Extra code :
{
  /* <NavigationLink to="/category/entertainment">
          Entertainment
        </NavigationLink>
        <NavigationLink to="/category/fitness">Fitness</NavigationLink>
        <NavigationLink to="/category/gaming">Gaming</NavigationLink>
        <NavigationLink to="/category/lifestyle">Lifestyle</NavigationLink>
        <NavigationLink to="/category/medical">Medical</NavigationLink>
        <NavigationLink to="/category/pets">Pets</NavigationLink> */
}
