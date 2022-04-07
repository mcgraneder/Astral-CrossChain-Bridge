import { createSelector, createSlice } from "@reduxjs/toolkit";  //may need PayLoadAction
import { RenNetwork } from "@renproject/interfaces";
const NETWORK = "testnet";

const cachedTargetNetwork = localStorage.getItem("renTargetNetwork");

const initialNetwork =
  (((cachedTargetNetwork || NETWORK))) ||
  RenNetwork.Testnet;

let initialState = {
  renNetwork: (initialNetwork),
};

const slice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setRenNetwork(state, action) {
      state.renNetwork = action.payload;
    },
  },
});

export const { setRenNetwork } = slice.actions;

export const networkReducer = slice.reducer;

const $networkData = (state) => state.network;
export const $renNetwork = createSelector(
  $networkData,
  (network) => network.renNetwork
);
