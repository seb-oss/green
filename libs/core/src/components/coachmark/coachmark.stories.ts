import { html } from 'lit/html.js'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/coachmark/index.js'

const meta: Meta = {
  title: 'Components/Coachmark',
  component: 'gds-coachmark',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  argTypes: {
    coachmark: {
      control: { type: 'object' },
    },
  },
}
let dummy = {
  id: 'test-coachmark',
  variant: 'dark',
  tooltip: {
    title: 'This is a coachmark title',
    content: ['This is the coachmark content.'],
    closeButton: { text: 'Close', ariaLabel: 'Close tooltip' },
    preferredPlacement: 'bottom',
    target: ['#targetElement'],
  },
}

export const Basic: Story = {
  ...DefaultParams,
  args: {
    coachmark: {
      id: 'test-coachmark',
      variant: 'dark',
      tooltip: {
        title: 'This is a coachmark title',
        content: ['This is the coachmark content.'],
        closeButton: { text: 'Close', ariaLabel: 'Close tooltip' },
        preferredPlacement: 'bottom',
        target: ['#targetElement'],
      },
    },
  },
  render:  () => {

   return html`
      <style>
        .gds-coachmark {
          visibility: hidden;
          position: absolute;
          z-index: 1060;
          box-sizing: border-box;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.25rem;
          background-color: #222;
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s;
        }

        #gds-arrow {
          box-sizing: border-box;
          z-index: -1;
          position: absolute;
          height: 1rem;
          width: 1rem;
          background-color: #222;
          transform: rotate(45deg);
        }

        .arrow-top,
        .arrow-top-start,
        .arrow-top-end {
          bottom: -0.5rem;
        }

        .arrow-bottom,
        .arrow-bottom-start,
        .arrow-bottom-end {
          top: -0.5rem;
        }

        .arrow-left,
        .arrow-left-start,
        .arrow-left-end {
          right: -0.5rem;
        }

        .arrow-right,
        .arrow-right-start,
        .arrow-right-end {
          left: -0.5rem;
        }
      </style>
      <div id="targetElement">target Element</div>
      ${document.getElementById('targetElement')
        ? html`
            <gds-coachmark _isVisible="${true}" .coachmark=${dummy}>
              <div
                class="gds-coachmark"
                aria-modal="false"
                style="visibility:visible;opacity:1;left:0;right:0"
              >
                <div slot="body">'This is the coachmark content.</div>
                <div slot="footer">Button</div>
                <div id="gds-arrow"></div>
              </div>
            </gds-coachmark>
          `
        : html``}
    `
  },
}
