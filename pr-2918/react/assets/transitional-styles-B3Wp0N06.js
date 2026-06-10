import{i as C,t as T,b as m,F as S,V as p,d as a,z as M}from"./declarative-layout-mixins-DSF861dE.js";const N=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base, _ranks, _overrides;
  :host {
    display: inline-block;
  }
  @layer _base {
    .button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      font-family: inherit;
      padding: 0;
      padding-left: 1rem "";
      padding-right: 1rem "";
      padding-bottom: 0.75rem "";
      padding-top: 0.75rem "";
      border-radius: 0.25rem;
      border: solid 1px var(--gds-sys-color-base-600);
      font-weight: 500;
    }
    .button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    .button:focus, .button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    .button {
      min-height: 2.75rem;
      align-items: center;
      display: inline-flex;
      justify-content: center;
    }
    @media (max-width: 35.98em) {
      .button {
        min-width: 100%;
      }
    }
    @media screen and (-ms-high-contrast: active) {
      .button {
        border: 2px solid currentcolor;
      }
    }
    .button.small {
      min-height: 2rem;
      height: 2rem;
      padding: 0.4375rem 0.75rem;
      font-size: 0.875rem;
      line-height: 1rem;
    }
    .button.large {
      min-height: 4rem;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .button {
      box-sizing: border-box;
      font-size: inherit;
      overflow: hidden;
      display: flex;
      gap: 0.5rem;
      text-decoration: none;
      width: 100%;
    }
    .button slot:not([name]) {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    :host(:not([variant=ghost])) .button {
      transition: border var(--gds-sys-transition);
    }
    :host(:not([variant=ghost])) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-dark-blue-1);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-dark-blue-1);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-dark-blue-1);
    }
    :host(:not([variant=ghost])) .button[aria-selected=true], :host(:not([variant=ghost])) .button:active, :host(:not([variant=ghost])) .button.active, :host(:not([variant=ghost])) .button.active:hover, :host(:not([variant=ghost])) .button:active:hover {
      background: var(--gds-sys-color-dark-blue-2);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-dark-blue-2);
    }
    :host(:not([variant=ghost])) .button {
      background: var(--gds-sys-color-dark-blue-2);
      border-color: var(--gds-sys-color-dark-blue-2);
      color: var(--gds-sys-color-text-white);
      --color: var(--gds-sys-color-text-white);
    }
    :host(:not([variant=ghost])) .button:disabled, :host(:not([variant=ghost])) .button.disabled, :host(:not([variant=ghost])) .button[aria-disabled=true] {
      background: var(--gds-sys-color-base-300) !important;
      color: var(--gds-sys-color-text-disabled) !important;
      border-color: var(--gds-sys-color-text-disabled) !important;
      cursor: not-allowed;
    }
    :host(:not([variant=ghost])) .button:disabled::-moz-placeholder, :host(:not([variant=ghost])) .button.disabled::-moz-placeholder, :host(:not([variant=ghost])) .button[aria-disabled=true]::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host(:not([variant=ghost])) .button:disabled::placeholder, :host(:not([variant=ghost])) .button.disabled::placeholder, :host(:not([variant=ghost])) .button[aria-disabled=true]::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([rank*=secondary]) .button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    :host([rank*=secondary]) .button:focus, :host([rank*=secondary]) .button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    :host([rank*=secondary]) .button {
      transition: border var(--gds-sys-transition);
    }
    :host([rank*=secondary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-dark-blue-1);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-dark-blue-1);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-dark-blue-1);
    }
    :host([rank*=secondary]) .button[aria-selected=true], :host([rank*=secondary]) .button:active, :host([rank*=secondary]) .button.active, :host([rank*=secondary]) .button.active:hover, :host([rank*=secondary]) .button:active:hover {
      background: var(--gds-sys-color-dark-blue-2);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-dark-blue-2);
    }
    :host([rank*=secondary]) .button {
      background: transparent;
      border-color: var(--gds-sys-color-dark-blue-2);
      color: var(--gds-sys-color-dark-blue-2);
      --color: var(--gds-sys-color-dark-blue-2);
    }
    :host([rank*=secondary]) .button:disabled, :host([rank*=secondary]) .button.disabled, :host([rank*=secondary]) .button[aria-disabled=true] {
      background: var(--gds-sys-color-base-300) !important;
      color: var(--gds-sys-color-text-disabled) !important;
      border-color: var(--gds-sys-color-text-disabled) !important;
      cursor: not-allowed;
    }
    :host([rank*=secondary]) .button:disabled::-moz-placeholder, :host([rank*=secondary]) .button.disabled::-moz-placeholder, :host([rank*=secondary]) .button[aria-disabled=true]::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([rank*=secondary]) .button:disabled::placeholder, :host([rank*=secondary]) .button.disabled::placeholder, :host([rank*=secondary]) .button[aria-disabled=true]::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([rank*=tertiary]) .button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    :host([rank*=tertiary]) .button:focus, :host([rank*=tertiary]) .button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    :host([rank*=tertiary]) .button {
      transition: border var(--gds-sys-transition);
    }
    :host([rank*=tertiary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-dark-blue-1);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-dark-blue-1);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-dark-blue-1);
    }
    :host([rank*=tertiary]) .button[aria-selected=true], :host([rank*=tertiary]) .button:active, :host([rank*=tertiary]) .button.active, :host([rank*=tertiary]) .button.active:hover, :host([rank*=tertiary]) .button:active:hover {
      background: var(--gds-sys-color-dark-blue-2);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-dark-blue-2);
    }
    :host([rank*=tertiary]) .button {
      background: transparent;
      border-color: transparent;
      color: var(--gds-sys-color-dark-blue-2);
      --color: var(--gds-sys-color-dark-blue-2);
    }
    :host([rank*=tertiary]) .button:disabled, :host([rank*=tertiary]) .button.disabled, :host([rank*=tertiary]) .button[aria-disabled=true] {
      background: var(--gds-sys-color-base-300) !important;
      color: var(--gds-sys-color-text-disabled) !important;
      border-color: var(--gds-sys-color-text-disabled) !important;
      cursor: not-allowed;
    }
    :host([rank*=tertiary]) .button:disabled::-moz-placeholder, :host([rank*=tertiary]) .button.disabled::-moz-placeholder, :host([rank*=tertiary]) .button[aria-disabled=true]::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([rank*=tertiary]) .button:disabled::placeholder, :host([rank*=tertiary]) .button.disabled::placeholder, :host([rank*=tertiary]) .button[aria-disabled=true]::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    /* stylelint-disable */
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button,
    :host([variant=negative][rank=primary]) .button {
      background: var(--gds-sys-color-dark-red-1);
      border-color: var(--gds-sys-color-dark-red-1);
      color: var(--gds-sys-color-text-white);
      --color: var(--gds-sys-color-text-white);
      transition: border var(--gds-sys-transition);
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:not(:disabled, .disabled, [aria-disabled]):hover,
    :host([variant=negative][rank=primary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-dark-red-1);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-dark-red-1);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-dark-red-1);
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-selected=true], :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active:hover,
    :host([variant=negative][rank=primary]) .button[aria-selected=true],
    :host([variant=negative][rank=primary]) .button:active,
    :host([variant=negative][rank=primary]) .button.active,
    :host([variant=negative][rank=primary]) .button.active:hover,
    :host([variant=negative][rank=primary]) .button:active:hover {
      background: var(--gds-sys-color-dark-red-1);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-dark-red-1);
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-selected]:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active:hover,
    :host([variant=negative][rank=primary]) .button[aria-selected]:hover,
    :host([variant=negative][rank=primary]) .button.active:hover,
    :host([variant=negative][rank=primary]) .button:active:hover {
      opacity: 0.9;
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus:not(:focus-visible),
    :host([variant=negative][rank=primary]) .button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus-visible,
    :host([variant=negative][rank=primary]) .button:focus,
    :host([variant=negative][rank=primary]) .button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true],
    :host([variant=negative][rank=primary]) .button:disabled,
    :host([variant=negative][rank=primary]) .button.disabled,
    :host([variant=negative][rank=primary]) .button[aria-disabled=true] {
      background: var(--gds-sys-color-background-primary) !important;
      color: var(--gds-sys-color-text-white) !important;
      border-color: var(--gds-sys-color-dark-red-1) !important;
      cursor: not-allowed;
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled::-moz-placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled::-moz-placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true]::-moz-placeholder, :host([variant=negative][rank=primary]) .button:disabled::-moz-placeholder, :host([variant=negative][rank=primary]) .button.disabled::-moz-placeholder, :host([variant=negative][rank=primary]) .button[aria-disabled=true]::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled::placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled::placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true]::placeholder,
    :host([variant=negative][rank=primary]) .button:disabled::placeholder,
    :host([variant=negative][rank=primary]) .button.disabled::placeholder,
    :host([variant=negative][rank=primary]) .button[aria-disabled=true]::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    /* stylelint-enable */
    :host([variant=negative][rank=secondary]) .button,
    :host([variant=negative][rank=tertiary]) .button {
      color: var(--gds-sys-color-dark-red-1);
      --color: var(--gds-sys-color-dark-red-1);
      border-color: transparent;
      transition: border var(--gds-sys-transition);
    }
    :host([variant=negative][rank=secondary]) .button:not(:disabled, .disabled, [aria-disabled]):hover,
    :host([variant=negative][rank=tertiary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-dark-red-1);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-dark-red-1);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-dark-red-1);
    }
    :host([variant=negative][rank=secondary]) .button[aria-selected=true], :host([variant=negative][rank=secondary]) .button:active, :host([variant=negative][rank=secondary]) .button.active, :host([variant=negative][rank=secondary]) .button.active:hover, :host([variant=negative][rank=secondary]) .button:active:hover,
    :host([variant=negative][rank=tertiary]) .button[aria-selected=true],
    :host([variant=negative][rank=tertiary]) .button:active,
    :host([variant=negative][rank=tertiary]) .button.active,
    :host([variant=negative][rank=tertiary]) .button.active:hover,
    :host([variant=negative][rank=tertiary]) .button:active:hover {
      background: var(--gds-sys-color-dark-red-1);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-dark-red-1);
    }
    :host([variant=negative][rank=secondary]) .button[aria-selected]:hover, :host([variant=negative][rank=secondary]) .button.active:hover, :host([variant=negative][rank=secondary]) .button:active:hover,
    :host([variant=negative][rank=tertiary]) .button[aria-selected]:hover,
    :host([variant=negative][rank=tertiary]) .button.active:hover,
    :host([variant=negative][rank=tertiary]) .button:active:hover {
      opacity: 0.9;
    }
    :host([variant=negative][rank=secondary]) .button:focus:not(:focus-visible),
    :host([variant=negative][rank=tertiary]) .button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    :host([variant=negative][rank=secondary]) .button:focus, :host([variant=negative][rank=secondary]) .button:focus-visible,
    :host([variant=negative][rank=tertiary]) .button:focus,
    :host([variant=negative][rank=tertiary]) .button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    :host([variant=negative][rank=secondary]) .button {
      border-color: var(--gds-sys-color-dark-red-2);
    }
    :host([variant=ghost]) .button {
      transition: border var(--gds-sys-transition);
    }
    :host([variant=ghost]) .button:not(:disabled, .disabled, [aria-disabled]):hover {
      background: var(--gds-sys-color-base-800);
      color: var(--gds-sys-color-text-white);
      --background: var(--gds-sys-color-base-800);
      --color: var(--gds-sys-color-text-white);
      border-color: var(--gds-sys-color-base-800);
    }
    :host([variant=ghost]) .button[aria-selected=true], :host([variant=ghost]) .button:active, :host([variant=ghost]) .button.active, :host([variant=ghost]) .button.active:hover, :host([variant=ghost]) .button:active:hover {
      background: var(--gds-sys-color-base-800);
      color: var(--gds-sys-color-text-white);
      --background: $bg;
      --color: $color;
      border-color: var(--gds-sys-color-base-800);
    }
    :host([variant=ghost]) .button[aria-selected]:hover, :host([variant=ghost]) .button.active:hover, :host([variant=ghost]) .button:active:hover {
      opacity: 0.9;
    }
    :host([variant=ghost]) .button {
      background-color: transparent;
      border-color: var(--gds-sys-color-base-800);
      color: var(--gds-sys-color-base-800);
      --color: var(--gds-sys-color-base-800);
    }
    :host([variant=ghost]) .button:disabled, :host([variant=ghost]) .button.disabled, :host([variant=ghost]) .button[aria-disabled=true] {
      color: var(--gds-sys-color-text-disabled) !important;
      border-color: var(--gds-sys-color-text-disabled) !important;
      cursor: not-allowed;
    }
    :host([variant=ghost]) .button:disabled::-moz-placeholder, :host([variant=ghost]) .button.disabled::-moz-placeholder, :host([variant=ghost]) .button[aria-disabled=true]::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    :host([variant=ghost]) .button:disabled::placeholder, :host([variant=ghost]) .button.disabled::placeholder, :host([variant=ghost]) .button[aria-disabled=true]::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
  }
  @layer _overrides {
    :host .button.icon {
      padding: 0.75rem;
      background: transparent;
      border-width: 0px;
      color: currentColor;
    }
    :host .button.icon:hover {
      color: currentColor;
      background: var(--gds-sys-color-base-300);
    }
    :host .button.icon slot {
      display: contents;
    }
    .button.icon.xs {
      min-height: 1.5rem;
      line-height: 0.75rem;
      padding: 0.25rem;
    }
    .button.icon.small {
      padding: 0.5rem;
    }
    .button.icon.large {
      padding: 1rem;
    }
  }
}`;function t(){r.instance.register("gds-button",N.toString())}var z=C`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-3xs);
    --_perimeter-radius: var(--gds-sys-space-xs);
    --_toggle-border-width-checked: var(--gds-sys-space-s);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-03)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-04)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-sys-space-5xs) * 2);
    cursor: pointer;
  }

  .rbcb-wrapper .rbcb {
    margin-block-start: 0;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_perimeter-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-3xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow, background-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
  }

  .rbcb__icon {
    line-height: 10px;
    grid-area: 1 / 1;
    transition-property: scale, opacity;
    transition-duration: 150ms;
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: scale, opacity;
    scale: 0.6;
    opacity: 0;
    color: var(--gds-sys-color-content-neutral-03);
  }

  .rbcb__icon--visible {
    scale: 1;
    opacity: 1;
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-4xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--_perimeter-radius);
    min-width: var(--_perimeter-size, var(--gds-sys-space-2xl));
    min-height: var(--_perimeter-size, var(--gds-sys-space-2xl));
    position: absolute;
    left: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-03);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-03);
  }

  .rbcb--radio.--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-negative-01);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-disabled-02);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-negative-02);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-negative-01);
  }

  .rbcb--radio.--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-negative-01);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-border-negative-01);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-state-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-content-negative-01);
  }

  /* Visually hidden checkbox   */
  .visually-hidden-checkbox {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  .rbcb-wrapper {
    position: relative;
  }

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
  }

  :host([gds-element='gds-radio']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-radio']:focus-within) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-within) .rbcb__perimeter,
  .rbcb-wrapper:focus-visible .rbcb__perimeter,
  .rbcb-wrapper:focus-within .rbcb__perimeter {
    outline-width: var(--gds-sys-space-4xs);
    scale: 1;
  }

  @media (hover: hover) {
    :host([gds-element='gds-checkbox']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-option']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-radio']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    .rbcb:hover:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  :host([gds-element='gds-checkbox']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  :host([gds-element='gds-radio']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  .rbcb:active:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
    scale: 0.9;
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle,
    .rbcb__icon {
      transition: none;
    }
  }
`;const _=`@layer base, reset, transitional-styles;
@layer transitional-styles {
  :host {
    background-color: var(--gds-sys-color-base-300);
    color: var(--gds-sys-color-base-800);
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.75rem 1rem;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
  :host([aria-hidden=true]) {
    display: none;
  }
}`,B=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
/** 
  * @deprecated in favor of Grouped list component
  */
/** 
  * @deprecated in favor of Grouped list component
  */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  :host {
    padding-left: 0 "";
    margin-bottom: 0 "";
    margin-top: 0 "";
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  :host > li {
    padding-bottom: 0.5rem "";
    padding-top: 0.5rem "";
    border: 0;
    display: block;
    position: relative;
  }
  :host > li::before {
    font-weight: 500;
    display: inline-block;
    left: 0;
    position: absolute;
    text-align: center;
  }
  :host {
    overflow-y: auto;
  }
}`,G=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  .item {
    padding-left: 1rem "";
    padding-right: 1rem "";
    padding-bottom: 0.75rem "";
    padding-top: 0.75rem "";
    line-height: 1.25;
    cursor: pointer;
  }
  .item:hover, .item:focus-visible {
    background-color: var(--gds-sys-color-base-200);
  }
  .item:active {
    background-color: var(--gds-sys-color-base-200);
  }
  .item:focus {
    outline-color: #000;
    outline-offset: -0.25rem;
  }
  .item.active.sg-highlighted, .item[aria-selected=true] {
    background: var(--gds-sys-color-base-800);
    color: #fff;
  }
  .item {
    display: flex;
    gap: 0.75rem;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
  :host(:hover) div,
  :host(:focus-visible) div {
    background-color: var(--gds-sys-color-base-200);
  }
  :host(:active) div {
    background-color: var(--gds-sys-color-base-300);
  }
  :host(:focus-visible) {
    outline-color: #000;
    outline-offset: -0.25rem;
  }
  :host([inert]) {
    display: none;
  }
  :host([highlighted]) .item {
    background: var(--gds-sys-color-base-800);
    color: #fff;
  }
}`;function x(){r.instance.register("gds-listbox",B.toString()),r.instance.register("gds-option",G.toString()+z.cssText),r.instance.register("gds-menu-heading",_.toString())}const R=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  :host {
    display: contents;
  }
  :host([open]) dialog {
    box-sizing: border-box;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  :host > div:not([hidden]) {
    display: contents;
  }
  header {
    display: flex;
  }
  header .close::part(_button) {
    border-radius: 100%;
    color: var(--gds-sys-color-text-primary);
    border: 1px solid transparent;
  }
  header .close::part(_button):hover {
    background-color: var(--gds-sys-color-base-300);
  }
  header h2 {
    flex-grow: 1;
    font-weight: 400;
    line-height: 1.5;
    margin: 0.25rem 0 0 0.75rem;
  }
  dialog {
    background-color: var(--gds-sys-color-background-primary);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    inset: auto;
    z-index: 1060;
    box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.15);
    color: var(--gds-sys-color-text-primary);
    overflow: hidden;
    padding: 0;
    padding-bottom: 0 "";
    border: solid 1px var(--gds-sys-color-base-600);
    --border-color: var(--gds-sys-color-text-primary);
    border-radius: 0.25rem;
  }
  @media (max-width: 35.98em) {
    dialog.use-modal-in-mobile {
      border-top: solid 1px var(--gds-sys-color-base-600);
      --border-color: var(--gds-sys-color-base-600);
      padding-bottom: 0.5rem "";
      border-radius: 1rem 1rem 0 0;
      bottom: 0;
      left: 0;
      transition: all 300ms ease-in-out;
      width: 100%;
      border: 1px solid var(--border-color);
      border-radius: 0.25rem;
      max-height: 80svh;
      padding-bottom: 0;
      inset: 0;
    }
    dialog.use-modal-in-mobile.v-kb-visible {
      inset-block-end: auto;
      max-height: 50svh;
      top: 1rem;
    }
  }
  @media (min-width: 36em) {
    dialog.use-modal-in-mobile header {
      display: none;
    }
  }
  @media (min-width: 36em) {
    dialog.use-modal-in-mobile:not(.has-backdrop)::backdrop {
      opacity: 0;
    }
  }
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
    display: block;
    position: fixed;
  }
  dialog:not(.use-modal-in-mobile) header {
    display: none;
  }
  dialog:not(.use-modal-in-mobile)::backdrop {
    opacity: 0;
  }
}`;function g(){r.instance.register("gds-popover",R.toString())}const F=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base, _overrides;
  :host {
    display: inline-block;
  }
  @layer _base {
    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      font-family: inherit;
      padding: 0;
      padding-left: 1rem "";
      padding-right: 1rem "";
      padding-bottom: 0.75rem "";
      padding-top: 0.75rem "";
      border-radius: 0.25rem;
      border: solid 1px var(--gds-sys-color-base-600);
      font-weight: 500;
    }
    button:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    button:focus, button:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    button {
      min-height: 2.75rem;
      align-items: center;
      display: inline-flex;
      justify-content: center;
    }
    @media (max-width: 35.98em) {
      button {
        min-width: 100%;
      }
    }
    @media screen and (-ms-high-contrast: active) {
      button {
        border: 2px solid currentcolor;
      }
    }
    button.small {
      min-height: 2rem;
      height: 2rem;
      padding: 0.4375rem 0.75rem;
      font-size: 0.875rem;
      line-height: 1rem;
    }
    button.large {
      min-height: 4rem;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    button {
      background-color: transparent;
      border: 0.0625rem solid transparent;
      padding: 0.625rem;
      height: 2.75rem;
      width: 2.75rem;
      min-width: auto;
      --color: var(--gds-sys-color-base-800);
    }
    .gds-form-group button {
      margin-top: -0.625rem;
    }
    button.small {
      height: 2rem;
      width: 2rem;
      padding: 0.4375rem;
      line-height: 1.125rem;
    }
    button svg {
      height: 1rem;
      width: 1rem;
    }
    button path,
    button line,
    button circle,
    button rect,
    button ellipse,
    button polyline,
    button text {
      fill: var(--gds-sys-color-base-800);
      stroke: var(--gds-sys-color-base-800);
      transition: all var(--gds-sys-transition);
    }
    button:hover, button.highlighted {
      background-color: rgba(0, 0, 0, 0.1);
      border-color: transparent;
    }
    button:active, button.highlighted:hover {
      background-color: rgba(0, 0, 0, 0.2);
      border-color: transparent;
    }
  }
  @layer _overrides {
    button {
      border-color: transparent;
      color: var(--gds-sys-color-base-800);
      display: flex;
      gap: 0.5rem;
      line-height: 0.75;
      padding-inline: 0.4375rem;
      width: auto;
    }
    button.highlighted {
      background-color: var(--gds-sys-color-base-300);
    }
  }
}`;function q(){r.instance.register("gds-context-menu",F.toString()),g(),x(),t()}const L=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
/* medium */
/* regular */
/* regular */
/* regular */
/* hover */
/* focus */
/* selected */
/* highlighted */
/* active */
/* disabled */
/* today */
/* weekend */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base {
    :host {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 35.98em) {
      :host {
        flex-wrap: wrap;
        overflow-y: auto;
      }
    }
    :host table {
      border-spacing: 0;
    }
    :host th,
    :host td {
      box-sizing: border-box;
      height: 2.75rem;
      text-align: center;
      width: 2.75rem;
    }
    :host thead {
      /* days */
    }
    :host thead th {
      background: var(--gds-sys-color-background-primary);
      border-bottom: solid 1px var(--gds-sys-color-base-300);
      font-weight: 400;
      top: 0;
    }
    @media (max-width: 35.98em) {
      :host thead th {
        position: sticky;
      }
    }
    :host tbody {
      /* week numbers */
    }
    :host tbody th {
      font-weight: 400;
    }
    :host tbody {
      /* dates */
    }
    :host tbody td {
      border: solid 1px transparent;
      font-weight: 500;
      -webkit-user-select: none;
         -moz-user-select: none;
              user-select: none;
      /* weekend */
    }
    :host tbody td.sg-date-holiday:not(.disabled) {
      background: var(--gds-sys-color-background-primary);
      color: var(--gds-sys-color-text-error);
    }
    :host tbody td {
      /* today */
    }
    :host tbody td.today {
      background: transparent;
      border-radius: 4px;
      box-shadow: inset 0 0 0 2px var(--gds-sys-color-base-800);
      color: var(--gds-sys-color-base-800);
    }
    :host tbody td {
      /* hover */
    }
    :host tbody td:hover:not(.disabled) {
      background: var(--gds-sys-color-base-300);
      border: solid 1px var(--gds-sys-color-background-primary);
      border-radius: 4px;
      color: var(--gds-sys-color-text-primary);
      cursor: pointer;
    }
    :host tbody td {
      /* focus */
    }
    :host tbody td:focus-visible:focus:not(:focus-visible) {
      box-shadow: none;
      outline: 0;
    }
    :host tbody td:focus-visible:focus, :host tbody td:focus-visible:focus-visible {
      outline-color: var(--gds-sys-color-focus-outline);
      outline-style: solid;
      outline-width: 0.125rem;
      outline-offset: 0.125rem;
    }
    :host tbody td:focus-visible:not(.disabled) {
      border: solid 1px var(--gds-sys-color-background-primary);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      z-index: 0;
    }
    :host tbody td {
      /* selected */
    }
    :host tbody td[aria-selected=true] {
      background: var(--gds-sys-color-base-800);
      border: solid 1px var(--gds-sys-color-background-primary);
      border-radius: 4px;
      color: var(--gds-sys-color-text-inverted);
    }
    :host tbody td {
      /* highlighted */
    }
    :host tbody td[tabindex="0"] {
      border-radius: 4px;
    }
    :host tbody td {
      /* active (pressed) */
    }
    :host tbody td:hover:active:not(.disabled) {
      background: var(--gds-sys-color-base-800);
      border: solid 1px var(--gds-sys-color-background-primary);
      border-radius: 4px;
      color: var(--gds-sys-color-text-inverted);
    }
    :host tbody td {
      /* disabled */
    }
    :host tbody td.disabled {
      background: var(--gds-sys-color-base-200);
      border: solid 1px var(--gds-sys-color-background-primary);
      border-radius: 4px;
      color: var(--gds-sys-color-text-disabled);
      cursor: not-allowed;
      font-weight: 400;
    }
    :host tbody td.disabled.sg-date-holiday {
      color: var(--gds-sys-color-text-error);
    }
    :host tbody td.disabled .number,
    :host tbody td.disabled .indicator-dot {
      --_color: var(--gds-sys-color-text-disabled) !important;
    }
    :host tbody td.custom-date {
      position: relative;
    }
    :host tbody .number {
      color: var(--_color, "currentColor");
    }
    :host tbody .indicator-dot {
      display: block;
      width: 0.375rem;
      height: 0.375rem;
      top: 1.5rem;
      border-radius: 50%;
      margin: auto;
      position: absolute;
      inset-block-end: 0.125rem;
      inset-inline: 0;
      background-color: var(--_color);
    }
    :host table {
      flex-grow: 1;
      width: 100%;
    }
    :host table td {
      width: 3rem;
      height: 3rem;
    }
  }
  @layer _modifiers {
    .week-number {
      border-right: solid 1px var(--gds-sys-color-base-300);
      font-weight: 400;
      pointer-events: none;
    }
  }
}`;function I(){r.instance.register("gds-calendar",L.toString())}const A=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  .field {
    border-radius: 0.25rem;
    border: solid 1px var(--gds-sys-color-base-600);
    --border-color: var(--gds-sys-color-base-600);
  }
  .field:focus:not(:focus-visible) {
    box-shadow: none;
    outline: 0;
  }
  .field:focus, .field:focus-within {
    outline-color: var(--gds-sys-color-focus-outline);
    outline-style: solid;
    outline-width: 0.125rem;
    outline-offset: 0.125rem;
  }
  .field {
    align-items: stretch;
    gap: var(--gds-sys-space-xs);
    background-color: var(--gds-sys-color-background-primary);
    box-sizing: border-box;
    color: var(--gds-sys-color-text-primary);
    cursor: text;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs) calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-m);
    min-block-size: 44px;
  }
  .field:hover {
    background-color: var(--grey-200);
  }
  .field.small {
    font-size: 0.875rem;
    min-height: 2rem;
  }
  .field.multiline {
    align-items: flex-start;
    padding: calc(var(--gds-sys-space-s) - 1px) var(--gds-sys-space-s) calc(var(--gds-sys-space-s) - 1px) var(--gds-sys-space-m);
    height: -moz-max-content;
    height: max-content;
  }
  .field.action-slot-occupied:not(.trail-slot-occupied) {
    padding-right: var(--gds-sys-space-xs);
  }
  .field.lead-slot-occupied {
    padding-left: var(--gds-sys-space-xs);
  }
  .field.trail-slot-occupied {
    padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-m);
  }
  .field slot[name=action]::slotted(*) {
    margin: -3px 0 -3px -3px;
  }
  .field:focus-within {
    outline-color: currentColor;
  }
  .field.invalid {
    border-color: var(--gds-sys-color-border-negative-01);
    color: var(--gds-sys-color-content-negative-01);
    border-bottom-width: 2px;
  }
  .field.disabled {
    background: var(--gds-sys-color-l3-disabled-01);
    color: var(--gds-sys-color-content-disabled-01);
    border-color: transparent;
    pointer-events: none;
  }
  .main-slot-wrap {
    display: flex;
    flex: 1;
  }
  slot:not([name])::slotted(*) {
    color: currentColor;
  }
  slot[name=lead]::slotted([gds-element^=gds-icon-]) {
    align-items: center;
    justify-content: center;
    display: flex;
    min-width: var(--gds-sys-space-l);
  }
}`;function y(){r.instance.register("gds-field-base",A.toString())}function k(){x(),g(),t(),y()}const W=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }
  [role=spinbutton] {
    display: inline-block;
  }
  [role=spinbutton]:focus {
    background: color-mix(in srgb, var(--gds-sys-color-blue) 50%, transparent);
    outline: none;
  }
  [role=spinbutton]::-moz-selection {
    background: transparent;
  }
  [role=spinbutton]::selection {
    background: transparent;
  }
}`;function U(){const $=W.toString()+T.reduce((o,e)=>o+e.cssText,"");r.instance.register("gds-datepicker",$.toString()),k(),g(),I()}const H=`@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base, _overrides;
  @layer _base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
}`;function O(){r.instance.register("gds-filter-chip",H.toString()),t()}const V=`@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base, _overrides;
  @layer _base {}
  @layer _overrides {}
}`;function D(){r.instance.register("gds-filter-chips",V.toString()),O()}const j=`@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base, _overrides;
  :host {
    display: block;
    list-style: none;
  }
  @layer _base {
    .gds-list-heading {
      background-color: var(--gds-sys-color-base-200, #e9e9e9);
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
    }
    ::slotted([gds-element=gds-list-item]) {
      all: revert;
      border-bottom: 1px solid var(--gds-sys-color-base-200, #e9e9e9);
      display: flex;
      gap: 0.25rem;
      justify-content: space-between;
      padding: 1rem;
    }
  }
}`;function E(){r.instance.register("gds-grouped-list",j.toString())}function X(){t(),y()}const J=`/* stylelint-disable max-nesting-depth */
/**
 * Assert that a map is in ascending order
 * @mixin assert-ascending
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Assert that the first breakpoint in a map starts at zero
 * @mixin assert-starts-at-zero
 * @param {Map} $map - The map to check
 * @param {String} $map-name - The name of the map
 */
/**
 * Check if a value is important
 * @function is-important
 * @param {Boolean} $important - Whether the value is important
 * @return {String} - "!important" if true, otherwise an empty string
 */
/**
 * Replace a substring in a string
 * @function str-replace
 * @param {String} $string - The original string
 * @param {String} $search - The substring to replace
 * @param {String} $replace - The replacement string
 * @return {String} - The updated string
 */
/**
 * Convert a map to its negative variant
 * @function negativify-map
 * @param {Map} $map - The map to convert
 * @return {Map} - The negative variant of the map
 */
/**
 * Generate utility classes
 * @mixin generate-utility
 * @param {Map} $utility - Utility map
 * @param {String} $infix - Infix for class names
 * @param {Boolean} $is-rfs-media-query - Whether to use RFS media query
 */
/* stylelint-enable max-nesting-depth */
/**
 * Calculate the luminance for a color.
 * @function luminance
 * @param {Color} $color - The color to calculate luminance for
 * @return {Number} - The luminance value
 */
/**
 * Calculate the contrast ratio between two colors.
 * @function color-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @return {Number} - The contrast ratio
 */
/**
 * Remove the unit of a length
 * @function strip-unit
 * @param {Number} $number - Number to remove unit from
 * @return {Number} - Unitless number
 */
/**
 * Validate font size
 * @function validate-font-size
 * @param {Number} $size - Font size to validate
 * @return {Number} - Validated font size in pixels
 */
/**
 * Get ratio for WCAG level
 * @function get-ratio
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @return {Number} - Ratio value
 */
/**
 * Determine if a color is light or dark
 * @function light-or-dark
 * @param {Color} $color - The color to check
 * @return {String} - "light" or "dark"
 */
/**
 * Get the most legible color (black or white) for a given background color
 * @function most-legible-color
 * @param {Color} $color - The background color
 * @return {Color} - The most legible color
 */
/**
 * Get the desired color combination for foreground and background colors
 * @function desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 * @return {List} - List containing background and foreground colors
 */
/**
 * @mixin desired-color-combination
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Number} $offsetThreshold - Offset threshold
 * @param {Number} $ratio - Contrast ratio
 */
/**
 * Get an accessible color for a given foreground and background color
 * @function a11y-color
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {String} $level - WCAG level
 * @param {Number} $size - Font size
 * @param {Boolean} $bold - Is bold
 * @param {Boolean} $graphic - Is graphic
 * @param {Number} $maxOffset - Maximum offset
 * @param {Boolean} $darkMode - Is dark mode
 * @param {Number} $ratio - Contrast ratio
 * @return {Color} - Accessible color
 */
/**
 * Get the maximum contrast color
 * @function max-contrast
 * @param {Color} $fg - Foreground color
 * @param {Color} $bg - Background color
 * @param {Color} $max - Maximum contrast color
 * @return {Color} - Maximum contrast color
 */
/**
 * Get the RGB values of a color as a string
 * @function stripped-rgb
 * @param {Color} $color - The color
 * @return {String} - RGB values as a string
 */
/**
 * Get the HSL values of a color as a string
 * @function stripped-hsl
 * @param {Color} $color - The color
 * @return {String} - HSL values as a string
 */
/**
 * Convert a map of colors to a map of HSL values
 * @function hsl-map
 * @param {Map} $colors - Map of colors
 * @return {Map} - Map of HSL values
 */
/**
* @deprecated
* Use \`add-focus\` instead
*/
/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */
/**
 * Breakpoint viewport sizes and media queries.
 *
 * Breakpoints are defined as a map of (name: minimum width), order from small to large:
 *
 *    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
 *
 * The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.
 */
/**
 * Name of the next breakpoint, or null for the last breakpoint.
 *
 *    >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
/**
 * Minimum breakpoint width. Null for the smallest (first) breakpoint.
 *
 *    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    576px
 */
/**
 * Maximum breakpoint width.
 * The maximum value is reduced by 0.02px to work around the limitations of
 * \`min-\` and \`max-\` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
/**
 * Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
 * Useful for making responsive utilities.
 *
 *    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    ""  (Returns a blank string)
 *    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    "-sm"
 */
/**
 * Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
 * Makes the @content apply to the given breakpoint and wider.
 */
/**
 * Media of at most the maximum breakpoint width. No query for the largest breakpoint.
 * Makes the @content apply to the given breakpoint and narrower.
 */
/**
 * Media that spans multiple breakpoint widths.
 * Makes the @content apply between the min and max breakpoints
 */
/**
 * Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 */
@layer base, reset, transitional-styles;
@layer transitional-styles {
  @layer _base;
  @layer _base {
    :host {
      border-right: 1px solid #333;
      box-sizing: border-box;
      display: flex;
      transition: 0.2s;
      z-index: 1;
    }
    :host(:last-child) {
      border-right: 0;
    }
    button {
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      background: transparent;
      border-width: 0;
      color: var(--text-primary-color);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font-weight: 500;
      min-width: 6.625rem;
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      border-radius: 0;
    }
    @media (pointer: fine) {
      button:hover {
        background-color: var(--gds-sys-color-base-200);
      }
    }
    button[aria-current=true] {
      background-color: #333;
      color: #fff;
    }
    button:focus-visible {
      outline: 2px solid #000;
      outline-offset: -2px;
    }
    button:disabled,
    button[aria-disabled=true],
    button.disabled {
      color: var(--gds-sys-color-text-disabled) !important;
      border-color: var(--gds-sys-color-text-disabled) !important;
      cursor: not-allowed;
    }
    button:disabled::-moz-placeholder, button[aria-disabled=true]::-moz-placeholder, button.disabled::-moz-placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
    button:disabled::placeholder,
    button[aria-disabled=true]::placeholder,
    button.disabled::placeholder {
      color: var(--gds-sys-color-text-disabled);
    }
  }
}`;function P(){r.instance.register("gds-segmented",J.toString())}const Q=`@layer base, reset, transitional-styles;

@layer transitional-styles {
  @layer _base, _overrides;

  @layer _base {
    :host {
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 4px;
      box-sizing: border-box;
      contain: layout;
      display: inline-flex;
      height: 3rem;
      max-width: 100%;
      overflow: hidden;
    }

    :host([size='small']) {
      height: 2.5rem;
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 0;
      flex-shrink: 1;
      scroll-snap-type: inline mandatory;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      overflow-x: scroll;
      position: relative;
      width: 100%;
      scrollbar-width: none;
    }

    #track::-webkit-scrollbar {
      display: none;
    }

    #btn-prev,
    #btn-next {
      align-items: center;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      aspect-ratio: 1;
      background-color: #fff;
      border-width: 0;
      color: #333;
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      height: 100%;
      justify-content: center;
      width: 2.5rem;
      z-index: 2;
      position: absolute;
      transition: 0.2s;

      @media (pointer: fine) {
        &:hover {
          background-color: var(--gds-sys-color-base-200);
        }
      }
    }

    #btn-prev {
      border-right: 1px solid #333;
    }
    #btn-next {
      border-left: 1px solid #333;
      right: 0;
    }

    #btn-prev[aria-hidden='true'],
    #btn-next[aria-hidden='true'] {
      opacity: 0;
      width: 0;
      margin: 0;
      padding: 0;
    }

    :host([size='small']) #btn-prev,
    :host([size='small']) #btn-next {
      width: 2rem;
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-shrink: 0;
      z-index: 1;
      scroll-margin: 0 2.5rem;
      scroll-snap-align: start;
    }

    #indicator {
      display: none;
    }
  }

  /* @layer _overrides {
  } */
}
`;function Y(){r.instance.register("gds-segmented-control",Q.toString()),P()}const Z=`/**
 * Do not edit directly
 * Generated on Thu, 06 Feb 2025 18:59:50 GMT
 */
/**
 * Do not edit directly
 * Generated on Thu, 06 Feb 2025 18:59:50 GMT
 */
:host {
  display: contents;
  --gds-sys-shape-corner-none: 0;
  --gds-sys-shape-corner-small: 0.125rem;
  --gds-sys-shape-corner-medium: 0.25rem;
  --gds-sys-shape-corner-round: 50%;
}

:host([color-scheme=light]) {
  --gds-sys-color-blue: #41b0ee;
  --gds-sys-color-dark-blue-1: #0092e1;
  --gds-sys-color-dark-blue-2: #007ac7;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #45b400;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffc500;
  --gds-sys-color-dark-yellow-1: #ffb400;
  --gds-sys-color-dark-yellow-2: #f8a000;
  --gds-sys-color-text-primary: #333333;
  --gds-sys-color-text-secondary: #ababab;
  --gds-sys-color-text-white: #ffffff;
  --gds-sys-color-text-black: #333333;
  --gds-sys-color-text-inverted: #ffffff;
  --gds-sys-color-text-link: #0062bc;
  --gds-sys-color-text-error: #9f000a;
  --gds-sys-color-text-disabled: #adadad;
  --gds-sys-color-red: #f03529;
  --gds-sys-color-dark-red-1: #d81a1a;
  --gds-sys-color-dark-red-2: #bb000c;
  --gds-sys-color-purple: #673ab6;
  --gds-sys-color-dark-purple-1: #4f2C99;
  --gds-sys-color-dark-purple-2: #3f2587;
  --gds-sys-color-white: #ffffff;
  --gds-sys-color-black: #000000;
  --gds-sys-color-background-primary: #ffffff;
  --gds-sys-color-background-secondary: #eeeeee;
  --gds-sys-color-base-100: #f8f8f8;
  --gds-sys-color-base-200: #e9e9e9;
  --gds-sys-color-base-300: #dedede;
  --gds-sys-color-base-400: #cecece;
  --gds-sys-color-base-500: #adadad;
  --gds-sys-color-base-600: #868686;
  --gds-sys-color-base-700: #494949;
  --gds-sys-color-base-800: #333333;
  --gds-sys-color-base-900: #1a1a1a;
  --gds-sys-color-hover-10: rgba(255, 255, 255, 0.1);
  --gds-sys-color-hover-20: rgba(255, 255, 255, 0.2);
}

/* force dark mode */
:host([color-scheme=dark]) {
  --gds-sys-color-blue: #58b8ee;
  --gds-sys-color-dark-blue-1: #58b8ee;
  --gds-sys-color-dark-blue-2: #2c9cd9;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #75b44a;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffe182;
  --gds-sys-color-dark-yellow-1: #f0be47;
  --gds-sys-color-dark-yellow-2: #ebab39;
  --gds-sys-color-text-primary: #dedede;
  --gds-sys-color-text-secondary: #ababab;
  --gds-sys-color-text-white: #ffffff;
  --gds-sys-color-text-black: #333333;
  --gds-sys-color-text-inverted: #333333;
  --gds-sys-color-text-link: #2c9cd9;
  --gds-sys-color-text-error: #ff594f;
  --gds-sys-color-text-disabled: #464646;
  --gds-sys-color-red: #f7706d;
  --gds-sys-color-dark-red-1: #c82a29;
  --gds-sys-color-dark-red-2: #9e2120;
  --gds-sys-color-purple: #ad91dc;
  --gds-sys-color-dark-purple-1: #7e52cc;
  --gds-sys-color-dark-purple-2: #4a328f;
  --gds-sys-color-white: #ffffff;
  --gds-sys-color-black: #000000;
  --gds-sys-color-background-primary: #222222;
  --gds-sys-color-background-secondary: #1a1a1a;
  --gds-sys-color-base-100: #121212;
  --gds-sys-color-base-200: #222222;
  --gds-sys-color-base-300: #272727;
  --gds-sys-color-base-400: #2c2c2c;
  --gds-sys-color-base-500: #333333;
  --gds-sys-color-base-600: #494949;
  --gds-sys-color-base-700: #757575;
  --gds-sys-color-base-800: #ababab;
  --gds-sys-color-base-900: #dedede;
  --gds-sys-color-hover-10: rgba(0, 0, 0, 0.1);
  --gds-sys-color-hover-20: rgba(0, 0, 0, 0.2);
}

/* use preferred color scheme */
@media (prefers-color-scheme: dark) {
  :host,
  :host([color-scheme=auto]) {
    --gds-sys-color-blue: #58b8ee;
    --gds-sys-color-dark-blue-1: #58b8ee;
    --gds-sys-color-dark-blue-2: #2c9cd9;
    --gds-sys-color-green: #60cd18;
    --gds-sys-color-dark-green-1: #75b44a;
    --gds-sys-color-dark-green-2: #308800;
    --gds-sys-color-yellow: #ffe182;
    --gds-sys-color-dark-yellow-1: #f0be47;
    --gds-sys-color-dark-yellow-2: #ebab39;
    --gds-sys-color-text-primary: #dedede;
    --gds-sys-color-text-secondary: #ababab;
    --gds-sys-color-text-white: #ffffff;
    --gds-sys-color-text-black: #333333;
    --gds-sys-color-text-inverted: #333333;
    --gds-sys-color-text-link: #2c9cd9;
    --gds-sys-color-text-error: #ff594f;
    --gds-sys-color-text-disabled: #464646;
    --gds-sys-color-red: #f7706d;
    --gds-sys-color-dark-red-1: #c82a29;
    --gds-sys-color-dark-red-2: #9e2120;
    --gds-sys-color-purple: #ad91dc;
    --gds-sys-color-dark-purple-1: #7e52cc;
    --gds-sys-color-dark-purple-2: #4a328f;
    --gds-sys-color-white: #ffffff;
    --gds-sys-color-black: #000000;
    --gds-sys-color-background-primary: #222222;
    --gds-sys-color-background-secondary: #1a1a1a;
    --gds-sys-color-base-100: #121212;
    --gds-sys-color-base-200: #222222;
    --gds-sys-color-base-300: #272727;
    --gds-sys-color-base-400: #2c2c2c;
    --gds-sys-color-base-500: #333333;
    --gds-sys-color-base-600: #494949;
    --gds-sys-color-base-700: #757575;
    --gds-sys-color-base-800: #ababab;
    --gds-sys-color-base-900: #dedede;
    --gds-sys-color-hover-10: rgba(0, 0, 0, 0.1);
    --gds-sys-color-hover-20: rgba(0, 0, 0, 0.2);
  }
}`;function K(){r.instance.register("gds-theme",Z.toString())}var d,c,u;const en=()=>{K(),k(),q(),U(),E(),Y(),D(),t(),X()},nn=class w{constructor(){m(this,d,new Map),m(this,c,new Map),m(this,u,!S())}static get instance(){return globalThis.__gdsTransitionalStyles?.[p]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[p]:new w}),globalThis.__gdsTransitionalStyles[p]}apply(o,e){if(!o.shadowRoot)return;const n=a(this,d).get(e);n&&(a(this,c).set(e,o),this.applyToElement(e,n))}applyToElement(o,e){const n=a(this,c).get(o);if(!n||!n.shadowRoot)return;const b=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",M(e)),n._isUsingTransitionalStyles=!0},h=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},f="[gds-element=gds-theme]";let s=n.getRootNode(),i=n.closest(f);for(;i===null&&s!==document;)i=s.host?.closest(f),s=s.host?.getRootNode();if(i){const l=i,v=()=>{l.designVersion==="2023"?h():b()};if(l.addEventListener("gds-design-version-changed",v),n.addEventListener("gds-element-disconnected",()=>l.removeEventListener("gds-design-version-changed",v)),l.designVersion==="2023"){h();return}}b()}register(o,e){let n=e;a(this,u)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${e}`),a(this,d).set(o,n),this.applyToElement(o,n)}};d=new WeakMap;c=new WeakMap;u=new WeakMap;let r=nn;export{r as T,g as a,D as b,z as c,en as r};
