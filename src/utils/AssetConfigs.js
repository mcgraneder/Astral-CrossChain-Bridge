import { RenNetwork } from "@renproject/interfaces";
import {
    ArbitrumBlackIcon,
    ArbitrumCircleIcon,
    ArbitrumColorIcon,
    AvaIcon,
    AvalancheChainCircleIcon,
    BchFullIcon,
    BchGreyIcon,
    BchIcon,
    BinanceChainFullIcon,
    BinanceChainIcon,
    BitcoinIcon,
    BtcFullIcon,
    BtcGreyIcon,
    DgbFullIcon,
    DgbGreyIcon,
    DgbIcon,
    DogeFullIcon,
    DogeGreyIcon,
    DogeIcon,
    DotsFullIcon,
    DotsGreyIcon,
    DotsIcon,
    EthereumChainFullIcon,
    EthereumIcon,
    FantomCircleIcon,
    FantomFullIcon,
    FantomGreyIcon,
    FilFullIcon,
    FilGreyIcon,
    FilIcon,
    LunaFullIcon,
    LunaGreyIcon,
    LunaIcon,
    PolygonCircleIcon,
    PolygonFullIcon,
    PolygonGreyIcon,
    SolanaCircleIcon,
    SolanaGreyIcon,
    TooltipIcon as NotSetIcon,
    ZecFullIcon,
    ZecGreyIcon,
    ZecIcon,
} from "../components/Icons/RenIcons"

import btc from "../components/assets/icons/btc-icon.svg"
import bch from "../components/assets/icons/bch-icon.svg"
import doge from "../components/assets/icons/doge-icon.svg"
import zec from "../components/assets/icons/zec-icon.svg"
import dgb from "../components/assets/icons/dgb-icon.svg"
import fil from "../components/assets/icons/fil-icon.svg"
import luna from "../components/assets/icons/luna-icon.svg"

import matic from "../components/assets/icons/polygon-circle-icon.svg"
import eth from "../components/assets/icons/ethereum-circle-icon.svg"
import bsc from "../components/assets/icons/binancesmartchain-circle-icon.svg"
import ftm from "../components/assets/icons/fantom-circle-icon.svg"
import avax from "../components/assets/icons/avalanche-circle-icon.svg"
import sol from "../components/assets/icons/solana-colour-icon.svg"
import arbi from "../components/assets/icons/arbitrum-circle.svg"
import dot from "../components/assets/icons/dots-icon.svg"

import chrome from "../components/assets/Chrome.svg"
import firefox from "../components/assets/Firefox.svg"
import edge from "../components/assets/Microsoft Edge.svg"
import chromium from "../components/assets/chromium.svg"
import brave from "../components/assets/brave-icon.svg"

import * as customColors from "../theme/colors";

