import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let url = `http://localhost:3000/api/products`
export const fetchAsyncProducts = createAsyncThunk('movies/fetchAsyncProducts', async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching prosucts ", error);
    }

})

export const fetchAsyncProductDetails = createAsyncThunk('movies/fetchAsyncProductDetails', async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching prosucts ", error);
    }

})

const initialState = {
    products: [],
    selectedProduct: {},
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        removeSelectedProduct: (state) => {
            state.selectedProduct = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncProducts.pending, (state) => {
                console.log("Pending")
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully")
                state.products = payload
            })
            .addCase(fetchAsyncProducts.rejected, (state) => {
                console.log("Rejected")
            })
            .addCase(fetchAsyncProductDetails.fulfilled, (state, { payload }) => {
                console.log("Fetched successfully")
                state.selectedProduct = payload
            })
    }
});

export const { removeSelectedProduct } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductDetail = (state) => state.products.selectedProduct;
export default productSlice.reducer;