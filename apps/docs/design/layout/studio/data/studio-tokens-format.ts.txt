export default {
  name: 'json/studio-tokens',
  format: function () {
    const output = {
      $metadata: {
        tokenSetOrder: [
          'colors',
          'typography',
          'spacing',
          'radius',
          'shadows',
          'viewport',
          'motion',
        ],
      },
      tokens: {
        colors: {
          background: {
            L1: [
              {
                token: 'neutral-01',
                variable: 'var(--gds-sys-color-l1-neutral-01)',
                value: {
                  light: {
                    value: '#ffffff',
                    alpha: 1,
                  },
                  dark: {
                    value: '#0a0b0b',
                    alpha: 1,
                  },
                },
              },
              {
                token: 'neutral-02',
                variable: 'var(--gds-sys-color-l1-neutral-02)',
                value: {
                  light: '#eaebeb',
                  dark: '#282a29',
                },
              },
            ],
            L2: [
              {
                token: 'neutral-01',
                variable: 'var(--gds-sys-color-l2-neutral-01)',
                value: {
                  light: '#f5f5f5',
                  dark: '#1c1d1d',
                },
              },
            ],
          },
          border: [
            {
              token: 'neutral-01',
              variable: 'var(--gds-sys-color-border-neutral-01)',
              value: {
                light: '#d1d3d3',
                dark: '#404040',
              },
            },
          ],
          state: [
            {
              token: 'hover-01',
              variable: 'var(--gds-sys-color-state-hover-01)',
              value: {
                light: '#00000033',
                dark: '#ffffff33',
                alpha: '',
              },
            },
          ],
        },
        typography: [
          {
            token: 'heading-xl',
            variable: 'var(--gds-sys-text-heading-xl)',
            value: {
              fontFamily: 'SEB Sans Serif',
              fontSize: '32px',
              lineHeight: '44px',
              fontWeight: '450',
            },
          },
        ],
        spacing: [
          {
            token: 'xs',
            variable: 'var(--gds-sys-space-xs)',
            value: '4px',
          },
          {
            token: 's',
            variable: 'var(--gds-sys-space-s)',
            value: '8px',
          },
        ],
        radius: [
          {
            token: 'none',
            variable: 'var(--gds-sys-radius-none)',
            value: '0',
          },
          {
            token: 's',
            variable: 'var(--gds-sys-radius-s)',
            value: '4px',
          },
        ],
        shadows: [
          {
            token: 's',
            variable: 'var(--gds-sys-shadow-s-01), var(--gds-sys-shadow-s-02)',
            value: '0px 0px 2px 0px #060D1314',
          },
        ],
        viewport: [
          {
            token: 's',
            variable: 'var(--gds-sys-viewport-s)',
            value: '430px',
          },
        ],
        motion: {
          duration: [
            {
              token: 'fastest',
              variable: 'var(--gds-sys-motion-duration-fastest)',
              value: '0.2s',
            },
          ],
          easing: [
            {
              token: 'ease-in',
              variable: 'var(--gds-sys-motion-easing-ease-in)',
              value: 'cubic-bezier(0.64, 0, 0.78, 0)',
            },
          ],
        },
      },
    }

    return JSON.stringify(output, null, 2)
  },
}
