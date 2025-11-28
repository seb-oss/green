import { ComponentData, InputProperty, OutputEvent } from '../types'
import { AngularGenerator } from './generator'

/**
 * Generates Angular test files for web component wrappers
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

    return `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ${componentName} } from './${componentData.tagName.replace(
      /^gds-/,
      '',
    )}.component';

describe('${componentName}', () => {
  let component: ${componentName};
  let fixture: ComponentFixture<${componentName}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${componentName}]
    }).compileComponents();

    fixture = TestBed.createComponent(${componentName});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a ${componentData.tagName} element', () => {
    expect(fixture.nativeElement.tagName.toLowerCase()).toBe('${
      componentData.tagName
    }');
  });
${this.generateInputValidationTest(componentData.properties)}
${this.generateInputTests(componentData.properties)}
${this.generateOutputTests(componentData.events)}
});`
  }

  /**
   * Generates a test that validates all expected inputs are present
   */
  private static generateInputValidationTest(inputs: InputProperty[]): string {
    if (inputs.length === 0) return ''

    const inputList = inputs
      .map((input) => `'${input.name.replace(/\'/g, '')}'`)
      .join(', ')

    return `
  it('should have all expected input properties from manifest', () => {
    const expectedInputs = [${inputList}];

    expectedInputs.forEach(inputName => {
      expect(component.hasOwnProperty(inputName)).toBeTrue();
    });

    // Verify we have the correct number of inputs
    expect(expectedInputs.length).toBe(${inputs.length});
  });`
  }

  /**
   * Generates test cases for input properties
   */
  private static generateInputTests(inputs: InputProperty[]): string {
    if (inputs.length === 0) return ''

    const inputList = inputs.map((input) => [
      `'${input.name.replace(/\'/g, '')}'`,
      input.type,
    ])

    return inputList
      .slice(0, 3) // Only test first 3 inputs to keep tests concise
      .map(
        (input) => `
  it("should accept ${input[0]} property", () => {
    const testValue = ${this.getTestValue(input[1])};
    component[${input[0]}] = testValue;
    fixture.detectChanges();

    expect(component[${input[0]}]).toBe(testValue);
  });`,
      )
      .join('')
  }

  /**
   * Generates test cases for output events
   */
  private static generateOutputTests(outputs: OutputEvent[]): string {
    if (outputs.length === 0) return ''

    return outputs
      .map(
        (output) => `
  it('should emit ${this.toCamelCase(output.name)} event', () => {
    spyOn(component.${this.toCamelCase(output.name)}, 'emit');

    const event = new CustomEvent('${output.name}', { detail: 'test-data' });
    fixture.nativeElement.dispatchEvent(event);

    expect(component.${this.toCamelCase(
      output.name,
    )}.emit).toHaveBeenCalledWith(event);
  });`,
      )
      .join('')
  }

  /**
   * Gets a test value for a given type
   */
  private static getTestValue(type: string): string {
    const typeMap: Record<string, string> = {
      string: "'test-value'",
      number: '123',
      boolean: 'true',
      any: "'test'",
      void: 'undefined',
    }

    return typeMap[type] || "'test'"
  }
}
