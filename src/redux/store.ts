import { toyAdminSlice, ToyAdminInitialState } from './slices/toyAdmin.slice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ToysAdminInitialState, toysAdminSlice } from './slices/toysAdmin.slice';
import { ClientsInitialState, clientsSlice } from './slices/clients.slice';
import { ClientInitialState, clientSlice } from './slices/client.slice';
import { ToysInitialState, toysSlice } from './slices/toys.slice';
import { ToyInitialState, toySlice } from './slices/toy.slice';
import cartSlice, { CartInitialState } from './slices/cart.slice';
import { ManagerInitialState, managerLogout, managerSlice } from './slices/manager.slice';
import api from '../api';
import { ClientAdminInitialState, clientAdminSlice } from './slices/clientAdmin.slice';
import { InitialOrderType, orderSlice } from './slices/order.slice';

interface AppState {
    cart: CartInitialState
    client: ClientInitialState;
    clients: ClientsInitialState;
    toys: ToysInitialState;
    toy: ToyInitialState;
    toysAdmin: ToysAdminInitialState;
    toyAdmin: ToyAdminInitialState;
    clientAdmin: ClientAdminInitialState;
    manager: ManagerInitialState;
    order: InitialOrderType
}

export const store = configureStore<AppState>({
    reducer: {
        cart: cartSlice.reducer,
        client: clientSlice.reducer,
        clients: clientsSlice.reducer,
        toysAdmin: toysAdminSlice.reducer,
        toyAdmin: toyAdminSlice.reducer,
        toys: toysSlice.reducer,
        toy: toySlice.reducer,
        manager: managerSlice.reducer,
      clientAdmin: clientAdminSlice.reducer,
      order: orderSlice.reducer,
    },
});

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        if (error.response.status === 401) {
            store.dispatch(managerLogout());
        }
      }
      return Promise.reject(error);
    }
  );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;