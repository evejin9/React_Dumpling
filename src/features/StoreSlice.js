import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeList: [],
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getStoreData: (state, action) => {
      state.storeList = action.payload;
    },
    
  },
});

export const { getStoreData } = storeSlice.actions;

export const allStoreList = (state) => state.store.storeList;

export default storeSlice.reducer;