// gds-spinner.stories.ts
import { html } from 'lit'
import { Meta, StoryObj } from '@storybook/web-components'

import { GdsSpinner } from './gds-spinner'

import './gds-spinner'

const meta: Meta<GdsSpinner> = {
  title: 'Components/Spinner',
  component: 'gds-spinner',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A loading indicator component that supports various sizes and display modes.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
    },
    text: {
      control: 'text',
      description: 'Loading text',
    },
    visualText: {
      control: 'boolean',
      description: 'Show text visually or for screen readers only',
    },
    cover: {
      control: 'boolean',
      description: 'Cover container with backdrop',
    },
    fullscreen: {
      control: 'boolean',
      description: 'Cover entire viewport',
    },
  },
}

export default meta
type Story = StoryObj<GdsSpinner>

// Basic playground with all controls
export const Basic: Story = {
  args: {
    size: 'md',
    text: 'Loading...',
    visualText: true,
    cover: false,
    fullscreen: false,
  },
  render: (args) => html`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .size=${args.size}
        .text=${args.text}
        .visualText=${args.visualText}
        .cover=${args.cover}
        .fullscreen=${args.fullscreen}
      ></gds-spinner>
    </div>
  `,
}

// Size variants
export const Sizes: Story = {
  name: 'Size Variants',
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner size="sm"></gds-spinner>
        <p style="margin-top: 1rem;">Small</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="default"></gds-spinner>
        <p style="margin-top: 1rem;">Default</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">Medium</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="lg"></gds-spinner>
        <p style="margin-top: 1rem;">Large</p>
      </div>
    </div>
  `,
}

// Text visibility
export const TextVisibility: Story = {
  name: 'Text Options',
  render: () => html`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Visible loading text"
          .visualText=${true}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Text</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Screen reader only text"
          .visualText=${false}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Screen Reader Only</p>
      </div>
    </div>
  `,
}

// Container cover mode
export const Cover: Story = {
  name: 'Container Coverage',
  render: () => html`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .cover=${true}
        text="Loading content..."
        size="md"
      ></gds-spinner>
    </div>
  `,
}

// Fullscreen mode
export const Fullscreen: Story = {
  name: 'Fullscreen Mode',
  render: () => html`
    <div
      style="
      position: relative;
      width: 100%;
      height: 400px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Page Content</h3>
        <p>This represents a full page of content.</p>
        <p>The spinner will cover this entire area.</p>
      </div>

      <gds-spinner
        .fullscreen=${true}
        text="Loading application..."
        size="lg"
      ></gds-spinner>
    </div>
  `,
}
