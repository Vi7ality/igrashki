import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api"
import { IToyInfo } from "../../models/toy";
import { IManager } from "../../models/manager";

export interface ToysInitialState {
    toys: IToyInfo[];
    isLoading?: boolean;
    error?: string | null;
}

export const toysInitialState: ToysInitialState = {
    toys: [],
    isLoading: false,
    error: null,
};

export const fetchToys = createAsyncThunk('toys/fetchToys', async (selectedManagementPoint: IManager) => {
    try {
        const response = await api.get(`/toys/managementPoint/${selectedManagementPoint?._id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch toys:', error);
        throw error;
    }
});

export const addToy = createAsyncThunk('toys/addToy', async (toy: IToyInfo) => {
    try {
        const response = await api.post('/toys', toy);
        return response.data;
    } catch (error) {
        console.error('Failed to add toy:', error);
        throw error;
    }
});

export const updateToy = createAsyncThunk('toys/updateToy', async (toy: IToyInfo) => {
    try {
        const response = await api.put(`/toys/${toy._id}`, toy);
        return response.data;
    } catch (error) {
        console.error('Failed to update toy:', error);
        throw error;
    }
});

export const deleteToy = createAsyncThunk('toys/deleteToy', async (toyId: string) => {
    try {
        await api.delete(`/toys/${toyId}`);
        return toyId;
    } catch (error) {
        console.error('Failed to delete toy:', error);
        throw error;
    }
});

export const toysSlice = createSlice({
    name: 'toys',
    initialState: toysInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToys.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchToys.fulfilled, (state, action) => {
                state.toys = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchToys.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addToy.fulfilled, (state, action) => {
                state.toys.push(action.payload);
                state.isLoading = false;
            })
            .addCase(updateToy.fulfilled, (state, action) => {
                const toyIndex = state.toys.findIndex(toy => toy._id === action.payload.id);
                if (toyIndex !== -1) {
                    state.toys[toyIndex] = action.payload;
                }
            })
            .addCase(deleteToy.fulfilled, (state, action) => {
                state.toys = state.toys.filter(toy => toy._id !== action.payload);
            });
    },
});