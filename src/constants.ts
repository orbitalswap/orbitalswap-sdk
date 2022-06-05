import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x1A04Afe9778f95829017741bF46C9524B91433fB'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.BSC_MAINNET]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x9d1cBf75c1299A4aa2C5A3a9F53c7C197B689C7b'
}

export const INIT_CODE_HASH = '0x544dd6f8fac0cc42ace7377041b5cbfc9d7f243c8f31e28da71fac250f396e34'

export const INIT_CODE_HASH_MAP = {
  [ChainId.BSC_MAINNET]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0x544dd6f8fac0cc42ace7377041b5cbfc9d7f243c8f31e28da71fac250f396e34'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
