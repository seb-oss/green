import {
  ComponentData,
  ComponentEvent,
  ComponentProperty,
} from '../../core/src/utils/helpers/component-meta.types'
import { TestGenerator } from './test-generator'

/**
 * Generates Angular component wrappers for web components
 */
export class AngularGenerator {
  /**
   * Converts a class name to Angular component name
   */
  static toAngularComponentName(className: string): string {
    return `${className}Component`
  }

  /**
   * Converts kebab-case to camelCase for Angular event names
   */
  private static toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  }

  /**
   * Generates the complete Angular component code
   */
  static generateComponent(
    componentData: ComponentData,
    reExportedPrimitives: {
      primitiveClass: string
      reExportPath: string
    }[] = [],
  ): string {
    const imports = this.generateImports(componentData, reExportedPrimitives)
    const componentClass = this.generateComponentClass(componentData)

    return `${imports}\n\n${componentClass}`
  }

  /**
   * Generates import statements for the component
   */
  private static generateImports(
    componentData: ComponentData,
    reExportedPrimitives: {
      primitiveClass: string
      reExportPath: string
    }[] = [],
  ): string {
    const hasBooleanInputs = componentData.properties.some((p) =>
      this.isBooleanType(p.type),
    )

    const coreImports = [
      'Component',
      'ElementRef',
      'Input',
      'Output',
      'EventEmitter',
      'ChangeDetectionStrategy',
      'OnInit',
      'OnChanges',
      'AfterViewInit',
      'SimpleChanges',
      'inject',
      'NgZone',
      'ChangeDetectorRef',
    ]

    if (hasBooleanInputs) {
      coreImports.push('booleanAttribute')
    }

    const imports = [
      `import { ${coreImports.join(', ')} } from '@angular/core';`,
    ]

    // Add web component decorator import if we have inputs
    if (componentData.properties.length > 0) {
      imports.push(
        `import { ProxyInputs } from '../../proxy-inputs.decorator';`,
      )
    }

    // Add web component class import
    const componentPath = this.getWebComponentImportPath(componentData)
    imports.push(
      `import { ${componentData.className} } from '${componentPath}';`,
    )

    // Add type imports for re-exported primitives (but not for the component's own class)
    // Deduplicate by primitiveClass to avoid importing the same type multiple times
    if (reExportedPrimitives.length > 0) {
      const uniquePrimitives = new Map<string, string>()

      for (const primitive of reExportedPrimitives) {
        // Don't import type for the component's own class
        if (primitive.primitiveClass !== componentData.className) {
          // Only add if we haven't seen this primitive class before
          if (!uniquePrimitives.has(primitive.primitiveClass)) {
            uniquePrimitives.set(
              primitive.primitiveClass,
              primitive.reExportPath,
            )
          }
        }
      }

      // Generate import statements for unique primitives
      for (const [primitiveClass, reExportPath] of uniquePrimitives) {
        imports.push(
          `import type { ${primitiveClass} } from '@sebgroup/green-core/${reExportPath}';`,
        )
      }
    }

    return imports.join('\n')
  }

  /**
   * Generates the import path for the web component class
   */
  private static getWebComponentImportPath(component: ComponentData): string {
    // Special handling for pattern components - import from pure index
    if (component.sourcePath.includes('/patterns/')) {
      return '@sebgroup/green-core/pure'
    }

    // Transform the source path from manifest:
    // src/components/alert/alert.component.ts -> components/alert/alert.component.js
    // src/patterns/card-pattern-01/index.ts -> components/patterns/card-pattern-01/index.js

    const pathParts = component.sourcePath.split('/')

    // Replace first two components (src/components or src/patterns) with 'components'
    if (pathParts.length >= 2) {
      pathParts[0] = 'components'
      pathParts.splice(1, 1) // Remove the second part (components/patterns)
    }

    // Replace .ts with .js
    const transformedPath = pathParts.join('/').replace(/\.ts$/, '.js')

    return `@sebgroup/green-core/${transformedPath}`
  }

  /**
   * Generates the Angular component class
   */
  /**
   * Generates the Angular component class using a single template
   */
  private static generateComponentClass(componentData: ComponentData): string {
    // Prepare all template data
    const templateData = this.prepareTemplateData(componentData)

    // Generate component using single template
    return this.renderComponentTemplate(templateData)
  }

  /**
   * Prepares all data needed for the component template
   */
  private static prepareTemplateData(componentData: ComponentData) {
    const hasInputs = componentData.properties.length > 0
    const hasOutputs = componentData.events.length > 0
    const validInputs = componentData.properties.filter(
      (property) => property.name,
    )

    return {
      // Component metadata
      tagName: componentData.tagName,
      className: componentData.className,
      angularComponentName: this.toAngularComponentName(
        componentData.className,
      ),
      description: componentData.description || '',

      // Decorator configuration
      proxyInputsDecorator: hasInputs
        ? `@ProxyInputs([${validInputs
            .map((property) => `'${property.name.replace(/\'/g, '')}'`)
            .join(', ')}])`
        : '',

      // Interface implementation
      implementsClause: hasInputs
        ? ' implements OnInit, OnChanges, AfterViewInit'
        : ' implements OnInit',

      // Properties and methods
      inputProperties: this.generateInputs(
        componentData.properties,
        componentData.className,
      ),
      outputProperties: this.generateOutputs(componentData.events),
      lifecycleMethods: this.generateLifecycle(componentData),
    }
  }

  /**
   * Renders the component using a single template literal
   */
  private static renderComponentTemplate(data: any): string {
    return `
/**
 * Angular wrapper for the ${data.tagName} web component
 * ${data.description}
 */
${data.proxyInputsDecorator}
@Component({
  selector: '${data.tagName}',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<ng-content></ng-content>\`
})
export class ${data.angularComponentName}${data.implementsClause} {

  private elementRef = inject(ElementRef<${data.className}>);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  get element(): ${data.className} {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
  }

${data.inputProperties}
${data.outputProperties}
${data.lifecycleMethods}
}`
  }

  /**
   * Generates input properties for the component class
   * Boolean properties use @Input with booleanAttribute transform to support attribute syntax
   * Non-boolean properties use regular @Input decorators
   */
  private static generateInputs(
    inputs: ComponentProperty[],
    className: string,
  ): string {
    if (inputs.length === 0) return ''

    return inputs
      .map((input) => {
        const comment = input.description
          ? `\n  /** ${input.description} */`
          : ''

        const isBoolean = this.isBooleanType(input.type)
        const inputDecorator = isBoolean
          ? `@Input({ transform: booleanAttribute })`
          : `@Input()`

        return `${comment}
  ${inputDecorator}
  ${input.name}${
    input.required ? '!' : '?'
  }: ${className}['${input.name?.replace(/\'/g, '')}'];`
      })
      .join('\n')
  }

  /**
   * Helper to check if a type is boolean
   */
  private static isBooleanType(type: string): boolean {
    // Check for exact 'boolean' or 'boolean | ...' or '... | boolean'
    return /\bboolean\b/.test(type)
  }

  /**
   * Generates output event emitters
   */
  private static generateOutputs(outputs: ComponentEvent[]): string {
    if (outputs.length === 0) return ''

    const eventEmitters = outputs
      .map((output) => {
        const comment = output.description
          ? `\n  /** ${output.description} */`
          : ''
        const angularEventName = this.toCamelCase(output.name)
        return `${comment}
  @Output()
  ${angularEventName} = new EventEmitter<${output.type}>();`
      })
      .join('\n')

    return eventEmitters
  }

  /**
   * Generates lifecycle hooks for property initialization and event handling
   */
  private static generateLifecycle(componentData: ComponentData): string {
    const customEventOutputs = componentData.events.filter((output) =>
      output.name.startsWith('gds-'),
    )
    const hasOutputs = customEventOutputs.length > 0
    const hasInputs = componentData.properties.length > 0

    let lifecycleContent = ''

    // Define the custom element first (always needed)
    lifecycleContent += `    // Define the custom element
    try {
      ${componentData.className}.define();
    } catch (e) {
      // Component may not be available in this version of green-core
      console.warn('Failed to define ${componentData.tagName}:', e);
    }`

    if (hasOutputs) {
      const eventListeners = customEventOutputs
        .map(
          (output) =>
            `    this.elementRef.nativeElement.addEventListener('${
              output.name
            }', (event: Event) => {
      this.${this.toCamelCase(
        output.name,
      )}.emit(event as CustomEvent<${this.extractEventType(output.type)}>);
    });`,
        )
        .join('\n')

      if (lifecycleContent) lifecycleContent += '\n\n'
      lifecycleContent += `    // Set up event listeners
      ${eventListeners}`
    }

    return `
  ngOnInit(): void {
${lifecycleContent}
  }${
    hasInputs
      ? `

  ngOnChanges(changes: SimpleChanges): void {
    // Implementation added by @ProxyInputs decorator
  }

  ngAfterViewInit(): void {
    // Implementation added by @ProxyInputs decorator
  }`
      : ''
  }`
  }

  /**
   * Extracts the inner type from an event type (e.g., 'CustomEvent<string>' -> 'string')
   */
  private static extractEventType(eventType: string): string {
    const match = eventType.match(/CustomEvent<(.+)>/)
    return match ? match[1] : 'any'
  }

  /**
   * Generates a test file for the component
   */
  static generateTest(componentData: ComponentData): string {
    return TestGenerator.generateTest(componentData)
  }
}
