import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './opetations'

const initialState = {
    user:{
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    erorr: null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: (bilder) => {
        bilder
            .addCase(register.pending, (state, actions) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.token = actions.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, actions) => {
                state.isLoading = false;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.isLoggedIn = true;
                state.token = actions.payload.token;
                state.isLoading = false;
            })
            .addCase(logIn.rejected, (state, actions ) => {
                state.isLoading = false;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
            })
            .addCase(refreshUser.pending, (state, actions) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, actions) => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.user = actions.payload;
            })
            .addCase(refreshUser.rejected, (state, actions) => {
                state.isRefreshing = false;
                state.erorr = actions.payload;
            })

    }
})
export const authReducer = authSlice.reducer;