// gds-spinner.stories.ts
import { html } from 'lit'
import { ifDefined } from 'lit-html/directives/if-defined.js'
import { Meta, StoryObj } from '@storybook/web-components'

import { GdsSpinner } from './gds-spinner'

import './gds-spinner'
import '../div'
import '../flex'
import '../text'
import '../card'
import '../theme'
import '../button'

/**
 * A loading indicator component that supports various sizes and display modes.
 *
 * @status beta
 *
 * ## Features
 * - Multiple sizes (sm, md, lg)
 * - Optional text label
 * - Container cover mode
 * - Fullscreen mode
 * - Accessibility support
 * - Light/dark theme support
 */
const meta: Meta<GdsSpinner> = {
  title: 'Components/Spinner',
  component: 'gds-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Loading text for the spinner',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to display the label text visibly',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    cover: {
      control: 'boolean',
      description: 'Cover parent container with backdrop',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullscreen: {
      control: 'boolean',
      description: 'Cover entire viewport',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<GdsSpinner>

export const Playground: Story = {
  args: {
    size: 'md',
    label: 'Loading...',
    showLabel: true,
    cover: false,
    fullscreen: false,
  },
  render: (args) => html`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=${args.size}
        label=${ifDefined(args.label)}
        ?showLabel=${args.showLabel}
        ?cover=${args.cover}
        ?fullscreen=${args.fullscreen}
      ></gds-spinner>
    </gds-card>
  `,
}

// Size variants
export const Sizes: Story = {
  name: 'Size Variants',
  render: () => html`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm"></gds-spinner>
        <gds-text tag="p" margin-top="m">Small</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="default"></gds-spinner>
        <gds-text tag="p" margin-top="m">Default</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">Medium</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg"></gds-spinner>
        <gds-text tag="p" margin-top="m">Large</gds-text>
      </gds-div>
    </gds-flex>
  `,
}

// Label Options
export const LabelOptions: Story = {
  name: 'Label Options',
  render: () => html`
    <gds-flex gap="4xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Visible Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Hidden Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">No Label</gds-text>
      </gds-div>
    </gds-flex>
  `,
}

// Container cover mode
export const Cover: Story = {
  name: 'Container Cover',
  render: () => html`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </gds-card>
  `,
}

// Fullscreen mode - demonstrated in a container
export const Fullscreen: Story = {
  name: 'Fullscreen Mode',
  render: () => {
    // Function to handle the toggle
    const handleToggle = (e: Event) => {
      const iframe = document.getElementById(
        'fullscreen-demo-iframe',
      ) as HTMLIFrameElement
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('toggle-overlay', '*')
      }
    }

    // Register the event listener after the component has rendered
    setTimeout(() => {
      const toggleBtn = document.getElementById('external-toggle')
      if (toggleBtn) {
        toggleBtn.addEventListener('click', handleToggle)
      }
    }, 100)

    return html`
      <gds-div>
        <gds-text tag="h3">Fullscreen Mode Demo</gds-text>
        <gds-text tag="p">
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </gds-text>

        <!-- Toggle button outside the iframe -->
        <gds-div margin-bottom="s">
          <gds-button id="external-toggle" padding="s m">
            Toggle Fullscreen Spinner
          </gds-button>
        </gds-div>

        <gds-card
          position="relative"
          width="600px"
          height="400px"
          border-radius="xs"
          overflow="hidden"
          level="1"
        >
          <iframe
            id="fullscreen-demo-iframe"
            width="100%"
            height="100%"
            frameborder="0"
            srcdoc="
              <html>
                <head>
                  <style>
                    body {
                      font-family: system-ui, sans-serif;
                      padding: 20px;
                      margin: 0;
                    }
                    .fullscreen-demo {
                      position: fixed;
                      inset: 0;
                      background: rgba(0,0,0,0.8);
                      backdrop-filter: blur(2px);
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }
                    .spinner {
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      border: 4px solid rgba(200,200,200,0.5);
                      border-top-color: white;
                      animation: spin 1s linear infinite;
                    }
                    .spinner-text {
                      margin-top: 16px;
                      color: white;
                      font-size: 16px;
                    }
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                  </style>
                </head>
                <body>
                  <h2>Application Content</h2>
                  <p>This represents a full application page.</p>
                  <p>The spinner will cover this entire area when active.</p>
                  <p>Try scrolling when the overlay is active - it will be prevented.</p>

                  <div style='height: 1000px; background: linear-gradient(white, #f0f0f0);'>
                    <div style='padding: 20px;'>Scroll down to see more content...</div>
                    <div style='padding: 20px; margin-top: 400px;'>More content down here</div>
                  </div>

                  <div id='overlay' style='display: none;' class='fullscreen-demo'>
                    <div class='spinner'></div>
                    <div class='spinner-text'>Loading application...</div>
                  </div>

                  <script>
                    // Listen for messages from the parent window
                    window.addEventListener('message', function(event) {
                      if (event.data === 'toggle-overlay') {
                        const overlay = document.getElementById('overlay');
                        if (overlay.style.display === 'none') {
                          overlay.style.display = 'flex';
                          document.body.style.overflow = 'hidden';
                        } else {
                          overlay.style.display = 'none';
                          document.body.style.overflow = '';
                        }
                      }
                    });
                  </script>
                </body>
              </html>
            "
          ></iframe>
        </gds-card>
      </gds-div>
    `
  },
}

// Theme mode demo
export const ThemeModes: Story = {
  name: 'Light & Dark Theme',
  render: (args, { context }) => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container')
      if (demo) {
        const isDark = demo.getAttribute('color-scheme') === 'dark'
        if (isDark) {
          demo.setAttribute('color-scheme', 'light')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme'
        } else {
          demo.setAttribute('color-scheme', 'dark')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Light Theme'
        }
      }
    }

    return html`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${context.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=${handleThemeToggle}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner size="md"></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner
                  size="md"
                  label="Loading..."
                  showLabel
                ></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
                <gds-text margin="0" color="primary">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `
  },
}
