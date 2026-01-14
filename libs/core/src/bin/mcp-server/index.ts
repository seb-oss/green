#!/usr/bin/env node
/**
 * Green Design System MCP Server
 *
 * Provides Model Context Protocol access to Green Design System documentation,
 * enabling AI agents to search and retrieve component documentation, guides,
 * and framework-specific implementation details.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { SERVER_CONFIG } from './constants.js'
import { logError } from './errors.js'
import { setupResourceHandlers } from './resources.js'
import { setupToolHandlers } from './tools.js'
import { getPackageVersion } from './utils.js'

/**
 * Initialize and start the MCP server
 */
async function main() {
  // Read version from package.json at runtime
  const packageVersion = await getPackageVersion()

  // Create server instance
  const server = new McpServer(
    {
      name: SERVER_CONFIG.SERVER_NAME,
      version: packageVersion,
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    },
  )

  // Register handlers
  setupResourceHandlers(server.server)
  setupToolHandlers(server.server)

  // Set up error handling
  server.server.onerror = (error) => {
    logError(error, 'mcpServer')
  }

  process.on('SIGINT', async () => {
    await server.close()
    process.exit(0)
  })

  // Create stdio transport and connect
  const transport = new StdioServerTransport()
  await server.connect(transport)

  // Log to stderr (stdout is reserved for MCP protocol)
  console.error(`Green Core MCP Server started`)
  console.error(`Version: ${packageVersion}`)
  console.error('Waiting for requests...')
}

// Start the server
main().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
