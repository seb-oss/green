# Changelog

## 7.1.0

### Minor Changes

- 100f03a: **Core helper modules:** Deprecate all core helper modules, since they are either made obsolete by Core NG, or have moved there.
- 100f03a: **Core Renderer:** Compatibility fix for Core NG

### Patch Changes

- Updated dependencies [100f03a]
  - @sebgroup/green-core@2.19.0

## 7.0.0

### Major Changes

- b634df2: **Angular:** Update minimum Angular version to 19.
  BREAKING CHANGE: Consumers on earlier Angular versions will need to update to 19.x

## 6.8.0

### Minor Changes

- fa7db49: **V-Angular:** Radio: Create nggv-radio-group. Fixes #2468

## 6.7.1

### Patch Changes

- 26ceb48: **Context Menu:** Fix broken custom template functionality in wrapper
- Updated dependencies [0020685]
- Updated dependencies [26ceb48]
- Updated dependencies [0020685]
- Updated dependencies [0020685]
- Updated dependencies [0020685]
- Updated dependencies [0020685]
- Updated dependencies [0020685]
  - @sebgroup/green-core@2.12.0

## 6.7.0

### Minor Changes

- c70d4f1: **V-Angular:** Added afterClose output to nggv-dropdown-list componenet

### Patch Changes

- 527b5fd: V-angular: Don't hide column for hidden checkbox in table
- Updated dependencies [808b0f1]
  - @sebgroup/chlorophyll@3.6.25

## 6.6.0

### Minor Changes

- 244e286: Dateinput (v-angular): Close on scroll toggled via input

  Dropdown (v-angular): Close on scroll toggled via input

- 385777b: Adding new input hiddenCheckboxRowIds to nggv-table component

## 6.5.0

### Minor Changes

- fd6856f: **NggCoreFormsModule:** Add support for standalone [formControl] directive. Fixes #2410

## 6.4.1

### Patch Changes

- 4b6a253: **V-Angular:** Date input: Added Close on scroll and Dynamic positioning
- Updated dependencies [90751c6]
- Updated dependencies [5991ecf]
  - @sebgroup/green-core@2.6.2

## 6.4.0

### Minor Changes

- a69c3e1: Revert moving v-angular dropdown-list to CDK portal

### Patch Changes

- Updated dependencies [da0ab9a]
- Updated dependencies [2ba96f6]
  - @sebgroup/green-core@2.5.3

## 6.3.0

### Minor Changes

- bfda3a6: V-Angular Dropdown: move dropdown list to CDK portal

### Patch Changes

- Updated dependencies [33b3aa0]
- Updated dependencies [33b3aa0]
  - @sebgroup/green-core@2.5.2

## 6.2.1

### Patch Changes

- 43c34a3: **Deprecations:** Add inline deprecation warnings to outdated components

## 6.2.0

### Minor Changes

- 1969060: **Scoping:** Add scope resolver provider:

### Patch Changes

- Updated dependencies [1969060]
  - @sebgroup/green-core@2.4.0

## 6.1.3

### Patch Changes

- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
- Updated dependencies [d9b0006]
  - @sebgroup/green-core@2.0.0

## 6.1.2

### Patch Changes

- 46ca765: **V-Angular:** Dropdown - Added "close on scroll" functionality

## 6.1.1

### Patch Changes

- 13e6435: **Slider:** Fix accessibility issue when text input is not following the steps.
- 921ee52: V-Angular: Updated Table component with extra label
- b388664: **Dropdown:** Add optional generic type for `DropdownOption`

## 6.1.0

### Minor Changes

- 79efa1b: **V-Angular:** Changed nggv-toast to full width on smallest breakpoint

### Patch Changes

- 8023ea6: **V-Angular:** Improve dropdown dynamic positioning (top/bottom) and height calculation
- 4f381d4: **V-Angular:** listWidth property to fold out component - added danger button to dialog component
- 791dd16: V-Angular: Updated Table component with expanded rows by default attribute
- Updated dependencies [72be834]
  - @sebgroup/green-core@1.88.2

## 6.0.5

### Patch Changes

- c031e4a: **V-Angular Input/Dropdown/Textarea**: Fixed styling for small variants; halved spacing underneath dropdown and textarea, and corrected height difference (compared to dropdown) for input field.

## 6.0.4

### Patch Changes

- 86ea764: Fold out: close fold out on tab
- 803b81c: Changed height of nggv-dateinput wrapper to match nggv-input wrapper

## 6.0.3

### Patch Changes

- bad7bf3: Fix: showing validation message when passing message slot
- Updated dependencies [27fe9cf]
  - @sebgroup/green-core@1.88.0

## 6.0.2

### Patch Changes

- e56c76a: V-angular: Updated textarea description logic with descriptionIsVisible property
- 9abbfb9: Dropdown/Typeahead: Add input that controls if key "Space" should select active element in dropdown-list. Set to false from typeahead
- Updated dependencies [577fc63]
- Updated dependencies [f3b8f76]
- Updated dependencies [eca17f0]
  - @sebgroup/green-core@1.87.0

## 6.0.1

### Patch Changes

- df15684: V-Angular: Updated the way required attribute is set inside components
- Updated dependencies [1891932]
  - @sebgroup/green-core@1.85.3

## 6.0.0

### Major Changes

- ba3268c: Update minimal Angular version to 18

### Patch Changes

- Updated dependencies [60e38d9]
- Updated dependencies [e4eb1ad]
  - @sebgroup/green-core@1.85.0

## 5.13.3

### Patch Changes

- 63487db: **V-Angular:** Fix component id collision warnings for toast component
- Updated dependencies [56d1779]
- Updated dependencies [55b23da]
  - @sebgroup/green-core@1.84.0

## 5.13.2

### Patch Changes

- b89a46f: V-Angular: Removed the top line/border from the table header.
- Updated dependencies [c6833ae]
  - @sebgroup/green-core@1.83.2

## 5.13.1

### Patch Changes

- 0acbec7: Dragdrop: Prevet overflow for file name
- Updated dependencies [1aa919a]
- Updated dependencies [44dff87]
- Updated dependencies [41b8a90]
- Updated dependencies [73e0759]
- Updated dependencies [4d4704b]
- Updated dependencies [f1ceb54]
  - @sebgroup/green-core@1.83.0

## 5.13.0

### Minor Changes

- 9d223a7: V-Angular: Adding small variant of Dropdown
- 9d223a7: V-Angular: Adding small variant of Checkbox
- 9d223a7: V-Angular: Adding small variant of DateInput
- 9d223a7: V-Angular: Adding small variant of Textarea

### Patch Changes

- 1829e13: Fixed dropdown selection behaviour when typeahead is used
- 9d223a7: V-Angular: Fixing icon sizing in Date input

## 5.12.1

### Patch Changes

- a4252f9: **NggCoreControl:** Update selectors to only apply when controls are used with reactive forms (when `formControlName` is present)
- Updated dependencies [4c000b4]
  - @sebgroup/green-core@1.81.0

## 5.12.0

### Minor Changes

- 45a6303: **V-Angular Dropdown/Typeahead**: Keyboard select dropdown with nvda screen-reader.

### Patch Changes

- 2a3e532: Resolved V-Angular table a11y warnings
- Updated dependencies [2edbe83]
- Updated dependencies [5f775b4]
- Updated dependencies [461504b]
- Updated dependencies [2edbe83]
  - @sebgroup/green-core@1.80.0
  - @sebgroup/chlorophyll@3.6.20

## 5.11.2

### Patch Changes

