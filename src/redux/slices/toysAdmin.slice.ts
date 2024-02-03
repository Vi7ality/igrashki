import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api"
import { IToy } from "../../models/toy";

export interface ToysAdminInitialState {
    toysAdmin: IToy[];
}

export const toysInitialState: ToysAdminInitialState = {
    toysAdmin: [],
};

export const fetchToysAdmin = createAsyncThunk('toysAdmin/fetchToys', async () => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.get('/management/toys', {
            headers: {
                Authorization: `Bearer ${managerToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch toys:', error);
        throw error;
    }
});

export const addToyAdmin = createAsyncThunk('toysAdmin/addToy', async (toy: Partial<IToy>) => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.post('/management/toys', toy, {
            headers: {
                Authorization: `Bearer ${managerToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add toy:', error);
        throw error;
    }
});

export const updateToyAdmin = createAsyncThunk('toysAdmin/updateToy', async (toy: Partial<IToy>) => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.put(`/management/toys/${toy._id}`, toy, {
            headers: {
                Authorization: `Bearer ${managerToken}`,
            },
        });
        return {...toy, ...response.data};
    } catch (error) {
        console.error('Failed to update toy:', error);
        throw error;
    }
});

export const deleteToyAdmin = createAsyncThunk('toysAdmin/deleteToy', async (toyId: string) => {
    try {
        await api.delete(`/toysAdmin/${toyId}`);
        return toyId;
    } catch (error) {
        console.error('Failed to delete toy:', error);
        throw error;
    }
});

export const toysAdminSlice = createSlice({
    name: 'toysAdmin',
    initialState: toysInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToysAdmin.fulfilled, (state, action) => {
                state.toysAdmin = action.payload;
            })
            .addCase(addToyAdmin.fulfilled, (state, action) => {
                state.toysAdmin.push(action.payload);
            })
            .addCase(updateToyAdmin.fulfilled, (state, action) => {
                const toyIndex = state.toysAdmin.findIndex(toy => toy._id === action.payload?._id);
                if (toyIndex !== -1) {
                    state.toysAdmin[toyIndex] = { ...action.payload, toyName: state.toysAdmin[toyIndex].toyName };
                }
            })
            .addCase(deleteToyAdmin.fulfilled, (state, action) => {
                state.toysAdmin = state.toysAdmin.filter(toy => toy._id !== action.payload);
            });
    },
});