# Typeahead

## Description

A directive that can be used on `nggv-dropdown` and `nggv-input` to be able to filter among options.
The provided operator function filters options among options and return a list of options that fulfils the critera.

## Inputs

- `@Input() nggvTypeahead: OperatorFunction<string, T[]> | undefined)`: The operator function that filters options based on user input
- `@Input() resultFormatter?: (option: OptionBase<Option<K, V>>) => string`: Formats each item that is displayed as an option.
- `@Input() selectedFormatter?: (selected: OptionBase<Option<K, V>>) => string`: Formats the selected item in the input when dropdown is opened. If no function is provided, it will display the value of the selected objects label property
- `@Input() hostComponent!: InputComponent | DropdownComponent`: A reference to the hostcomponent.
- `@Input() allowUnselect = true`: Allows a required control to be unselected.
- `@Input() unselectLabel?: string`: Custom label for the unselect option

## Outputs

- `filterPhrase = new EventEmitter<string>(`: Emits the entered string the user has written in the input

## Usage

The directive should be imported, since it's standalone.

```ts
// consumer.modules.ts
import { ConsumerComponent } from './consumer.component';
import { TypeaheadDirective } from '@sebgroup/nggv-core';

@NgModule({
    ...,
    declarations: [ConsumerComponent],
    imports: [
        ...,
        TypeaheadDirective
    ],
    providers: [...],
    exports: [ConsumerComponent]
})
```

## Examples (based on dropdown.stories.ts and input.stories.ts)

```HTML
<!-- consumer.component.html -->
<nggv-dropdown
    #dropdownElement
    [nggvTypeahead]="typeaheadFunction"
    [selectedFormatter]="selectedFormatter"
    [resultFormatter]="resultFormatter"
    [allowUnselect]="allowUnselect"
    [unselectLabel]="unselectLabel"
    [hostComponent]="dropdownElement">
</nggv-dropdown>
<nggv-input
    #inputElement
    [nggvTypeahead]="typeaheadFunction"
    [selectedFormatter]="selectedFormatter"
    [resultFormatter]="resultFormatter"
    [allowUnselect]="allowUnselect"
    [unselectLabel]="unselectLabel"
    [hostComponent]="inputElement">
</nggv-input>

```

```ts
// consumer.component.ts
{
  interface Car {
    key: string
    make: string
    modelName: number
    price: string
  }

  this.typeaheadFunction = (value$: Observable<string>) =>
    value$.pipe(
      debounceTime(150),
      map((input) => accounts.filter((car: Car) => option.make?.toUpperCase().includes(input?.toUpperCase()) || option.modelName?.includes(input))),
    )

  this.selectedFormatter = (car: Car) => car?.modelName

  this.resultFormatter = (car: Car) => `${car?.modelName.toUpperCase()}, £${car?.price} `

  this.allowUnselect = true

  this.unselectLabel = 'Reset selection'
}
```

```ts
// consumer.modules.ts
import { ConsumerComponent } from './consumer.component';
import { TypeaheadDirective } from '@sebgroup/nggv-core';

@NgModule({
    ...,
    declarations: [ConsumerComponent],
    imports: [
        ...,
        TypeaheadDirective
    ],
    providers: [...],
    exports: [ConsumerComponent]
})
```
