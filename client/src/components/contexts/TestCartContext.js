// import React from "react";
// import CartContext from "./CartContext";

// const TestCartContext = () => {

//     const {
//         currentItems,
//         actions:{
//             addItem,
//             removeItem,
//             deleteItem,
//         }
//     } = React.useContext(CartContext);

//     const testAddItem = (evt) => {
//         evt.preventDefault();
//         evt.stopPropagation();
//         addItem({id: 1, count: 3, price: 100});
//     }

//     const testRemoveItems = (evt) => {
//         evt.preventDefault();
//         evt.stopPropagation();
//         removeItem({id: 1, count: 1, price: 100});
//     }

//     const testDeleteItems = (evt) => {
//         evt.preventDefault();
//         evt.stopPropagation();
//         deleteItem({id: 1, count: 1, price: 100});
//     }

//     return(
//         <>
//         <button onClick={testAddItem}>add id1 count 3 price 100 to cart</button>
//         <button onClick={testRemoveItems}>remove id1 count 1 price 100 from cart</button>
//         <button onClick={testDeleteItems}>delete id1 from cart</button>
//         {
//             currentItems[1] &&
//             <div>Current Items: {currentItems[1].numInCart}</div>
//         }
//         </>
//     );
// }

// export default TestCartContext;
