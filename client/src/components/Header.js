import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <nav>
        <NavigationLink to="/">WatchOut</NavigationLink>
        <Search></Search>
        <BiSearch size={25} />
        <NavigationLink to="/category/fitness">Categories</NavigationLink>
        <NavigationLink to="/login">Login</NavigationLink>
        <NavigationLink to="/wishlist">Wishlist</NavigationLink>
        {/* <NavigationLink to="/wishlist">{AiOutlineHeart}</NavigationLink> */}
        {/* <NavigationLink>Shopping cart</NavigationLink> */}
      </nav>
      {/* <AiOutlineShoppingCart size={25} /> */}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #0073e6;
  height: 8vh;
`;

const Search = styled.input`
  border-color: white;
  margin: 20px;
`;

const NavigationLink = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  position: relative;
  margin: 20px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
