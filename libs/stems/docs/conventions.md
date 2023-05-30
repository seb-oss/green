# Conventions for Green Core

## \# for private properties

Private properties and functions should use the # syntax. This ensures that the field is private for both compile time and runtime. A counter-argument to this might be that it can be useful to access private properties for testing and other edge cases. Cases like that may turn up, but if they do, it would be better to add a more deliberate solution.

## Aria- and state attribute reflection

As a rule-of-thumb, all primitives should be responsible for setting their own aria-attributes. If the aria-attribute reflects state, then the aria-attribute can be a reactive prop that reflects that internal state, such as “selected”, “hidden”, etc. State that can’t be expressed as aria attributes can have custom reflected attributes.
Also, primitives should generally be responsible for setting their own role attribute.
At some point in the future, when the Accessibility Object Model (AOM) has matured a bit more and gained better browser support, we might move the aria attributes there instead, and set them though ElementInternals as the AOM spec suggests.
Other than that, attribute reflection should be avoided.

## Form components

Form components should implement the same standard properties as native form components:

- onChange event when the value changes
- A value prop for setting the value (should not emit change event)
- Have the static formAssociated property set to true on the class
- Use ElementInternals setFormValue to set the form value whenever the value changes
-

## Consider which primitive or component should be responsible for behaviours

Many types of UI widgets have certain expected behaviours, such as keyboard navigation. When developing a component and breaking it down into primitives, carefully consider where the responsibility for controlling those behaviours should lie. Sometimes, the containing component is the appropriate entity, and sometimes it is inside the primitive itself. Consider how focus is managed and flows through the interface.

## Composition over inheritance

When we build components in Green Core, we come across many aspects that are either shared among many or unique to a certain component. When we come across shared features, it may be tempting to organise those features in a shared base class. But instead we should work with composition, through helper functions, class mixing or decorators. That way we avoid creating complex inheritance hierarchies that get difficult to maintain over time.

## Documentation

At a minimum, all public methods and properties should be documented using JSDoc, and all component features should be demonstrated in a Storybook story.
But in addition the the public interface, it is also quite useful to have JSDoc comments for internal methods and properties. These are helpful when maintaining the library or when working on new features, as the JSDoc comments gets picked up by code editors such as VS Code and displayed when hovering parts of the code.

## Component status

### Beta or Stable

Newly added components can be marked as Beta until they have been fully review, tested and processed in all relevant aspects. A component marked as Beta is not included in the Semantic Versioning guarantees of the rest of the system. Using a beta component means accepting the risk that breaking changes can, and will, occur even in patch releases of the framework.

### ACE approval

Before a component is marked Stable, a developer will have gone through the appropriate specifications to make sure it implements all appropriate roles and behaviours, but it may not yet have been tested by the Accessibility Centre of Excellence.
Once it has been rigorously tested by accessibility experts, it will receive this status.
