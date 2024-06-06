import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `http://localhost:3000/api`;

export const createOrder = createAsyncThunk('payment/createOrder', async (amount) => {
    try {
        const response = await fetch(`${url}/payment/create-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating order", error);
        throw error;
    }
});

const initialState = {
    orderDetails: {},
    status: 'idle',
    error: null,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            });
    }
});

export const selectOrderDetails = (state) => state.payment.orderDetails;
export default paymentSlice.reducer;