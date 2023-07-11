import { configureStore } from "@reduxjs/toolkit";
import AdoptPetSlice from "./AdoptPetSlice";
import searchParamsSlice from "./searchParamsSlice";

const store = configureStore({
  reducer: { AdoptPetSlice, searchParamsSlice },
});

export default store;
