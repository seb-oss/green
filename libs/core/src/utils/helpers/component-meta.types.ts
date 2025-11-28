/**
 * TypeScript interfaces for Custom Elements Manifest (CEM) structure
 * Based on the schema used in custom-elements.json
 */

import { Type } from 'custom-elements-manifest'

/**
 * Processed component meta data
 */
export interface ComponentData {
  /** Original component class name (e.g., 'GdsAlert') */
  className: string
  /** Web component tag name (e.g., 'gds-alert') */
  tagName: string
  /** Component description */
  description?: string
  /** File path where component will be generated */
  outputPath: string
  /** Original source file path from the manifest (e.g., 'src/components/alert/alert.component.ts') */
  sourcePath: string
  /** Input properties from attributes and reflected fields */
  properties: ComponentProperty[]
  /** Output events */
  events: ComponentEvent[]
  /** Content projection slots */
  slots: SlotInfo[]
  /** Public methods that should be exposed */
  methods: MethodInfo[]
}

export interface ComponentProperty {
  /** Property name in Javascript */
  name: string
  /** Attribute name in HTML */
  attributeName?: string
  /** TypeScript type */
  type: string
  /** Default value */
  defaultValue?: string
  /** Property description */
  description?: string
  /** Whether the property is required */
  required?: boolean
}

export interface ComponentEvent {
  /** Original event name from web component (e.g., 'gds-close') */
  name: string
  /** Event type (e.g., 'CustomEvent<string>') */
  type: string
  /** Event description */
  description?: string
}

export interface SlotInfo {
  /** Slot name (empty string for default slot) */
  name: string
  /** Slot description */
  description?: string
}

export interface MethodInfo {
  /** Method name */
  name: string
  /** Return type */
  returnType?: Type
  /** Method parameters */
  parameters: ParameterInfo[]
  /** Method description */
  description?: string
}

export interface ParameterInfo {
  /** Parameter name */
  name: string
  /** Parameter type */
  type: string
  /** Whether parameter is optional */
  optional: boolean
  /** Parameter description */
  description?: string
}
