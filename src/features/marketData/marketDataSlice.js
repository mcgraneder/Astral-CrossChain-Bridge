import { createSelector, createSlice } from "@reduxjs/toolkit"; //may need payLoadAction
// import { ExchangeRate, GasPrice } from "./marketDataUtils";

let initialState = {
    exchangeRates: [],
    gasPrices: [],
  };
  
const slice = createSlice({
  name: "marketData",
  initialState,
  reducers: {
    setExchangeRates(state, action) {
      state.exchangeRates = action.payload;
    },
    setGasPrices(state, action) {
      state.gasPrices = action.payload;
    },
  },
});

export const { setExchangeRates, setGasPrices } = slice.actions;

export const marketDataReducer = slice.reducer;

export const $marketData = (state) => state.marketData;
export const $exchangeRates = createSelector(
  $marketData,
  (marketData) => marketData.exchangeRates
);
export const $gasPrices = createSelector(
  $marketData,
  (marketData) => marketData.gasPrices
);
