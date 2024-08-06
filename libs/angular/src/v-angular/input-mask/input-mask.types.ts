import type Inputmask from 'inputmask';

export type InputmaskOptions<T> = Inputmask.Options & {
  parser?: (value: any) => T;
};

/**
 * Useful when you want to add input-mask on input which is child of your component
 *
 * @since 2.1.0
 */
export type InputMaskConfig = {
  /**
   * If set true, MutationObserver will be used to look for changes until it finds input with inputSelector
   */
  isAsync: boolean;
  /**
   * CSS like selector, which will be used with `querySelector` to get the native input.
   * If your input is loaded lazily, please use `isAsync` option with this
   */
  inputSelector: string;
};
