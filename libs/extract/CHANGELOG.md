# Changelog

## 3.0.3

### Patch Changes

- 59b22ed: **Dependencies:** Update React peer dependency versions

## 3.0.2

### Patch Changes

- 1344f9d: **Deps:** Add previously undeclared peer deps

## 3.0.1

### Patch Changes

- 78e09aa: validateClassName: Permit undefined so that it can be used with classNames easier

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# [3.0.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@2.1.2...@sebgroup/extract@3.0.0) (2024-01-19)

### Bug Fixes

- **react/stepper:** convert to pure controlled component ([#1160](https://github.com/seb-oss/green/issues/1160)) ([55191b1](https://github.com/seb-oss/green/commit/55191b130fab5afe3413b865e2adf2fbacdc56d8))

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
- **react/stepper:** \* value is now only owned by host application. This means `onIncrease` and `onDecrease` have to be implemented for the stepper to work.
- `onChange` now takes a ChangeEvent<HTMLInputElement> as param.
- These props have been removed: `step`, `min`, `max`

## [2.1.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@2.1.1...@sebgroup/extract@2.1.2) (2023-12-11)

### Bug Fixes

- **react/stepper:** refactor internal state handling ([#1147](https://github.com/seb-oss/green/issues/1147)) ([0cbbe10](https://github.com/seb-oss/green/commit/0cbbe100707ee742d23b81bc1b4410f2bcc62a6c)), closes [#1062](https://github.com/seb-oss/green/issues/1062)

## [2.1.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@2.1.0...@sebgroup/extract@2.1.1) (2023-12-01)

### Bug Fixes

- Modal positioning and backdrop effect in react component ([#1124](https://github.com/seb-oss/green/issues/1124)) ([659a663](https://github.com/seb-oss/green/commit/659a663b7b54da618be5a04556001b2838567a20))

# [2.1.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@2.0.0...@sebgroup/extract@2.1.0) (2023-11-17)

### Features

- **react/button:** add `close` variant ([0a0899b](https://github.com/seb-oss/green/commit/0a0899b0e6166088b8de1e261834e0ba40283638))

# [2.0.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.5.2...@sebgroup/extract@2.0.0) (2023-10-30)

### Bug Fixes

- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/seb-oss/green/issues/1016)) ([7f6f8f5](https://github.com/seb-oss/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

### BREAKING CHANGES

- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

## [1.5.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.5.1...@sebgroup/extract@1.5.2) (2023-09-25)

# 1.0.0 (2023-09-25)

### Bug Fixes

- 🐛 add close logic to react badge component ([5616017](https://github.com/seb-oss/green/commit/56160175b546266e6c807b0f68ffe5c75b0e3260))
- 🐛 Added date-fns dependency ([a3ce28a](https://github.com/seb-oss/green/commit/a3ce28a21b3c6768cc75791c02d5472e0e2faa3e))
- 🐛 dropdown formControl reset functionality ([c0716ad](https://github.com/seb-oss/green/commit/c0716ad47aa92dac2152471654c4bfba2893beea)), closes [#690](https://github.com/seb-oss/green/issues/690)
- 🐛 Dropdown search input space bar and arrows keys fixes ([ff6785c](https://github.com/seb-oss/green/commit/ff6785c842320838b462b5901099e54143144f1a))
- 🐛 fix dropdown options then values is numeric ([#948](https://github.com/seb-oss/green/issues/948)) ([679963e](https://github.com/seb-oss/green/commit/679963ed7f7abd83afcf06855264410c48a81ea1))
- 🐛 fixed ts errors ([ba5cf71](https://github.com/seb-oss/green/commit/ba5cf71d3e55b5bfaf25943cd7799fd4cc282dfb))
- 🐛 Fixing search property looping ([71d22f0](https://github.com/seb-oss/green/commit/71d22f0921085628240baa7dbb7e9e4705130e0a)), closes [#473](https://github.com/seb-oss/green/issues/473)
- 🐛 hiding closed accordion items and removing transitioning ([5952197](https://github.com/seb-oss/green/commit/5952197e03dbe44ea8124c95e2e6595e7f472a34))
- 🐛 session with isak fixing bugs ([23d42d4](https://github.com/seb-oss/green/commit/23d42d473a314f27a8ea8376994ce0557d3d3747))
- **datepicker:** broken month and year dropdowns ([#900](https://github.com/seb-oss/green/issues/900)) ([6003b12](https://github.com/seb-oss/green/commit/6003b12b31497a8c7b9ada42c68556bd68ddb080)), closes [#840](https://github.com/seb-oss/green/issues/840)
- **datepicker:** calendar dates ([447a434](https://github.com/seb-oss/green/commit/447a43406be2a5a418b4788cb874e6e5b3d0f944))
- **datepicker:** capitalize months ([cf5f0a3](https://github.com/seb-oss/green/commit/cf5f0a35c7279ac351e162d22b254ba9b15b297e))
- **datepicker:** close when clicking outside ([#965](https://github.com/seb-oss/green/issues/965)) ([4c799bf](https://github.com/seb-oss/green/commit/4c799bfe95366e412c076bfc6f36f737bea1a060))
- **datepicker:** handle invalid dates ([5197505](https://github.com/seb-oss/green/commit/51975054e6dc6898eb095c8075006d7a3b95c251))
- **datepicker:** hard coded label ([#901](https://github.com/seb-oss/green/issues/901)) ([dd127fe](https://github.com/seb-oss/green/commit/dd127feea0933ccac1b2737889f5857f43d7c572)), closes [#881](https://github.com/seb-oss/green/issues/881)
- **datepicker:** keyboard navigation, background scroll, swipe gesture ([a9494ca](https://github.com/seb-oss/green/commit/a9494ca4293fd7c6409016552331d089968db0d5)), closes [#480](https://github.com/seb-oss/green/issues/480) [#479](https://github.com/seb-oss/green/issues/479) [#470](https://github.com/seb-oss/green/issues/470)
- **datepicker:** replace `Inputmask` with `imask.js` ([#835](https://github.com/seb-oss/green/issues/835)) ([2ec6e33](https://github.com/seb-oss/green/commit/2ec6e33bec0002251b96738c98076483ea405e66))
- **datepicker:** show selected date or current date on open ([a437a89](https://github.com/seb-oss/green/commit/a437a89c5ad18a3401530d719f11d181cb9aabc2))
- **deps:** add missing dependency ([8f216d2](https://github.com/seb-oss/green/commit/8f216d2a83ae4fbff0f3f25c90e8a290b0904a2b))
- **dropdown:** add null check for options ([618924e](https://github.com/seb-oss/green/commit/618924e1f53657699c533336e8f1dc4409546e61))
- **dropdown:** add types for multi select ([2b161b5](https://github.com/seb-oss/green/commit/2b161b53a96f6b03ca05ab11ab40f98e51a0a917))
- **dropdown:** allow empty texts ([6d4c125](https://github.com/seb-oss/green/commit/6d4c1250e3b5a625d5f300e4c50d2fddda31a3df))
- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/seb-oss/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))
- **dropdown:** compare by value ([9fafa75](https://github.com/seb-oss/green/commit/9fafa75d49ea6a5c1fc33af5b8808019044907ae))
- **dropdown:** compareWith value array ([54861ab](https://github.com/seb-oss/green/commit/54861ab9d2983bacb80b90868d3765dd19d8bf57))
- **dropdown:** default value text ([b7684cd](https://github.com/seb-oss/green/commit/b7684cd8cdebe55b51ddf437fa1a51eadcb0f84f))
- **dropdown:** emit selected value ([fb3f993](https://github.com/seb-oss/green/commit/fb3f9931807ee2ae374ef2c5d1be936119837551))
- **dropdown:** listbox should have same width as button ([#889](https://github.com/seb-oss/green/issues/889)) ([bdb67e6](https://github.com/seb-oss/green/commit/bdb67e696d64c9ce3928bd6259dffe82b0539249))
- **dropdown:** missing condition ([9093adf](https://github.com/seb-oss/green/commit/9093adfb95509c7dd66f38cc72d4fc0fff5a4637))
- **dropdown:** only lock scroll on mobile ([d8c542d](https://github.com/seb-oss/green/commit/d8c542d43ef3e363cf0e4c4390a36171a90a559a))
- **dropdown:** popover transitions out on init ([b22c8cf](https://github.com/seb-oss/green/commit/b22c8cf9b18b026a4f764c249243b68a0c163c53))
- **dropdown:** revert generic to any ([732e933](https://github.com/seb-oss/green/commit/732e933118240ce543fe666cefbc2c3f36833b8f))
- **dropdown:** scroll to option on arrow navigation ([02c7b2c](https://github.com/seb-oss/green/commit/02c7b2c2c22892fb0b9f6ea2dcbec18f39d006f0)), closes [#463](https://github.com/seb-oss/green/issues/463)
- **dropdown:** sync value with selected options ([2637a95](https://github.com/seb-oss/green/commit/2637a95cb36a08fbb06a8f18926c3383b7803ea8))
- **dropdown:** toggle with space when not searching ([a980235](https://github.com/seb-oss/green/commit/a980235c5c1f95e4c3aac55314b99b955e414599))
- **dropdown:** touched behavior ([d8e9bac](https://github.com/seb-oss/green/commit/d8e9baca16e7331f244d4e88e6d204b24f2c2e60))
- **extract:** id should not start with a number ([02039c5](https://github.com/seb-oss/green/commit/02039c5cbf2b33881b40e5b7fa9b7eba7c1e6813))
- **extract:** make `viewport-size` ssr compatible ([7cc0707](https://github.com/seb-oss/green/commit/7cc0707cd94632c38bb5a4432a9c43839c23654b))
- missing dependency ([02e9758](https://github.com/seb-oss/green/commit/02e9758ba40e1ce50d02ac2d4a8676bf44ecc6e4))
- **react:** fixed radio group prop type expandableInfo ([#975](https://github.com/seb-oss/green/issues/975)) ([72b0289](https://github.com/seb-oss/green/commit/72b028949a325bff4dca61970244f965e8c03d62))
- **stepper:** only emit onChange on user events ([5ae5e38](https://github.com/seb-oss/green/commit/5ae5e38f90f56ef5044d9a2ac61e0961ed4ea0c4))
- use fully qualified import for `swiped-events` ([#821](https://github.com/seb-oss/green/issues/821)) ([2b4a6de](https://github.com/seb-oss/green/commit/2b4a6de84314b8f5e06b712a762ae9a0d9cdfb3e))

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/seb-oss/green/issues/168)) ([2089720](https://github.com/seb-oss/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/seb-oss/green/issues/157) [#163](https://github.com/seb-oss/green/issues/163) [#170](https://github.com/seb-oss/green/issues/170) [#169](https://github.com/seb-oss/green/issues/169)

### Code Refactoring

- 💡 AlertRibbon ([1f31705](https://github.com/seb-oss/green/commit/1f31705235e7edcc63a35cd16018c881d72323a0))
- 💡 Change variable naming ([373806a](https://github.com/seb-oss/green/commit/373806a18ae11ab7219df3db3154ddd818c80321))
- 💡 remove some code which was used for testing ([a00c9ec](https://github.com/seb-oss/green/commit/a00c9ec13927f8a08993c9d2d2c4de800f83d2d7))
- 💡 Variable naming ([354ba51](https://github.com/seb-oss/green/commit/354ba5118e10d6847ff0ad46045b6c6e65fb18d5))

### Features

- 🎸 Accordion ([71c902a](https://github.com/seb-oss/green/commit/71c902a338584f4a7108db4776bda6eea48b884b))
- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/seb-oss/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))
- 🎸 add radio button component with tests and storybook ([#396](https://github.com/seb-oss/green/issues/396)) ([69c02da](https://github.com/seb-oss/green/commit/69c02da052cc752d959abca6300ca6d72fcaca48))
- 🎸 Added .add method ([1178100](https://github.com/seb-oss/green/commit/117810097631caacaf9645240ea7546c68a44647))
- 🎸 Added basic date functionality ([a5b972d](https://github.com/seb-oss/green/commit/a5b972dfb59613fea7d20ec3c126315272a64667))
- 🎸 Added formatted dates ([67ed1cb](https://github.com/seb-oss/green/commit/67ed1cbff27beb07da18579e6061ea3a392a9c59))
- 🎸 added list component for green-react ([10aa732](https://github.com/seb-oss/green/commit/10aa7322b72b40fe1c343548147854334ad6ddd9))
- 🎸 Calendar can be navigated with add ([fa0a344](https://github.com/seb-oss/green/commit/fa0a344ae7c58a7490fc85bb11ac26a1ae4a9998))
- 🎸 Created AbstractStepper ([510a8bc](https://github.com/seb-oss/green/commit/510a8bc84057fe964827d32367ea6cd0c59affb4))
- 🎸 Dropdown - support search filter [#473](https://github.com/seb-oss/green/issues/473) ([4883331](https://github.com/seb-oss/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))
- 🎸 dropdown add formControl reset functionality ([88b3a55](https://github.com/seb-oss/green/commit/88b3a553a495b233e4287a8d23e8476be1ce0ea4))
- 🎸 expandable information ([1c9a4a6](https://github.com/seb-oss/green/commit/1c9a4a675969031fcf69d4825ac436bf8954ded5))
- 🎸 Expandable information ([66cf2d5](https://github.com/seb-oss/green/commit/66cf2d5d923a1d1549b80367149c70d4664bfb02))
- 🎸 Export utility functions ([be58953](https://github.com/seb-oss/green/commit/be589531812c7f51646c9dec191fbbade8e0b6fb))
- 🎸 extract file for badge components ([060dac3](https://github.com/seb-oss/green/commit/060dac34e9af693ec96f330f16b049ee92b5c70c)), closes [#476](https://github.com/seb-oss/green/issues/476)
- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/seb-oss/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/seb-oss/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- 🎸 Now supports .set ([35f997c](https://github.com/seb-oss/green/commit/35f997c412e18d31f2be39b0d5fa7a5d5e2def61))
- 🎸 Renders datepicker and enabled select ([6e5158d](https://github.com/seb-oss/green/commit/6e5158d28c47a36b361f4a8bd26e5161e3902ffe))
- 🎸 Supports selecting day ([84878e4](https://github.com/seb-oss/green/commit/84878e4f865d989d340e57d3ce4c6f088e606db1))
- 🎸 Supports sub and weeks ([40700ef](https://github.com/seb-oss/green/commit/40700ef509005cb1bef2ebb993a5509be3df358f))
- 🎸 Utility functions for weeks and months ([49b8a34](https://github.com/seb-oss/green/commit/49b8a34efaa83c52f63a052dec224113b6d1dfd6))
- 🎸 Validator prop on Dropdown ([dd76d9a](https://github.com/seb-oss/green/commit/dd76d9a4eb75eb81cd50b9ef37790782ad9b3a9d))
- add component filter-chip ([#808](https://github.com/seb-oss/green/issues/808)) ([edd7038](https://github.com/seb-oss/green/commit/edd7038292a732dfd8c03c52cc9cf423b9917461)), closes [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802)
- **angular:** add pagination ([9c30c95](https://github.com/seb-oss/green/commit/9c30c9558023ba79e52112578ad5c7a35a12318b))
- **datepicker:** add ability to set month and year ([b603180](https://github.com/seb-oss/green/commit/b603180e73400414a2c71998decc5986b688206d))
- **datepicker:** add ability to toggle datepicker ([5fbf904](https://github.com/seb-oss/green/commit/5fbf904f2876b3274af170348714965364b6b793))
- **datepicker:** add ability to use current time for dates ([967fd04](https://github.com/seb-oss/green/commit/967fd0447bdce10297fc15d3b043dff8bf9a18c4))
- **datepicker:** add input mask ([7c2212f](https://github.com/seb-oss/green/commit/7c2212f6ca0eb6f6cb43376f53c42080e7ff4ec9)), closes [#510](https://github.com/seb-oss/green/issues/510)
- **datepicker:** add option for week numbers, fix week days ([83c9ffa](https://github.com/seb-oss/green/commit/83c9ffa3c69dca4f423e561006104140a02fa6ae))
- **datepicker:** add placement with popper ([bdc2f7c](https://github.com/seb-oss/green/commit/bdc2f7ca30fd1edfd57a4047393e169b79aef305))
- **datepicker:** add support for min and max date ([78321f1](https://github.com/seb-oss/green/commit/78321f19d6df213b18c169023ecf188763fe4e6c)), closes [#503](https://github.com/seb-oss/green/issues/503)
- **datepicker:** implement onChange ([d253bc6](https://github.com/seb-oss/green/commit/d253bc6131383be4ec9ccde71dd87e3386394176))
- **dropdown:** 🎸 new input to set fixed placement of popover ([#930](https://github.com/seb-oss/green/issues/930)) ([ff782d6](https://github.com/seb-oss/green/commit/ff782d67602883e7f56af239d08a8c44a264f321))
- **dropdown:** select by value ([e2d3c6f](https://github.com/seb-oss/green/commit/e2d3c6fe94c16a17b004d3b4dac13eaf98da138a))
- **dropdown:** support multi select and custom options ([b687713](https://github.com/seb-oss/green/commit/b6877130a210d9a88ec944c8b6030f48ada57b2c)), closes [#472](https://github.com/seb-oss/green/issues/472) [#488](https://github.com/seb-oss/green/issues/488) [#464](https://github.com/seb-oss/green/issues/464)
- **extract:** add observable for viewport size and mobile viewport ([2fd6864](https://github.com/seb-oss/green/commit/2fd68643ad4dc9e2fea213a3e8ad6022c3020d91))
- **extract:** pagination i18n ([d5b74f6](https://github.com/seb-oss/green/commit/d5b74f6bf394ddfbadaf90e901d49c9e6402ed86))
- **react:** information label can now be react node ([#990](https://github.com/seb-oss/green/issues/990)) ([448b9f6](https://github.com/seb-oss/green/commit/448b9f6de32ee58429fa7465f61d2618d0b6c6bb))

### Performance Improvements

- **extracts:** share value to all subscribers ([2d08cf4](https://github.com/seb-oss/green/commit/2d08cf4bc58877c3905b4b2504052d29dd9c25d0))

### Reverts

- **dropdown:** value type to any ([6364d62](https://github.com/seb-oss/green/commit/6364d62c905d5d14e57fefb567e45da3cca7b766))

### BREAKING CHANGES

- 🧨 Renaming Alert export to AlertRibbon, changing styling form
  [role="alert"] to .alert-ribbon

✅ Closes: 659

- 🧨 --
- 🧨 -

✅ Closes: 643

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

- 🧨 -
- 🧨 -
- 🧨 Everything

- chore: 🤖 Changed ci build/test

- fix: 🐛 Added css to chlorophyll storybook

Also deleted old stories

- chore: 🤖 Chlorophyll build is run before Storybook

- fix: 🐛 Updated vulnerable dependencies

- refactor: 💡 Changed function signature

- feat: 🎸 Added info to inputs

- chore: 🤖 Added resolution for vulnerable dependency `tar`

- chore: 🤖 Made storybook build faster by removing html addon

- ci(github-actions): fix paths and scripts for storybook using nx

- ci(github-actions): fix missing nx command

- docs(chlorophyll): use scss in storybook

- docs(react): use scss in storybook

- docs(angular): use scss in storybook

- style: fix lint errors

- chore(stylelint): update rules

- chore(stylelint): fix lint errors before commit

- ci(github-actions): fix test and lint action

- chore: 🤖 Switched to aliases for lint/test

- fix: 🐛 Changed filename casing in tests

## [1.5.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.5.0...@sebgroup/extract@1.5.1) (2023-09-14)

# [1.5.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.4.3...@sebgroup/extract@1.5.0) (2023-09-08)

### Features

- **react:** information label can now be react node ([#990](https://github.com/seb-oss/green/issues/990)) ([448b9f6](https://github.com/seb-oss/green/commit/448b9f6de32ee58429fa7465f61d2618d0b6c6bb))

## [1.4.3](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.4.2...@sebgroup/extract@1.4.3) (2023-08-25)

### Bug Fixes

- **react:** fixed radio group prop type expandableInfo ([#975](https://github.com/seb-oss/green/issues/975)) ([72b0289](https://github.com/seb-oss/green/commit/72b028949a325bff4dca61970244f965e8c03d62))

## [1.4.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.4.1...@sebgroup/extract@1.4.2) (2023-08-17)

### Bug Fixes

- **datepicker:** close when clicking outside ([#965](https://github.com/seb-oss/green/issues/965)) ([4c799bf](https://github.com/seb-oss/green/commit/4c799bfe95366e412c076bfc6f36f737bea1a060))

## [1.4.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.4.0...@sebgroup/extract@1.4.1) (2023-08-08)

### Bug Fixes

- 🐛 fix dropdown options then values is numeric ([#948](https://github.com/seb-oss/green/issues/948)) ([679963e](https://github.com/seb-oss/green/commit/679963ed7f7abd83afcf06855264410c48a81ea1))

# [1.4.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.4...@sebgroup/extract@1.4.0) (2023-07-07)

### Features

- **dropdown:** 🎸 new input to set fixed placement of popover ([#930](https://github.com/seb-oss/green/issues/930)) ([ff782d6](https://github.com/seb-oss/green/commit/ff782d67602883e7f56af239d08a8c44a264f321))

## [1.3.4](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.3...@sebgroup/extract@1.3.4) (2023-05-24)

### Bug Fixes

- **datepicker:** broken month and year dropdowns ([#900](https://github.com/seb-oss/green/issues/900)) ([6003b12](https://github.com/seb-oss/green/commit/6003b12b31497a8c7b9ada42c68556bd68ddb080)), closes [#840](https://github.com/seb-oss/green/issues/840)
- **datepicker:** hard coded label ([#901](https://github.com/seb-oss/green/issues/901)) ([dd127fe](https://github.com/seb-oss/green/commit/dd127feea0933ccac1b2737889f5857f43d7c572)), closes [#881](https://github.com/seb-oss/green/issues/881)

## [1.3.3](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.2...@sebgroup/extract@1.3.3) (2023-05-16)

## [1.3.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.1...@sebgroup/extract@1.3.2) (2023-05-12)

### Bug Fixes

- **dropdown:** listbox should have same width as button ([#889](https://github.com/seb-oss/green/issues/889)) ([bdb67e6](https://github.com/seb-oss/green/commit/bdb67e696d64c9ce3928bd6259dffe82b0539249))

## [1.3.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.1...@sebgroup/extract@1.3.2) (2023-05-12)

### Bug Fixes

- **dropdown:** listbox should have same width as button ([#889](https://github.com/seb-oss/green/issues/889)) ([bdb67e6](https://github.com/seb-oss/green/commit/bdb67e696d64c9ce3928bd6259dffe82b0539249))

## [1.3.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.3.0...@sebgroup/extract@1.3.1) (2023-04-06)

### Bug Fixes

- **datepicker:** replace `Inputmask` with `imask.js` ([#835](https://github.com/seb-oss/green/issues/835)) ([2ec6e33](https://github.com/seb-oss/green/commit/2ec6e33bec0002251b96738c98076483ea405e66))

# [1.3.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.2.1...@sebgroup/extract@1.3.0) (2023-04-03)

### Bug Fixes

- use fully qualified import for `swiped-events` ([#821](https://github.com/seb-oss/green/issues/821)) ([2b4a6de](https://github.com/seb-oss/green/commit/2b4a6de84314b8f5e06b712a762ae9a0d9cdfb3e))

### Features

- add component filter-chip ([#808](https://github.com/seb-oss/green/issues/808)) ([edd7038](https://github.com/seb-oss/green/commit/edd7038292a732dfd8c03c52cc9cf423b9917461)), closes [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802) [#802](https://github.com/seb-oss/green/issues/802)

## [1.2.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.2.0...@sebgroup/extract@1.2.1) (2023-03-29)

# [1.2.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.1.0...@sebgroup/extract@1.2.0) (2023-03-16)

### Features

- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/seb-oss/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- **angular:** add pagination ([9c30c95](https://github.com/seb-oss/green/commit/9c30c9558023ba79e52112578ad5c7a35a12318b))
- **extract:** pagination i18n ([d5b74f6](https://github.com/seb-oss/green/commit/d5b74f6bf394ddfbadaf90e901d49c9e6402ed86))

# [1.1.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0...@sebgroup/extract@1.1.0) (2023-03-01)

### Features

- 🎸 expandable information ([1c9a4a6](https://github.com/seb-oss/green/commit/1c9a4a675969031fcf69d4825ac436bf8954ded5))
- 🎸 Expandable information ([66cf2d5](https://github.com/seb-oss/green/commit/66cf2d5d923a1d1549b80367149c70d4664bfb02))

# [1.0.0](https://github.com/seb-oss/green/compare/@sebgroup/extract@0.0.2...@sebgroup/extract@1.0.0) (2023-02-17)

## [0.0.2](https://github.com/seb-oss/green/compare/@sebgroup/extract@0.0.1...@sebgroup/extract@0.0.2) (2023-02-02)

## [0.0.1](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.46...@sebgroup/extract@0.0.1) (2023-01-27)

# [1.0.0-beta.46](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.45...@sebgroup/extract@1.0.0-beta.46) (2023-01-26)

# [1.0.0-beta.45](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.44...@sebgroup/extract@1.0.0-beta.45) (2023-01-26)

### Bug Fixes

- **extract:** make `viewport-size` ssr compatible ([7cc0707](https://github.com/seb-oss/green/commit/7cc0707cd94632c38bb5a4432a9c43839c23654b))

### Code Refactoring

- 💡 AlertRibbon ([1f31705](https://github.com/seb-oss/green/commit/1f31705235e7edcc63a35cd16018c881d72323a0))

### Features

- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/seb-oss/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))

### BREAKING CHANGES

- 🧨 Renaming Alert export to AlertRibbon, changing styling form
  [role="alert"] to .alert-ribbon

✅ Closes: 659

# [1.0.0-beta.44](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.43...@sebgroup/extract@1.0.0-beta.44) (2023-01-12)

### Bug Fixes

- 🐛 dropdown formControl reset functionality ([c0716ad](https://github.com/seb-oss/green/commit/c0716ad47aa92dac2152471654c4bfba2893beea)), closes [#690](https://github.com/seb-oss/green/issues/690)

### BREAKING CHANGES

- 🧨 --

# [1.0.0-beta.43](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.42...@sebgroup/extract@1.0.0-beta.43) (2022-12-23)

### Bug Fixes

- 🐛 fixed ts errors ([ba5cf71](https://github.com/seb-oss/green/commit/ba5cf71d3e55b5bfaf25943cd7799fd4cc282dfb))
- 🐛 hiding closed accordion items and removing transitioning ([5952197](https://github.com/seb-oss/green/commit/5952197e03dbe44ea8124c95e2e6595e7f472a34))

### Features

- 🎸 Accordion ([71c902a](https://github.com/seb-oss/green/commit/71c902a338584f4a7108db4776bda6eea48b884b))
- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/seb-oss/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))
- **datepicker:** implement onChange ([d253bc6](https://github.com/seb-oss/green/commit/d253bc6131383be4ec9ccde71dd87e3386394176))

# [1.0.0-beta.42](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.41...@sebgroup/extract@1.0.0-beta.42) (2022-12-12)

# [1.0.0-beta.41](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.40...@sebgroup/extract@1.0.0-beta.41) (2022-12-06)

### Bug Fixes

- 🐛 session with isak fixing bugs ([23d42d4](https://github.com/seb-oss/green/commit/23d42d473a314f27a8ea8376994ce0557d3d3747))

# [1.0.0-beta.40](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.39...@sebgroup/extract@1.0.0-beta.40) (2022-11-30)

# [1.0.0-beta.39](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.38...@sebgroup/extract@1.0.0-beta.39) (2022-11-30)

# [1.0.0-beta.38](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.37...@sebgroup/extract@1.0.0-beta.38) (2022-11-28)

### Features

- 🎸 dropdown add formControl reset functionality ([88b3a55](https://github.com/seb-oss/green/commit/88b3a553a495b233e4287a8d23e8476be1ce0ea4))

### BREAKING CHANGES

- 🧨 -

✅ Closes: 643

# [1.0.0-beta.37](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.36...@sebgroup/extract@1.0.0-beta.37) (2022-11-17)

# [1.0.0-beta.36](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.35...@sebgroup/extract@1.0.0-beta.36) (2022-11-17)

# [1.0.0-beta.35](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.34...@sebgroup/extract@1.0.0-beta.35) (2022-11-11)

### Bug Fixes

- **stepper:** only emit onChange on user events ([5ae5e38](https://github.com/seb-oss/green/commit/5ae5e38f90f56ef5044d9a2ac61e0961ed4ea0c4))

# [1.0.0-beta.34](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.33...@sebgroup/extract@1.0.0-beta.34) (2022-11-10)

### Bug Fixes

- 🐛 Dropdown search input space bar and arrows keys fixes ([ff6785c](https://github.com/seb-oss/green/commit/ff6785c842320838b462b5901099e54143144f1a))
- **dropdown:** missing condition ([9093adf](https://github.com/seb-oss/green/commit/9093adfb95509c7dd66f38cc72d4fc0fff5a4637))
- **dropdown:** toggle with space when not searching ([a980235](https://github.com/seb-oss/green/commit/a980235c5c1f95e4c3aac55314b99b955e414599))

### Code Refactoring

- 💡 Change variable naming ([373806a](https://github.com/seb-oss/green/commit/373806a18ae11ab7219df3db3154ddd818c80321))
- 💡 remove some code which was used for testing ([a00c9ec](https://github.com/seb-oss/green/commit/a00c9ec13927f8a08993c9d2d2c4de800f83d2d7))
- 💡 Variable naming ([354ba51](https://github.com/seb-oss/green/commit/354ba5118e10d6847ff0ad46045b6c6e65fb18d5))

### BREAKING CHANGES

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

- 🧨 -

✅ Closes: -

# [1.0.0-beta.33](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.32...@sebgroup/extract@1.0.0-beta.33) (2022-11-08)

# [1.0.0-beta.32](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.31...@sebgroup/extract@1.0.0-beta.32) (2022-11-08)

# [1.0.0-beta.31](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.30...@sebgroup/extract@1.0.0-beta.31) (2022-11-08)

# [1.0.0-beta.30](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.29...@sebgroup/extract@1.0.0-beta.30) (2022-11-08)

# [1.0.0-beta.29](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.28...@sebgroup/extract@1.0.0-beta.29) (2022-10-26)

# [1.0.0-beta.28](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.27...@sebgroup/extract@1.0.0-beta.28) (2022-10-12)

# [1.0.0-beta.27](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.26...@sebgroup/extract@1.0.0-beta.27) (2022-10-07)

### Features

- **dropdown:** select by value ([e2d3c6f](https://github.com/seb-oss/green/commit/e2d3c6fe94c16a17b004d3b4dac13eaf98da138a))

# [1.0.0-beta.26](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.25...@sebgroup/extract@1.0.0-beta.26) (2022-10-03)

### Reverts

- **dropdown:** value type to any ([6364d62](https://github.com/seb-oss/green/commit/6364d62c905d5d14e57fefb567e45da3cca7b766))

# [1.0.0-beta.25](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.24...@sebgroup/extract@1.0.0-beta.25) (2022-09-27)

### Bug Fixes

- **dropdown:** revert generic to any ([732e933](https://github.com/seb-oss/green/commit/732e933118240ce543fe666cefbc2c3f36833b8f))
- **dropdown:** sync value with selected options ([2637a95](https://github.com/seb-oss/green/commit/2637a95cb36a08fbb06a8f18926c3383b7803ea8))

# [1.0.0-beta.24](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.23...@sebgroup/extract@1.0.0-beta.24) (2022-09-23)

### Bug Fixes

- **dropdown:** compareWith value array ([54861ab](https://github.com/seb-oss/green/commit/54861ab9d2983bacb80b90868d3765dd19d8bf57))

# [1.0.0-beta.23](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.22...@sebgroup/extract@1.0.0-beta.23) (2022-09-20)

# [1.0.0-beta.22](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.21...@sebgroup/extract@1.0.0-beta.22) (2022-09-19)

### Bug Fixes

- 🐛 Fixing search property looping ([71d22f0](https://github.com/seb-oss/green/commit/71d22f0921085628240baa7dbb7e9e4705130e0a)), closes [#473](https://github.com/seb-oss/green/issues/473)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/seb-oss/green/issues/473) ([4883331](https://github.com/seb-oss/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -
- 🧨 -

# [1.0.0-beta.22](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.21...@sebgroup/extract@1.0.0-beta.22) (2022-09-19)

### Bug Fixes

- 🐛 Fixing search property looping ([71d22f0](https://github.com/seb-oss/green/commit/71d22f0921085628240baa7dbb7e9e4705130e0a)), closes [#473](https://github.com/seb-oss/green/issues/473)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/seb-oss/green/issues/473) ([4883331](https://github.com/seb-oss/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -
- 🧨 -

# [1.0.0-beta.21](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.20...@sebgroup/extract@1.0.0-beta.21) (2022-08-31)

# [1.0.0-beta.20](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.19...@sebgroup/extract@1.0.0-beta.20) (2022-08-31)

# [1.0.0-beta.19](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.18...@sebgroup/extract@1.0.0-beta.19) (2022-08-29)

# [1.0.0-beta.18](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.17...@sebgroup/extract@1.0.0-beta.18) (2022-08-15)

# [1.0.0-beta.17](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.16...@sebgroup/extract@1.0.0-beta.17) (2022-08-15)

### Bug Fixes

- **dropdown:** scroll to option on arrow navigation ([02c7b2c](https://github.com/seb-oss/green/commit/02c7b2c2c22892fb0b9f6ea2dcbec18f39d006f0)), closes [#463](https://github.com/seb-oss/green/issues/463)
- **extract:** id should not start with a number ([02039c5](https://github.com/seb-oss/green/commit/02039c5cbf2b33881b40e5b7fa9b7eba7c1e6813))

# [1.0.0-beta.16](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.15...@sebgroup/extract@1.0.0-beta.16) (2022-07-18)

### Bug Fixes

- **dropdown:** allow empty texts ([6d4c125](https://github.com/seb-oss/green/commit/6d4c1250e3b5a625d5f300e4c50d2fddda31a3df))
- **dropdown:** compare by value ([9fafa75](https://github.com/seb-oss/green/commit/9fafa75d49ea6a5c1fc33af5b8808019044907ae))
- **dropdown:** touched behavior ([d8e9bac](https://github.com/seb-oss/green/commit/d8e9baca16e7331f244d4e88e6d204b24f2c2e60))

### Features

- 🎸 Validator prop on Dropdown ([dd76d9a](https://github.com/seb-oss/green/commit/dd76d9a4eb75eb81cd50b9ef37790782ad9b3a9d))

# [1.0.0-beta.15](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.14...@sebgroup/extract@1.0.0-beta.15) (2022-06-28)

### Features

- 🎸 Created AbstractStepper ([510a8bc](https://github.com/seb-oss/green/commit/510a8bc84057fe964827d32367ea6cd0c59affb4))

# [1.0.0-beta.14](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.13...@sebgroup/extract@1.0.0-beta.14) (2022-06-15)

# [1.0.0-beta.13](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.12...@sebgroup/extract@1.0.0-beta.13) (2022-06-07)

### Bug Fixes

- **datepicker:** handle invalid dates ([5197505](https://github.com/seb-oss/green/commit/51975054e6dc6898eb095c8075006d7a3b95c251))
- **dropdown:** popover transitions out on init ([b22c8cf](https://github.com/seb-oss/green/commit/b22c8cf9b18b026a4f764c249243b68a0c163c53))

### Features

- **datepicker:** add input mask ([7c2212f](https://github.com/seb-oss/green/commit/7c2212f6ca0eb6f6cb43376f53c42080e7ff4ec9)), closes [#510](https://github.com/seb-oss/green/issues/510)
- **datepicker:** add support for min and max date ([78321f1](https://github.com/seb-oss/green/commit/78321f19d6df213b18c169023ecf188763fe4e6c)), closes [#503](https://github.com/seb-oss/green/issues/503)

### Performance Improvements

- **extracts:** share value to all subscribers ([2d08cf4](https://github.com/seb-oss/green/commit/2d08cf4bc58877c3905b4b2504052d29dd9c25d0))

# [1.0.0-beta.12](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.11...@sebgroup/extract@1.0.0-beta.12) (2022-05-05)

### Bug Fixes

- 🐛 add close logic to react badge component ([5616017](https://github.com/seb-oss/green/commit/56160175b546266e6c807b0f68ffe5c75b0e3260))
- **dropdown:** add types for multi select ([2b161b5](https://github.com/seb-oss/green/commit/2b161b53a96f6b03ca05ab11ab40f98e51a0a917))

### Features

- 🎸 extract file for badge components ([060dac3](https://github.com/seb-oss/green/commit/060dac34e9af693ec96f330f16b049ee92b5c70c)), closes [#476](https://github.com/seb-oss/green/issues/476)
- **dropdown:** support multi select and custom options ([b687713](https://github.com/seb-oss/green/commit/b6877130a210d9a88ec944c8b6030f48ada57b2c)), closes [#472](https://github.com/seb-oss/green/issues/472) [#488](https://github.com/seb-oss/green/issues/488) [#464](https://github.com/seb-oss/green/issues/464)

# [1.0.0-beta.11](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.10...@sebgroup/extract@1.0.0-beta.11) (2022-04-21)

### Bug Fixes

- **deps:** add missing dependency ([8f216d2](https://github.com/seb-oss/green/commit/8f216d2a83ae4fbff0f3f25c90e8a290b0904a2b))

# [1.0.0-beta.10](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.9...@sebgroup/extract@1.0.0-beta.10) (2022-04-20)

### Bug Fixes

- 🐛 Added date-fns dependency ([a3ce28a](https://github.com/seb-oss/green/commit/a3ce28a21b3c6768cc75791c02d5472e0e2faa3e))
- **datepicker:** keyboard navigation, background scroll, swipe gesture ([a9494ca](https://github.com/seb-oss/green/commit/a9494ca4293fd7c6409016552331d089968db0d5)), closes [#480](https://github.com/seb-oss/green/issues/480) [#479](https://github.com/seb-oss/green/issues/479) [#470](https://github.com/seb-oss/green/issues/470)

### Features

- **extract:** add observable for viewport size and mobile viewport ([2fd6864](https://github.com/seb-oss/green/commit/2fd68643ad4dc9e2fea213a3e8ad6022c3020d91))

# [1.0.0-beta.9](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.8...@sebgroup/extract@1.0.0-beta.9) (2022-04-15)

### Bug Fixes

- **datepicker:** calendar dates ([447a434](https://github.com/seb-oss/green/commit/447a43406be2a5a418b4788cb874e6e5b3d0f944))
- **datepicker:** capitalize months ([cf5f0a3](https://github.com/seb-oss/green/commit/cf5f0a35c7279ac351e162d22b254ba9b15b297e))
- **datepicker:** show selected date or current date on open ([a437a89](https://github.com/seb-oss/green/commit/a437a89c5ad18a3401530d719f11d181cb9aabc2))
- **dropdown:** add null check for options ([618924e](https://github.com/seb-oss/green/commit/618924e1f53657699c533336e8f1dc4409546e61))
- **dropdown:** emit selected value ([fb3f993](https://github.com/seb-oss/green/commit/fb3f9931807ee2ae374ef2c5d1be936119837551))
- **dropdown:** only lock scroll on mobile ([d8c542d](https://github.com/seb-oss/green/commit/d8c542d43ef3e363cf0e4c4390a36171a90a559a))

### Features

- 🎸 Added .add method ([1178100](https://github.com/seb-oss/green/commit/117810097631caacaf9645240ea7546c68a44647))
- 🎸 Added basic date functionality ([a5b972d](https://github.com/seb-oss/green/commit/a5b972dfb59613fea7d20ec3c126315272a64667))
- 🎸 Added formatted dates ([67ed1cb](https://github.com/seb-oss/green/commit/67ed1cbff27beb07da18579e6061ea3a392a9c59))
- 🎸 Calendar can be navigated with add ([fa0a344](https://github.com/seb-oss/green/commit/fa0a344ae7c58a7490fc85bb11ac26a1ae4a9998))
- 🎸 Export utility functions ([be58953](https://github.com/seb-oss/green/commit/be589531812c7f51646c9dec191fbbade8e0b6fb))
- 🎸 Now supports .set ([35f997c](https://github.com/seb-oss/green/commit/35f997c412e18d31f2be39b0d5fa7a5d5e2def61))
- 🎸 Renders datepicker and enabled select ([6e5158d](https://github.com/seb-oss/green/commit/6e5158d28c47a36b361f4a8bd26e5161e3902ffe))
- 🎸 Supports selecting day ([84878e4](https://github.com/seb-oss/green/commit/84878e4f865d989d340e57d3ce4c6f088e606db1))
- 🎸 Supports sub and weeks ([40700ef](https://github.com/seb-oss/green/commit/40700ef509005cb1bef2ebb993a5509be3df358f))
- 🎸 Utility functions for weeks and months ([49b8a34](https://github.com/seb-oss/green/commit/49b8a34efaa83c52f63a052dec224113b6d1dfd6))
- **datepicker:** add ability to set month and year ([b603180](https://github.com/seb-oss/green/commit/b603180e73400414a2c71998decc5986b688206d))
- **datepicker:** add ability to toggle datepicker ([5fbf904](https://github.com/seb-oss/green/commit/5fbf904f2876b3274af170348714965364b6b793))
- **datepicker:** add ability to use current time for dates ([967fd04](https://github.com/seb-oss/green/commit/967fd0447bdce10297fc15d3b043dff8bf9a18c4))
- **datepicker:** add option for week numbers, fix week days ([83c9ffa](https://github.com/seb-oss/green/commit/83c9ffa3c69dca4f423e561006104140a02fa6ae))
- **datepicker:** add placement with popper ([bdc2f7c](https://github.com/seb-oss/green/commit/bdc2f7ca30fd1edfd57a4047393e169b79aef305))

# [1.0.0-beta.8](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.7...@sebgroup/extract@1.0.0-beta.8) (2022-04-07)

### Bug Fixes

- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/seb-oss/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))

# [1.0.0-beta.7](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.6...@sebgroup/extract@1.0.0-beta.7) (2022-03-24)

### Bug Fixes

- **dropdown:** default value text ([b7684cd](https://github.com/seb-oss/green/commit/b7684cd8cdebe55b51ddf437fa1a51eadcb0f84f))

# [1.0.0-beta.6](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.5...@sebgroup/extract@1.0.0-beta.6) (2022-02-17)

### Features

- 🎸 add radio button component with tests and storybook ([#396](https://github.com/seb-oss/green/issues/396)) ([69c02da](https://github.com/seb-oss/green/commit/69c02da052cc752d959abca6300ca6d72fcaca48))

# [1.0.0-beta.5](https://github.com/seb-oss/green/compare/@sebgroup/extract@1.0.0-beta.4...@sebgroup/extract@1.0.0-beta.5) (2022-02-08)

### Bug Fixes

- missing dependency ([02e9758](https://github.com/seb-oss/green/commit/02e9758ba40e1ce50d02ac2d4a8676bf44ecc6e4))
