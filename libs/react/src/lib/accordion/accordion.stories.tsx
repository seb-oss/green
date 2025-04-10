import Accordion from './accordion'

const Template = (args) => <Accordion {...args} />

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

export const Default = {
  render: Template.bind({}),
  name: 'Accordion',

  parameters: {
    componentIds: ['component-accordion'],
  },

  args: {
    items: [
      {
        label: 'First accordion heading',
        subLabel: 'First accordion sublabel',

        content: (
          <>
            <p>
              In such a case, we can debounce the resize handling and thus the
              re-rendering. This will mean to throttle or wait between calls to
              our handleResize function. There are solid debounce
              implementations. Let's add a short and simple one to our example
            </p>
            <a class="gds-link" href="#">
              And this is a link
            </a>
          </>
        ),

        labelElementLevel: 2,
        defaultOpen: true,
      },
      {
        label: 'Second accordion heading',

        content: (
          <>
            <p>
              When adding an event listener, such as we are for the resize
              event, we should make sure to clean up after ourselves. In the
              example so far, we haven't, and that could cause our app problems
              later.
            </p>
            <a href="#">And this is a link</a>
          </>
        ),

        labelElementLevel: 2,
      },
      {
        label: 'Third accordion heading',
        subLabel: 'Third accordion sublabel',

        content: (
          <>
            <p>This is a paragraph in the thrid accordion.</p>
            <a href="#">This is the second link example</a>
          </>
        ),

        labelElementLevel: 2,
      },
    ],
  },
}
