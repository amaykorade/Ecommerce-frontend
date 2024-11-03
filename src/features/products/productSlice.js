import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// let url = `http://localhost:3000/api`
let url = `https://ecommerce-backend-1z4o.onrender.com/api`
export const fetchAsyncProducts = createAsyncThunk('products/fetchAsyncProducts', async () => {
    try {
        const response = await fetch(`${url}/products`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });
        const data = await response.json();
        // console.log(" original data ", data)

        return data;
    } catch (error) {
        console.error("Error fetching products ", error);
    }

})

export const fetchFilterProducts = createAsyncThunk('products/fetchFilterProducts', async (filterParams) => {
    try {
        const queryParms = new URLSearchParams(filterParams).toString();
        console.log("Q: ", queryParms);
        const response = await fetch(`${url}/products/filter?${queryParms}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });
        const data = await response.json();
        // console.log(" original data ", data)
        if (!response.ok) {
            throw new Error(data.message || 'Could not fetch filtered products');
        }

        return data;
    } catch (error) {
        console.error("Error fetching filtered products ", error);
    }

})

export const fetchAsyncProductDetails = createAsyncThunk('products/fetchAsyncProductDetails', async (id) => {
    try {
        const response = await fetch(`${url}/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });
        const data = await response.json();
        // console.log(" original data ", data)
        return data;
    } catch (error) {
        console.error("Error fetching products ", error);
    }

})

export const addProduct = createAsyncThunk('products/addProduct', async (productData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${url}/products`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: productData,
        });
        const data = await response.json();
        console.log("data :", data)

        if (!response.ok) {
            throw new Error(data.message || 'Could not add product');
        }

        return data;
    } catch (error) {
        console.error("Error adding product", error);
        return rejectWithValue(error.message);
    }
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId, thunkAPI) => {
    try {
        const token = localStorage.getItem("token") ?? "";
        const response = await axios.delete(`${url}/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return productId;
    } catch (err) {
        if (err.response) {
            // Server responded with a status other than 2xx
            return thunkAPI.rejectWithValue(err.response.data);
        } else if (err.request) {
            // Request was made but no response was received
            return thunkAPI.rejectWithValue({ error: "No response received from the server" });
        } else {
            // Something happened in setting up the request that triggered an Error
            return thunkAPI.rejectWithValue({ error: err.message });
        }
    }
});


const initialState = {
    products: [],
    selectedProduct: {},
    status: 'idle',
    error: null
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
                state.status = 'loading'
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.products = payload
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchFilterProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchFilterProducts.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.products = payload
            })
            .addCase(fetchFilterProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAsyncProductDetails.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.selectedProduct = payload
            })
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addProduct.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.products.push(payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = state.products.filter(product => product.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
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