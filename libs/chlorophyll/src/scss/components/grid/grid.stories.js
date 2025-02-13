export default {
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-grid'],
  },
  argTypes: {},
}

/**
 * Green uses Bootstrap's grid system which relies on a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together can be found at [getbootstrap.com](https://getbootstrap.com/docs/5.0/layout/grid/).
 * New to or unfamiliar with flexbox?** [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.
 */

export const ThreeColumns = {
  render: () => `
<div class="gds-container">
  <div class="gds-row">
    <div class="gds-col-12 gds-col-sm">Column</div>
    <div class="gds-col-12 gds-col-sm">Column</div>
    <div class="gds-col-12 gds-col-sm">Column</div>
  </div>
</div>`,
  args: {},
  parameters: {},
}
