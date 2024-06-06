import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import cartReducer from "./products/cartSlice";
import paymentReducer from "./payment/paymentSlice";
import authReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        payment: paymentReducer
    }
});

