export interface Token {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

export interface WalletAddress {
  id: string;
  token: Token;
  address: string;
}

export interface Wallet {
  id: string;
  name: string;
  addresses: WalletAddress[];
}

export interface WalletState {
  wallets: Wallet[];
  tokens: Token[];
  currentWallet: Wallet | null;
}
