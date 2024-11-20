# Changelog

## 1.56.0

### Minor Changes

- 7d40f57: **Input:** Add event to be dispatched when clearing gds-input

## 1.55.1

### Patch Changes

- d55952a: **Divider:** Update the color property to accept the new values and improve the documentation

## 1.55.0

### Minor Changes

- ca68597: **GdsTheme**: Add `design-version` property for granular control over transitional styles

### Patch Changes

- ca68597: **Segmented Control:** Transitional styles fix for legacy browsers

## 1.54.1

### Patch Changes

- 4e47020: **Testing:** Add additional `ElementInternals` mocks for Jest. Fixes #1679

## 1.54.0

### Minor Changes

- 9b001a9: **Rich Text:** Add details/accordion styling, improve paragraphs and spacing on blockquote, figure etc

### Patch Changes

- 7d4d945: **Datepicker:** Use aria live for error message, and announce form-info and sub-label in `aria-describedby`. Fixes #1274
- 7d4d945: **Calendar:** Date labels now follows active lit-localize locale. Fixes #1274
- 7d4d945: **Localization:** All localized components should now re-render automatically when active locale is changed

## 1.53.0

### Minor Changes

- 277d0d4: **Core Tokens:** Enable light and dark mode tokens on root based on `gds-theme` attribute

## 1.52.0

### Minor Changes

- f58733a: **Menu Button:** Use new leveled colors for light and dark mode, impove focus style and update stories

## 1.51.0

### Minor Changes

- 92187bd: **Flex:** Add the `flex-wrap` property

## 1.50.0

### Minor Changes

- 23c8827: **Link:** Add secondary variant with reversed underline

## 1.49.1

### Patch Changes

- cdaa840: **iOS15:** Fix library wide crash on iOS/Safari 15.x

## 1.49.0

### Minor Changes

- fedbf7a: **Link:** Add new component `gds-link` with predefined styles V1

### Patch Changes

- 807b8c4: **Link:** Fix the link test

## 1.48.1

### Patch Changes

- de5d0f2: **Rich Text:** Patch padding on rich text figure

## 1.48.0

### Minor Changes

- 474856a: **Rich text:** Add `gds-rich-text` component
- 5bc49c8: **Dialog:** Add `gds-dialog` to Green Core

## 1.47.1

### Patch Changes

- c533689: **Form controls:** Add nullcheck in `formAssociatedCallback`

## 1.47.0

### Minor Changes

- 2c90cdf: **Text:** Add text decoration property with default CSS values and offset

## 1.46.2

### Patch Changes

- 4143c5f: **Segmented Control:** Fix scrolling issue

## 1.46.1

### Patch Changes

- a269b32: **Text:** Pass font size to tag instead of the host
- a269b32: Minor updates on Mask, Divider, Text and Spacer

## 1.46.0

### Minor Changes

- 5147399: **Card:** Card now has default styling and a `variant` prop to simplyfy setting card colors

### Patch Changes

- 5147399: **Declarative Layour:** Include level in cache key
- 400676b: **Button:** Forwarded attributes will now update internally when changed
- 400676b: **Form Controls:** The form control header/footer pattern is now captured in reusable primitives.
- 6ebe461: **Form Controls:** Fix extended supporting text animation

## 1.45.3

### Patch Changes

- 05228f9: **Container:** Revert back the caching on levels

## 1.45.2

### Patch Changes

- b9324f5: **Container:** Add cacheOverrideKey for level property to avoid conflicts when same component is needed in different levels on same page

## 1.45.1

### Patch Changes

- 1b731d6: **Menu Button:** Increase the ga to 8px to match design on Menu Button

## 1.45.0

### Minor Changes

- 500beae: **Folder Structure:** Refactor to a flat structure. Affects import paths of layout, content and media components, as well as the FAB button.

## 1.44.10

### Patch Changes

- feb5aa0: **Tokens:** Added viewport tokens

## 1.44.9

### Patch Changes

- 16d03dd: **Button:** Use book weight

## 1.44.8

### Patch Changes

- 66b36b8: **Button:** Fixes color on the secondary button

## 1.44.7

### Patch Changes

- 3709a4f: **Video, IMG, Divider:** Fixed all display content issues and flex gap cashing

## 1.44.6

### Patch Changes

- f3171b4: adding correct easing to ripple nad releasing tokens

