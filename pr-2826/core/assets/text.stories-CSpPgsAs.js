import"./text-DrF2nVoG.js";import"./card-iCC4NxkI.js";import"./div-EZxGYZYY.js";import"./flex-BAN0r9E4.js";import"./divider-_mk2Td_r.js";import{b as e}from"./iframe-DX1nX-Km.js";import{a as c}from"./argTableProps-DMmoMgv3.js";import"./text.component-D4oaXRYE.js";import"./default-typography.styles-B8qii3yw.js";import"./card.component-BdGe1mAX.js";import"./flex.component-DD6Mxhry.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Components/Text",component:"gds-text",tags:["autodocs"],argTypes:{...c("gds-text")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified."}}}},x={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...x,name:"Font",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text font="display-l">display-l</gds-text>
      <gds-text font="body-m-regular">body-m-regular</gds-text>
      <gds-text font="detail-s-regular">detail-s-regular</gds-text>
    </gds-flex>`},d={...x,name:"Tags",render:t=>e`<gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Span ( Default )</gds-text>
        <gds-text tag="p">Paragraph </gds-text>
        <gds-text tag="em">Em</gds-text>
        <gds-text tag="mark">Mark</gds-text>
        <gds-text tag="strong">strong</gds-text>
        <gds-text tag="small">small</gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="h1">H1</gds-text>
        <gds-text tag="h2">H2</gds-text>
        <gds-text tag="h3">H3</gds-text>
        <gds-text tag="h4">H4</gds-text>
        <gds-text tag="h5">H5</gds-text>
        <gds-text tag="h6">H6</gds-text>
      </gds-flex>
    </gds-flex>`},o={name:"Heading",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  `},n={name:"Color",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="neutral-01"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-01" font="body-s">
            Color: Content 01
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-02"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-02" font="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-03"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-03" font="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `},r={...x,name:"Decoration",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>`},a={name:"Line Clamp",render:t=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:2</gds-text>
        <gds-text font="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:3</gds-text>
        <gds-text font="display-m" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:4</gds-text>
        <gds-text font="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `},i={name:"text-wrap",render:t=>e`
    <gds-flex flex-direction="column" gap="m" width="250px">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary"><code>wrap</code></gds-text>
        <gds-text text-wrap="wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">nowrap</gds-text>
        <gds-text text-wrap="nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">pretty</gds-text>
        <gds-text text-wrap="pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">balance</gds-text>
        <gds-text text-wrap="balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">stable</gds-text>
        <gds-text text-wrap="stable">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `},l={name:"overflow-wrap",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Normal</gds-text>
        <gds-text overflow-wrap="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Anywhere</gds-text>
        <gds-text overflow-wrap="anywhere" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Break Word</gds-text>
        <gds-text overflow-wrap="break-word" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `},g={name:"white-space",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">normal</gds-text>
        <gds-text white-space="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre-wrap</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-text>Shorthand</gds-text>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">wrap</gds-text>
        <gds-text white-space="wrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">collapse</gds-text>
        <gds-text white-space="collapse" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">preserve nowrap</gds-text>
        <gds-text white-space="preserve nowrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Font',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      <gds-text font="display-l">display-l</gds-text>
      <gds-text font="body-m-regular">body-m-regular</gds-text>
      <gds-text font="detail-s-regular">detail-s-regular</gds-text>
    </gds-flex>\`
}`,...s.parameters?.docs?.source},description:{story:"The `font` property controls the font style based on design tokens.\n\nFor all available font tokens, check out the [Studio on seb.io](https://seb.io/studio/typography)",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Tags',
  render: args => html\`<gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Span ( Default )</gds-text>
        <gds-text tag="p">Paragraph </gds-text>
        <gds-text tag="em">Em</gds-text>
        <gds-text tag="mark">Mark</gds-text>
        <gds-text tag="strong">strong</gds-text>
        <gds-text tag="small">small</gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="h1">H1</gds-text>
        <gds-text tag="h2">H2</gds-text>
        <gds-text tag="h3">H3</gds-text>
        <gds-text tag="h4">H4</gds-text>
        <gds-text tag="h5">H5</gds-text>
        <gds-text tag="h6">H6</gds-text>
      </gds-flex>
    </gds-flex>\`
}`,...d.parameters?.docs?.source},description:{story:"The `tag` property controls the inner element tag name.\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nDepending on which tag you use, different default styles will be applied. Style can be overridden using the `font`, `font-weight` and other style expression properties.\n\nThe default tag is `span` and the default size is `body-m`",...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Heading',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:'> Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.\n> For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.\n> However, the `size` property can still be used to override the default size if needed.\n> This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.',...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Color',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="neutral-01"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-01" font="body-s">
            Color: Content 01
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-02"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-02" font="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-03"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-03" font="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source},description:{story:'The `color` property that will change the text color based on the specified color token.\n\ne.g. `<gds-text level="1" color="neutral-01"></gds-text>`',...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Decoration',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>\`
}`,...r.parameters?.docs?.source},description:{story:'The `text-decoration` property will change the text decoration based on the css values such as `underline`, `overline`, `line-through`, `underline dotted`, `{COLOR} wavy underline` etc.\n\n\ne.g.\n\n```html\n<gds-text\n   text-decoration="currentcolor wavy underline"\n >\n   Wavy Underline\n </gds-text>\n```',...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Line Clamp',
  render: args => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:2</gds-text>
        <gds-text font="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:3</gds-text>
        <gds-text font="display-m" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:4</gds-text>
        <gds-text font="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...a.parameters?.docs?.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'text-wrap',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m" width="250px">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary"><code>wrap</code></gds-text>
        <gds-text text-wrap="wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">nowrap</gds-text>
        <gds-text text-wrap="nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">pretty</gds-text>
        <gds-text text-wrap="pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">balance</gds-text>
        <gds-text text-wrap="balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">stable</gds-text>
        <gds-text text-wrap="stable">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source},description:{story:'Check the documentation on `text-wrap` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)\n\nThe `text-wrap` property will change the text wrapping behavior based on the css values such as `wrap`, `nowrap`, `pretty`, `balance`, `stable`.\n\ne.g.\n\n```html\n<gds-text text-wrap="pretty">\n   ...\n</gds-text>\n```',...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'overflow-wrap',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Normal</gds-text>
        <gds-text overflow-wrap="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Anywhere</gds-text>
        <gds-text overflow-wrap="anywhere" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Break Word</gds-text>
        <gds-text overflow-wrap="break-word" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...l.parameters?.docs?.source},description:{story:'Check the documentation on `text-overflow` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)\n\nThe `text-overflow` property will change the text overflow behavior based on the css values such as `clip`, `ellipsis`, `string`.\n\ne.g.\n\n```html\n<gds-text overflow-wrap="break-word">\n   ...\n</gds-text>\n```',...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'white-space',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">normal</gds-text>
        <gds-text white-space="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre-wrap</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-text>Shorthand</gds-text>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">wrap</gds-text>
        <gds-text white-space="wrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">collapse</gds-text>
        <gds-text white-space="collapse" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">preserve nowrap</gds-text>
        <gds-text white-space="preserve nowrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...g.parameters?.docs?.source},description:{story:'Check the documentation on `white-space` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)\n\nThe `white-space` supports all valid CSS `white-space` values such as `wrap` `collapse` or combined `preserve nowrap` etc.\n\ne.g.\n\n```html\n<gds-text white-space="pre-wrap">\n   ...\n</gds-text>\n```',...g.parameters?.docs?.description}}};const H=["Font","Tags","Heading","Color","Decoration","Lines","TextWrap","OverflowWrap","WhiteSpace"];export{n as Color,r as Decoration,s as Font,o as Heading,a as Lines,l as OverflowWrap,d as Tags,i as TextWrap,g as WhiteSpace,H as __namedExportsOrder,S as default};
