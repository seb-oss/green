import { background } from '@storybook/theming'

const DialogueTemplate = ({ headline, body }) => {
  return `
    <section role='dialog'
           aria-modal="true"
           aria-labelledby="modal_header"
           aria-describedby="modal_body">
    <header>
      <div id="modal_header" class="heading-m">${headline}</div>
      <button class='close'>
        <span class='sr-only'>Close</span>
        <i></i>
      </button>
    </header>
    <div class='body' id="modal_body">
      ${body}
    </div>
    <footer>
      <button type="button">Secondary</button><button type="submit">Primary</button>
    </footer>
  </section>`
}

const SlideoutTemplate = ({ headline, body, variant }) => {
  return `
    <aside role='dialog'
         role='dialog'
         aria-modal="true"
         aria-labelledby="modal_header"
         aria-describedby="modal_body"
         class="${variant !== 'default' ? `gds-slide-out--${variant}` : ''}"
         >
    <header>
      <h3 id="modal_header" class="heading-m">${headline}</h3>
      <button class='close'>
        <span class='sr-only'>Close</span>
        <i></i>
      </button>
    </header>
    <div class='body' id="modal_body">
      ${body}
    </div>
    <footer>
      <button type="button">Secondary</button><button type="submit">Primary</button>
    </footer>
  </aside>`
}

const TakeoverTemplate = ({ headline, body }) => {
  return `
    <main role='dialog'
        aria-modal="true"
        aria-labelledby="modal_header"
        aria-describedby="modal_body">
    <header>
      <h3 id="modal_header">${headline}</h3>
      <button class='close'>
        <span class='sr-only'>Close</span>
        <i></i>
      </button>
    </header>
    <div class='body' id="modal_body">
      ${body}
    </div>
    <footer>
      <button type="button">Secondary</button><button type="submit">Primary</button>
    </footer>
  </main>`
}

export default {
  title: 'Components/Modal',

  argTypes: {
    headline: {
      control: 'text',
    },

    body: {
      control: 'text',
    },
  },
}

export const Dialogue = {
  render: DialogueTemplate.bind({}),
  name: 'Dialogue',

  parameters: {
    componentIds: ['component-dialogue'],
  },

  args: {
    headline: 'Dialogue headline',
    body: '<p>Modal body text. Lorem ipsum dolor sit amet.</p>',
  },
}

export const SlideOut = {
  render: SlideoutTemplate.bind({}),
  name: 'Slide-out',

  parameters: {
    componentIds: ['component-slideout'],
  },

  args: {
    headline: 'Slide-out headline',
    body: '<p>Modal body text. Lorem ipsum dolor sit amet.</p>',
  },

  argTypes: {
    headline: {
      control: 'text',
    },

    body: {
      control: 'text',
    },

    variant: {
      control: 'select',
      options: ['default', '768', '960'],
    },
  },
}

export const SlideOut768 = {
  render: SlideoutTemplate.bind({}),
  name: 'Slide-out 768',

  parameters: {
    componentIds: ['component-slideout'],
  },

  args: {
    headline: 'Slide-out headline',
    body: '<p>Modal body text. Lorem ipsum dolor sit amet.</p>',
    variant: '768',
  },

  argTypes: {
    headline: {
      control: 'text',
    },

    body: {
      control: 'text',
    },

    variant: {
      control: 'select',
      options: ['default', '768', '960'],
    },
  },
}

export const SlideOut960 = {
  render: SlideoutTemplate.bind({}),
  name: 'Slide-out 960',

  parameters: {
    componentIds: ['component-slideout'],
  },

  args: {
    headline: 'Slide-out headline',
    body: '<p>Modal body text. Lorem ipsum dolor sit amet.</p>',
    variant: '960',
  },

  argTypes: {
    headline: {
      control: 'text',
    },

    body: {
      control: 'text',
    },

    variant: {
      control: 'select',
      options: ['default', '768', '960'],
    },
  },
}

export const Takeover = {
  render: TakeoverTemplate.bind({}),
  name: 'Takeover',

  parameters: {
    componentIds: ['component-takeover'],
  },

  args: {
    headline: 'Takeover headline',
    body: '<p>Modal body text. Lorem ipsum dolor sit amet.</p>',
  },
}
