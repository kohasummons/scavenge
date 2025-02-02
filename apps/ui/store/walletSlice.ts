import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WalletState, Wallet, WalletAddress } from "../types/wallet";

const initialState: WalletState = {
  wallets: [],
  tokens: [
    { id: "1", name: "Ethereum", symbol: "ETH", icon: "eth" },
    { id: "2", name: "Bitcoin", symbol: "BTC", icon: "btc" },
    { id: "3", name: "USDT", symbol: "USDT", icon: "usdt" },
  ],
  currentWallet: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setCurrentWallet: (state, action: PayloadAction<Wallet>) => {
      state.currentWallet = action.payload;
    },
    updateWalletName: (state, action: PayloadAction<{ name: string }>) => {
      if (state.currentWallet) {
        state.currentWallet.name = action.payload.name;
      }
    },
    addWalletAddress: (state, action: PayloadAction<WalletAddress>) => {
      if (state.currentWallet) {
        state.currentWallet.addresses.push(action.payload);
      }
    },
  },
});

export const { setCurrentWallet, updateWalletName, addWalletAddress } =
  walletSlice.actions;
export default walletSlice.reducer;
