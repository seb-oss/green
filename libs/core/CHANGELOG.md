# Changelog

## 2.28.4

### Patch Changes

- ad2d6b8: **Details:** Add missing export

## 2.28.3

## 2.28.2

### Patch Changes

- ae7789f: **Table:** Extra scroll caused from the caption
- a2cf0b8: **Calendar:** Fix date selection for dates outside current month. Dates from adjacent months visible in the calendar grid can now be selected by clicking on them.
- 14a300c: **Dropdown:** Fix state reflection issue in displayValue when options are dynamically added
- ae7789f: **Column:** Fix the flex end when not sortable
- ae7789f: **Checkbox:** Add back margin to the RBCB if is not wrapped to avoid margin on table
- ae7789f: **Table:** Caption summary fix when not defined

## 2.28.1

### Patch Changes

- 9babdf5: **Popover:** Remove redundant `showModal()` call which could throw errors in mobile view callback
- 9babdf5: **Checkbox:** Make hidden `input` have non-zero dimensions for a11y compatibility reasons

## 2.28.0

### Minor Changes

- bea5481: **Checkbox group:** Add `hide-label` attribute for visually hiding label

## 2.27.0

### Minor Changes

- 61e9bba: **Icon:** Add new icons Trending Five, Signature, Arrow box left alt

## 2.26.2

### Patch Changes

- 4fbe2cd: **Spinner:** Fix issue where document level styles for fullscreen mode would not get cleared when leaving fullscreen mode
- 9705019: **Context Menu:** Fix re-export of GdsMenuItem

## 2.26.1

### Patch Changes

- 0ebdd77: **Component Meta**: Fix import paths for public primitives – Should be the component that re-exports them

## 2.26.0

### Minor Changes

- bec1b5e: **MCP:** Add experimental local MCP server
- 6e84c22: **Table:** Add sorting and page change events

## 2.25.0

### Minor Changes

- 5bd1a3c: **Popover:** Add `disalbeScrollClose` boolean to prevent closing the popover on scroll

### Patch Changes

- 6424ae4: **Table:** Font size fix to align with design

## 2.24.1

### Patch Changes

- 3661970: **Datepicker:** Fix ES import issue

## 2.24.0

### Minor Changes

- 718f72f: **Table:** Add headline and summary
- 718f72f: **Pagination:** Add `hideOptions` boolean

### Patch Changes

- 308056d: **Datepicker:** Fix last-day-of-month overshoot when stepping though months. Fixes #2099
- 308056d: **Datepicker:** Fix focus visibility issue

## 2.23.0

### Minor Changes

- 033fb22: **Input & Textarea**: Add support for text selection APIs

### Patch Changes

- 033fb22: **React**: Fix potential input event issue by not stopping propagation
- 8b321ba: **Table:** Scrollbar fix for windows when not in use

## 2.22.1

### Patch Changes

- 31e72ca: **Table:** Remove double types import

## 2.22.0

### Minor Changes

- b9a8c83: **Coachmarks:** Make `gds-ui-state` event cancellable

### Patch Changes

- bca44e8: **Input:** Make `gds-ui-state` event cancellable for extended support text show
- 7f6ae80: **Pagination:** Dispatch React compatible events

## 2.21.0

### Minor Changes

- 727a4c0: **React:** Add Typescript support for custom events
- 727a4c0: **React:** Implement controlled behaviour for form controls
- 727a4c0: **React:** Add `displayName` to all components

## 2.20.0

### Minor Changes

- 294c699: **Table:** Add new table component and all it's following elements
- 294c699: **Input:** Add appearance variable to hide the spin button
- 294c699: **Badge:** Refactor to improve performance and overcomplicated SEP:s
- 294c699: **Pagination:** Add new pagination component

### Patch Changes

- 294c699: **RBCB:** Indeterminate shadow color fixed
- 294c699: **Checkbox:** Use wrapper to apply perimeter style instead of host
- 294c699: **RBCB:** Add wrapper instead of host hover
- 294c699: **Field base:** Change to `min-block-size` to avoid element oversizing, also identify when leadslot is badge to reduce padding

## 2.19.0

### Patch Changes

- 100f03a: **Icon:** Don't define the GdsIcon base class as a custom element

## 2.18.0

### Minor Changes

- d0f643c: Adding possibility to provide the ping attribute to GdsLink and CardLinked

## 2.17.0

### Minor Changes

