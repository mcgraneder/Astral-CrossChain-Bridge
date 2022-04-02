import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BridgeChain,
  BridgeCurrency,
  getChainConfig,
} from "../../utils/AssetConfigs";


let initialState = {
  chain: BridgeChain.ETHC,
  pickerOpened: false,
  balances: [],
};

const slice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setChain(state, action) {
      state.chain = action.payload;
    },
    setWalletPickerOpened(state, action) {
      state.pickerOpened = action.payload;
    },
    addOrUpdateBalance(state, action) {
      const index = state.balances.findIndex(
        (entry) => entry.symbol === action.payload.symbol
      );
      if (index > -1) {
        state.balances[index] = action.payload;
      } else {
        state.balances.push(action.payload);
      }
    },
    resetBalances(state) {
      state.balances = [];
    },
  },
});

export const {
  setChain,
  setWalletPickerOpened,
  addOrUpdateBalance,
  resetBalances,
} = slice.actions;

export const walletReducer = slice.reducer;

export const $wallet = (state) => state.wallet;
export const $chain = createSelector($wallet, (wallet) => wallet.chain);
export const $walletPickerOpened = createSelector(
  $wallet,
  (wallet) => wallet.pickerOpened
);
export const $multiwalletChain = createSelector($chain, (chain) => {
  const chainConfig = getChainConfig(chain);
  return chainConfig.rentxName;
});
