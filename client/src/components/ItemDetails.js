// Item details component : when user clicks on an item, it gets redirected to a detailed page of the item

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Loader from "./Loader";

const ItemDetails = () => {
  // get product by id : "/product/:_id"
  const { _id } = useParams();
  const [item, setItem] = useState("");
  const [increment, setIncrement] = useState("");
  const [decrement, setDecrement] = useState("");

  useEffect(() => {
    const findItem = async () => {
      const res = await fetch(`/product/${_id}`);
      const data = await res.json();
      console.log(data.data);
      setItem(data.data);
    };
    findItem();
  }, [_id]);

  if (!item) {
    return <Loader />;
  }
  console.log(item.imageSrc);

  return (
    <Container>
      <PictureContainer>
        <Picture src={item.imageSrc} />
      </PictureContainer>
      <DetailsContainer>
        <Name>{item.name}</Name>
        <Price>{item.price}</Price>

        <AddToCartContainer>
          <Increment>+</Increment>
          <Quantity>1</Quantity>
          <Decrement>-</Decrement>
          <AddToCartBtn>ADD TO CART</AddToCartBtn>
          <AddToWishList>
            <AiFillHeart />
          </AddToWishList>
        </AddToCartContainer>
      </DetailsContainer>
    </Container>
  );
};

export default ItemDetails;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 1000px;
  /* background-color: pink; */
  /* border: 4px solid black; */
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 3px solid black; */
  flex-basis: auto;
  width: 400px;
  background-color: white;
`;

const Picture = styled.img`
  border: 4px solid black;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 3px solid black; */
  /* flex-basis: auto; */
  width: 400px;
  background-color: white;
`;

const Name = styled.h2`
  color: black;
  font-size: 24px;
`;

const Price = styled.h2`
  color: black;
`;

const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Increment = styled.button``;

const Decrement = styled.button``;

const Quantity = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const AddToCartBtn = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  margin-left: 20px;
  background-color: grey;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const AddToWishList = styled.div`
  background-color: pink;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  /* height: 40px; */
`;

// Notes :
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
