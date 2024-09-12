import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { IToyInfo } from '../../models/toy';
import { IManager } from '../../models/manager';
import { toast } from 'react-toastify';

export interface ToysInitialState {
  toys: IToyInfo[];
  loading?: boolean;
  error?: string | null;
}

export const toysInitialState: ToysInitialState = {
  toys: [],
  loading: false,
  error: null,
};

export const fetchToys = createAsyncThunk(
  'toys/fetchToys',
  async (selectedManagementPoint: IManager) => {
    try {
      const response = await api.get(
        `/toys/managementPoint/${selectedManagementPoint?._id}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch toys:', error);
      toast.error('Сталася помилка');
      throw error;
    }
  }
);

export const addToy = createAsyncThunk('toys/addToy', async (toy: FormData) => {
  try {
    const managerToken = localStorage.getItem('managerToken');
    const response = await api.post('/toys', toy, {
      headers: {
        Authorization: `Bearer ${managerToken}`,
      },
    });
    toast.success('Іграшка створена');
    return response.data;
  } catch (error) {
    console.error('Failed to add toy:', error);
    toast.error('Сталася помилка');
    throw error;
  }
});

export const updateToy = createAsyncThunk(
  'toys/updateToy',
  async ({ toy, toyId }: { toy: FormData; toyId: string }) => {
    console.log('toy id', toyId);
    try {
      const managerToken = localStorage.getItem('managerToken');
      const response = await api.put(`/toys/${toyId}`, toy, {
        headers: {
          Authorization: `Bearer ${managerToken}`,
        },
      });
      toast.success('Іграшка оновлена');
      return response.data;
    } catch (error) {
      console.error('Failed to update toy:', error);
      toast.error('Сталася помилка');
      throw error;
    }
  }
);

// Delete toy route not implemented

// export const deleteToy = createAsyncThunk(
//   'toys/deleteToy',
//   async (toyId: string) => {
//     try {
//       await api.delete(`/toys/${toyId}`);
//       return toyId;
//     } catch (error) {
//       console.error('Failed to delete toy:', error);
//       throw error;
//     }
//   }
// );

export const toysSlice = createSlice({
  name: 'toys',
  initialState: toysInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchToys.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToys.fulfilled, (state, action) => {
        state.toys = action.payload;
        state.loading = false;
      })
      .addCase(fetchToys.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addToy.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToy.fulfilled, (state, action) => {
        state.toys.push(action.payload);
        state.loading = false;
      })
      .addCase(addToy.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateToy.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateToy.fulfilled, (state, action) => {
        const toyIndex = state.toys.findIndex(
          toy => toy._id === action.payload.id
        );
        if (toyIndex !== -1) {
          state.toys[toyIndex] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateToy.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    //   .addCase(deleteToy.fulfilled, (state, action) => {
    //     state.toys = state.toys.filter(toy => toy._id !== action.payload);
    //   });
  },
});
