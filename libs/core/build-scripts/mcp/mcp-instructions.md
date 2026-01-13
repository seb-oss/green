# Green Design System - MCP Instructions

## Component Architecture

- All components use `gds-` prefix
- Web components built with Lit (framework-agnostic)
- Angular wrappers: `@sebgroup/green-core-ng` with `Component` suffix
- React wrappers: `@sebgroup/green-core/react` as PascalCase names

## Critical rules to follow

- **Read component-specific instructions.md when available**
- **NEVER guess or assume component API. ALWAYS look up properties in the API docs**
- **Verify full context understanding before writing code**
- **Ask user for clarification if ANY requirement is unclear**
- **ALWAYS read the declarative layout guide before creating any layout**
- **For new apps, ALWAYS read the setup guide for the used framework (Angular or React)**

### Typography Rules

- **REQUIRED**: Use `gds-text` component for all headings and paragraphs. But don't use inside other components, unless explicitly called for
- **REQUIRED**: Use `gds-rich-text` for large bodies of text with varied formatting
- **AVOID**: Direct HTML text elements (h1-h6, p, span), as these will be unstyled

### Layout Rules

- **REQUIRED**: Use declarative layout system for all layouts
- **REQUIRED**: Read declarative layout guide before implementing any layout
- **REQUIRED**: Look up property names in API for each declarative layout component
- **PREFERRED**: Declarative layout over custom CSS
- **FORBIDDEN**: Custom CSS for layout unless declarative system cannot support the requirement

### Component Usage Protocol

1. **Verify component capabilities**:
   - Check if component accepts children (has slots)
   - Review properties, events, methods in api.md
   - Check subcomponents field for required relationships

2. **Check constraints**:
   - Verify component relationships (e.g., radio must be in radio-group)
   - Read component instructions.md if exists
   - Review guidelines.md for UX patterns

3. **Framework patterns**:
   - Check framework instructions for each component.
