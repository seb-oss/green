---
'@sebgroup/green-core': minor
---

**Button:** Add `justify-content` prop to justify the contents of the button adding support for next and prev layout

```html
<!-- Example of a button with leading icon and text -->
<gds-button justify-content="space-between">
  <gds-icon-arrow-left slot="lead"></gds-icon-arrow-left>
  Previous
</gds-button>

<!-- Example of a button with trailing icon and text -->
<gds-button justify-content="space-between">
  Next
  <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
</gds-button>
```
