import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// let url = `http://localhost:3000/api/products`
let url = `http://localhost:3000/api`
export const fetchAsyncProducts = createAsyncThunk('movies/fetchAsyncProducts', async () => {
    try {
        const response = await fetch(`${url}/products`);
        const data = await response.json();
        // console.log(" original data ", data)

        return data;
    } catch (error) {
        console.error("Error fetching prosucts ", error);
    }

})

export const fetchAsyncProductDetails = createAsyncThunk('movies/fetchAsyncProductDetails', async (id) => {
    try {
        const response = await fetch(`${url}/products/${id}`);
        const data = await response.json();
        // console.log(" original data ", data)
        return data;
    } catch (error) {
        console.error("Error fetching prosucts ", error);
    }

})




const initialState = {
    products: [],
    selectedProduct: {},
    cart: []
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


// for adding the data
// export const addToCart = createAsyncThunk('cart/addToCart', async (productId) => {
//     console.log("product id ", productId);
//     try {
//         const response = await fetch(`${url}/cart`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ productId }),
//         });

//         if (!response.ok) {
//             const errorText = await response.text();
//             throw new Error(`Error adding product to cart: ${errorText}`);
//         }


//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error adding product to cart Items ", error);
//     }
// })