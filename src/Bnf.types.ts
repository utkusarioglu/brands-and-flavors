/**
 * Creates a brand with partial __brand value. This allows Surface type to
 * be used if the need emerges; while still returning an error if different
 * flavors are mixed
 *
 * @remarks
 * The shape of this type is modelled after
 * {@link https://github.com/piotrwitek/utility-types#brandt-u
 * | Brand type in piotrwitek/utility-types}.
 */
export type Bnf<SurfaceType, BrandType, IsBrand = false> = SurfaceType &
  Chooser<BrandType, IsBrand>;

/**
 * Returns a brand or a flavor depending on the value of generic "IsBrand"
 */
type Chooser<BrandType, IsBrand> = IsBrand extends true
  ? { __brand: BrandType }
  : { __brand?: BrandType };
