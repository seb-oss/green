# Green V-Angular

Green V-Angular is a Green version of the Angular component library Angular Vanilla Components (V-Angular). V-Angular Components are Angular-ified components for Vanilla Pattern Library styling. But now that they are migrated to Green they use Chlorophyll styling through SCSS mixins.

---

## ⚠️ Disclaimer: Peer dependancy [@jsverse/transloco](https://github.com/jsverse/transloco) needed

Green V-Angular components require transloco as dependency in order to work properly. Transloco is not a dependancy to the rest of the Green Angular components and therefor added as peer dependancy to @sebgroup/green-angular.

---

## Installation

To use V-Angular components simply install [@sebgroup/green-angular](https://www.npmjs.com/package/@sebgroup/green-angular) and [@jsverse/transloco](https://www.npmjs.com/package/@jsverse/transloco)

```bash
npm install @sebgroup/green-angular @jsverse/transloco
```

## Build

Run `nx run angular:build`to build Green Angular (V-Angular is a subset of Green Angular)

## Storybook

To see the V-Angular components in Storybook you need to:

1. Rename story file extension from `component.stories.ts_` to `component.stories.ts`
2. Start the Angular storybook with `nx run angular:storybook`
