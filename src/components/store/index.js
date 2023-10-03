import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cart";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Install
// Configure store
// Slices => Slice => Name, initialState, reducers
// Export from slice => actions , reducer
// Reducer => configureStore
// Wrap app with Provider => store
