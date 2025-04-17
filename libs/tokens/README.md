# Green Tokens

Design tokens for **Green Design System (GDS)**. The design system at Skandinaviska Enskilda Banken (SEB).

## How it works

All of the design tokens and assets are in this project. We then use Style Dictionary to transform the tokens into files and format for specific platforms that Green Design System caters for. Adding tokens needs to go throught the GDS Core Team since the tokens have a specific hirarchy to cater to SEB's design.

## Design Tokens

Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code. Design tokens are small, reusable design decisions that make up a design system's visual style. Tokens replace static values with self-explanatory names.

Using design tokens instead of hardcoded values can streamline the work of building, maintaining, and scaling products with a design system

A design token consists of 2 things:

1. A code like name, such as: `gds.sys.color.l3.background.primary`
2. An associated value, such as: `#1b1b1b`

The token's value can be one of several things: A color, typeface, measurement, or even another token.

For example, if a designer's mock-ups and an engineer's implementation both reference the same token for the “secondary container color,” then they can be confident that the same color is being used in both places. This applies even if the hex value assigned to that token gets updated.

### Parts of a token name

The parts of a token name are separated by periods and proceed from the most general information `gds` to the most specific `primary`.

An example of a token name is: `gds.sys.color.l3.background.primary`

1. `gds` is the design system prefix referring to `Green Design System` all tokens names start with this.
2. `sys` is an abbreviation for the token class: “ref” for reference tokens, “sys” for system tokens.
3. `color` is the type of the token. Can be: color, dimension, font-family and more. See [section 8 in the Design Tokens Format Module](https://tr.designtokens.org/format/#types) for more types.
4. `l3.background.primary` the remaing parts are descriptive words communicating the tokens role. In this care we use a [level system](https://storybook.seb.io/latest/core/?path=/docs/style-colors--docs) to create a color structure.

### Style Dictionary

Tokens are transformed with [Style Dictionary](https://amzn.github.io/style-dictionary/) so they can be used in all platforms that Green Design System caters for.

To get started, run

```
$ yarn install
$ nx run tokens:build
```

The yarn build task is what performs the style dictionary build steps to generate the files for each platform. Every time you change something in the style dictionary, like changing colors or adding design tokens, you will have to run this command again to generate the files.

## Support

If you need help with tokens or anything regarding the _Green Design System_ reach out in SEB's internal Teams channel called _Green Design System_ or send an email to [vilhelm.sjolander@seb.se](mailto:vilhelm.sjolander@seb.se)
