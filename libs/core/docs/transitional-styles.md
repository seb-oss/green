# Transitional Styles

Transitional Styles is a temporary mechanism that we have in place to facilitate the transition of the old 2016 design version over to the new 2023 design version.

The idea is that the Core Components will use the 2023 design by default, but will also have alternative "transitional styles" representing the 2016 version. By calling a function called `registerTransitionalStyles()`, the consuming application can enable these styles, which will then override the 2023 styling by replacing the interanl Contructed Stylesheet of the compoments.

The mechanism consist of a few different parts:

- A singleton called `TransitionalStyles`, which keeps track of all registered transistional styles.
- The actual stylesheets for each component. To support Transitional Styles, a component should have a separate file named `component-name.styles.trans.ts`, which exports a function called `register()`. This function registers the tranitional styles with the singleton.
- A call to apply transitional styles in the `connectedCallback()` method in each component. The call can look like this `TransitionalStyles.instance.apply(this, 'gds-dropdown')`. This will replace the stylesheet of the component with the on that has been registered with the singleton, if it exists.

If `registerTransitionalStyles()` has not been called, the components will simple use the default 2023 styling.
