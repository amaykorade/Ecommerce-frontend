import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `https://ecommerce-backend-1z4o.onrender.com/api`;
// const url = `https://http://localhost:3001/api`;


export const getUserOrders = createAsyncThunk('payment/getUserOrder', async () => {
    try {
        const response = await fetch(`${url}/payment/getuserorders`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user orders", error);
        throw error;
    }
});

export const createOrder = createAsyncThunk('payment/createOrder', async ({ amount, cartItems }) => {
    try {
        const response = await fetch(`${url}/payment/create-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ amount, cartItems }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating order", error);
        throw error;
    }
});

export const getKey = createAsyncThunk('payment/getkey', async () => {
    try {
        const response = await fetch(`${url}/payment/getkey`, {

            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        // console.log(data);
        return data.key;
    } catch (error) {
        console.error("Error creating order", error);
        throw error;
    }
});

const initialState = {
    orderDetails: {},
    userOrders: {},
    key: {},
    status: 'idle',
    error: null,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userOrders = action.payload;
            })
            .addCase(getUserOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orderDetails = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getKey.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getKey.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.key = action.payload;
            })
            .addCase(getKey.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectOrderDetails = (state) => state.payment.orderDetails;
export const userOrders = (state) => state.payment.userOrders;
export const selectKey = (state) => state.payment.key;
export const paymentstatus = (state) => state.payment.status;
export const paymenterror = (state) => state.payment.error;
export default paymentSlice.reducer;