## 1.44.5

### Patch Changes

- aa0ec78: **Ripple:** removing old ripple animation tokens

## 1.44.4

### Patch Changes

- 9161c53: **gds-text:** pass props to host instead of tag and remove isolate prop

## 1.44.3

### Patch Changes

- ea478ef: **Button:** Fix icon button not finding the node
- 98db232: **Styling:** remove display:contents

## 1.44.2

### Patch Changes

- 3fa31fd: **Scoped Elements:** Refactor the element lookup table as a global singleton rather than a module-scoped object.

## 1.44.1

### Patch Changes

- 7cc2863: **Slot constraints:** Fix issue when using custom element names
- 2ce164f: **Dropdown:** Scroll into view after `updateComplete`
- a71fd2e: **Dropdown:** searching for options is now done oninput event instead of keydown
- 4750979: **Dropdown:** fixing so that selected item scrolls into view on open

## 1.44.0

### Minor Changes

- 7410021: **Segmented Control:** Add support for variable width segments. Fixes #1603

  This change refactors a large chunk of the Segmented Control implementation:

  - Rewrite layout code to use `css-scroll-snap`
  - Remove `seg-min-width`
  - Add style expression properties to `gds-segment` for size control

  A side-effect of this change is that segments will no longer align to the right end of the control when they overflow.

### Patch Changes

- 27d8575: **Scoping:** Refactor how the `gds-element` attribute gets set

## 1.43.4

### Patch Changes

- aab2665: **Icon:** Remove `display: contents`
- aab2665: **Button:** Fix max-width issue
- cb2d08c: **Grid:** switching gap to have <row-value> <column-value> as css spec https://developer.mozilla.org/en-US/docs/Web/CSS/gap#values

## 1.43.3

### Patch Changes

- e08cfd1: **Declarative Layout:** Performance improvements

## 1.43.2

### Patch Changes

- 12d322e: gds-text to use classes instead of :not() selectores
- 26ca3ef: **Popover:** Fix regression with closing on clicking outside for `nonmodal` popovers

## 1.43.1

### Patch Changes

- b3de0e0: **Calendar:** Setting the time to 12.00 when selecting a date in the calendar
- b3de0e0: **Datepicker:** Set hours to 12 when setting date though spinners in the field. Fixes #1284
- 69b2bde: **FAB:** Fix default host `display` property
- b3de0e0: **Calendar:** Only disable dates that fall fully before or after the min/max setting

## 1.43.0

### Minor Changes

- 916a2ef: Update & Release Input
  Closes: #1541

### Patch Changes

- 69f1894: style expression value template css var fallback

## 1.42.0

### Minor Changes

- fbecda4: **Declarative Layout:** Add support for pseudo sub-selectors, like `:hover`, ':focus', etc.

## 1.41.4

### Patch Changes

- 63e0c36: **Calendar:** Fix jumping height when changing months. Fixes #1441

## 1.41.3

### Patch Changes

- a7f217e: **Grid:** Now correctly extends `GdsContainer`
- 6e5f2a9: **Dropdown:** Fix overflow issue when there is too little space in the viewport. Fixes #1276
- 6e5f2a9: **Popover:** Fix close on click outside issue in Firefox. Fixes #1503

## 1.41.2

### Patch Changes

- eb3fbc7: Join transformIgnorePatterns with AND

## 1.41.1

### Patch Changes

- 5c5234e: **Option:** Use scoped html template tag

## 1.41.0

### Minor Changes

- b5605be: Add brand icons and rename, container and flex improvements

### Patch Changes

- a5e3c8e: **Dropdown:** Enable overflow scroll in 2023 version
- a5e3c8e: **Dropdown**: Fix missing checkmark in multi-select

## 1.40.1

### Patch Changes

- 8eb82e6: Fix `gds-container` `margin` prop to accept `auto` value

## 1.40.0

### Minor Changes

- 26fdbeb: Refactor Colors
  Introducing the new color system with a new naming convention and structure

  Fixes: #1557

- 26fdbeb: Refactor colors

  Fixes: #1557

## 1.39.0

### Minor Changes

- 7508dcd: **Input:** Add input component (beta)

## 1.38.1

### Patch Changes

- 3d8cbea: **Popover:** Fix incorrect scoping applied internally in Popover

## 1.38.0

### Minor Changes

