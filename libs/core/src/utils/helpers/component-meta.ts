import type {
  ClassField,
  ClassMethod,
  CustomElementDeclaration,
  CustomElementField,
  JavaScriptModule,
  Package,
} from 'custom-elements-manifest'

import {
  ComponentData,
  ComponentEvent,
  MethodInfo,
  SlotInfo,
} from './component-meta.types'

export type { ComponentData }

export interface ReExportedPrimitive {
  primitiveName: string
  primitiveClass: string
  reExportModule: string
  reExportPath: string
}

/**
 * Parses the Custom Elements Manifest and extracts component data
 */
export class CemParser {
  /**
   * Loads and parses the CEM file
   */
  static async loadManifest(
    cemPath = '../../custom-elements.json',
  ): Promise<Package> {
    const cemModule = await import(cemPath)
    return cemModule.default as Package
  }

  /**
   * Extracts modules that contain web components
   */
  static getComponentModules(manifest: Package): JavaScriptModule[] {
    return manifest.modules.filter((mod) =>
      mod.declarations?.some((declaration: unknown) => {
        const d = declaration as CustomElementDeclaration
        return d.tagName && d.customElement === true
      }),
    )
  }

  /**
   * Extracts component data from a JavaScriptModule declaration
   */
  static extractComponentData(
    mod: JavaScriptModule,
    declaration: CustomElementDeclaration,
  ): ComponentData {
    const className = declaration.name
    const tagName = declaration.tagName!

    return {
      tagName,
      className,
      description: declaration.description,
      outputPath: mod.path,
      sourcePath: mod.path,
      properties: this.extractProperties(declaration),
      events: this.extractEvents(declaration),
      slots: this.extractSlots(declaration),
      methods: this.extractMethods(declaration),
    }
  }

  /**
   * Extracts properties
   */
  private static extractProperties(
    declaration: CustomElementDeclaration,
  ): CustomElementField[] {
    if (!declaration.members) return []

    return declaration.members
      .filter<ClassField>(
        (member): member is ClassField =>
          member.name?.length > 0 &&
          member.kind === 'field' &&
          member.privacy !== 'private' &&
          member.privacy !== 'protected' &&
          !member.readonly &&
          !member.static,
      )
      .map((field) => ({
        kind: 'field',
        name: field.name,
        type: field.type,
        defaultValue: field.default,
        description: field.description,
      }))
  }

  /**
   * Extracts events
   */
  private static extractEvents(
    declaration: CustomElementDeclaration,
  ): ComponentEvent[] {
    if (!declaration.events) return []

    return declaration.events
      .filter((event) => event.name && !event.inheritedFrom) // Skip inherited events
      .map((event) => ({
        name: event.name, // Store original event name
        type: this.mapEventType(event.type?.text, event.name),
        description: event.description,
      }))
  }

  /**
   * Extracts slot information
   */
  private static extractSlots(
    declaration: CustomElementDeclaration,
  ): SlotInfo[] {
    if (!declaration.slots) return []

    return declaration.slots.map((slot) => ({
      name: slot.name || 'default',
      description: slot.description,
    }))
  }

  /**
   * Extracts public methods
   */
  private static extractMethods(
    declaration: CustomElementDeclaration,
  ): MethodInfo[] {
    if (!declaration.members) return []

    return declaration.members
      .filter(
        (member): member is ClassMethod =>
          member.kind === 'method' &&
          member.privacy !== 'private' &&
          !member.static &&
          !member.inheritedFrom &&
          !member.name.startsWith('_'),
      )
      .map((method) => ({
        name: method.name,
        description: method.description,
        returnType: method.return?.type,
        parameters:
          method.parameters?.map((param) => ({
            name: param.name,
            type: param.type?.text || 'any',
            optional: param.optional || false,
          })) || [],
      }))
  }

  /**
   * Maps CEM event types to TypeScript types
   */
  private static mapEventType(cemType?: string, eventName?: string): string {
    // If we have explicit type info, use it
    if (cemType) {
      if (cemType === 'CustomEvent') {
        return 'CustomEvent<any>'
      }
      return cemType
    }

    // If no type info, infer from standard DOM event names
    if (!eventName) return 'Event'

    // Map standard DOM events to their proper types
    const standardEventMap: Record<string, string> = {
      click: 'MouseEvent',
      dblclick: 'MouseEvent',
      mousedown: 'MouseEvent',
      mouseup: 'MouseEvent',
      mouseover: 'MouseEvent',
      mouseout: 'MouseEvent',
      mousemove: 'MouseEvent',
      mouseenter: 'MouseEvent',
      mouseleave: 'MouseEvent',
      contextmenu: 'MouseEvent',

      keydown: 'KeyboardEvent',
      keyup: 'KeyboardEvent',
      keypress: 'KeyboardEvent',

      focus: 'FocusEvent',
      blur: 'FocusEvent',
      focusin: 'FocusEvent',
      focusout: 'FocusEvent',

      input: 'InputEvent',
      change: 'Event',
      submit: 'SubmitEvent',
      reset: 'Event',

      scroll: 'Event',
      resize: 'UIEvent',
      load: 'Event',
      unload: 'Event',
      error: 'ErrorEvent',

      touchstart: 'TouchEvent',
      touchend: 'TouchEvent',
      touchmove: 'TouchEvent',
      touchcancel: 'TouchEvent',

      wheel: 'WheelEvent',
      drag: 'DragEvent',
      dragstart: 'DragEvent',
      dragend: 'DragEvent',
      dragenter: 'DragEvent',
      dragleave: 'DragEvent',
      dragover: 'DragEvent',
      drop: 'DragEvent',
    }

    // Return specific type if it's a standard DOM event
    const standardType = standardEventMap[eventName]
    if (standardType) {
      return standardType
    }

    // For custom events (like gds-* events), assume CustomEvent
    if (eventName.startsWith('gds-') || eventName.includes('-')) {
      return 'CustomEvent<any>'
    }

    // Default fallback
    return 'Event'
  }

