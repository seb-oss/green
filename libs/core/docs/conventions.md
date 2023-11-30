# Conventions for Green Core

## \# for private properties

Private properties and functions should use the ES2022 private identifier (#) syntax. This ensures that the field is private at both compile-time and run-time.

There are a few common arguments against using private identifiers, such as added overhead when targeting older JS versions, but in this case the added protection against incorrect use of internal API is worth it. Remember that this is a Web Component library and that it is perfectly valid to use it outside of Typescript, where there's no compiler to yell at you for using conventional Typescript `private` properties.

In the event that # cannot be used, for example together with decorators, then we fall back on the Typescript `private` keyword. We should then also prefix the method or property with an underscore. The underscore helps communicate the intended visibility to non-typescript consumers and at runtime. This means that a component class may contain some private fields with the # syntax and some with the `private` keyword, which may seem confusing. So as a rule of thumb, any field with the `private` keyword should either have a decorator attached, or a comment explaining why an exception is required.

## Code order

The preferred order of code in a component is something like this:

1. Static properties
2. Static functions
3. Public properties
4. Private properties
5. Constructor
6. Public methods
7. Render function
8. Private methods

### What’s what?

**Property:** A field that holds a value. Includes Lit reactive properties. Also commonly referred to as members \
**Method:** Functions that can be called on an instance of the component. Arrow functions also fall under this category. \
**Render function:** This the the standard Lit `render()` function that all components use to render their view.

## Aria- and state attribute reflection

As a rule-of-thumb, all primitives should be responsible for setting their own aria-attributes. If the aria-attribute reflects state, then the aria-attribute can be a reactive prop that reflects that internal state, such as “selected”, “hidden”, etc. State that can’t be expressed as aria attributes can have custom reflected attributes.
Also, primitives should generally be responsible for setting their own role attribute.
At some point in the future, when the Accessibility Object Model (AOM) has matured a bit more and gained better browser support, we might move the aria attributes there instead, and set them though ElementInternals as the AOM spec suggests.

### Variants, sets and sizes

Some components are available in multiple variants, such as primary, secondary and tertiary. These variants can also

## Form controls

Form control components should extend the `GdsFormControlElement` abstract class. This ensures that the component gets set up as a native form control, and has all the expected attributes and methods.

## Consider which primitive or component should be responsible for behaviours

Many types of UI widgets have certain expected behaviours, such as keyboard navigation. When developing a component and breaking it down into primitives, carefully consider where the responsibility for controlling those behaviours should lie. Sometimes, the containing component is the appropriate entity, and sometimes it is inside the primitive itself. Consider how focus is managed and flows through the interface.

## Composition over inheritance

When we build components in Green Core, we come across many aspects that are either shared among many or unique to a certain component. When we come across shared features, it may be tempting to organise those features in a shared base class. But instead we should work with composition, through Lit controllers, helper functions, class mixins or decorators. That way we avoid creating complex inheritance hierarchies that get difficult to maintain over time.

## Documentation

At a minimum, all public methods and properties should be documented using JSDoc, and all component features should be demonstrated in a Storybook story.
But in addition the the public interface, it is also quite useful to have JSDoc comments for internal methods and properties. These are helpful when maintaining the library or when working on new features, as the JSDoc comments gets picked up by code editors such as VS Code and displayed when hovering parts of the code.

## Component status

### Beta or Stable

Newly added components can be marked as Beta until they have been fully review, tested and processed in all relevant aspects. A component marked as Beta is not included in the Semantic Versioning guarantees of the rest of the system. Using a beta component means accepting the risk that breaking changes can, and will, occur even in patch releases of the framework.

## Testing

Every component that is part of the public API should have full test coverage of all of its features.

Preferrably, any new components or features added to existing components should be developed using a test-driven approach.

Tests run in headless browsers using the Modern Web test runner together with Playwright.