- 7e585f8: **NggDatepicker:** Fix error in change event handler
- Updated dependencies [ce1b0d4]
  - @sebgroup/green-core@1.79.0

## 5.11.1

### Patch Changes

- 728c620: **V-Angular:** Updated table component

## 5.11.0

### Minor Changes

- 318de75: **V-Angular Inputs:** Support for custom locked template for input fields.

### Patch Changes

- 766cbe6: Adding export of checkbox directive to fix build error
- Updated dependencies [657e0a3]
- Updated dependencies [0a3ac2c]
- Updated dependencies [9075450]
- Updated dependencies [9075450]
- Updated dependencies [9075450]
- Updated dependencies [6846a6c]
  - @sebgroup/green-core@1.78.0

## 5.10.0

### Minor Changes

- 7d86c93: **Forms:** Add ControlValueAccessor support for `gds-checkbox`

### Patch Changes

- Updated dependencies [7d86c93]
- Updated dependencies [7d86c93]
- Updated dependencies [7d86c93]
- Updated dependencies [7d86c93]
- Updated dependencies [7d86c93]
- Updated dependencies [7d86c93]
  - @sebgroup/green-core@1.77.0

## 5.9.0

### Minor Changes

- 8616efe: Updated v-angular table for mobile view

## 5.8.1

### Patch Changes

- 0f2c59f: **V-Angular Dropdown/Typeahead:** Enable keyboard navigation with NVDA screen-reader.
- Updated dependencies [441260e]
- Updated dependencies [ba27ca9]
  - @sebgroup/green-core@1.76.2

## 5.8.0

### Minor Changes

- a9cde91: **V-Angular Toast:** Support input of custom template to render inside of toast.

## 5.7.1

### Patch Changes

- 9bf1161: **V-Angular Input:** Fixed error and countdown styling for input field.
- dc3a205: **NggCoreControl**: Allow opt-out by using `ngDefaultControl` directive
- Updated dependencies [51bbe15]
- Updated dependencies [0850de5]
- Updated dependencies [dc3a205]
  - @sebgroup/green-core@1.74.0

## 5.7.0

### Minor Changes

- a6fee64: **V-Angular Input:** Adding small variant
  **V-Angular RadioButton:** Adding small variant

### Patch Changes

- Updated dependencies [a538e40]
- Updated dependencies [a6fee64]
- Updated dependencies [a6fee64]
- Updated dependencies [bc58619]
- Updated dependencies [0e5e557]
  - @sebgroup/chlorophyll@3.6.18
  - @sebgroup/green-core@1.73.0

## 5.6.1

### Patch Changes

- 0e6d189: Update how underlying Core components are imported. Affects NggDropdown, NggDatepicker and NggContextMenu
- Updated dependencies [0e6d189]
- Updated dependencies [0e6d189]
- Updated dependencies [0e6d189]
- Updated dependencies [cd4667d]
  - @sebgroup/green-core@1.70.0

## 5.6.0

### Minor Changes

- d75df66: **V-Angular**: Adding href to alert-ribbon and fixing icons in toast

### Patch Changes

- 9b15233: **V-Angular Slide-out:** Set focus on first focusable element instead of last focusable element

## 5.5.4

### Patch Changes

- cf901cf: **V-Angular Components:** Fixed spacing within components and after.
- 759863c: **V-Angular Slide-out:** Allow overflow to be shown outside of slide-out content.

## 5.5.3

### Patch Changes

- 142324e: Fixing issue with prefix/suffix in input and dropdown
- 3c2809f: fixing typeahead dropdown placement and width
- Updated dependencies [8fe5d35]
- Updated dependencies [00c48da]
  - @sebgroup/green-core@1.69.3
  - @sebgroup/chlorophyll@3.6.17

## 5.5.2

### Patch Changes

- a904e48: Updated V-Angular Table sub-item to accept custom template

## 5.5.1

### Patch Changes

- 43b08d4: dropdownButton in typeahead might be undefined
- f0d4efc: fixing typeahead input height when opening dropdown
- Updated dependencies [7fe6b60]
- Updated dependencies [7fe6b60]
  - @sebgroup/green-core@1.69.1

## 5.5.0

### Minor Changes

- 9ac5286: **Routing:** Add `nggCoreRouterLink` directive for accessible routing with Green Core components

### Patch Changes

- Updated dependencies [f438e8f]
  - @sebgroup/green-core@1.69.0

## 5.4.2

### Patch Changes

- 213f2ad: Fix for dropdown layering to render list above other inputs.

## 5.4.1

### Patch Changes

- 79a086f: fixed incomplete v-angular migration by removing a line which causes height issues
- 3907ebb: **Alert Ribbon**: showing correct icon based on type
  **Dropdown**: correct height on typeahead overlay, fixing spacing to validation
- c564b23: Added margin-top to error-wrapper class in dropdown component. Removed height from input-wrapper class in input component to fix visual bug
- 3077e1e: Added .nggv-field--error to input.component.scss to show a red line when there's an error on the input fields. Made slide-out scrollable when overflown. Added core map to index.ts file to expose some interfaces
- 9111c10: Performance fix for dropdown-list and handling of key press events.
- Updated dependencies [6cea9a6]
  - @sebgroup/green-core@1.68.5

## 5.4.0

### Minor Changes

- 54814fe: **NggCoreRenderer:** Add provider for supporting animations when using `NggCoreRenderer`. Fixes #1997

### Patch Changes

- 158fc60: **NggDropdown:** Fix text overflow style in the trigger. Fixes #1948
- b8454ea: **Modal**: fixing close button sizing on mobile
  **Tooltip**: fixing zindex problem when combined with modal
- Updated dependencies [5dd17df]
  - @sebgroup/chlorophyll@3.6.16

## 5.3.4

### Patch Changes

- 50a3fa2: Updated table grouping funcionality with clickable sub-items.
- Updated dependencies [9d1476d]
  - @sebgroup/green-core@1.68.1

## 5.3.3

### Patch Changes

- fc5b9d4: added actionEmitter and close on option click on foldout
- Updated dependencies [25a87f9]
  - @sebgroup/green-core@1.67.2

## 5.3.2

### Patch Changes

- 4a1ad4a: Added missing styles for the checkboxes inside nggv-table component
- Updated dependencies [0babf00]
- Updated dependencies [4cdaf5f]
- Updated dependencies [4cdaf5f]
- Updated dependencies [4cdaf5f]
- Updated dependencies [4cdaf5f]
  - @sebgroup/chlorophyll@3.6.15
  - @sebgroup/green-core@1.66.0

## 5.3.1

### Patch Changes

- e93b640: **CoreControlModule**: Fix condition for when field errors are displayed

## 5.3.0

### Minor Changes

- 9b9d7b6: Added table grouping functionality.

### Patch Changes

- d3870c2: Added position: relative to host: element to counteract the position: absolute for the fold-out options.
- b8a1b9c: Exported account-number-pipe as Angular stand-alone pipe.
- Updated dependencies [fc89181]
- Updated dependencies [fc89181]
- Updated dependencies [fc89181]
- Updated dependencies [f8c3d74]
- Updated dependencies [fc89181]
  - @sebgroup/green-core@1.65.0

## 5.2.0

### Minor Changes

- 0213060: **V-Angular:** Migrating V-Angular remaining components to Green and closing the gap on already exsisting components.

  ## Migrated components
  - AccountNumber
  - Alert
  - BaseControlValueAccessor
  - Breadcrumbs
  - Button
  - Card
  - CharacterCountdown
  - Checkbox
  - Datepicker
  - DragDrop
  - Dropdown
  - DropdownList
  - ExternalLink
  - I18n
  - InfoCircle
  - Input
  - InputMask
  - Modal
  - Pagination
  - Radio
  - Slug
  - Table
  - Tabs
  - Textarea
  - Toast
  - Tooltip

