# @sebgroup/fonts

## 3.0.1

### Patch Changes

- 2d649da: Adding ttf files to support android and ios dependency

## 3.0.0

### Major Changes

- 3c7eee0: Update to new version of SEB SansSerif, and remove old version

  The transional 'SEB SansSerif GDS' font-famliy name is removed in this update, and the default 'SEB SansSerif' font-family is replaced by the new updated one.

  The main differences in the update is the addition of the `book (450)` font-weight, and various rendering adjustments, such as line-centering.

  This is versioned as a major release, since there could potentially be visual breaking changes, such as some text appearing misaliged. It is recommended to carefully examine all parts of the application after this update.

## 2.0.3

### Patch Changes

- 7fc5d17: Updated font files from Carolina that fix rendering issue - Light is not updated but will eventually.

## 2.0.2

### Patch Changes

- 16d03dd: **fonts:** Fix the WOFF2 format

## 2.0.1

### Patch Changes

- d38f94e: Add licence

## 2.0.0

### Major Changes

- 04316c7: **SEB SansSerif GDS:** A new version of SEB's typeface has been added as seperate font files: **SEB SansSerif GDS**. It addresses a line-height issue, improved kerning and an added font-weight: Book.
- **BREAKING CHANGE:** The folder structure in the package has changed in this release. Before, the files where in `@sebgroup/fonts/fonts/*`, now they are in `@sebgroup/fonts/fonts/SEBSansSerif/*`, and the new font is in
  `@sebgroup/fonts/fonts/SEBSansSerifGDS/*`
