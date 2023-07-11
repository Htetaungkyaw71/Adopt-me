import { createSlice } from "@reduxjs/toolkit";

const adoptPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptPetSlice.actions;

export default adoptPetSlice.reducer;
