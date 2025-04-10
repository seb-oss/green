---
'@sebgroup/green-core': minor
---

**Icon:** New icons, metadata, documentation and accessibility

The following props have been removed"

1. `width`
2. `height`
3. `box` - the viewbox property

Now instead you speficy only the `size` property
`size` is a style expression property that accepts, token and custom values

Example:

```html
<!-- Token values -->
<gds-icon-credit-card size="xl"></gds-icon-credit-card>

<!-- Custom values -->
<gds-icon-credit-card size="48px"></gds-icon-credit-card>
```
