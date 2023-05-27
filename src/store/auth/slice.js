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
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: (bilder) => {
        bilder
            .addCase(register.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.token = actions.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.isLoggedIn = true;
                state.token = actions.payload.token;
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
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })

    }
})
export const authReducer = authSlice.reducer;