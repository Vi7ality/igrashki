import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { ISubscription } from "../../models/client";

export type InitialOrderType = {
  order: ISubscription[] | null;
  loading: boolean;
  error: string | null;
}

export const fetchClientOrder = createAsyncThunk(
  '/subscription/sub',
  async () => {
    try {
      let token = localStorage.getItem("userToken");
      if (token === undefined) {
        token = '';
      }
      const response = await api.get(`/subscription`, {
                headers: { Authorization: `Bearer ${token}` }
      })
      return response.data;
    } catch (error: Error | any) {
      throw new Error('Failed to subscribe');
    }
  }
);

const initialState: InitialOrderType = {
  order: null,
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder: (state: any) => {
      state.order = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("order");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientOrder.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClientOrder.fulfilled, (state: any, action) => {
        state.order = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchClientOrder.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch client";
      })
  },
}); 

export const { clearOrder } = orderSlice.actions;