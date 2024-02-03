import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IClient } from "../../models/client";
import api from "../../api"

export interface ClientAdminInitialState {
    clientInfoAdmin: IClient | null;
}

export const clientAdminInitialState: ClientAdminInitialState = {
    clientInfoAdmin: null,
}

export const fetchClientInfoForAdmin = createAsyncThunk('clients/fetchClientInfoForAdmin', async (clientId: string) => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.get(`/management/clients/${clientId}`, {
            headers: {
                Authorization: `Bearer ${managerToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch clients:', error);
        throw error;
    }
});

export const clientAdminSlice = createSlice({
    name: 'clientAdmin',
    initialState: clientAdminInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClientInfoForAdmin.fulfilled, (state, action) => {
                state.clientInfoAdmin = action.payload;
            })
    },
});

