---
'@sebgroup/green-react': minor
---

**Code splitting**

`@sebgroup/green-react` now supports code sub-imports for producing leaner output bundles.

Old version:

```js
import { Dropdown } from '@sebgroup/green-react'
```

New version:

```
import { Dropdown } from "@sebgroup/green-react/src/lib/dropdown";
```

By specifying the exact module you want to import, you won't be adding any extra non-treeshakable weight to your bundle.
