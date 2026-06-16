import{u as o,j as n,M as s,a5 as a}from"./iframe-BSZXZYIs.js";import"./preload-helper-PPVm8Dsz.js";const i=`# Green Design System Context CLI

A command-line tool for accessing Green Design System documentation, component APIs, guides, and usage instructions — the same context that the [Green MCP server](../mcp-server/README.md) provides, but accessible directly from the terminal.

CLI access is useful when MCP is not available, or when higher degrees of output filtering or manipulation is desired. Using the CLI, agents can save output in files, filter via pipes, or otherwise apply contextually relevant processing.

## Installation

The CLI is automatically included when you install \`@sebgroup/green-core\`:

\`\`\`bash
npm install @sebgroup/green-core
\`\`\`

## Usage

\`\`\`bash
npx green-core-context <command> [options]
\`\`\`

Or, if installed globally:

\`\`\`bash
green-core-context <command> [options]
\`\`\`

### Global options

| Option            | Description         |
| ----------------- | ------------------- |
| \`-h\`, \`--help\`    | Show help message   |
| \`-v\`, \`--version\` | Show version number |

## Commands

### \`search\` — Search for components and icons

\`\`\`bash
green-core-context search <query> [options]
\`\`\`

| Option              | Description                             | Default |
| ------------------- | --------------------------------------- | ------- |
| \`--category <type>\` | Filter by \`component\`, \`icon\`, or \`all\` | \`all\`   |
| \`--no-split-terms\`  | Don't split query on spaces/commas      | —       |
| \`--match-all\`       | Require ALL terms to match (AND logic)  | \`false\` |
| \`--use-regex\`       | Treat query as a regular expression     | \`false\` |
| \`--max-results <n>\` | Maximum results to return (1–100)       | \`20\`    |

**Examples:**

\`\`\`bash
# Basic search
green-core-context search button

# Search icons only
green-core-context search arrow --category icon

# Regex search
green-core-context search "^gds-card" --use-regex

# AND-match multiple terms
green-core-context search "dropdown menu" --match-all

# Pipe JSON output to jq
green-core-context search button | jq '.results[0]'
\`\`\`

### \`docs\` — Get component documentation

\`\`\`bash
green-core-context docs <component> <framework> [options]
\`\`\`

| Option              | Description                         |
| ------------------- | ----------------------------------- |
| \`--no-guidelines\`   | Exclude UX/design guidelines        |
| \`--no-instructions\` | Exclude agent-specific instructions |

**Frameworks:** \`angular\`, \`react\`, \`web-component\`

**Aliases (docs command):**

- \`web\`
- \`webcomponent\`
- \`web-components\`

**Examples:**

\`\`\`bash
# Angular docs for button
green-core-context docs button angular

# React docs without guidelines
green-core-context docs gds-dropdown react --no-guidelines

# Web Component docs using alias
green-core-context docs card web

# Pipe to less for paging
green-core-context docs card web-component | less
\`\`\`

### \`guides\` — List available guides

\`\`\`bash
green-core-context guides [options]
\`\`\`

| Option               | Description                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| \`--category <type>\`  | Filter: \`framework-setup\`, \`getting-started\`, \`concepts\`, \`troubleshooting\`, \`migration\`, \`all\` |
| \`--framework <name>\` | Filter: \`angular\`, \`react\`, \`all\`                                                               |

**Examples:**

\`\`\`bash
# List all guides
green-core-context guides

# Only Angular guides
green-core-context guides --framework angular

# Only concept docs
green-core-context guides --category concepts
\`\`\`

### \`guide\` — Get a specific guide

\`\`\`bash
green-core-context guide <name>
\`\`\`

Run \`green-core-context guides\` first to see available names.

**Examples:**

\`\`\`bash
green-core-context guide angular
green-core-context guide troubleshooting | less
\`\`\`

### \`get\` — Fetch raw content by URI

\`\`\`bash
green-core-context get <uri>
\`\`\`

Resolves a \`green://\` URI and prints the raw content. URIs are returned by the \`search\` command and follow this format:

| URI pattern                             | Description                    |
| --------------------------------------- | ------------------------------ |
| \`green://components/<name>/api\`         | Component API reference        |
| \`green://components/<name>/<framework>\` | Framework-specific usage guide |
| \`green://icons/<name>/api\`              | Icon API reference             |
| \`green://guides/<name>\`                 | Guide document                 |
| \`green://concepts/<name>\`               | Concept document               |
| \`green://instructions\`                  | Base instructions              |

**Examples:**

\`\`\`bash
# Get a clean API table for button
green-core-context get green://components/button/api

# Get Angular usage guide for dropdown
green-core-context get green://components/dropdown/angular

# Fetch base instructions
green-core-context get green://instructions

# Pipe to less
green-core-context get green://guides/angular | less
\`\`\`

### \`instructions\` — Get base instructions

\`\`\`bash
green-core-context instructions
\`\`\`

Returns the base instructions document with critical rules, typography guidelines, layout system requirements, and best practices.

### \`migrate\` — Run code migrations

Detect and apply automated code migrations for major version upgrades.

\`\`\`bash
green-core-context migrate <subcommand> [options]
\`\`\`

**Subcommands:**

| Subcommand | Description                                     |
| ---------- | ----------------------------------------------- |
| \`list\`     | List available migration units                  |
| \`run\`      | Detect issues (default) or apply with \`--apply\` |

**Options (for \`run\`):**

| Option         | Description                          | Default     |
| -------------- | ------------------------------------ | ----------- |
| \`--apply\`      | Apply changes (default: detect only) | \`false\`     |
| \`--unit <id>\`  | Run a specific migration unit by ID  | all units   |
| \`--major <n>\`  | Run migrations for major version \`n\` | all majors  |
| \`--path <dir>\` | Target directory to scan             | current dir |
| \`--json\`       | Output results as JSON               | \`false\`     |

**Examples:**

\`\`\`bash
# List all available migrations
green-core-context migrate list

# Detect issues in the current directory
green-core-context migrate run

# Detect issues in a specific directory
green-core-context migrate run --path ./src

# Apply all migrations for v3
green-core-context migrate run --major 3 --apply

# Run a specific migration and output JSON
green-core-context migrate run --unit 3.0.0/my-migration --json

# List migrations as JSON (useful for agents)
green-core-context migrate list --json
\`\`\`

**Creating migration units:**

Migration units live in \`src/bin/context-cli/migrate/units/\`. See
[\`units/example.ts\`](./migrate/units/example.ts) for a documented template.
Each unit has a \`detect()\` function (regex-based scanning) and an \`apply()\`
function (string transformation). Units are registered in
[\`migrate/registry.ts\`](./migrate/registry.ts).

## Piping and filtering

All output goes to \`stdout\`, making it easy to compose with standard Unix tools:

\`\`\`bash
# Search and filter with jq
green-core-context search button | jq '.results[] | .tagName'

# Pipe docs through grep
green-core-context docs button angular | grep -i "import"

# Page through long output
green-core-context instructions | less

# Save to file
green-core-context docs card react > card-docs.md
\`\`\`

## Architecture

The CLI reuses the same handler logic as the MCP server. The shared handlers live in [\`../mcp-server/handlers.ts\`](../mcp-server/handlers.ts) and are consumed by both:

- **MCP server** (\`mcp-server/tools.ts\`) — wires handlers to the MCP protocol
- **Context CLI** (\`context-cli/index.ts\`) — wires handlers to \`process.argv\`

\`\`\`
┌─────────────────┐     ┌──────────────┐
│  MCP Server     │────▶│              │
│  (tools.ts)     │     │  handlers.ts │──▶ validation / search / utils
│                 │     │              │
├─────────────────┤     │  (shared     │
│  Context CLI    │────▶│   logic)     │
│  (index.ts)     │     │              │
└─────────────────┘     └──────────────┘
\`\`\`

## Security

- **Input validation**: All user input flows through the shared validation module, which sanitises component names (prevents path traversal), enforces regex length limits (prevents ReDoS), and validates types/enums.
- **No shell execution**: The CLI never invokes external commands or shells.
- **No network access**: All data is read from pre-generated local files.
- **No eval or dynamic code execution**: Arguments are parsed from \`process.argv\` directly.
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Guides/Green Context CLI"}),`
`,n.jsx(a,{children:i})]})}function g(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{g as default};
