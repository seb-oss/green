/**
 * # Custom element scoping
 *
 * One problem with the current state of the Web Component standard is that there is
 * only a single, global, CustomElementRegistry. This means that if you have two different
 * libraries, or two different versions of the same library, that both define a custom
 * element with the same name, only one of them will be registered, and the other will
 * throw an error.
 *
 * This is a problem for Green, because we need it to work well in a microfrontend
 * architecture, where multiple apps can be loaded on the same page, and each app can
 * potentially have its own version of Green.
 *
 * There is a (proposal)[https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md]
 * for enabling user instantiated CustomElementRegistry scoped to a ShodowRoot, but as of
 * mid 2023 this is still only available in Chrome canary behind experimental flags.
 *
 * ## Solution
 *
 * To get around the problem we will instead define our own scoping mechanism. It will
 * work something like this:
 *
 * * Green Core will have its own lookup table of custom elements, and there will be a
 *   suffix added to the name of each custom element. For example, `gds-popover` will become
 *  `gds-popover-<versionstring>`. The version string will be deterministically generated
 *  based on the version of the Green Core package.
 *
 * * We'll also define a new `customElement` decorator that will be used to register custom
 *   elements. This decorator will automatically add the version suffix to the name of
 *   the custom element. If the custom element is already registered, it will abort silently,
 *   with the assumption that the custom element was already registered by the same version
 *   of Green Core and is therefor compatible.
 *
 * * There will be a custom `html` template tag that will automatically rewrite all custom
 *   element names from the lookup table to include the version suffix, before passing the
 *   template on to the Lit `html` tag.
 *
 * This solution will take care of automatically scoping all of the primitives used
 * internally by Green Core.
 *
 * ## Caveats
 *
 * Consumers using the top-level components from Green Core will have to add the version suffix
 * in some way. One way could be to use the `html` template tag in consuming apps too, but this
 * will only work if the consumer is using Lit.
 * A more general workaround could be to expose the generated version string as a constant from
 * Green Core, so that it can be added to the tag names in the consuming app, but this will be
 * cumbersome to work with.
 *
 * Therefor the recommendation will be to only consume Green Core though the React or Angular
 * wrappers, or to use Lit, when building a MFE application, as the wrappers will take care
 * of the scoping automatically and Lit can use the custom `html` template tag from Green Core.
 *
 * At some point in the future, when the scoped custom element registry proposal has been
 * implemented in all major browsers, we can remove this custom scoping mechanism and
 * switch to using native scoped registries instead. The recommendation of using only React
 * or Angular can then be lifted and replaced with a recommendation to render each application
 * in a shadow root with a scoped registry instead.
 */

// const elNameList = {
//   'gds-popover-dynamic': 'gds-popover',
// }

// function html(strings: TemplateStringsArray, ...values: any[]) {
//   let modstrings = strings.map((s) => {
//     for (const [key, value] of Object.entries(elNameList)) {
//       s = s.replace(key, value)
//     }
//     return s
//   })
//   ;(modstrings as any).raw = strings.raw
//   return litHtml(modstrings as any, ...values)
// }
