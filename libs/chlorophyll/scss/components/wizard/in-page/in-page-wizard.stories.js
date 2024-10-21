const Template = ({ isCompleted, isStarted, stepText, title, content }) => {
  return `
    <section class="gds-in-page-wizard-step-card card${
      isCompleted ? ' completed' : ''
    }${isStarted ? ' active' : ''}">
      <header class="gds-in-page-wizard-step-card__header">
        <div class="gds-in-page-wizard-step-card__header__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17.6203 6.60836L9.40014 14.8285L6.37976 11.8081C6.23332 11.6617 5.99588 11.6617 5.84942 11.8081L4.96554 12.692C4.8191 12.8384 4.8191 13.0759 4.96554 13.2223L9.13495 17.3917C9.28138 17.5382 9.51882 17.5382 9.66529 17.3917L19.0344 8.02258C19.1809 7.87614 19.1809 7.63871 19.0344 7.49224L18.1506 6.60836C18.0041 6.46193 17.7667 6.46193 17.6203 6.60836Z" fill="white"></path></svg>
        </div>
        <div class="gds-in-page-wizard-step-card__header__progress">
          ${stepText}
        </div>
        <div class="gds-in-page-wizard-step-card__header__title">
          <h2 class="h4">${title}</h2>
        </div>
        ${
          isCompleted
            ? `
        <div class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
          <button class="secondary small">Edit</button>
        </div>`
            : ''
        }
      </header>
      ${
        isStarted
          ? `<div class="gds-in-page-wizard-step-card__content">${content}</div>
            <footer class="gds-in-page-wizard-step-card__footer">
              <button class="primary">Next</button>
            </footer>
          `
          : isCompleted
            ? `<div class="gds-in-page-wizard-step-card__content">${content}</div>
              <footer class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
                <button class="secondary">Edit</button>
              </footer>
            `
            : ''
      }
    </section>
    `
}

export default {
  title: 'Components/Wizard/In-page Wizard',

  parameters: {
    componentIds: ['component-inpagewizard'],
  },

  argTypes: {
    isCompleted: {
      control: 'boolean',
    },

    isStarted: {
      control: 'boolean',
    },

    stepText: {
      control: 'text',
    },

    title: {
      control: 'text',
    },

    content: {
      control: 'text',
    },
  },
}

export const InPageWizardStepCard = {
  render: Template.bind({}),
  name: 'In-page Wizard Step Card',

  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: `<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>`,
  },

  parameters: {
    docs: {
      disable: true,
    },
  },
}

export const CompletedStep = {
  render: Template.bind({}),
  name: 'Completed step',

  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: `<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>`,
  },
}

export const CurrentStep = {
  render: Template.bind({}),
  name: 'Current step',

  args: {
    isCompleted: false,
    isStarted: true,
    stepText: 'Step 2 of 6',
    title: 'Title',

    content: `<div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>
        <div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>`,
  },
}

export const NotStartedStep = {
  render: Template.bind({}),
  name: 'Not started step',

  args: {
    isCompleted: false,
    isStarted: false,
    stepText: 'Step 3 of 6',
    title: 'Title',
    content: `<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>`,
  },
}
