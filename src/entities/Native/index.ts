import { ChainId } from '../../constants'
import { Binance } from './Binance'

// Native exports
export { Binance } from './Binance'

export const NATIVE_CURRENCIES = {
    [ChainId.BSC_MAINNET]: Binance.onChain(ChainId.BSC_MAINNET),
    [ChainId.BSC_TESTNET]: Binance.onChain(ChainId.BSC_TESTNET),
  }