# ControlValueAccessor Implementation for Green Core Form Controls

This document describes how Angular form integration is automatically added to generated wrapper components for Green Core form controls.

## Overview

Form control wrappers (components that extend `GdsFormControlElement` in Green Core) now automatically implement `ControlValueAccessor`, allowing them to work seamlessly with Angular's reactive forms and template-driven forms without requiring additional directives or configuration.

## Detection

The generator detects form controls by checking if any member properties in the Custom Elements Manifest are inherited from `GdsFormControlElement`:

```typescript
private static isFormControl(declaration: CustomElementDeclaration): boolean {
  if (!declaration.members) return false

  return declaration.members.some(
    (member: any) =>
      member.inheritedFrom?.name === 'GdsFormControlElement' &&
      member.inheritedFrom?.module === 'src/components/form/form-control.ts',
  )
}
```

This approach works reliably even when components have intermediate inheritance steps (e.g., mixins).

## Implementation Architecture

### Base Class: `GdsFormControlBase`

All form control wrappers extend `GdsFormControlBase<T>` which:
- Implements `ControlValueAccessor`
- Handles `writeValue`, `registerOnChange`, `registerOnTouched`, and `setDisabledState`
- Automatically syncs validation state from Angular forms to the web component's `invalid` property
- Sets up event listeners for `input`, `change`, and `blur` events
- Manages `NgControl` integration for status change tracking

```typescript
export abstract class GdsFormControlBase<T = any>
  implements ControlValueAccessor, OnInit, AfterViewInit {
  // Handles all ControlValueAccessor methods
  // Automatically updates validation state
  // Sets up event listeners
}
```

### Provider Registration

Form control wrappers automatically include the `NG_VALUE_ACCESSOR` provider:

```typescript
@Component({
  selector: 'gds-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GdsInputComponent),
      multi: true,
    },
  ],
  // ...
})
export class GdsInputComponent extends GdsFormControlBase {
  // ...
}
```

## Usage

With this implementation, form controls work out of the box with Angular forms:

### Reactive Forms

```typescript
// Component
form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
})

// Template
<form [formGroup]="form">
  <gds-input
    formControlName="email"
    label="Email"
    [errorMessage]="form.get('email')?.errors ? 'Invalid email' : ''">
  </gds-input>
</form>
```

### Template-Driven Forms

```typescript
// Template
<form #f="ngForm">
  <gds-input
    name="email"
    [(ngModel)]="email"
    label="Email"
    required>
  </gds-input>
</form>
```

## Features

1. **Two-way binding**: The wrapper listens for `input` events from the web component and calls the registered change callback
2. **Touch tracking**: Calls registered touch callback on `blur` and `change` events
3. **Disabled state sync**: `setDisabledState` updates the web component's `disabled` property
4. **Validation sync**: Automatically updates the web component's `invalid` property based on Angular form state
5. **Form submit handling**: Marks controls as touched on form submission

## Components Affected

Form controls that will automatically get ControlValueAccessor:
- `gds-input`
- `gds-textarea`
- `gds-dropdown`
- `gds-select`
- `gds-datepicker`
- `gds-radio-group`
- `gds-checkbox-group`
- Any other component that extends `GdsFormControlElement`

## Migration from NggCoreControlDirective

The existing `NggCoreControlDirective` from `@sebgroup/green-angular` can still be used with `CUSTOM_ELEMENTS_SCHEMA`, but is no longer necessary for components using the generated wrappers.

### Before (with CUSTOM_ELEMENTS_SCHEMA)
```html
<gds-input
  formControlName="email"
  label="Email">
</gds-input>
```
Required: `NggCoreControlDirective` or `ngDefaultControl`

### After (with generated wrappers)
```html
<gds-input
  formControlName="email"
  label="Email">
</gds-input>
```
No additional directives needed!

## Testing

ControlValueAccessor specific tests are autmatically generated for form control wrappers.
