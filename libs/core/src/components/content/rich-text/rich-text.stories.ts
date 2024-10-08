import type { Meta, StoryObj } from '@storybook/web-components'
import './rich-text'
import '../divider'
import { html } from '../../../scoping'

/**
 * `gds-rich-text` can be used to wrap generic HTML content and apply typography styles.
 *
 * The wrapped content will get captured and transferred to the inner shadowRoot of the `gds-rich-text` element.
 *
 * A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
 * that you want to apply the design system typography to.
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Docs/Content/Rich Text',
  component: 'gds-rich-text',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

export const Divider: Story = {
  ...DefaultParams,
  name: 'Rich Text',
  render: (args) => html`
    <gds-rich-text id="rt">
      <h1>Sed nec nunc non odio ultricies</h1>
      <p>
        consectetur.
        <a
          href="javascript:;"
          @click=${() =>
            console.log('Event listeners are retained in the captured DOM')}
          >Nullam auctor</a
        >
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque. Sed nec nunc non odio ultricies
        consectetur.
      </p>
      <ul>
        <li>Nullam auctor nisl vel justo consectetur</li>
        <li>ultricies felis tincidunt</li>
        <li>Sed auctor libero non turpis tincidunt</li>
        <li>a ultricies nulla ultricies</li>
      </ul>
      <h2>Consectetur adipiscing elit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque.
      </p>
    </gds-rich-text>
    <gds-divider></gds-divider>
    <p>
      Setting new children will cause the content to be re-captured, replaceing
      the old contents:
    </p>
    <button
      @click=${() => (
        document.getElementById('rt')!.appendChild(new Text('Added text node')),
        null
      )}
    >
      Change it
    </button>
  `,
}
