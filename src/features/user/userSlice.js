import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `http://localhost:3000/api`;

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${url}/user/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Could not log in');
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const signupUser = createAsyncThunk('auth/signupUser', async (userInfo, { rejectWithValue }) => {
    try {
        const response = await fetch(`${url}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Could not sign up');
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(signupUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout, setCredentials } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthToken = (state) => state.auth.token;
export default authSlice.reducer;