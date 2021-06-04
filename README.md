# ![image](https://user-images.githubusercontent.com/548783/120328881-92260380-c2eb-11eb-9f67-12a9a5830761.png) green

Green is an opinionated design system for building content and functionality for SEB. It builds on a set of principles and techniques aimed at maximizing code quality, code reuse, consistency and collaboration.

## Install

## Use

## Develop

### Yarn

This mono repo is based on `lerna` and `yarn workspaces`. If you are unused to yarn, see the following instructions:

#### Install yarn

```bash
npm install -g yarn
```

#### Install dependencies

```bash
yarn
```

#### Add a dependency to a workspace

If you want to add `leftpad` to the chlorophyll project:

```bash
yarn workspace @sebgroup/chlorophyll add leftpad
```

#### Run a command in `package.json`

Unlike `npm`, `yarn` doesn't require the `run` command. So if you want to run `lint` in your package or in the project root, simply type:

```bash
yarn lint
```

### Semantic everything

All projects in Green use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to power [semantic releases](https://semantic-release.gitbook.io/semantic-release/). In order to simplify using this format, install:

```bash
npm install -g git-cz
```

To commit, just run `git-cz` in the terminal 😄

## Principles

## Techniques
