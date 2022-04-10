import metamaskIcon from "../components/assets/icons/metamask-fox.svg"
import walletConnectIcon from "../components/assets/wallet_connect.svg"
import fortmaticIcon from "../components/assets/fortmatic.svg"
import torusIcon from "../components/assets/torus.svg"
import portisIcon from "../components/assets/portis.svg"
import { injected, 
    fortmatic, 
    portis, 
    torus, 
    walletconnect 
} from "../connectors/provider";

const PRODUCTION = "0"

const ALL_WALLETS = {
  INJECTED: "INJECTED",
  PROTIS: "PORTIS",
  FORTAMTIC: "FORTMATIC",
  TORUS: "TORUS",
  WALLETCONNECT: "WALLETCONNECT"
}
export const WALLETS = {
  [ALL_WALLETS.INJECTED]: {
    provider: "injected",
    connector: injected,
    name: "Metamask",
    href: null,
    description: "metamaskIcon wallet",
    icon: metamaskIcon
  },
  [ALL_WALLETS.PORTIS]: {
    provider: "portis",
    connector: portis,
    name: "Portis",
    href: null,
    description: "portisIcon wallet",
    icon: portisIcon
  },
  [ALL_WALLETS.FORTAMTIC]: {
    provider: "fortmatic",
    connector: fortmatic,
    name: "Fortmatic",
    href: null,
    description: "fortmaticIcon wallet",
    icon: fortmaticIcon
  },
  [ALL_WALLETS.TORUS]: {
    provider: "torus",
    connector: torus,
    name: "Torus",
    href: null,
    description: "torusIcon wallet",
    icon: torusIcon
  },
  [ALL_WALLETS.WALLETCONNECT]: {
    provider: "walletconnect",
    connector: walletconnect,
    name: "WalletConnect",
    href: null,
    description: "wallet connect wallet",
    icon: walletConnectIcon
  },
}

export const PROVIDERS = {
  INJECTED: "injected",
  PORTIS: "portis",
  FORTMATIC: "fortmatic",
  TORUS: "torus",
  WALLETCONNECT: "walletconnect"
}

const MAINNET_WALLETS = {
    INJECTED: {
      connector: injected,
      name: 'Injected',
      iconName: 'arrow-right.svg',
      description: 'Injected web3 provider.',
      href: null,
      color: '#010101',
      primary: true
    },
    METAMASK: {
      connector: injected,
      name: 'MetaMask',
      iconName: 'metamaskIcon.png',
      description: 'Easy-to-use browser extension.',
      href: null,
      color: '#E8831D'
    }
  }
  
  export const SUPPORTED_WALLETS =
    PRODUCTION !== '1'
      ? MAINNET_WALLETS
      : {
          ...MAINNET_WALLETS,
          ...{
            WALLET_CONNECT: {
              connector: walletconnect,
              name: 'WalletConnect',
              iconName: 'walletConnectIcon.svg',
              description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
              href: null,
              color: '#4196FC'
            },
            // WALLET_LINK: {
            //   connector: walletlink,
            //   name: 'Coinbase Wallet',
            //   iconName: 'coinbaseWalletIcon.svg',
            //   description: 'Use Coinbase Wallet app on mobile device',
            //   href: null,
            //   color: '#315CF5'
            // },
            COINBASE_LINK: {
              name: 'Open in Coinbase Wallet',
              iconName: 'coinbaseWalletIcon.svg',
              description: 'Open in Coinbase Wallet app.',
              href: 'https://go.cb-w.com/mtUDhEZPy1',
              color: '#315CF5',
              mobile: true,
              mobileOnly: true
            },
            TRUST_WALLET_LINK: {
              name: 'Open in Trust Wallet',
              iconName: 'trustWallet.png',
              description: 'iOS and Android app.',
              href: 'https://link.trustwallet.com/open_url?coin_id=60&url=https://uniswap.exchange/swap',
              color: '#1C74CC',
              mobile: true,
              mobileOnly: true
            },
            FORTMATIC: {
              connector: fortmaticIcon,
              name: 'Fortmatic',
              iconName: 'fortmaticIcon.png',
              description: 'Login using Fortmatic hosted wallet',
              href: null,
              color: '#6748FF',
              mobile: true
            },
            Portis: {
              connector: portisIcon,
              name: 'Portis',
              iconName: 'portisIcon.png',
              description: 'Login using Portis hosted wallet',
              href: null,
              color: '#4A6C9B',
              mobile: true
            },
            Torus: {
              connector: torusIcon,
              name: 'Torus',
              iconName: 'torusIcon.png',
              description: 'Login via Google, Facebook and others',
              href: null,
              color: '#5495F7',
              mobile: true
            }
          }
        }
  
  
  export const NetworkContextName = 'NETWORK'
  