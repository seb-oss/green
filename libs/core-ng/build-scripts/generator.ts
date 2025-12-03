import { CustomElementField } from 'custom-elements-manifest'
import {
  ComponentData,
  ComponentEvent,
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
      this.isBooleanType(p.type?.text),
    )
    const isFormControl = componentData.isFormControl || false
    const isLinkComponent = componentData.isLinkComponent || false

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

    // Add forwardRef for form controls
    if (isFormControl) {
      coreImports.push('forwardRef')
    }

    // Add dependency injection decorators for link components
    if (isLinkComponent) {
      coreImports.push('Self', 'Optional', 'Renderer2')
    }

    const imports = [
      `import { ${coreImports.join(', ')} } from '@angular/core';`,
    ]

    // Add forms import for form controls
    if (isFormControl) {
      imports.push(
        `import { NG_VALUE_ACCESSOR } from '@angular/forms';`,
      )
    }

    // Add router imports for link components
    if (isLinkComponent) {
      imports.push(
        `import { RouterLink, RouterLinkActive } from '@angular/router';`,
      )
    }

    // Add web component decorator import if we have inputs
    if (componentData.properties.length > 0) {
      imports.push(
        `import { ProxyInputs } from '../../proxy-inputs.decorator';`,
      )
    }

    // Add form control base class import
    if (isFormControl) {
      imports.push(
        `import { GdsFormControlBase } from '../../form-control-base';`,
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
    // Transform the source path from manifest:
    // src/components/alert/alert.component.ts -> components/alert/alert.component.js
    // src/patterns/card-pattern-01/index.ts -> patterns/card-pattern-01/index.js

    const pathParts = component.sourcePath.split('/')

    // Remove src from the path
    if (pathParts.length >= 1) {
      pathParts.splice(0, 1) // Remove the first part (src)
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
    const isFormControl = componentData.isFormControl || false
    const isLinkComponent = componentData.isLinkComponent || false
    const isMenuButton = componentData.tagName === 'gds-menu-button'
    const validInputs = componentData.properties.filter(
      (property) => property.name,
    )

    const lifecycle = this.generateLifecycle(componentData)

    return {
      // Component metadata
      tagName: componentData.tagName,
      className: componentData.className,
      angularComponentName: this.toAngularComponentName(
        componentData.className,
      ),
      description: componentData.description || '',
      isFormControl,
      isLinkComponent,
      isMenuButton,

      // Decorator configuration
      proxyInputsDecorator: hasInputs
        ? `@ProxyInputs([${validInputs
            .map((property) => `'${property.name.replace(/\'/g, '')}'`)
            .join(', ')}])`
        : '',

      // Base class and interface implementation
      baseClass: isFormControl ? 'GdsFormControlBase' : '',
      implementsClause: isFormControl
        ? '' // Base class already implements the interfaces
        : hasInputs
        ? ' implements OnInit, OnChanges, AfterViewInit'
        : ' implements OnInit',

      // Properties and methods
      inputProperties: this.generateInputs(
        componentData.properties,
        componentData.className,
      ),
      outputProperties: this.generateOutputs(componentData.events),
      lifecycleMethods: lifecycle.fullMethods,
      ngOnInitContent: lifecycle.ngOnInitContent,
      hasInputs,
    }
  }

  /**
   * Renders the component using a single template literal
   */
  private static renderComponentTemplate(data: any): string {
    const extendsClause = data.baseClass ? ` extends ${data.baseClass}` : ''
    const providers = data.isFormControl
      ? `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ${data.angularComponentName}),
      multi: true,
    },
  ]`
      : ''

    // Router link integration for link components
    // Note: For form controls, renderer is already in the base class (protected)
    // So we only inject renderer for non-form-control link components
    const routerLinkInjections = data.isLinkComponent
      ? `${data.isFormControl ? '' : '\n  private renderer = inject(Renderer2);'}
  private routerLink = inject(RouterLink, { optional: true, self: true });
  private routerLinkActive = inject(RouterLinkActive, { optional: true, self: true });`
      : ''

    const routerLinkMethods = data.isLinkComponent
      ? `

  /**
   * Updates the href attribute from RouterLink
   * @internal
   */
  private updateHref(): void {
    if (!this.routerLink) return;

    // Trick RouterLink into thinking we are an anchor element
    (this.routerLink as any).isAnchorElement = true;
    (this.routerLink as any).updateHref();

    // Set the href attribute on our element
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'href',
      this.routerLink.href || '',
    );
  }${
    data.isMenuButton
      ? `

  /**
   * Updates the selected state based on RouterLinkActive
   * @internal
   */
  private setActive(): void {
    if (!this.routerLinkActive) return;
    this.elementRef.nativeElement.selected = this.routerLinkActive.isActive;
  }`
      : ''
  }`
      : ''

    // For form controls, we override ngOnInit but still need to define the element
    const formControlBody = data.isFormControl
      ? `
  get element(): ${data.className} {
    return this.elementRef.nativeElement;
  }

  override ngOnInit(): void {
    super.ngOnInit();
${data.ngOnInitContent}
  }
${
  data.hasInputs
    ? `
  ngOnChanges(changes: SimpleChanges): void {
    // Implementation added by @ProxyInputs decorator
${data.isLinkComponent ? `    if (changes['routerLink']) {\n      this.updateHref();\n    }` : ''}
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
${data.isLinkComponent ? `    this.updateHref();${data.isMenuButton ? `\n    this.setActive();\n    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive());` : ''}` : ''}
  }`
    : `
  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
${data.isLinkComponent ? `    this.updateHref();${data.isMenuButton ? `\n    this.setActive();\n    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive());` : ''}` : ''}
  }`
}
`
      : ''

    // For non-form controls, use the standard pattern
    const standardBody = !data.isFormControl
      ? `
  private elementRef = inject(ElementRef<${data.className}>);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);${routerLinkInjections}

  get element(): ${data.className} {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
${data.isMenuButton ? `    // Subscribe to router link active changes\n    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive());` : ''}
  }