export const RenChain = {
    arbitrum: "arbitrum",
    avalanche: "avalanche",
    binanceSmartChain: "binanceSmartChain",
    ethereum: "ethereum",
    fantom: "fantom",
    polygon: "polygon",
    solana: "solana",
    bitcoin: "bitcoin",
    zcash: "zcash",
    bitcoinCash: "bitcoinCash",
    dogecoin: "dogecoin",
    digibyte: "digibyte",
    terra: "terra",
    filecoin: "filecoin",
    unknown: "unknown",
  }
  
  export const BridgeCurrency = {
    BTC: "BTC",
    BCH: "BCH",
    DOTS: "DOTS",
    DOGE: "DOGE",
    ZEC: "ZEC",
    DGB: "DGB",
    LUNA: "LUNA",
    FIL: "FIL",
    RENBTC: "RENBTC",
    RENBCH: "RENBCH",
    RENDOGE: "RENDOGE",
    RENZEC: "RENZEC",
    RENDGB: "RENDGB",
    RENLUNA: "RENLUNA",
    RENFIL: "RENFIL",
    ETH: "ETH",
    FTM: "FTM",
    MATIC: "MATIC",
    BNB: "BNB",
    AVAX: "AVAX",
    SOL: "SOL",
    ARBETH: "ARBETH",
    UNKNOWN: "UNKNOWN",
  }
  
  export const BridgeChain = {
    BTCC: "BTCC",
    BCHC: "BCHC",
    ZECC: "ZECC",
    DOGC: "DOGC",
    DGBC: "DGBC",
    FILC: "FILC",
    LUNAC: "LUNAC",
    BSCC: "BSCC",
    ETHC: "ETHC",
    MATICC: "MATICC",
    FTMC: "FTMC",
    AVAXC: "AVAXC",
    SOLC: "SOLC",
    ARBITRUMC: "ARBITRUMC",
    UNKNOWNC: "UNKNOWNC",
  }
  
  export const BridgeNetwork = {
    MAINNET: "MAINNET",
    TESTNET: "TESTNET",
    UNKNOWN: "UNKNOWN",
  }
  
  export const EthTestnet = {
    KOVAN: "Kovan",
    RINKEBY: "Rinkeby",
    UNKNOWNT: "Unknown",
  }
  
  export const BridgeWallet = {
    METAMASKW: "METAMASKW",
    WALLETCONNECTW: "WALLETCONNECTW",
    MEWCONNECTW: "MEWCONNECTW",
    BINANCESMARTW: "BINANCESMARTW",
    SOLLETW: "SOLLETW",
    PHANTOMW: "PHANTOMW",
    UNKNOWNW: "UNKNOWNW",
  }

const networkMappingLegacy = {
    mainnet: RenNetwork.Mainnet,
    testnet: RenNetwork.Testnet,
  };
  
  const networkMappingVDot3 = {
    mainnet: RenNetwork.MainnetVDot3,
    testnet: RenNetwork.TestnetVDot3,
  };
  
  const oldNetworkMappings = {
    [RenChain.ethereum]: networkMappingLegacy,
    [RenChain.binanceSmartChain]: networkMappingLegacy,
    [RenChain.fantom]: networkMappingLegacy,
    [RenChain.polygon]: networkMappingLegacy,
    [RenChain.avalanche]: networkMappingLegacy,
    [RenChain.solana]: networkMappingLegacy,
    [RenChain.arbitrum]: networkMappingLegacy,
  };
  
  const newNetworkMappings = {
    [RenChain.ethereum]: networkMappingVDot3,
    [RenChain.binanceSmartChain]: networkMappingLegacy,
    [RenChain.fantom]: networkMappingLegacy,
    [RenChain.polygon]: networkMappingLegacy,
    [RenChain.avalanche]: networkMappingLegacy,
    [RenChain.solana]: networkMappingLegacy,
    [RenChain.arbitrum]: networkMappingLegacy,
  };

export const supportedLockCurrencies =
    [
        BridgeCurrency.BTC,
        BridgeCurrency.BCH,
        BridgeCurrency.DGB,
        BridgeCurrency.DOGE,
        BridgeCurrency.FIL,
        BridgeCurrency.LUNA,
        BridgeCurrency.ZEC,
]

export const AllCurrencies =
    [
        BridgeCurrency.BTC,
        BridgeCurrency.BCH,
        BridgeCurrency.DOTS,
        BridgeCurrency.DOGE,
        BridgeCurrency.ZEC,
        BridgeCurrency.DGB,
        BridgeCurrency.LUNA,
        BridgeCurrency.FIL,
        BridgeCurrency.RENBTC,
        BridgeCurrency.RENBCH,
        BridgeCurrency.RENDOGE,
        BridgeCurrency.RENZEC,
        BridgeCurrency.RENDGB,
        BridgeCurrency.RENLUNA,
        BridgeCurrency.RENFIL,
        BridgeCurrency.ETH,
        BridgeCurrency.FTM,
        BridgeCurrency.MATIC,
        BridgeCurrency.BNB,
        BridgeCurrency.AVAX,
        BridgeCurrency.SOL,
        BridgeCurrency.ARBETH,
        BridgeCurrency.UNKNOWN,
    ]

