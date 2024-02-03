import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IClient } from "../../models/client";
import api from "../../api"

export interface ClientsInitialState {
    clients: IClient[];
}

export const clientsInitialState: ClientsInitialState = {
    clients: [],
}

export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.get('/management/clients', {
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

export const removeClient = createAsyncThunk('clients/removeClient', async (clientId: string) => {
    try {
        await api.delete(`/clients/${clientId}`);
        return clientId;
    } catch (error) {
        console.error('Failed to remove client:', error);
        throw error;
    }
});

// export const addClient = createAsyncThunk('clients/addClient', async (client: IClient) => {
//     try {
//         const response = await api.post('/management/clients', client);
//         return response.data;
//     } catch (error) {
//         console.error('Failed to add client:', error);
//         throw error;
//     }
// });

export const addClient = createAsyncThunk('clients/addClient', async (client: IClient) => {
    try {
        const managerToken = localStorage.getItem('managerToken');
        const response = await api.post('/management/clients', client, {
            headers: {
                Authorization: `Bearer ${managerToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add client:', error);
        throw error;
    }
});

export const updateClient = createAsyncThunk('clients/updateClient', async (client: IClient) => {
    try {
        const response = await api.put(`/clients/${client._id}`, client);
        return response.data;
    } catch (error) {
        console.error('Failed to update client:', error);
        throw error;
    }
});

export const clientsSlice = createSlice({
    name: 'clients',
    initialState: clientsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.clients = action.payload;
            })
            .addCase(removeClient.fulfilled, (state, action) => {
                state.clients = state.clients.filter(client => client._id !== action.payload);
            })
            .addCase(addClient.fulfilled, (state, action) => {
                state.clients.push(action.payload);
            })
            .addCase(updateClient.fulfilled, (state, action) => {
                state.clients = state.clients.map(client => client._id === action.payload.id ? action.payload : client);
            });
    },
});

