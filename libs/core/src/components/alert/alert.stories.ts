import { html } from '../../utils/helpers/custom-element-scoping'

// Ensure all dependencies are registered before use
import '../card'
import '../button'
import '../icon/icons/checkmark'
import '../icon/icons/triangle-exclamation'
import '../icon/icons/circle-info'
import './index.ts'

export default {
  title: 'Components/Alert',
  component: 'gds-alert',
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    content: { control: 'text', name: 'Alert Content (slot)' },
    showIcon: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    timeOut: { control: 'number' },
    'button-text': { control: 'text', name: 'Button Text (CTA)' },
  },
}

const Template = (args) => html`
  <gds-alert
    type=${args.type}
    ?showIcon=${args.showIcon}
    ?dismissible=${args.dismissible}
    .timeOut=${args.timeOut}
    button-text=${args['button-text'] || ''}
  >
    ${args.content}
  </gds-alert>
`

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  content: html`<strong>Information</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: false,
  timeOut: 0,
  'button-text': '',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  content: html`<strong>Success</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: false,
  timeOut: 0,
  'button-text': '',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  content: html`<strong>Warning</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: false,
  timeOut: 0,
  'button-text': '',
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  content: html`<strong>Error</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: false,
  timeOut: 0,
  'button-text': '',
}