### Patch Changes

- Updated dependencies [7213bfb]
- Updated dependencies [0213060]
  - @sebgroup/green-core@1.63.2
  - @sebgroup/chlorophyll@3.6.14

## 5.1.2

### Patch Changes

- 1bf0d07: **nggCoreElement**: Remove console.log

## 5.1.1

### Patch Changes

- 4d8df8b: **NggCoreControlDirective:** Fix a missing public export
- 53ed2a4: **In page wizard** Change icon
- Updated dependencies [5e16375]
- Updated dependencies [33b08a2]
- Updated dependencies [3331d19]
- Updated dependencies [40f905b]
- Updated dependencies [93bac39]
- Updated dependencies [f43d556]
- Updated dependencies [4d8df8b]
- Updated dependencies [f43d556]
- Updated dependencies [5e16375]
  - @sebgroup/green-core@1.62.0
  - @sebgroup/chlorophyll@3.6.13

## 5.1.0

### Minor Changes

- 15771a0: **CoreElements**: Add a new custom renderer that adds the ability to use scoped core components without the `*nggCoreElement` directive

### Patch Changes

- f4ffadf: **Modals:** Add custom close button label
- Updated dependencies [85759d1]
- Updated dependencies [15771a0]
- Updated dependencies [15771a0]
- Updated dependencies [15771a0]
- Updated dependencies [a234635]
- Updated dependencies [15771a0]
- Updated dependencies [15771a0]
- Updated dependencies [15771a0]
- Updated dependencies [47957aa]
- Updated dependencies [15771a0]
  - @sebgroup/chlorophyll@3.6.12
  - @sebgroup/green-core@1.61.0

## 5.0.0

### Major Changes

- 54ec646: Upgrade minimum supported version to Angular 17
- 54ec646: **Datepicker:** Remove deprecated props from `DatepickerOptions`
- 54ec646: **Context Menu:** Remove deprecated input `closeOnScroll`
- 54ec646: **Dropdown:** Remove deprecated input `fixedPlacement`
- 54ec646: **Dropdown:** Remove some deprecated props from `DropdownTexts`

## 4.6.7

### Patch Changes

- 1c8b959: **Accordion:** fixed button to only be marked as heading, not it's content
- Updated dependencies [e03df6f]
  - @sebgroup/chlorophyll@3.6.9

## 4.6.6

### Patch Changes

- d00298d: Fixed missing countdown in v-angular input and textarea components. Fixed v-angular dropdown styling issues.

## 4.6.5

### Patch Changes

- bf9e150: Accordion - Can set aria-level in angular
- Updated dependencies [500beae]
  - @sebgroup/green-core@1.45.0

## 4.6.4

### Patch Changes

- 06f5077: **V-Angular:** Fix icon import paths

## 4.6.3

### Patch Changes

- d6f652d: **V-Angular:** fixing selector and imported modules
- Updated dependencies [aab2665]
- Updated dependencies [aab2665]
- Updated dependencies [cb2d08c]
  - @sebgroup/green-core@1.43.4

## 4.6.2

### Patch Changes

- 05c1eab: rename ngv to nggv
- 05c1eab: updated v-angular exports
- Updated dependencies [69f1894]
- Updated dependencies [916a2ef]
  - @sebgroup/green-core@1.43.0

## 4.6.1

### Patch Changes

- 074fcad: rename ngv to nggv
- Updated dependencies [0ace1ed]
- Updated dependencies [fbecda4]
  - @sebgroup/chlorophyll@3.6.4
  - @sebgroup/green-core@1.42.0

## 4.6.0

### Minor Changes

- 70e8855: Adding V-Angular components to Green: breadcrumbs, button, card, checkbox,dropdown-list,dropdown,info-circle,input-mask,input,modal,radio,textarea,tooltip,typeahead.

### Patch Changes

- Updated dependencies [70e8855]
  - @sebgroup/chlorophyll@3.6.3

## 4.5.0

### Minor Changes

- a6a0672: Added an input property to check if the step is valid to be completed or not. Used for accessibility purposes.

### Patch Changes

- Updated dependencies [26fdbeb]
- Updated dependencies [26fdbeb]
  - @sebgroup/green-core@1.40.0

## 4.4.1

### Patch Changes

- b00a59c: **Modals:** Correct behaviour for modality. Dialogs should only be modal when `trapFocus = true`
- b00a59c: **Modals:** Fix accessible label

## 4.4.0

### Minor Changes

- 3cf63ae: Adding sizing input for the dialog modal in angular and chlorophyll

### Patch Changes

- Updated dependencies [3cf63ae]
  - @sebgroup/chlorophyll@3.5.0

## 4.3.1

### Patch Changes

- 7cfed86: **Dropdown:** Fix previous texts value being displayed if nothing is selected and `texts` input changed

## 4.3.0

### Minor Changes

- 718186b: Fix not displayed selected dropdown option then texts input changes

### Patch Changes

- Updated dependencies [6a7e540]
  - @sebgroup/green-core@1.28.0

## 4.2.2

### Patch Changes

- bc76d34: fixing In page wizard style and angular component
- Updated dependencies [32df607]
- Updated dependencies [d50e15a]
- Updated dependencies [bc76d34]
  - @sebgroup/green-core@1.27.0
  - @sebgroup/chlorophyll@3.4.3

## 4.2.1

### Patch Changes

- c068ed2: **Dropdown:** Add default value for `maxHeight`
- Updated dependencies [d6540f5]
  - @sebgroup/green-core@1.24.0

## 4.2.0

### Minor Changes

- f94b8ad: **Dropdown:** Add option for disabling mobile styles

### Patch Changes

- Updated dependencies [f94b8ad]
- Updated dependencies [23022c1]
- Updated dependencies [47d4df3]
  - @sebgroup/green-core@1.23.0
  - @sebgroup/chlorophyll@3.4.1

## 4.1.1

### Patch Changes

- 1344f9d: **Deps:** Add previously undeclared peer deps
- Updated dependencies [1344f9d]
- Updated dependencies [1344f9d]
- Updated dependencies [2921f0e]
  - @sebgroup/green-core@1.22.2
  - @sebgroup/extract@3.0.2

## 4.1.0

### Minor Changes

- 5a9e3ab: Modal animations

### Patch Changes

- Updated dependencies [a8b556f]
- Updated dependencies [096b662]
- Updated dependencies [5f224d0]
- Updated dependencies [1652e33]
  - @sebgroup/green-core@1.22.0

## 4.0.0

### Major Changes

- 5831cf7: Update minimum Angular peer version to 16.2.12

### Patch Changes

- Updated dependencies [336743c]
  - @sebgroup/green-core@1.20.1

## 3.8.0

### Minor Changes

- 38a8550: Input for disabling body scroll on NggModal

## 3.7.0

### Minor Changes

- 0aeaa98: **Sub-packages:** Components in `@sebgroup/green-angular` are now exported as separate sub-packages for better tree-shaking.

### Patch Changes

- Updated dependencies [0aeaa98]
- Updated dependencies [a8941c7]
  - @sebgroup/green-core@1.18.0

## 3.6.3

### Patch Changes

- f8758d9: **Sub-path imports:** Fix missing filename on import paths

## 3.6.2

### Patch Changes

- 57fb099: Publish previously failed version

## 3.6.1

### Patch Changes

