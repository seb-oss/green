# Changelog

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

## [3.0.3](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@3.0.2...@sebgroup/green-angular@3.0.3) (2024-01-30)

### Bug Fixes

- **angular:** add export for Core Wrapper Module ([#1184](https://github.com/sebgroup/green/issues/1184)) ([5b23830](https://github.com/sebgroup/green/commit/5b23830f4c4db8119c1f4d606d9f016801500b70))

## [3.0.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@3.0.1...@sebgroup/green-angular@3.0.2) (2024-01-26)

### Bug Fixes

- **angular/modals:** apply updated class names ([#1179](https://github.com/sebgroup/green/issues/1179)) ([9985503](https://github.com/sebgroup/green/commit/9985503fcac7e09bb6ca5d58810a5c09ea15023a))

## [3.0.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@3.0.0...@sebgroup/green-angular@3.0.1) (2024-01-22)

### Bug Fixes

- **angular/dropdown:** incorrectly supplying value in filter callback adapter ([#1167](https://github.com/sebgroup/green/issues/1167)) ([101a23c](https://github.com/sebgroup/green/commit/101a23c08b8b70f0179ae0829f7e8b772ea7317e))
- **datepicker:** forward all props to web component ([#1168](https://github.com/sebgroup/green/issues/1168)) ([00b0922](https://github.com/sebgroup/green/commit/00b092271f345abe521e8af74b7c4392d8b8db4c))

# [3.0.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.1.3...@sebgroup/green-angular@3.0.0) (2024-01-19)

### Bug Fixes

- **dropdown:** pass down `syncPopoverWidth` to core component ([#1161](https://github.com/sebgroup/green/issues/1161)) ([4c48135](https://github.com/sebgroup/green/commit/4c48135e465af81ef5074753f2d819244ac3a9d5))

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/sebgroup/green/issues/1154)) ([707d456](https://github.com/sebgroup/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))
- **datepicker:** replace underlying implementation in React and Angular ([#1164](https://github.com/sebgroup/green/issues/1164)) ([ececf0a](https://github.com/sebgroup/green/commit/ececf0aa12078a7b4fbeeae95861cf75e9194e31))

### BREAKING CHANGES

- **datepicker:** \* `locale` option has been removed. Localization is handled
  in Green Core by `@lit/localize`
- `currentDate` is deprecated. Use `value` instead.
- `selectedDate` is deprecated. Use `value` instead.
- `useCurrentTime` is removed
- `closeOnSelect` is removed (popover will now always close when a value is selected)
- `DatepickerOptions` moved from Extract and can be imported from React or Angular package instead.

## [2.1.3](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.1.2...@sebgroup/green-angular@2.1.3) (2024-01-16)

### Bug Fixes

- **angular/pagination:** fix keyboard navigation ([#1157](https://github.com/sebgroup/green/issues/1157)) ([cb9ba95](https://github.com/sebgroup/green/commit/cb9ba9575bc6533ab154e0d15c9f46aa29a74fba))

## [2.1.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.1.1...@sebgroup/green-angular@2.1.2) (2023-12-06)

### Bug Fixes

- 🐛 update track background when min and max values change ([#1146](https://github.com/sebgroup/green/issues/1146)) ([17d0b80](https://github.com/sebgroup/green/commit/17d0b80283a0601821c5205e4a3d719b8c572586))

## [2.1.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.1.0...@sebgroup/green-angular@2.1.1) (2023-11-29)

### Bug Fixes

- **core:** downgrade to `lit@ˆ2.8.0` ([#1134](https://github.com/sebgroup/green/issues/1134)) ([bee1a90](https://github.com/sebgroup/green/commit/bee1a90bb48c2855b23849fbb30daaa991138dc8))

# [2.1.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.1.0) (2023-11-22)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/sebgroup/green/issues/1104)) ([8c88de3](https://github.com/sebgroup/green/commit/8c88de30c48ddb7e0a4a8abdc3b97d8310183069))
- **dropdown:** hidden overflow with ellipsis by default ([#1114](https://github.com/sebgroup/green/issues/1114)) ([9a2cce7](https://github.com/sebgroup/green/commit/9a2cce7cb7549ef3bff6b4086407fcb80f49cc72))

### Features

- **core/context-menu:** add context menu component to Green Core, and use for Angular and React ([#1125](https://github.com/sebgroup/green/issues/1125)) ([1aacb43](https://github.com/sebgroup/green/commit/1aacb43d9afedd34316f2c96c10d534b5d487aa6))

## [2.0.4](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.0.4) (2023-11-08)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/sebgroup/green/issues/1104)) ([8c88de3](https://github.com/sebgroup/green/commit/8c88de30c48ddb7e0a4a8abdc3b97d8310183069))

## [2.0.4](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.3...@sebgroup/green-angular@2.0.4) (2023-11-08)

### Bug Fixes

- 🐛 angular modal z-index ([#1104](https://github.com/sebgroup/green/issues/1104)) ([28b6b83](https://github.com/sebgroup/green/commit/28b6b83fcc1ab7699ee28d20b0a89e6740361b75))

## [2.0.3](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.2...@sebgroup/green-angular@2.0.3) (2023-11-07)

### Bug Fixes

- **angular/context-menu:** remove border ([#1097](https://github.com/sebgroup/green/issues/1097)) ([4ce4939](https://github.com/sebgroup/green/commit/4ce493904d5b1e9487debd17cb34385e5d8cbd8b))

## [2.0.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.1...@sebgroup/green-angular@2.0.2) (2023-11-01)

### Bug Fixes

- **angular/dropdown:** correct additional regressions ([#1087](https://github.com/sebgroup/green/issues/1087)) ([57f7f4b](https://github.com/sebgroup/green/commit/57f7f4b685efab17fba482de3fd66e23f32e3486))

## [2.0.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@2.0.0...@sebgroup/green-angular@2.0.1) (2023-10-31)

### Bug Fixes

- **angular/dropdown:** issues with Dropdown custom buttons ([#1084](https://github.com/sebgroup/green/issues/1084)) ([eebb5e4](https://github.com/sebgroup/green/commit/eebb5e4cc75d8415edcb7efc125befac4ca1dde3))

# [2.0.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.10.0...@sebgroup/green-angular@2.0.0) (2023-10-30)

### Bug Fixes

- **context-menu:** context menu imports and docs ([#1074](https://github.com/sebgroup/green/issues/1074)) ([34b3a35](https://github.com/sebgroup/green/commit/34b3a35e284e4a6c7c1acc145ca80b869574dee5))
- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/sebgroup/green/issues/1016)) ([7f6f8f5](https://github.com/sebgroup/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

- Updated focus states in Chlorophyll (#1050) ([d9ee451](https://github.com/sebgroup/green/commit/d9ee451030387576f2d9b768de665be2876e2ad9)), closes [#1050](https://github.com/sebgroup/green/issues/1050)

### BREAKING CHANGES

- Some grouped inputs will need the `group-focus` class added to the wrapper
- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

# [1.10.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.9.0...@sebgroup/green-angular@1.10.0) (2023-10-11)

### Features

- **slider:** use `inputmode='numeric'` and add `enterkeyhint` support ([#1049](https://github.com/sebgroup/green/issues/1049)) ([44ac574](https://github.com/sebgroup/green/commit/44ac574112b5621c87f3688f02669a9d2071160f))

# [1.9.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.5...@sebgroup/green-angular@1.9.0) (2023-09-01)

### Features

- **angular:** modal customizable header and footer ([#982](https://github.com/sebgroup/green/issues/982)) ([cdc1668](https://github.com/sebgroup/green/commit/cdc1668013316459c36d13f55a6cc981e16f377b))

## [1.8.5](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.4...@sebgroup/green-angular@1.8.5) (2023-08-30)

### Bug Fixes

- 🐛 wrong position after zoom-in due to cached position ([#976](https://github.com/sebgroup/green/issues/976)) ([b114586](https://github.com/sebgroup/green/commit/b11458689acfcf2f6c7683c31684c86d69696357))
- Angular modal scroll iOS ([#979](https://github.com/sebgroup/green/issues/979)) ([6a165a2](https://github.com/sebgroup/green/commit/6a165a2e532af64b194097e43e67c218230f49a2))

## [1.8.4](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.3...@sebgroup/green-angular@1.8.4) (2023-08-23)

### Bug Fixes

- 🐛 wrong calculation of y position for context menu ([#973](https://github.com/sebgroup/green/issues/973)) ([d90ccc8](https://github.com/sebgroup/green/commit/d90ccc87cd62c0eecdca01f04e705c5127af69ca))

## [1.8.3](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.2...@sebgroup/green-angular@1.8.3) (2023-08-21)

### Bug Fixes

- 🐛 fix context menu position in relative parent ([#970](https://github.com/sebgroup/green/issues/970)) ([d8f208e](https://github.com/sebgroup/green/commit/d8f208ed4766e0b940ebf4491ca4158715380d0f))

## [1.8.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.1...@sebgroup/green-angular@1.8.2) (2023-08-17)

### Bug Fixes

- **datepicker:** correctly reflect state after formGroup reset ([#964](https://github.com/sebgroup/green/issues/964)) ([b300d36](https://github.com/sebgroup/green/commit/b300d360232f8fcbabc84dd42ce6867e023e92a8))

## [1.8.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.8.0...@sebgroup/green-angular@1.8.1) (2023-08-08)

# [1.8.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.7.2...@sebgroup/green-angular@1.8.0) (2023-07-07)

### Bug Fixes

- **slider:** mobile version, small input on desktop, added `aria-labelledby` ([#929](https://github.com/sebgroup/green/issues/929)) ([456c934](https://github.com/sebgroup/green/commit/456c934443e94766231c284b3f1eaa4e8bc6b040)), closes [#902](https://github.com/sebgroup/green/issues/902) [#920](https://github.com/sebgroup/green/issues/920) [#923](https://github.com/sebgroup/green/issues/923)

### Features

- **dropdown:** 🎸 new input to set fixed placement of popover ([#930](https://github.com/sebgroup/green/issues/930)) ([ff782d6](https://github.com/sebgroup/green/commit/ff782d67602883e7f56af239d08a8c44a264f321))

## [1.7.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.7.1...@sebgroup/green-angular@1.7.2) (2023-05-24)

### Bug Fixes

- 🐛 Context menu on scroll markForCheck and css fixes ([#897](https://github.com/sebgroup/green/issues/897)) ([89b83fc](https://github.com/sebgroup/green/commit/89b83fc4d09456b8f983eb2ece14fa9ea182fc5a))

## [1.7.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.7.0...@sebgroup/green-angular@1.7.1) (2023-05-12)

### Bug Fixes

- 🐛 context-menu close on scroll or resize, button hover ([e5789c5](https://github.com/sebgroup/green/commit/e5789c535c5dfe8d25bafe495acad7687c45fbe3))

# [1.7.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.6.0...@sebgroup/green-angular@1.7.0) (2023-05-05)

### Features

- **dropdown:** allow custom template for dropdown button ([#860](https://github.com/sebgroup/green/issues/860)) ([4a05eea](https://github.com/sebgroup/green/commit/4a05eeac9769d8c7c1a0838e14b76305d8edcd89))

# [1.6.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.5.1...@sebgroup/green-angular@1.6.0) (2023-05-03)

### Bug Fixes

- **context-menu:** add missing export ([#861](https://github.com/sebgroup/green/issues/861)) ([af31fd3](https://github.com/sebgroup/green/commit/af31fd30cb2883cfda09485d23b07dd32f653a2b))

### Features

- 🎸 Context Menu ([#852](https://github.com/sebgroup/green/issues/852)) ([8ede687](https://github.com/sebgroup/green/commit/8ede687c363f3fbc9760d958ae17a9c467ca90e6))

## [1.5.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.5.0...@sebgroup/green-angular@1.5.1) (2023-05-03)

### Bug Fixes

- 🐛 Missing Output decorator to wizard step card ([#859](https://github.com/sebgroup/green/issues/859)) ([68dd83e](https://github.com/sebgroup/green/commit/68dd83ead59181067337932c284d69ca0958befe))

# [1.5.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.4.0...@sebgroup/green-angular@1.5.0) (2023-05-02)

### Features

- **wizard-step-card:** 🎸 Add handle edit click event emitter ([#856](https://github.com/sebgroup/green/issues/856)) ([dc21976](https://github.com/sebgroup/green/commit/dc219760024cb06f7d39a3189136ac7c51353b31))

# [1.4.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.3.1...@sebgroup/green-angular@1.4.0) (2023-04-28)

### Bug Fixes

- build issue with InPageWizard ([#855](https://github.com/sebgroup/green/issues/855)) ([8949282](https://github.com/sebgroup/green/commit/89492823816d30d78ec87a85410323d34440bdf2))

### Features

- 🎸 Angular in-page wizard step card ([#853](https://github.com/sebgroup/green/issues/853)) ([c8b5eb4](https://github.com/sebgroup/green/commit/c8b5eb4d5140e9636538f329096e11f715884fc2))

## [1.3.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.3.0...@sebgroup/green-angular@1.3.1) (2023-04-19)

### Bug Fixes

- **angular:** downgrade base version of Angular to 14.3.0 ([#851](https://github.com/sebgroup/green/issues/851)) ([44b3819](https://github.com/sebgroup/green/commit/44b3819d847f1b255f1fc103fad0c31e3c99bcd0))

# [1.3.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.2.0...@sebgroup/green-angular@1.3.0) (2023-04-13)

### Features

- **slider:** add support for unit field ([#828](https://github.com/sebgroup/green/issues/828)) ([55c5f70](https://github.com/sebgroup/green/commit/55c5f70aa2716e526ad781d2a1b71803288e75a2))

# [1.2.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.1.0...@sebgroup/green-angular@1.2.0) (2023-03-29)

### Bug Fixes

- 🐛 implement on changes to detech when value has changed ([#803](https://github.com/sebgroup/green/issues/803)) ([19fc2d9](https://github.com/sebgroup/green/commit/19fc2d907c6b69da59ecd90e2f98773cab800a77))
- 🐛 lint issues ([aec54a9](https://github.com/sebgroup/green/commit/aec54a918b6930b25cefece773ba5ee3d575f6b1))
- bump package versions ([#800](https://github.com/sebgroup/green/issues/800)) ([ec5eb19](https://github.com/sebgroup/green/commit/ec5eb19c89f94aa4a322d762138806bedaa176e3))

### Features

- 🎸 new slider component for react ([8ba92b9](https://github.com/sebgroup/green/commit/8ba92b9e24f51450cc559c54503a0d29a1349f02))

# [1.1.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.4...@sebgroup/green-angular@1.1.0) (2023-03-16)

### Bug Fixes

- 🐛 lint issues ([b49b683](https://github.com/sebgroup/green/commit/b49b6834f13085f829e22597dc642f0ae9e1a027))
- 🐛 new angular component ([9bcf96b](https://github.com/sebgroup/green/commit/9bcf96b27565e69fc821f23ed131f52d3d4d6434))
- 🐛 remove border on mozilla browsers ([091a4ce](https://github.com/sebgroup/green/commit/091a4ceabe446d1ae17117a3efa821f850512d23))
- 🐛 update based on pr comments ([0652fef](https://github.com/sebgroup/green/commit/0652fef5ca3e06601d1fad80d53ff80caee96c28))
- 🐛 use native disabled attribute ([7b23e73](https://github.com/sebgroup/green/commit/7b23e737774c6be24e9682e3adf07b8634937da8))
- **angular:** empty pagination ([1fc6e30](https://github.com/sebgroup/green/commit/1fc6e306b393f9bc5f01c5847605f62f66ac17e4))
- **chlorophyll:** reset green styles ([12c33bd](https://github.com/sebgroup/green/commit/12c33bd2ce41eca65e965f4ddc27c1f4b97b66a1))

### Features

- 🎸 add input instruction prop to the component ([d02f204](https://github.com/sebgroup/green/commit/d02f204dc4b6606b9104dcbca21be5c2540dcfb7))
- 🎸 add output events ([3dd4cf2](https://github.com/sebgroup/green/commit/3dd4cf20e970e0c000497d5464e14e6a78740fcd))
- 🎸 add placeholder prop ([7443da6](https://github.com/sebgroup/green/commit/7443da6e16660c5908b6f823d91f66a6f0a99ac0))
- 🎸 new chlorophyll slider ([312f05c](https://github.com/sebgroup/green/commit/312f05c0984c0203821573477c6b7784198d9243))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/sebgroup/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- **angular:** add pagination ([9c30c95](https://github.com/sebgroup/green/commit/9c30c9558023ba79e52112578ad5c7a35a12318b))
- **extract:** pagination i18n ([d5b74f6](https://github.com/sebgroup/green/commit/d5b74f6bf394ddfbadaf90e901d49c9e6402ed86))

## [1.0.4](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.3...@sebgroup/green-angular@1.0.4) (2023-03-01)

### Bug Fixes

- **angular:** datepicker ontouched ([dfa493e](https://github.com/sebgroup/green/commit/dfa493ebcd4571c082e6d8f91ffde1f48a2b48f6))
- **angular:** datepicker rerender ([ddebf20](https://github.com/sebgroup/green/commit/ddebf20e9a1e3f24879e79b74a326fed8eaaeb01))

## [1.0.3](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.2...@sebgroup/green-angular@1.0.3) (2023-02-28)

### Bug Fixes

- **dropdown:** multiselect inside horizontal container ([5e27cf1](https://github.com/sebgroup/green/commit/5e27cf11095bbda3f0df16b2958b278d6b2eca86))

## [1.0.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.1...@sebgroup/green-angular@1.0.2) (2023-02-28)

### Bug Fixes

- **angular:** dropdown form group ([42fbaa4](https://github.com/sebgroup/green/commit/42fbaa497b7f068d6f5ad8d8e8890784aff294be))

## [1.0.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0...@sebgroup/green-angular@1.0.1) (2023-02-27)

### Bug Fixes

- **angular:** datepicker detect changed options ([023b858](https://github.com/sebgroup/green/commit/023b858af516d7027ec78620eb86ef6650191f5c))

# [1.0.0](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@0.0.2...@sebgroup/green-angular@1.0.0) (2023-02-17)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

### chore

- 🤖 angular release 1.0.0 ([4568979](https://github.com/sebgroup/green/commit/4568979921bc434f706ea9b9baa8803403e7be05))

### BREAKING CHANGES

- 🧨 1.0.0

## [0.0.2](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@0.0.1...@sebgroup/green-angular@0.0.2) (2023-02-07)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

## [0.0.1](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.47...@sebgroup/green-angular@0.0.1) (2023-01-27)

### Dependency Updates

- `chlorophyll` updated to version `1.0.0`
- `extract` updated to version `1.0.0`

### Bug Fixes

- 🐛 removing trailing comma ([a0ff496](https://github.com/sebgroup/green/commit/a0ff4965a8f1a85e0d1fde9f037e2b0061ed2560))

# [1.0.0-beta.47](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.46...@sebgroup/green-angular@1.0.0-beta.47) (2023-01-26)

# [1.0.0-beta.46](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.45...@sebgroup/green-angular@1.0.0-beta.46) (2023-01-26)

### Bug Fixes

- 🐛 not updated translations on texts changes fix ([c572b1c](https://github.com/sebgroup/green/commit/c572b1ce0675cc438f4a21ab8a48c6dd6d641273))
- **accordion:** build error missing export ([746a250](https://github.com/sebgroup/green/commit/746a250a490e22d7a97e43eac56f587b16a28c0c))

### Features

- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/sebgroup/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))
- 🎸 Angular modal focus functionality ([bd41200](https://github.com/sebgroup/green/commit/bd41200a3c0e398ff68deaf40ba83d2ecc4b0f9a))

### BREAKING CHANGES

- 🧨 -

✅ Closes: -

# [1.0.0-beta.45](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.44...@sebgroup/green-angular@1.0.0-beta.45) (2023-01-12)

### Bug Fixes

- 🐛 dropdown formControl reset functionality ([c0716ad](https://github.com/sebgroup/green/commit/c0716ad47aa92dac2152471654c4bfba2893beea)), closes [#690](https://github.com/sebgroup/green/issues/690)
- 🐛 export button module ([98fa6f4](https://github.com/sebgroup/green/commit/98fa6f4ba328abf772188a642062feb47ec1f6b2))

### BREAKING CHANGES

- 🧨 --

# [1.0.0-beta.44](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.43...@sebgroup/green-angular@1.0.0-beta.44) (2022-12-23)

### Bug Fixes

- 🐛 lint issues ([803b402](https://github.com/sebgroup/green/commit/803b402a23a69dbb21fac75963768074ffb85132))
- 🐛 Usage of close in alert, badge, button, card & modal ([71f2cb3](https://github.com/sebgroup/green/commit/71f2cb32b4a002118e8500c90115ccb294091ce5))

### Features

- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/sebgroup/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))

# [1.0.0-beta.43](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.42...@sebgroup/green-angular@1.0.0-beta.43) (2022-12-12)

# [1.0.0-beta.42](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.41...@sebgroup/green-angular@1.0.0-beta.42) (2022-12-06)

# [1.0.0-beta.41](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.40...@sebgroup/green-angular@1.0.0-beta.41) (2022-11-30)

# [1.0.0-beta.40](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.39...@sebgroup/green-angular@1.0.0-beta.40) (2022-11-30)

# [1.0.0-beta.39](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.38...@sebgroup/green-angular@1.0.0-beta.39) (2022-11-28)

### Bug Fixes

- 🐛 Updated react & angular components that has fieldsets ([f4525a1](https://github.com/sebgroup/green/commit/f4525a19d0963122801a0102b928481cb4ec1414))

### Features

- 🎸 angular button ([13dac17](https://github.com/sebgroup/green/commit/13dac17f86de47c5720dade6f1734edbf9585566))
- 🎸 dropdown add formControl reset functionality ([88b3a55](https://github.com/sebgroup/green/commit/88b3a553a495b233e4287a8d23e8476be1ce0ea4))

### BREAKING CHANGES

- 🧨 -

✅ Closes: 643

# [1.0.0-beta.38](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.37...@sebgroup/green-angular@1.0.0-beta.38) (2022-11-17)

# [1.0.0-beta.37](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.36...@sebgroup/green-angular@1.0.0-beta.37) (2022-11-17)

# [1.0.0-beta.36](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.35...@sebgroup/green-angular@1.0.0-beta.36) (2022-11-11)

### Features

- 🎸 allow angular 14 ([5f61848](https://github.com/sebgroup/green/commit/5f618487f97807e28f7796707f9055bee9c79e1d)), closes [#620](https://github.com/sebgroup/green/issues/620)

# [1.0.0-beta.35](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.34...@sebgroup/green-angular@1.0.0-beta.35) (2022-11-10)

### Bug Fixes

- 🐛 Dropdown search input space bar and arrows keys fixes ([ff6785c](https://github.com/sebgroup/green/commit/ff6785c842320838b462b5901099e54143144f1a))

### BREAKING CHANGES

- 🧨 -

✅ Closes: -

# [1.0.0-beta.34](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.33...@sebgroup/green-angular@1.0.0-beta.34) (2022-11-08)

### Bug Fixes

- 🐛 failing import, style-lint, ts error ([1556856](https://github.com/sebgroup/green/commit/15568561339d04cad5a146319df51bb43c2e1934))

# [1.0.0-beta.33](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.32...@sebgroup/green-angular@1.0.0-beta.33) (2022-11-08)

# [1.0.0-beta.32](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.31...@sebgroup/green-angular@1.0.0-beta.32) (2022-11-08)

# [1.0.0-beta.31](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.30...@sebgroup/green-angular@1.0.0-beta.31) (2022-11-08)

# [1.0.0-beta.30](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.29...@sebgroup/green-angular@1.0.0-beta.30) (2022-11-08)

# [1.0.0-beta.29](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.28...@sebgroup/green-angular@1.0.0-beta.29) (2022-11-08)

### Bug Fixes

- 🐛 Removed check of observers ([23d8465](https://github.com/sebgroup/green/commit/23d846564bacbbbf329947ff6da37d113de8f081))
- 🐛 Removed unnecessary module exports ([4fc6418](https://github.com/sebgroup/green/commit/4fc6418820685db4f0c9d92837d96ec5b5d352ed))

### Features

- 🎸 Modal (Angular) ([0ad1797](https://github.com/sebgroup/green/commit/0ad17974928a966070b02cf0c86ba1c9c7c9117c))

### Performance Improvements

- **modal:** onpush strategy ([7b30b2b](https://github.com/sebgroup/green/commit/7b30b2b3f48fcf4977708730cef9789458d319cc))

# [1.0.0-beta.28](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.27...@sebgroup/green-angular@1.0.0-beta.28) (2022-10-26)

# [1.0.0-beta.27](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.26...@sebgroup/green-angular@1.0.0-beta.27) (2022-10-12)

# [1.0.0-beta.26](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.25...@sebgroup/green-angular@1.0.0-beta.26) (2022-10-07)

### Features

- **dropdown:** select by value ([e2d3c6f](https://github.com/sebgroup/green/commit/e2d3c6fe94c16a17b004d3b4dac13eaf98da138a))

# [1.0.0-beta.25](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.24...@sebgroup/green-angular@1.0.0-beta.25) (2022-10-03)

# [1.0.0-beta.24](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.23...@sebgroup/green-angular@1.0.0-beta.24) (2022-09-27)

# [1.0.0-beta.23](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.22...@sebgroup/green-angular@1.0.0-beta.23) (2022-09-23)

# [1.0.0-beta.22](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.21...@sebgroup/green-angular@1.0.0-beta.22) (2022-09-20)

# [1.0.0-beta.21](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.20...@sebgroup/green-angular@1.0.0-beta.21) (2022-09-20)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/sebgroup/green/issues/473) ([4883331](https://github.com/sebgroup/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -

# [1.0.0-beta.20](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.19...@sebgroup/green-angular@1.0.0-beta.20) (2022-08-31)

# [1.0.0-beta.19](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.18...@sebgroup/green-angular@1.0.0-beta.19) (2022-08-29)

### Bug Fixes

- 🐛 initialize badge type ([b1d4aad](https://github.com/sebgroup/green/commit/b1d4aad748482130b43afea856068d6754d29823))
- 🐛 lint issues ([8bafc63](https://github.com/sebgroup/green/commit/8bafc63975fcc5c0f3a64251f6901d346e3745a7))
- 🐛 remove component styles ([f62a9d3](https://github.com/sebgroup/green/commit/f62a9d3cf80ecdd6c11b5212b02b842777f6a76a))
- 🐛 remove div container ([e24b9e0](https://github.com/sebgroup/green/commit/e24b9e0ef647e597d29211a831742d0c2e60c46e))

### Features

- 🎸 new custom color and bg color inputs ([b16d0bb](https://github.com/sebgroup/green/commit/b16d0bb38274e5b6d7f4f1afd4f53e5d85f83482)), closes [#535](https://github.com/sebgroup/green/issues/535)

# [1.0.0-beta.18](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.17...@sebgroup/green-angular@1.0.0-beta.18) (2022-08-15)

# [1.0.0-beta.17](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.16...@sebgroup/green-angular@1.0.0-beta.17) (2022-08-15)

### Features

- **angular:** dropdown custom template ([7a40c35](https://github.com/sebgroup/green/commit/7a40c35b867a32a80671bc78057a243425836af5)), closes [#219](https://github.com/sebgroup/green/issues/219)

# [1.0.0-beta.16](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.15...@sebgroup/green-angular@1.0.0-beta.16) (2022-07-18)

### Bug Fixes

- **dropdown:** touched behavior ([d8e9bac](https://github.com/sebgroup/green/commit/d8e9baca16e7331f244d4e88e6d204b24f2c2e60))

# [1.0.0-beta.15](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.14...@sebgroup/green-angular@1.0.0-beta.15) (2022-06-28)

# [1.0.0-beta.14](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.13...@sebgroup/green-angular@1.0.0-beta.14) (2022-06-15)

# [1.0.0-beta.13](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.12...@sebgroup/green-angular@1.0.0-beta.13) (2022-06-07)

### Bug Fixes

- **angular:** datepicker - only pass valid date to datepicker ([4b652ad](https://github.com/sebgroup/green/commit/4b652ad08b1fc8039754a71e432284a05f49bc5c))
- **angular:** dropdown - select by value ([fbf0cd2](https://github.com/sebgroup/green/commit/fbf0cd2f0a5c777691cc2177099b5d38cd5ddd9e))
- **dropdown:** popover transitions out on init ([dc0b36e](https://github.com/sebgroup/green/commit/dc0b36e51733775f73e20a9c435550063586100d))

### Features

- **angular:** add date validator ([5c96635](https://github.com/sebgroup/green/commit/5c966357e5f3e3096a45306c3a1f9a13b679e77b))
- **angular:** datepicker - add support for min and max date ([fd282ac](https://github.com/sebgroup/green/commit/fd282ac8284e15da4d93b20d5535e6bf4daa5835)), closes [#503](https://github.com/sebgroup/green/issues/503)

# [1.0.0-beta.12](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.11...@sebgroup/green-angular@1.0.0-beta.12) (2022-05-05)

### Bug Fixes

- 🐛 syntax error on component template ([7bb99dc](https://github.com/sebgroup/green/commit/7bb99dc2c710fbda087e9e062585765ff76cc34e)), closes [#476](https://github.com/sebgroup/green/issues/476)
- **angular:** datepicker - only emit if value has changed ([70efa07](https://github.com/sebgroup/green/commit/70efa074f1788a611a2dbb9639fcb490d53a6389))
- **angular:** dropdown - only emit if value has changed ([05c9532](https://github.com/sebgroup/green/commit/05c95329cccb8345da0e42f795c8b4a4e733f57e))

### Features

- 🎸 add sr utilities to react and angular badge components ([3ef7da3](https://github.com/sebgroup/green/commit/3ef7da32de275a1a66e4f165f5a809099cb2c573))
- 🎸 badge component for angular ([ce6c6ad](https://github.com/sebgroup/green/commit/ce6c6adeeea008ddc55158ed4c749f29058fa998)), closes [#476](https://github.com/sebgroup/green/issues/476)
- 🎸 Moved text content to ng-content ([ea0a708](https://github.com/sebgroup/green/commit/ea0a708a3d083a3913f5b2417585f3f20533ca3f))
- **angular:** dropdown support multi select and custom option ([61d9ba6](https://github.com/sebgroup/green/commit/61d9ba6e5260306e40fe9d53f3377f2fed58baf0))

# [1.0.0-beta.11](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.10...@sebgroup/green-angular@1.0.0-beta.11) (2022-04-21)

# [1.0.0-beta.10](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.9...@sebgroup/green-angular@1.0.0-beta.10) (2022-04-20)

### Bug Fixes

- **angular:** datepicker keyboard navigation, background scroll, swipe ([d4660a8](https://github.com/sebgroup/green/commit/d4660a8efa1f032c592ca558a4937c7e6136e750))

# [1.0.0-beta.9](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.8...@sebgroup/green-angular@1.0.0-beta.9) (2022-04-15)

### Bug Fixes

- **angular:** datepicker add support for forms and value binding ([ed29a04](https://github.com/sebgroup/green/commit/ed29a040d16be89869260200067ae367c21ffaf2))
- **angular:** datepicker add year and month dropdown ([2117354](https://github.com/sebgroup/green/commit/21173542877a96b88c5d3f8b6c201bee4d3e91ac))
- **angular:** datepicker input for label ([50500c5](https://github.com/sebgroup/green/commit/50500c587512067a252d7e977fe130c4d9642916))
- **angular:** datepicker validation ([9112ee0](https://github.com/sebgroup/green/commit/9112ee012fad481a1866efe8bee05a740f4abe09))
- **angular:** dropdown aria attributes ([24fefcd](https://github.com/sebgroup/green/commit/24fefcdcacc2730404de4fa81167ece226379af5))
- **angular:** dropdown null check and use existing id ([a7b4446](https://github.com/sebgroup/green/commit/a7b44462c923165d4518dfcb127ffec849389301))
- **datepicker:** add calendar icon ([19b8599](https://github.com/sebgroup/green/commit/19b8599e77269d1c4cc5d180c4f6547b0d84d45f))
- **dropdown:** emit selected value ([fb3f993](https://github.com/sebgroup/green/commit/fb3f9931807ee2ae374ef2c5d1be936119837551))

### Features

- **angular:** add draft for datepicker ([e04cbdb](https://github.com/sebgroup/green/commit/e04cbdbc1f036309ea5353c06a73a3d8feb19b4a))
- **datepicker:** add option for week numbers, fix week days ([83c9ffa](https://github.com/sebgroup/green/commit/83c9ffa3c69dca4f423e561006104140a02fa6ae))
- **datepicker:** add today ([076b1a4](https://github.com/sebgroup/green/commit/076b1a43774c0e0d3228f1fc73bbc9678b351d25))

# [1.0.0-beta.8](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.7...@sebgroup/green-angular@1.0.0-beta.8) (2022-04-07)

### Bug Fixes

- **angular:** dropdown experimental support for validation ([bc452a1](https://github.com/sebgroup/green/commit/bc452a101884a7b71ffaf953a19717d8aeb66247))
- **angular:** dropdown support for label ([1754f7c](https://github.com/sebgroup/green/commit/1754f7ce746844e7364c859fa6ad2dc55d74d9b4))
- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/sebgroup/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))
- **dropdown:** use type button (prevent form submit) ([49075db](https://github.com/sebgroup/green/commit/49075db950349a033469c5c7d8a86fddfcf2e867))

# [1.0.0-beta.7](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.6...@sebgroup/green-angular@1.0.0-beta.7) (2022-03-24)

### Bug Fixes

- **deps-peer:** support rxjs 7 for angular ([721ccd7](https://github.com/sebgroup/green/commit/721ccd71cb65fe9298aa1886fbf3b645f949b80d))
- **dropdown:** default option selected ([7ebfa91](https://github.com/sebgroup/green/commit/7ebfa917b1e840d744923ad48e8d07ccbe6d62f9))

### Features

- **dropdown:** support without angular forms ([8486611](https://github.com/sebgroup/green/commit/84866113cb1515902d35e6205a3b8e79ee9e7539))

# [1.0.0-beta.6](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.5...@sebgroup/green-angular@1.0.0-beta.6) (2022-02-17)

# [1.0.0-beta.5](https://github.com/sebgroup/green/compare/@sebgroup/green-angular@1.0.0-beta.4...@sebgroup/green-angular@1.0.0-beta.5) (2022-02-08)
