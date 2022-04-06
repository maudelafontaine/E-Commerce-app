import React, { useEffect, useContext } from "react";
import CartContext from "../contexts/CartContext";
import Cart from "./Cart";

export const TestCart = () => {
    const {
        currentItems,
        actions:{
            setItemNumber,
            addItem,
            removeItem,
            deleteItem,
        }
    } = useContext(CartContext);

    useEffect(() => {
        addItem({id: 6556, count: 1, price: 129.99});
        addItem({id: 6557, count: 1, price: 169.95});
    }, []);


    return(<Cart/>);
};

export default TestCart;