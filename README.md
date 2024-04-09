<h1 align="center">
    <a href="https://seb.io">
        <img src="https://github.com/sebgroup/green/assets/11420341/2fc122ba-54fc-4f22-b96d-d405079d6e50">
    </a>
    <br/>
    <br/>
    Green Design System
</h1>

<p align="center">Green is an open-source design system built by SEB.<p>
<p align="center"><a href="https://github.com/sebgroup/green/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache2.0-005FAC"/></a> <a href="https://semver.org/"><img src="https://img.shields.io/badge/semantic%20versioning-006D31"/></a> <a href="https://nx.dev/"><img src="https://img.shields.io/badge/maintained%20with-nx-006D31"/></a> <a href="https://github.com/sebgroup/green/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-006D31"/></a></p>

## Getting started

If you are new to Green, checkout [@sebgroup/green-core](https://github.com/sebgroup/green/tree/main/libs/core).

We also provide components for the following technologies:

- [React](https://github.com/sebgroup/green/tree/main/libs/react)
- [Angular](https://github.com/sebgroup/green/tree/main/libs/angular)

If you're trying to find something specific, here's a full list of packages that we support!

| Package name                                                                                      | Description                                                             |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [@sebgroup/green-core](https://github.com/sebgroup/green/tree/main/libs/core)                     | Webcomponent library built with [Lit](https://lit.dev)                  |
| [@sebgroup/green-react](https://github.com/sebgroup/green/tree/main/libs/react)                   | React component library                                                 |
| [@sebgroup/green-angular](https://github.com/sebgroup/green/tree/main/libs/angular)               | Angular component library                                               |
| [@sebgroup/chlorophyll](https://github.com/sebgroup/green/tree/main/libs/chlorophyll)             | Styling framework                                                       |
| [@sebgroup/green-tokens](https://github.com/sebgroup/green/tree/main/libs/tokens)                 | Design Tokens package                                                   |
| [@sebgroup/green-charts](https://github.com/sebgroup/green/tree/main/libs/charts)                 | An SEB wrapper of [Billboard.js](https://naver.github.io/billboard.js/) |
| [@sebgroup/green-react-charts](https://github.com/sebgroup/green/tree/main/libs/react-charts)     | A React version of the charts wrapper                                   |
| [@sebgroup/green-angular-charts](https://github.com/sebgroup/green/tree/main/libs/angular-charts) | An Angular version of the charts wrapper                                |

## 📋 Table of content

- [Documentation](https://github.com/sebgroup/green/tree/main?tab=readme-ov-file#documentation)
- [Working from SEB](https://github.com/sebgroup/green/tree/main?tab=readme-ov-file#working-from-seb)
- [Contribute](https://github.com/sebgroup/green/tree/main?tab=readme-ov-file#contribute)
- [Working locally with this repo](https://github.com/sebgroup/green/tree/main?tab=readme-ov-file#working-locally-with-this-repo)

## 📚 Documentation

Documentation currently resides in a few different locations:

- [User Interface Guidelines (Design Library)](https://designlibrary.sebgroup.com/)
- [Storybook (@sebgroup/chlorophyll)](https://sebgroup.github.io/green/latest/chlorophyll/)
- [Storybook (@sebgroup/green-core)](https://sebgroup.github.io/green/latest/core/)
- [Storybook (@sebgroup/green-react)](https://sebgroup.github.io/green/latest/react/)
- [Storybook (@sebgroup/green-angular)](https://sebgroup.github.io/green/latest/angular/)

## 🏦 Working from SEB

Working from SEB and on SEB machines you need to setup things in a specific way for everything to work smooth. Checkout our [Developer Guidelines](https://github.sebank.se/pages/seb-common/Developer-garden/detail_pages/green.html) over at Developer Garden.

## 🎉 Contribute

We're always looking for contributors to help us fix bugs, build new features, or help us improve the project documentation. If you're interested, definitely check out our [Contributing Guide](https://github.com/sebgroup/green/blob/main/CONTRIBUTING.md)! 👀

## 🔨 Working locally with this repo

### Start Storybook locally

To start Storybooks locally on your machine you run the following command:

```bash
npx nx run [PROJECT]:storybook
```

Where you replace `[PROJECT]` with a folder name from `green\libs`.

So to start Storybook for each component library run:

```bash
npx nx run chlorophyll:storybook
npx nx run react:storybook
npx nx run angular:storybook
```

If you install nx globally you can omit the npx above.

```bash
# Install nx globally
npm install nx -g

# And start the storybooks
nx run chlorophyll:storybook
nx run react:storybook
nx run angular:storybook
```