- 80b4050: Update underlying Core components to use sub path imports
- Updated dependencies [5b84660]
- Updated dependencies [e20574d]
- Updated dependencies [80b4050]
- Updated dependencies [80b4050]
  - @sebgroup/green-core@1.16.0
  - @sebgroup/chlorophyll@3.3.4

## 3.6.0

### Minor Changes

- d4e06e7: New component: Sortable list

### Patch Changes

- Updated dependencies [d4e06e7]
  - @sebgroup/chlorophyll@3.2.0

## 3.5.2

### Patch Changes

- 7cb209f: Datepicker to take strings as value
- Updated dependencies [feb1712]
  - @sebgroup/chlorophyll@3.1.3

## 3.5.1

### Patch Changes

- dc45b5e: fixed dropdown headings
- Updated dependencies [f4d7fe7]
- Updated dependencies [80c0cdf]
  - @sebgroup/green-core@1.9.1
  - @sebgroup/chlorophyll@3.1.2

## 3.5.0

### Minor Changes

- 7820e8c: **Dropdown**
  - Add `maxHeight` input

- bb83849: **Datepicker:** Added support for disabling dates
  - `disabled-weekends` will disable all weekend days in the calendar view
  - `disabled-dates` allows to specify an array of dates that should be disabled in the calendar view

### Patch Changes

- Updated dependencies [bb83849]
- Updated dependencies [7820e8c]
- Updated dependencies [7820e8c]
  - @sebgroup/green-core@1.9.0

## 3.4.0

### Minor Changes

- c0a99dd: Adds the Cell Table component
- a1c5e60: New component: Grouped list

### Patch Changes

- Updated dependencies [a1c5e60]
  - @sebgroup/green-core@1.8.0
  - @sebgroup/chlorophyll@3.1.1

## 3.3.0

### Minor Changes

- 007f8ac: **Datepicker and Dropdown**
  - Add small variant
  - Add attribute for hiding label
  - Align style with Figma

### Patch Changes

- Updated dependencies [78e09aa]
- Updated dependencies [007f8ac]
  - @sebgroup/extract@3.0.1
  - @sebgroup/chlorophyll@3.1.0
  - @sebgroup/green-core@1.7.0

## 3.2.0

### Minor Changes

- 158d93a: Add `<gds-menu-heading>`, which can be used to group options and menu items in Dropdown and Context menu components.

### Patch Changes

- Updated dependencies [158d93a]
- Updated dependencies [e0d3f09]
- Updated dependencies [d8de14a]
  - @sebgroup/green-core@1.6.0
  - @sebgroup/chlorophyll@3.0.5

## 3.1.0

### Minor Changes

- 5a70b2f: Context menu: updated style and functionality

### Patch Changes

- 88d15d6: Update visible value when Dropdown/Datepicker formGroup changed programatically
- 90672d7: Dropdown: Recalculate display text when options list changes. Closes #1192
- Updated dependencies [5a70b2f]
- Updated dependencies [cace30b]
  - @sebgroup/green-core@1.5.0

## 3.0.4

### Patch Changes

- e7797a7: Modal should close when clicking on backdrop. Fixes #1182

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [3.0.3](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@3.0.2...@sebgroup/green-angular@3.0.3) (2024-01-30)

### Bug Fixes