export const supportedMintDestinationChains = [
    BridgeChain.ETHC,
    BridgeChain.BSCC,
    BridgeChain.MATICC,
    BridgeChain.FTMC,
    BridgeChain.AVAXC,
    BridgeChain.SOLC,
    BridgeChain.ARBITRUMC,
];
  
  export const supportedBurnChains = [
    BridgeChain.ETHC,
    BridgeChain.MATICC,
    BridgeChain.FTMC,
    BridgeChain.AVAXC,
    BridgeChain.SOLC,
    BridgeChain.BSCC,
    BridgeChain.ARBITRUMC,
]

export const Browsers = {

  CHROME: "CHROME",
  BRAVE: "BRAVE",
  EDGE: "EDGE",
  FIREFOX: "FIREFOX",
  CHROMIUM: "CHROMIUM"
}

export const SupportedBrowsers = [
  Browsers.CHROME,
  Browsers.BRAVE,
  Browsers.EDGE,
  Browsers.FIREFOX,
  Browsers.CHROMIUM
]

export const BrowsersConfig = {
  [Browsers.CHROME]: {
    logo: chrome,
    name: "Google Chrome"
  },
  [Browsers.EDGE]: {
    logo: edge,
    name: "Microsoft Edge"
  },
  [Browsers.BRAVE]: {
    logo: brave,
    name: "Brave Browser"
  },
  [Browsers.FIREFOX]: {
    logo: firefox,
    name: "Firefox"
  },
  [Browsers.CHROMIUM]: {
    logo: chromium,
    name: "Chromium"
  },
}


