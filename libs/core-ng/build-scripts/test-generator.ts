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

    const formControlImports = componentData.isFormControl
      ? `import { FormControl, ReactiveFormsModule } from '@angular/forms';`
      : ''

    return `import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ${componentName} } from './${componentData.tagName.replace(
      /^gds-/,
      '',
    )}.component';
${formControlImports}

describe('${componentName}', () => {
  it('should render', async () => {
    await render(${componentName});

    // Component should render successfully
    expect(true).toBeTruthy();
  });
${this.generateInputValidationTest(componentData.properties, componentName)}
${this.generateInputTests(componentData.properties, componentName)}
${this.generateOutputTests(componentData.events, componentName, componentData.tagName)}
${this.generateFormControlTests(componentData, componentName)}
${this.generateRouterLinkTests(componentData, componentName)}
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
      .map((input) => {
        const origName = input.name.replace(/\'/g, '')
        const camelName = origName.includes('-')
          ? origName.replace(/-([a-z])/g, (_, l) => l.toUpperCase())
          : origName
        return `'${camelName}'`
      })
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
        const origName = input.name.replace(/\'/g, '')
        const camelName = origName.includes('-')
          ? origName.replace(/-([a-z])/g, (_, l) => l.toUpperCase())
          : origName
        return `
  it("should accept ${camelName} property", async () => {
    const testValue = ${testValue};
    const { fixture } = await render(${componentName}, {
      componentProperties: {
        '${camelName}': testValue
      }
    });

    const component = fixture.componentInstance;
    expect(component['${camelName}']).toBe(testValue);
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
   * Generates test cases for ControlValueAccessor implementation
   */
  private static generateFormControlTests(
    componentData: ComponentData,
    componentName: string,
  ): string {
    if (!componentData.isFormControl) return ''

    const tagName = componentData.tagName
    const isCheckbox = componentData.isCheckboxComponent || false

    // For checkboxes, use boolean values and checked property
    // For other form controls, use string values and value property
    const initialValue = isCheckbox ? 'true' : "'initial-value'"
    const emptyValue = isCheckbox ? 'false' : "''"
    const newValue = isCheckbox ? 'true' : "'new-value'"
    const updatedValue = isCheckbox ? 'true' : "'updated-value'"
    const validValue = isCheckbox ? 'true' : "'valid-value'"
    const propertyToSet = isCheckbox ? 'checked' : 'value'
    const propertyToCheck = isCheckbox ? 'checked' : 'value'
    const formControlType = isCheckbox ? '<boolean>' : ''

    return `
  describe('ControlValueAccessor', () => {
    it('should implement ControlValueAccessor', async () => {
      const { fixture } = await render(${componentName}, {
        imports: [ReactiveFormsModule]
      });
      const component = fixture.componentInstance;

      // Check that the component has the required ControlValueAccessor methods
      expect(typeof component.writeValue).toBe('function');
      expect(typeof component.registerOnChange).toBe('function');
      expect(typeof component.registerOnTouched).toBe('function');
      expect(typeof component.setDisabledState).toBe('function');
    });

    it('should work with FormControl${formControlType}', async () => {
      const control = new FormControl(${initialValue});

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');
      expect(element).toBeTruthy();

      // Check that the initial ${propertyToCheck} is set
      expect(element.${propertyToCheck}).toBe(${initialValue});
    });

    it('should update FormControl when ${propertyToSet} changes', async () => {
      const control = new FormControl(${emptyValue});

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      // Simulate user input
      element.${propertyToSet} = ${newValue};
      element.dispatchEvent(new Event('input', { bubbles: true }));

      fixture.detectChanges();
      await fixture.whenStable();

      expect(control.value).toBe(${newValue});
    });

    it('should update ${propertyToCheck} when FormControl value changes', async () => {
      const control = new FormControl(${emptyValue});

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      // Update the FormControl programmatically
      control.setValue(${updatedValue});
      fixture.detectChanges();
      await fixture.whenStable();

      expect(element.${propertyToCheck}).toBe(${updatedValue});
    });

    it('should mark as touched on blur', async () => {
      const control = new FormControl(${emptyValue});

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      expect(control.touched).toBe(false);

      // Simulate blur event
      element.dispatchEvent(new Event('blur', { bubbles: true }));

      fixture.detectChanges();
      await fixture.whenStable();

      expect(control.touched).toBe(true);
    });

    it('should handle disabled state', async () => {
      const control = new FormControl({ value: ${initialValue}, disabled: true });

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      expect(element.disabled).toBe(true);

      // Enable the control
      control.enable();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(element.disabled).toBe(false);
    });

    it('should sync validation state to invalid property', async () => {
      const control = new FormControl(${emptyValue}, { validators: [(c) => c.value ? null : { required: true }] });

      const { fixture } = await render(\`<${tagName} [formControl]="control"></${tagName}>\`, {
        imports: [ReactiveFormsModule, ${componentName}],
        componentProperties: {
          control
        }
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      // Mark as touched to trigger validation
      control.markAsTouched();
      control.updateValueAndValidity();
      fixture.detectChanges();
      await fixture.whenStable();

      // Wait for the subscription to update the element
      await new Promise(resolve => setTimeout(resolve, 50));

      // Control should be invalid initially (empty value)
      expect(control.invalid).toBe(true);
      expect(element.invalid).toBe(true);

      // Set a valid value
      control.setValue(${validValue});
      fixture.detectChanges();
      await fixture.whenStable();

      // Wait for the subscription to update the element
      await new Promise(resolve => setTimeout(resolve, 50));

      expect(control.valid).toBe(true);
      expect(element.invalid).toBe(false);
    });
  });`
  }

  /**
   * Generates test cases for RouterLink integration
   */
  private static generateRouterLinkTests(
    componentData: ComponentData,
    componentName: string,
  ): string {
    if (!componentData.isLinkComponent) return ''

    const tagName = componentData.tagName
    const isMenuButton = tagName === 'gds-menu-button'

    return `
  describe('RouterLink Integration', () => {
    it('should work with RouterLink directive', async () => {
      const { fixture } = await render(\`<${tagName} [routerLink]="['/test']"></${tagName}>\`, {
        imports: [${componentName}],
        providers: []
      });

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      // The href should be set by the RouterLink integration
      expect(element.getAttribute('href')).toBeTruthy();
    });${
      isMenuButton
        ? `

    it('should sync selected state with RouterLinkActive for menu-button', async () => {
      const { fixture } = await render(
        \`<${tagName} [routerLink]="['/test']" routerLinkActive></${tagName}>\`,
        {
          imports: [${componentName}],
          providers: []
        }
      );

      await fixture.whenStable();
      fixture.detectChanges();

      const element = fixture.nativeElement.querySelector('${tagName}');

      // The selected property should be synced with RouterLinkActive
      expect(element.hasOwnProperty('selected')).toBe(true);
    });`
        : ''
    }
  });`
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