- 51496ea: **Formatted Number:** Add decimal property to gds formatted number component.

## 2.16.1

### Patch Changes

- cfac6d4: **Segmented control:** Fix unselected control from `neutral-01` to `neutral-02`

## 2.16.0

### Minor Changes

- 4add05e: **Formatted text:** Date added `dateTimeLong`, `dateTimeLongWithWeekday`, `dateTimeShort` formats to support CP01
- 4add05e: **Card Pattern 01:** Add metadata props for category and date

## 2.15.0

### Minor Changes

- 96c1c96: **Dropdown**: dispatched gds-blur in dropdown.component.ts only when focus is shifted away, fixes #2339

### Patch Changes

- a8613b0: **Icon:** Exclemation mark icon svg update
- 2495ea0: Updating package.json to export the new patterns directory
- a8613b0: **Text:** Default typography style on strong, paragraph and list item
- 665c853: **Link:** Improve transition and add cursor

## 2.14.0

### Minor Changes

- b8061fa: **Button**: Ripple effect now triggers on keyboard press (Space/Enter), fixes issue #1880

## 2.13.2

### Patch Changes

- c6b4a63: **GroupedList:** Added interim 2023 styling, fixes #2413
- b086b0b: **Declarative layout:** Add missing member `order` to `LayoutChildProps` interface
- 1bd52f1: **Dropdown:** Fix background color of selected option in dark mode

## 2.13.1

### Patch Changes

- bb08507: **Exports:** Fix path for 'pure' export in package.json

## 2.13.0

### Minor Changes

- ba7e126: **Icon:** Add Small chevrons, expand and sorting icons

## 2.12.3

### Patch Changes

- eee97dc: **GdsMenuHeading:** (React) add missing export

## 2.12.2

### Patch Changes

- effeb0e: **Dropdown:** Fix styling regression where height of field was no longer adapting to custom trigger content

## 2.12.1

### Patch Changes

- 7ac380e: **Form controls:** Fix rendering regression where empty footer still takes up space

## 2.12.0

### Minor Changes

- 26ceb48: **Context Menu:** Add support for custom slotted trigger button
- 0020685: **Image:** Add srcset and sizes support
- 0020685: **Card Linked:** New components Card linked extending with link behaviour the defualt card
- 0020685: **Div:** Add `aspect-ratio` and `cursor` prop

### Patch Changes

- 0020685: **Div:** Remove unused focus style
- 0020685: **Link:** Use link props mixin
- 0020685: **Image:** Use the image props mixin

## 2.11.0

### Minor Changes

- 2d649da: **Core:** font-size values are now in rem instead of px

## 2.10.1

### Patch Changes

- 96e6e2c: **Typography**: Set default paragraph font-weight to 'book'

## 2.10.0

### Minor Changes

- 15410ee: **Input & Textarea:** Add support for customizable counter badge

### Patch Changes

- 15410ee: **Textarea:** Fix type issue with `autocorrect` property

## 2.9.0

### Minor Changes

- 4c85a71: **Dropdown:** Add mixing support for space and child
- 4c85a71: **Divider:** Add DL mixin support for inline size
- 4c85a71: **IMG:** Add margin mixin

### Patch Changes

- 4c85a71: **IMG:** Wrap prop with IfDefined directive

## 2.8.2

### Patch Changes

- 1854fdf: **Dialog:** Remove border to avoid blurry edges

## 2.8.1

### Patch Changes

- 52eb344: **Breadcrumb:** Fix the failing test issue move aria current to the current item

## 2.8.0

### Minor Changes

- be2744e: **Card:** Add tertiary variant and update to `xl` the default padding on medium size screens
- 48cfa84: **Breadcrumbs:** Add `breadcrumb` as slottable component, change the method how items are populated and separator is set.
- 35fec52: **Theme:** Add support for `gds-theme="auto"` on root node

### Patch Changes

- 6ba44e5: **Filter chips:** Fix initial state issue when multiple mode is used
- 35fec52: **Theme:** Revert default scheme to `light`, as `auto` should be opt-in.

## 2.7.0

### Minor Changes

- 24f3d8a: **Filter chips:** Enable deselecting a previously selected filter chip in single select mode

### Patch Changes

- 40ff2e3: **Datepicker**: Updated design for small viewports

## 2.6.6

### Patch Changes

- 16dbb32: **Datepicker:** Add `utcHours` property to specify the time component in UTC time of dates selected in the calendar popover. Fixes #1250
- 66fe774: **Dropdown:** Add missing event dispatch when control is cleared using clear button

