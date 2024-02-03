import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IClient, IClientCredentials } from '../../models/client';
import api from '../../api';

export interface ClientInitialState {
    client: IClient | null;
    loading: boolean;
    error: string | null;
}


const initialState: ClientInitialState = {
    client: null,
    loading: false,
    error: null,
};

export const clientLogin = createAsyncThunk(
    'client/login',
    async (clientCredential: IClientCredentials) => {
        try {
            const response = await api.post('/auth/login', clientCredential);
            return response.data;
        } catch (error: Error | any) {
            throw new Error("Failed to login");
        }
    }
);

export const autoLogin = createAsyncThunk(
    'client/authoLogin',
    async (token: string) => {
        try {
            const response = await api.get('/clients/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to login');
        }
    }
);

export const fetchClientById = createAsyncThunk(
    'client/fetchClientById',
    async (clientId: string) => {
        try {
            const result = await api.get(`/clients/${clientId}`);
            return result.data;
        } catch (error) {
            throw new Error('Failed to fetch client');
        }
    }
);

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        clearClient: (state) => {
            state.client = null;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('userToken');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClientById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClientById.fulfilled, (state, action) => {
                state.client = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchClientById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch client';
            })
            .addCase(clientLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(clientLogin.fulfilled, (state, action) => {
                state.client = action.payload;
                state.loading = false;
                state.error = null;
                localStorage.setItem('userToken', action.payload.token);
            })
            .addCase(clientLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to login';
            })
            .addCase(autoLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.client = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(autoLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to login';
            });
    },
});


export const { clearClient } = clientSlice.actions;