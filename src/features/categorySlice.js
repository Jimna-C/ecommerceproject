import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    category:[],
    statuses:null,
};


export const categoriesFetch=createAsyncThunk(
    "categories/categoriesFetch",
    async()=>{
        const response=await axios.get("http://localhost:3001/get-category")
        return response?.data
    }
)

const categoriesSlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:{
        [categoriesFetch.pending]:(state,action)=>{
            state.statuses="pending"
        },
        [categoriesFetch.fulfilled]:(state,action)=>{
            state.statuses="success"
            state.category=action.payload
        },
        [categoriesFetch.rejected]:(state,action)=>{
            state.statuses="rejected"
        }
    }
});

export default categoriesSlice.reducer;