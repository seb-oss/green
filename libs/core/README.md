<div align="center">
<img width="600" alt="green-core" src="https://github.com/sebgroup/green/assets/11420341/5d4b25fd-0633-498c-b50f-70f07c01ac16">
<h1>@sebgroup/green-core</h1>
<p>Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System.</p>
</div>

## Install

```bash
yarn install @sebgroup/green-core

# or use npm
npm install @sebgroup/green-core
```

## Use

```js
import { GdsButton } from '@sebgroup/green-core'
import { transitionalStyles } from '@sebgroup/green-core/transitional-styles'

//register transitional styles to get SEB's current visual design
transitionalStyles()
```

```html
<!-- Then use the component in your html -->
<gds-button>Click me</gds-button>
```

## Documentation

Check out the [Storybook (@sebgroup/core)](https://sebgroup.github.io/green/latest/core/) for components and documentation.