${data.inputProperties}
${data.outputProperties}
${routerLinkMethods}
${data.lifecycleMethods}`
      : `
${routerLinkInjections}
${data.inputProperties}
${data.outputProperties}
${routerLinkMethods}
${formControlBody}`

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
  template: \`<ng-content></ng-content>\`${providers}
})
export class ${data.angularComponentName}${extendsClause}${data.implementsClause} {
${standardBody}
}`
  }

  /**
   * Generates input properties for the component class
   * Boolean properties use @Input with booleanAttribute transform to support attribute syntax
   * Non-boolean properties use regular @Input decorators
   */
  private static generateInputs(
    inputs: CustomElementField[],
    className: string,
  ): string {
    if (inputs.length === 0) return ''

    return inputs
      .map((input) => {
        const comment = input.description
          ? `\n  /** ${input.description} */`
          : ''

        const isBoolean = this.isBooleanType(input.type?.text)
        const inputDecorator = isBoolean
          ? `@Input({ transform: booleanAttribute })`
          : `@Input()`

        // Note: All inputs are marked as optional, since any properties in the underlying
        // web component that does not have `undefined` in the type will have a default value
        // set by the web component itself. There shouldn't be any need to replicate that in
        // the Angular wrapper, so we can keep it simple and mark all inputs as optional.
        return `${comment}
  ${inputDecorator}
  ${input.name}?: ${className}['${input.name?.replace(/\'/g, '')}'];`
      })
      .join('\n')
  }

  /**
   * Helper to check if a type is boolean
   */
  private static isBooleanType(type?: string): boolean {
    // Check for exact 'boolean' or 'boolean | ...' or '... | boolean'
    return /\bboolean\b/.test(type || '')
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
  private static generateLifecycle(componentData: ComponentData): {
    fullMethods: string
    ngOnInitContent: string
  } {
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

    const isMenuButton = componentData.tagName === 'gds-menu-button'

    const fullMethods = `
  ngOnInit(): void {
${lifecycleContent}
  }${
    hasInputs
      ? `

  ngOnChanges(changes: SimpleChanges): void {
    // Implementation added by @ProxyInputs decorator
${componentData.isLinkComponent ? `    if (changes['routerLink']) {\n      this.updateHref();\n    }` : ''}
  }

  ngAfterViewInit(): void {
    // Implementation added by @ProxyInputs decorator
${componentData.isLinkComponent ? `    this.updateHref();${isMenuButton ? `\n    this.setActive();\n    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive());` : ''}` : ''}
  }`
      : componentData.isLinkComponent
      ? `

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routerLink']) {
      this.updateHref();
    }
  }

  ngAfterViewInit(): void {
    this.updateHref();${isMenuButton ? `\n    this.setActive();\n    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive());` : ''}
  }`
      : ''
  }`

    return {
      fullMethods,
      ngOnInitContent: lifecycleContent,
    }
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
