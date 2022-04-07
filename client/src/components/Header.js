// Header component : acts like a navigation bar and as features such as a search bar

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
// import { MdWatch } from "react-icons/md";

const Header = () => {
  const logoStyle = {
    fontSize: "44px",
    marginLeft: "10px",
    marginRight: "20px",
    textDecoration: "none",
    // color: " #003399",
    // color: "#fff2e6",
    color: "#003399",
    fontWeight: "bold",
  };

  return (
    <Container>
      <NavigationLink to="/" style={logoStyle}>
        Random.co
        {/* <MdWatch size={"32px"} /> */}
      </NavigationLink>
      <SearchContainer>
        <Search></Search>
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
          <Link to="/category/gaming">Gaming</Link>
          <Link to="/category/lifestyle">Lifestyle</Link>
          <Link to="/category/medical">Medical</Link>
          <Link to="/category/pets">Pets</Link>
        </DropdownContent>
      </Dropdown>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/wishlist">
        <AiFillHeart size={"30px"} style={{ marginTop: "-40px" }} />
      </NavigationLink>
      {/* <NavigationLink>
          <AiOutlineShoppingCart size={"26px"} style={{ marginLeft: "20px" }} />
        </NavigationLink> */}
      <CartBtn>
        <AiOutlineShoppingCart size={"30px"} />
      </CartBtn>
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
  background-color: #4775d1;
  height: 10vh;
`;

// Search feature
const SearchContainer = styled.div``;

const Search = styled.input`
  border-color: white;
  margin-right: 20px;
  margin-left: 50px;
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
  background-color: #4775d1;
  padding: 10px;
  border: none;

  &:hover {
    color: #ebf0fa;
  }
`;

const Link = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  border-left: 5px solid #003399;
  display: block;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration-color: #ebf0fa;
    color: #ebf0fa;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: #4775d1;
  font-family: var(--font-body);
  font-size: 18px;
  margin-right: 16px;

  &:hover ${DropdownContent} {
    display: block;
    background-color: #ccd9ff;
    color: #ebf0fa;
  }

  &:hover ${DropdownBtn} {
    background-color: #4775d1;
    color: #ebf0fa;
  }
`;

// Links (login, wishlist, cart )
const NavigationLink = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
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
    color: #ebf0fa;
  }
`;

// replace it with the uncommented navlink for cart when you have Cart.js
const CartBtn = styled.button`
  all: unset;
  cursor: pointer;
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
