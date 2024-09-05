const Template = ({
  heading,
  closeButton,
  body,
  button,
  primaryButton,
  link,
}) => `
  <section class="card">
    ${
      heading || closeButton
        ? `<header>
      <h3>${heading}</h3>
      ${closeButton ? `<button class="close" type="button"><span class="sr-only">Close</span><i></i></button>` : ''}
     </header>`
        : ''
    }
    <p>${body}</p>
    ${
      button || primaryButton || link
        ? `<footer>
      ${link ? `<a href="#">${link}</a>` : ''}
      ${button ? `<button type="button">${button}</button>` : ''}
      ${primaryButton ? `<button type="button" class="primary">${primaryButton}</button>` : ''}
     </footer>`
        : ''
    }
  </section>
`

export default {
  title: 'Components/Card',

  parameters: {
    componentIds: ['component-card'],
  },

  argTypes: {
    heading: {
      control: 'text',
    },

    body: {
      control: 'text',
    },

    link: {
      control: 'text',
    },

    button: {
      control: 'text',
    },

    primaryButton: {
      control: 'text',
    },

    closeButton: {
      control: 'boolean',
    },
  },
}

export const Card = {
  render: Template.bind({}),
  name: 'Card',

  args: {
    heading: 'Card headline',
    body: 'Card body',
    link: '',
    button: '',
    primaryButton: '',
  },
}
