import { configureStore } from "@reduxjs/toolkit";
import AdoptPetSlice from "./AdoptPetSlice";
import searchParamsSlice from "./searchParamsSlice";
import { petApi } from "./petApiService";

const store = configureStore({
  reducer: {
    AdoptPetSlice,
    searchParamsSlice,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