- **angular:** add export for Core Wrapper Module ([#1184](https://github.com/seb-oss/green/issues/1184)) ([5b23830](https://github.com/seb-oss/green/commit/5b23830f4c4db8119c1f4d606d9f016801500b70))

## [3.0.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@3.0.1...@sebgroup/green-angular@3.0.2) (2024-01-26)

### Bug Fixes

- **angular/modals:** apply updated class names ([#1179](https://github.com/seb-oss/green/issues/1179)) ([9985503](https://github.com/seb-oss/green/commit/9985503fcac7e09bb6ca5d58810a5c09ea15023a))

## [3.0.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@3.0.0...@sebgroup/green-angular@3.0.1) (2024-01-22)

### Bug Fixes

- **angular/dropdown:** incorrectly supplying value in filter callback adapter ([#1167](https://github.com/seb-oss/green/issues/1167)) ([101a23c](https://github.com/seb-oss/green/commit/101a23c08b8b70f0179ae0829f7e8b772ea7317e))
- **datepicker:** forward all props to web component ([#1168](https://github.com/seb-oss/green/issues/1168)) ([00b0922](https://github.com/seb-oss/green/commit/00b092271f345abe521e8af74b7c4392d8b8db4c))

# [3.0.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.1.3...@sebgroup/green-angular@3.0.0) (2024-01-19)

### Bug Fixes

- **dropdown:** pass down `syncPopoverWidth` to core component ([#1161](https://github.com/seb-oss/green/issues/1161)) ([4c48135](https://github.com/seb-oss/green/commit/4c48135e465af81ef5074753f2d819244ac3a9d5))

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/seb-oss/green/issues/1154)) ([707d456](https://github.com/seb-oss/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))
- **datepicker:** replace underlying implementation in React and Angular ([#1164](https://github.com/seb-oss/green/issues/1164)) ([ececf0a](https://github.com/seb-oss/green/commit/ececf0aa12078a7b4fbeeae95861cf75e9194e31))

### BREAKING CHANGES

- **datepicker:** \* `locale` option has been removed. Localization is handled
  in Green Core by `@lit/localize`
- `currentDate` is deprecated. Use `value` instead.
- `selectedDate` is deprecated. Use `value` instead.
- `useCurrentTime` is removed
- `closeOnSelect` is removed (popover will now always close when a value is selected)
- `DatepickerOptions` moved from Extract and can be imported from React or Angular package instead.

## [2.1.3](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.1.2...@sebgroup/green-angular@2.1.3) (2024-01-16)

### Bug Fixes

- **angular/pagination:** fix keyboard navigation ([#1157](https://github.com/seb-oss/green/issues/1157)) ([cb9ba95](https://github.com/seb-oss/green/commit/cb9ba9575bc6533ab154e0d15c9f46aa29a74fba))

## [2.1.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.1.1...@sebgroup/green-angular@2.1.2) (2023-12-06)

### Bug Fixes

- 🐛 update track background when min and max values change ([#1146](https://github.com/seb-oss/green/issues/1146)) ([17d0b80](https://github.com/seb-oss/green/commit/17d0b80283a0601821c5205e4a3d719b8c572586))

## [2.1.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.1.0...@sebgroup/green-angular@2.1.1) (2023-11-29)

### Bug Fixes

- **core:** downgrade to `lit@ˆ2.8.0` ([#1134](https://github.com/seb-oss/green/issues/1134)) ([bee1a90](https://github.com/seb-oss/green/commit/bee1a90bb48c2855b23849fbb30daaa991138dc8))

# [2.1.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.1.0) (2023-11-22)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/seb-oss/green/issues/1104)) ([8c88de3](https://github.com/seb-oss/green/commit/8c88de30c48ddb7e0a4a8abdc3b97d8310183069))
- **dropdown:** hidden overflow with ellipsis by default ([#1114](https://github.com/seb-oss/green/issues/1114)) ([9a2cce7](https://github.com/seb-oss/green/commit/9a2cce7cb7549ef3bff6b4086407fcb80f49cc72))

### Features

- **core/context-menu:** add context menu component to Green Core, and use for Angular and React ([#1125](https://github.com/seb-oss/green/issues/1125)) ([1aacb43](https://github.com/seb-oss/green/commit/1aacb43d9afedd34316f2c96c10d534b5d487aa6))

## [2.0.4](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.0.4) (2023-11-08)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/seb-oss/green/issues/1104)) ([8c88de3](https://github.com/seb-oss/green/commit/8c88de30c48ddb7e0a4a8abdc3b97d8310183069))

## [2.0.4](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.0.4) (2023-11-08)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/seb-oss/green/issues/1104)) ([28b6b83](https://github.com/seb-oss/green/commit/28b6b83fcc1ab7699ee28d20b0a89e6740361b75))

## [2.0.3](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.2...@sebgroup/green-angular@2.0.3) (2023-11-07)

### Bug Fixes

- **angular/context-menu:** remove border ([#1097](https://github.com/seb-oss/green/issues/1097)) ([4ce4939](https://github.com/seb-oss/green/commit/4ce493904d5b1e9487debd17cb34385e5d8cbd8b))

## [2.0.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.1...@sebgroup/green-angular@2.0.2) (2023-11-01)

### Bug Fixes

- **angular/dropdown:** correct additional regressions ([#1087](https://github.com/seb-oss/green/issues/1087)) ([57f7f4b](https://github.com/seb-oss/green/commit/57f7f4b685efab17fba482de3fd66e23f32e3486))

## [2.0.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@2.0.0...@sebgroup/green-angular@2.0.1) (2023-10-31)

### Bug Fixes

- **angular/dropdown:** issues with Dropdown custom buttons ([#1084](https://github.com/seb-oss/green/issues/1084)) ([eebb5e4](https://github.com/seb-oss/green/commit/eebb5e4cc75d8415edcb7efc125befac4ca1dde3))

# [2.0.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.10.0...@sebgroup/green-angular@2.0.0) (2023-10-30)

### Bug Fixes

- **context-menu:** context menu imports and docs ([#1074](https://github.com/seb-oss/green/issues/1074)) ([34b3a35](https://github.com/seb-oss/green/commit/34b3a35e284e4a6c7c1acc145ca80b869574dee5))
- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/seb-oss/green/issues/1016)) ([7f6f8f5](https://github.com/seb-oss/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

- Updated focus states in Chlorophyll (#1050) ([d9ee451](https://github.com/seb-oss/green/commit/d9ee451030387576f2d9b768de665be2876e2ad9)), closes [#1050](https://github.com/seb-oss/green/issues/1050)

### BREAKING CHANGES

- Some grouped inputs will need the `group-focus` class added to the wrapper
- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

# [1.10.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.9.0...@sebgroup/green-angular@1.10.0) (2023-10-11)

### Features

- **slider:** use `inputmode='numeric'` and add `enterkeyhint` support ([#1049](https://github.com/seb-oss/green/issues/1049)) ([44ac574](https://github.com/seb-oss/green/commit/44ac574112b5621c87f3688f02669a9d2071160f))

# [1.9.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.5...@sebgroup/green-angular@1.9.0) (2023-09-01)

### Features

- **angular:** modal customizable header and footer ([#982](https://github.com/seb-oss/green/issues/982)) ([cdc1668](https://github.com/seb-oss/green/commit/cdc1668013316459c36d13f55a6cc981e16f377b))

## [1.8.5](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.4...@sebgroup/green-angular@1.8.5) (2023-08-30)

### Bug Fixes

- 🐛 wrong position after zoom-in due to cached position ([#976](https://github.com/seb-oss/green/issues/976)) ([b114586](https://github.com/seb-oss/green/commit/b11458689acfcf2f6c7683c31684c86d69696357))
- Angular modal scroll iOS ([#979](https://github.com/seb-oss/green/issues/979)) ([6a165a2](https://github.com/seb-oss/green/commit/6a165a2e532af64b194097e43e67c218230f49a2))

## [1.8.4](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.3...@sebgroup/green-angular@1.8.4) (2023-08-23)

### Bug Fixes

- 🐛 wrong calculation of y position for context menu ([#973](https://github.com/seb-oss/green/issues/973)) ([d90ccc8](https://github.com/seb-oss/green/commit/d90ccc87cd62c0eecdca01f04e705c5127af69ca))

## [1.8.3](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.2...@sebgroup/green-angular@1.8.3) (2023-08-21)

### Bug Fixes

- 🐛 fix context menu position in relative parent ([#970](https://github.com/seb-oss/green/issues/970)) ([d8f208e](https://github.com/seb-oss/green/commit/d8f208ed4766e0b940ebf4491ca4158715380d0f))

## [1.8.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.1...@sebgroup/green-angular@1.8.2) (2023-08-17)

### Bug Fixes

- **datepicker:** correctly reflect state after formGroup reset ([#964](https://github.com/seb-oss/green/issues/964)) ([b300d36](https://github.com/seb-oss/green/commit/b300d360232f8fcbabc84dd42ce6867e023e92a8))

## [1.8.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.8.0...@sebgroup/green-angular@1.8.1) (2023-08-08)

# [1.8.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.7.2...@sebgroup/green-angular@1.8.0) (2023-07-07)

### Bug Fixes

- **slider:** mobile version, small input on desktop, added `aria-labelledby` ([#929](https://github.com/seb-oss/green/issues/929)) ([456c934](https://github.com/seb-oss/green/commit/456c934443e94766231c284b3f1eaa4e8bc6b040)), closes [#902](https://github.com/seb-oss/green/issues/902) [#920](https://github.com/seb-oss/green/issues/920) [#923](https://github.com/seb-oss/green/issues/923)

### Features

- **dropdown:** 🎸 new input to set fixed placement of popover ([#930](https://github.com/seb-oss/green/issues/930)) ([ff782d6](https://github.com/seb-oss/green/commit/ff782d67602883e7f56af239d08a8c44a264f321))

## [1.7.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.7.1...@sebgroup/green-angular@1.7.2) (2023-05-24)

### Bug Fixes

- 🐛 Context menu on scroll markForCheck and css fixes ([#897](https://github.com/seb-oss/green/issues/897)) ([89b83fc](https://github.com/seb-oss/green/commit/89b83fc4d09456b8f983eb2ece14fa9ea182fc5a))

## [1.7.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.7.0...@sebgroup/green-angular@1.7.1) (2023-05-12)

### Bug Fixes

- 🐛 context-menu close on scroll or resize, button hover ([e5789c5](https://github.com/seb-oss/green/commit/e5789c535c5dfe8d25bafe495acad7687c45fbe3))

# [1.7.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.6.0...@sebgroup/green-angular@1.7.0) (2023-05-05)

### Features

- **dropdown:** allow custom template for dropdown button ([#860](https://github.com/seb-oss/green/issues/860)) ([4a05eea](https://github.com/seb-oss/green/commit/4a05eeac9769d8c7c1a0838e14b76305d8edcd89))

# [1.6.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.5.1...@sebgroup/green-angular@1.6.0) (2023-05-03)

### Bug Fixes

- **context-menu:** add missing export ([#861](https://github.com/seb-oss/green/issues/861)) ([af31fd3](https://github.com/seb-oss/green/commit/af31fd30cb2883cfda09485d23b07dd32f653a2b))

### Features

- 🎸 Context Menu ([#852](https://github.com/seb-oss/green/issues/852)) ([8ede687](https://github.com/seb-oss/green/commit/8ede687c363f3fbc9760d958ae17a9c467ca90e6))

## [1.5.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.5.0...@sebgroup/green-angular@1.5.1) (2023-05-03)

### Bug Fixes

- 🐛 Missing Output decorator to wizard step card ([#859](https://github.com/seb-oss/green/issues/859)) ([68dd83e](https://github.com/seb-oss/green/commit/68dd83ead59181067337932c284d69ca0958befe))

# [1.5.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.4.0...@sebgroup/green-angular@1.5.0) (2023-05-02)

### Features

- **wizard-step-card:** 🎸 Add handle edit click event emitter ([#856](https://github.com/seb-oss/green/issues/856)) ([dc21976](https://github.com/seb-oss/green/commit/dc219760024cb06f7d39a3189136ac7c51353b31))

# [1.4.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.3.1...@sebgroup/green-angular@1.4.0) (2023-04-28)

### Bug Fixes

- build issue with InPageWizard ([#855](https://github.com/seb-oss/green/issues/855)) ([8949282](https://github.com/seb-oss/green/commit/89492823816d30d78ec87a85410323d34440bdf2))

### Features

- 🎸 Angular in-page wizard step card ([#853](https://github.com/seb-oss/green/issues/853)) ([c8b5eb4](https://github.com/seb-oss/green/commit/c8b5eb4d5140e9636538f329096e11f715884fc2))

## [1.3.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.3.0...@sebgroup/green-angular@1.3.1) (2023-04-19)

### Bug Fixes

- **angular:** downgrade base version of Angular to 14.3.0 ([#851](https://github.com/seb-oss/green/issues/851)) ([44b3819](https://github.com/seb-oss/green/commit/44b3819d847f1b255f1fc103fad0c31e3c99bcd0))

# [1.3.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.2.0...@sebgroup/green-angular@1.3.0) (2023-04-13)

### Features

- **slider:** add support for unit field ([#828](https://github.com/seb-oss/green/issues/828)) ([55c5f70](https://github.com/seb-oss/green/commit/55c5f70aa2716e526ad781d2a1b71803288e75a2))

# [1.2.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.1.0...@sebgroup/green-angular@1.2.0) (2023-03-29)

### Bug Fixes

- 🐛 implement on changes to detech when value has changed ([#803](https://github.com/seb-oss/green/issues/803)) ([19fc2d9](https://github.com/seb-oss/green/commit/19fc2d907c6b69da59ecd90e2f98773cab800a77))
- 🐛 lint issues ([aec54a9](https://github.com/seb-oss/green/commit/aec54a918b6930b25cefece773ba5ee3d575f6b1))
- bump package versions ([#800](https://github.com/seb-oss/green/issues/800)) ([ec5eb19](https://github.com/seb-oss/green/commit/ec5eb19c89f94aa4a322d762138806bedaa176e3))

### Features

- 🎸 new slider component for react ([8ba92b9](https://github.com/seb-oss/green/commit/8ba92b9e24f51450cc559c54503a0d29a1349f02))

# [1.1.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.4...@sebgroup/green-angular@1.1.0) (2023-03-16)

### Bug Fixes

- 🐛 lint issues ([b49b683](https://github.com/seb-oss/green/commit/b49b6834f13085f829e22597dc642f0ae9e1a027))
- 🐛 new angular component ([9bcf96b](https://github.com/seb-oss/green/commit/9bcf96b27565e69fc821f23ed131f52d3d4d6434))
- 🐛 remove border on mozilla browsers ([091a4ce](https://github.com/seb-oss/green/commit/091a4ceabe446d1ae17117a3efa821f850512d23))
- 🐛 update based on pr comments ([0652fef](https://github.com/seb-oss/green/commit/0652fef5ca3e06601d1fad80d53ff80caee96c28))
- 🐛 use native disabled attribute ([7b23e73](https://github.com/seb-oss/green/commit/7b23e737774c6be24e9682e3adf07b8634937da8))
- **angular:** empty pagination ([1fc6e30](https://github.com/seb-oss/green/commit/1fc6e306b393f9bc5f01c5847605f62f66ac17e4))
- **chlorophyll:** reset green styles ([12c33bd](https://github.com/seb-oss/green/commit/12c33bd2ce41eca65e965f4ddc27c1f4b97b66a1))

### Features

- 🎸 add input instruction prop to the component ([d02f204](https://github.com/seb-oss/green/commit/d02f204dc4b6606b9104dcbca21be5c2540dcfb7))
- 🎸 add output events ([3dd4cf2](https://github.com/seb-oss/green/commit/3dd4cf20e970e0c000497d5464e14e6a78740fcd))
- 🎸 add placeholder prop ([7443da6](https://github.com/seb-oss/green/commit/7443da6e16660c5908b6f823d91f66a6f0a99ac0))
- 🎸 new chlorophyll slider ([312f05c](https://github.com/seb-oss/green/commit/312f05c0984c0203821573477c6b7784198d9243))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/seb-oss/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- **angular:** add pagination ([9c30c95](https://github.com/seb-oss/green/commit/9c30c9558023ba79e52112578ad5c7a35a12318b))
- **extract:** pagination i18n ([d5b74f6](https://github.com/seb-oss/green/commit/d5b74f6bf394ddfbadaf90e901d49c9e6402ed86))

## [1.0.4](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.3...@sebgroup/green-angular@1.0.4) (2023-03-01)

### Bug Fixes

- **angular:** datepicker ontouched ([dfa493e](https://github.com/seb-oss/green/commit/dfa493ebcd4571c082e6d8f91ffde1f48a2b48f6))
- **angular:** datepicker rerender ([ddebf20](https://github.com/seb-oss/green/commit/ddebf20e9a1e3f24879e79b74a326fed8eaaeb01))

## [1.0.3](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.2...@sebgroup/green-angular@1.0.3) (2023-02-28)

### Bug Fixes

- **dropdown:** multiselect inside horizontal container ([5e27cf1](https://github.com/seb-oss/green/commit/5e27cf11095bbda3f0df16b2958b278d6b2eca86))

## [1.0.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.1...@sebgroup/green-angular@1.0.2) (2023-02-28)

### Bug Fixes

- **angular:** dropdown form group ([42fbaa4](https://github.com/seb-oss/green/commit/42fbaa497b7f068d6f5ad8d8e8890784aff294be))

## [1.0.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0...@sebgroup/green-angular@1.0.1) (2023-02-27)

### Bug Fixes

- **angular:** datepicker detect changed options ([023b858](https://github.com/seb-oss/green/commit/023b858af516d7027ec78620eb86ef6650191f5c))

# [1.0.0](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@0.0.2...@sebgroup/green-angular@1.0.0) (2023-02-17)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

### chore

- 🤖 angular release 1.0.0 ([4568979](https://github.com/seb-oss/green/commit/4568979921bc434f706ea9b9baa8803403e7be05))

### BREAKING CHANGES

- 🧨 1.0.0

## [0.0.2](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@0.0.1...@sebgroup/green-angular@0.0.2) (2023-02-07)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

## [0.0.1](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.47...@sebgroup/green-angular@0.0.1) (2023-01-27)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

### Bug Fixes

- 🐛 removing trailing comma ([a0ff496](https://github.com/seb-oss/green/commit/a0ff4965a8f1a85e0d1fde9f037e2b0061ed2560))

# [1.0.0-beta.47](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.46...@sebgroup/green-angular@1.0.0-beta.47) (2023-01-26)

# [1.0.0-beta.46](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.45...@sebgroup/green-angular@1.0.0-beta.46) (2023-01-26)

### Bug Fixes

- 🐛 not updated translations on texts changes fix ([c572b1c](https://github.com/seb-oss/green/commit/c572b1ce0675cc438f4a21ab8a48c6dd6d641273))
- **accordion:** build error missing export ([746a250](https://github.com/seb-oss/green/commit/746a250a490e22d7a97e43eac56f587b16a28c0c))

### Features

- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/seb-oss/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))
- 🎸 Angular modal focus functionality ([bd41200](https://github.com/seb-oss/green/commit/bd41200a3c0e398ff68deaf40ba83d2ecc4b0f9a))

### BREAKING CHANGES

- 🧨 -

✅ Closes: -

# [1.0.0-beta.45](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.44...@sebgroup/green-angular@1.0.0-beta.45) (2023-01-12)

### Bug Fixes

- 🐛 dropdown formControl reset functionality ([c0716ad](https://github.com/seb-oss/green/commit/c0716ad47aa92dac2152471654c4bfba2893beea)), closes [#690](https://github.com/seb-oss/green/issues/690)
- 🐛 export button module ([98fa6f4](https://github.com/seb-oss/green/commit/98fa6f4ba328abf772188a642062feb47ec1f6b2))

### BREAKING CHANGES

- 🧨 --

# [1.0.0-beta.44](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.43...@sebgroup/green-angular@1.0.0-beta.44) (2022-12-23)

### Bug Fixes

- 🐛 lint issues ([803b402](https://github.com/seb-oss/green/commit/803b402a23a69dbb21fac75963768074ffb85132))
- 🐛 Usage of close in alert, badge, button, card & modal ([71f2cb3](https://github.com/seb-oss/green/commit/71f2cb32b4a002118e8500c90115ccb294091ce5))

### Features

- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/seb-oss/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))

# [1.0.0-beta.43](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.42...@sebgroup/green-angular@1.0.0-beta.43) (2022-12-12)

# [1.0.0-beta.42](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.41...@sebgroup/green-angular@1.0.0-beta.42) (2022-12-06)

# [1.0.0-beta.41](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.40...@sebgroup/green-angular@1.0.0-beta.41) (2022-11-30)

# [1.0.0-beta.40](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.39...@sebgroup/green-angular@1.0.0-beta.40) (2022-11-30)

# [1.0.0-beta.39](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.38...@sebgroup/green-angular@1.0.0-beta.39) (2022-11-28)

### Bug Fixes

- 🐛 Updated react & angular components that has fieldsets ([f4525a1](https://github.com/seb-oss/green/commit/f4525a19d0963122801a0102b928481cb4ec1414))

### Features

- 🎸 angular button ([13dac17](https://github.com/seb-oss/green/commit/13dac17f86de47c5720dade6f1734edbf9585566))
- 🎸 dropdown add formControl reset functionality ([88b3a55](https://github.com/seb-oss/green/commit/88b3a553a495b233e4287a8d23e8476be1ce0ea4))

### BREAKING CHANGES

- 🧨 -

✅ Closes: 643

# [1.0.0-beta.38](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.37...@sebgroup/green-angular@1.0.0-beta.38) (2022-11-17)

# [1.0.0-beta.37](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.36...@sebgroup/green-angular@1.0.0-beta.37) (2022-11-17)

# [1.0.0-beta.36](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.35...@sebgroup/green-angular@1.0.0-beta.36) (2022-11-11)

### Features

- 🎸 allow angular 14 ([5f61848](https://github.com/seb-oss/green/commit/5f618487f97807e28f7796707f9055bee9c79e1d)), closes [#620](https://github.com/seb-oss/green/issues/620)

# [1.0.0-beta.35](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.34...@sebgroup/green-angular@1.0.0-beta.35) (2022-11-10)

### Bug Fixes

- 🐛 Dropdown search input space bar and arrows keys fixes ([ff6785c](https://github.com/seb-oss/green/commit/ff6785c842320838b462b5901099e54143144f1a))

### BREAKING CHANGES

- 🧨 -

✅ Closes: -

# [1.0.0-beta.34](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.33...@sebgroup/green-angular@1.0.0-beta.34) (2022-11-08)

### Bug Fixes

- 🐛 failing import, style-lint, ts error ([1556856](https://github.com/seb-oss/green/commit/15568561339d04cad5a146319df51bb43c2e1934))

# [1.0.0-beta.33](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.32...@sebgroup/green-angular@1.0.0-beta.33) (2022-11-08)

# [1.0.0-beta.32](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.31...@sebgroup/green-angular@1.0.0-beta.32) (2022-11-08)

# [1.0.0-beta.31](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.30...@sebgroup/green-angular@1.0.0-beta.31) (2022-11-08)

# [1.0.0-beta.30](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.29...@sebgroup/green-angular@1.0.0-beta.30) (2022-11-08)

# [1.0.0-beta.29](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.28...@sebgroup/green-angular@1.0.0-beta.29) (2022-11-08)

### Bug Fixes

- 🐛 Removed check of observers ([23d8465](https://github.com/seb-oss/green/commit/23d846564bacbbbf329947ff6da37d113de8f081))
- 🐛 Removed unnecessary module exports ([4fc6418](https://github.com/seb-oss/green/commit/4fc6418820685db4f0c9d92837d96ec5b5d352ed))

### Features

- 🎸 Modal (Angular) ([0ad1797](https://github.com/seb-oss/green/commit/0ad17974928a966070b02cf0c86ba1c9c7c9117c))

### Performance Improvements

- **modal:** onpush strategy ([7b30b2b](https://github.com/seb-oss/green/commit/7b30b2b3f48fcf4977708730cef9789458d319cc))

# [1.0.0-beta.28](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.27...@sebgroup/green-angular@1.0.0-beta.28) (2022-10-26)

# [1.0.0-beta.27](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.26...@sebgroup/green-angular@1.0.0-beta.27) (2022-10-12)

# [1.0.0-beta.26](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.25...@sebgroup/green-angular@1.0.0-beta.26) (2022-10-07)

### Features

- **dropdown:** select by value ([e2d3c6f](https://github.com/seb-oss/green/commit/e2d3c6fe94c16a17b004d3b4dac13eaf98da138a))

# [1.0.0-beta.25](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.24...@sebgroup/green-angular@1.0.0-beta.25) (2022-10-03)

# [1.0.0-beta.24](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.23...@sebgroup/green-angular@1.0.0-beta.24) (2022-09-27)

# [1.0.0-beta.23](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.22...@sebgroup/green-angular@1.0.0-beta.23) (2022-09-23)

# [1.0.0-beta.22](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.21...@sebgroup/green-angular@1.0.0-beta.22) (2022-09-20)

# [1.0.0-beta.21](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.20...@sebgroup/green-angular@1.0.0-beta.21) (2022-09-20)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/seb-oss/green/issues/473) ([4883331](https://github.com/seb-oss/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -

# [1.0.0-beta.20](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.19...@sebgroup/green-angular@1.0.0-beta.20) (2022-08-31)

# [1.0.0-beta.19](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.18...@sebgroup/green-angular@1.0.0-beta.19) (2022-08-29)

### Bug Fixes

- 🐛 initialize badge type ([b1d4aad](https://github.com/seb-oss/green/commit/b1d4aad748482130b43afea856068d6754d29823))
- 🐛 lint issues ([8bafc63](https://github.com/seb-oss/green/commit/8bafc63975fcc5c0f3a64251f6901d346e3745a7))
- 🐛 remove component styles ([f62a9d3](https://github.com/seb-oss/green/commit/f62a9d3cf80ecdd6c11b5212b02b842777f6a76a))
- 🐛 remove div container ([e24b9e0](https://github.com/seb-oss/green/commit/e24b9e0ef647e597d29211a831742d0c2e60c46e))

### Features

- 🎸 new custom color and bg color inputs ([b16d0bb](https://github.com/seb-oss/green/commit/b16d0bb38274e5b6d7f4f1afd4f53e5d85f83482)), closes [#535](https://github.com/seb-oss/green/issues/535)

# [1.0.0-beta.18](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.17...@sebgroup/green-angular@1.0.0-beta.18) (2022-08-15)

# [1.0.0-beta.17](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.16...@sebgroup/green-angular@1.0.0-beta.17) (2022-08-15)

### Features

- **angular:** dropdown custom template ([7a40c35](https://github.com/seb-oss/green/commit/7a40c35b867a32a80671bc78057a243425836af5)), closes [#219](https://github.com/seb-oss/green/issues/219)

# [1.0.0-beta.16](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.15...@sebgroup/green-angular@1.0.0-beta.16) (2022-07-18)

### Bug Fixes

- **dropdown:** touched behavior ([d8e9bac](https://github.com/seb-oss/green/commit/d8e9baca16e7331f244d4e88e6d204b24f2c2e60))

# [1.0.0-beta.15](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.14...@sebgroup/green-angular@1.0.0-beta.15) (2022-06-28)

# [1.0.0-beta.14](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.13...@sebgroup/green-angular@1.0.0-beta.14) (2022-06-15)

# [1.0.0-beta.13](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.12...@sebgroup/green-angular@1.0.0-beta.13) (2022-06-07)

### Bug Fixes

- **angular:** datepicker - only pass valid date to datepicker ([4b652ad](https://github.com/seb-oss/green/commit/4b652ad08b1fc8039754a71e432284a05f49bc5c))
- **angular:** dropdown - select by value ([fbf0cd2](https://github.com/seb-oss/green/commit/fbf0cd2f0a5c777691cc2177099b5d38cd5ddd9e))
- **dropdown:** popover transitions out on init ([dc0b36e](https://github.com/seb-oss/green/commit/dc0b36e51733775f73e20a9c435550063586100d))

### Features

- **angular:** add date validator ([5c96635](https://github.com/seb-oss/green/commit/5c966357e5f3e3096a45306c3a1f9a13b679e77b))
- **angular:** datepicker - add support for min and max date ([fd282ac](https://github.com/seb-oss/green/commit/fd282ac8284e15da4d93b20d5535e6bf4daa5835)), closes [#503](https://github.com/seb-oss/green/issues/503)

# [1.0.0-beta.12](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.11...@sebgroup/green-angular@1.0.0-beta.12) (2022-05-05)

### Bug Fixes

- 🐛 syntax error on component template ([7bb99dc](https://github.com/seb-oss/green/commit/7bb99dc2c710fbda087e9e062585765ff76cc34e)), closes [#476](https://github.com/seb-oss/green/issues/476)
- **angular:** datepicker - only emit if value has changed ([70efa07](https://github.com/seb-oss/green/commit/70efa074f1788a611a2dbb9639fcb490d53a6389))
- **angular:** dropdown - only emit if value has changed ([05c9532](https://github.com/seb-oss/green/commit/05c95329cccb8345da0e42f795c8b4a4e733f57e))

### Features

- 🎸 add sr utilities to react and angular badge components ([3ef7da3](https://github.com/seb-oss/green/commit/3ef7da32de275a1a66e4f165f5a809099cb2c573))
- 🎸 badge component for angular ([ce6c6ad](https://github.com/seb-oss/green/commit/ce6c6adeeea008ddc55158ed4c749f29058fa998)), closes [#476](https://github.com/seb-oss/green/issues/476)
- 🎸 Moved text content to ng-content ([ea0a708](https://github.com/seb-oss/green/commit/ea0a708a3d083a3913f5b2417585f3f20533ca3f))
- **angular:** dropdown support multi select and custom option ([61d9ba6](https://github.com/seb-oss/green/commit/61d9ba6e5260306e40fe9d53f3377f2fed58baf0))

# [1.0.0-beta.11](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.10...@sebgroup/green-angular@1.0.0-beta.11) (2022-04-21)

# [1.0.0-beta.10](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.9...@sebgroup/green-angular@1.0.0-beta.10) (2022-04-20)

### Bug Fixes

- **angular:** datepicker keyboard navigation, background scroll, swipe ([d4660a8](https://github.com/seb-oss/green/commit/d4660a8efa1f032c592ca558a4937c7e6136e750))

# [1.0.0-beta.9](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.8...@sebgroup/green-angular@1.0.0-beta.9) (2022-04-15)

### Bug Fixes

- **angular:** datepicker add support for forms and value binding ([ed29a04](https://github.com/seb-oss/green/commit/ed29a040d16be89869260200067ae367c21ffaf2))
- **angular:** datepicker add year and month dropdown ([2117354](https://github.com/seb-oss/green/commit/21173542877a96b88c5d3f8b6c201bee4d3e91ac))
- **angular:** datepicker input for label ([50500c5](https://github.com/seb-oss/green/commit/50500c587512067a252d7e977fe130c4d9642916))
- **angular:** datepicker validation ([9112ee0](https://github.com/seb-oss/green/commit/9112ee012fad481a1866efe8bee05a740f4abe09))
- **angular:** dropdown aria attributes ([24fefcd](https://github.com/seb-oss/green/commit/24fefcdcacc2730404de4fa81167ece226379af5))
- **angular:** dropdown null check and use existing id ([a7b4446](https://github.com/seb-oss/green/commit/a7b44462c923165d4518dfcb127ffec849389301))
- **datepicker:** add calendar icon ([19b8599](https://github.com/seb-oss/green/commit/19b8599e77269d1c4cc5d180c4f6547b0d84d45f))
- **dropdown:** emit selected value ([fb3f993](https://github.com/seb-oss/green/commit/fb3f9931807ee2ae374ef2c5d1be936119837551))

### Features

- **angular:** add draft for datepicker ([e04cbdb](https://github.com/seb-oss/green/commit/e04cbdbc1f036309ea5353c06a73a3d8feb19b4a))
- **datepicker:** add option for week numbers, fix week days ([83c9ffa](https://github.com/seb-oss/green/commit/83c9ffa3c69dca4f423e561006104140a02fa6ae))
- **datepicker:** add today ([076b1a4](https://github.com/seb-oss/green/commit/076b1a43774c0e0d3228f1fc73bbc9678b351d25))

# [1.0.0-beta.8](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.7...@sebgroup/green-angular@1.0.0-beta.8) (2022-04-07)

### Bug Fixes

- **angular:** dropdown experimental support for validation ([bc452a1](https://github.com/seb-oss/green/commit/bc452a101884a7b71ffaf953a19717d8aeb66247))
- **angular:** dropdown support for label ([1754f7c](https://github.com/seb-oss/green/commit/1754f7ce746844e7364c859fa6ad2dc55d74d9b4))
- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/seb-oss/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))
- **dropdown:** use type button (prevent form submit) ([49075db](https://github.com/seb-oss/green/commit/49075db950349a033469c5c7d8a86fddfcf2e867))

# [1.0.0-beta.7](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.6...@sebgroup/green-angular@1.0.0-beta.7) (2022-03-24)

### Bug Fixes

- **deps-peer:** support rxjs 7 for angular ([721ccd7](https://github.com/seb-oss/green/commit/721ccd71cb65fe9298aa1886fbf3b645f949b80d))
- **dropdown:** default option selected ([7ebfa91](https://github.com/seb-oss/green/commit/7ebfa917b1e840d744923ad48e8d07ccbe6d62f9))

### Features

- **dropdown:** support without angular forms ([8486611](https://github.com/seb-oss/green/commit/84866113cb1515902d35e6205a3b8e79ee9e7539))

# [1.0.0-beta.6](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.5...@sebgroup/green-angular@1.0.0-beta.6) (2022-02-17)

# [1.0.0-beta.5](https://github.com/seb-oss/green/compare/@sebgroup/green-angular@1.0.0-beta.4...@sebgroup/green-angular@1.0.0-beta.5) (2022-02-08)