## 2.6.5

### Patch Changes

- b3aad88: **Checkbox:** Fix error message association
- b3aad88: **Radio:** Fix error message association
- b3aad88: **Dropdown:** Fix selected value being added as part of the label
- b3aad88: **Checkbox:** Fix issue with programatically moving focus to checkbox
- b3aad88: **Input:** Fix error message association. Closes #2438

## 2.6.4

### Patch Changes

- 1acd6a1: **FAB:** Fix button import bug when generating
- d72190b: **SEP:** Grid fix to reflect the `auto-column` attribute
- 1acd6a1: **FAB:** Increase the gap when there is a slotted signal

## 2.6.3

### Patch Changes

- 8cdf051: **Grid:** Remove unused storybook style
- 8cdf051: **Input:** Reflect size so it gets applied, fixing the gap on host for field base host

## 2.6.2

### Patch Changes

- 90751c6: **Button:** Update wording to be `XS` everywhere, spacing and sizes on storybook
- 5991ecf: Fixing import/exports in /components & /pure

## 2.6.1

### Patch Changes

- a617652: **Checkbox:** Fix tree-shaking issue that sometimes happens with Angular

## 2.6.0

### Minor Changes

- e5f21f0: **Input:** Update size small variables

### Patch Changes

- 69b2ee7: **Dialog:** Only close top-most dialog on click outside. Fixes #2423
- e5f21f0: **Checkbox:** Small size aligment
- e5f21f0: **FCH:** Add grouping default spacing variables for small size with fallback
- e5f21f0: **Button:** Spacing and sizes
- e5f21f0: **Card:** Update defaults
- e5f21f0: **Input:** Icon and spacing for smaller size
- e5f21f0: **Signal:** Use content color mixin for the signal
- 69b2ee7: **Dialog:** Fix missing reason in `gds-ui-state` event under certain conditions
- e5f21f0: **Dropdown:** Move chevron to action slot to fix spacing, update cross small icon when clearable
- 69b2ee7: **Input:** Fix incorrect type declaration of the `autocorrect` property
- e5f21f0: **Textarea:** Align spacing with textarea for trail and action
- e5f21f0: **Select:** Chevron move to action slot same as dropdown spacing fix
- e5f21f0: **Dialog:** Heading block start marin, dialog padding and radius update
- 69b2ee7: **Dialog:** Only close if a click starts and ends outside
- e5f21f0: **Radio:** Align spacing and sizes same as checkbox
- e5f21f0: **Badge:** Inline and block size fixes and padding
- e5f21f0: **Datepicker:** Add sizing variables for label, support text
- f0da6d2: **Calendar:** Remove the commented style

## 2.5.3

### Patch Changes

- da0ab9a: **Button:** Explicitly add `click()` method on Button, to allow simulated clicks to work same way on iOS Safari as on other browsers
- 2ba96f6: **Calendar:** Focus outline distance fix

## 2.5.2

### Patch Changes

- 33b3aa0: **Dialog:** Fix some sizing and overflow issues
- 33b3aa0: **Dialog:** Correct order of events, so that `gds-close` does not fire if `gds-ui-state` was cancelled to prevent the dialog from closing.

## 2.5.1

### Patch Changes

- 1b85201: **Typography:** Add fallbacks to `font-family`

## 2.5.0

### Minor Changes

- 79fc2dd: **Dialog:** Add `scrollable` prop

### Patch Changes

- bfdb344: **Div:** Chage `border-radius` tokens from spacing to radius.

## 2.4.1

### Patch Changes

- 04734c3: **Dropdown:** Fix small variant font-size and change to rounded counter badge

## 2.4.0

### Minor Changes

- 1969060: **GdsElement:** Add `semanticVersion` debug property

## 2.3.0

### Minor Changes

- 798af05: **Icon:** Add feedback emoji/icons

### Patch Changes

- 3b18c2d: Datepicker: Improved screen reader text for the buttons

## 2.2.0

### Minor Changes

- 0339d24: **Icon:** Add 28 new icons

## 2.1.0

### Minor Changes

- a76694d: **Dropdown:** Add `clearable` option
- a76694d: **Dropdown:** Add counter badge for multiple select

## 2.0.2

### Patch Changes

- cd905fe: **Context menu:** Button should inherit transitional styles if enabled for the Context menu
- 61c2bfe: **Icon:** focus svg generated

