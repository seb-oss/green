# ![image](https://user-images.githubusercontent.com/11420341/121186039-f6eeda00-c866-11eb-9d80-21d01d065f0a.png) green

Green is an opinionated design system for building content and functionality for SEB. It builds on a set of principles and techniques aimed at maximizing code quality, code reuse, consistency and collaboration.

## View

View the components in our [Storybook](https://automatic-pancake-aa6626d9.pages.github.io/latest/chlorophyll)

## Install

// TODO

## Use

// TODO

## Philisophy

Dream big! Start small! Learn fast!

### We only build what we need

If no-one needs a component, we will not build it. If someone needs a component, we will build it. This means that some things in Design Library might not make it into Green. It all depends on what gets used.

### Ease of use, not ease of build

The components of Green will be used more times than one. This puts a multiplier on the value of every hour spent improving ease of use.

### Minimum possible flexibility, but _not_ less

Flexibility means decisions have to be made. This puts strain on every user of a system. Green goes the other way: Minimum flexibility, maximum clarity. If our user's cannot do what they need, we solve that specific problem in a generalized way - no more, no less. Remember: The most flexible system possible is you terminal.

### We don't solve problems we do not have

If something _might_ be a performance problem, that is ok. If something _might_ give a to large payload, that is ok. When we suspect a problem, we measure it. If it _is_ a problem, we fix it. See [premature optimization](https://xkcd.com/1691/)

### We work from right to left

If something can be deployed, we deploy. Then, if a PR needs a review, we review. Then, and only then, if something can be built, we build. Flow is more important than speed.

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
