import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IManager } from "../../models/manager";

export interface ICartItem {
    itemId: string;
    itemName: string;
    itemImage: string;
}

export interface CartInitialState {
    cart: ICartItem[] | [];
    selectedManagementPoint: IManager | null;
}

export const cartInitialState: CartInitialState = {
    cart: [],
    selectedManagementPoint: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        setSelectedManagementPoint: (state, action: PayloadAction<IManager>) => {
            state.selectedManagementPoint = action.payload
        },
        addItemToCart: (state, action: PayloadAction<ICartItem>) => {
            const { itemId } = action.payload;
            const isItemInCart = state.cart.some((item) => item.itemId === itemId);

            if (!isItemInCart && state.cart.length < 3) {
                state.cart = [...state.cart, action.payload];
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            if (state.cart.length <= 3) {
                state.cart = state.cart.filter(item => item.itemId !== action.payload)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        clearCart: (state) => {
            state.cart = []
            localStorage.removeItem('cart')
        },
        loadCartItems: (state) => {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")!) as ICartItem[] | []
            state.cart = itemsFromLocalStorage ? itemsFromLocalStorage : []
        }
    },
})

export const { addItemToCart, clearCart, loadCartItems, removeItemFromCart, setSelectedManagementPoint } = cartSlice.actions
export default cartSlice