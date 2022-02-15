import { SupportedChainId } from '../constants/chains'

const ETHERSCAN_PREFIXES = {
  [SupportedChainId.MAINNET]: 'https://etherscan.io',
  [SupportedChainId.ROPSTEN]: 'https://ropsten.etherscan.io',
  [SupportedChainId.RINKEBY]: 'https://rinkeby.etherscan.io',
  [SupportedChainId.GOERLI]: 'https://goerli.etherscan.io',
  [SupportedChainId.KOVAN]: 'https://kovan.etherscan.io',
  [SupportedChainId.OPTIMISM]: 'https://optimistic.etherscan.io',
  [SupportedChainId.OPTIMISTIC_KOVAN]: 'https://kovan-optimistic.etherscan.io',
  [SupportedChainId.POLYGON_MUMBAI]: 'https://mumbai.polygonscan.com',
  [SupportedChainId.POLYGON]: 'https://polygonscan.com',
}

export const ExplorerDataType = {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
}


export function getExplorerLink(chainId, data, type){
  if (chainId === SupportedChainId.ARBITRUM_ONE) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://arbiscan.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN: 
        return `https://arbiscan.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://arbiscan.io/block/${data}`
      default:
        return `https://arbiscan.io/`
    }
  }

  if (chainId === SupportedChainId.ARBITRUM_RINKEBY) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://rinkeby-explorer.arbitrum.io/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://rinkeby-explorer.arbitrum.io/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://rinkeby-explorer.arbitrum.io/block/${data}`
      default:
        return `https://rinkeby-explorer.arbitrum.io/`
    }
  }

  const prefix = ETHERSCAN_PREFIXES[chainId] ?? 'https://etherscan.io'

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return `${prefix}/tx/${data}`

    case ExplorerDataType.TOKEN:
      return `${prefix}/token/${data}`

    case ExplorerDataType.BLOCK:
      if (chainId === SupportedChainId.OPTIMISM || chainId === SupportedChainId.OPTIMISTIC_KOVAN) {
        return `${prefix}/tx/${data}`
      }
      return `${prefix}/block/${data}`

    case ExplorerDataType.ADDRESS:
      return `${prefix}/address/${data}`
    default:
      return `${prefix}`
  }
}
