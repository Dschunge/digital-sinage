import { IDish } from "@/data/restaurant";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DishState {
  dish: IDish;
}

const initialState: DishState = {
  dish: {
    id: 0,
    name: "",
    name_esp: "",
    description: "",
    description_esp: "",
    price: 0,
    image: "",
    amount: 1,
    category: "",
  },
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDish: (state, action: PayloadAction<IDish>) => {
      state.dish = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDish } = dishSlice.actions;

export default dishSlice.reducer;
