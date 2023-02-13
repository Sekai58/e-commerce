import { createSlice } from "@reduxjs/toolkit";
import useFetch from "./useFetch";
import data from "./products.json";

export const userSlice = createSlice({
  name: "products",
  initialState: { value: data },
  reducers: {
    addProducts: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProducts } = userSlice.actions;
export default userSlice.reducer;