- cded2c1: **Menu button:** Expose CSSPart for main slot
- a8828fe: 1. Refactored the scale, removing `title` sizes in favor of `heading`. 2. Aligned size scale with `h1-h6`, corresponding to `heading-xl` through `heading-2xs`. 3. Imported and generate shadow tokens from the library. 4. Applied styles directly to the tag. 5. Added default styles for `h1-h6`, `paragraph`, and `strong` tags. 6. Implemented sanitization to ensure valid HTML tag names.

## 1.37.1

### Patch Changes

- 8c47629: **Dropdown:** Fix regression in transitional styles

## 1.37.0

### Minor Changes

- 36ade3b: **New component:** Add Floating Action Button

## 1.36.0

### Minor Changes

- 39aa96b: **Coachmarks:** Add `computeVisibility` callback for customizing visibility
- 39aa96b: **Coachmark:** Rename close event to `gds-ui-state` to align with other components

### Patch Changes

- 39aa96b: **Coachmark:** Remove hard coded dependence on `main` element

## 1.35.0

### Minor Changes

- 0af3744: Upgrade core `icon` sizing and add react icons

## 1.34.0

### Minor Changes

- 49eb068: Datepicker, Dropdown and Calendar with 2023 styles

## 1.33.1

### Patch Changes

- d988e2b: **Popover:** Fix property type of `disableMobileStyles` (to Boolean)

## 1.33.0

### Minor Changes

- 0326b38: Adding new coachmark component

## 1.32.0

### Minor Changes

- 6d482b6: **Form validation:** Add a built-in standard way of doing form validation

## 1.31.0

### Minor Changes

- 8b92d27: **Calendar:** Add ability to customize aria-label for dates
- 8b92d27: **Calendar:** Add ability to cancel focus event
- 8b92d27: **Calender:** Add option to hide day name header
- 8b92d27: **Calendar:** Add option to hide days outside of current month

## 1.30.0

### Minor Changes

- f302973: **Popover:** Add options for modality, backdrop and positioning

### Patch Changes

- f302973: **Container:** Default to `display: block`

## 1.29.0

### Minor Changes

- 663c34d: **Segmented Control:** Add `disabled` property to `gds-segment`

## 1.28.1

### Patch Changes

- 70f4b1a: Prevent the propagation of grid gap downward

## 1.28.0

### Minor Changes

- 6a7e540: Fix colors to inherit in brand set

## 1.27.0

### Minor Changes

- d50e15a: Add ViewBox prop and new icons

### Patch Changes

- 32df607: **Menu button:** Fix padding regression

## 1.26.0

### Minor Changes

- 70bbc39: New components Card, Container, IMG, Video and tokens upgrade

## 1.25.0

### Minor Changes

- 96d282a: **Calendar:** Add new component

## 1.24.0

### Minor Changes

- d6540f5: **Menu button:** Add new component

## 1.23.0

### Minor Changes

- f94b8ad: **Dropdown:** Add option for disabling mobile styles

## 1.22.8

### Patch Changes

- 42db72f: **Dropdown:** Fix problem with invalid styling

## 1.22.7

### Patch Changes

- 65f60aa: **Datepicker:** Fix incorrect parsing of pasted dates in some cases
- 65f60aa: **Datepicker:** Call `register()` on Button transiational style, since Button is used internally in Datepicker
- 65f60aa: **Datepicker:** Prevent propagation of click events in footer buttons, which would sometimes incorrectly close modal

## 1.22.6

### Patch Changes

- af2773e: **Calendar:** Fix disabled dates styling when used with customization

## 1.22.5

### Patch Changes

- d4f2411: **Popover:** Fix wrong close reason when internal dialog was closed natively
- d4f2411: **Datepicker:** Make sure pasted dates that match `dateformat` is accepted and parsed correctly. Fixes #1231
- d4f2411: **Datepicker:** Fix inconsistent behavior of calendar footer buttons. Fixes #1418

## 1.22.4

### Patch Changes

- fb7c982: **Datepicker:** Fix copy/paste regression. Fixes #1424

## 1.22.3

### Patch Changes

- 900effe: **Dropdown:** Fix focus issue with VoiceOver iOS. Fixes #1294
- b62c0ae: **Calendar:** Fix issue where the wrong month could be rendered in the calendar, if focused day number was outside the selected month (for example if 30th is focused and February was selected). Fixes #1412

