import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import ItemDetails from "./ItemDetails";
import Confirmation from "./Confirmation";
import Login from "./Login";
import TestCart from "./Cart/TestCart";

// import Cart from "./Cart";

import Category from "./Categories/Category";
import Entertainment from "./Categories/Entertainment";
import Fitness from "./Categories/Fitness";
import Lifestyle from "./Categories/Lifestyle";
import Medical from "./Categories/Medical";
import Pets from "./Categories/Pets";
import Gaming from "./Categories/Gaming";
import Industrial from "./Categories/Industrial";

// Stretch
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Banner />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/category/:category" element={<Category/>} />
            <Route path="/category/lifestyle/:_id" element={<ItemDetails />} />
            <Route path="/cart" element={<TestCart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  /* background-color: #ffffcc; */
  /* height: calc(100vh - 110px); */
  /* height: 50vh; */
`;

const Main = styled.div`
  height: 11000px;
  /* background-color: #ffffcc; yellow*/
  background-color: #ebf0fa;
`;
