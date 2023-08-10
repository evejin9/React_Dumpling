import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeList: [],
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getStoreData: (state, action) => {
      state.storeList = action.payload.StoreList;
    },
    isClickedFavorite: (state, { payload } )  => {
      const findIndex = state.storeList.findIndex((post) => post.id === payload.id);

      state.storeList[findIndex].favorite = !payload.favorite
    }
  },
});

export const { getStoreData, isClickedFavorite } = storeSlice.actions;

export const allStoreList = (state) => state.store.storeList;

export default storeSlice.reducer;