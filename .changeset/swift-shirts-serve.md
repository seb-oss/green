---
'@sebgroup/green-core': minor
---

### Declarative Layout updates

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