export const WithAction = Template.bind({})
WithAction.args = {
  type: 'info',
  content: html`<strong>Actionable</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: true,
  timeOut: 0,
  'button-text': 'Take Action',
}

export const Dismissible = Template.bind({})
Dismissible.args = {
  type: 'info',
  content: html`<strong>Dismissible</strong> Body text starts on the same row as
    heading. A link (optional) always ends the message, stand alone or part of
    the sentence.`,
  showIcon: true,
  dismissible: true,
  timeOut: 0,
  'button-text': '',
}

export const AutoDismiss = Template.bind({})
AutoDismiss.args = {
  type: 'success',
  content: html`<strong>Auto Dismiss</strong> Body text starts on the same row
    as heading. A link (optional) always ends the message, stand alone or part
    of the sentence.`,
  showIcon: true,
  dismissible: false,
  timeOut: 3000,
  'button-text': '',
}

// Container Query Size Demonstrations
const ContainerTemplate = (args) => html`
  <div
    style="container-type: inline-size; width: ${args.containerWidth}; border: 1px dashed #ccc; padding: 1rem; margin-bottom: 2rem;"
  >
    <div style="font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">
      Container width: ${args.containerWidth}
    </div>
    <gds-alert
      .type=${args.type}
      .dismissible=${args.dismissible}
      .timeOut=${args.timeOut}
      .buttonText=${args.buttonText}
      .showIcon=${args.showIcon}
    >
      ${args.content}
    </gds-alert>
  </div>
`

export const MobileSize = ContainerTemplate.bind({})
MobileSize.args = {
  containerWidth: '400px',
  type: 'info',
  content: html`<strong>Mobile View</strong> In containers under 600px, the
    action button stretches full width and the layout stacks.`,
  dismissible: true,
  'button-text': 'Full Width Button',
  showIcon: true,
}
MobileSize.storyName = 'Mobile Size (< 600px)'

export const TabletSize = ContainerTemplate.bind({})
TabletSize.args = {
  containerWidth: '700px',
  type: 'warning',
  content: html`<strong>Tablet View</strong> In containers over 600px, the
    action button is inline with fixed width.`,
  dismissible: true,
  'button-text': 'Inline Button',
  showIcon: true,
}
TabletSize.storyName = 'Tablet Size (> 600px)'

export const ResponsiveDemo = () => html`
  <div style="max-width: 1200px;">
    <h3 style="margin-bottom: 1rem;">Responsive Container Query Demo</h3>
    <p style="margin-bottom: 2rem; color: #666;">
      The alert component uses container queries to adapt its layout. Resize
      your browser to see the transitions.
    </p>

    <!-- Small container -->
    <div
      style="container-type: inline-size; width: 100%; max-width: 500px; border: 1px dashed #ccc; padding: 1rem; margin-bottom: 2rem;"
    >
      <div style="font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">
        Small container (max-width: 500px)
      </div>
      <gds-alert type="success" dismissible buttonText="Save Changes">
        <strong>Responsive Alert</strong> This alert adapts to its container
        size. The button is full width in small containers.
      </gds-alert>
    </div>

    <!-- Large container -->
    <div
      style="container-type: inline-size; width: 100%; border: 1px dashed #ccc; padding: 1rem;"
    >
      <div style="font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">
        Large container (full width)
      </div>
      <gds-alert type="success" dismissible buttonText="Save Changes">
        <strong>Responsive Alert</strong> This alert adapts to its container
        size. The button is inline with fixed width in large containers.
      </gds-alert>
    </div>
  </div>
`

export const AllSizesComparison = () => html`
  <div style="max-width: 1200px;">
    <h3 style="margin-bottom: 1rem;">Container Query Size Comparison</h3>

    ${[300, 450, 600, 800, '100%'].map(
      (width) => html`
        <div
          style="container-type: inline-size; width: ${typeof width === 'number'
            ? width + 'px'
            : width}; border: 1px dashed #ccc; padding: 1rem; margin-bottom: 1rem;"
        >
          <div style="font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">
            Container: ${typeof width === 'number' ? width + 'px' : width}
          </div>
          <gds-alert type="info" dismissible buttonText="Action">
            <strong>Container Query Demo</strong> This alert's layout changes
            based on container width.
          </gds-alert>
        </div>
      `,
    )}
  </div>
`

export const ComplexContent = () => html`
  <div style="max-width: 800px;">
    <h3 style="margin-bottom: 1rem;">Complex Content Examples</h3>

    <!-- With long content -->
    <div
      style="container-type: inline-size; width: 100%; border: 1px dashed #ccc; padding: 1rem; margin-bottom: 1rem;"
    >
      <gds-alert type="warning" dismissible buttonText="Read More">
        <strong>Long Content Example</strong> This is a very long message that
        demonstrates how the alert handles extensive content. The layout should
        remain stable and readable even with multiple lines of text. The action
        button and close button should maintain their positions appropriately.
      </gds-alert>
    </div>

    <!-- Multiple alerts in narrow container -->
    <div
      style="container-type: inline-size; width: 350px; border: 1px dashed #ccc; padding: 1rem;"
    >
      <div style="font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">
        Multiple alerts in narrow container (350px)
      </div>
      <gds-alert
        type="error"
        dismissible
        buttonText="Fix"
        style="margin-bottom: 0.5rem;"
      >
        <strong>Error</strong> First error message
      </gds-alert>
      <gds-alert
        type="warning"
        dismissible
        buttonText="Review"
        style="margin-bottom: 0.5rem;"
      >
        <strong>Warning</strong> Second warning message
      </gds-alert>
      <gds-alert type="success" dismissible>
        <strong>Success</strong> Third success message
      </gds-alert>
    </div>
  </div>
`

export const NoIcon = Template.bind({})
NoIcon.args = {
  type: 'info',
  content: html`<strong>No Icon</strong> This alert does not show an icon.`,
  dismissible: true,
  timeOut: 0,
  'button-text': '',
  showIcon: false,
}

// Example with HTML content in slot
export const RichContent = () => html`
  <div style="max-width: 800px;">
    <h3 style="margin-bottom: 1rem;">Rich Content Examples</h3>

    <gds-alert
      type="info"
      dismissible
      buttonText="Learn More"
      style="margin-bottom: 1rem;"
    >
      <strong>Rich Content Alert</strong> This alert contains
      <a href="#" style="color: inherit; text-decoration: underline;">a link</a
      >, <em>emphasized text</em>, and
      <code
        style="background: rgba(0,0,0,0.1); padding: 2px 4px; border-radius: 3px;"
        >inline code</code
      >.
    </gds-alert>

    <gds-alert type="warning" dismissible>
      <strong>List Content</strong>
      <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
        <li>First item in the list</li>
        <li>Second item with more details</li>
        <li>Third item to consider</li>
      </ul>
    </gds-alert>
  </div>
`

export const AccessibilityDemo = () => html`
  <div style="max-width: 800px;">
    <h3 style="margin-bottom: 1rem;">Accessibility Features Demo</h3>
    <p style="margin-bottom: 2rem; color: #666;">
      Try these accessibility features:
    </p>
    <ul style="color: #666; margin-bottom: 2rem;">
      <li>Press <kbd>Escape</kbd> to dismiss dismissible alerts</li>
      <li>Tab through interactive elements</li>
      <li>Screen readers will announce alerts automatically</li>
      <li>Reduced motion is respected for animations</li>
    </ul>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <gds-alert type="info" dismissible>
        <strong>Keyboard Navigation</strong> Press Escape to dismiss this alert,
        or Tab to navigate to the close button.
      </gds-alert>
      <gds-alert type="success" buttonText="Take Action" dismissible>
        <strong>Focus Management</strong> Tab between the action button and
        close button. Focus is clearly visible.
      </gds-alert>
      <gds-alert type="warning" timeOut="10000">
        <strong>Timer Accessibility</strong> The progress bar has ARIA
        attributes for screen readers to announce remaining time.
      </gds-alert>
      <gds-alert type="error" dismissible showIcon>
        <strong>Screen Reader Support</strong> This alert is announced with
        proper ARIA labels and live regions.
      </gds-alert>
    </div>
    <h4 style="margin-top: 2rem; margin-bottom: 1rem;">Test Reduced Motion</h4>
    <p style="color: #666; margin-bottom: 1rem;">
      Enable "Reduce Motion" in your OS accessibility settings to see simplified
      animations.
    </p>
    <button
      onclick="document.getElementById('motion-test').remove(); setTimeout(() => {
        const alert = document.createElement('gds-alert');
        alert.id = 'motion-test';
        alert.type = 'info';
        alert.dismissible = true;
        alert.innerHTML = '<strong>Animation Test</strong> This alert respects your motion preferences.';
        document.getElementById('motion-container').appendChild(alert);
      }, 100)"
      style="padding: 0.5rem 1rem; margin-bottom: 1rem;"
    >
      Add New Alert
    </button>
    <div id="motion-container">
      <gds-alert id="motion-test" type="info" dismissible>
        <strong>Animation Test</strong> This alert respects your motion
        preferences.
      </gds-alert>
    </div>
  </div>
