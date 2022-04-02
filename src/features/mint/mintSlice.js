import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BridgeCurrency } from "../../utils/AssetConfigs"

let initialState = {
  currency: BridgeCurrency.BTC,
};

const slice = createSlice({
  name: "mint",
  initialState,
  reducers: {
    setMintCurrency(state, action) {
      state.currency = action.payload;
    },
    resetMint(state, action) {
      if (action.payload) {
        state.currency = action.payload.currency;
      } else {
        state.currency = initialState.currency;
      }
    },
  },
});

export const { setMintCurrency, resetMint } = slice.actions;

export const mintReducer = slice.reducer;

export const $mint = (state) => state.mint;
export const $mintCurrency = createSelector($mint, (mint) => mint.currency);