## 1.22.2

### Patch Changes

- 1344f9d: **Datepicker:** make import from `date-fns` fully qualified
- 2921f0e: **Calendar:** improve indicator style

## 1.22.1

### Patch Changes

- 841ffe2: Add GdsElement to icon
  Closes #1405

## 1.22.0

### Minor Changes

- 096b662: **Popover:** Add new component
- 1652e33: **Button:** Add suppoert for link buttons

### Patch Changes

- a8b556f: **Dropdown:** Fix line-breaks in trigger button. Fixes #1343
- 5f224d0: **Datepicker:** Fix incorrectly emitted change event. Fixes #1322

## 1.21.2

### Patch Changes

- ed85124: **Button**: Fix text wrap in transitional styles

## 1.21.1

### Patch Changes

- ee40253: Fix regression of `auto-columns` in Grid

## 1.21.0

### Minor Changes

- 4fef270: **Changes Made:**

  - Refactored the `gds-icon` component to import individual icons for improved modularity.
  - Implemented a command to generate all icons from the SVG versions for both types (`regular` and `solid`).

  **Features Added:**

  - Icons can now be resized using the `width` and `height` properties.
  - Color inheritance from `currentColor` on the path and stroke for consistent coloring across icons.
  - All icons are copied for importing as SVG files.
  - Direct fetching of icons is enabled from the Figma API or by copying them into the assets directory.
  - Added label for accessibility to the pass a label to the svg icon.

  **Updates Made:**

  - Ensured all components using `gds-icon` were updated to reflect the changes.
  - Implemented tests to validate the functionality.

  These changes enhance the reusability and maintainability of the `gds-icon-[ICON_NAME]` component by allowing individual icon imports, custom sizing, color consistency, and streamlined icon generation and usage. The addition of tests ensures the reliability of the updated component.

## 1.20.2

### Patch Changes

- 73b03d8: Add back a missing dependecny

## 1.20.1

### Patch Changes

- 336743c: Added custom dates property to internal `gds-calendar`

## 1.20.0

### Minor Changes

- bfe345f: **Button:** Remove element constraint from main slot
- bfe345f: **Filter Chips:** Add new component

## 1.19.0

### Minor Changes

- 91e434c: Style controller & Grid Refactoring

## 1.18.1

### Patch Changes

- 7dd4fef: Fix export path for jest config

## 1.18.0

### Minor Changes

- 0aeaa98: **Transitional styles:** Transitional styles can now be separately imported on a per-component basis

### Patch Changes

- a8941c7: **Jest config:** Add back missing export

## 1.17.0

### Minor Changes

- c5c696c: Remove default column in mobile

## 1.16.0

### Minor Changes

- 5b84660: # New tokens

  - Motion
  - Size scale
  - Spacing, Margin, Padding

  # New component: Button

  - Built on tokens
  - Transitional styles

- 80b4050: **Code splitting**: Add support for sub-path exports

### Patch Changes

- 80b4050: **Button**: Fixed an issue with ripple effect when using transitional styles and scoping

## 1.15.1

### Patch Changes

- 385f7ef: Grid fix for Safari, initial value

## 1.15.0

### Minor Changes

- 115f1e0: **Transitional Styles:** Add chlorophyll tokens to `:host`

## 1.14.1

### Patch Changes

- 47a8708: **gds-icon**: Fix element scoping

## 1.14.0

### Minor Changes

- a43b1bf: **Testing:**

  - Export a Jest preset which can be used to make it easier to configure Jest for test apps that use Green Core web components

## 1.13.0

### Minor Changes

- 6f867ab: **Segmented Control**: Added new component

## 1.12.0

### Minor Changes

- 8e7440c: Add new attribute row-gap

## 1.11.0

### Minor Changes

- 7532a30: **Popover**: Add base 2023 style
- 7668dfd: Added a new component Grid
- 7668dfd: Update grid to have singular values and better describe breakpoints and tokens moved to internal

## 1.10.0

### Minor Changes

- 7532a30: **Popover**: Add base 2023 style
- 7668dfd: Added a new component Grid
- 7668dfd: Update grid to have singular values and better describe breakpoints and tokens moved to internal"

## 1.9.2

### Patch Changes

