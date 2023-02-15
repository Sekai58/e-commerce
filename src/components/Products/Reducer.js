import { createSlice } from "@reduxjs/toolkit";
import data from "./products.json";

export const productSlice = createSlice({
  name: "products",
  initialState: { value: data },
  reducers: {
    addProducts: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
