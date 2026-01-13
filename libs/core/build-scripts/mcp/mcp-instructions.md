# Green Design System - MCP Instructions

## Critical Rules

### Pre-Implementation Requirements

- **ALWAYS read the declarative layout guide before creating any layout**
- **Read component-specific instructions.md when available**
- **NEVER guess or assume component API. ALWAYS look up properties in the API docs**
- **Verify full context understanding before writing code**
- **Ask user for clarification if ANY requirement is unclear**
- **For new apps, ALWAYS read the setup guide for the used framework (Angular or React)**

### Component Architecture

- All components use `gds-` prefix
- Web components built with Lit (framework-agnostic)
- Angular wrappers: `@sebgroup/green-core-ng` with `Component` suffix
- React wrappers: `@sebgroup/green-core/react` as PascalCase names

### Typography Rules

- **REQUIRED**: Use `gds-text` component for all headings and text content
- **REQUIRED**: Use `gds-rich-text` for large bodies of text with varied formatting
- **FORBIDDEN**: Direct HTML text elements (h1-h6, p, span) without gds-text wrapper

### Layout Rules

- **REQUIRED**: Use declarative layout system for all layouts
- **REQUIRED**: Read declarative layout guide before implementing any layout
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
   - Angular: kebab-case events → camelCase outputs
   - React: events use "on" prefix (onChange, onClick)
   - Web Components: standard DOM events

### Required Reading Order

1. Component api.md (target component)
2. Component instructions.md (if exists)
3. Component guidelines.md (if exists)
4. Framework-specific guide (angular.md or react.md)

### Resource Reference

- `api.md` - Complete technical API reference
- `guidelines.md` - UX and design guidelines
- `instructions.md` - Agent-specific constraints and notes
- `angular.md` / `react.md` - Framework-specific patterns
- `guides/` - Setup, troubleshooting, migration documentation
