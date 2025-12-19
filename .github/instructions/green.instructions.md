---
applyTo: '**'
---

You are in a NX monorepo hosting multiple libraries and applications for a design system called Green Design System. Check the nx.instructions.md for general Nx guidelines on how to interact with the monorepo.

These are the libraries in the monorepo:
- libs/core: The core library hosting the web components and shared logic for the design system. The web components are built using Lit, and are designed to act as a framework agnostic technical foundation for the design system. To find information about the components, you can examine the custom-elements.json file in the root of the library.
- libs/core-ng: An Angular library hosting type-safe, auto generated, Angular component wrappers for all Green Design System components.
- libs/react: A legacy React libary, containing older React-specific components.
- libs/angular: A legacy Angular library, containing older Angular-specific components.
- libs/extract: Obsolete code sharing library for Angular and React. No longer actively maintained.
- Obsolete charting libraries: libs/charts, libs/charts-ng, libs/charts-react. These libraries are deprecated and no longer actively maintained. New charting components should be built using the core library as a foundation.

When writing code, follow the established patterns for each library, and ensure that changes are compatible with the design system's architecture and goals.
