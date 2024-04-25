# Code splitting

Since a consumer of Green Core may not need all of the components every time, it needs to be possible to import them one by one, so that only used code are included in the application bundle.

Often, you import stuff from a main export like this, for example:

```ts
import { GdsDropdown } from '@sebgroup/green-core'
```

This resolves to an `index.js` file at the root of the package, containing all the exported modules. Normally, this is perfectly fine, as most bundlers have some form of dead code elimination built in, which removes anything that isn't actually used in the end.

Dead code elimination works by statically analyzing the code in the application, and figuring out which code paths are actually being called, and then removing the stuff that is never reached.

This kind of elimination can only be done for code that is free of side-effects. If there are side-effects, such as setting a cookie or writing to `localStorage`, the code cannot be eliminated, because the alayzer doesn't know what else relies on the side-effect. The same thing is true when a Web Component is registered in the browsers `CustomElementRegistry`.

Since each component in Green Core is automatically registered with the `CustomElementRegistry`, each component can also be said to have a side-effect. This means that when you `import { GdsDropdown } from '@sebgroup/green-core'` you're not just getting the `GdsDropdown` component. You're getting ALL of the components, because they all have side-effects.

## Sub-path exports

We can improve the situation by making the package more granular. Intead of all modules being exported from a main root export, we can split it up into separate exports for each component. Importing an individual component now looks like this:

```ts
import '@sebgroup/green-core/components/dropdown'
```

Now we have sort of flipped the problem of dead code elimition on its head. Instead of starting at the end, when an application is built, we start at the begininng, when the component is built. By treating each component as a separate entry-point in the build process, we automatically elimitate all the things that are never imported by that component.

So by the time the statical analyzer in your bundler gets to it, there's nothing more to eliminate, and the side-effectfulness of Web Components becomes a non-issue.

## Library coding guidelines

It's important to keep this in mind when writing a component. You should never rely on the consumer to import some vital depency on their end. If component A relies on component B for its internal structure, then component A needs to import component B.

Also in the cases where you know that a component needs to be used with a particular child-component, it makes sense for the parent component to import that child component. Often, it will also be a good idea to forward the export of that child-component.

### Examples

Here's some consumer code using a `gds-dropdown`:

JS:

```js
import '@sebgroup/green-core/components/dropdown'
```

HTML:

```html
<gds-dropdown label="Select something">
  <gds-option value="first">First choice</gds-option>
  <gds-option value="second">Second choice</gds-option>
</gds-dropdown>
```

Notice that the consumer needs two components here, `gds-dropdown` and `gds-option`. Therefor, `gds-dropdown` should also import `gds-option`, because from the consumers perspective, it would be unexpected to need to import it separately.

In case a consumer also needs the types for these components, it can be helpful to forward it in the `index.ts`:

index.ts for `gds-dropdown`:

```ts
export * from './dropdown'
export * from '../../primitives/listbox/option'
```

Internally, the dropdown also use other components, such as `gds-popover` and `gds-listbox`. These are also imported by the component.

In the source code for `gds-dropdown` it looks like this:

```ts
import '../../primitives/listbox'
import type { GdsListbox } from '../../primitives/listbox'
```

In this case, using simply `import { GdsListbox } from '../../primitives/listbox'` won't work, because Typescript will strip out the actual code if it thinks we're only using the type. It can't tell if we're using the element in the template, and in this particular case, we're only using it for type inference, so the code would get stripped. To get around that, we import the code and the type separately.
