import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggvTooltipDirective } from './tooltip.directive'

export default {
  title: 'V-Angular/Tooltip',
  decorators: [
    moduleMetadata({
      declarations: [NggvTooltipDirective],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

const argsToAttr = (args: any) =>
  Object.keys(args)
    .map((attr) => `[${attr}]="${attr}"`)
    .join(' ')

const Template: StoryFn<NggvTooltipDirective> = (
  args: NggvTooltipDirective & any,
) => ({
  /* spell-checker: disable */
  template: /*html*/ `
    <p>Mauris tristique, nisi eu ultricies pellentesque, ligula neque ornare dolor, sit amet feugiat augue neque in dui.
      Curabitur euismod rhoncus magna, vitae pulvinar tellus dignissim vel. Etiam faucibus iaculis egestas. Quisque
      tristique nisi ut ex dignissim viverra. Nam massa justo, consequat sollicitudin accumsan eget, condimentum sed felis.
      Phasellus finibus arcu elit, sed malesuada lectus eleifend dignissim. Proin diam enim, ultrices sit amet
      consectetur sit amet, <a ${argsToAttr(args)}>placerat</a> ut lorem. In dignissim, justo quis ullamcorper euismod,
      erat sem rutrum velit, vitae vestibulum quam sem a diam. Donec scelerisque mi at maximus hendrerit.
      Integer diam est, euismod in nisl sagittis, pharetra imperdiet metus.
      Pellentesque a ante lacus. Donec vitae euismod lorem, ut tincidunt ex. Nam a fringilla
      lorem. Nulla et ornare quam.</p>
    `,
  /* spell-checker: enable */
  props: { ...args },
})

const TemplateAccessible: StoryFn<NggvTooltipDirective> = (
  args: NggvTooltipDirective & any,
) => ({
  /* spell-checker: disable */
  template: /*html*/ `
  <button ${argsToAttr(args)} aria-describedby="accessible-tooltip">Hover me</button>
  `,
  /* spell-checker: enable */
  props: { ...args },
})

export const Top = Template.bind({})
Top.args = {
  nggvTooltip:
    'This is a tooltip with a really long text that should always be visible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  placement: 'top',
  offset: 10,
  shown: true,
  resizeThrottle: 50,
}

export const Bottom = Template.bind({})
Bottom.args = {
  ...Top.args,
  placement: 'bottom',
}

export const Left = Template.bind({})
Left.args = {
  ...Top.args,
  nggvTooltip:
    'This is a tooltip with a long text that should attempt to be visible',
  placement: 'left',
}

export const Right = Template.bind({})
Right.args = {
  ...Top.args,
  nggvTooltip:
    'This is a tooltip with a long text that should attempt to be visible',
  placement: 'right',
}

export const Accessible = TemplateAccessible.bind({})
Accessible.args = {
  ...Top.args,
  nggvTooltip:
    'This is a tooltip with a long text that should attempt to be visible',
  placement: 'right',
  shown: false,
  tooltipId: 'accessible-tooltip',
}
