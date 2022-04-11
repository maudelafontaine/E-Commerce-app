// Homepage component : landing page of our website

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";

const Homepage = () => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/category/lifestyle");
  };

  return (
    <Container>
      <PromotionContainer>
        <Picture src="/assets/heart.png" />
        <Divider>
          <Message>Up to 40% Off on our Lifestyle collection</Message>
          <Btn onClick={handleClick}>Shop now</Btn>
        </Divider>
      </PromotionContainer>
      <DetailsContainer>
        <Text>
          <FiTruck /> Free shipping on orders over $100
        </Text>
        <Text>
          {" "}
          <BsBag /> Free returns by Mail
        </Text>
        <Text>
          {" "}
          <AiOutlineTags /> Price match guarantee{" "}
        </Text>
      </DetailsContainer>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  /* background-color: #adebeb; */
  height: 700px;
`;

const PromotionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffe6e6;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Picture = styled.img`
  width: 500px;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  border-radius: 5px;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const Message = styled.h2`
  color: black;
  margin-top: 10px;
  margin-bottom: 8px;
  background-color: white;
  padding: 22px;
  border-style: solid;
  /* border-color: #003399; */
  border-width: 4px;
  font-size: 25px;
`;

const Btn = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  width: 130px;
  height: 60px;
  border-color: white;
  font-weight: bold;
  /* color: #003399; */
  color: white;
  background-color: #adebeb;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Text = styled.h2`
  color: black;
  padding: 20px;
  background-color: white;
  margin: 8px;
  border-radius: 2px;
  font-size: 18px;
`;

// Ideas :
// browse by category

/* <Message>
        Get -25% on our <strong>Lifestyle</strong> collection
      </Message>
*/