export const chainsConfig = {
        [BridgeChain.BTCC]: {
          symbol: BridgeChain.BTCC,
          short: "BTC",
          full: "Bitcoin",
          FullIcon: NotSetIcon,
          Icon: BitcoinIcon,
          MainIcon: btc,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.bitcoin,
          blockTime: 10,
          nativeCurrency: BridgeCurrency.BTC,
          targetConfirmations: 6,
        },
        [BridgeChain.BCHC]: {
          symbol: BridgeChain.BCHC,
          short: "BCH",
          full: "Bitcoin Cash",
          FullIcon: BchFullIcon,
          GreyIcon: BchGreyIcon,
          Icon: bch,
          MainIcon: bch,
          rentxName: RenChain.bitcoinCash,
          blockTime: 10,
          targetConfirmations: 6,
          nativeCurrency: BridgeCurrency.BCH,
        },
        [BridgeChain.ZECC]: {
          symbol: BridgeChain.ZECC,
          short: "ZEC",
          full: "Zcash",
          FullIcon: ZecFullIcon,
          GreyIcon: ZecGreyIcon,
          Icon: ZecIcon,
          MainIcon: zec,
          rentxName: RenChain.zcash,
          blockTime: 2.5,
          nativeCurrency: BridgeCurrency.ZEC,
          targetConfirmations: 24,
        },
        [BridgeChain.DOGC]: {
          symbol: BridgeChain.DOGC,
          short: "DOGE",
          full: "Dogecoin",
          FullIcon: DogeFullIcon,
          GreyIcon: DogeGreyIcon,
          Icon: DogeIcon,
          MainIcon: doge,
          rentxName: RenChain.dogecoin,
          blockTime: 1,
          targetConfirmations: 40,
          nativeCurrency: BridgeCurrency.DOGE,
        },
        [BridgeChain.DGBC]: {
          symbol: BridgeChain.DGBC,
          short: "DGB",
          full: "DigiByte",
          FullIcon: DgbFullIcon,
          GreyIcon: DgbGreyIcon,
          Icon: DgbIcon,
          MainIcon: dgb,
          rentxName: RenChain.digibyte,
          blockTime: 1,
          targetConfirmations: 40,
          nativeCurrency: BridgeCurrency.DGB,
        },
        [BridgeChain.FILC]: {
          symbol: BridgeChain.FILC,
          short: "FIL",
          full: "Filecoin",
          FullIcon: FilFullIcon,
          GreyIcon: FilGreyIcon,
          Icon: FilIcon,
          MainIcon: fil,
          rentxName: RenChain.filecoin,
          blockTime: 1,
          targetConfirmations: 40,
          nativeCurrency: BridgeCurrency.FIL,
        },
        [BridgeChain.LUNAC]: {
          symbol: BridgeChain.LUNAC,
          short: "LUNA",
          full: "Luna",
          FullIcon: LunaFullIcon,
          GreyIcon: LunaGreyIcon,
          Icon: LunaIcon,
          MainIcon: luna,
          rentxName: RenChain.terra,
          blockTime: 1,
          targetConfirmations: 40,
          nativeCurrency: BridgeCurrency.LUNA,
          memo: true,
        },
        [BridgeChain.BSCC]: {
          symbol: BridgeChain.BSCC,
          short: "BSC",
          full: "Binance Smart Chain",
          FullIcon: BinanceChainFullIcon,
          Icon: BinanceChainIcon,
          MainIcon: bsc,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.binanceSmartChain,
          blockTime: 3,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.BNB,
        },
        [BridgeChain.FTMC]: {
          symbol: BridgeChain.FTMC,
          short: "FTM",
          full: "Fantom",
          FullIcon: FantomCircleIcon,
          Icon: FantomGreyIcon,
          MainIcon: ftm,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.fantom,
          blockTime: 3,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.FTM,
        },
        [BridgeChain.MATICC]: {
          symbol: BridgeChain.MATICC,
          short: "MATIC",
          full: "Polygon",
          FullIcon: PolygonCircleIcon,
          Icon: PolygonGreyIcon,
          MainIcon: matic,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.polygon,
          blockTime: 3,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.MATIC,
        },
        [BridgeChain.AVAXC]: {
          symbol: BridgeChain.AVAXC,
          short: "AVAX",
          full: "Avalanche",
          FullIcon: AvalancheChainCircleIcon,
          Icon: AvalancheChainCircleIcon,
          MainIcon: avax,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.avalanche,
          blockTime: 3,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.AVAX,
        },
        [BridgeChain.ETHC]: {
          symbol: BridgeChain.ETHC,
          short: "ETH",
          full: "Ethereum",
          FullIcon: EthereumChainFullIcon,
          Icon: EthereumIcon,
          MainIcon: eth,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.ethereum,
          blockTime: 0.25,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.ETH,
        },
        [BridgeChain.SOLC]: {
          symbol: BridgeChain.SOLC,
          short: "SOL",
          full: "Solana",
          FullIcon: SolanaCircleIcon,
          Icon: SolanaGreyIcon,
          MainIcon: sol,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.solana,
          blockTime: 0.25,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.SOL,
        },
        [BridgeChain.ARBITRUMC]: {
          symbol: BridgeChain.ARBITRUMC,
          short: "ARB",
          full: "Arbitrum",
          FullIcon: ArbitrumCircleIcon,
          Icon: ArbitrumColorIcon,
          MainIcon: arbi,
          GreyIcon: NotSetIcon,
          rentxName: RenChain.arbitrum,
          blockTime: 0.25,
          targetConfirmations: 30,
          nativeCurrency: BridgeCurrency.ARBETH,
        },
        [BridgeChain.UNKNOWNC]: {
          symbol: BridgeChain.UNKNOWNC,
          short: "UNKNOWNC",
          full: "Unknown",
          FullIcon: NotSetIcon,
          GreyIcon: NotSetIcon,
          Icon: NotSetIcon,
          MainIcon: NotSetIcon,
          rentxName: RenChain.unknown,
          blockTime: 1e6,
          targetConfirmations: 1e6,
          nativeCurrency: BridgeCurrency.UNKNOWN,
        },
};


const unknownChainConfig = chainsConfig[BridgeChain.UNKNOWNC];

export const getChainConfig = (symbol) =>
  chainsConfig[symbol] || unknownChainConfig;

  export const getChainRentxName = (symbol) =>
  chainsConfig[symbol].rentxName || unknownLabel;

