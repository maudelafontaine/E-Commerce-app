import React from "react";
/*
    clone is needed becase spread operator is only doing a shallow clone, and our state consists of a nested object
    in strict mode, react calls all reducer functions twice(!) to check for unintended side effects. Since the copy
    was not happening correctly, we were in fact updating part of the original state. Clone fixes this.

    https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice
    https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers
*/
import clone from "just-clone";
export const CartContext = React.createContext();

/*
    Items in the cart will be stored in an object where the item id will be mapped to a count of items
    in the cart, and the price of the item. IE, let's say a user had one of the following item:

      {
    "name": "Garmin Vivofita,, Fitness Band",
    "price": "$129.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "_id": 6556,
    "imageSrc": "data:image/jpeg;base64,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",
    "numInStock": 11,
    "companyId": 10713
  },

  the currentItems object would look like
  {6556: {numInCart: 1, price: 129.99}}
  Note that we are storing an integer value in price, because we should be able to provide a sum total
  of the items in the cart
*/
const initialState = {
  currentItems: {},
  status: "idle",
};

const reducer = (state, action) => {
    
    // action is of the form {type, data}
    // data is of the form {id, count, price}
    switch (action.type){
        
        // The user would like to change the number of a particular item in the cart
        case 'set-item-number':{
            const item = action.data;
            let newItems = clone(state.currentItems);

            if(newItems.hasOwnProperty(item.id) && item.count > 0){
                newItems[item.id].numInCart = item.count;
            }

            else if(newItems.hasOwnProperty(item.id) && item.count > 0){
                // Setting the item to 0 should remove it from the cart entirely
                delete newItems[item.id];
            }

            return {
                ...state,
                currentItems: newItems,
            }
        }

        // The user would like to add an item to the cart
        case 'add-item':{
            const item = action.data;
            let newItems = clone(state.currentItems);
            if(newItems.hasOwnProperty(item.id)){
                // We already have this item in the cart, so just need to update the count
                newItems[item.id].numInCart += item.count;
            }

            else{
                // We do not already have this item in the cart, so we need to add a new key
                // entirely
                // debugger;
                newItems[item.id] = {numInCart: item.count, price: item.price};
            }

            return {
                ...state,
                currentItems: newItems,
            };
        }
        
        // The user would like to remove a single instance of an item from the cart
        case 'remove-item':{
            // debugger;
            const item = action.data;
            let newItems = clone(state.currentItems);
            // We have more than one instance in the card, so we just need to remove one
            if(newItems.hasOwnProperty(item.id) && newItems[item.id].numInCart > 1){
                newItems[item.id].numInCart --;
            }

            // We do not allow the cart to have 0 of an item in it, so in this case
            // we if we remove the item from the cart we remove reference to it altogether
            else if(newItems.hasOwnProperty(item.id) && newItems[item.id].numInCart === 1){
                delete newItems[item.id];
            }

            // An else here would cover the case that the item is already not in the cart. 
            // In this case there is nothing to remove, so do nothing IE no need for a separate case

            return {
                ...state,
                currentItems: newItems,
            }
        }

        // The user would like to remove all instances of an item from the cart
        case 'delete-item':{
            const item = action.data;
            let newItems = clone(state.currentItems);
            if(newItems.hasOwnProperty(item.id)) delete newItems[item.id];
        
            return {
                ...state,
                currentItems: newItems,
            }
        }
        
        // TODO: Implement this case once services are ready
        // case 'confirm-purchase':
        //     return {

        //     }
        
        default:
            throw new Error(`Action type ${action.type} is not recognized!`)
    }

};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    // functions which take action on the contents of the cart
    
    const setItemNumber = (data) => {
        dispatch({
            type:'set-item-number',
            data
        });
    }

    const addItem = (data) => {
        console.log('adding item');
        console.log(data);
        dispatch({
            type:'add-item',
            data,
        });
    };
    
    const removeItem = (data) => {
        dispatch({
            type:'remove-item',
            data,
        });
    };

    const deleteItem = (data) => {
        dispatch({
            type:'delete-item',
            data,
        });
    };

    const getTotal = () => {
        // Returns the total cost of the items in the cart
        const total =  Object.keys(state.currentItems).reduce(
            (previousValue, currentValue) => {
                // previousValue is the total cost so far
                // currentValue is the key of the current item in the cart
                console.log(currentValue);
                console.log(previousValue);
                const currentItem = state.currentItems[currentValue];
                console.log('count ', currentItem.count);
                console.log('price ', currentItem.price);
                return previousValue + (currentItem.numInCart *  currentItem.price);
            }, 0
        );
        return total;
    };

    // 


    // TODO: implement this once the services are ready
    // const purchaseItemsInCart = () => {
    //     dispatch({
    //         type:'confirm-purchase',
    //     });
    // }

    return(
        <CartContext.Provider
            value={{
                ...state,
                actions:{
                    setItemNumber,
                    addItem,
                    removeItem,
                    deleteItem,
                    // purchaseItemsInCart
                    getTotal,
                }
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;
