<div align="center">
<img width="600" alt="green-core" src="https://github.com/seb-oss/green/assets/11420341/5d4b25fd-0633-498c-b50f-70f07c01ac16">
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

There are three main ways you can use Green Core:

- With Lit
- With Angular
- With React

But that said, the components in Green Core are just regular Web Components, so you can use them with or without any framework.

### Using Lit

```ts
import { css, customElement, LitElement } from 'lit'

// Transitional styles applies the current 2016 design language to the components
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
// This custom `html` template literal tag from Green Core extends the default `lit-html` tag to handle element version scoping.
import { html } from '@sebgroup/green-core/scoping'

// Import the components that you need
import '@sebgroup/green-core/components/button/index.js'

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css``

  connectedCallback() {
    super.connectedCallback()

    // Register transitional styles to get SEB's current visual design
    ButtonStyles.register()
  }

  render() {
    return html`<gds-button>Click me!</gds-button>`
  }
}
```

### Using Angular

Angular has support for using web components directly in the template. To enable it, you need to do the following:

Add the `CUSTOM_ELEMENTS_SCHEMA` in the module where you plan to use the components. It is recommended to add this as locally as possible, only on the modules/components where you need it, and not in the app module.

You also need the `NggCoreWrapperModule` from `@sebgroup/green-angular`.

In your module:

```ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
    // Add the NggCoreWrapperModule to the `imports` array
    imports: [NggCoreWrapperModule],
    // Add the CUSTOM_ELEMENTS_SCHEMA to the `schemas` array
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

In your component:

```ts
import '@sebgroup/green-core/components/button/index.js'

// Transitional styles
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'

ButtonStyles.register()
```

Use the web component in your template with the `*nggCoreElement` directive.

In your template:

```html
<gds-button *nggCoreElement>Click me!</gds-button>
```

The `*nggCoreElement` directive comes from the `NggCoreWrapperModule` you imported above. It has the same purpose as the custom html template tag mentioned in the Lit example above: It handles custom element scoping for you.

### Using React

In most cases, we already export React wrappers for these components from the `@sebgroup/green-react` package. In those cases you can just use those. But you can also easily create your own wrappers using `@lit/react`.

Here is an example:

```ts
import React from 'react'
import { createComponent } from '@lit/react'

import { GdsButton } from '@sebgroup/green-core/component/button/index.js'
import * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

ButtonStyles.register()

export const Button = createComponent({
  tagName: getScopedTagName('gds-button'),
  elementClass: GdsButton,
  react: React,
  events: { onClick: 'click' }, // Event callbacks need to be explicitly mapped to DOM events
})
```

Then you can just use `<Button />` like a regular React component.

## Documentation

Check out the [Storybook (@sebgroup/core)](https://storybook.seb.io/latest/core/) for components and documentation.