## 2.0.1

### Patch Changes

- b740210: **Icon:** `gds-icon-focus` update design for solid and regular

## 2.0.0

### Major Changes

- d9b0006: **GdsTheme:** Change the default design-version to '2023'
- d9b0006: **Everything:** Updated all components to use the new token structure and names
- d9b0006: **Theme:** `gds-theme` now sets the `color` CSS property by default.
- d9b0006: **Removd deprecations:** `gds-container` and `gds-spacer`. Use `gds-div` instead.
- d9b0006: **Everything:** Using new state color tokens and shadow tokens.
  - **Card:** Removed `shadow` prop from `gds-card`, use `box-shadow` prop instead.

### Minor Changes

- d9b0006: **Alert:** Change from triang-exlamation to circle-info in alert warning variant.
- d9b0006: **RichText:** Added styling for code tag to rich text
- d9b0006: **Dialog:** Add `dialog` slot that can be used to override header, footer and content of the dialog.
- d9b0006: **Calendar & Datepicker:** Add correct GDS23 design
- d9b0006: **Dialog:** Add `placement` property to control placement on the screen.
- d9b0006: **Theme:** Add 'auto' mode
- d9b0006: **Filter Chips:** Add `size` prop

### Patch Changes

- d9b0006: **Form Control:** Add server-side check to `requestSubmit` polyfill for SSR compat
- d9b0006: **Divider:** Use variable to apply the color, fixing the safari issue
- d9b0006: **Form Summary:** Use standard `negative` variant of Card
- d9b0006: **Utils:** Platform navigator check when is Server
- d9b0006: **Blur:** Fix the blurring issue on safari, now wraps the content and set blur on container instead

## 1.90.2

### Patch Changes

- 33e4314: **Icon:** cain-link depricated (use chain-link instead)
- 7429b8d: **GdsTheme**: fixing import of 2016 tokens

## 1.90.1

### Patch Changes

- d213f1d: **Popover:** Don't close on scroll on small viewports

## 1.90.0

### Minor Changes

- 0910e52: **Icon:** Core: add mic-on and mic-off

## 1.89.1

### Patch Changes

- cfe9104: **Dropdown:** Fix text overflow regression

## 1.89.0

### Minor Changes

- d0e44a1: **Alert:** Auto dismiss on viewport only

## 1.88.7

### Patch Changes

- 0b04ce9: **Datepicker:** Increase height of date part spinbuttons for larger click target
- fc0da67: **Form Control:** Fix broken import
- c132aa8: **Datepicker:** Fix icon line weight for size=small

## 1.88.6

### Patch Changes

- 101fed7: **iOS/Safari 15:** Fix issues releated to form controls and styling. Fixes #2225

## 1.88.5

### Patch Changes

- b14325b: **Select:** Fix error message rendering issue
- ab1cb3b: **GlobalStylesRegistry:** Rename singleton so it doesn't interfere with older unscoped versions

## 1.88.4

### Patch Changes

- a57784e: **Dropdown:** Fix issue in Safari, where option keyboard focus would not render unless also hovered by mouse
- 518586e: **GlobalStyles:** Make `GlobalStylesRegistry` version scoped

## 1.88.3

### Patch Changes

- e480d9f: **Checkbox:** Fix interaction issue with NVDA. Fixes #2199
- 1331668: **Checkbox:** Add missing dependency of `IconMinusSmall`

## 1.88.2

### Patch Changes

- 72be834: **Dropdown:** Fix issue with updating error message via prop

## 1.88.1

### Patch Changes

- 0edf04f: **Calendar:** Add disabled class on weeknumber

## 1.88.0

### Minor Changes

- 27fe9cf: **Core**: Spinner component label position prop

## 1.87.0

### Minor Changes

- f3b8f76: **Icon:** add new code icons

### Patch Changes

- 577fc63: Fix, calculating extended supporting text height on resize
- eca17f0: **Breadcrumbs:** Fix custom html scoping

## 1.86.0

### Minor Changes

- 1ac544d: **Popover:** Close popover if page starts scrolling. Closes #2134

### Patch Changes

- f247f14: **Focus handling:** Fix issues with programmatic focus shifting with some form controls

## 1.85.4

### Patch Changes

- c7610e3: FAB was missing from the index.ts export, meaning you have to import FAB from a subfolder, causing two import lines from green-core.

## 1.85.3

