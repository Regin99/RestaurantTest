import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type Item = {
  id: number;
  quantity: number;
};

type CartState = {
  items: Array<Item>;
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{id: number; price: string}>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice += Number(action.payload.price.slice(1));
      } else {
        state.items.push({id: action.payload.id, quantity: 1});
        state.totalPrice += Number(action.payload.price.slice(1));
      }
    },
    removeItem(state, action: PayloadAction<{id: number; price: string}>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (state.totalPrice !== 0) {
          state.totalPrice -= Number(action.payload.price.slice(1));
        }
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== item.id);
          if (state.totalPrice !== 0) {
            state.totalPrice -= Number(action.payload.price.slice(1));
          }
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectItemById = (id: number) => (state: RootState) => {
  return selectCartItems(state).find(item => item.id === id);
};

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
