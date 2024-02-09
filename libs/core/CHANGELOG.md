# Changelog

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

## [1.4.5](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.4.4...@sebgroup/green-core@1.4.5) (2024-01-30)

### Bug Fixes

- **angular:** add export for Core Wrapper Module ([#1184](https://github.com/sebgroup/green/issues/1184)) ([5b23830](https://github.com/sebgroup/green/commit/5b23830f4c4db8119c1f4d606d9f016801500b70))

## [1.4.4](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.4.3...@sebgroup/green-core@1.4.4) (2024-01-29)

### Bug Fixes

- **core/datepicker:** today highlight style & focus handling ([#1181](https://github.com/sebgroup/green/issues/1181)) ([6878fdf](https://github.com/sebgroup/green/commit/6878fdf8655613dc87f143c09d82760d74522889))

## [1.4.3](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.4.2...@sebgroup/green-core@1.4.3) (2024-01-26)

### Bug Fixes

- **core/datepicker:** properly constrain length of keyboard input ([#1176](https://github.com/sebgroup/green/issues/1176)) ([f4f6750](https://github.com/sebgroup/green/commit/f4f6750441b017f5fe37e4f20061a4a29544f929))

## [1.4.2](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.4.1...@sebgroup/green-core@1.4.2) (2024-01-25)

### Bug Fixes

- **core:** polyfill/fallback for iOS 15 ([#1173](https://github.com/sebgroup/green/issues/1173)) ([53247c5](https://github.com/sebgroup/green/commit/53247c5068ffdb91be188966a4073dce1bc8f58a))

## [1.4.1](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.4.0...@sebgroup/green-core@1.4.1) (2024-01-22)

### Bug Fixes

- **datepicker:** forward all props to web component ([#1168](https://github.com/sebgroup/green/issues/1168)) ([00b0922](https://github.com/sebgroup/green/commit/00b092271f345abe521e8af74b7c4392d8b8db4c))

# [1.4.0](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.3.0...@sebgroup/green-core@1.4.0) (2024-01-19)

### Features

- Datepicker web component in Green Core ([#1154](https://github.com/sebgroup/green/issues/1154)) ([707d456](https://github.com/sebgroup/green/commit/707d45602ebf157af432ee85c41c98be01b655a3))

# [1.3.0](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.2.4...@sebgroup/green-core@1.3.0) (2024-01-16)

### Bug Fixes

- **core/dropdown:** add null-check when accessing parentElement ([#1158](https://github.com/sebgroup/green/issues/1158)) ([a1b610d](https://github.com/sebgroup/green/commit/a1b610d7959d96310b110574dd464c730b9f297c))

### Features

- **core/dropdown:** add `syncPopoverWidth` option ([#1159](https://github.com/sebgroup/green/issues/1159)) ([fe88611](https://github.com/sebgroup/green/commit/fe88611430adcac76d84ff4c3132243fde3fc968))

## [1.2.4](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.2.3...@sebgroup/green-core@1.2.4) (2023-12-01)

### Bug Fixes

- **core/popover:** positioning regression in mobile views ([#1143](https://github.com/sebgroup/green/issues/1143)) ([5fb8736](https://github.com/sebgroup/green/commit/5fb8736e7a69a46af916280f9738361693f787d9))

## [1.2.3](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.2.2...@sebgroup/green-core@1.2.3) (2023-11-29)

### Bug Fixes

- **core:** downgrade to `lit@ˆ2.8.0` ([#1134](https://github.com/sebgroup/green/issues/1134)) ([bee1a90](https://github.com/sebgroup/green/commit/bee1a90bb48c2855b23849fbb30daaa991138dc8))

## [1.2.2](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.2.1...@sebgroup/green-core@1.2.2) (2023-11-28)

### Bug Fixes

- **core/context-menu:** use the correct relative paths in imports ([#1133](https://github.com/sebgroup/green/issues/1133)) ([6050e60](https://github.com/sebgroup/green/commit/6050e60e52f25ca365b2cc3722ba5a50907ec31e))

## [1.2.1](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.2.0...@sebgroup/green-core@1.2.1) (2023-11-22)

### Bug Fixes

- **core:** update localize and correct lit version in package ([#1128](https://github.com/sebgroup/green/issues/1128)) ([29210f6](https://github.com/sebgroup/green/commit/29210f6a22d30ec059b9da7038585d6d21673fb7))

# [1.2.0](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.1.1...@sebgroup/green-core@1.2.0) (2023-11-22)

### Features

- **core/context-menu:** add context menu component to Green Core, and use for Angular and React ([#1125](https://github.com/sebgroup/green/issues/1125)) ([1aacb43](https://github.com/sebgroup/green/commit/1aacb43d9afedd34316f2c96c10d534b5d487aa6))

## [1.1.1](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.1.0...@sebgroup/green-core@1.1.1) (2023-11-17)

### Bug Fixes

- **dropdown:** hidden overflow with ellipsis by default ([#1114](https://github.com/sebgroup/green/issues/1114)) ([9a2cce7](https://github.com/sebgroup/green/commit/9a2cce7cb7549ef3bff6b4086407fcb80f49cc72))

# [1.1.0](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.3...@sebgroup/green-core@1.1.0) (2023-11-10)

### Features

- **localization:** add possibility to add custom localization in Green Core ([#1106](https://github.com/sebgroup/green/issues/1106)) ([a25a969](https://github.com/sebgroup/green/commit/a25a969bc1618385fc13beb3094df0c8efe3ab5d))

## [1.0.3](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.2...@sebgroup/green-core@1.0.3) (2023-11-03)

### Bug Fixes

- **border-color:** 🐛 align default border colours ([#1089](https://github.com/sebgroup/green/issues/1089)) ([d942690](https://github.com/sebgroup/green/commit/d9426908b3c410cd2ed38415f39cd2020c189507))
- **dropdown:** add missing label to close button ([#1096](https://github.com/sebgroup/green/issues/1096)) ([ab721f2](https://github.com/sebgroup/green/commit/ab721f205227dcb2b5181170d5ca30177d3a8951))

## [1.0.2](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.1...@sebgroup/green-core@1.0.2) (2023-11-01)

### Bug Fixes

- **angular/dropdown:** correct additional regressions ([#1087](https://github.com/sebgroup/green/issues/1087)) ([57f7f4b](https://github.com/sebgroup/green/commit/57f7f4b685efab17fba482de3fd66e23f32e3486))

## [1.0.1](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0...@sebgroup/green-core@1.0.1) (2023-10-31)

### Bug Fixes

- **angular/dropdown:** issues with Dropdown custom buttons ([#1084](https://github.com/sebgroup/green/issues/1084)) ([eebb5e4](https://github.com/sebgroup/green/commit/eebb5e4cc75d8415edcb7efc125befac4ca1dde3))

# [1.0.0](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.18...@sebgroup/green-core@1.0.0) (2023-10-30)

### Bug Fixes

- **dropdown:** start using Core Dropdown in Angular and React ([#1016](https://github.com/sebgroup/green/issues/1016)) ([7f6f8f5](https://github.com/sebgroup/green/commit/7f6f8f514cdbc4c1881f9f2652cbc774246a91a6))

### BREAKING CHANGES

- **dropdown:** Updated Angular, Replaced Dropdown component internals,
  removed Dropdown from Extract

# [1.0.0-beta.18](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.17...@sebgroup/green-core@1.0.0-beta.18) (2023-10-23)

# [1.0.0-beta.17](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.16...@sebgroup/green-core@1.0.0-beta.17) (2023-10-11)

# [1.0.0-beta.16](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.15...@sebgroup/green-core@1.0.0-beta.16) (2023-10-10)

### Features

- **core-dropdown:** add `compareWith` delegate function ([#1040](https://github.com/sebgroup/green/issues/1040)) ([865735d](https://github.com/sebgroup/green/commit/865735d8adecd16640b7798f209bb7b5392231ae))
- **core-dropdown:** add `searchFilter` delegate function ([#1041](https://github.com/sebgroup/green/issues/1041)) ([62ad349](https://github.com/sebgroup/green/commit/62ad3494e435a16b85f178d4f40dfc8347c823f1))

# [1.0.0-beta.15](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.14...@sebgroup/green-core@1.0.0-beta.15) (2023-09-29)

### Bug Fixes

- **dropdown:** fix mobile view and add backdrop ([#1027](https://github.com/sebgroup/green/issues/1027)) ([f7111c4](https://github.com/sebgroup/green/commit/f7111c41950ecc44ed94c72bfdcfbac8a9f2f5ad))
- **dropdown:** popover min width ([#1037](https://github.com/sebgroup/green/issues/1037)) ([9d0cc59](https://github.com/sebgroup/green/commit/9d0cc596b7ba8a6a2b2e5a9cf01bfa86583d0d5f))
- **listbox:** add `overflow-y` ([#1036](https://github.com/sebgroup/green/issues/1036)) ([33e42dc](https://github.com/sebgroup/green/commit/33e42dcf075f2b1cb0a1611b57c29a47d3e391e2))

# [1.0.0-beta.14](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.13...@sebgroup/green-core@1.0.0-beta.14) (2023-09-26)

# [1.0.0-beta.13](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.12...@sebgroup/green-core@1.0.0-beta.13) (2023-09-25)

# [1.0.0-beta.12](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.11...@sebgroup/green-core@1.0.0-beta.12) (2023-09-25)

## 0.0.1-beta.0 (2023-09-25)

### Bug Fixes

- **core:** add build as a postTarget to `version-and-release` ([#1001](https://github.com/sebgroup/green/issues/1001)) ([0f97b0c](https://github.com/sebgroup/green/commit/0f97b0c1b571fb5eeb293a4b4638fa0f73023394))
- **core:** add dependencies to `package.json` ([#1015](https://github.com/sebgroup/green/issues/1015)) ([4c584d9](https://github.com/sebgroup/green/commit/4c584d96bc4276f0706ffbd23e9a7a2351375700))
- **core:** attempt to fix build config ([#1002](https://github.com/sebgroup/green/issues/1002)) ([e9ea2cf](https://github.com/sebgroup/green/commit/e9ea2cf214595238edc6eadc70fc5ac5dbe071ed))
- **core:** break out to separate build command ([#999](https://github.com/sebgroup/green/issues/999)) ([8db3476](https://github.com/sebgroup/green/commit/8db3476ce9e507557fc47b3a0df6e7c3d894a192))
- **core:** fix incorrectly referencing React project targets in release ([#998](https://github.com/sebgroup/green/issues/998)) ([f3180e1](https://github.com/sebgroup/green/commit/f3180e1d75d2c5a2ef63ee25d6c9600fcf4b23bc))
- **core:** missing files in package ([5c245ba](https://github.com/sebgroup/green/commit/5c245ba58387a430f9289137d476ae4a8e34d290))
- **core:** try duplicating `outputPath` in dummy `build` target ([#1003](https://github.com/sebgroup/green/issues/1003)) ([6b61c5e](https://github.com/sebgroup/green/commit/6b61c5e25ea33ecfa41375ed39649299f01eb4f8))

### Features

- **core:** initial beta release ([#995](https://github.com/sebgroup/green/issues/995)) ([c93b86c](https://github.com/sebgroup/green/commit/c93b86c37b75284b5921ddb45ba38f2d999a8455))
- **core:** update config and re-release ([#996](https://github.com/sebgroup/green/issues/996)) ([ae5e6f7](https://github.com/sebgroup/green/commit/ae5e6f7bec41b9fdeb1375ff1ceebc51a1b131fe))
- **core:** update release config again ([#997](https://github.com/sebgroup/green/issues/997)) ([a516384](https://github.com/sebgroup/green/commit/a51638407e8005bfec722b899f055d5a4838c3dc))

# [1.0.0-beta.11](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.10...@sebgroup/green-core@1.0.0-beta.11) (2023-09-18)

# [1.0.0-beta.10](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.9...@sebgroup/green-core@1.0.0-beta.10) (2023-09-18)

### Bug Fixes

- **core:** add dependencies to `package.json` ([#1015](https://github.com/sebgroup/green/issues/1015)) ([4c584d9](https://github.com/sebgroup/green/commit/4c584d96bc4276f0706ffbd23e9a7a2351375700))

# [1.0.0-beta.9](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.8...@sebgroup/green-core@1.0.0-beta.9) (2023-09-15)

# [1.0.0-beta.8](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.7...@sebgroup/green-core@1.0.0-beta.8) (2023-09-14)

### Bug Fixes

- **core:** try duplicating `outputPath` in dummy `build` target ([#1003](https://github.com/sebgroup/green/issues/1003)) ([6b61c5e](https://github.com/sebgroup/green/commit/6b61c5e25ea33ecfa41375ed39649299f01eb4f8))

# [1.0.0-beta.7](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.6...@sebgroup/green-core@1.0.0-beta.7) (2023-09-14)

### Bug Fixes

- **core:** attempt to fix build config ([#1002](https://github.com/sebgroup/green/issues/1002)) ([e9ea2cf](https://github.com/sebgroup/green/commit/e9ea2cf214595238edc6eadc70fc5ac5dbe071ed))

# [1.0.0-beta.6](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.5...@sebgroup/green-core@1.0.0-beta.6) (2023-09-14)

### Bug Fixes

- **core:** add build as a postTarget to `version-and-release` ([#1001](https://github.com/sebgroup/green/issues/1001)) ([0f97b0c](https://github.com/sebgroup/green/commit/0f97b0c1b571fb5eeb293a4b4638fa0f73023394))

# [1.0.0-beta.5](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.4...@sebgroup/green-core@1.0.0-beta.5) (2023-09-14)

### Bug Fixes

- **core:** missing files in package ([5c245ba](https://github.com/sebgroup/green/commit/5c245ba58387a430f9289137d476ae4a8e34d290))

# [1.0.0-beta.4](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.3...@sebgroup/green-core@1.0.0-beta.4) (2023-09-14)

### Bug Fixes

- **core:** break out to separate build command ([#999](https://github.com/sebgroup/green/issues/999)) ([8db3476](https://github.com/sebgroup/green/commit/8db3476ce9e507557fc47b3a0df6e7c3d894a192))

# [1.0.0-beta.3](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.2...@sebgroup/green-core@1.0.0-beta.3) (2023-09-14)

### Bug Fixes

- **core:** fix incorrectly referencing React project targets in release ([#998](https://github.com/sebgroup/green/issues/998)) ([f3180e1](https://github.com/sebgroup/green/commit/f3180e1d75d2c5a2ef63ee25d6c9600fcf4b23bc))

# [1.0.0-beta.2](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.1...@sebgroup/green-core@1.0.0-beta.2) (2023-09-14)

### Features

- **core:** update release config again ([#997](https://github.com/sebgroup/green/issues/997)) ([a516384](https://github.com/sebgroup/green/commit/a51638407e8005bfec722b899f055d5a4838c3dc))

# [1.0.0-beta.1](https://github.com/sebgroup/green/compare/@sebgroup/green-core@1.0.0-beta.0...@sebgroup/green-core@1.0.0-beta.1) (2023-09-14)

### Features

- **core:** initial beta release ([#995](https://github.com/sebgroup/green/issues/995)) ([c93b86c](https://github.com/sebgroup/green/commit/c93b86c37b75284b5921ddb45ba38f2d999a8455))
- **core:** update config and re-release ([#996](https://github.com/sebgroup/green/issues/996)) ([ae5e6f7](https://github.com/sebgroup/green/commit/ae5e6f7bec41b9fdeb1375ff1ceebc51a1b131fe))