### Patch Changes

- 1891932: Add missing exports from alert, rich-text and segment.

## 1.85.2

### Patch Changes

- 020208a: **Alert:** Fix icon scoping issue
- 14769a7: **Alert:** A few styling corrections

## 1.85.1

### Patch Changes

- 00111cc: **Alert:** Fix icon import paths

## 1.85.0

### Minor Changes

- e4eb1ad: **Alert:** Add new component

### Patch Changes

- 60e38d9: fix: popover focus improvements

## 1.84.0

### Minor Changes

- 56d1779: **GdsElement:** Add event dispatch helpers for dispatching compatible events

### Patch Changes

- 55b23da: **Dialog:** Update design

## 1.83.2

### Patch Changes

- c6833ae: **Datepicker:** Correction for value instance manipulation bug

## 1.83.1

### Patch Changes

- 52c7407: **Datepicker:** Fix issue with month view getting stuck

## 1.83.0

### Minor Changes

- 44dff87: **Dialog:** Close when click outside, unless event is cancelled
- 73e0759: **Form Summary:** Update design and functionality
  - Design updated to latest draft in Figma (not yet final)
  - Make reactive mode optional, so that the behavior can be more easily adapted to different contexts
  - Make it possible to use with native form controls by using data-attributes

### Patch Changes

- 1aa919a: **Form controls:** Fix issue with initial value not registered with owning form
- 41b8a90: **Dropdown:** Fix aria-label issue when custom trigger template is used
- 4d4704b: **Tokens:** Fix missing shadow tokens
- f1ceb54: **Datepicker:** Make `value` always return a new Date instance

## 1.82.0

### Minor Changes

- 04043ea: **Form control footer:** Hide visually when there is no error message

### Patch Changes

- 9e55957: **Core**: popover causing dropdown to flicker on select
- 24483a8: **Datepicker:** Fix focus color of the date part spinners

## 1.81.0

### Minor Changes

- 4c000b4: **Breadcrumb:** Add new component breadcrumb and breadcrumb item

## 1.80.0

### Minor Changes

- 2edbe83: **Input:** Support additional standard attributes
- 2edbe83: **Textarea:** Support more standard attributes

### Patch Changes

- 5f775b4: **Dialog:** Add missing dependency on `gds-div`

## 1.79.0

### Minor Changes

- ce1b0d4: **Icon:** Add color style expression property

## 1.78.1

### Patch Changes

- c2980e1: **Tokens:** Fix missing base tokens

## 1.78.0

### Minor Changes

- 9075450: **Dialog:** Add style expression properties for controlling size

### Patch Changes

- 657e0a3: **Spinner:** Update backdrop color
- 0a3ac2c: **Checkbox & Radio:** Add missing `.js` extension on import paths
- 9075450: **Dialog:** Fix iOS focus issue when opening via custom button
- 9075450: **Dialog:** Remove backdrop blur effect
- 6846a6c: Datepicker option to not use Clear and Today button

## 1.77.0

### Minor Changes

- 7d86c93: **Checkbox:** Add new component
- 7d86c93: **Form Controls:** Dispatch `gds-validity-state` event when a validator has changed the state.

### Patch Changes

- 7d86c93: **Datepicker:** Fix event type for `input` and `change` events (`CustomEvent` -> `Event`)
- 7d86c93: **Select:** Fix issue with initial validation running on untouched control
- 7d86c93: **Radio Buttons**: Fix issue where value would not get picked up when assigned as a property
- 7d86c93: **Datepicker:** Fix missing `input` event on clear

## 1.76.3

### Patch Changes

- 56552ef: Changeing datepicker focus color

## 1.76.2

### Patch Changes

- 441260e: **Dropdown:** Removed label for chevron icon
- ba27ca9: **Select, Datepicker, Dropdown, Input, Textarea and Radio:** Add missing extended supporting text slot and prop

## 1.76.1

### Patch Changes

- 751e88c: **Textarea:** Fix crash that would occur with Angular when using `clearable` option on textareas

## 1.76.0

### Minor Changes

- 1798f7d: **New components:** Added sensitive components for date and accounts
- fa32e41: **Button:** Add `justify-content` prop to justify the contents of the button adding support for next and prev layout

  ```html
  <!-- Example of a button with leading icon and text -->
  <gds-button justify-content="space-between">
    <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
    Previous
  </gds-button>

  <!-- Example of a button with trailing icon and text -->
  <gds-button justify-content="space-between">
    Next
    <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
  </gds-button>
  ```

