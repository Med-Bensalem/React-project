import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token :null,
    userInfo:null
};

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        
    }
})