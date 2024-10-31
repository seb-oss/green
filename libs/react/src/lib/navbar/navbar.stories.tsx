import React from 'react'

import Navbar from './navbar'

const Template = ({ children, ...props }) => (
  <Navbar {...props}>{children}</Navbar>
)

export default {
  title: 'Components/Navbar',
  component: Navbar,

  argTypes: {
    variant: {
      options: [undefined, 'bg-light', 'bg-dark'],
    },
  },
}

export const Transparent = {
  render: Template.bind({}),
  name: 'Transparent',

  args: {
    title: 'Transparent navbar',
    titleLink: 'http://seb.se',
    variant: undefined,
  },
}

export const Light = {
  render: Template.bind({}),
  name: 'Light',

  args: {
    title: 'Light navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-light',
  },
}

export const Dark = {
  render: Template.bind({}),
  name: 'Dark',

  args: {
    title: 'Dark navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-dark',
  },
}

export const Content = {
  render: Template.bind({}),
  name: 'Content',

  args: {
    title: 'Page heading',
    variant: 'bg-light',
    children: [
      <input type="text" placeholder="Input field" />,
      <button type="button" className="ghost">
        Search
      </button>,
    ],
  },
}
