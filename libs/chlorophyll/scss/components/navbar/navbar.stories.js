const Template = ({ text }) => {
  return `
    <nav role="navigation">
      <a
        aria-label="Open seb.se in new tab"
        href="http://www.seb.se"
        target="_blank"
        class="brand"
      /></a>
      <h1 class="mx-5">${text}</h1>
    </nav>`
}

export default {
  title: 'Components/Navigation/Navbar',

  parameters: {
    componentIds: [],
  },

  argTypes: {
    text: {
      control: 'text',
    },
  },
}

export const Navbar = {
  render: Template.bind({}),
  name: 'Navbar',

  args: {
    text: 'Page heading',
  },

  parameters: {
    docs: {
      disable: true,
    },
  },
}