export const getChainConfigByRentxName = (name) =>
  Object.values(chainsConfig).find((chain) => chain.rentxName === name) ||
  unknownChainConfig;


export const currenciesConfig = {
    [BridgeCurrency.BTC]: {
      symbol: BridgeCurrency.BTC,
      short: "BTC",
      full: "Bitcoin",
      color: customColors.bitcoinOrange,
      FullIcon: BtcFullIcon,
      GreyIcon: BtcGreyIcon,
      Icon: btc,
      MainIcon: btc,
      rentxName: "btc",
      sourceChain: BridgeChain.BTCC,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "bitcoin",
    },
    [BridgeCurrency.RENBTC]: {
      symbol: BridgeCurrency.RENBTC,
      short: "renBTC",
      full: "Ren Bitcoin",
      FullIcon: BtcFullIcon,
      GreyIcon: BtcGreyIcon,
      Icon: btc,
      MainIcon: btc,
      rentxName: "renBTC",
      sourceChain: BridgeChain.ETHC,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "bitcoin",
    },
    [BridgeCurrency.BCH]: {
      symbol: BridgeCurrency.BCH,
      short: "BCH",
      full: "Bitcoin Cash",
      color: customColors.bitcoinCashGreen,
      FullIcon: BchFullIcon,
      GreyIcon: BchGreyIcon,
      Icon: bch,
      MainIcon: bch,
      rentxName: "BCH",
      sourceChain: BridgeChain.BCHC,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "bitcoin-cash",
    },
    [BridgeCurrency.RENBCH]: {
      symbol: BridgeCurrency.RENBCH,
      short: "renBCH",
      full: "Bitcoin Cash",
      FullIcon: BchFullIcon,
      GreyIcon: BchGreyIcon,
      Icon: BchIcon,
      MainIcon: bch,
      rentxName: "renBCH",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.BCH,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "bitcoin-cash",
    },
    [BridgeCurrency.DOTS]: {
      symbol: BridgeCurrency.DOTS,
      short: "DOTS",
      full: "Polkadot",
      FullIcon: DotsFullIcon,
      GreyIcon: DotsGreyIcon,
      Icon: DotsIcon,
      MainIcon: dot,
      sourceChain: BridgeChain.UNKNOWNC, // TODO:
      rentxName: "dots",
      bandchainSymbol: "DOT",
      networkMappings: newNetworkMappings,
    },
    [BridgeCurrency.DOGE]: {
      symbol: BridgeCurrency.DOGE,
      short: "DOGE",
      full: "Dogecoin",
      FullIcon: DogeFullIcon,
      GreyIcon: DogeGreyIcon,
      Icon: DogeIcon,
      MainIcon: doge,
      sourceChain: BridgeChain.DOGC,
      rentxName: "doge",
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "doge",
    },
    [BridgeCurrency.RENDOGE]: {
      symbol: BridgeCurrency.RENDOGE,
      short: "renDOGE",
      full: "Dogecoin",
      FullIcon: DogeFullIcon,
      GreyIcon: DogeGreyIcon,
      Icon: DogeIcon,
      MainIcon: doge,
      rentxName: "renDOGE",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.DOGE,
      ethTestnet: EthTestnet.KOVAN,
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "doge",
    },
    [BridgeCurrency.ZEC]: {
      symbol: BridgeCurrency.ZEC,
      short: "ZEC",
      full: "Zcash",
      FullIcon: ZecFullIcon,
      GreyIcon: ZecGreyIcon,
      Icon: ZecIcon,
      MainIcon: zec,
      rentxName: "zec",
      sourceChain: BridgeChain.ZECC,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "zcash",
    },
    [BridgeCurrency.RENZEC]: {
      symbol: BridgeCurrency.RENZEC,
      short: "renZEC",
      full: "Zcash",
      FullIcon: ZecFullIcon,
      GreyIcon: ZecGreyIcon,
      Icon: ZecIcon,
      MainIcon: zec,
      rentxName: "renZEC",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.ZEC,
      networkMappings: oldNetworkMappings,
      coingeckoSymbol: "zcash",
    },
    [BridgeCurrency.DGB]: {
      symbol: BridgeCurrency.DGB,
      short: "DGB",
      full: "DigiByte",
      FullIcon: DgbFullIcon,
      GreyIcon: DgbGreyIcon,
      Icon: DgbIcon,
      MainIcon: dgb,
      sourceChain: BridgeChain.DGBC,
      rentxName: "DGB",
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "digibyte",
    },
    [BridgeCurrency.RENDGB]: {
      symbol: BridgeCurrency.RENDGB,
      short: "renDGB",
      full: "DigiByte",
      FullIcon: DgbFullIcon,
      GreyIcon: DgbGreyIcon,
      Icon: DgbIcon,
      MainIcon: dgb,
      rentxName: "renDGB",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.DGB,
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "digibyte",
    },
    [BridgeCurrency.FIL]: {
      symbol: BridgeCurrency.FIL,
      short: "FIL",
      full: "Filecoin",
      FullIcon: FilFullIcon,
      GreyIcon: FilGreyIcon,
      Icon: FilIcon,
      MainIcon: fil,
      sourceChain: BridgeChain.FILC,
      rentxName: "FIL",
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "filecoin",
    },
    [BridgeCurrency.RENFIL]: {
      symbol: BridgeCurrency.RENFIL,
      short: "renFIL",
      full: "Filecoin",
      FullIcon: FilFullIcon,
      GreyIcon: FilGreyIcon,
      Icon: FilIcon,
      MainIcon: fil,
      rentxName: "renFIL",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.FIL,
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "filecoin",
    },
    [BridgeCurrency.LUNA]: {
      symbol: BridgeCurrency.LUNA,
      short: "LUNA",
      full: "Luna",
      FullIcon: LunaFullIcon,
      GreyIcon: LunaGreyIcon,
      Icon: LunaIcon,
      MainIcon: luna,
      sourceChain: BridgeChain.LUNAC,
      rentxName: "LUNA",
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "terra-luna",
    },
    [BridgeCurrency.RENLUNA]: {
      symbol: BridgeCurrency.RENLUNA,
      short: "renLUNA",
      full: "Luna",
      FullIcon: LunaFullIcon,
      GreyIcon: LunaGreyIcon,
      Icon: LunaIcon,
      MainIcon: luna,
      rentxName: "renLUNA",
      sourceChain: BridgeChain.ETHC,
      bandchainSymbol: BridgeCurrency.LUNA,
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "terra-luna",
    },
    [BridgeCurrency.ETH]: {
      symbol: BridgeCurrency.ETH,
      short: "ETH",
      full: "Ether",
      FullIcon: EthereumIcon,
      GreyIcon: NotSetIcon,
      Icon: EthereumIcon,
      MainIcon: eth,
      rentxName: "eth",
      sourceChain: BridgeChain.ETHC,
      networkMappings: newNetworkMappings,
      coingeckoSymbol: "ethereum",
    },
    [BridgeCurrency.AVAX]: {
      symbol: BridgeCurrency.AVAX,
      short: "AVAX",
      full: "Avalanche",
      FullIcon: AvaIcon,
      GreyIcon: NotSetIcon,
      Icon: AvaIcon,
      MainIcon: avax,
      rentxName: "ava",
      sourceChain: BridgeChain.AVAXC,
      networkMappings: newNetworkMappings,
      decimals: 18,
      coingeckoSymbol: "avalanche-2",
    },
    [BridgeCurrency.MATIC]: {
      symbol: BridgeCurrency.MATIC,
      short: "MATIC",
      full: "Matic",
      FullIcon: PolygonFullIcon,
      GreyIcon: NotSetIcon,
      Icon: PolygonFullIcon,
      MainIcon: matic,
      rentxName: "matic",
      sourceChain: BridgeChain.MATICC,
      networkMappings: newNetworkMappings,
      decimals: 18,
      coingeckoSymbol: "polygon",
    },
    [BridgeCurrency.FTM]: {
      symbol: BridgeCurrency.FTM,
      short: "FTM",
      full: "Fantom",
      FullIcon: FantomFullIcon,
      GreyIcon: NotSetIcon,
      Icon: FantomFullIcon,
      MainIcon: ftm,
      rentxName: "ftm",
      sourceChain: BridgeChain.FTMC,
      networkMappings: newNetworkMappings,
      decimals: 18,
      coingeckoSymbol: "fantom",
    },
    [BridgeCurrency.BNB]: {
      symbol: BridgeCurrency.BNB,
      short: "BNB",
      full: "Binance Coin",
      FullIcon: EthereumIcon,
      GreyIcon: NotSetIcon,
      Icon: EthereumIcon,
      MainIcon: bsc,
      rentxName: "eth",
      sourceChain: BridgeChain.BSCC,
      networkMappings: newNetworkMappings,
      decimals: 18,
      coingeckoSymbol: "binancecoin",
    },
    [BridgeCurrency.SOL]: {
      symbol: BridgeCurrency.SOL,
      short: "SOL",
      full: "Solana",
      FullIcon: EthereumIcon,
      GreyIcon: NotSetIcon,
      Icon: EthereumIcon,
      MainIcon: sol,
      rentxName: "sol",
      sourceChain: BridgeChain.SOLC,
      networkMappings: newNetworkMappings,
      decimals: 9,
      coingeckoSymbol: "solana",
    },
    [BridgeCurrency.ARBETH]: {
      symbol: BridgeCurrency.ARBETH,
      short: "arbETH",
      full: "Arbitrum ETH",
      FullIcon: ArbitrumBlackIcon,
      GreyIcon: NotSetIcon,
      Icon: ArbitrumBlackIcon,
      MainIcon: arbi,
      rentxName: "sol",
      sourceChain: BridgeChain.ARBITRUMC,
      bandchainSymbol: "ETH",
      networkMappings: newNetworkMappings,
      decimals: 18,
      coingeckoSymbol: "weth", // tha same as eth
    },
    [BridgeCurrency.UNKNOWN]: {
      symbol: BridgeCurrency.UNKNOWN,
      short: "UNKNOWN",
      full: "Unknown",
      FullIcon: NotSetIcon,
      GreyIcon: NotSetIcon,
      Icon: NotSetIcon,
      MainIcon: dot,
      rentxName: "unknown",
      sourceChain: BridgeChain.UNKNOWNC,
      networkMappings: newNetworkMappings,
    },
};

