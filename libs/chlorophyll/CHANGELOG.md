# Changelog

## 3.0.5

### Patch Changes

- d8de14a: Fix close icon color on touchscreen when currentColor is not black

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [3.0.4](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@3.0.3...@sebgroup/chlorophyll@3.0.4) (2024-01-26)

### Bug Fixes

- **chlorophyll:** change font weight for h5 and h6 [#1172](https://github.com/sebgroup/green/issues/1172) ([#1175](https://github.com/sebgroup/green/issues/1175)) ([d7c8a81](https://github.com/sebgroup/green/commit/d7c8a814ef965659275c945214cbb830d957b370))

## [3.0.3](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@3.0.2...@sebgroup/chlorophyll@3.0.3) (2024-01-25)

### Bug Fixes

- **core:** polyfill/fallback for iOS 15 ([#1173](https://github.com/sebgroup/green/issues/1173)) ([53247c5](https://github.com/sebgroup/green/commit/53247c5068ffdb91be188966a4073dce1bc8f58a))

## [3.0.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@3.0.1...@sebgroup/chlorophyll@3.0.2) (2024-01-23)

### Bug Fixes

- **react:** slide-out modal transition ([f911a11](https://github.com/sebgroup/green/commit/f911a11f36f3864b0fff9dd36baf6a23e89d8476))

## [3.0.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@3.0.0...@sebgroup/chlorophyll@3.0.1) (2024-01-22)

### Bug Fixes

- **chlorophyll:** update readme ([#1166](https://github.com/sebgroup/green/issues/1166)) ([a0d3333](https://github.com/sebgroup/green/commit/a0d333353b495715db882351ca78006fa7cd72a7))

# [3.0.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.3.0...@sebgroup/chlorophyll@3.0.0) (2024-01-22)

### Bug Fixes

- **react/stepper:** convert to pure controlled component ([#1160](https://github.com/sebgroup/green/issues/1160)) ([55191b1](https://github.com/sebgroup/green/commit/55191b130fab5afe3413b865e2adf2fbacdc56d8))

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/sebgroup/green/issues/1154)) ([707d456](https://github.com/sebgroup/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))
- **react/table:** add react table component ([#1162](https://github.com/sebgroup/green/issues/1162)) ([6439fb9](https://github.com/sebgroup/green/commit/6439fb9f23bebec48405513799bf1c79045f5a8c))

### BREAKING CHANGES

- **react/stepper:** \* value is now only owned by host application. This means `onIncrease` and `onDecrease` have to be implemented for the stepper to work.
- `onChange` now takes a ChangeEvent<HTMLInputElement> as param.
- These props have been removed: `step`, `min`, `max`

# [3.0.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.3.0...@sebgroup/chlorophyll@3.0.0) (2024-01-19)

### Bug Fixes

- **react/stepper:** convert to pure controlled component ([#1160](https://github.com/sebgroup/green/issues/1160)) ([55191b1](https://github.com/sebgroup/green/commit/55191b130fab5afe3413b865e2adf2fbacdc56d8))

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/sebgroup/green/issues/1154)) ([707d456](https://github.com/sebgroup/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))
- **react/table:** add react table component ([#1162](https://github.com/sebgroup/green/issues/1162)) ([6439fb9](https://github.com/sebgroup/green/commit/6439fb9f23bebec48405513799bf1c79045f5a8c))

### BREAKING CHANGES

- **react/stepper:** \* value is now only owned by host application. This means `onIncrease` and `onDecrease` have to be implemented for the stepper to work.
- `onChange` now takes a ChangeEvent<HTMLInputElement> as param.
- These props have been removed: `step`, `min`, `max`

# [2.3.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.2.2...@sebgroup/chlorophyll@2.3.0) (2023-12-01)

### Bug Fixes

- 🐛 wizard next icon margin left ([#1116](https://github.com/sebgroup/green/issues/1116)) ([158faf0](https://github.com/sebgroup/green/commit/158faf08786634b6239a33a8b58296922a4992b3))
- Modal positioning and backdrop effect in react component ([#1124](https://github.com/sebgroup/green/issues/1124)) ([659a663](https://github.com/sebgroup/green/commit/659a663b7b54da618be5a04556001b2838567a20))

### Features

- 🎸 Add unit to input and refactor ([#1119](https://github.com/sebgroup/green/issues/1119)) ([25b06e7](https://github.com/sebgroup/green/commit/25b06e71fcd3985b97aa323712380a0041aeee89)), closes [#926](https://github.com/sebgroup/green/issues/926) [#910](https://github.com/sebgroup/green/issues/910) [#873](https://github.com/sebgroup/green/issues/873) [#713](https://github.com/sebgroup/green/issues/713) [#713](https://github.com/sebgroup/green/issues/713) [#569](https://github.com/sebgroup/green/issues/569)
- 🎸 Char counter to text area ([#1117](https://github.com/sebgroup/green/issues/1117)) ([2f58b44](https://github.com/sebgroup/green/commit/2f58b44a86d6e82dddcc872ca10c4ea613ba33bb))

## [2.2.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.2.1...@sebgroup/chlorophyll@2.2.2) (2023-11-29)

### Bug Fixes

- **core:** downgrade to `lit@ˆ2.8.0` ([#1134](https://github.com/sebgroup/green/issues/1134)) ([bee1a90](https://github.com/sebgroup/green/commit/bee1a90bb48c2855b23849fbb30daaa991138dc8))

## [2.2.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.2.0...@sebgroup/chlorophyll@2.2.1) (2023-11-10)

### Bug Fixes

- **react:** in-page-wizard optional props and icon margin ([#1110](https://github.com/sebgroup/green/issues/1110)) ([857a637](https://github.com/sebgroup/green/commit/857a6379f756023420337703373bb769d1e938ae))

# [2.2.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.1.0...@sebgroup/chlorophyll@2.2.0) (2023-11-03)

### Bug Fixes

- **border-color:** 🐛 align default border colours ([#1089](https://github.com/sebgroup/green/issues/1089)) ([d942690](https://github.com/sebgroup/green/commit/d9426908b3c410cd2ed38415f39cd2020c189507))
- **fonts:** revert path change ([#1095](https://github.com/sebgroup/green/issues/1095)) ([1961db8](https://github.com/sebgroup/green/commit/1961db8eb69892d426e49ce9e445f4590736a8e0))

### Features

- **react/textarea:** add Textarea component ([#1093](https://github.com/sebgroup/green/issues/1093)) ([5d06dfc](https://github.com/sebgroup/green/commit/5d06dfcfacdcc6d430e82b2715063f4e6e608924))

# [2.1.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.0.1...@sebgroup/chlorophyll@2.1.0) (2023-11-01)

### Features

- **react:** new component InPageWizardStepCard ([#1081](https://github.com/sebgroup/green/issues/1081)) ([32e8d3b](https://github.com/sebgroup/green/commit/32e8d3b45992a5cc851e23b42930ae6710556a7b))

## [2.0.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@2.0.0...@sebgroup/chlorophyll@2.0.1) (2023-10-30)

### Bug Fixes

- **context-menu:** context menu imports and docs ([#1074](https://github.com/sebgroup/green/issues/1074)) ([34b3a35](https://github.com/sebgroup/green/commit/34b3a35e284e4a6c7c1acc145ca80b869574dee5))

# [2.0.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.15.4...@sebgroup/chlorophyll@2.0.0) (2023-10-30)

### Bug Fixes

- **chlorophyll:** only import tokens in use-green-scope ([#1045](https://github.com/sebgroup/green/issues/1045)) ([151f251](https://github.com/sebgroup/green/commit/151f2516f533cf8be6c23bf4b1c975aa71d4654b))
- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/sebgroup/green/issues/1016)) ([7f6f8f5](https://github.com/sebgroup/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

- Updated focus states in Chlorophyll (#1050) ([d9ee451](https://github.com/sebgroup/green/commit/d9ee451030387576f2d9b768de665be2876e2ad9)), closes [#1050](https://github.com/sebgroup/green/issues/1050)

### BREAKING CHANGES

- Some grouped inputs will need the `group-focus` class added to the wrapper
- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

## [1.15.4](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.15.3...@sebgroup/chlorophyll@1.15.4) (2023-10-23)

### Bug Fixes

- **chlorophyll:** text colour on success and font path ([#1055](https://github.com/sebgroup/green/issues/1055)) ([d7996e4](https://github.com/sebgroup/green/commit/d7996e489ea7634e03b8625463a675e289c9a866)), closes [#988](https://github.com/sebgroup/green/issues/988) [#1054](https://github.com/sebgroup/green/issues/1054)
- **form-group:** horizontal layout overflows ([#1064](https://github.com/sebgroup/green/issues/1064)) ([d0216dd](https://github.com/sebgroup/green/commit/d0216ddf477763a8713b43c15490f255488d4cdf))

## [1.15.3](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.15.2...@sebgroup/chlorophyll@1.15.3) (2023-09-29)

## [1.15.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.15.1...@sebgroup/chlorophyll@1.15.2) (2023-09-26)

### Bug Fixes

- 🐛 edit buttons should be hidden on active state ([#1030](https://github.com/sebgroup/green/issues/1030)) ([e5fb857](https://github.com/sebgroup/green/commit/e5fb857d00e41aa40a7401551a32553d2a8c17ac))

## [1.15.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.15.0...@sebgroup/chlorophyll@1.15.1) (2023-09-25)

### Bug Fixes

- **border-color:** use a lighter border in dark mode for better contrast ([#1023](https://github.com/sebgroup/green/issues/1023)) ([99f6203](https://github.com/sebgroup/green/commit/99f62034be3ca1140e5ddf56337b5675fbf0aea6)), closes [#928](https://github.com/sebgroup/green/issues/928)
- **datepicker:** label spacing ([#1020](https://github.com/sebgroup/green/issues/1020)) ([fcb24eb](https://github.com/sebgroup/green/commit/fcb24ebba371ad19d56bcdab9b2af26f8fd67e66))

# 1.0.0 (2023-09-25)

### Bug Fixes

- 🐛 adding correct focus to select ([44c7c92](https://github.com/sebgroup/green/commit/44c7c9295604f9455c6f74b40f4b226550e9684e))
- 🐛 adding max-width 75ch to alert-ribbon content ([9afcca4](https://github.com/sebgroup/green/commit/9afcca4c020e0dad5ee3d96d0c79d851ed533342))
- 🐛 align with latest changes from main ([2088798](https://github.com/sebgroup/green/commit/208879857ff5c48888dbb662cb454f943025b6b7))
- 🐛 changing to correct font size for p tags ([a5eafbb](https://github.com/sebgroup/green/commit/a5eafbb7836b5b87721dfb4d00987e6c62f4b832))
- 🐛 checkbox lables could grow larger than parent element ([e53dff6](https://github.com/sebgroup/green/commit/e53dff6d0c6e12c91182d4913af8611104c2ab6a))
- 🐛 Checkbox styling ([d86c713](https://github.com/sebgroup/green/commit/d86c7137223896088aa22d98ac5b15d2f972e61a))
- 🐛 checkbox, radio, use-green scope, variables ([1fd9154](https://github.com/sebgroup/green/commit/1fd915463e9c8c3bf1db2fa6179da5f4ccbdf2f8))
- 🐛 close button size in dropdown ([85b0f5e](https://github.com/sebgroup/green/commit/85b0f5e639487a884c30eb58011869d5c05d3398))
- 🐛 Configurable font path when setting up use-green-scope ([ea34208](https://github.com/sebgroup/green/commit/ea342085bad764524e734c4a452a268ea026c6fe))
- 🐛 Context menu on scroll markForCheck and css fixes ([#897](https://github.com/sebgroup/green/issues/897)) ([89b83fc](https://github.com/sebgroup/green/commit/89b83fc4d09456b8f983eb2ece14fa9ea182fc5a))
- 🐛 correct margin for dropdown labels ([7ed1725](https://github.com/sebgroup/green/commit/7ed17253e8d8f2e15b8156d515fcdb5c1f26a5ac))
- 🐛 fix context menu position in relative parent ([#970](https://github.com/sebgroup/green/issues/970)) ([d8f208e](https://github.com/sebgroup/green/commit/d8f208ed4766e0b940ebf4491ca4158715380d0f))
- 🐛 fix validation border on active ([#811](https://github.com/sebgroup/green/issues/811)) ([bd8cc32](https://github.com/sebgroup/green/commit/bd8cc321e9c061afb912b284d81bfd82fff0f188))
- 🐛 fixed :has fallback for Firefox ([cdc2b97](https://github.com/sebgroup/green/commit/cdc2b97f9864e9d36268b2b75bdcca91215ec09b))
- 🐛 Fixed merge conflict in list/\_mixins.scss ([#332](https://github.com/sebgroup/green/issues/332)) ([6b36129](https://github.com/sebgroup/green/commit/6b36129d4554b22373bba9e71d8f063e8aef5148))
- 🐛 fixed navbar styling ([#392](https://github.com/sebgroup/green/issues/392)) ([5077380](https://github.com/sebgroup/green/commit/507738055a66c25a8029feda70514a0f80389ed1))
- 🐛 fixing import to alert-ribbon ([bc649a2](https://github.com/sebgroup/green/commit/bc649a29a8a84382df8bc07f2f8583f8feec8474))
- 🐛 fizes aurtoprefixer warnings ([8ef81ad](https://github.com/sebgroup/green/commit/8ef81ad224b5feedef26861c4a0373f0e847e59f))
- 🐛 form info misaligning ([7395c2c](https://github.com/sebgroup/green/commit/7395c2c293f27ab6a9cecb53b3fdd6ce3528ab68))
- 🐛 header 3 size on mobile ([0362098](https://github.com/sebgroup/green/commit/03620987ab32978e3026786a6221aacb0bc8ff41))
- 🐛 hiding closed accordion items and removing transitioning ([5952197](https://github.com/sebgroup/green/commit/5952197e03dbe44ea8124c95e2e6595e7f472a34))
- 🐛 make static text fixed at the end of parent element ([#815](https://github.com/sebgroup/green/issues/815)) ([ab8118c](https://github.com/sebgroup/green/commit/ab8118c285edf43ee93b88107736cc365b7f38c1))
- 🐛 Make wizard step card footber button show flex-start ([#876](https://github.com/sebgroup/green/issues/876)) ([8334baa](https://github.com/sebgroup/green/commit/8334baab6f7527d19e04e0f283a6cc6c3be4182c))
- 🐛 margin on form-item and form-group ([4d3b7fd](https://github.com/sebgroup/green/commit/4d3b7fd36878a25ed2584af00bae70f669fd7442))
- 🐛 match form info color to feedback ([#806](https://github.com/sebgroup/green/issues/806)) ([4d52a1e](https://github.com/sebgroup/green/commit/4d52a1e2b8729b8a0b32dc484f98162a33c55162))
- 🐛 match green's form-info styles ([c183f01](https://github.com/sebgroup/green/commit/c183f012c6611ccc7d07342f22b3505df2780699))
- 🐛 merge radio with latest changes ([034458e](https://github.com/sebgroup/green/commit/034458e8ab0d14524acba99a336e3c969ee290ad))
- 🐛 move transition to hover ([b1444a2](https://github.com/sebgroup/green/commit/b1444a2151bf8743570db2062d5b8570bc4f3b15))
- 🐛 new angular component ([9bcf96b](https://github.com/sebgroup/green/commit/9bcf96b27565e69fc821f23ed131f52d3d4d6434))
- 🐛 overriding ibp styling for backdrop ([#793](https://github.com/sebgroup/green/issues/793)) ([a8f20dc](https://github.com/sebgroup/green/commit/a8f20dc4946c886c2ba2133b22b85d957546e5f8))
- 🐛 radio & checkbox alignment ([8425b6b](https://github.com/sebgroup/green/commit/8425b6baa3bfc0a9a91cbbd9dba49928292e45af)), closes [#733](https://github.com/sebgroup/green/issues/733)
- 🐛 radio alignment and colors ([333b70d](https://github.com/sebgroup/green/commit/333b70db3bc2be528f63ab73d9b378aa11738d54))
- 🐛 remove border on mozilla browsers ([091a4ce](https://github.com/sebgroup/green/commit/091a4ceabe446d1ae17117a3efa821f850512d23))
- 🐛 remove inline styles ([e97db73](https://github.com/sebgroup/green/commit/e97db737838ee24b5406229400b6a70047a3aa04))
- 🐛 removing darkmode tokens ([a3ac3d5](https://github.com/sebgroup/green/commit/a3ac3d514bfb4269386fc9970f9d7b2ce54ffdb2))
- 🐛 rendering issues on low pixel density displays ([69c6611](https://github.com/sebgroup/green/commit/69c66110f09d1fead47b2e21e1ca98b191e47cb2))
- 🐛 responsive click on select arrow ([3fb18bb](https://github.com/sebgroup/green/commit/3fb18bb24cf57b8accae4e41449ac58dc5d7e8e9))
- 🐛 session with isak fixing bugs ([23d42d4](https://github.com/sebgroup/green/commit/23d42d473a314f27a8ea8376994ce0557d3d3747))
- 🐛 sizing bug in firefox ([9e074d2](https://github.com/sebgroup/green/commit/9e074d266fca1e2118a2a7609bb06462bb41274d))
- 🐛 tokens not imported correctly ([14defce](https://github.com/sebgroup/green/commit/14defceaa01221d36722feb193e6bece8768c024))
- 🐛 truncating long options for select ([#766](https://github.com/sebgroup/green/issues/766)) ([c383180](https://github.com/sebgroup/green/commit/c3831804b056dfcef42dd7b2fcc600ed604b5c96)), closes [#760](https://github.com/sebgroup/green/issues/760)
- 🐛 update based on pr comments ([0652fef](https://github.com/sebgroup/green/commit/0652fef5ca3e06601d1fad80d53ff80caee96c28))
- 🐛 Updated documentation ([05537d5](https://github.com/sebgroup/green/commit/05537d55b48271764abbc108b01d124728e58c62))
- 🐛 Updated react & angular components that has fieldsets ([f4525a1](https://github.com/sebgroup/green/commit/f4525a19d0963122801a0102b928481cb4ec1414))
- 🐛 Usage of close in alert, badge, button, card & modal ([71f2cb3](https://github.com/sebgroup/green/commit/71f2cb32b4a002118e8500c90115ccb294091ce5))
- 🐛 validation indicator does not exceed group element ([9da4031](https://github.com/sebgroup/green/commit/9da40317ad930681c2aa8d72a55fb47665fd49a0))
- 🐛 zindex problem on form-group ([ccb6f77](https://github.com/sebgroup/green/commit/ccb6f77dbea6cfd3eb30f6648bc1060bf2d7cdda)), closes [#777](https://github.com/sebgroup/green/issues/777)
- **alert:** add margin to links in footer ([00364a2](https://github.com/sebgroup/green/commit/00364a2e42ee3f5a274253502f8215df742edbd3)), closes [#376](https://github.com/sebgroup/green/issues/376)
- **alert:** adjust spacing ([2415f8e](https://github.com/sebgroup/green/commit/2415f8ee3e9b3c46a007c4870beb0b341d43eed9))
- **alert:** clean up code, tokens and example ([#295](https://github.com/sebgroup/green/issues/295)) ([73f5cb3](https://github.com/sebgroup/green/commit/73f5cb3227a881b0c589f336add8522fd91801be)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **alert:** update variants ([277ed95](https://github.com/sebgroup/green/commit/277ed95f813c667c5a007c587d27311811040300)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **angular:** datepicker add year and month dropdown ([2117354](https://github.com/sebgroup/green/commit/21173542877a96b88c5d3f8b6c201bee4d3e91ac))
- **badge:** display inline-flex ([5795f54](https://github.com/sebgroup/green/commit/5795f5447e668be00f4252825c673f83b1a7a43a))
- **badge:** update variants ([5684ed1](https://github.com/sebgroup/green/commit/5684ed19ee15c0eef1ddb945bfa21782a6df3750)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **border-color:** use a lighter border in dark mode for better contrast ([#1023](https://github.com/sebgroup/green/issues/1023)) ([99f6203](https://github.com/sebgroup/green/commit/99f62034be3ca1140e5ddf56337b5675fbf0aea6)), closes [#928](https://github.com/sebgroup/green/issues/928)
- **border:** clean up code ([#299](https://github.com/sebgroup/green/issues/299)) ([1086bf2](https://github.com/sebgroup/green/commit/1086bf240a76103539a60ab47e43e63e34a7e2ea)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **border:** only set color if different than default ([0df80c5](https://github.com/sebgroup/green/commit/0df80c51f1f87d0e9a57bef64898adc4bfb9a64d))
- **button:** adjust small button size ([#915](https://github.com/sebgroup/green/issues/915)) ([32cf177](https://github.com/sebgroup/green/commit/32cf177a4836c76ce6b098ade77c92f6bd8886e5))
- **button:** styling for ghost button ([#177](https://github.com/sebgroup/green/issues/177)) ([6ef63e5](https://github.com/sebgroup/green/commit/6ef63e545c82266d2ca2cc8662a55c11ecbc7fc2)), closes [#176](https://github.com/sebgroup/green/issues/176)
- **card:** clean up code and tokens ([985afe4](https://github.com/sebgroup/green/commit/985afe4feb319ae3bc1d3258f44ac5e99f170ee6)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **checkbox:** animations & hover ([#868](https://github.com/sebgroup/green/issues/868)) ([d2edb2e](https://github.com/sebgroup/green/commit/d2edb2ec92bcfae1e447efecff83517ef6340183))
- **checkbox:** clean up ([5490cf6](https://github.com/sebgroup/green/commit/5490cf60bed4e2b015341c74ea318a9c0eb7cbe5)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **chlorophyll:** form component responsive sizes ([e0295da](https://github.com/sebgroup/green/commit/e0295daa121934a19526b199d6aaaa22b3766a29)), closes [#554](https://github.com/sebgroup/green/issues/554)
- **chlorophyll:** form-group margin in mobile ([2281b06](https://github.com/sebgroup/green/commit/2281b0689ee3fbf619940668c4349964aa813641))
- **chlorophyll:** reset green styles ([12c33bd](https://github.com/sebgroup/green/commit/12c33bd2ce41eca65e965f4ddc27c1f4b97b66a1))
- clean up and move tokens for z-index ([#301](https://github.com/sebgroup/green/issues/301)) ([2020139](https://github.com/sebgroup/green/commit/202013963e39b930aaba476732186b833d243e3c))
- **close:** clean up ([#300](https://github.com/sebgroup/green/issues/300)) ([5a13f44](https://github.com/sebgroup/green/commit/5a13f44d16f268dc3262104648522952554bb463)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **close:** hide text content inside close button ([1f7a7ca](https://github.com/sebgroup/green/commit/1f7a7ca590d30f0f74aab5ad00fa4a4a043a5d18))
- **color:** dark green color updated (dark2) ([7d32f59](https://github.com/sebgroup/green/commit/7d32f5997d16746f81fe40065aef12db8aa8cd1d)), closes [#961](https://github.com/sebgroup/green/issues/961)
- **colors:** add utility class for light and dark ([6f30b5f](https://github.com/sebgroup/green/commit/6f30b5f3405e291735a2fda411727969922c5edc)), closes [#338](https://github.com/sebgroup/green/issues/338)
- **datepicker:** add active state ([8537204](https://github.com/sebgroup/green/commit/85372040002e73d9fed354848339486a11d77eaa))
- **datepicker:** add calendar icon ([19b8599](https://github.com/sebgroup/green/commit/19b8599e77269d1c4cc5d180c4f6547b0d84d45f))
- **datepicker:** add icons for next and previous ([2379631](https://github.com/sebgroup/green/commit/237963128db2695c6748e298e358e8f9272cca5a))
- **datepicker:** add z-index ([acd6cdd](https://github.com/sebgroup/green/commit/acd6cddb17f4a3b251b9ebb05726a2d40688430b))
- **datepicker:** improve mobile layout ([fe58ac1](https://github.com/sebgroup/green/commit/fe58ac19120bc988c999fe6edeb6b332f11751c2)), closes [#471](https://github.com/sebgroup/green/issues/471)
- **datepicker:** label spacing ([#1020](https://github.com/sebgroup/green/issues/1020)) ([fcb24eb](https://github.com/sebgroup/green/commit/fcb24ebba371ad19d56bcdab9b2af26f8fd67e66))
- **dropdown:** add sass dependencies ([cd77677](https://github.com/sebgroup/green/commit/cd77677989fece72cbc8980deb39569c95fd5088)), closes [#448](https://github.com/sebgroup/green/issues/448)
- **dropdown:** add styles for label and validation ([12c5648](https://github.com/sebgroup/green/commit/12c56488e1461290253b1b108c539b2f3f97ed24))
- **dropdown:** allow empty texts ([6d4c125](https://github.com/sebgroup/green/commit/6d4c1250e3b5a625d5f300e4c50d2fddda31a3df))
- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/sebgroup/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))
- **dropdown:** border-color of popover ([9c4303e](https://github.com/sebgroup/green/commit/9c4303ef549340054b7bf7fbfbc9fc337277e23e)), closes [#375](https://github.com/sebgroup/green/issues/375)
- **dropdown:** increase default z-index of popover ([#956](https://github.com/sebgroup/green/issues/956)) ([acf2267](https://github.com/sebgroup/green/commit/acf2267c54bafd1be70405617fc659c05c2e2d6a))
- **dropdown:** max height for listbox ([db47cbe](https://github.com/sebgroup/green/commit/db47cbe57ccad676329d38ccec18f1c6280a188b))
- **dropdown:** multiselect inside horizontal container ([5e27cf1](https://github.com/sebgroup/green/commit/5e27cf11095bbda3f0df16b2958b278d6b2eca86))
- **dropdown:** scroll to option on arrow navigation ([02c7b2c](https://github.com/sebgroup/green/commit/02c7b2c2c22892fb0b9f6ea2dcbec18f39d006f0)), closes [#463](https://github.com/sebgroup/green/issues/463)
- **expandable-form-info:** use small icon button ([9eb4cd6](https://github.com/sebgroup/green/commit/9eb4cd6ba9aee9d77157c56003e5d5140dbb3e59))
- filter chip icons ([#951](https://github.com/sebgroup/green/issues/951)) ([3bf6d6a](https://github.com/sebgroup/green/commit/3bf6d6a128d793af4eb66f0effe30a960bfbe172)), closes [#945](https://github.com/sebgroup/green/issues/945)
- **form-validation:** margin for error in horizontal forms ([4957c0c](https://github.com/sebgroup/green/commit/4957c0cea106b1d0dacc28557bcde8b25d984e62)), closes [#404](https://github.com/sebgroup/green/issues/404)
- **form:** margin for form info in horizontal form ([889a186](https://github.com/sebgroup/green/commit/889a186abfb0078bd73ee04fb3675fb9e3cf36bb)), closes [#468](https://github.com/sebgroup/green/issues/468)
- **group:** don't grow buttons in groups with inputs ([dbd3dd5](https://github.com/sebgroup/green/commit/dbd3dd55887c207b47a68002374b31cea8ab925b))
- **icon-button:** add missing type ([#891](https://github.com/sebgroup/green/issues/891)) ([70ea59d](https://github.com/sebgroup/green/commit/70ea59db8e9c499047661d703a5e6826a888039e))
- **input-field:** remove `cursor: pointer` ([29b7c7c](https://github.com/sebgroup/green/commit/29b7c7c317bb6e9e6de6d77755d3bbb55645866a))
- **input:** added small version ([#921](https://github.com/sebgroup/green/issues/921)) ([cbaff51](https://github.com/sebgroup/green/commit/cbaff51539c9a72741521f772c3889852e7411ea))
- **link:** no border for links ([74eeef9](https://github.com/sebgroup/green/commit/74eeef9222110c7647fd927af7c73d1817097eda))
- **links:** fix incorrectly applied `:visited` color ([#857](https://github.com/sebgroup/green/issues/857)) ([31b3f50](https://github.com/sebgroup/green/commit/31b3f5030357e87605da8153f8b05b609a69cd29))
- **links:** links now have thicker underline on hover on all browsers ([#985](https://github.com/sebgroup/green/issues/985)) ([f3a2a95](https://github.com/sebgroup/green/commit/f3a2a95b41cced07b26382ca0d2ba5aa0114839a))
- **link:** style and option for visited links ([32a6fb3](https://github.com/sebgroup/green/commit/32a6fb33ca2562a111f6b66a85ebc14d053b35b0))
- **list:** refactor mixins and tokens, add support for dark mode ([#318](https://github.com/sebgroup/green/issues/318)) ([78e00e7](https://github.com/sebgroup/green/commit/78e00e7a2f1f5100b0af6ff09a606e5189cb070d)), closes [#314](https://github.com/sebgroup/green/issues/314)
- lists font weight and size ([#896](https://github.com/sebgroup/green/issues/896)) ([d36caac](https://github.com/sebgroup/green/commit/d36caac913986b3f66084707e3697ef8070cacc6))
- **modal:** margins for buttons in modal footer ([0302f25](https://github.com/sebgroup/green/commit/0302f250b884483dc2f0124a5df2fdae6b88b4b6)), closes [#311](https://github.com/sebgroup/green/issues/311)
- **modal:** use css variables from theme ([0283a6f](https://github.com/sebgroup/green/commit/0283a6fbf25faa428e4b17a446abac2ba0b814f5)), closes [#389](https://github.com/sebgroup/green/issues/389)
- **outline-focus:** support css variables ([c828330](https://github.com/sebgroup/green/commit/c8283300d294652c7d69bb6d95bf2be1970623c2))
- **radio-button:** clean up ([5816bf5](https://github.com/sebgroup/green/commit/5816bf5285b1e44c90f767a7bbc94b492bc798a7)), closes [#292](https://github.com/sebgroup/green/issues/292)
- remove border color reset on focus ([ca42542](https://github.com/sebgroup/green/commit/ca42542403fe909a88e7832694b76bfb089b9ecd))
- **reset:** switch from css to scss ([#211](https://github.com/sebgroup/green/issues/211)) ([000aae2](https://github.com/sebgroup/green/commit/000aae2f595e3846c911c283e3272b22519827bb)), closes [#202](https://github.com/sebgroup/green/issues/202)
- **slide-toggle:** correct `aria-role` -> `role` ([b157bf4](https://github.com/sebgroup/green/commit/b157bf40a8e8aa3e22fbd3792ccbc46bc4e76d32))
- **slide-toggle:** dark mode border ([#927](https://github.com/sebgroup/green/issues/927)) ([3803917](https://github.com/sebgroup/green/commit/3803917cf19815b67b6a4821f2c4f1da066ae4c6))
- **slide-toggle:** darker background and hover-back transition ([#914](https://github.com/sebgroup/green/issues/914)) ([435625d](https://github.com/sebgroup/green/commit/435625dc6dbbf501cf79c82ec9dc790d1e396547))
- **slide-toggle:** remove hover effect for touch devices ([2e56e35](https://github.com/sebgroup/green/commit/2e56e351f92853c0a28ad55e75c11fbbe2a1da86))
- **slider:** fix layout when instruction field is used ([#1010](https://github.com/sebgroup/green/issues/1010)) ([7f5010f](https://github.com/sebgroup/green/commit/7f5010f0fdad840fcbf308bf898f6368cee62315))
- **slider:** mobile version, small input on desktop, added `aria-labelledby` ([#929](https://github.com/sebgroup/green/issues/929)) ([456c934](https://github.com/sebgroup/green/commit/456c934443e94766231c284b3f1eaa4e8bc6b040)), closes [#902](https://github.com/sebgroup/green/issues/902) [#920](https://github.com/sebgroup/green/issues/920) [#923](https://github.com/sebgroup/green/issues/923)
- **slider:** remove mobile multi-row layout ([#1005](https://github.com/sebgroup/green/issues/1005)) ([9676106](https://github.com/sebgroup/green/commit/9676106eb07ffe7066b3c947e9d04eb84a5bc4da)), closes [#994](https://github.com/sebgroup/green/issues/994)
- **tabs:** add overflow scroll and don't wrap tab content ([df90f95](https://github.com/sebgroup/green/commit/df90f958d3a2f627eb276ee9e29f722852138f5e))
- **typography:** switch back to unitless line-height for body ([#974](https://github.com/sebgroup/green/issues/974)) ([7ed3760](https://github.com/sebgroup/green/commit/7ed376026985f405443d775690c0a8bee3ea3613))
- update default token value for font location ([ca8c983](https://github.com/sebgroup/green/commit/ca8c9837f00c8047c6458b441eb80b1c04cbf42e)), closes [#450](https://github.com/sebgroup/green/issues/450)
- update pagination examples ([71d3ecc](https://github.com/sebgroup/green/commit/71d3ecccecba27f09b53cbb8e9960b406bc5b93b))
- use correct key for font-weight ([bd6c947](https://github.com/sebgroup/green/commit/bd6c9475102a2cc6a6aaf4593c574b2607529627))
- **use-green:** ability to scope all of green ([9daf8bc](https://github.com/sebgroup/green/commit/9daf8bc5e65c34825db04ab27c8d2f78b791a5ce)), closes [#526](https://github.com/sebgroup/green/issues/526)
- **value-list:** added small spacing ([#918](https://github.com/sebgroup/green/issues/918)) ([bc02a99](https://github.com/sebgroup/green/commit/bc02a99262a1f86a76ef596988b3a0b98a73425b))

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Code Refactoring

- 💡 AlertRibbon ([1f31705](https://github.com/sebgroup/green/commit/1f31705235e7edcc63a35cd16018c881d72323a0))
- 💡 changing to alert-ribbon\_\_content class ([db04684](https://github.com/sebgroup/green/commit/db046843b852744d420494faa6428156979f77bc))
- **alert:** update layout ([0028750](https://github.com/sebgroup/green/commit/002875096c01a33509801b431b123c96faab8376)), closes [#438](https://github.com/sebgroup/green/issues/438)

### Features

- 🎸 Accordion ([71c902a](https://github.com/sebgroup/green/commit/71c902a338584f4a7108db4776bda6eea48b884b))
- 🎸 add badge styles and storybook ([4781fad](https://github.com/sebgroup/green/commit/4781fadbb62c6f1e8dea95dbc0e11e3b60a0be21))
- 🎸 add input instruction prop to the component ([d02f204](https://github.com/sebgroup/green/commit/d02f204dc4b6606b9104dcbca21be5c2540dcfb7))
- 🎸 Add link variants: animated with arrow, icon on the left or right ([#797](https://github.com/sebgroup/green/issues/797)) ([02dfc85](https://github.com/sebgroup/green/commit/02dfc853e5a59a829299aab02a9be665a231fa9c)), closes [#787](https://github.com/sebgroup/green/issues/787) [#787](https://github.com/sebgroup/green/issues/787) [#787](https://github.com/sebgroup/green/issues/787)
- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/sebgroup/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))
- 🎸 add small close button for badges ([fdc1578](https://github.com/sebgroup/green/commit/fdc157823e2b9e4dfb3d9e85c8c727d03f830db9))
- 🎸 add support for black color check icons on check lists ([#986](https://github.com/sebgroup/green/issues/986)) ([ff9d1b7](https://github.com/sebgroup/green/commit/ff9d1b731e36a6661a4f643dc0f982cbb255677a))
- 🎸 Added story for Table ([583eb1e](https://github.com/sebgroup/green/commit/583eb1e3f126296274c1dbf81beee8e3befa44a0)), closes [#360](https://github.com/sebgroup/green/issues/360)
- 🎸 adding tertiary button variant ([0c9f8bc](https://github.com/sebgroup/green/commit/0c9f8bcbe41e3ea5a162851a00a00e3bd2ad140f))
- 🎸 adding validation on stepper component ([afacee1](https://github.com/sebgroup/green/commit/afacee1fe0e6b8a6a0b57a34cbe6d192dab0d1a9))
- 🎸 Context Menu ([#852](https://github.com/sebgroup/green/issues/852)) ([8ede687](https://github.com/sebgroup/green/commit/8ede687c363f3fbc9760d958ae17a9c467ca90e6))
- 🎸 Dropdown - support search filter [#473](https://github.com/sebgroup/green/issues/473) ([4883331](https://github.com/sebgroup/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))
- 🎸 expandable information ([1c9a4a6](https://github.com/sebgroup/green/commit/1c9a4a675969031fcf69d4825ac436bf8954ded5))
- 🎸 Expandable information ([66cf2d5](https://github.com/sebgroup/green/commit/66cf2d5d923a1d1549b80367149c70d4664bfb02))
- 🎸 FormItem ([eafe1aa](https://github.com/sebgroup/green/commit/eafe1aada3527ce9fc593901daf9d22fa53f028e))
- 🎸 horizontal checkbox group, form item validation ([58d768a](https://github.com/sebgroup/green/commit/58d768ae37c941522241d9121cead878a20af70d))
- 🎸 IconButton React ([222ab2b](https://github.com/sebgroup/green/commit/222ab2bb1cc2d42a0af3270b40f13347ba3aef20))
- 🎸 indeterminate checkbox ([50175c1](https://github.com/sebgroup/green/commit/50175c166b0c911d47547b9474aef2ff103fc3d6))
- 🎸 new chlorophyll slider ([312f05c](https://github.com/sebgroup/green/commit/312f05c0984c0203821573477c6b7784198d9243))
- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/sebgroup/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/sebgroup/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- 🎸 radio button with latest figma design ([76d38aa](https://github.com/sebgroup/green/commit/76d38aa6a998136929c5d849a52f8d8429ff23f5)), closes [#459](https://github.com/sebgroup/green/issues/459)
- 🎸 react select component ([91f6fa8](https://github.com/sebgroup/green/commit/91f6fa883a68ac0dd3dd6c03ef282edb877ede08))
- 🎸 Renders datepicker and enabled select ([6e5158d](https://github.com/sebgroup/green/commit/6e5158d28c47a36b361f4a8bd26e5161e3902ffe))
- 🎸 Styling for headers ([d5c0597](https://github.com/sebgroup/green/commit/d5c0597b48f878817d7af118bb8b980b00035075))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))
- 🎸 ValueList ([6088988](https://github.com/sebgroup/green/commit/6088988d0976b837df208d9a2f0af6379af2492b))
- 💡 multiple sizes of spinner component ([#978](https://github.com/sebgroup/green/issues/978)) ([6c1c180](https://github.com/sebgroup/green/commit/6c1c180fbf63955e2b0c74c4a129cdd42368bc0c))
- add component filter-chip ([#808](https://github.com/sebgroup/green/issues/808)) ([edd7038](https://github.com/sebgroup/green/commit/edd7038292a732dfd8c03c52cc9cf423b9917461)), closes [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802)
- **backdrop:** add mixin ([2ffd0ee](https://github.com/sebgroup/green/commit/2ffd0ee190ead319a3a700808da5a1eb1e144a05))
- **badge:** add container for badge layout ([e4dcf49](https://github.com/sebgroup/green/commit/e4dcf4949105582d656bcf966206c7338d40bbc8))
- **button:** add `danger` variants ([ddf722a](https://github.com/sebgroup/green/commit/ddf722a38ac5db60cd887eca0d480273239df978)), closes [#565](https://github.com/sebgroup/green/issues/565)
- **chlorophyll:** add pagination ([d303e78](https://github.com/sebgroup/green/commit/d303e78885eec8fcf0e111b349450634b8361517))
- **datepicker:** add basic markup and css ([a1fbf8e](https://github.com/sebgroup/green/commit/a1fbf8e1a635600843315cac62f1e1225584320e)), closes [#333](https://github.com/sebgroup/green/issues/333)
- **datepicker:** add today ([076b1a4](https://github.com/sebgroup/green/commit/076b1a43774c0e0d3228f1fc73bbc9678b351d25))
- **expandable-form-info:** allow custom expandable content ([#913](https://github.com/sebgroup/green/issues/913)) ([bfa6f4e](https://github.com/sebgroup/green/commit/bfa6f4ee6964ae65ec4bdae5ba7b55579495df7d))
- **icon-button:** add small variant ([6f99ddb](https://github.com/sebgroup/green/commit/6f99ddb4e8ca2c52803d3811e49f0d4bd2e74ede))
- **icons:** add icons for next and previous ([7dd1bde](https://github.com/sebgroup/green/commit/7dd1bdeb4dc611f5023102141bb42d7fc061f885))
- **icons:** add initial version ([a934292](https://github.com/sebgroup/green/commit/a9342927f68840234359bd0ca39a973affc71ea2)), closes [#117](https://github.com/sebgroup/green/issues/117)
- **in-page-wizard:** add markup examples for In-page wizard ([#823](https://github.com/sebgroup/green/issues/823)) ([816b086](https://github.com/sebgroup/green/commit/816b0862e1ec531819447c602d4b671900debaa2))
- **link:** add styling for disabled state ([cf9d8d7](https://github.com/sebgroup/green/commit/cf9d8d7f37723df5d5876a18df12bcd35c9a0d04))
- **react:** information label can now be react node ([#990](https://github.com/sebgroup/green/issues/990)) ([448b9f6](https://github.com/sebgroup/green/commit/448b9f6de32ee58429fa7465f61d2618d0b6c6bb))
- **skeleton-loader:** add styles ([69eedcd](https://github.com/sebgroup/green/commit/69eedcd69c4e33c91c7a576969b72078adf17e33)), closes [#541](https://github.com/sebgroup/green/issues/541)
- **slide-toggle:** add base styles (WIP) ([2a9eca4](https://github.com/sebgroup/green/commit/2a9eca4933424755a3e1583f92e7b7a7ce432236))
- **slide-toggle:** add Canvas section ([3e46119](https://github.com/sebgroup/green/commit/3e46119ba15d27d2ae8a0af171457104b09644b3))
- **slide-toggle:** add focus styling ([a6d4180](https://github.com/sebgroup/green/commit/a6d4180526b1b837b1f92a67242c141f2bf81600))
- **slide-toggle:** add hover states and transition ([79f03f6](https://github.com/sebgroup/green/commit/79f03f6459f7bff8d3cbeffa08a27c0e15af48f6))
- **slide-toggle:** add mobile styles ([727e154](https://github.com/sebgroup/green/commit/727e1549dc7b475e9ba3e7cb65245017d24adca0))
- **slider:** add styles for min max labels ([#878](https://github.com/sebgroup/green/issues/878)) ([79af603](https://github.com/sebgroup/green/commit/79af603d307917cd5aa17dd48d1e221e9eb22cc2))
- **slider:** add support for unit field ([#828](https://github.com/sebgroup/green/issues/828)) ([55c5f70](https://github.com/sebgroup/green/commit/55c5f70aa2716e526ad781d2a1b71803288e75a2))
- **spinner:** add a spinner component to chlorophyll ([#830](https://github.com/sebgroup/green/issues/830)) ([167ccb6](https://github.com/sebgroup/green/commit/167ccb6f35c90e409147747db4c18d61d27778b8))
- **stepper:** add markup and css ([2c9254d](https://github.com/sebgroup/green/commit/2c9254de1a79728c98cbf1833011d45220d4f593)), closes [#523](https://github.com/sebgroup/green/issues/523)
- **table:** add styles ([adb9af2](https://github.com/sebgroup/green/commit/adb9af2eddb67fe84a9cba3f9054512c17ab0c57)), closes [#360](https://github.com/sebgroup/green/issues/360)
- **textarea:** add styles ([32ef5d8](https://github.com/sebgroup/green/commit/32ef5d8293556b767f8336b5cc2b1399aae41c6f)), closes [#14](https://github.com/sebgroup/green/issues/14)
- **wizard:** new `.editable` class for parent in-wizard-step ([#1014](https://github.com/sebgroup/green/issues/1014)) ([031f99e](https://github.com/sebgroup/green/commit/031f99e941197d374e279d4094bc47d905fca05b))

### Performance Improvements

- scoping with `.use-green` ([ac96d7d](https://github.com/sebgroup/green/commit/ac96d7d3c56b4a329b2a19a16659f5b35942630b))

### Reverts

- Revert "fix(tabs): only apply style when tab has href attribute" ([2dfa0e5](https://github.com/sebgroup/green/commit/2dfa0e598ce46aa6e815988c8fee7ac20cb0ead3))

### Styles

- 💄 Checkbox, fieldset, forminfo and validation ([c8be77c](https://github.com/sebgroup/green/commit/c8be77c93814ac38cc43c5013d9f16926de67cc2))
- 💄 Close button, Alert ribbon ([e622480](https://github.com/sebgroup/green/commit/e6224806649ebb841721130046cfd3d2815b5515))
- 💄 Fixed input group sizing ([f80dbaf](https://github.com/sebgroup/green/commit/f80dbafa6d1a3269f4f40dfba76945ef8556692c))

### BREAKING CHANGES

- 🧨 Not using footer element in Alert Ribbon because it's incorrect
  according to html spec
- 🧨 Renaming Alert export to AlertRibbon, changing styling form
  [role="alert"] to .alert-ribbon

✅ Closes: 659

- 🧨 change to html structure for fieldset form groups. checkboxes and radios
  should be wrapped in a div
- 🧨 Close button need to have a i-elemented added as a child to the button
  tag in order to display the cross icon.
- 🧨 -Breaks fieldset styling since we need to add a div to to wrap the form
  items.
- 🧨 Will break input layouts since form group take up 100% of container
- 🧨 -
- **alert:** Markup structure has changed, see storybook for more info.
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

# [1.15.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.14.2...@sebgroup/chlorophyll@1.15.0) (2023-09-18)

### Features

- **wizard:** new `.editable` class for parent in-wizard-step ([#1014](https://github.com/sebgroup/green/issues/1014)) ([031f99e](https://github.com/sebgroup/green/commit/031f99e941197d374e279d4094bc47d905fca05b))

## [1.14.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.14.1...@sebgroup/chlorophyll@1.14.2) (2023-09-15)

### Bug Fixes

- **slider:** fix layout when instruction field is used ([#1010](https://github.com/sebgroup/green/issues/1010)) ([7f5010f](https://github.com/sebgroup/green/commit/7f5010f0fdad840fcbf308bf898f6368cee62315))
- **slider:** remove mobile multi-row layout ([#1005](https://github.com/sebgroup/green/issues/1005)) ([9676106](https://github.com/sebgroup/green/commit/9676106eb07ffe7066b3c947e9d04eb84a5bc4da)), closes [#994](https://github.com/sebgroup/green/issues/994)

## [1.14.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.14.0...@sebgroup/chlorophyll@1.14.1) (2023-09-14)

# [1.14.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.13.0...@sebgroup/chlorophyll@1.14.0) (2023-09-08)

### Features

- **react:** information label can now be react node ([#990](https://github.com/sebgroup/green/issues/990)) ([448b9f6](https://github.com/sebgroup/green/commit/448b9f6de32ee58429fa7465f61d2618d0b6c6bb))

# [1.13.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.12.0...@sebgroup/chlorophyll@1.13.0) (2023-09-05)

### Bug Fixes

- **links:** links now have thicker underline on hover on all browsers ([#985](https://github.com/sebgroup/green/issues/985)) ([f3a2a95](https://github.com/sebgroup/green/commit/f3a2a95b41cced07b26382ca0d2ba5aa0114839a))
- use correct key for font-weight ([bd6c947](https://github.com/sebgroup/green/commit/bd6c9475102a2cc6a6aaf4593c574b2607529627))

### Features

- 🎸 add support for black color check icons on check lists ([#986](https://github.com/sebgroup/green/issues/986)) ([ff9d1b7](https://github.com/sebgroup/green/commit/ff9d1b731e36a6661a4f643dc0f982cbb255677a))

# [1.12.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.8...@sebgroup/chlorophyll@1.12.0) (2023-08-30)

### Features

- 💡 multiple sizes of spinner component ([#978](https://github.com/sebgroup/green/issues/978)) ([6c1c180](https://github.com/sebgroup/green/commit/6c1c180fbf63955e2b0c74c4a129cdd42368bc0c))

## [1.11.8](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.7...@sebgroup/chlorophyll@1.11.8) (2023-08-25)

### Bug Fixes

- **typography:** switch back to unitless line-height for body ([#974](https://github.com/sebgroup/green/issues/974)) ([7ed3760](https://github.com/sebgroup/green/commit/7ed376026985f405443d775690c0a8bee3ea3613))

## [1.11.7](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.6...@sebgroup/chlorophyll@1.11.7) (2023-08-23)

### Bug Fixes

- **color:** dark green color updated (dark2) ([7d32f59](https://github.com/sebgroup/green/commit/7d32f5997d16746f81fe40065aef12db8aa8cd1d)), closes [#961](https://github.com/sebgroup/green/issues/961)

## [1.11.6](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.5...@sebgroup/chlorophyll@1.11.6) (2023-08-21)

### Bug Fixes

- 🐛 fix context menu position in relative parent ([#970](https://github.com/sebgroup/green/issues/970)) ([d8f208e](https://github.com/sebgroup/green/commit/d8f208ed4766e0b940ebf4491ca4158715380d0f))

## [1.11.5](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.4...@sebgroup/chlorophyll@1.11.5) (2023-08-14)

### Bug Fixes

- **dropdown:** increase default z-index of popover ([#956](https://github.com/sebgroup/green/issues/956)) ([acf2267](https://github.com/sebgroup/green/commit/acf2267c54bafd1be70405617fc659c05c2e2d6a))

## [1.11.4](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.3...@sebgroup/chlorophyll@1.11.4) (2023-08-08)

### Bug Fixes

- filter chip icons ([#951](https://github.com/sebgroup/green/issues/951)) ([3bf6d6a](https://github.com/sebgroup/green/commit/3bf6d6a128d793af4eb66f0effe30a960bfbe172)), closes [#945](https://github.com/sebgroup/green/issues/945)

## [1.11.3](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.2...@sebgroup/chlorophyll@1.11.3) (2023-07-07)

### Bug Fixes

- **input:** added small version ([#921](https://github.com/sebgroup/green/issues/921)) ([cbaff51](https://github.com/sebgroup/green/commit/cbaff51539c9a72741521f772c3889852e7411ea))
- **slide-toggle:** dark mode border ([#927](https://github.com/sebgroup/green/issues/927)) ([3803917](https://github.com/sebgroup/green/commit/3803917cf19815b67b6a4821f2c4f1da066ae4c6))
- **slider:** mobile version, small input on desktop, added `aria-labelledby` ([#929](https://github.com/sebgroup/green/issues/929)) ([456c934](https://github.com/sebgroup/green/commit/456c934443e94766231c284b3f1eaa4e8bc6b040)), closes [#902](https://github.com/sebgroup/green/issues/902) [#920](https://github.com/sebgroup/green/issues/920) [#923](https://github.com/sebgroup/green/issues/923)

## [1.11.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.1...@sebgroup/chlorophyll@1.11.2) (2023-06-21)

### Bug Fixes

- **value-list:** added small spacing ([#918](https://github.com/sebgroup/green/issues/918)) ([bc02a99](https://github.com/sebgroup/green/commit/bc02a99262a1f86a76ef596988b3a0b98a73425b))

## [1.11.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.11.0...@sebgroup/chlorophyll@1.11.1) (2023-06-19)

### Bug Fixes

- **button:** adjust small button size ([#915](https://github.com/sebgroup/green/issues/915)) ([32cf177](https://github.com/sebgroup/green/commit/32cf177a4836c76ce6b098ade77c92f6bd8886e5))

# [1.11.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.10.3...@sebgroup/chlorophyll@1.11.0) (2023-06-16)

### Bug Fixes

- **expandable-form-info:** use small icon button ([9eb4cd6](https://github.com/sebgroup/green/commit/9eb4cd6ba9aee9d77157c56003e5d5140dbb3e59))
- **slide-toggle:** darker background and hover-back transition ([#914](https://github.com/sebgroup/green/issues/914)) ([435625d](https://github.com/sebgroup/green/commit/435625dc6dbbf501cf79c82ec9dc790d1e396547))

### Features

- **expandable-form-info:** allow custom expandable content ([#913](https://github.com/sebgroup/green/issues/913)) ([bfa6f4e](https://github.com/sebgroup/green/commit/bfa6f4ee6964ae65ec4bdae5ba7b55579495df7d))
- **icon-button:** add small variant ([6f99ddb](https://github.com/sebgroup/green/commit/6f99ddb4e8ca2c52803d3811e49f0d4bd2e74ede))

## [1.10.3](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.10.2...@sebgroup/chlorophyll@1.10.3) (2023-05-24)

### Bug Fixes

- 🐛 Context menu on scroll markForCheck and css fixes ([#897](https://github.com/sebgroup/green/issues/897)) ([89b83fc](https://github.com/sebgroup/green/commit/89b83fc4d09456b8f983eb2ece14fa9ea182fc5a))
- lists font weight and size ([#896](https://github.com/sebgroup/green/issues/896)) ([d36caac](https://github.com/sebgroup/green/commit/d36caac913986b3f66084707e3697ef8070cacc6))

## [1.10.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.10.1...@sebgroup/chlorophyll@1.10.2) (2023-05-16)

## [1.10.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.10.0...@sebgroup/chlorophyll@1.10.1) (2023-05-16)

### Bug Fixes

- **icon-button:** add missing type ([#891](https://github.com/sebgroup/green/issues/891)) ([70ea59d](https://github.com/sebgroup/green/commit/70ea59db8e9c499047661d703a5e6826a888039e))

# [1.10.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.9.1...@sebgroup/chlorophyll@1.10.0) (2023-05-10)

### Bug Fixes

- 🐛 Make wizard step card footber button show flex-start ([#876](https://github.com/sebgroup/green/issues/876)) ([8334baa](https://github.com/sebgroup/green/commit/8334baab6f7527d19e04e0f283a6cc6c3be4182c))

### Features

- **slider:** add styles for min max labels ([#878](https://github.com/sebgroup/green/issues/878)) ([79af603](https://github.com/sebgroup/green/commit/79af603d307917cd5aa17dd48d1e221e9eb22cc2))

## [1.9.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.9.0...@sebgroup/chlorophyll@1.9.1) (2023-05-08)

### Bug Fixes

- **checkbox:** animations & hover ([#868](https://github.com/sebgroup/green/issues/868)) ([d2edb2e](https://github.com/sebgroup/green/commit/d2edb2ec92bcfae1e447efecff83517ef6340183))

# [1.9.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.8.1...@sebgroup/chlorophyll@1.9.0) (2023-05-03)

### Features

- 🎸 Context Menu ([#852](https://github.com/sebgroup/green/issues/852)) ([8ede687](https://github.com/sebgroup/green/commit/8ede687c363f3fbc9760d958ae17a9c467ca90e6))

## [1.8.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.8.0...@sebgroup/chlorophyll@1.8.1) (2023-05-02)

### Bug Fixes

- **links:** fix incorrectly applied `:visited` color ([#857](https://github.com/sebgroup/green/issues/857)) ([31b3f50](https://github.com/sebgroup/green/commit/31b3f5030357e87605da8153f8b05b609a69cd29))

# [1.8.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.7.0...@sebgroup/chlorophyll@1.8.0) (2023-04-13)

### Features

- **in-page-wizard:** add markup examples for In-page wizard ([#823](https://github.com/sebgroup/green/issues/823)) ([816b086](https://github.com/sebgroup/green/commit/816b0862e1ec531819447c602d4b671900debaa2))
- **slider:** add support for unit field ([#828](https://github.com/sebgroup/green/issues/828)) ([55c5f70](https://github.com/sebgroup/green/commit/55c5f70aa2716e526ad781d2a1b71803288e75a2))

# [1.7.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.6.0...@sebgroup/chlorophyll@1.7.0) (2023-04-06)

### Features

- **spinner:** add a spinner component to chlorophyll ([#830](https://github.com/sebgroup/green/issues/830)) ([167ccb6](https://github.com/sebgroup/green/commit/167ccb6f35c90e409147747db4c18d61d27778b8))

# [1.6.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.5.0...@sebgroup/chlorophyll@1.6.0) (2023-04-03)

### Bug Fixes

- 🐛 make static text fixed at the end of parent element ([#815](https://github.com/sebgroup/green/issues/815)) ([ab8118c](https://github.com/sebgroup/green/commit/ab8118c285edf43ee93b88107736cc365b7f38c1))

### Features

- add component filter-chip ([#808](https://github.com/sebgroup/green/issues/808)) ([edd7038](https://github.com/sebgroup/green/commit/edd7038292a732dfd8c03c52cc9cf423b9917461)), closes [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802) [#802](https://github.com/sebgroup/green/issues/802)

# [1.5.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.4.0...@sebgroup/chlorophyll@1.5.0) (2023-03-29)

### Bug Fixes

- 🐛 fix validation border on active ([#811](https://github.com/sebgroup/green/issues/811)) ([bd8cc32](https://github.com/sebgroup/green/commit/bd8cc321e9c061afb912b284d81bfd82fff0f188))
- 🐛 match form info color to feedback ([#806](https://github.com/sebgroup/green/issues/806)) ([4d52a1e](https://github.com/sebgroup/green/commit/4d52a1e2b8729b8a0b32dc484f98162a33c55162))

### Features

- 🎸 Add link variants: animated with arrow, icon on the left or right ([#797](https://github.com/sebgroup/green/issues/797)) ([02dfc85](https://github.com/sebgroup/green/commit/02dfc853e5a59a829299aab02a9be665a231fa9c)), closes [#787](https://github.com/sebgroup/green/issues/787) [#787](https://github.com/sebgroup/green/issues/787) [#787](https://github.com/sebgroup/green/issues/787)

# [1.4.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.3.0...@sebgroup/chlorophyll@1.4.0) (2023-03-20)

### Bug Fixes

- 🐛 overriding ibp styling for backdrop ([#793](https://github.com/sebgroup/green/issues/793)) ([a8f20dc](https://github.com/sebgroup/green/commit/a8f20dc4946c886c2ba2133b22b85d957546e5f8))
- **chlorophyll:** reset green styles ([12c33bd](https://github.com/sebgroup/green/commit/12c33bd2ce41eca65e965f4ddc27c1f4b97b66a1))
- update pagination examples ([71d3ecc](https://github.com/sebgroup/green/commit/71d3ecccecba27f09b53cbb8e9960b406bc5b93b))

### Features

- **chlorophyll:** add pagination ([d303e78](https://github.com/sebgroup/green/commit/d303e78885eec8fcf0e111b349450634b8361517))

# [1.3.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.2.1...@sebgroup/chlorophyll@1.3.0) (2023-03-16)

### Bug Fixes

- 🐛 margin on form-item and form-group ([4d3b7fd](https://github.com/sebgroup/green/commit/4d3b7fd36878a25ed2584af00bae70f669fd7442))
- 🐛 match green's form-info styles ([c183f01](https://github.com/sebgroup/green/commit/c183f012c6611ccc7d07342f22b3505df2780699))
- 🐛 new angular component ([9bcf96b](https://github.com/sebgroup/green/commit/9bcf96b27565e69fc821f23ed131f52d3d4d6434))
- 🐛 remove border on mozilla browsers ([091a4ce](https://github.com/sebgroup/green/commit/091a4ceabe446d1ae17117a3efa821f850512d23))
- 🐛 truncating long options for select ([#766](https://github.com/sebgroup/green/issues/766)) ([c383180](https://github.com/sebgroup/green/commit/c3831804b056dfcef42dd7b2fcc600ed604b5c96)), closes [#760](https://github.com/sebgroup/green/issues/760)
- 🐛 update based on pr comments ([0652fef](https://github.com/sebgroup/green/commit/0652fef5ca3e06601d1fad80d53ff80caee96c28))
- 🐛 zindex problem on form-group ([ccb6f77](https://github.com/sebgroup/green/commit/ccb6f77dbea6cfd3eb30f6648bc1060bf2d7cdda)), closes [#777](https://github.com/sebgroup/green/issues/777)
- **input-field:** remove `cursor: pointer` ([29b7c7c](https://github.com/sebgroup/green/commit/29b7c7c317bb6e9e6de6d77755d3bbb55645866a))

### Features

- 🎸 add input instruction prop to the component ([d02f204](https://github.com/sebgroup/green/commit/d02f204dc4b6606b9104dcbca21be5c2540dcfb7))
- 🎸 new chlorophyll slider ([312f05c](https://github.com/sebgroup/green/commit/312f05c0984c0203821573477c6b7784198d9243))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/sebgroup/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- **button:** add `danger` variants ([ddf722a](https://github.com/sebgroup/green/commit/ddf722a38ac5db60cd887eca0d480273239df978)), closes [#565](https://github.com/sebgroup/green/issues/565)

# [1.3.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.2.1...@sebgroup/chlorophyll@1.3.0) (2023-03-16)

### Bug Fixes

- 🐛 margin on form-item and form-group ([4d3b7fd](https://github.com/sebgroup/green/commit/4d3b7fd36878a25ed2584af00bae70f669fd7442))
- 🐛 match green's form-info styles ([c183f01](https://github.com/sebgroup/green/commit/c183f012c6611ccc7d07342f22b3505df2780699))
- 🐛 new angular component ([9bcf96b](https://github.com/sebgroup/green/commit/9bcf96b27565e69fc821f23ed131f52d3d4d6434))
- 🐛 remove border on mozilla browsers ([091a4ce](https://github.com/sebgroup/green/commit/091a4ceabe446d1ae17117a3efa821f850512d23))
- 🐛 truncating long options for select ([#766](https://github.com/sebgroup/green/issues/766)) ([c383180](https://github.com/sebgroup/green/commit/c3831804b056dfcef42dd7b2fcc600ed604b5c96)), closes [#760](https://github.com/sebgroup/green/issues/760)
- 🐛 update based on pr comments ([0652fef](https://github.com/sebgroup/green/commit/0652fef5ca3e06601d1fad80d53ff80caee96c28))
- 🐛 zindex problem on form-group ([ccb6f77](https://github.com/sebgroup/green/commit/ccb6f77dbea6cfd3eb30f6648bc1060bf2d7cdda)), closes [#777](https://github.com/sebgroup/green/issues/777)
- **input-field:** remove `cursor: pointer` ([29b7c7c](https://github.com/sebgroup/green/commit/29b7c7c317bb6e9e6de6d77755d3bbb55645866a))

### Features

- 🎸 add input instruction prop to the component ([d02f204](https://github.com/sebgroup/green/commit/d02f204dc4b6606b9104dcbca21be5c2540dcfb7))
- 🎸 new chlorophyll slider ([312f05c](https://github.com/sebgroup/green/commit/312f05c0984c0203821573477c6b7784198d9243))
- 🎸 new progress slider disabled theme ([d4e6870](https://github.com/sebgroup/green/commit/d4e6870529750089d51d08a0c6bab1d6eb9e3ded))
- **button:** add `danger` variants ([ddf722a](https://github.com/sebgroup/green/commit/ddf722a38ac5db60cd887eca0d480273239df978)), closes [#565](https://github.com/sebgroup/green/issues/565)

## [1.2.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.2.0...@sebgroup/chlorophyll@1.2.1) (2023-03-03)

### Bug Fixes

- **chlorophyll:** form-group margin in mobile ([2281b06](https://github.com/sebgroup/green/commit/2281b0689ee3fbf619940668c4349964aa813641))

# [1.2.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.1.0...@sebgroup/chlorophyll@1.2.0) (2023-03-02)

### Bug Fixes

- 🐛 radio & checkbox alignment ([8425b6b](https://github.com/sebgroup/green/commit/8425b6baa3bfc0a9a91cbbd9dba49928292e45af)), closes [#733](https://github.com/sebgroup/green/issues/733)

### Features

- 🎸 horizontal checkbox group, form item validation ([58d768a](https://github.com/sebgroup/green/commit/58d768ae37c941522241d9121cead878a20af70d))

# [1.1.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.2...@sebgroup/chlorophyll@1.1.0) (2023-03-01)

### Bug Fixes

- 🐛 adding correct focus to select ([44c7c92](https://github.com/sebgroup/green/commit/44c7c9295604f9455c6f74b40f4b226550e9684e))

### Features

- 🎸 expandable information ([1c9a4a6](https://github.com/sebgroup/green/commit/1c9a4a675969031fcf69d4825ac436bf8954ded5))
- 🎸 Expandable information ([66cf2d5](https://github.com/sebgroup/green/commit/66cf2d5d923a1d1549b80367149c70d4664bfb02))
- 🎸 FormItem ([eafe1aa](https://github.com/sebgroup/green/commit/eafe1aada3527ce9fc593901daf9d22fa53f028e))
- 🎸 IconButton React ([222ab2b](https://github.com/sebgroup/green/commit/222ab2bb1cc2d42a0af3270b40f13347ba3aef20))

## [1.0.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.1...@sebgroup/chlorophyll@1.0.2) (2023-02-28)

### Bug Fixes

- **dropdown:** multiselect inside horizontal container ([5e27cf1](https://github.com/sebgroup/green/commit/5e27cf11095bbda3f0df16b2958b278d6b2eca86))

## [1.0.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0...@sebgroup/chlorophyll@1.0.1) (2023-02-21)

### Bug Fixes

- 🐛 responsive click on select arrow ([3fb18bb](https://github.com/sebgroup/green/commit/3fb18bb24cf57b8accae4e41449ac58dc5d7e8e9))

# [1.0.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@0.2.0...@sebgroup/chlorophyll@1.0.0) (2023-02-17)

### Features

- 🎸 ValueList ([6088988](https://github.com/sebgroup/green/commit/6088988d0976b837df208d9a2f0af6379af2492b))

# [0.2.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@0.1.2...@sebgroup/chlorophyll@0.2.0) (2023-02-02)

### Features

- 🎸 react select component ([91f6fa8](https://github.com/sebgroup/green/commit/91f6fa883a68ac0dd3dd6c03ef282edb877ede08))

## [0.1.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@0.1.1...@sebgroup/chlorophyll@0.1.2) (2023-02-01)

### Bug Fixes

- 🐛 move transition to hover ([b1444a2](https://github.com/sebgroup/green/commit/b1444a2151bf8743570db2062d5b8570bc4f3b15))

## [0.1.1](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@0.1.0...@sebgroup/chlorophyll@0.1.1) (2023-02-01)

### Bug Fixes

- 🐛 validation indicator does not exceed group element ([9da4031](https://github.com/sebgroup/green/commit/9da40317ad930681c2aa8d72a55fb47665fd49a0))

# [0.1.0](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.47...@sebgroup/chlorophyll@0.1.0) (2023-01-27)

### Features

- 🎸 adding validation on stepper component ([afacee1](https://github.com/sebgroup/green/commit/afacee1fe0e6b8a6a0b57a34cbe6d192dab0d1a9))

# [1.0.0-beta.47](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.46...@sebgroup/chlorophyll@1.0.0-beta.47) (2023-01-26)

# [1.0.0-beta.46](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.45...@sebgroup/chlorophyll@1.0.0-beta.46) (2023-01-26)

### Bug Fixes

- 🐛 adding max-width 75ch to alert-ribbon content ([9afcca4](https://github.com/sebgroup/green/commit/9afcca4c020e0dad5ee3d96d0c79d851ed533342))

### Code Refactoring

- 💡 AlertRibbon ([1f31705](https://github.com/sebgroup/green/commit/1f31705235e7edcc63a35cd16018c881d72323a0))
- 💡 changing to alert-ribbon\_\_content class ([db04684](https://github.com/sebgroup/green/commit/db046843b852744d420494faa6428156979f77bc))

### Features

- 🎸 add new large button size for jumbotrons/heroes ([2b2c41c](https://github.com/sebgroup/green/commit/2b2c41cbd0d28ca28f65e598b92ccaec65107d65))
- 🎸 adding tertiary button variant ([0c9f8bc](https://github.com/sebgroup/green/commit/0c9f8bcbe41e3ea5a162851a00a00e3bd2ad140f))

### BREAKING CHANGES

- 🧨 Not using footer element in Alert Ribbon because it's incorrect
  according to html spec
- 🧨 Renaming Alert export to AlertRibbon, changing styling form
  [role="alert"] to .alert-ribbon

✅ Closes: 659

# [1.0.0-beta.45](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.44...@sebgroup/chlorophyll@1.0.0-beta.45) (2023-01-12)

# [1.0.0-beta.44](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.43...@sebgroup/chlorophyll@1.0.0-beta.44) (2022-12-23)

### Bug Fixes

- 🐛 header 3 size on mobile ([0362098](https://github.com/sebgroup/green/commit/03620987ab32978e3026786a6221aacb0bc8ff41))
- 🐛 hiding closed accordion items and removing transitioning ([5952197](https://github.com/sebgroup/green/commit/5952197e03dbe44ea8124c95e2e6595e7f472a34))
- 🐛 Usage of close in alert, badge, button, card & modal ([71f2cb3](https://github.com/sebgroup/green/commit/71f2cb32b4a002118e8500c90115ccb294091ce5))

### Features

- 🎸 Accordion ([71c902a](https://github.com/sebgroup/green/commit/71c902a338584f4a7108db4776bda6eea48b884b))
- 🎸 new progress circle component for angular ([31a1fd2](https://github.com/sebgroup/green/commit/31a1fd21b4cab41ad6590646cd110dea5db629db))

# [1.0.0-beta.43](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.42...@sebgroup/chlorophyll@1.0.0-beta.43) (2022-12-12)

### Bug Fixes

- 🐛 align with latest changes from main ([2088798](https://github.com/sebgroup/green/commit/208879857ff5c48888dbb662cb454f943025b6b7))
- 🐛 checkbox lables could grow larger than parent element ([e53dff6](https://github.com/sebgroup/green/commit/e53dff6d0c6e12c91182d4913af8611104c2ab6a))
- 🐛 close button size in dropdown ([85b0f5e](https://github.com/sebgroup/green/commit/85b0f5e639487a884c30eb58011869d5c05d3398))
- 🐛 correct margin for dropdown labels ([7ed1725](https://github.com/sebgroup/green/commit/7ed17253e8d8f2e15b8156d515fcdb5c1f26a5ac))
- 🐛 rendering issues on low pixel density displays ([69c6611](https://github.com/sebgroup/green/commit/69c66110f09d1fead47b2e21e1ca98b191e47cb2))

### Features

- 🎸 indeterminate checkbox ([50175c1](https://github.com/sebgroup/green/commit/50175c166b0c911d47547b9474aef2ff103fc3d6))

# [1.0.0-beta.42](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.41...@sebgroup/chlorophyll@1.0.0-beta.42) (2022-12-06)

### Bug Fixes

- 🐛 Checkbox styling ([d86c713](https://github.com/sebgroup/green/commit/d86c7137223896088aa22d98ac5b15d2f972e61a))
- 🐛 fixed :has fallback for Firefox ([cdc2b97](https://github.com/sebgroup/green/commit/cdc2b97f9864e9d36268b2b75bdcca91215ec09b))
- 🐛 form info misaligning ([7395c2c](https://github.com/sebgroup/green/commit/7395c2c293f27ab6a9cecb53b3fdd6ce3528ab68))
- 🐛 merge radio with latest changes ([034458e](https://github.com/sebgroup/green/commit/034458e8ab0d14524acba99a336e3c969ee290ad))
- 🐛 radio alignment and colors ([333b70d](https://github.com/sebgroup/green/commit/333b70db3bc2be528f63ab73d9b378aa11738d54))
- 🐛 removing darkmode tokens ([a3ac3d5](https://github.com/sebgroup/green/commit/a3ac3d514bfb4269386fc9970f9d7b2ce54ffdb2))
- 🐛 session with isak fixing bugs ([23d42d4](https://github.com/sebgroup/green/commit/23d42d473a314f27a8ea8376994ce0557d3d3747))
- 🐛 sizing bug in firefox ([9e074d2](https://github.com/sebgroup/green/commit/9e074d266fca1e2118a2a7609bb06462bb41274d))

# [1.0.0-beta.41](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.40...@sebgroup/chlorophyll@1.0.0-beta.41) (2022-11-30)

# [1.0.0-beta.40](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.39...@sebgroup/chlorophyll@1.0.0-beta.40) (2022-11-30)

### Bug Fixes

- 🐛 checkbox, radio, use-green scope, variables ([1fd9154](https://github.com/sebgroup/green/commit/1fd915463e9c8c3bf1db2fa6179da5f4ccbdf2f8))
- 🐛 tokens not imported correctly ([14defce](https://github.com/sebgroup/green/commit/14defceaa01221d36722feb193e6bece8768c024))

# [1.0.0-beta.39](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.38...@sebgroup/chlorophyll@1.0.0-beta.39) (2022-11-28)

### Bug Fixes

- 🐛 fixing import to alert-ribbon ([bc649a2](https://github.com/sebgroup/green/commit/bc649a29a8a84382df8bc07f2f8583f8feec8474))
- 🐛 Updated react & angular components that has fieldsets ([f4525a1](https://github.com/sebgroup/green/commit/f4525a19d0963122801a0102b928481cb4ec1414))

### Features

- 🎸 radio button with latest figma design ([76d38aa](https://github.com/sebgroup/green/commit/76d38aa6a998136929c5d849a52f8d8429ff23f5)), closes [#459](https://github.com/sebgroup/green/issues/459)

### Styles

- 💄 Checkbox, fieldset, forminfo and validation ([c8be77c](https://github.com/sebgroup/green/commit/c8be77c93814ac38cc43c5013d9f16926de67cc2))
- 💄 Close button, Alert ribbon ([e622480](https://github.com/sebgroup/green/commit/e6224806649ebb841721130046cfd3d2815b5515))

### BREAKING CHANGES

- 🧨 change to html structure for fieldset form groups. checkboxes and radios
  should be wrapped in a div
- 🧨 Close button need to have a i-elemented added as a child to the button
  tag in order to display the cross icon.
- 🧨 -Breaks fieldset styling since we need to add a div to to wrap the form
  items.

# [1.0.0-beta.38](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.37...@sebgroup/chlorophyll@1.0.0-beta.38) (2022-11-17)

# [1.0.0-beta.37](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.36...@sebgroup/chlorophyll@1.0.0-beta.37) (2022-11-17)

### Bug Fixes

- 🐛 changing to correct font size for p tags ([a5eafbb](https://github.com/sebgroup/green/commit/a5eafbb7836b5b87721dfb4d00987e6c62f4b832))

### Styles

- 💄 Fixed input group sizing ([f80dbaf](https://github.com/sebgroup/green/commit/f80dbafa6d1a3269f4f40dfba76945ef8556692c))

### BREAKING CHANGES

- 🧨 Will break input layouts since form group take up 100% of container

# [1.0.0-beta.36](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.35...@sebgroup/chlorophyll@1.0.0-beta.36) (2022-11-11)

# [1.0.0-beta.35](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.34...@sebgroup/chlorophyll@1.0.0-beta.35) (2022-11-10)

# [1.0.0-beta.34](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.33...@sebgroup/chlorophyll@1.0.0-beta.34) (2022-11-08)

# [1.0.0-beta.33](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.32...@sebgroup/chlorophyll@1.0.0-beta.33) (2022-11-08)

# [1.0.0-beta.32](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.31...@sebgroup/chlorophyll@1.0.0-beta.32) (2022-11-08)

# [1.0.0-beta.31](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.30...@sebgroup/chlorophyll@1.0.0-beta.31) (2022-11-08)

### Features

- 🎸 Styling for headers ([d5c0597](https://github.com/sebgroup/green/commit/d5c0597b48f878817d7af118bb8b980b00035075))

# [1.0.0-beta.30](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.29...@sebgroup/chlorophyll@1.0.0-beta.30) (2022-10-26)

# [1.0.0-beta.29](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.28...@sebgroup/chlorophyll@1.0.0-beta.29) (2022-10-12)

# [1.0.0-beta.28](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.27...@sebgroup/chlorophyll@1.0.0-beta.28) (2022-10-07)

# [1.0.0-beta.27](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.26...@sebgroup/chlorophyll@1.0.0-beta.27) (2022-10-03)

# [1.0.0-beta.26](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.25...@sebgroup/chlorophyll@1.0.0-beta.26) (2022-09-27)

# [1.0.0-beta.25](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.24...@sebgroup/chlorophyll@1.0.0-beta.25) (2022-09-23)

# [1.0.0-beta.24](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.23...@sebgroup/chlorophyll@1.0.0-beta.24) (2022-09-20)

# [1.0.0-beta.23](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.22...@sebgroup/chlorophyll@1.0.0-beta.23) (2022-09-19)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/sebgroup/green/issues/473) ([4883331](https://github.com/sebgroup/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -

# [1.0.0-beta.23](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.22...@sebgroup/chlorophyll@1.0.0-beta.23) (2022-09-19)

### Features

- 🎸 Dropdown - support search filter [#473](https://github.com/sebgroup/green/issues/473) ([4883331](https://github.com/sebgroup/green/commit/48833313c99661d83fa26066c42f12ff93e26d3c))

### BREAKING CHANGES

- 🧨 -

# [1.0.0-beta.22](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.21...@sebgroup/chlorophyll@1.0.0-beta.22) (2022-08-31)

# [1.0.0-beta.21](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.20...@sebgroup/chlorophyll@1.0.0-beta.21) (2022-08-31)

# [1.0.0-beta.20](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.19...@sebgroup/chlorophyll@1.0.0-beta.20) (2022-08-31)

### Bug Fixes

- 🐛 fizes aurtoprefixer warnings ([8ef81ad](https://github.com/sebgroup/green/commit/8ef81ad224b5feedef26861c4a0373f0e847e59f))

# [1.0.0-beta.19](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.18...@sebgroup/chlorophyll@1.0.0-beta.19) (2022-08-29)

### Bug Fixes

- 🐛 remove inline styles ([e97db73](https://github.com/sebgroup/green/commit/e97db737838ee24b5406229400b6a70047a3aa04))
- **slide-toggle:** correct `aria-role` -> `role` ([b157bf4](https://github.com/sebgroup/green/commit/b157bf40a8e8aa3e22fbd3792ccbc46bc4e76d32))
- **slide-toggle:** remove hover effect for touch devices ([2e56e35](https://github.com/sebgroup/green/commit/2e56e351f92853c0a28ad55e75c11fbbe2a1da86))

### Features

- **slide-toggle:** add base styles (WIP) ([2a9eca4](https://github.com/sebgroup/green/commit/2a9eca4933424755a3e1583f92e7b7a7ce432236))
- **slide-toggle:** add Canvas section ([3e46119](https://github.com/sebgroup/green/commit/3e46119ba15d27d2ae8a0af171457104b09644b3))
- **slide-toggle:** add focus styling ([a6d4180](https://github.com/sebgroup/green/commit/a6d4180526b1b837b1f92a67242c141f2bf81600))
- **slide-toggle:** add hover states and transition ([79f03f6](https://github.com/sebgroup/green/commit/79f03f6459f7bff8d3cbeffa08a27c0e15af48f6))
- **slide-toggle:** add mobile styles ([727e154](https://github.com/sebgroup/green/commit/727e1549dc7b475e9ba3e7cb65245017d24adca0))

# [1.0.0-beta.18](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.17...@sebgroup/chlorophyll@1.0.0-beta.18) (2022-08-15)

# [1.0.0-beta.17](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.16...@sebgroup/chlorophyll@1.0.0-beta.17) (2022-08-15)

### Bug Fixes

- **chlorophyll:** form component responsive sizes ([e0295da](https://github.com/sebgroup/green/commit/e0295daa121934a19526b199d6aaaa22b3766a29)), closes [#554](https://github.com/sebgroup/green/issues/554)
- **dropdown:** scroll to option on arrow navigation ([02c7b2c](https://github.com/sebgroup/green/commit/02c7b2c2c22892fb0b9f6ea2dcbec18f39d006f0)), closes [#463](https://github.com/sebgroup/green/issues/463)

# [1.0.0-beta.16](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.15...@sebgroup/chlorophyll@1.0.0-beta.16) (2022-07-18)

### Bug Fixes

- 🐛 Configurable font path when setting up use-green-scope ([ea34208](https://github.com/sebgroup/green/commit/ea342085bad764524e734c4a452a268ea026c6fe))
- **dropdown:** allow empty texts ([6d4c125](https://github.com/sebgroup/green/commit/6d4c1250e3b5a625d5f300e4c50d2fddda31a3df))

### Features

- **skeleton-loader:** add styles ([69eedcd](https://github.com/sebgroup/green/commit/69eedcd69c4e33c91c7a576969b72078adf17e33)), closes [#541](https://github.com/sebgroup/green/issues/541)

# [1.0.0-beta.15](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.14...@sebgroup/chlorophyll@1.0.0-beta.15) (2022-06-28)

### Bug Fixes

- **use-green:** ability to scope all of green ([9daf8bc](https://github.com/sebgroup/green/commit/9daf8bc5e65c34825db04ab27c8d2f78b791a5ce)), closes [#526](https://github.com/sebgroup/green/issues/526)

### Features

- 🎸 Added story for Table ([583eb1e](https://github.com/sebgroup/green/commit/583eb1e3f126296274c1dbf81beee8e3befa44a0)), closes [#360](https://github.com/sebgroup/green/issues/360)
- **stepper:** add markup and css ([2c9254d](https://github.com/sebgroup/green/commit/2c9254de1a79728c98cbf1833011d45220d4f593)), closes [#523](https://github.com/sebgroup/green/issues/523)
- **table:** add styles ([adb9af2](https://github.com/sebgroup/green/commit/adb9af2eddb67fe84a9cba3f9054512c17ab0c57)), closes [#360](https://github.com/sebgroup/green/issues/360)

# [1.0.0-beta.14](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.13...@sebgroup/chlorophyll@1.0.0-beta.14) (2022-06-15)

### Bug Fixes

- **tabs:** add overflow scroll and don't wrap tab content ([df90f95](https://github.com/sebgroup/green/commit/df90f958d3a2f627eb276ee9e29f722852138f5e))

### Features

- **textarea:** add styles ([32ef5d8](https://github.com/sebgroup/green/commit/32ef5d8293556b767f8336b5cc2b1399aae41c6f)), closes [#14](https://github.com/sebgroup/green/issues/14)

# [1.0.0-beta.13](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.12...@sebgroup/chlorophyll@1.0.0-beta.13) (2022-06-07)

### Bug Fixes

- remove border color reset on focus ([ca42542](https://github.com/sebgroup/green/commit/ca42542403fe909a88e7832694b76bfb089b9ecd))

# [1.0.0-beta.12](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.11...@sebgroup/chlorophyll@1.0.0-beta.12) (2022-05-05)

### Features

- **badge:** add container for badge layout ([e4dcf49](https://github.com/sebgroup/green/commit/e4dcf4949105582d656bcf966206c7338d40bbc8))

# [1.0.0-beta.11](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.10...@sebgroup/chlorophyll@1.0.0-beta.11) (2022-04-21)

# [1.0.0-beta.10](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.9...@sebgroup/chlorophyll@1.0.0-beta.10) (2022-04-20)

### Bug Fixes

- **close:** hide text content inside close button ([1f7a7ca](https://github.com/sebgroup/green/commit/1f7a7ca590d30f0f74aab5ad00fa4a4a043a5d18))
- **datepicker:** improve mobile layout ([fe58ac1](https://github.com/sebgroup/green/commit/fe58ac19120bc988c999fe6edeb6b332f11751c2)), closes [#471](https://github.com/sebgroup/green/issues/471)
- **form:** margin for form info in horizontal form ([889a186](https://github.com/sebgroup/green/commit/889a186abfb0078bd73ee04fb3675fb9e3cf36bb)), closes [#468](https://github.com/sebgroup/green/issues/468)

# [1.0.0-beta.9](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.8...@sebgroup/chlorophyll@1.0.0-beta.9) (2022-04-15)

### Bug Fixes

- **angular:** datepicker add year and month dropdown ([2117354](https://github.com/sebgroup/green/commit/21173542877a96b88c5d3f8b6c201bee4d3e91ac))
- **badge:** display inline-flex ([5795f54](https://github.com/sebgroup/green/commit/5795f5447e668be00f4252825c673f83b1a7a43a))
- **datepicker:** add active state ([8537204](https://github.com/sebgroup/green/commit/85372040002e73d9fed354848339486a11d77eaa))
- **datepicker:** add calendar icon ([19b8599](https://github.com/sebgroup/green/commit/19b8599e77269d1c4cc5d180c4f6547b0d84d45f))
- **datepicker:** add icons for next and previous ([2379631](https://github.com/sebgroup/green/commit/237963128db2695c6748e298e358e8f9272cca5a))
- **datepicker:** add z-index ([acd6cdd](https://github.com/sebgroup/green/commit/acd6cddb17f4a3b251b9ebb05726a2d40688430b))
- **dropdown:** max height for listbox ([db47cbe](https://github.com/sebgroup/green/commit/db47cbe57ccad676329d38ccec18f1c6280a188b))
- **group:** don't grow buttons in groups with inputs ([dbd3dd5](https://github.com/sebgroup/green/commit/dbd3dd55887c207b47a68002374b31cea8ab925b))

### Features

- 🎸 Renders datepicker and enabled select ([6e5158d](https://github.com/sebgroup/green/commit/6e5158d28c47a36b361f4a8bd26e5161e3902ffe))
- **datepicker:** add basic markup and css ([a1fbf8e](https://github.com/sebgroup/green/commit/a1fbf8e1a635600843315cac62f1e1225584320e)), closes [#333](https://github.com/sebgroup/green/issues/333)
- **datepicker:** add today ([076b1a4](https://github.com/sebgroup/green/commit/076b1a43774c0e0d3228f1fc73bbc9678b351d25))
- **icons:** add icons for next and previous ([7dd1bde](https://github.com/sebgroup/green/commit/7dd1bdeb4dc611f5023102141bb42d7fc061f885))
- **icons:** add initial version ([a934292](https://github.com/sebgroup/green/commit/a9342927f68840234359bd0ca39a973affc71ea2)), closes [#117](https://github.com/sebgroup/green/issues/117)

# [1.0.0-beta.8](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.7...@sebgroup/chlorophyll@1.0.0-beta.8) (2022-04-07)

### Bug Fixes

- 🐛 Updated documentation ([05537d5](https://github.com/sebgroup/green/commit/05537d55b48271764abbc108b01d124728e58c62))
- **dropdown:** add sass dependencies ([cd77677](https://github.com/sebgroup/green/commit/cd77677989fece72cbc8980deb39569c95fd5088)), closes [#448](https://github.com/sebgroup/green/issues/448)
- **dropdown:** add styles for label and validation ([12c5648](https://github.com/sebgroup/green/commit/12c56488e1461290253b1b108c539b2f3f97ed24))
- **dropdown:** body-scroll-lock and styling ([b12a834](https://github.com/sebgroup/green/commit/b12a8344a6c5f87a05cac0cd76e5765451827234))
- update default token value for font location ([ca8c983](https://github.com/sebgroup/green/commit/ca8c9837f00c8047c6458b441eb80b1c04cbf42e)), closes [#450](https://github.com/sebgroup/green/issues/450)

### Performance Improvements

- scoping with `.use-green` ([ac96d7d](https://github.com/sebgroup/green/commit/ac96d7d3c56b4a329b2a19a16659f5b35942630b))

# [1.0.0-beta.7](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.6...@sebgroup/chlorophyll@1.0.0-beta.7) (2022-03-24)

### Bug Fixes

- **alert:** update variants ([277ed95](https://github.com/sebgroup/green/commit/277ed95f813c667c5a007c587d27311811040300)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **badge:** update variants ([5684ed1](https://github.com/sebgroup/green/commit/5684ed19ee15c0eef1ddb945bfa21782a6df3750)), closes [#292](https://github.com/sebgroup/green/issues/292)
- **form-validation:** margin for error in horizontal forms ([4957c0c](https://github.com/sebgroup/green/commit/4957c0cea106b1d0dacc28557bcde8b25d984e62)), closes [#404](https://github.com/sebgroup/green/issues/404)
- **modal:** use css variables from theme ([0283a6f](https://github.com/sebgroup/green/commit/0283a6fbf25faa428e4b17a446abac2ba0b814f5)), closes [#389](https://github.com/sebgroup/green/issues/389)

### Code Refactoring

- **alert:** update layout ([0028750](https://github.com/sebgroup/green/commit/002875096c01a33509801b431b123c96faab8376)), closes [#438](https://github.com/sebgroup/green/issues/438)

### Features

- 🎸 add badge styles and storybook ([4781fad](https://github.com/sebgroup/green/commit/4781fadbb62c6f1e8dea95dbc0e11e3b60a0be21))
- 🎸 add small close button for badges ([fdc1578](https://github.com/sebgroup/green/commit/fdc157823e2b9e4dfb3d9e85c8c727d03f830db9))
- **backdrop:** add mixin ([2ffd0ee](https://github.com/sebgroup/green/commit/2ffd0ee190ead319a3a700808da5a1eb1e144a05))

### BREAKING CHANGES

- **alert:** Markup structure has changed, see storybook for more info.

# [1.0.0-beta.6](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.5...@sebgroup/chlorophyll@1.0.0-beta.6) (2022-02-17)

### Bug Fixes

- 🐛 fixed navbar styling ([#392](https://github.com/sebgroup/green/issues/392)) ([5077380](https://github.com/sebgroup/green/commit/507738055a66c25a8029feda70514a0f80389ed1))

# [1.0.0-beta.5](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-beta.4...@sebgroup/chlorophyll@1.0.0-beta.5) (2022-02-08)

### Bug Fixes

- **alert:** add margin to links in footer ([00364a2](https://github.com/sebgroup/green/commit/00364a2e42ee3f5a274253502f8215df742edbd3)), closes [#376](https://github.com/sebgroup/green/issues/376)
- **dropdown:** border-color of popover ([9c4303e](https://github.com/sebgroup/green/commit/9c4303ef549340054b7bf7fbfbc9fc337277e23e)), closes [#375](https://github.com/sebgroup/green/issues/375)
- **link:** style and option for visited links ([32a6fb3](https://github.com/sebgroup/green/commit/32a6fb33ca2562a111f6b66a85ebc14d053b35b0))
- **modal:** margins for buttons in modal footer ([0302f25](https://github.com/sebgroup/green/commit/0302f250b884483dc2f0124a5df2fdae6b88b4b6)), closes [#311](https://github.com/sebgroup/green/issues/311)

### Features

- **link:** add styling for disabled state ([cf9d8d7](https://github.com/sebgroup/green/commit/cf9d8d7f37723df5d5876a18df12bcd35c9a0d04))

# 1.0.0-alpha.1 (2021-11-11)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))

### BREAKING CHANGES

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

# 1.0.0-alpha.1 (2021-11-11)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))

### BREAKING CHANGES

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

# 1.0.0-alpha.1 (2021-11-11)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))

### BREAKING CHANGES

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

# 1.0.0-alpha.1 (2021-11-11)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))

### BREAKING CHANGES

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

# 1.0.0-alpha.1 (2021-11-11)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))

### BREAKING CHANGES

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

# [1.0.0-alpha.3](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-alpha.2...@sebgroup/chlorophyll@1.0.0-alpha.3) (2021-09-29)

### Bug Fixes

- 🐛 Updated immer ([#205](https://github.com/sebgroup/green/issues/205)) ([b50334d](https://github.com/sebgroup/green/commit/b50334dec269eb5e0d5820a6691439fce4bf3505))

# [1.0.0-alpha.2](https://github.com/sebgroup/green/compare/@sebgroup/chlorophyll@1.0.0-alpha.1...@sebgroup/chlorophyll@1.0.0-alpha.2) (2021-09-14)

### Bug Fixes

- add readme and change log to package ([52f4af1](https://github.com/sebgroup/green/commit/52f4af11063c2985fcaff763fcad68b58b258253)), closes [#193](https://github.com/sebgroup/green/issues/193)

# 1.0.0-alpha.1 (2021-09-07)

### Bug Fixes

- 🐛 Added resolution for postcss@^7.0.36 ([#81](https://github.com/sebgroup/green/issues/81)) ([7236562](https://github.com/sebgroup/green/commit/7236562b3be6cf08a47e648979bc0b263a85fef4))
- 🐛 Fixed color value for regular red (from yellow) ([#35](https://github.com/sebgroup/green/issues/35)) ([c91cbc0](https://github.com/sebgroup/green/commit/c91cbc0b7a960eb93e0236d1151846de76ced81a))
- 🐛 Fixed the location of colors ([#32](https://github.com/sebgroup/green/issues/32)) ([4eb7555](https://github.com/sebgroup/green/commit/4eb7555b122330dd2299b2a3765c0257acb7d19f))
- 🐛 improved generator ([#34](https://github.com/sebgroup/green/issues/34)) ([2492a10](https://github.com/sebgroup/green/commit/2492a10e2f60f2b9c74f9c01537d24f9ca2d2e4e))
- 🐛 Moved ' in wrong spot ([#36](https://github.com/sebgroup/green/issues/36)) ([5e6e094](https://github.com/sebgroup/green/commit/5e6e094344f28729f2ade62a48acd913f2ecbfec))
- 🐛 No extra .btn classes och prefixes needed ([#65](https://github.com/sebgroup/green/issues/65)) ([bf6b5e8](https://github.com/sebgroup/green/commit/bf6b5e8943dcd625004ab6bf19333c10259df51c))
- 🐛 Pinned fixed dependencies ([#108](https://github.com/sebgroup/green/issues/108)) ([6723084](https://github.com/sebgroup/green/commit/67230845750338ddef0ba3d7403e5d33be3ed36b))
- 🐛 Upgraded vulnerable dependency ([91325ed](https://github.com/sebgroup/green/commit/91325eda34b379e1951b9fda6eb8c0943e71cfc8))
- reset css ([#138](https://github.com/sebgroup/green/issues/138)) ([8c30997](https://github.com/sebgroup/green/commit/8c309976c434ca1aac84db721a992dae70f78be7)), closes [#137](https://github.com/sebgroup/green/issues/137)

### chore

- 🤖 Switched from lerna to nx ([#168](https://github.com/sebgroup/green/issues/168)) ([2089720](https://github.com/sebgroup/green/commit/208972067e47aea9eaa57e03de6d5acea265a7c2)), closes [#157](https://github.com/sebgroup/green/issues/157) [#163](https://github.com/sebgroup/green/issues/163) [#170](https://github.com/sebgroup/green/issues/170) [#169](https://github.com/sebgroup/green/issues/169)

### Documentation

- ✏️ Added dev time dependencies ro root readme ([df06be7](https://github.com/sebgroup/green/commit/df06be7f072242815af31bacf85e8b10b4720060))
- ✏️ Added hr ([dd0cf3e](https://github.com/sebgroup/green/commit/dd0cf3e6d09482562fab40d06ab6dde0cd03f4e6))
- ✏️ Added link to root ([60666e9](https://github.com/sebgroup/green/commit/60666e9a55125fea5dfc9d8f34c58c89b17227cf))
- ✏️ Added link to Storybook in README ([#183](https://github.com/sebgroup/green/issues/183)) ([cec4c98](https://github.com/sebgroup/green/commit/cec4c984c3578e182e9820ebf82523a9f5bffb97))
- ✏️ Change chlorophyll icon ([695ac21](https://github.com/sebgroup/green/commit/695ac21a2731162f319c1ee298dbb200de34bea7)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([4f59685](https://github.com/sebgroup/green/commit/4f5968541317a1a744c4cab47f3d706fc008a848)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Changed size of icon ([b31a81b](https://github.com/sebgroup/green/commit/b31a81bcf8d7a2d9dd3be555264cef85cea1bc0b)), closes [#9](https://github.com/sebgroup/green/issues/9)
- ✏️ Contributing guide lines ([a536951](https://github.com/sebgroup/green/commit/a53695197eab0ccaa59ed0d4bdd71856c33c81d3))
- ✏️ Product philosophy ([#26](https://github.com/sebgroup/green/issues/26)) ([f17aacd](https://github.com/sebgroup/green/commit/f17aacd52d3c6b0533b10ae6acdcfd083d8decd3))
- ✏️ Started working on the format for chlorophyll's readme ([26f5f6f](https://github.com/sebgroup/green/commit/26f5f6ff584b7173ead18ffd74508cca1ab75330))
- chlorophyll readme ([#15](https://github.com/sebgroup/green/issues/15)) ([f87a923](https://github.com/sebgroup/green/commit/f87a92331f668e4c993cced00fbdfbbe592c7688))
- update stories ([64e9689](https://github.com/sebgroup/green/commit/64e9689820830932c31097dc8df710ad93a89a2c))

### Features

- 🎸 add card ([b6c3a92](https://github.com/sebgroup/green/commit/b6c3a92a4a2169499cfc68fad023a8c8d88d7c99)), closes [#54](https://github.com/sebgroup/green/issues/54) [#54](https://github.com/sebgroup/green/issues/54)
- 🎸 Added mixins for link and button link ([#72](https://github.com/sebgroup/green/issues/72)) ([a8458d2](https://github.com/sebgroup/green/commit/a8458d2b8bb323cf55e6ad581c68d345e036bd7c))
- 🎸 Added option for type-less button ([e3d62c3](https://github.com/sebgroup/green/commit/e3d62c35ef9a909119d90979f724e06eac32ce84))
- 🎸 Added story for default value ([424e4da](https://github.com/sebgroup/green/commit/424e4da87a2cd7321b44fea8c4c134da53c9aabe))
- 🎸 Added tokens and extended scss generator ([#33](https://github.com/sebgroup/green/issues/33)) ([278766d](https://github.com/sebgroup/green/commit/278766daf87e943f1b62ef356df3fe57fd5e9760))
- 🎸 Adds secondary button ([83ed409](https://github.com/sebgroup/green/commit/83ed409632ed87e2fed1637e083cfcc93bb9f4fb))
- 🎸 Design tokens, mixins and classes for typography ([3ae855f](https://github.com/sebgroup/green/commit/3ae855f98e9943e17acb1bab9ee74b895c21b4f6)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Design tokens, mixins and classes for typography ([f65fb1e](https://github.com/sebgroup/green/commit/f65fb1ee3b91e074d792842a44e81ba1be0b201b)), closes [#45](https://github.com/sebgroup/green/issues/45)
- 🎸 Filled in colors and added typography ([#31](https://github.com/sebgroup/green/issues/31)) ([b3bb699](https://github.com/sebgroup/green/commit/b3bb699e70088d98b45e38e05c4375c1b22f35ac))
- 🎸 Ghost button closes [#73](https://github.com/sebgroup/green/issues/73) ([d6cc0d9](https://github.com/sebgroup/green/commit/d6cc0d9627464c95d4101f6fddf1283dc5c98be7))
- 🎸 Theming for Storybooks ([#174](https://github.com/sebgroup/green/issues/174)) ([4b25b61](https://github.com/sebgroup/green/commit/4b25b613d96d667fa269d4ca4199a015d7ea57c6))
- add bootstrap utilities as token ([626ec5c](https://github.com/sebgroup/green/commit/626ec5c27b83559e274171188fc79574802bcd5e))
- add css grid ([811da96](https://github.com/sebgroup/green/commit/811da96e4700c8dd9bad05b7174b92aad399ae56))
- add utilities from bootstrap ([9e0c166](https://github.com/sebgroup/green/commit/9e0c1668bbf40ba73dda3cc93f16d0d1545a0ec4)), closes [#189](https://github.com/sebgroup/green/issues/189)

### BREAKING CHANGES

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
