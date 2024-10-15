import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token :null,
    userInfo:null
};

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state, action) => {
            state.token=action.payload.token;
            //state.userInfo=action.payload.userInfo;
        },

        logout:(state) => {
            state.token=null;
            state.userInfo=null;
        },
    }
})