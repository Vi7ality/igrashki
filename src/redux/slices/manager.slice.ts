import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { IManager, IManagerCredentials } from '../../models/manager';

export interface ManagerInitialState {
    currentManager: IManager | null;
    loading: boolean;
    error: string | null;
}

const initialState: ManagerInitialState = {
    currentManager: null,
    loading: false,
    error: null,
};

export const managerLogin = createAsyncThunk(
    'manager/managerLogin',
    async (managerCredential: IManagerCredentials) => {
        try {
            const result = await api.post('/auth/loginManager', managerCredential);
            return result.data;
        } catch (error) {
            throw new Error('Failed to fetch client');
        }
    }
);
export const managerGetInfo = createAsyncThunk(
    'manager/managerGetInfo',
    async () => {
        try {
            const managerToken = localStorage.getItem('managerToken');
            const result = await api.get(`/management/getMe`, {
                headers: { 
                    Authorization: `Bearer ${managerToken}`,
                }
            });
            
            return result.data;
        } catch (error) {
            throw new Error('Failed to fetch client');
        }
    }
);

export const managerSlice = createSlice({
    name: 'manager',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentManager = null;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('managerToken');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(managerLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(managerLogin.fulfilled, (state, action) => {
                console.log("Current Manager: ", action.payload);
                state.currentManager = action.payload;
                state.loading = false;
                state.error = null;
                localStorage.setItem('managerToken', action.payload.token);
            })
            .addCase(managerLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch client';
            })
            .addCase(managerGetInfo.fulfilled, (state, action) => {
                state.currentManager = action.payload;
                state.loading = false;
                state.error = null;
            });
    },
});

export const { logout: managerLogout } = managerSlice.actions;