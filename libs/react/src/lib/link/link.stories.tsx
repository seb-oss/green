import Link from './link'
import { createComponent } from '@lit/react'
import { IconArrowRight } from '../../../../../dist/libs/core/src/components/icon/icons/arrow-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

const GdsIconArrowRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right'),
  elementClass: IconArrowRight,
  react: React,
})

const Template = ({ ...props }) => <Link {...props} />

export default {
  title: 'Components/Link',
  component: Link,

  argTypes: {
    button: {
      options: [undefined, 'primary', 'secondary', 'ghost'],
    },
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Link',

  parameters: {
    componentIds: ['component-inlinelinks'],
  },

  args: {
    children: 'Go to seb.se',
    href: 'https://seb.se',
  },
}