`

export const ScreenReaderAnnouncements = () => html`
  <div style="max-width: 800px;">
    <h3 style="margin-bottom: 1rem;">Screen Reader Live Region Demo</h3>
    <p style="color: #666; margin-bottom: 2rem;">
      Alerts are automatically announced to screen readers when they appear or
      change.
    </p>
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
      <button
        onclick="
          const container = document.getElementById('sr-container');
          container.innerHTML = '';
          const alert = document.createElement('gds-alert');
          alert.type = 'success';
          alert.innerHTML = '<strong>Order Complete!</strong> Your order #12345 has been processed.';
          container.appendChild(alert);
        "
        style="padding: 0.5rem 1rem;"
      >
        Show Success Alert
      </button>
      <button
        onclick="
          const container = document.getElementById('sr-container');
          container.innerHTML = '';
          const alert = document.createElement('gds-alert');
          alert.type = 'error';
          alert.dismissible = true;
          alert.innerHTML = '<strong>Error!</strong> Please check your form inputs.';
          container.appendChild(alert);
        "
        style="padding: 0.5rem 1rem;"
      >
        Show Error Alert
      </button>
      <button
        onclick="document.getElementById('sr-container').innerHTML = ''"
        style="padding: 0.5rem 1rem;"
      >
        Clear
      </button>
    </div>
    <div id="sr-container" style="min-height: 80px;"></div>
    <div style="background: #f5f5f5; padding: 1rem; border-radius: 4px;">
      <p style="margin: 0; font-size: 0.875rem;">
        <strong>Screen Reader Output:</strong><br />
        When alerts appear, screen readers will announce:<br />
        • "Success alert: Order Complete! Your order #12345 has been
        processed."<br />
        • "Error alert: Error! Please check your form inputs. Dismiss alert
        button"
      </p>
    </div>
  </div>
`