- c59d1ea: Dropdown: fix issue where falsy values where considered as no values (only `undefined` should be explicitly considered as "no value") (closes #1259)

## 1.9.1

### Patch Changes

- f4d7fe7: fixed value change when browsing months
- 80c0cdf: **Datepicker, Dropdown**

  - Fix broken dark mode styles

## 1.9.0

### Minor Changes

- bb83849: **Datepicker:** Added support for disabling dates

  - `disabled-weekends` will disable all weekend days in the calendar view
  - `disabled-dates` allows to specify an array of dates that should be disabled in the calendar view

- 7820e8c: **Dropdown**

  - Add `max-height` attrbute for controlling maximum height of dropdown popover box.

### Patch Changes

- 7820e8c: **Datepicker**

  - Limit height of month and year dropdowns to less than height of calendar popover to prevent them getting cut off outside viewport.

## 1.8.0

### Minor Changes

- a1c5e60: New component: Grouped list

## 1.7.0

### Minor Changes

- 007f8ac: **Datepicker and Dropdown**

  - Add small variant
  - Add attribute for hiding label
  - Align style with Figma

## 1.6.0

### Minor Changes

- 158d93a: Add `<gds-menu-heading>`, which can be used to group options and menu items in Dropdown and Context menu components.

### Patch Changes

- e0d3f09: Datepicker: Fix copy/paste when there are multiple instances of Datepicker in the document

## 1.5.1

### Patch Changes

- 943d785: Datepicker should emit `ìnput` event when focus is changed in the calendar
- 204747d: Update `@floating-ui/dom` and remove previous `topLayerOverTransforms` hack

## 1.5.0

### Minor Changes

- 5a70b2f: Context menu: updated style and functionality
- cace30b: Datepicker: Implment copy/paste. Closes #1202
  Datepicker: Update colors to match Dropdown. Closes #1183
  Datepicker: Update focus behaviour to match native datepicker. Closes #1183
  Datepicker: Update Esc key behaviour to match native datepicker

## 1.4.6

### Patch Changes

- e64e384: Fix issue with trigger text not updating when underlying option element is changed. Fixes #1192

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.4.5](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.4.4...@sebgroup/green-core@1.4.5) (2024-01-30)

### Bug Fixes

