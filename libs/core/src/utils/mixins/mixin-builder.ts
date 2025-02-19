import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

/**
 * MixinsBuilder allows for a more declarative way to compose mixins.
 *
 * Example:
 * ```ts
 * class MyElement extends mix(GdsElement).with(marginProps).and(paddingProps).final() {
 * ...
 * }
 * ```
 *
 * Currently we don't use it because the Custom Elements Manifest analyzer has trouble
 * decoding the resulting classes.
 */
class MixinBuilder<TAccumulated extends Constructor> {
  private baseClass: TAccumulated

  constructor(baseClass: TAccumulated) {
    this.baseClass = baseClass
  }

  with<TMixin extends Constructor>(
    mixin: (Base: TAccumulated) => TMixin,
  ): MixinBuilder<TMixin> {
    const MixedClass = mixin(this.baseClass)
    return new MixinBuilder(MixedClass)
  }

  and<TMixin extends Constructor>(
    mixin: (Base: TAccumulated) => TMixin,
  ): MixinBuilder<TMixin> {
    return this.with(mixin)
  }

  final(): TAccumulated {
    return this.baseClass
  }
}

export function mix<TBase extends Constructor>(
  BaseClass: TBase,
): MixinBuilder<TBase> {
  return new MixinBuilder(BaseClass)
}
