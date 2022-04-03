import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Wishlist from "./Wishlist";
// import Items from "./Items";

// Product Categories
import Entertainment from "./Categories/Entertainment";
import Fitness from "./Categories/Fitness";
import Lifestyle from "./Categories/Lifestyle";
import Medical from "./Categories/Medical";
//
import Confirmation from "./Confirmation";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* <Route path="/items" element={<Items />} /> */}
            <Route path="/category/entertainment" element={<Entertainment />} />
            <Route path="/category/fitness" element={<Fitness />} />
            <Route path="/category/lifestyle" element={<Lifestyle />} />
            <Route path="/category/medical" element={<Medical />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </>
  );
};

export default App;

const Main = styled.div``;
