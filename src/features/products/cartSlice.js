import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let url = `https://ecommerce-backend-1z4o.onrender.com/api`
// const url = `https://http://localhost:3001/api`;


export const fetchAsyncCart = createAsyncThunk('cart/fetchAsyncCart', async () => {
    try {
        const response = await fetch(`${url}/cart`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });

        const data = await response.json();

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
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
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
                state.grandTotal = payload.grandTotal
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
export const selectCartTotal = (state) => state.cart.grandTotal;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;