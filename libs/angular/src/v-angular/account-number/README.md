# AccountNumberPipe

## About

Used to format IBAN and BBAN account numbers with spaces.

### BBAN

- The formatting starts when accountNumber.length > 8, according to this format: XXXX XX XXX <XXXX>
- If the length of the string is less than 9, no formatting is done.
- Groups 4 chars - space - 2 chars - space - 3 chars - space - rest of the chars without space

```
Examples:
XXXX XX XXX
XXXX XX XXX X
XXXX XX XXX XX
XXXX XX XXX XXX
XXXX XX XXX XXXX
XXXX XX XXX XXXXX...X
```

### IBAN

- Adds a whitespace after every fourth character without and minimum or maximum length

```
Examples:
XXXX XXXX
XXXX XXXX X
XXXX XXXX XX
XXXX XXXX XXX
XXXX XXXX XXXX
XXXX XXXX XXXX X
XXXX XXXX XXXX XX
XXXX XXXX XXXX XXX
XXXX XXXX XXXX XXXX
XXXX XXXX XXXX XXXX ...
```

## Import

- Add seb-payment-front to the .npmrc: `@sebgroup:registry=https://repo7.sebank.se/artifactory/api/npm/seb-payment-front-npm-virtual/`
- Install @sebgroup/ngv-core: `npm i @sebgroup/ngv-core`

## Usage

- In your module, declare the pipe

```ts
import { AccountNumberPipe } from '@sebgroup/ngv-core';
// accounts.module.ts
@NgModule({
    providers: [...],
    imports: [...],
    declarations: [
        AccountNumberPipe
    ]
})
```

- The pipe accepts one optional formatting argument; `schema?: AccountNumberSchema`
- `type AccountNumberSchema = "iban" | "bban"`
- In your HTML, use the pipe

```HTML
<!-- accounts.component.html -->
<span>{{ account.iban | accountNumber: 'iban' }}</span> <!-- Format according to 'iban' -->
<span>{{ account.bban | accountNumber: 'bban' }}</span> <!-- Format according to 'bban' -->
```
