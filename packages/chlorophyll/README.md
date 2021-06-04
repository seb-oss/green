# ![image](https://user-images.githubusercontent.com/548783/120328881-92260380-c2eb-11eb-9f67-12a9a5830761.png) @sebgroup/chlorophyll

Chlorophyll is the design token and css part of Green. It is used in all high level component libraries. If you are not useing a framework, you can use chlorophyll directly to style your `html`.

## Install

## Use

The Green design system has an unrelenting focus on sensible defaults and ease of use. All you have to do to start using it is import the css, mark the area in which you intend to start using Greem (use the `html` tag if the whole application uses it), and add the class `green`.

```html
<body class="green">
  <h1>Hello!</h1>
  <p>Everything you see here will be correctly styled :smile:</p>
</body>
```

All your basic styling will now be correct. Additional classes will only be needed when you want to deviate from the defaults. So this:

```html
<div class="green">
  <h2>This is a pretty form</h2>
  <form>
    <label for="pretty-first-name">First name</label>
    <input name="firstName" id="pretty-first-name" />
    <hr />
    <button type="submit">Send</button>
  </form>
</div>
```

...will look like this:

![form preview](https://user-images.githubusercontent.com/548783/120811253-11197700-c54c-11eb-9bfe-1091a810c4e0.png)

### Additional styling

Styling is made by expressing intent – not design. A button is not green, it is intended to express a succesful operation. So:

```html
<!-- This -->
<button class="success">Yay!</button>

<!-- Not this -->
<button class="light-green">Derp!</button>
```

To find all components, possible modifiers and information on when to use them, visit:

* Storybook for Angular
* Storybook for React
* Storybook for html/css (for when you definitely don't need a framework)

### Missing components and/or help

If you cannot find the component you're looking for and/or want help switching to Green, see information on [Green pilots](https://github.com/sebgroup/green)

If you are up and running with Green and want to contribute a new component, see [Contributions](https://github.com/sebgroup/green/CONTRIBUTING.md)

## Develop / Contribute

This is part of a monorepo. If you want to contribute, see [Green](https://github.com/sebgroup/green)