  /**
   * Finds primitives that are re-exported by component modules
   */
  static findReExportedPrimitives(manifest: Package): ReExportedPrimitive[] {
    const reExportedPrimitives: ReExportedPrimitive[] = []

    for (const JavaScriptModule of manifest.modules) {
      // Look for component modules that have exports
      if (
        !JavaScriptModule.path.includes('/components/') ||
        !JavaScriptModule.exports
      ) {
        continue
      }

      for (const exportDecl of JavaScriptModule.exports) {
        // Look for wildcard exports that point to primitives
        if (exportDecl.declaration?.module?.includes('primitives/')) {
          const primitivePackage = exportDecl.declaration.module

          // Find the primitive JavaScriptModule to get class information
          const primitiveModule = manifest.modules.find((m) =>
            m.path.includes(
              primitivePackage
                .replace(/^\.\.\//, 'src/')
                .replace(
                  /^\.\//,
                  JavaScriptModule.path.replace(/\/[^/]+$/, '/'),
                ),
            ),
          )

          if (primitiveModule?.declarations) {
            for (const primitiveDecl of primitiveModule.declarations as CustomElementDeclaration[]) {
              if (primitiveDecl.customElement && primitiveDecl.tagName) {
                reExportedPrimitives.push({
                  primitiveName: primitiveDecl.tagName,
                  primitiveClass: primitiveDecl.name,
                  reExportModule: JavaScriptModule.path,
                  reExportPath: JavaScriptModule.path
                    .replace(/^src\//, '')
                    .replace(/\.ts$/, '.js'),
                })
              }
            }
          }
        }
      }
    }

    return reExportedPrimitives
  }

  /**
   * Parses all components from the manifest
   */
  static async parseAllComponents(manifestPath?: string): Promise<{
    components: ComponentData[]
    reExportedPrimitives: ReExportedPrimitive[]
  }> {
    const manifest = await this.loadManifest(manifestPath)
    const componentModules = this.getComponentModules(manifest)
    const reExportedPrimitives = this.findReExportedPrimitives(manifest)

    const components: ComponentData[] = []

    for (const JavaScriptModule of componentModules) {
      // Skip primitive components - they are internal implementation details
      if (JavaScriptModule.path.includes('/primitives/')) {
        continue
      }

      for (const declaration of (JavaScriptModule.declarations as CustomElementDeclaration[]) ||
        []) {
        if (declaration.tagName && declaration.customElement === true) {
          const componentData = this.extractComponentData(
            JavaScriptModule,
            declaration,
          )
          components.push(componentData)
        }
      }
    }

    // Generate component data for re-exported primitives
    // Use a map to deduplicate primitives that are re-exported from multiple locations
    const primitiveMap = new Map<string, ComponentData>()

    for (const reExported of reExportedPrimitives) {
      // Skip if we've already processed this primitive
      if (primitiveMap.has(reExported.primitiveClass)) {
        continue
      }

      // Find the original primitive JavaScriptModule
      const primitiveModule = manifest.modules.find((m) =>
        m.declarations?.some((d) => d.name === reExported.primitiveClass),
      )

      if (primitiveModule) {
        const primitiveDecl = primitiveModule.declarations?.find(
          (d): d is CustomElementDeclaration =>
            d.name === reExported.primitiveClass,
        )
        if (primitiveDecl) {
          const componentData = this.extractComponentData(
            primitiveModule,
            primitiveDecl,
          )
          // Override the source path to point to the re-export JavaScriptModule
          componentData.sourcePath = reExported.reExportModule
          primitiveMap.set(reExported.primitiveClass, componentData)
        }
      }
    }

    // Add deduplicated primitives to components array
    components.push(...primitiveMap.values())

    return { components, reExportedPrimitives }
  }

  /**
   * Parses a single component by tag name
   */
  static async parseComponent(
    tagName: string,
    manifestPath?: string,
  ): Promise<ComponentData | null> {
    const { components } = await this.parseAllComponents(manifestPath)
    return components.find((comp) => comp.tagName === tagName) || null
  }
}
