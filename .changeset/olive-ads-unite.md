---
'@sebgroup/green-core': minor
---

**Segmented Control:** Add support for variable width segments

This change refactors a large chunk of the Segmented Control implementation:

- Rewrite layout code to use `css-scroll-snap`
- Remove `seg-min-width`
- Add style expression properties to `gds-segment` for size control

A side-effect of this change is that segments will no longer align to the right end of the control when they overflow.
