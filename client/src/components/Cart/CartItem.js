import React, {useContext, useEffect, useRef} from "react";
import styled from "styled-components";

import CartContext from "../contexts/CartContext";

import { IoBagRemove} from 'react-icons/io5';

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

    return(
        <CartItemWrapper>
            <Item>
                <SquareImage size={'75px'} src={imageSrc}/>
                <ProductDetails>
                    <ProductName>{name}</ProductName>
                    <Price>{price}</Price>
                </ProductDetails>
            </Item>
            <NumberSelector
                min={0}
                max={20}
                default={count}
                type="number"
            />
            <RemoveFromCartButton>
                <IoBagRemove/>
            </RemoveFromCartButton>
        </CartItemWrapper>
    )
}

const CartItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
`;

const Item = styled.div`
    display: flex;
    align-items;

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

const NumberSelector = styled.input`
    width: 7%;
    margin-right: 5px;
`;

const RemoveFromCartButton = styled.button`
`;

export default CartItem;