### Patch Changes

- 3f6e026: **Link:** Add label for accessibility purposes

## 1.75.0

### Minor Changes

- 30d27ef: **Icon:** New icons, new sizing method, metadata, documentation and accessibility improvements.

  The following props have been deprecated and will be removed on the next major release:
  1. `width`
  2. `height`
  3. `box` - the viewbox property

  Now you can specify only `size` which is a style expression property that accepts tokens and custom values.

  Example:

  ```html
  <!-- Token values -->
  <gds-icon-credit-card size="xl"></gds-icon-credit-card>

  <!-- Custom values -->
  <gds-icon-credit-card size="48px"></gds-icon-credit-card>
  ```

## 1.74.2

### Patch Changes

- 84d218d: **Details:** Fix the a11y issue to avoid reading contents when collapsed

## 1.74.1

### Patch Changes

- 630d015: **Details:** Patch content overflow and improve focus state

## 1.74.0

### Minor Changes

- 51bbe15: New components for blur, formatted-text for date, number and account and sensitive-number

### Patch Changes

- 0850de5: **Details:** Fix scroll-bar flash during transition
- dc3a205: **Testing:** Fix _ElementInternals_ mock for Jest

## 1.73.0

### Minor Changes

- a6fee64: **Form controls:** Add `plain` attribute that hides header and footer, removing all surrounding space from the control
  **Form controls:** Footer is now hidden and does not add space when nothing is displayed

### Patch Changes

- a538e40: **Field base:** fixing colours in darkmode
- a6fee64: **Form controls:** Set 2xs gap between form control parts
- bc58619: **Icon:** Fix missing export of `GdsIcon` base-class
- 0e5e557: **Details:** Patch content getting cut

## 1.72.0

### Minor Changes

- 8851dbd: **Accordion:** Add new component `gds-accordion`

## 1.71.2

### Patch Changes

- bf967f5: **React:** Fix issue with 'className' prop when using older versions of React (<19)

## 1.71.1

### Patch Changes

- 49d0984: **Bundling:** Also include style modules in path extension rewrites

## 1.71.0

### Minor Changes

- faa898c: **Div:** Add white-space prop

### Patch Changes

- 9a1c8be: **Bundling:** Modified build script to add `.js` extensions to all internal imports
- faa898c: **Text:** Add examples for white space
- faa898c: **Link:** Change default white space to normal

## 1.70.1

### Patch Changes

- 15f33c4: **React:** Use fully qualified paths in React exports (i.e, include `index.js`)

## 1.70.0

### Minor Changes

- 0e6d189: **React:** Green Core now exports automatically generated JSX wrappers for all components and icons.

  For example:

  ```ts
  import { GdsButton } from '@sebgroup/green-core/react'
  ```

  Then, in JSX template:

  ```tsx
  <GdsButton rank="secondary" onClick={() => console.log('Hello')}>
    Click me!
  </GdsButton>
  ```

  These imports are tree-shakable and underlying web components will be defined automatically on first use.

- 0e6d189: **Treeshaking:** Pure exports are now available through `@sebgroup/green-core/pure`. Any components imported from there needs to be defined by calling `ClassName.define()` on the component class

### Patch Changes

- 0e6d189: **SSR:** Fix some usage of `document` and `window` to make the library more SSR friendly
- cd4667d: **Dropdown:** Label the chevron-down icon as 'Expand' for screen readers.

## 1.69.4

### Patch Changes

- b46f13f: **Radio:** Remove transitional styles

## 1.69.3

### Patch Changes

- 8fe5d35: **Tokens:** L2 content information

## 1.69.2

### Patch Changes

- d245d21: **Dropdown:** Fix regression causing `isPlaceholder` options to become visible in the list
- d03bed4: **Text:** add overflow-wrap prop

## 1.69.1

### Patch Changes

- 7fe6b60: **Dropdown:** Fix issue with elements being `aria-hidden` while also having focus
- 7fe6b60: **Dropdown:** Fix popover overlap when using `combobox` option

## 1.69.0

### Minor Changes

- f438e8f: **Radio Button:** Add new component Radio Button

## 1.68.5

### Patch Changes

- 6cea9a6: **Popover:** Change default positioning middleware to shift position rather than flip in order to use more available viewport space.

## 1.68.4

### Patch Changes

- d529108: **Rixh text:** Remove leading zero

