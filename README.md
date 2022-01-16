# ![image](https://user-images.githubusercontent.com/11420341/121186039-f6eeda00-c866-11eb-9d80-21d01d065f0a.png) green

Green is an opinionated design system for building content and functionality for SEB. It builds on a set of principles and techniques aimed at maximizing code quality, code reuse, consistency and collaboration.

## View

View the components in our [Storybook](https://sebgroup.github.io/green/latest/chlorophyll/)

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

## The design process

Green is tightly integrated with the design process. The design responsibles are part of the team so that decisions can be made effectively and by those most suited.

For the most part we follow the existing design. When changes have to be made for practical reasons, clarity, uniformity, accessibility or any other reason, the design responsibles make the call and the change is integrated.

This can, and will, lead to minor inconsistencies in different parts of our offering, especially as Green is not yet (even close to) at 100% adoption. This is fine. Far larger inconsistencies already exist in our current, digital ecosystem. We therefore prioritise the ability to keep moving forward and improve our customers' experience over delaying for the sake of consistency.

In the long run, consistency will be achieved by automating the roll-out of changes, be they visual, functional or qualitative, to keep all parts of our offering on the latest version. When we go Green, we stay green.

## Develop

### Yarn

This mono repo is based on `nx` and uses `yarn` instead of `npm`. If you are unused to yarn, see the following instructions:

#### Install yarn

```bash
npm install -g yarn
```

#### Install dependencies

```bash
yarn
```

#### Add a dependency to a workspace

All projects use a common set of dependencies so if you want to add `leftpad` to the chlorophyll project, just run:

```bash
yarn add leftpad
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


### On SEB Windows computer

Yarn support for our artifactory will be supported later on, but for now you need to logoff the VPN (right click the lock symbol in the tray).

You start the 3 storybocks with thesse commands:

```bash
npx nx run chlorofyll:storybook
npx nx run react:storybook
npx nx run angular:storybook
```

Or if you install nx globally you can omit the npx above.

```bash
npm install -g nx
```

Also if push fails, uncomment proxy settings in `C:\Users\%Username%\.npmrc`.