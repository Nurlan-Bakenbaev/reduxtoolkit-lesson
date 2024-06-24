import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, mode: false },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    handleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});
export const { increase, decrease, handleMode } = counterSlice.actions;
export default counterSlice.reducer;
