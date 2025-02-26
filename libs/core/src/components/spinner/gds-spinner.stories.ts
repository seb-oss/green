// gds-spinner.stories.ts
import { html } from 'lit'
import { ifDefined } from 'lit-html/directives/if-defined.js'
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

          ## Features
          - Multiple sizes (sm, md, lg)
          - Optional text label
          - Container cover mode
          - Fullscreen mode
          - Accessibility support
          - Light/dark theme support
        `,
      },
    },
  },
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

// Basic playground with all controls
export const Playground: Story = {
  args: {
    size: 'md',
    label: 'Loading...',
    showLabel: true,
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
        size=${args.size}
        label=${ifDefined(args.label)}
        ?showLabel=${args.showLabel}
        ?cover=${args.cover}
        ?fullscreen=${args.fullscreen}
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

// Label Options
export const LabelOptions: Story = {
  name: 'Label Options',
  render: () => html`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <p style="margin-top: 1rem;">Hidden Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">No Label</p>
      </div>
    </div>
  `,
}

// Container cover mode
export const Cover: Story = {
  name: 'Container Cover',
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
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </div>
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
      <div>
        <h3>Fullscreen Mode Demo</h3>
        <p>
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </p>

        <!-- Toggle button outside the iframe -->
        <button
          id="external-toggle"
          style="margin-bottom: 10px; padding: 8px 16px;"
        >
          Toggle Fullscreen Spinner
        </button>

        <div
          style="
          position: relative;
          width: 600px;
          height: 400px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          overflow: hidden;
        "
        >
          <iframe
            id="fullscreen-demo-iframe"
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
            style="width: 100%; height: 100%; border: none;"
          ></iframe>
        </div>

        <div style="margin-top: 20px;">
          <h4>Implementation Example:</h4>
          <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow: auto;"
          >
&lt;gds-spinner
  fullscreen
  size="lg"
  label="Loading application..."
  showLabel
&gt;&lt;/gds-spinner&gt;</pre
          >
        </div>
      </div>
    `
  },
}

// Theme mode demo
export const ThemeModes: Story = {
  name: 'Light & Dark Theme',
  render: () => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container')
      if (demo) {
        const isDark = demo.classList.contains('dark-theme')
        if (isDark) {
          demo.classList.remove('dark-theme')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme'
        } else {
          demo.classList.add('dark-theme')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Light Theme'
        }
      }
    }

    // Register the event listener after the component has rendered
    setTimeout(() => {
      const toggleBtn = document.getElementById('theme-toggle')
      if (toggleBtn) {
        toggleBtn.addEventListener('click', handleThemeToggle)
      }
    }, 100)

    return html`
      <style>
        .theme-demo {
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .theme-demo.dark-theme {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .spinner-container {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .spinner-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          border-radius: 8px;
          background-color: #f8f8f8;
          width: 180px;
        }

        .dark-theme .spinner-example {
          background-color: #2a2a2a;
        }

        .spinner-label {
          margin-top: 1rem;
          font-weight: 500;
        }

        button#theme-toggle {
          padding: 0.5rem 1rem;
          background-color: #0078d4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        button#theme-toggle:hover {
          background-color: #106ebe;
        }
      </style>

      <div id="theme-demo-container" class="theme-demo">
        <h3>Theme Mode Demonstration</h3>
        <p>The spinner automatically adapts to light and dark themes:</p>

        <button id="theme-toggle">Switch to Dark Theme</button>

        <div class="spinner-container">
          <div class="spinner-example">
            <gds-spinner size="md"></gds-spinner>
            <div class="spinner-label">Standard Spinner</div>
          </div>

          <div class="spinner-example">
            <gds-spinner size="md" label="Loading..." showLabel></gds-spinner>
            <div class="spinner-label">With Label</div>
          </div>

          <div
            class="spinner-example"
            style="position: relative; overflow: hidden;"
          >
            <div
              style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;"
            >
              <div
                style="width: 100px; height: 100px; background: #eee; border-radius: 8px;"
              ></div>
            </div>
            <gds-spinner size="md" cover></gds-spinner>
            <div class="spinner-label" style="z-index: 1;">With Cover</div>
          </div>
        </div>
      </div>
    `
  },
}
