# Shared styles

In this folder goes stylesheets that are shared by multiple components and/or primitives. These styles shall be exported as constructed stylesheets and always used within shadow DOM encapsulation.

If a style represents a discrete atomic design element (like a checkbox), a template can also be included in a separate \*.template.ts file. The template should be exported as a function that returns a Lit html template literal. Dynamic content parts can be provided as parameters to the function.

Shared styles and templates should use BEM style naming conventions to minimize risk of class-name conflicts inside components.
