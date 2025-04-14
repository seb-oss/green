---
'@sebgroup/green-core': minor
---

**Icon:** New icons, new sizing method, metadata, documentation and accessibility improvements.

The following props have been deprecated and will be removed on the next major release:

1. `width`
2. `height`
3. `box` - the viewbox property

Now you can specify only `size` which is a style expression property that accepts tokens and custom values.

Example:

```html
<!-- Token values -->
<gds-icon-credit-card size="xl"></gds-icon-credit-card>

<!-- Custom values -->
<gds-icon-credit-card size="48px"></gds-icon-credit-card>
```
