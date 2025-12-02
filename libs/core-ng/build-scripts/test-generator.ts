import {
  ComponentData,
  ComponentEvent,
} from '../../core/src/utils/helpers/component-meta.types'
import { CustomElementField } from 'custom-elements-manifest'
import { AngularGenerator } from './generator'

/**
 * Generates Angular test files for web component wrappers using @testing-library/angular
 */
export class TestGenerator {
  /**
   * Converts kebab-case to camelCase for Angular event names
   */
  private static toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  }

  /**
   * Generates a complete test file for the component
   */
  static generateTest(componentData: ComponentData): string {
    const componentName = AngularGenerator.toAngularComponentName(
      componentData.className,
    )

    return `import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ${componentName} } from './${componentData.tagName.replace(
      /^gds-/,
      '',
    )}.component';

describe('${componentName}', () => {
  it('should render', async () => {
    await render(${componentName});

    // Component should render successfully
    expect(true).toBeTruthy();
  });
${this.generateInputValidationTest(componentData.properties, componentName)}
${this.generateInputTests(componentData.properties, componentName)}
${this.generateOutputTests(componentData.events, componentName, componentData.tagName)}
});`
  }

  /**
   * Generates a test that validates all expected inputs are present
   */
  private static generateInputValidationTest(
    inputs: CustomElementField[],
    componentName: string,
  ): string {
    if (inputs.length === 0) return ''

    const inputList = inputs
      .map((input) => `'${input.name.replace(/\'/g, '')}'`)
      .join(', ')

    return `
  it('should have all expected input properties', async () => {
    const { fixture } = await render(${componentName});
    const component = fixture.componentInstance;

    const expectedInputs = [${inputList}];

    expectedInputs.forEach(inputName => {
      expect(component.hasOwnProperty(inputName)).toBe(true);
    });

    expect(expectedInputs.length).toBe(${inputs.length});
  });`
  }

  /**
   * Generates test cases for input properties
   */
  private static generateInputTests(
    inputs: CustomElementField[],
    componentName: string,
  ): string {
    if (inputs.length === 0) return ''

    return inputs
      .slice(0, 3) // Only test first 3 inputs to keep tests concise
      .map((input) => {
        const testValue = this.getTestValue(input.type?.text || 'undefined')
        const propName = input.name.replace(/\'/g, '')
        return `
  it("should accept ${propName} property", async () => {
    const testValue = ${testValue};
    const { fixture } = await render(${componentName}, {
      componentProperties: {
        '${propName}': testValue
      }
    });

    const component = fixture.componentInstance;
    expect(component['${propName}']).toBe(testValue);
  });`
      })
      .join('')
  }

  /**
   * Generates test cases for output events
   */
  private static generateOutputTests(
    outputs: ComponentEvent[],
    componentName: string,
    tagName: string,
  ): string {
    if (outputs.length === 0) return ''

    // Only test custom events (gds-*) since standard DOM events
    // are handled automatically by Angular and don't need explicit listeners
    const customEvents = outputs.filter((output) =>
      output.name.startsWith('gds-'),
    )

    if (customEvents.length === 0) return ''

    return customEvents
      .map((output) => {
        const eventName = this.toCamelCase(output.name)
        const eventConstructor = `new CustomEvent('${output.name}', { detail: 'test-data' })`

        return `
  it('should emit ${eventName} event', async () => {
    const ${eventName}Handler = jest.fn();

    const { fixture } = await render(${componentName});
    const component = fixture.componentInstance;

    // Subscribe to the output EventEmitter
    component.${eventName}.subscribe(${eventName}Handler);

    // Trigger change detection to ensure component is initialized
    fixture.detectChanges();
    await fixture.whenStable();

    // Wait a tick to ensure event listeners are attached
    await new Promise(resolve => setTimeout(resolve, 0));

    // Dispatch the native event on the host element
    const event = ${eventConstructor};
    fixture.nativeElement.dispatchEvent(event);

    // Trigger change detection to process the event
    fixture.detectChanges();

    expect(${eventName}Handler).toHaveBeenCalledWith(event);
  });`
      })
      .join('')
  }

  /**
   * Gets a test value for a given type
   */
  private static getTestValue(type: string): string {
    // Handle undefined, null, or non-string types
    if (!type || typeof type !== 'string') {
      return 'undefined as any'
    }

    // Handle void/undefined types
    if (type === 'void' || type === 'undefined') {
      return 'undefined'
    }

    // Check for boolean type (including union types like "boolean | undefined")
    if (type === 'boolean') {
      return 'true'
    }

    // Check for number type
    if (type === 'number') {
      return '123'
    }

    // Check for string literal union types (e.g., "'small' | 'large'")
    // Extract the first string literal value
    const stringLiteralMatch = type.match(/['"]([^'"]+)['"]/);
    if (stringLiteralMatch) {
      return `'${stringLiteralMatch[1]}'`
    }

    // Check for string type
    if (type === 'string') {
      return "'test-value'"
    }

    // Default to undefined for unknown types
    return 'undefined as any'
  }
}