const unknownLabel = "unknown";

const unknownCurrencyConfig = currenciesConfig[BridgeCurrency.UNKNOWN];

export const getCurrencyConfig = (symbol) =>
  currenciesConfig[symbol] || unknownCurrencyConfig;

export const getCurrencyShortLabel = (symbol) =>
  currenciesConfig[symbol].short || unknownLabel;

export const getCurrencyConfigByRentxName = (name) =>
  Object.values(currenciesConfig).find(
    (currency) => currency.rentxName === name
  ) || unknownCurrencyConfig;

export const getCurrencyConfigByBandchainSymbol = (symbol) =>
  Object.values(currenciesConfig).find(
    (config) => config.bandchainSymbol === symbol || config.symbol === symbol
  ) || unknownCurrencyConfig;

export const getCurrencyConfigByCoingeckoSymbol = (symbol) =>
  Object.values(currenciesConfig).find(
    (config) => config.coingeckoSymbol === symbol || config.symbol === symbol
  ) || unknownCurrencyConfig;

export const getCurrencyRentxName = (symbol) =>
  currenciesConfig[symbol].rentxName || unknownLabel;

export const getCurrencySourceChain = (symbol) =>
  currenciesConfig[symbol].sourceChain || BridgeChain.UNKNOWNC;

export const getCurrencyRentxSourceChain = (symbol) => {
  const bridgeChain = getCurrencySourceChain(symbol);
  if (bridgeChain) {
    return getChainRentxName(bridgeChain);
  }
  return BridgeChain.UNKNOWNC;
};
