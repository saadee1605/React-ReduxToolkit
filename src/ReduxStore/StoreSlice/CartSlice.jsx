import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    quantity: 0
};

const cartSlice = createSlice({   //creating a slice...You can add the reducers in a slice which are linked like in this case add, remove and clear are linked to a single thing which is product
    name: 'cart',
    initialState,  //initial state which is defined above
    reducers: {
        addToCart(state, action) {   //action 1
            const item = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.carts.push({ ...item, quantity: 1 });
            }
            state.quantity += 1;
        },
        removeFromCart(state, action) {  //action 2
            const itemId = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === itemId);
            console.log(itemId);
            
            if (existingItem) {
                console.log(44);
                
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.carts = state.carts.filter(cartItem => cartItem.id !== itemId);
                }
                state.quantity -= 1;
            }
        },
        clearAllCart(state) { //action 3
            state.carts = [];
            state.quantity = 0;
        }
    }
});


export const { addToCart, removeFromCart, clearAllCart } = cartSlice.actions;  //exporting the functions

export default cartSlice.reducer;
