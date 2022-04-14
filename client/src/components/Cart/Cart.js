import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";
import Loader from "../Loader";

import { useNavigate } from "react-router-dom";

import clone from "just-clone";

export const Cart = () => {
  const navigate = useNavigate();

  const [localTotal, setLocalTotal] = useState(null);
  const [cartDetails, setCartDetails] = useState([]);
  const [cartDetailsStatus, setCartDetailsStatus] = useState("waiting");
  const [purchaseStatus, setPurchaseStatus] = useState("idle");

  const {
    currentItems,
    actions: {
      setItemNumber,
      addItem,
      removeItem,
      deleteItem,
      getTotal,
      getIds,
      clearCart,
    },
  } = useContext(CartContext);

  useEffect(() => {
    setCartDetailsStatus("waiting");
    const payload = { ids: getIds() };
    const fetchingData = async () => {
      try {
        const data = await fetch("/product/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const json = await data.json();
        setCartDetails(json.data);
        setCartDetailsStatus("idle");
      } catch (err) {
        setCartDetailsStatus("err");
      }
    };

    fetchingData();
  }, [currentItems]);

  const purchaseItems = async () => {
    const itemsToPurchase = cartDetails.map((item) => {
      const payloadItem = {
        _id: item._id,
        count: currentItems[item._id].numInCart,
      };
      return payloadItem;
    });

    const message = { items: itemsToPurchase };
    setPurchaseStatus("waiting");
    const rawResp = await fetch("/product/purchase", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (rawResp.status > 400) {
      setPurchaseStatus("error");
    } else {
      const content = await rawResp.json();
      clearCart();
      setPurchaseStatus("completed");
      navigate("/confirmation");
    }
  };

  return (
    <CartWrapper>
      <CartSideCard>
        <CardSideWrapper>
          <CardSideTitle>Shopping</CardSideTitle>
          <CardSideTitle>Cart</CardSideTitle>
        </CardSideWrapper>
      </CartSideCard>
      {cartDetailsStatus === "waiting" && <Loader />}
      {cartDetailsStatus === "idle" && (
        <CartDetails>
          {cartDetails.map((elt) => {
            return (
              <CartItem
                key={elt._id}
                id={elt._id}
                name={elt.name}
                price={elt.price}
                imageSrc={elt.imageSrc}
                count={currentItems[elt._id] && currentItems[elt._id].numInCart}
              />
            );
          })}
          <div>Seller Instructions</div>
          <SellerInstructions rows={4} cols={50}></SellerInstructions>
          <Total amt={getTotal()} />
          <CheckoutButton onClick={purchaseItems}>Checkout</CheckoutButton>
        </CartDetails>
      )}
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  /* font-family: "Helvetica", sans-serif; */
`;

const CartSideCard = styled.div`
  /* TODO: see what can be taken from global styles */
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSideWrapper = styled.div`
  border-bottom: solid 5px;
  font-weight: bold;
  /* margin */
`;

const CardSideTitle = styled.div`
  font-size: 32pt;
`;

const UpdateButton = styled.button`
  /* TODO: see what can be taken from global styles */
`;

const SellerInstructions = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  margin: 10px 0px;
`;

const Total = ({ amt }) => {
  return (
    <div>
      <TotalText>Total: </TotalText>
      <TotalAmt>${amt.toFixed(2)}</TotalAmt>
    </div>
  );
};

const TotalText = styled.span`
  font-weight: bold;
  font-size: 20pt;
`;

const TotalAmt = styled.span`
  /* TODO: see what can be taken from global styles */
`;

const CartDetails = styled.div``;

const CheckoutButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  margin-top: 12px;
  background-color: grey;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export default Cart;
