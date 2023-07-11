import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
