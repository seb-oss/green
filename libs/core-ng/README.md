# @sebgroup/green-core-ng

Angular wrappers for [@sebgroup/green-core](https://github.com/seb-oss/green/tree/main/libs/core) web components.

[![npm version](https://img.shields.io/npm/v/@sebgroup/green-core-ng/latest.svg)](https://www.npmjs.com/package/@sebgroup/green-core-ng)
[![License](https://img.shields.io/badge/license-Apache2.0-005FAC)](https://github.com/seb-oss/green/blob/main/LICENSE)

## Overview

`@sebgroup/green-core-ng` provides type-safe Angular component wrappers for all Green Design System web components. These wrappers are automatically generated from the Custom Elements Manifest, ensuring they stay in sync with the underlying web components while providing a native Angular development experience.

The wrappers eliminates the need to use `CUSTOM_ELEMENTS_SCHEMA`.

### Versioning

`@sebgroup/green-core-ng` is versioned and released in tandem with `@sebgroup/green-core`, and includes `@sebgroup/green-core` as a dependency. Angular consumers should generally only need to specify `@sebgroup/green-core-ng` as a direct dependency in their package.json, and the correct version of the underlying `@sebgroup/green-core` should be automatically installed.

### Key Features

- **Fully type-safe** - Complete TypeScript definitions for all components, properties, and events  
- **Automatic property syncing** - Angular `@Input` properties automatically sync to web component properties  
- **Native Angular events** - Web component custom events are exposed as Angular `@Output` EventEmitters  
- **Form integration** - Form controls implement `ControlValueAccessor` and work seamlessly with Angular forms  
- **Router integration** - Link components work natively with Angular's `RouterLink` directive  
- **Standalone components** - All components are standalone, compatible with modern Angular  
- **OnPush change detection** - Optimized performance with `ChangeDetectionStrategy.OnPush`  
- **Auto-generated** - Components are generated from the web component manifest, ensuring consistency

## Installation

```bash
npm install @sebgroup/green-core-ng
```

## Quick Start

Import components directly in your standalone components or NgModules:

```typescript
import { Component } from '@angular/core';
import { GdsButtonComponent, GdsInputComponent } from '@sebgroup/green-core-ng';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GdsButtonComponent, GdsInputComponent],
  template: `
    <gds-input
      label="Email"
      type="email"
      [(ngModel)]="email">
    </gds-input>
    
    <gds-button (click)="submit()">
      Submit
    </gds-button>
  `
})
export class ExampleComponent {
  email = '';
  
  submit() {
    console.log('Email:', this.email);
  }
}
```

## How It Works

### Code Generation Pipeline

1. **Source**: Web components in `@sebgroup/green-core` are built with [Lit](https://lit.dev)
2. **Manifest**: The build process for Core generates a [Custom Elements Manifest](https://custom-elements-manifest.open-wc.org/) (CEM) describing all components. The information is then by the `component-meta` module i Core, and accessed by this libarary from there.
3. **Analysis**: The generator (`generate-wrappers.ts`) fetches the component-meta data to determine:
   - General component metadata (tag names, descriptions)
   - Properties (inputs with types)
   - Events (outputs with payload types)
   - Slots (content projection)
   - Methods (public API)
   - Special characteristics (form controls, linkable components)
4. **Generation**: For each component, TypeScript files are generated:
   - Angular component wrapper (`.component.ts`)
   - Unit test file (`.component.spec.ts`)
   - Barrel export (`index.ts`)
5. **Build**: The generated code is compiled and packaged using `ng-packagr`

### Runtime Behavior

**Property Synchronization** (`@ProxyInputs` decorator):
- Angular `@Input` properties are defined with the same names and types as web component properties
- The `@ProxyInputs` decorator intercepts `ngOnChanges` and `ngAfterViewInit` lifecycle hooks
- Property changes are synchronized to the underlying web component DOM element outside Angular's zone for optimal performance

**Event Handling**:
- Web component custom events are captured during `ngOnInit`
- Event listeners are set up for custom events in order to rename them from `gds-event-name` to `gdsEventName` (kebab case to camel case)
- When events fire, they're emitted through Angular `@Output` EventEmitters
- This allows standard Angular event binding syntax: `(gdsClose)="handler()"`

**Change Detection**:
- Components use `ChangeDetectionStrategy.OnPush` for performance
- The change detector is detached in the constructor for non-form-control components
- Form control components use the base class's change detection strategy

## Project Structure

```
libs/core-ng/
├── src/
│   ├── generated/              # Auto-generated component wrappers. This directory is gitignored
│   ├── form-control-base.ts    # Base class for form control components
│   ├── proxy-inputs.decorator.ts  # Decorator for property syncing
│   └── index.ts                # Main entry point
│
├── build-scripts/
│   ├── generate-wrappers.ts    # Orchestrates the generation process
│   ├── generator.ts            # Core generator logic. Component code generation templates are in here
│   └── test-generator.ts       # Test generator
│
├── documentation/              # Implementation docs
```

## Special Features

### Form Controls

Components that extend `GdsFormControlElement` in Green Core automatically implement `ControlValueAccessor`. This means they work out-of-the-box with:

- **Reactive Forms**: `formControl`, `formControlName`, `formGroup`
- **Template-driven Forms**: `ngModel`, `ngModelGroup`
- **Form validation**: Validation states sync to the web component's `invalid` property

[See full documentation](./documentation/ControlValueAccessors.md)

### Router Link Integration

Components with an `href` property (like `gds-link`, `gds-button`, `gds-menu-button`) automatically integrate with Angular's `RouterLink`. No additional directives needed - the integration is built in!

[See full documentation](./documentation/RouterLinks.md)

## Development Workflow

### Generating Wrappers

Wrappers are automatically regenerated during the build process, but you can trigger generation manually:

```bash
# Only generate component wrapper sources, withoput build or test
nx run core-ng:generate-wrappers

# Generates wrappers and runs the generated test suite
nx run core-ng:test

# Gnereates the wrappers and builds with @nx/angular:package
nx run core-ng:build
```

### Generated Files

⚠️ **Do not manually edit files in `src/generated/`** - they will be overwritten on the next generation.

Instead:
- Modify the generator logic in `build-scripts/`
- Update base classes (`form-control-base.ts`, `proxy-inputs.decorator.ts`)
- Adjust component detection logic in `libs/core/src/utils/helpers/component-meta.ts`

## Implementation Details

Essentially, the wrappers are dummy classes decorated with Angulars `@Component`, `@Input` and `@Output` decorators.

By using the web components element name as the selector for the decorated class, Angular is "tricked" into creating an instance of the web component at run-time.

```ts
@Component({
  selector: 'gds-button', // <-- Angular will create a <gds-button> element in DOM
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>` // <-- Wrapper itself contains no template or logic, other than <ng-content>
})
```

### Property Type Mapping

The generator extracts component structure info from the Custom Elements Manifest and maps it to Angular component properties:

```typescript
// In web component (Green Core):
@property()
variant: 'primary' | 'secondary' = 'primary'

// Generated Angular wrapper:
@Input()
variant?: GdsButton['variant']  // Type: 'primary' | 'secondary' | undefined
```

This approach ensures:
- Type safety: Angular's compiler knows the exact types
- Single source of truth: Types come from the web component definitions
- Automatic updates: If web components change, wrappers reflect those changes after regeneration

### Event Type Mapping

`@Output` decorators are added for all events, and any kebab-cased events (like `gds-close`) will be automatically mapped to a camelCased output (`gdsClose`) for better alignment with Angular conventions.

### Boolean Input Transformation

Boolean inputs automatically use Angular's `booleanAttribute` transform:

```typescript
@Input({ transform: booleanAttribute })
disabled?: GdsButton['disabled']
```

This allows both attribute and property binding:
```html
<!-- Both work -->
<gds-button disabled></gds-button>
<gds-button [disabled]="true"></gds-button>
```
