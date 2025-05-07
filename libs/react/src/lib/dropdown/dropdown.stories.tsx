/* eslint no-console: "off" */
import React from 'react'

import { Dropdown } from './dropdown'

const Template = ({ align, ...props }) => <Dropdown {...props}></Dropdown>

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

export const Default = {
  render: Template.bind({}),
  name: 'Dropdown',

  parameters: {
    componentIds: ['component-dropdown'],
  },

  args: {
    options: [
      {
        label: 'Select',
        value: null,
      },
      {
        label: 'Tacos',
        value: 'tacos',
      },
      {
        label: 'Pizza',
        value: 'pizza',
      },
      {
        label: 'Sushi',
        value: 'sushi',
      },
    ],

    label: 'Dropdown label',
    multiSelect: false,
    searchable: false,

    texts: {
      selected: 'selected',
      placeholder: 'Select',
      close: 'Close',
      optionsDescription: 'Options',
    },

    onChange: (value) => {
      console.log('OnChange', value)
    },

    label: 'Dropdown label',
    syncPopoverWidth: false,
  },
}

export const TextAndPlaceholder = {
  name: 'TextAndPlaceholder',
  render: Template.bind({}),

  args: {
    texts: {
      placeholder: 'Select me please!',
    },
    label: 'Awesome label!!',
    informationLabel: 'Awesome informationLabel!!',
    options: [
      { label: 'Tacos', value: { id: 'tacos', kitchen: 'mexican' } },
      { label: 'Pizza', value: { id: 'pizza', kitchen: 'italian' } },
      { label: 'Sushi', value: { id: 'sushi', kitchen: 'japanese' } },
    ],
    compareWith: (meal1, meal2) => meal1.id === meal2.id,
    onChange: (value) => console.log('OnChange', value),
  },
}

export const OptionHeadings = {
  name: 'OptionHeadings',
  render: Template.bind({}),

  args: {
    label: 'Option headings',
    options: [
      { label: 'Lunch', heading: true },
      { label: 'Tacos', value: 'tacos' },
      { label: 'Pizza', value: 'pizza' },
      { label: 'Sushi', value: 'sushi' },
      { label: 'Dinner', heading: true },
      { label: 'Burger', value: 'burger' },
      { label: 'Pasta', value: 'pasta' },
      { label: 'Ramen', value: 'ramen' },
    ],
  },
}

export const MultiSelect = {
  name: 'MultiSelect',
  render: Template.bind({}),

  args: {
    label: 'Multi Select',
    multiSelect: true,
    options: [
      { label: 'Tacos', value: 'tacos' },
      { label: 'Pizza', value: 'pizza' },
      { label: 'Sushi', value: 'sushi' },
    ],
  },
}

export const Small = {
  name: 'Small',
  render: Template.bind({}),
  args: {
    label: 'Small dropdown',
    size: 'small',
    hideLabel: true,
    options: [
      { label: 'Tacos', value: 'tacos' },
      { label: 'Pizza', value: 'pizza' },
      { label: 'Sushi', value: 'sushi' },
    ],
  },
}

export const WithValidation = {
  render: Template.bind({}),
  args: {
    label: 'Dropdown with validation',
    options: [
      { label: 'Tacos', value: 'tacos' },
      { label: 'Pizza', value: 'pizza' },
      { label: 'Sushi', value: 'sushi' },
    ],
    validator: {
      message: 'This is an error message',
      indicator: 'error',
    },
  },
}
