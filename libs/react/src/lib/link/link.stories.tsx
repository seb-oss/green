import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRight } from '@sebgroup/green-core/react'
import Link from './link'

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

export const OnBackground = {
  render: () => (
    <div>
      <div className="bg-info p-4 my-4">
        <Link href="https://seb.se" className="bg-info">
          Go to seb.se in blue
        </Link>
      </div>

      <div className="bg-success p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in green</Link>
      </div>

      <div className="bg-warning p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in yellow</Link>
      </div>

      <div className="bg-danger p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in red</Link>
      </div>
    </div>
  ),
}

export const AsButton = {
  render: () => (
    <div>
      <Link button href="https://seb.se">
        Go to seb.se as default button
      </Link>
      <Link button="primary" href="https://seb.se">
        Go to seb.se as primary button
      </Link>
      <Link button="ghost" href="https://seb.se">
        Go to seb.se as ghost button
      </Link>
    </div>
  ),
}

export const Secondary = {
  render: () => (
    <div>
      <Link secondary href="#">
        Go to page
        <GdsIconArrowRight />
      </Link>
    </div>
  ),
}
