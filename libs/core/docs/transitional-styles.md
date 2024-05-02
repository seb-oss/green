# Transitional Styles

Transitional Styles is a temporary mechanism that we have in place to facilitate the transition of the old 2016 design version over to the new 2023 design version.

The idea is that the Core Components will use the 2023 design by default, but will also have alternative "transitional styles" representing the 2016 version. By calling a function called `register()` (or `registerTransitionalStyles()` to do it globally), the consuming application can enable these styles, which will then override the 2023 styling by replacing the internal Contructed Stylesheet of the components.

The mechanism consist of a few different parts:

- A singleton called `TransitionalStyles`, which keeps track of all registered transistional styles.
- The actual stylesheets for each component. To support Transitional Styles, a component should have a separate file named `component-name.styles.trans.ts`, which exports a function called `register()`. This function registers the transitional styles with the singleton.
- A call to apply transitional styles in the `connectedCallback()` method in each component. The call can look like this `TransitionalStyles.instance.apply(this, 'gds-dropdown')`. This will replace the stylesheet of the component with the on that has been registered with the singleton, if it exists.
- A function called `registerTransitionalStyles()` that calls `register()` on all the components. This will load _all_ transitional styles, and prevents tree-shaking, so it should only be used if all the styles are really needed.

If `register()`, or `registerTransitionalStyles()`, has not been called, the components will simple use the default 2023 styling.

# How to add transitional styles to a component

1. Create these files in the component directory: `component-name.trans.styles.ts` and `component-name.trans.styles.scss`. The `scss`-file can import styles from Chlorophyll, through releative paths (not from node_modules). If necessarary, the styles can be copied from Chlorophyll and modified as needed.
2. The `.ts` module should a) import the `scss` for this component, b) import the `trans.ts` from any sub-components that this components depends on, and c) export a `register()` function. The register function should register the imported styles with the `TransistionalStyles` singleton and also call `register()` on the imported sub-components. Check for example `gds-dropdown` for reference.
3. Import the `.ts` file in the `transitional-styles.ts` module and add a call to the `register()` function in the `registerTransitionalStyles()` function.
4. In the `connectedCallback()` function of the component, call `TransitionalStyles.instance.apply(this, 'component-name')`

That should be it! Now, when the `register()` function is called, the component should switch to the transitional styles.

# Tree-shaking

In order for transitional styles to be tree-shakable, it's important to make it possible to import the styles separately for individual components. This means that every component also needs to be responsible for forwarding the `register()` call to any sub-components it depends on. This includes both "primitives" and regular components. For example, `gds-datepicker` use both `gds-dropdown` (component), `gds-popover` (primitive) and `gds-calendar` (primitive). So in the `register()` function of `gds-datepicker` we also need to call the `register()` function of all these sub-components. Also, if a primitive depends on other primitives or components, the same applies there. The point is that the consumber of Green Core should only need to remember to call `register()` on the component they are using, and not have to worry about what other components are used internally.

This may lead to the `register()` function being called several times for some components, but that is fine.
