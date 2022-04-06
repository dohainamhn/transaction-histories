import { Token } from '../../generated/schema';
import {
  OXB_ADDRESS,
  USDC_ADDRESS,
  USDT_ADDRESS,
  WAVAX_ADDRESS,
} from '../const';
export function loadToken(tokenId: string): Token {
  let token = Token.load(tokenId.toLowerCase());
  if (!token) {
    token = new Token(tokenId.toLowerCase());
    if (tokenId.toLowerCase() == OXB_ADDRESS) {
      token.symbol = '0xb';
    } else if (tokenId.toLowerCase() == USDC_ADDRESS) {
      token.symbol = 'usdc';
    } else if (tokenId.toLowerCase() == USDT_ADDRESS) {
      token.symbol = 'usdt';
    } else if (tokenId.toLowerCase() == WAVAX_ADDRESS) {
      token.symbol = 'avax';
    } else token.symbol = '';
    token.save();
  }
  return token;
}
