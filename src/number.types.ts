import { Bnf } from './Bnf.types';

/**
 * Number sets;
 */
export type Uint<IsBrand = false> = Bnf<number, 'uint', IsBrand>;
export type Int<IsBrand = false> = Bnf<number, 'int', IsBrand>;
export type RealNumber<IsBrand = false> = Bnf<number, 'realNumber', IsBrand>;
export type Decimal<IsBrand = false> = Bnf<number, 'decimal', IsBrand>;

/**
 * Time;
 */
export type Age<IsBrand = false> = Bnf<number, 'age', IsBrand>;
export type Century<IsBrand = false> = Bnf<number, 'century', IsBrand>;
export type Decade<IsBrand = false> = Bnf<number, 'decade', IsBrand>;
export type Year<IsBrand = false> = Bnf<number, 'year', IsBrand>;
export type Month<IsBrand = false> = Bnf<number, 'month', IsBrand>;
export type Week<IsBrand = false> = Bnf<number, 'week', IsBrand>;
export type Day<IsBrand = false> = Bnf<number, 'day', IsBrand>;
export type Hour<IsBrand = false> = Bnf<number, 'hour', IsBrand>;
export type Minute<IsBrand = false> = Bnf<number, 'Minute', IsBrand>;
export type Second<IsBrand = false> = Bnf<number, 'Second', IsBrand>;
export type Millisecond<IsBrand = false> = Bnf<number, 'millisecond', IsBrand>;
export type Epoch<IsBrand = false> = Bnf<number, 'uint', IsBrand>;

/**
 * Financial;
 */
export type Currency<IsBrand = false> = Bnf<number, 'currency', IsBrand>;
export type Usd<IsBrand = false> = Bnf<number, 'usd', IsBrand>;
export type Eur<IsBrand = false> = Bnf<number, 'eur', IsBrand>;
export type Yen<IsBrand = false> = Bnf<number, 'yen', IsBrand>;
export type Cad<IsBrand = false> = Bnf<number, 'cad', IsBrand>;
export type Chf<IsBrand = false> = Bnf<number, 'chf', IsBrand>;
export type Btc<IsBrand = false> = Bnf<number, 'btc', IsBrand>;
export type Eth<IsBrand = false> = Bnf<number, 'eth', IsBrand>;
