<div align-items="center">
<img width="600" alt="green-react" src="https://github.com/seb-oss/green/assets/11420341/ad4c9fe3-137f-4230-9ea7-a4de87752aa9">
<h1>@sebgroup/green-react</h1>
<p>
React components with SEB's look and feel.
</p>
</div>

## Install

```bash
npm install --save @sebgroup/green-react
```

```bash
yarn add @sebgroup/green-react
```

## Use

```tsx
import { Button } from '@sebgroup/green-react'

// Use in your JSX

;<Button>A Green React Button!</Button>
```

### Components

View all components in the [React Storybook](https://storybook.seb.io/latest/react/)

## Develop \*

1. Clone the monorepo

```bash
git clone git@github.com:sebgroup/green.git
```

2. Install the dependencies

```bash
cd green
yarn
```

3. Start the Storybook

```bash
npx nx run react:storybook
```

4. Start the test runner (or make sure your IDE runs the tests continuously)

```bash
yarn test react --watch
```

5. Pick an issue from the board and pull it into `In progress`
6. Open a Draft PR and reference the Issue
7. Start coding 🎉 Don't forget:
   1. Test
   2. Code
   3. Refactor
