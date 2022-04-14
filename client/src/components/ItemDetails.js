// Item details component : when user clicks on an item, it gets redirected to a detailed page of the item

import React, { useEffect, useState, useContext, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Loader from "./Loader";
import CartContext from "./contexts/CartContext";

const ItemDetails = () => {
  const { _id } = useParams();
  const [item, setItem] = useState("");
  const [qty, setQty] = useState(0);

  let navigate = useNavigate();

  const {
    actions: { setItemNumber },
  } = useContext(CartContext);

  // Get the item by id
  useEffect(() => {
    const findItem = async () => {
      const res = await fetch(`/product/${_id}`);
      const data = await res.json();
      setItem(data.data);
    };
    findItem();
  }, [_id]);

  if (!item) {
    return <Loader />;
  }

  //
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  // Increase quantity by 1
  const handleIncrement = () => {
    setQty(qty + 1);
  };

  // Decrease quantity by 2
  const handleDecrement = () => {
    setQty(qty - 1);
  };

  // Add the item(s) to the cart
  const handlePurchase = () => {
    const price = parseFloat(item.price.replace("$", ""));
    setItemNumber({ id: _id, price: price, count: qty });
    navigate("/cart");
  };

  return (
    <Container>
      <PictureContainer>
        <Picture src={item.imageSrc} />
      </PictureContainer>
      <DetailsContainer>
        <Name>{item.name}</Name>
        <Price>{item.price}</Price>
        <AddToCartContainer>
          <Increment onClick={handleIncrement}>&#43;</Increment>
          <Quantity value={qty} onChange={handleChange}></Quantity>
          <Decrement onClick={handleDecrement}>&#45;</Decrement>
          <AddToCartBtn onClick={handlePurchase}>ADD TO CART</AddToCartBtn>
          <AddToWishList>
            <AiFillHeart />
          </AddToWishList>
        </AddToCartContainer>
      </DetailsContainer>
    </Container>
  );
};

export default ItemDetails;

// Styles :

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 700px;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  width: 400px;
  background-color: white;
`;

const Picture = styled.img``;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const Name = styled.h2`
  color: black;
  font-size: 22px;
  padding: 10px;
`;

const Price = styled.h2`
  color: black;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
`;

const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Increment = styled.button`
  border: none;
  color: black;
  background-color: #ffe6e6;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Decrement = styled.button`
  border: none;
  color: black;
  background-color: #ffe6e6;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  margin-left: 5px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const Quantity = styled.input`
  width: 20px;
  height: 30px;
  border: none;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  color: black;
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
  background-color: #ff6666;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;
