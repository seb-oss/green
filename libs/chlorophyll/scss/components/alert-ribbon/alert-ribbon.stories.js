const Template = ({
  type,
  heading,
  content,
  link,
  button,
  primaryButton,
  closeButton,
}) => `
  <div role="alert" class="${type}">
    <i>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM12 7.07143C12.8284 7.07143 13.5 7.743 13.5 8.57143C13.5 9.39986 12.8284 10.0714 12 10.0714C11.1716 10.0714 10.5 9.39986 10.5 8.57143C10.5 7.743 11.1716 7.07143 12 7.07143ZM14 16.1429C14 16.3795 13.8081 16.5714 13.5714 16.5714H10.4286C10.1919 16.5714 10 16.3795 10 16.1429V15.2857C10 15.049 10.1919 14.8571 10.4286 14.8571H10.8571V12.5714H10.4286C10.1919 12.5714 10 12.3795 10 12.1429V11.2857C10 11.049 10.1919 10.8571 10.4286 10.8571H12.7143C12.951 10.8571 13.1429 11.049 13.1429 11.2857V14.8571H13.5714C13.8081 14.8571 14 15.049 14 15.2857V16.1429Z" fill="#333333"/>
      </svg>
    </i>
    <div>
      ${heading ? `<h3>${heading}</h3>` : ''}
      <p>
        ${content}
        ${link ? `<a href="#">${link}</a>.` : ''}
      </p>
    </div>
    ${
      closeButton
        ? `<button class="close" type="button"><span class="sr-only">Close</span><i></i></button>`
        : ''
    }
    ${
      button || primaryButton
        ? `<footer>
        ${button ? `<button type="button">${button}</button>` : ''}
        ${
          primaryButton
            ? `<button type="button" class="primary">${primaryButton}</button>`
            : ''
        }
     </footer>`
        : ''
    }
  </div>
`

export default {
  title: 'Components/Alert ribbon',

  parameters: {
    componentIds: ['component-alertribbon'],
  },

  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'danger', ''],
    },

    heading: {
      control: 'text',
    },

    content: {
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

export const AlertRibbon = {
  render: Template.bind({}),
  name: 'Alert ribbon',

  args: {
    type: '',
    heading: 'Can contain a heading.',
    content:
      'Body text starts on the same row as heading. A link (optional) always ends the message, stand alone or',
    link: 'part of the sentence.',
    button: false,
    primaryButton: '',
    closeButton: true,
  },
}
