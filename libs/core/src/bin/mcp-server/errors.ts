/**
 * Error handling for the Green Design System MCP Server
 */

/**
 * Error codes for MCP operations
 */
export enum McpErrorCode {
  /** Invalid input parameter provided */
  INVALID_INPUT = 'INVALID_INPUT',
  /** Requested resource not found */
  NOT_FOUND = 'NOT_FOUND',
  /** Failed to load required data files */
  DATA_LOAD_FAILED = 'DATA_LOAD_FAILED',
  /** Invalid resource URI format */
  INVALID_URI = 'INVALID_URI',
  /** File system operation failed */
  FILE_ERROR = 'FILE_ERROR',
  /** Invalid regex pattern */
  INVALID_REGEX = 'INVALID_REGEX',
  /** Search operation failed */
  SEARCH_FAILED = 'SEARCH_FAILED',
  /** Internal server error */
  INTERNAL_ERROR = 'INTERNAL_ERROR',
}

/**
 * Base error class for MCP server errors
 * Provides structured error information for better debugging and error handling
 */
export class McpError extends Error {
  /**
   * Create a new MCP error
   * @param message - Human-readable error message
   * @param code - Error code for programmatic handling
   * @param context - Additional context information about the error
   */
  constructor(
    message: string,
    public readonly code: McpErrorCode,
    public readonly context?: Record<string, unknown>,
  ) {
    super(message)
    this.name = 'McpError'

    // Maintains proper stack trace for where error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, McpError)
    }
  }

  /**
   * Convert error to JSON representation
   */
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      context: this.context,
      stack: this.stack,
    }
  }
}

/**
 * Error thrown when input validation fails
 */
export class ValidationError extends McpError {
  constructor(
    message: string,
    public readonly field?: string,
    context?: Record<string, unknown>,
  ) {
    super(message, McpErrorCode.INVALID_INPUT, {
      ...context,
      field,
    })
    this.name = 'ValidationError'
  }
}

/**
 * Error thrown when a resource is not found
 */
export class NotFoundError extends McpError {
  constructor(
    message: string,
    public readonly resourceType: string,
    public readonly resourceId: string,
    context?: Record<string, unknown>,
  ) {
    super(message, McpErrorCode.NOT_FOUND, {
      ...context,
      resourceType,
      resourceId,
    })
    this.name = 'NotFoundError'
  }
}

/**
 * Error thrown when data loading fails
 */
export class DataLoadError extends McpError {
  constructor(
    message: string,
    public readonly filePath: string,
    context?: Record<string, unknown>,
  ) {
    super(message, McpErrorCode.DATA_LOAD_FAILED, {
      ...context,
      filePath,
    })
    this.name = 'DataLoadError'
  }
}

/**
 * Error thrown when a regex pattern is invalid
 */
export class RegexError extends McpError {
  constructor(
    message: string,
    public readonly pattern: string,
    context?: Record<string, unknown>,
  ) {
    super(message, McpErrorCode.INVALID_REGEX, {
      ...context,
      pattern,
    })
    this.name = 'RegexError'
  }
}

/**
 * Convert any error to an MCP error response format
 * @param error - The error to convert
 * @returns Formatted error response
 */
export function formatErrorResponse(error: unknown): {
  content: Array<{ type: string; text: string }>
  isError: boolean
} {
  let message: string
  let code: string | undefined
  let context: Record<string, unknown> | undefined

  if (error instanceof McpError) {
    message = error.message
    code = error.code
    context = error.context
  } else if (error instanceof Error) {
    message = error.message
    code = McpErrorCode.INTERNAL_ERROR
  } else {
    message = String(error)
    code = McpErrorCode.INTERNAL_ERROR
  }

  // Build error message
  let errorText = `Error: ${message}`
  if (code) {
    errorText = `Error [${code}]: ${message}`
  }

  // Add context if available
  if (context && Object.keys(context).length > 0) {
    errorText += `\n\nContext: ${JSON.stringify(context, null, 2)}`
  }

  return {
    content: [
      {
        type: 'text',
        text: errorText,
      },
    ],
    isError: true,
  }
}

/**
 * Log error with structured information
 * @param error - The error to log
 * @param operation - The operation that failed
 */
export function logError(error: unknown, operation: string): void {
  const logData: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    operation,
  }

  if (error instanceof McpError) {
    logData.errorCode = error.code
    logData.message = error.message
    logData.context = error.context
  } else if (error instanceof Error) {
    logData.errorType = error.name
    logData.message = error.message
    logData.stack = error.stack
  } else {
    logData.error = String(error)
  }

  console.error('[MCP Error]', JSON.stringify(logData))
}
