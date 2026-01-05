export default {
  title: 'Components/Card',
  tags: ['autodocs'],
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

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/card)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-card)
 */
export const Card = {
  render: (args) => `
  <section class="gds-card">
    ${
      args.heading || args.closeButton
        ? `<header>
      <h3>${args.heading}</h3>
      ${args.closeButton ? `<button class="close" type="button"><span class="sr-only">Close</span><i></i></button>` : ''}
     </header>`
        : ''
    }
    <p>${args.body}</p>
    ${
      args.button || args.primaryButton || args.link
        ? `<footer>
      ${args.link ? `<a class="button" href="#">${args.link}</a>` : ''}
      ${args.button ? `<button type="button">${args.button}</button>` : ''}
      ${args.primaryButton ? `<button type="button" class="primary">${args.primaryButton}</button>` : ''}
     </footer>`
        : ''
    }
  </section>
`,
  args: {
    heading: 'Card headline',
    body: 'Card body',
    link: '',
    button: '',
    primaryButton: '',
  },
}
