---
'@sebgroup/green-core': minor
---

**React:** Green Core now exports automatically generated JSX wrappers for all components and icons.

For example:

```ts
import { GdsButton } from '@sebgroup/green-core/react'
```

Then, in JSX template:

```tsx
<GdsButton rank="secondary" onClick={() => console.log('Hello')}>
  Click me!
</GdsButton>
```

These imports are tree-shakable and underlying web components will be defined automatically on first use.
