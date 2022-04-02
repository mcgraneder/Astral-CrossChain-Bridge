import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = {
  txHistoryOpened: false,
  currentTxId: "",
  currentSession: {
    txId: "",
    depositHash: "",
    data: undefined,
  },
  issueResolver: {
    dialogOpened: false,
  },
};

const slice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTxHistoryOpened(state, action) {
      state.txHistoryOpened = action.payload;
    },
    setIssueResolverOpened(state, action) {
      state.issueResolver.dialogOpened = action.payload;
    },
    setCurrentTxId(state, action) {
      state.currentTxId = action.payload;
    },
    setCurrentSessionTxId(state, action) {
      state.currentSession.txId = action.payload;
    },
    setCurrentSessionDepositHash(state, action) {
      state.currentSession.depositHash = action.payload;
    },
    setCurrentSessionData(state, action) {
      state.currentSession.data = action.payload;
    },
  },
});

export const {
  setTxHistoryOpened,
  setCurrentTxId,
  setIssueResolverOpened,
  setCurrentSessionData,
  setCurrentSessionDepositHash,
  setCurrentSessionTxId,
} = slice.actions;

export const transactionsReducer = slice.reducer;

export const $transactionsData = (state) => state.transactions;
export const $txHistoryOpened = createSelector(
  $transactionsData,
  (transactions) => transactions.txHistoryOpened
);
export const $currentTxId = createSelector(
  $transactionsData,
  (transactions) => transactions.currentTxId
);

export const $issueResolver = createSelector(
  $transactionsData,
  (transactions) => transactions.issueResolver
);

export const $currentSession = createSelector(
  $transactionsData,
  (transactions) => transactions.currentSession
);
