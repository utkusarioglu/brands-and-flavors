import { Bnf } from './Bnf.types';

/**
 * Alias for uuid
 */
export type Uuid<IsBrand = false> = Bnf<string, 'uuid', IsBrand>;
export type Id<IsBrand = false> = Bnf<string, 'id', IsBrand>;

/**
 * String
 */
export type Char<IsBrand = false> = Bnf<string, 'char', IsBrand>;
export type Text<IsBrand = false> = Bnf<string, 'text', IsBrand>;
export type LongText<IsBrand = false> = Bnf<string, 'longText', IsBrand>;

/**
 * Date
 */
export type IsoDate<IsBrand = false> = Bnf<string, 'isoDate', IsBrand>;
export type IsoTime<IsBrand = false> = Bnf<string, 'isoTime', IsBrand>;
export type IsoDateTime<IsBrand = false> = Bnf<string, 'isoDateTime', IsBrand>;

/**
 * Networking & Computing
 */
export type IpAddress<IsBrand = false> = Bnf<string, 'ipAddress', IsBrand>;
export type MacAddress<IsBrand = false> = Bnf<string, 'macAddress', IsBrand>;
export type Url<IsBrand = false> = Bnf<string, 'url', IsBrand>;
export type Path<IsBrand = false> = Bnf<string, 'path', IsBrand>;
export type MimeType<IsBrand = false> = Bnf<string, 'mimetype', IsBrand>;
