import React, {useContext, useEffect, useRef} from "react";
import styled from "styled-components";

import CartContext from "../contexts/CartContext";

import { IoClose } from 'react-icons/io5';

import SquareImage from "../SquareImage";

export const CartItem = ({id, name, price, imageSrc, count}) => {
    const {
        actions:{
            setItemNumber,
            addItem,
            removeItem,
            deleteItem,
        }
    } = useContext(CartContext);
 
    const handleChange = (evt) => {

        setItemNumber({id, count: parseInt(evt.target.value)});
    }

    const handleRemoveFromCart = (evt) => {
        setItemNumber({id, count:0});
    }
  
    return(
        <CartItemWrapper>
            <Item>
                <SquareImage size={'75px'} src={imageSrc}/>
                <ProductDetails>
                    <ProductName>{name}</ProductName>
                    <Price>{price}</Price>
                </ProductDetails>
            </Item>
            <InputContainer>
                <NumberSelector
                    min={0}
                    max={20}
                    defaultValue={count}
                    type="number"
                    onChange = {handleChange}
                />
                <RemoveFromCartButton onClick={handleRemoveFromCart}>
                    <IoClose/>
                </RemoveFromCartButton>
            </InputContainer>
        </CartItemWrapper>
    )
}

const CartItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5px;
`;

const Item = styled.div`
    display: flex;
    align-items;
    margin-right: 20px;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
`;

const ProductName = styled.div`
    padding-bottom: 10px;
    border-bottom: dotted 1px;
`;


const Price = styled.div`
    padding-top: 10px;
`;

const InputContainer = styled.div`
    display: flex;
`;

const NumberSelector = styled.input`
    /* width: 10% */
    width: 15%;
    margin-right: 5px;
    outline: none;
    border: none;
`;

const RemoveFromCartButton = styled.button`
    color: black;
    outline: none;
    background-color: transparent
    text-decoration: none;
    border: none;

`;

export default CartItem;