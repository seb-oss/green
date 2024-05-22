---
'@sebgroup/green-core': minor
---

**Changes Made:**

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
