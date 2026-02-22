import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      const existing = state.items.find((item) => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalQuantity += 1;
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
        state.totalQuantity -= 1;
      }
    },
    removeFromCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
