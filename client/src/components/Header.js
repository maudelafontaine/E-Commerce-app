import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const logoStyle = {
    fontSize: "40px",
    marginLeft: "10px",
    marginRight: "20px",
    textDecoration: "none",
    color: " #003399",
    fontWeight: "bold",
  };

  return (
    <Container>
      <nav>
        <NavigationLink to="/" style={logoStyle}>
          WatchOut
        </NavigationLink>
        <Search></Search>
        <SearchBtn>
          <BiSearch
            size={"26px"}
            style={{
              marginLeft: "-10px",
              marginTop: "-20px",
            }}
          />
        </SearchBtn>

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

        <NavigationLink to="/category/entertainment">
          Entertainment
        </NavigationLink>
        <NavigationLink to="/category/fitness">Fitness</NavigationLink>
        <NavigationLink to="/category/gaming">Gaming</NavigationLink>
        <NavigationLink to="/category/lifestyle">Lifestyle</NavigationLink>
        <NavigationLink to="/category/medical">Medical</NavigationLink>
        <NavigationLink to="/category/pets">Pets</NavigationLink>
        <NavigationLink to="/login" style={{ marginLeft: "100px" }}>
          Login
        </NavigationLink>
        <NavigationLink to="/wishlist">
          <AiFillHeart size={"24px"} style={{ marginLeft: "20px" }} />
        </NavigationLink>
        {/* <NavigationLink>
          <AiOutlineShoppingCart size={"26px"} style={{ marginLeft: "20px" }} />
        </NavigationLink> */}
        <CartBtn>
          <AiOutlineShoppingCart size={"24px"} style={{ marginLeft: "20px" }} />
        </CartBtn>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #4775d1;
  height: 10vh;
`;

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

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  &:hover {
    background-color: black;
  }
`;

const DropdownBtn = styled.button`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 22px;
  background-color: #4775d1;
  padding: 10px;
  border: none;
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
  }

  &:hover ${DropdownBtn} {
    background-color: #4775d1;
  }
`;

const Link = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration-color: #ebf0fa;
    color: #ebf0fa;
  }
`;

const NavigationLink = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  position: relative;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #ebf0fa;
    text-decoration-thickness: 3px;
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
