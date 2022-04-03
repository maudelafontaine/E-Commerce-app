import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Confirmation from "./Confirmation";
import Login from "./Login";

// import Cart from "./Cart";

// Product Categories
// Fitness
// Entertainment
// Lifestyle
// Medical
// Gaming
// Pets and Animals

import Entertainment from "./Categories/Entertainment";
import Fitness from "./Categories/Fitness";
import Lifestyle from "./Categories/Lifestyle";
import Medical from "./Categories/Medical";
import Pets from "./Categories/Pets";
import Gaming from "./Categories/Gaming";

// Stretch
import Wishlist from "./Wishlist";

// import Items from "./Items";
const App = () => {
  return (
    <Wrapper>
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
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/category/pets" element={<Pets />} />
            <Route path="/category/gaming" element={<Gaming />} />

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
  background-color: #ffffcc;
  /* height: calc(100vh - 110px); */
  height: 100vh;
`;
const Main = styled.div`
  height: 80vh;
  background-color: #ffffcc;
`;
