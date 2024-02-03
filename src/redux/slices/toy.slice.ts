import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api"
import { IToyInfo } from "../../models/toy";

export interface ToyInitialState {
    toy: IToyInfo | null;
}

export const toysInitialState: ToyInitialState = {
    toy: null,
};

export const fetchToy = createAsyncThunk('toy/fetchToy', async (toyId: string) => {
    try {
        const {data} = await api.get(`/toys/${toyId}`);
       
        return data;
    } catch (error) {
        console.error('Failed to fetch toys:', error);
        throw error;
    }
});

export const toySlice = createSlice({
    name: 'toy',
    initialState: toysInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToy.fulfilled, (state, action) => {
                console.log('fetchToy.fulfilled', action.payload);
                
                state.toy = action.payload;
            })
    },
});