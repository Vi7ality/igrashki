import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { IToyInfo } from '../../models/toy';
import { toast } from 'react-toastify';

export interface ToyAdminInitialState {
  toy: IToyInfo | null;
}

export const toysInitialState: ToyAdminInitialState = {
  toy: null,
};

export const fetchToyAdmin = createAsyncThunk(
  'toyAdmin/fetchToyAdmin',
  async (toyId: string) => {
    try {
      const managerToken = localStorage.getItem('managerToken');
      const { data } = await api.get(`/management/toys/${toyId}`, {
        headers: {
          Authorization: `Bearer ${managerToken}`,
        },
      });

      return data;
    } catch (error) {
      console.error('Failed to fetch toys:', error);
      toast.error('Сталася помилка');
      throw error;
    }
  }
);

export const toyAdminSlice = createSlice({
  name: 'toyAdmin',
  initialState: toysInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchToyAdmin.fulfilled, (state, action) => {
      state.toy = action.payload;
    });
  },
});