## 1.68.3

### Patch Changes

- 08f1210: **Spinner:** add spinner to export on components
- 08f1210: **Spinner:** rename classes to fix issue with suffix

## 1.68.2

### Patch Changes

- 49bb2e6: **Rich Text:** Update styling on ordered list

## 1.68.1

### Patch Changes

- 9d1476d: **Rich text:** Fix the heading first of type
  **Rich text:** Fix the ordered list padding

## 1.68.0

### Minor Changes

- 2378057: **Spinner:** Add new component

## 1.67.3

### Patch Changes

- 286c636: **Rich Text:** Improvements on styling

## 1.67.2

### Patch Changes

- 25a87f9: **Context Menu:** Improved rendering performance

## 1.67.1

### Patch Changes

- e59a021: **Select:** Fix some state sync issues with the wrapped select element
- d69a5ea: **Popover:** Fix stacking issue with nonmodal popovers
- d69a5ea: **Dropdown:** Fix `combobox` when used without a placeholder option, and add missing event dispatch

## 1.67.0

### Minor Changes

- 9180a71: **Popover:** `gds-ui-state` events can now be cancelled to gain more control over popover behavior
- 9180a71: **Dropdown:** `gds-ui-state` event is now cancellable, and only fires on user-initiated changes
- 5fc4d2e: **Localisation:** Add translations for `no`, `nl`, `it`, `fr`, `fi`, `de` and `da`

### Patch Changes

- 9180a71: **Dropdown:** Fix scrollIntoView behavior in the listbox so that headers won't be obscured
- db5b77b: **Context Menu:** Fix focus issue. Closes #1993
- 9180a71: **Dropdown:** Fix unexpected bubbeling of the `gds-ui-state` event

## 1.66.1

### Patch Changes

- a715edc: **Declarative Layout**: Fix an incorrect import path the `styleExpressionProperty` decorator, fix default border props of gds-flex, add missing `order` property.

## 1.66.0

### Minor Changes

- 4cdaf5f: **`gds-grid`**: `auto-columns` now support any CSS units. If no unit is specified, `px` is assumed.
- 4cdaf5f: **Divider:** Add propagation of role attribute
- 4cdaf5f: ### Declarative Layout updates
  - Add `gds-div` as the base container for declarative layout
  - Refactor implementation for easier reuse of properties in various components. Several component now support style expression properties for common things like margin, width and flex item properties.
  - Colors now only support tokens from Green, no custom values except `transparent` and `currentColor`. This simplifies implementation and makes color properties more consistent.
  - Color properties now always use `tokenName/transparency`, where transparency is optional.
  - Set `box-sizing` to `border-box` by default
  - Set `border-color` to `primary` by default
  - `border` property now works like css shorthand border property, ie. `size style color`
  - `border-style` property added for completeness

  #### Removed

  The following style expression properties have been removed:
  - `pointer-events`
  - `user-select`
  - `cursor`
  - `transform-style`
  - `transition`
  - `transition-behavior`
  - `animation`

  #### Deprecated

  The followind elements have been deprecated
  - `gds-container` is deprecated in favor of `gds-div`
  - `gds-spacer` is deprecated in favor of `gds-div`

### Patch Changes

- 4cdaf5f: **Calendar:** Fix missing focus outline in 2023 style

## 1.65.2

### Patch Changes

- d800fd8: **Field Base:** Add on main wrap gap to add space in select

## 1.65.1

### Patch Changes

- 5c43312: **Icons**: Add missing css unit in height/width
- 67547d2: **Textarea:** Resizing improvements, resize handle and overflow

## 1.65.0

### Minor Changes

- fc89181: **Select:** Add new components `gds-select`, Consolidate with Field Base

### Patch Changes

- fc89181: **Input:** Update the clearable action slot icon to be `cross-large`
- fc89181: **Datepicker:** Fix the action slot icon size when is small and variant invalid
- fc89181: **Button**: Fix the the outline on variants
- f8c3d74: **FormControlElement**: Request general update when validity state changes

## 1.64.0

### Minor Changes

- 07cb314: **Dropdown:** Add `combobox` option
- 07cb314: **Popover:** Add `autofocus` property to control wheter focus is automtaically moved to the popover when opened

### Patch Changes

- 07cb314: **Icon:** Fix invalid use of css units in SVG width/height attributes
- 07cb314: **Transitional Styles:** Fix crash in legacy browsers
- 07cb314: **Form controls:** Fix recursion bug in validity state update in legacy browsers

