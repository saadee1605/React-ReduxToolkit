// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./StoreSlice/CartSlice";

const store = configureStore({  //creating a store, our app can access the full store and the items in the store
    reducer: {
        cart: cartReducer
    }
});

export default store;
