import { log } from '@graphprotocol/graph-ts';
import { Swapped, SwappedNative } from '../generated/Contract/Contract';
import { Swap } from '../generated/schema';
import { WAVAX_ADDRESS } from './const';
import { loadToken } from './helpers/loadToken';

export function handleSwapped(event: Swapped): void {
  log.debug('User Swap', []);
  let swap = Swap.load(event.transaction.hash.toHex());
  let fromToken = loadToken(event.params.tokenIn.toHex());
  let toToken = loadToken(event.params.tokenOut.toHex());
  if (!swap) {
    swap = new Swap(event.transaction.hash.toHex());
    swap.sender = event.transaction.from;
    swap.date = event.block.timestamp.toI32();
    swap.amountIn = event.params.amountIn.toBigDecimal();
    swap.amountOut = event.params.amountOut.toBigDecimal();
    swap.tokenIn = fromToken.id;
    swap.tokenOut = toToken.id;
  }
  swap.save();
}

export function handleSwappedNative(event: SwappedNative): void {
  log.debug('User Swap', []);
  let swap = Swap.load(event.transaction.hash.toHex());
  let fromToken = loadToken(WAVAX_ADDRESS);
  let toToken = loadToken(event.params.tokenOut.toHex());
  if (!swap) {
    swap = new Swap(event.transaction.hash.toHex());
    swap.sender = event.transaction.from;
    swap.date = event.block.timestamp.toI32();
    swap.amountIn = event.params.amountIn.toBigDecimal();
    swap.amountOut = event.params.amountOut.toBigDecimal();
    swap.tokenIn = fromToken.id;
    swap.tokenOut = toToken.id;
  }
  swap.save();
}