- **angular:** add export for Core Wrapper Module ([#1184](https://github.com/seb-oss/green/issues/1184)) ([5b23830](https://github.com/seb-oss/green/commit/5b23830f4c4db8119c1f4d606d9f016801500b70))

## [1.4.4](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.4.3...@sebgroup/green-core@1.4.4) (2024-01-29)

### Bug Fixes

- **core/datepicker:** today highlight style & focus handling ([#1181](https://github.com/seb-oss/green/issues/1181)) ([6878fdf](https://github.com/seb-oss/green/commit/6878fdf8655613dc87f143c09d82760d74522889))

## [1.4.3](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.4.2...@sebgroup/green-core@1.4.3) (2024-01-26)

### Bug Fixes

- **core/datepicker:** properly constrain length of keyboard input ([#1176](https://github.com/seb-oss/green/issues/1176)) ([f4f6750](https://github.com/seb-oss/green/commit/f4f6750441b017f5fe37e4f20061a4a29544f929))

## [1.4.2](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.4.1...@sebgroup/green-core@1.4.2) (2024-01-25)

### Bug Fixes

- **core:** polyfill/fallback for iOS 15 ([#1173](https://github.com/seb-oss/green/issues/1173)) ([53247c5](https://github.com/seb-oss/green/commit/53247c5068ffdb91be188966a4073dce1bc8f58a))

## [1.4.1](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.4.0...@sebgroup/green-core@1.4.1) (2024-01-22)

### Bug Fixes

- **datepicker:** forward all props to web component ([#1168](https://github.com/seb-oss/green/issues/1168)) ([00b0922](https://github.com/seb-oss/green/commit/00b092271f345abe521e8af74b7c4392d8b8db4c))

# [1.4.0](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.3.0...@sebgroup/green-core@1.4.0) (2024-01-19)

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/seb-oss/green/issues/1154)) ([707d456](https://github.com/seb-oss/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))

# [1.3.0](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.2.4...@sebgroup/green-core@1.3.0) (2024-01-16)

### Bug Fixes

- **core/dropdown:** add null-check when accessing parentElement ([#1158](https://github.com/seb-oss/green/issues/1158)) ([a1b610d](https://github.com/seb-oss/green/commit/a1b610d7959d96310b110574dd464c730b9f297c))

### Features

- **core/dropdown:** add `syncPopoverWidth` option ([#1159](https://github.com/seb-oss/green/issues/1159)) ([fe88611](https://github.com/seb-oss/green/commit/fe88611430adcac76d84ff4c3132243fde3fc968))

## [1.2.4](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.2.3...@sebgroup/green-core@1.2.4) (2023-12-01)

### Bug Fixes

- **core/popover:** positioning regression in mobile views ([#1143](https://github.com/seb-oss/green/issues/1143)) ([5fb8736](https://github.com/seb-oss/green/commit/5fb8736e7a69a46af916280f9738361693f787d9))

## [1.2.3](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.2.2...@sebgroup/green-core@1.2.3) (2023-11-29)

### Bug Fixes

- **core:** downgrade to `lit@ˆ2.8.0` ([#1134](https://github.com/seb-oss/green/issues/1134)) ([bee1a90](https://github.com/seb-oss/green/commit/bee1a90bb48c2855b23849fbb30daaa991138dc8))

## [1.2.2](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.2.1...@sebgroup/green-core@1.2.2) (2023-11-28)

### Bug Fixes

- **core/context-menu:** use the correct relative paths in imports ([#1133](https://github.com/seb-oss/green/issues/1133)) ([6050e60](https://github.com/seb-oss/green/commit/6050e60e52f25ca365b2cc3722ba5a50907ec31e))

## [1.2.1](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.2.0...@sebgroup/green-core@1.2.1) (2023-11-22)

### Bug Fixes

- **core:** update localize and correct lit version in package ([#1128](https://github.com/seb-oss/green/issues/1128)) ([29210f6](https://github.com/seb-oss/green/commit/29210f6a22d30ec059b9da7038585d6d21673fb7))

# [1.2.0](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.1.1...@sebgroup/green-core@1.2.0) (2023-11-22)

### Features

- **core/context-menu:** add context menu component to Green Core, and use for Angular and React ([#1125](https://github.com/seb-oss/green/issues/1125)) ([1aacb43](https://github.com/seb-oss/green/commit/1aacb43d9afedd34316f2c96c10d534b5d487aa6))

## [1.1.1](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.1.0...@sebgroup/green-core@1.1.1) (2023-11-17)

### Bug Fixes

- **dropdown:** hidden overflow with ellipsis by default ([#1114](https://github.com/seb-oss/green/issues/1114)) ([9a2cce7](https://github.com/seb-oss/green/commit/9a2cce7cb7549ef3bff6b4086407fcb80f49cc72))

# [1.1.0](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.3...@sebgroup/green-core@1.1.0) (2023-11-10)

### Features

- **localization:** add possibility to add custom localization in Green Core ([#1106](https://github.com/seb-oss/green/issues/1106)) ([a25a969](https://github.com/seb-oss/green/commit/a25a969bc1618385fc13beb3094df0c8efe3ab5d))

## [1.0.3](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.2...@sebgroup/green-core@1.0.3) (2023-11-03)

### Bug Fixes

- **border-color:** 🐛 align default border colours ([#1089](https://github.com/seb-oss/green/issues/1089)) ([d942690](https://github.com/seb-oss/green/commit/d9426908b3c410cd2ed38415f39cd2020c189507))
- **dropdown:** add missing label to close button ([#1096](https://github.com/seb-oss/green/issues/1096)) ([ab721f2](https://github.com/seb-oss/green/commit/ab721f205227dcb2b5181170d5ca30177d3a8951))

## [1.0.2](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.1...@sebgroup/green-core@1.0.2) (2023-11-01)

### Bug Fixes

- **angular/dropdown:** correct additional regressions ([#1087](https://github.com/seb-oss/green/issues/1087)) ([57f7f4b](https://github.com/seb-oss/green/commit/57f7f4b685efab17fba482de3fd66e23f32e3486))

## [1.0.1](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0...@sebgroup/green-core@1.0.1) (2023-10-31)

### Bug Fixes

- **angular/dropdown:** issues with Dropdown custom buttons ([#1084](https://github.com/seb-oss/green/issues/1084)) ([eebb5e4](https://github.com/seb-oss/green/commit/eebb5e4cc75d8415edcb7efc125befac4ca1dde3))

# [1.0.0](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.18...@sebgroup/green-core@1.0.0) (2023-10-30)

### Bug Fixes

- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/seb-oss/green/issues/1016)) ([7f6f8f5](https://github.com/seb-oss/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

### BREAKING CHANGES

- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

# [1.0.0-beta.18](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.17...@sebgroup/green-core@1.0.0-beta.18) (2023-10-23)

# [1.0.0-beta.17](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.16...@sebgroup/green-core@1.0.0-beta.17) (2023-10-11)

# [1.0.0-beta.16](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.15...@sebgroup/green-core@1.0.0-beta.16) (2023-10-10)

### Features

- **core-dropdown:** add `compareWith` delegate function ([#1040](https://github.com/seb-oss/green/issues/1040)) ([865735d](https://github.com/seb-oss/green/commit/865735d8adecd16640b7798f209bb7b5392231ae))
- **core-dropdown:** add `searchFilter` delegate function ([#1041](https://github.com/seb-oss/green/issues/1041)) ([62ad349](https://github.com/seb-oss/green/commit/62ad3494e435a16b85f178d4f40dfc8347c823f1))

# [1.0.0-beta.15](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.14...@sebgroup/green-core@1.0.0-beta.15) (2023-09-29)

### Bug Fixes

- **dropdown:** fix mobile view and add backdrop ([#1027](https://github.com/seb-oss/green/issues/1027)) ([f7111c4](https://github.com/seb-oss/green/commit/f7111c41950ecc44ed94c72bfdcfbac8a9f2f5ad))
- **dropdown:** popover min width ([#1037](https://github.com/seb-oss/green/issues/1037)) ([9d0cc59](https://github.com/seb-oss/green/commit/9d0cc596b7ba8a6a2b2e5a9cf01bfa86583d0d5f))
- **listbox:** add `overflow-y` ([#1036](https://github.com/seb-oss/green/issues/1036)) ([33e42dc](https://github.com/seb-oss/green/commit/33e42dcf075f2b1cb0a1611b57c29a47d3e391e2))

# [1.0.0-beta.14](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.13...@sebgroup/green-core@1.0.0-beta.14) (2023-09-26)

# [1.0.0-beta.13](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.12...@sebgroup/green-core@1.0.0-beta.13) (2023-09-25)

# [1.0.0-beta.12](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.11...@sebgroup/green-core@1.0.0-beta.12) (2023-09-25)

## 0.0.1-beta.0 (2023-09-25)

### Bug Fixes

- **core:** add build as a postTarget to `version-and-release` ([#1001](https://github.com/seb-oss/green/issues/1001)) ([0f97b0c](https://github.com/seb-oss/green/commit/0f97b0c1b571fb5eeb293a4b4638fa0f73023394))
- **core:** add dependencies to `package.json` ([#1015](https://github.com/seb-oss/green/issues/1015)) ([4c584d9](https://github.com/seb-oss/green/commit/4c584d96bc4276f0706ffbd23e9a7a2351375700))
- **core:** attempt to fix build config ([#1002](https://github.com/seb-oss/green/issues/1002)) ([e9ea2cf](https://github.com/seb-oss/green/commit/e9ea2cf214595238edc6eadc70fc5ac5dbe071ed))
- **core:** break out to separate build command ([#999](https://github.com/seb-oss/green/issues/999)) ([8db3476](https://github.com/seb-oss/green/commit/8db3476ce9e507557fc47b3a0df6e7c3d894a192))
- **core:** fix incorrectly referencing React project targets in release ([#998](https://github.com/seb-oss/green/issues/998)) ([f3180e1](https://github.com/seb-oss/green/commit/f3180e1d75d2c5a2ef63ee25d6c9600fcf4b23bc))
- **core:** missing files in package ([5c245ba](https://github.com/seb-oss/green/commit/5c245ba58387a430f9289137d476ae4a8e34d290))
- **core:** try duplicating `outputPath` in dummy `build` target ([#1003](https://github.com/seb-oss/green/issues/1003)) ([6b61c5e](https://github.com/seb-oss/green/commit/6b61c5e25ea33ecfa41375ed39649299f01eb4f8))

### Features

- **core:** initial beta release ([#995](https://github.com/seb-oss/green/issues/995)) ([c93b86c](https://github.com/seb-oss/green/commit/c93b86c37b75284b5921ddb45ba38f2d999a8455))
- **core:** update config and re-release ([#996](https://github.com/seb-oss/green/issues/996)) ([ae5e6f7](https://github.com/seb-oss/green/commit/ae5e6f7bec41b9fdeb1375ff1ceebc51a1b131fe))
- **core:** update release config again ([#997](https://github.com/seb-oss/green/issues/997)) ([a516384](https://github.com/seb-oss/green/commit/a51638407e8005bfec722b899f055d5a4838c3dc))

# [1.0.0-beta.11](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.10...@sebgroup/green-core@1.0.0-beta.11) (2023-09-18)

# [1.0.0-beta.10](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.9...@sebgroup/green-core@1.0.0-beta.10) (2023-09-18)

### Bug Fixes

- **core:** add dependencies to `package.json` ([#1015](https://github.com/seb-oss/green/issues/1015)) ([4c584d9](https://github.com/seb-oss/green/commit/4c584d96bc4276f0706ffbd23e9a7a2351375700))

# [1.0.0-beta.9](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.8...@sebgroup/green-core@1.0.0-beta.9) (2023-09-15)

# [1.0.0-beta.8](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.7...@sebgroup/green-core@1.0.0-beta.8) (2023-09-14)

### Bug Fixes

- **core:** try duplicating `outputPath` in dummy `build` target ([#1003](https://github.com/seb-oss/green/issues/1003)) ([6b61c5e](https://github.com/seb-oss/green/commit/6b61c5e25ea33ecfa41375ed39649299f01eb4f8))

# [1.0.0-beta.7](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.6...@sebgroup/green-core@1.0.0-beta.7) (2023-09-14)

### Bug Fixes

- **core:** attempt to fix build config ([#1002](https://github.com/seb-oss/green/issues/1002)) ([e9ea2cf](https://github.com/seb-oss/green/commit/e9ea2cf214595238edc6eadc70fc5ac5dbe071ed))

# [1.0.0-beta.6](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.5...@sebgroup/green-core@1.0.0-beta.6) (2023-09-14)

### Bug Fixes

- **core:** add build as a postTarget to `version-and-release` ([#1001](https://github.com/seb-oss/green/issues/1001)) ([0f97b0c](https://github.com/seb-oss/green/commit/0f97b0c1b571fb5eeb293a4b4638fa0f73023394))

# [1.0.0-beta.5](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.4...@sebgroup/green-core@1.0.0-beta.5) (2023-09-14)

### Bug Fixes

- **core:** missing files in package ([5c245ba](https://github.com/seb-oss/green/commit/5c245ba58387a430f9289137d476ae4a8e34d290))

# [1.0.0-beta.4](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.3...@sebgroup/green-core@1.0.0-beta.4) (2023-09-14)

### Bug Fixes

- **core:** break out to separate build command ([#999](https://github.com/seb-oss/green/issues/999)) ([8db3476](https://github.com/seb-oss/green/commit/8db3476ce9e507557fc47b3a0df6e7c3d894a192))

# [1.0.0-beta.3](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.2...@sebgroup/green-core@1.0.0-beta.3) (2023-09-14)

### Bug Fixes

- **core:** fix incorrectly referencing React project targets in release ([#998](https://github.com/seb-oss/green/issues/998)) ([f3180e1](https://github.com/seb-oss/green/commit/f3180e1d75d2c5a2ef63ee25d6c9600fcf4b23bc))

# [1.0.0-beta.2](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.1...@sebgroup/green-core@1.0.0-beta.2) (2023-09-14)

### Features

- **core:** update release config again ([#997](https://github.com/seb-oss/green/issues/997)) ([a516384](https://github.com/seb-oss/green/commit/a51638407e8005bfec722b899f055d5a4838c3dc))

# [1.0.0-beta.1](https://github.com/seb-oss/green/compare/@sebgroup/green-core@1.0.0-beta.0...@sebgroup/green-core@1.0.0-beta.1) (2023-09-14)

### Features

- **core:** initial beta release ([#995](https://github.com/seb-oss/green/issues/995)) ([c93b86c](https://github.com/seb-oss/green/commit/c93b86c37b75284b5921ddb45ba38f2d999a8455))
- **core:** update config and re-release ([#996](https://github.com/seb-oss/green/issues/996)) ([ae5e6f7](https://github.com/seb-oss/green/commit/ae5e6f7bec41b9fdeb1375ff1ceebc51a1b131fe))
