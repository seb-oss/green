# ![image](https://user-images.githubusercontent.com/11420341/124561174-e3bb3400-de3d-11eb-98a2-bd3305326de2.png) @sebgroup/chlorophyll

Chlorophyll is the design token and css part of Green. It is primarily used to style the components in the React and Angular libraries, but also contains grid and utility classes.

It is not recommended to use Chlorophyll directly to style your own components - instead use what is available in the React or Angular libraries, or contribute what you are missing.

## Install

## Use

The Green design system has an unrelenting focus on sensible defaults and ease of use. All you have to do to start using it is import the css, mark the area in which you intend to start using Green (use the `html` tag if the whole application uses it), and add the class `use-green` (we recommend that you scope the CSS so that it only affects elements yo intend to style).

```html
<body class="use-green">
  <h1>Hello!</h1>
  <p>Everything you see here will be correctly styled :smile:</p>
</body>
```

All your basic styling will now be correct. Additional classes will only be needed when you want to deviate from the defaults. So this:

```html
<div class="use-green">
  <form>
    <div class="form-group">
      <label for="formInput1">Input</label>
      <span class="form-info" id="formInfo1">Some info or help</span>
      <input id="formInput1" type="text" aria-describedby="formInfo1" />
    </div>
    <button type="submit">Send</button>
  </form>
</div>
```

...will look like this:

<img width="358" alt="Screenshot 2022-06-28 at 09 47 52" src="https://user-images.githubusercontent.com/1632755/176124198-3ee45eff-4900-4cd5-b453-4bc6f51b8b20.png">

### Additional styling

Styling is made by expressing intent – not design. A button is not green, it is intended to express a successful operation. So:

```html
<!-- This -->
<button class="success">Yay!</button>

<!-- Not this -->
<button class="light-green">Derp!</button>
```

To find all components, possible modifiers and information on when to use them, visit:

- Storybook for Angular
- Storybook for React
- Storybook for html/css (for when you definitely don't need a framework)

### Missing components and/or help

If you cannot find the component you're looking for and/or want help switching to Green, see information on [Green pilots](https://github.com/sebgroup/green)

If you are up and running with Green and want to contribute a new component, see [Contributions](https://github.com/sebgroup/green/CONTRIBUTING.md)

## Develop / Contribute

This is part of a monorepo. If you want to contribute, see [Green](https://github.com/sebgroup/green)

- Watch all changes and auto generate css
  ```bash
  nx run chlorophyll:storybook
  ```
