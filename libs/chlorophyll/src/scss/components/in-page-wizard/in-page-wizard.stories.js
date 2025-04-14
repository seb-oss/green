const Template = (args) => `
    <section class="gds-in-page-wizard-step-card gds-card${
      args.isCompleted ? ' completed' : ''
    }${args.isStarted ? ' active' : ''}">
      <header class="gds-in-page-wizard-step-card__header">
        <div class="gds-in-page-wizard-step-card__header__icon">
            <svg wilih="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17.6203 6.60836L9.40014 14.8285L6.37976 11.8081C6.23332 11.6617 5.99588 11.6617 5.84942 11.8081L4.96554 12.692C4.8191 12.8384 4.8191 13.0759 4.96554 13.2223L9.13495 17.3917C9.28138 17.5382 9.51882 17.5382 9.66529 17.3917L19.0344 8.02258C19.1809 7.87614 19.1809 7.63871 19.0344 7.49224L18.1506 6.60836C18.0041 6.46193 17.7667 6.46193 17.6203 6.60836Z" fill="white"></path></svg>
        </div>
        <div class="gds-in-page-wizard-step-card__header__progress">
          ${args.stepText}
        </div>
        <div class="gds-in-page-wizard-step-card__header__title">
          <h2 class="h4">${args.title}</h2>
        </div>
        ${
          args.isCompleted
            ? `
        <div class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
          <button class="gds-button secondary small">Edit</button>
        </div>`
            : ''
        }
      </header>
      ${
        args.isStarted
          ? `<div class="gds-in-page-wizard-step-card__content">${args.content}</div>
            <footer class="gds-in-page-wizard-step-card__footer">
              <button class="gds-button primary">Next</button>
            </footer>
          `
          : args.isCompleted
            ? `<div class="gds-in-page-wizard-step-card__content">${args.content}</div>
              <footer class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
                <button class="gds-button secondary">Edit</button>
              </footer>
            `
            : ''
      }
    </section>`

export default {
  title: 'Components/In-page Wizard',
  tags: ['autodocs'],
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

/**
 * Presents a sequence that leads the user through well-defined steps within a page.
 */
export const InPageWizardStepCard = {
  render: (args) => Template(args),
  name: 'In-page Wizard Step Card',
  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: `<ul class="gds-list"><li>Sub title</li><li>Sub section text</li><li>Sub title</li><li>Sub section text</li><li>Sub title</li><li>Sub section text</li></ul>`,
  },
}

/**
 * A completed step has a green check mark icon and an Edit-button which allows the user to change previously entered information.
 */
export const CompletedStep = {
  render: (args) => Template(args),
  name: 'Completed step',

  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: `<ul class="gds-list"><li>Sub title</li><li>Sub section text</li><li>Sub title</li><li>Sub section text</li></ul>`,
  },
}

/**
 * The current step is the one the user is currently interacting with.
 */
export const CurrentStep = {
  render: (args) => Template(args),
  name: 'Current step (active)',
  args: {
    isCompleted: false,
    isStarted: true,
    stepText: 'Step 2 of 6',
    title: 'Title',

    content: `<div class="gds-form-group">
          <label class="gds-label" for="inputInvalid">Input label</label>
          <span class="gds-form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" class="gds-input" type="text" />
        </div>
        <div class="gds-form-group">
          <label class="gds-label" for="inputInvalid">Input label</label>
          <span class="gds-form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" class="gds-input" type="text" />
        </div>`,
  },
}

/**
 * An upcoming step that only shows the title and step number, but hides the details in order to reduce clutter.
 */
export const NotStartedStep = {
  render: (args) => Template(args),
  name: 'Not started step',
  args: {
    isCompleted: false,
    isStarted: false,
    stepText: 'Step 3 of 6',
    title: 'Title',
    content: `<ul class="gds-list"><li>Sub title</li><li>Sub section text</li><li>Sub title</li><li>Sub section text</li></ul>`,
  },
}
