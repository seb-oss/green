# Green Design System MCP Server

This directory contains the Model Context Protocol (MCP) server for the Green Design System. The MCP server exposes Green component documentation, guides, and framework-specific implementation details to AI agents like GitHub Copilot.

## What is MCP?

The Model Context Protocol (MCP) is a standard protocol that allows AI agents to access external data sources and tools. The Green MCP server enables AI assistants to:

- Search for Green components and icons
- Retrieve component API documentation
- Access framework-specific implementation guides (Angular, React)
- Get UX and design guidelines
- Browse setup guides and conceptual documentation

## Architecture

The MCP server is bundled with `@sebgroup/green-core` and reads pre-generated documentation from `libs/core/src/generated/mcp/`. The documentation is generated at build time by the `generate-mcp-data.ts` script.

### Components

- **index.ts** - Main server entry point, initializes MCP server with stdio transport
- **resources.ts** - Resource handlers for browsable documentation (URI-based access)
- **tools.ts** - Tool handlers for search and query operations
- **types.ts** - TypeScript type definitions
- **utils.ts** - Utility functions for data loading and path resolution

## User Setup

### Installation

The MCP server is automatically included when you install `@sebgroup/green-core`:

```bash
npm install @sebgroup/green-core
```

### Configuration for GitHub Copilot in VS Code

1. Create or edit the MCP configuration file:
   - **macOS/Linux**: `~/.config/Code/User/globalStorage/github.copilot-chat/mcp.json`
   - **Windows**: `%APPDATA%\Code\User\globalStorage\github.copilot-chat\mcp.json`

2. Add the Green MCP server configuration:

```json
{
  "mcpServers": {
    "green-design-system": {
      "command": "npx",
      "args": ["--yes", "@sebgroup/green-core", "mcp-server"]
    }
  }
}
```

3. Restart VS Code

### Alternative Configuration

If you experience issues with npx resolution, you can use a direct path:

```json
{
  "mcpServers": {
    "green-design-system": {
      "command": "node",
      "args": ["./node_modules/@sebgroup/green-core/build-scripts/mcp/server/index.js"]
    }
  }
}
```

## Available Tools

### search_components

Search for components or icons by name, description, or functionality.

**Parameters:**
- `query` (required): Search term (e.g., "button", "dropdown", "arrow icon")
- `category` (optional): Filter by "component", "icon", or "all" (default: "all")

**Returns:** List of matching components with available documentation types and resource URIs.

### get_component_docs

Get complete documentation for a specific component.

**Parameters:**
- `componentName` (required): Component tag name (e.g., "gds-button") or short name (e.g., "button")
- `framework` (required): "angular", "react", or "web-component"
- `includeGuidelines` (optional): Include UX/design guidelines (default: true)
- `includeInstructions` (optional): Include agent-specific instructions (default: true)

**Returns:** Consolidated documentation in markdown format.

### list_guides

List available setup guides and conceptual documentation.

**Parameters:**
- `category` (optional): Filter by category ("framework-setup", "getting-started", "concepts", "troubleshooting", "migration", "all")
- `framework` (optional): Filter by framework ("angular", "react", "all")

**Returns:** List of guides with resource URIs.

## Available Resources

Resources provide direct URI-based access to documentation:

- **Components**: `green://components/{name}/{docType}`
  - Example: `green://components/button/angular`
  - Doc types: `api`, `angular`, `react`, `guidelines`, `instructions`

- **Icons**: `green://icons/{name}/{docType}`
  - Example: `green://icons/arrow/api`
  - Doc types: `api`, `angular`, `react`

- **Guides**: `green://guides/{name}`
  - Example: `green://guides/angular`

- **Concepts**: `green://concepts/{name}`
  - Example: `green://concepts/tokens`

## Development

### Building

The server TypeScript files are compiled to JavaScript during the build process. The output is placed in `dist/libs/core/build-scripts/mcp/server/`.

### Testing Locally

You can test the MCP server locally:

```bash
# From the green-core directory
node ./build-scripts/mcp/server/index.js
```

The server uses stdio transport, so it communicates via standard input/output. You can test it with MCP client tools or by configuring it in VS Code as described above.

### Debugging

The server logs to stderr (not stdout, which is reserved for MCP protocol messages). You can view logs when running the server directly or check VS Code's output panel for MCP-related logs.

## Framework Context Steering

The MCP server is designed to help AI agents use the correct framework-specific documentation:

1. **Required framework parameter**: The `get_component_docs` tool requires the `framework` parameter, forcing agents to specify their context
2. **Framework reminders**: Responses include reminders about framework-specific syntax
3. **Clear tool descriptions**: Tool descriptions emphasize the importance of framework context

This helps prevent common mistakes like using Angular import paths in React projects or vice versa.

## Future Enhancements

Potential improvements for future versions:

- Semantic search with embeddings for better query understanding
- Prompt templates for common workflows
- Component usage examples from real codebases
- Caching layer for improved performance
- Telemetry to understand usage patterns
