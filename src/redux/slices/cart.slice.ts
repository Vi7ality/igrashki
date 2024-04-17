import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IManager } from '../../models/manager';
import api from '../../api';

export interface ICartItem {
  itemId: string;
  itemName: string;
  itemImage: string;
}

export interface cartSubsription {
  managementPointId: string | undefined;
  toys: string[];
}

export const cartSubsription = createAsyncThunk(
  '/subscription/sub',
  async (subscription: cartSubsription) => {
    try {
      let token = localStorage.getItem("userToken");
      if (token === undefined) {
        token = '';
      }
      const response = await api.post('/subscription/sub', subscription, {
          headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: Error | any) {
      throw new Error('Failed to subscribe');
    }
  }
);

//  await api.post("/subscription/sub", subscription, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

export interface CartInitialState {
  cart: ICartItem[] | [];
  selectedManagementPoint: IManager | null;
  loading: boolean;
  error: any;
}

export const cartInitialState: CartInitialState = {
  cart: [],
  selectedManagementPoint: null,
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setSelectedManagementPoint: (state, action: PayloadAction<IManager>) => {
      state.selectedManagementPoint = action.payload;
      localStorage.setItem(
        'selectedManagementPoint',
        JSON.stringify(state.selectedManagementPoint)
      );
    },
    loadSelectedManagementPoint: state => {
      const locationFromLocalStorage = JSON.parse(
        localStorage.getItem('selectedManagementPoint')!
      );
      state.selectedManagementPoint = locationFromLocalStorage
        ? locationFromLocalStorage
        : '';
    },
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const { itemId } = action.payload;
      const isItemInCart = state.cart.some(item => item.itemId === itemId);

      if (!isItemInCart && state.cart.length < 3) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      if (state.cart.length <= 3) {
        state.cart = state.cart.filter(item => item.itemId !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    clearCart: state => {
      state.cart = [];
      localStorage.removeItem('cart');
    },
    loadCartItems: state => {
      const itemsFromLocalStorage = JSON.parse(
        localStorage.getItem('cart')!
      ) as ICartItem[] | [];
      state.cart = itemsFromLocalStorage ? itemsFromLocalStorage : [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(cartSubsription.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cartSubsription.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(cartSubsription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addItemToCart,
  clearCart,
  loadCartItems,
  removeItemFromCart,
  setSelectedManagementPoint,
  loadSelectedManagementPoint,
} = cartSlice.actions;
export default cartSlice;
