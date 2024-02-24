import { ICategory } from "@/data/restaurant";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  catagory: ICategory;
}

const initialState: CategoryState = {
  catagory: {
    id: 1,
    name: "",
    name_esp: "",
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ICategory>) => {
      state.catagory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