## 1.63.2

### Patch Changes

- 7213bfb: Dropdown: Added support for size small to header

## 1.63.1

### Patch Changes

- c259ac4: **Segmented-control:** Fix actions button not hidden when child rerenders
- 3a9af88: **Segmented Control:** Fix issue where indicator would not update to reflect value
- 776f056: **Button:** Fix icon buttons getting 0 width in Safari browsers

## 1.63.0

### Minor Changes

- 33788ef: **Text:** Font-sizes are now defined as rem units
- c230b89: **GdsText:** Inherit all style expression props from GdsContainer

### Patch Changes

- 1ea5ef2: **Button:** Tweak ripple animation and hover style
- 4933535: **FieldBase:** Update focus border-color

## 1.62.5

### Patch Changes

- e18b5a8: **Utils:style-expression-property:** Safe guard falsy values

## 1.62.4

### Patch Changes

- d359d06: **Button:** Fix width styling issue in 2016 design

## 1.62.3

### Patch Changes

- c6d42ec: **Filter Chip**: Fix issue where filter chip is trying to register transitional styles for button

## 1.62.2

### Patch Changes

- 12a3417: **Scoping:** Fix return type of `gdsCustomElement` decorator in bail-out code path

## 1.62.1

### Patch Changes

- eb6e18e: **Datepicker:** Fix calendar button size in small variant
- eb6e18e: **Form error state (2016):** Styling alignments
- eb6e18e: **Dropdown:** Fix chevron alignment in 2016 design
- 2f2987b: **Segmented Control:** Fix an issue where scroll buttons would do nothing under certain conditions

## 1.62.0

### Minor Changes

- 5e16375: **Texarea:** Consolidate with Field Base
- 40f905b: **Datepicker:** Consolidate with Field Base
- f43d556: **Input:** Consolidate with Field Base
- 4d8df8b: **Dropdown:** Consolidate with Field Base
- f43d556: **Input:** Add transitional styles
- 5e16375: **Textarea:** Add transitional styles

### Patch Changes

- 33b08a2: **Icon Button:** Update transitional styles
- 93bac39: **Datepicker and Dropdown:** minor a11y improvements

## 1.61.0

### Minor Changes

- 15771a0: **Textarea**: Add `gds-input-cleared` event
- 47957aa: **Tokens:** Remove Color Tokens V1, update all components to use the new color tokens
- 15771a0: **Rich Text:** Add configurable `captureMode`, in order to increase framework compatibility

### Patch Changes

- 15771a0: **Dropdown:** Emit `input` event when value is changed
- 15771a0: **Form controls:** Add property for manually controlling error message
- a234635: **Datepicker:** Year no longer loops around when incrementing past last available
- 15771a0: **Dateicker:** Dispatch input event on value changed from calendar popover
- 15771a0: **Datepicker:** Dispatch `ìnput` event on spinner change
- 15771a0: **Input & Textarea**: Dispatch `input` event when the control is cleared

## 1.60.1

### Patch Changes

- d144d6b: **Icon:** Fix all icons fill from black to currentColor like the rest so it gets the content color instead

## 1.60.0

### Minor Changes

- 87b9ce0: **Link:** Use `text-decoration` prop to enable underline style instead of variants

## 1.59.1

### Patch Changes

- eea8929: **FAB:** Pass position to host instead of internal button
- caa5de7: **Button:** remove `width` and remove `transition` on all props keep it specific instead and add `min-block-size` on icon button.
- 6fa9154: **Datepicker:** Fix label line-height in transitional styles
- 1a8e4be: **FAB:** Add default `z-index`

## 1.59.0

### Minor Changes

- f2492d2: **GdsTheme:** Include all 2023 CSS variables instead of only colors

### Patch Changes

- f2492d2: **GdsTheme:** Fix issue with changing `color-scheme`

## 1.58.0

### Minor Changes

- 694a88f: **Badge:** Add new boolean prop `rounded` to have fully rounded border radius when used on form elements such as input

### Patch Changes

- ed505c8: **Badge:** Add missing import for dependency `gds-flex`

## 1.57.0

### Minor Changes

- 2b8089c: **Container:** Add `box-sizing` to prevent box model from groing more than max of content

### Patch Changes

- 11acd29: **FAB:** Fix width issue inherited from `gds-button`, now set's the `max-width:max-content`

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
