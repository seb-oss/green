# `@sebgroup/extract`

Extract is considered deprecated in favor of implementing shared functionality as Web Components. See https://github.com/seb-oss/green/tree/main/libs/core

---

Extract is where all the business logic of Green components lives so that it
can be shared between Angular and React implementations. It is called Extract
since the normal way of creating a component is within Angular and React and
then extracting the common logic.

## Patterns for common components

### The look

Step one is always creating CSS and HTML for your component in Chlorophyll.
We use Storybook to visualize the component in various states so that we can
track progress and continuously check that it adheres to design guidelines.
Read more in https://github.com/seb-oss/green/libs/chlorophyll

### Interaction and data

A common component consists of two parts: An interaction object and the data.
Let's look at these through an example.

```typescript
type Operator = '+' | '-' | '*' | '/' | '='
type Digit = number | '.'
type Press = Operator | Digit

export interface Calculator {
  pressDigit: (digit: Digit) => void
  pressOperator: (operator: Operator) => void
  clear: () => void
}

export interface CalculatorData {
  currentValue: number
  numpad: Digit[][]
  operators: string[]
  presses: Press[]
}
```

These are the components we will be interacting with. The `Calculator` instance
will be persistent and allows us to interact while the `CalculatorData` is
changed on every interaction and allows us to render our component.

Now, lets create out Calculator.

```typescript
export interface CalculatorOptions {
  containerEl: HTMLElement
}

export const createCalculator = (listener: (data: CalculatorData) => void, options: CalculatorOptions): Calculator => {
  // Create initial data
  let data: CalculatorData = {
    currentValue: 0,
    numpad: [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, '.'],
    ],
    operators: ['/', '*', '-', '+', '='],
  }

  // Create interaction object
  const calculator: Calculator = {
    clear: () => {
      data = clear(data) // pure function
      listener(data)
    },
    pressDigit: (digit) => {
      data = pressDigit(data, digit) // reducer
      listener(data)
    },
    pressOperator: (operator) => {
      data = pressOperator(data, operator) // reducer
      listener(data)
    },
  }

  // Add keyboard interactions to element
  // options.containerEl

  // Call listener with initial data
  listener(data)
}
```

All interactions with the calculator is done through pure functions with no
side effects using a reducer pattern (basically a data structure goes in and
a new, changed data structure comes out). These are easily testable. The
resulting updated data model is communicated to the framework of choice which
can then re-render making it easily bindable.
