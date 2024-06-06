import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let url = `http://localhost:3000/api`

export const fetchAsyncCart = createAsyncThunk('cart/fetchAsyncCart', async () => {
    try {
        const response = await fetch(`${url}/cart`);
        // const cartItems = await response.json();
        const data = await response.json();
        // const data = cartItems.cartItems;
        // console.log(" original data ", data)
        return data;

    } catch (error) {
        console.error("Error fetching cart Items ", error);
    }

})

// add to cart
export const addToCart = createAsyncThunk('cart/addToCart', async (productID) => {
    console.log("product id", productID);

    try {
        const response = await fetch(`${url}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productID }),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error adding product to cart: ${errorText}`);
        };
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding product to cart Items ", error);
        throw error;
    };
});

// remove item from cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (prodId) => {
    try {
        const response = await fetch(`${url}/cart/${prodId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error removing product from cart: ${errorText}`);
        }
        return prodId;
    } catch (error) {
        console.error("Error removing product from cart Items ", error);
        throw error;
    };
})


const initialState = {

    cartItems: [],
    status: 'idle',
    error: null,
    grandTotal: 0

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncCart.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.cartItems = payload.cartItems || [];
            })
            .addCase(fetchAsyncCart.rejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error.message;
            })
            .addCase(addToCart.fulfilled, (state, { payload }) => {
                console.log("Added to cart successfully");
                state.cartItems.push(payload);
            })
            .addCase(removeFromCart.fulfilled, (state, { payload }) => {
                console.log("Removed from cart successfully");
                state.cartItems = state.cartItems.filter(item => item._id !== payload);

            })

    }
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;