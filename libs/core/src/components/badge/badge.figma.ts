import figma, { html } from '@figma/code-connect/html'

figma.connect(
  'https://www.figma.com/design/56EvebfAdgA7JaDIldZAFK/Green-Design-System?node-id=4780-6005&t=GoP2Nr9edEG4JocW-4',
  {
    props: {
      statusText: figma.string('Status text'),
      variant: figma.enum('Variant', {
        Information: 'information',
        Positive: 'positive',
        Warning: 'warning',
        Negative: 'negative',
        Notice: 'notice',
      }),
      icon: figma.boolean('Icon'),
    },
    example: ({
      variant,
      statusText,
    }: {
      variant: string
      statusText: string
    }) => html` <gds-badge variant=${variant}> ${statusText} </gds-badge>`,
  },
)
