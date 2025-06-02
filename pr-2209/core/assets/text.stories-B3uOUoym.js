import"./text-CDvyETQY.js";import"./card-C1zbrG7H.js";import"./container-BRfCRbq2.js";import"./flex-DqgnLVUU.js";import"./divider-D8gQs4gA.js";import{x as e}from"./lit-element-Bx14lxc-.js";import{a as he}from"./argTableProps-65wyx-i6.js";import"./text.component-CpYv9ler.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./static-B8S6DEnV.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./div.component-COo6-rOq.js";import"./card.component-a_DdskCg.js";import"./container.component-BXYWmEFJ.js";import"./flex.component-DXi-h7Ch.js";import"./custom-elements-DsZwkPK1.js";const Ue={title:"Components/Text",component:"gds-text",tags:["autodocs"],argTypes:{...he("gds-text")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified.\n\n@beta"}}}},f={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...f,name:"Tags",render:t=>e`<gds-flex flex-direction="column" gap="2xl">
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
    </gds-flex>`},g={...f,name:"Weight",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text font-weight="bold">Bold (700)</gds-text>
      <gds-text font-weight="medium">Medium (500)</gds-text>
      <gds-text font-weight="book">Book (450)</gds-text>
      <gds-text font-weight="regular">Regular (400)</gds-text>
      <gds-text font-weight="light">Light (300)</gds-text>
    </gds-flex>`},d={name:"Heading",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-2xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  `},x={name:"Detail",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">detail-xs</gds-text>
      <gds-text font-size="detail-s">detail-s</gds-text>
      <gds-text font-size="detail-m">detail-m"</gds-text>
    </gds-flex>
  `},m={name:"Body",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">body-s</gds-text>
      <gds-text font-size="body-m">body-m</gds-text>
      <gds-text font-size="body-l">body-l</gds-text>
    </gds-flex>
  `},c={name:"Display",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">display-s</gds-text>
      <gds-text font-size="display-m">display-m</gds-text>
      <gds-text font-size="display-l">display-l</gds-text>
      <gds-text font-size="display-xl">display-xl</gds-text>
      <gds-text font-size="display-2xl">display-2xl</gds-text>
    </gds-flex>
  `},p={name:"Preamble",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">preamble-xs</gds-text>
      <gds-text font-size="preamble-s">preamble-s</gds-text>
      <gds-text font-size="preamble-m">preamble-m</gds-text>
      <gds-text font-size="preamble-l">preamble-l</gds-text>
      <gds-text font-size="preamble-xl">preamble-xl</gds-text>
      <gds-text font-size="preamble-2xl">preamble-2xl</gds-text>
    </gds-flex>
  `},o={name:"Color",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="primary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="primary" font-size="body-s">
            Color: Content Primary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="secondary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="secondary" font-size="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="tertiary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="tertiary" font-size="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `},n={...f,name:"Decoration",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>`},i={name:"Line Clamp",render:t=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:2</gds-text>
        <gds-text font-size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:3</gds-text>
        <gds-text font-size="display-m" lines="3">
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
        <gds-text font-size="body-s">Lines:4</gds-text>
        <gds-text font-size="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `},r={name:"text-wrap",render:t=>e`
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
  `},a={name:"overflow-wrap",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Normal</gds-text>
        <gds-text overflow-wrap="normal" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Anywhere</gds-text>
        <gds-text overflow-wrap="anywhere" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Break Word</gds-text>
        <gds-text overflow-wrap="break-word" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `},l={name:"white-space",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">normal</gds-text>
        <gds-text white-space="normal" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre</gds-text>
        <gds-text white-space="pre" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre-wrap</gds-text>
        <gds-text white-space="pre" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-text>Shorthand</gds-text>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">wrap</gds-text>
        <gds-text white-space="wrap" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">collapse</gds-text>
        <gds-text white-space="collapse" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">preserve nowrap</gds-text>
        <gds-text white-space="preserve nowrap" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `};var u,h,w,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:"The `tag` property controls the inner element tag name.\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nDepending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.\n\nThe default tag is `span` and the default size is `body-m`",...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var z,v,k;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Weight',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      <gds-text font-weight="bold">Bold (700)</gds-text>
      <gds-text font-weight="medium">Medium (500)</gds-text>
      <gds-text font-weight="book">Book (450)</gds-text>
      <gds-text font-weight="regular">Regular (400)</gds-text>
      <gds-text font-weight="light">Light (300)</gds-text>
    </gds-flex>\`
}`,...(k=(v=g.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var T,L,S,H,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Heading',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-2xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  \`
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:'> Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.\n> For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.\n> However, the `size` property can still be used to override the default size if needed.\n> This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.',...(B=(H=d.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var C,q,M;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">detail-xs</gds-text>
      <gds-text font-size="detail-s">detail-s</gds-text>
      <gds-text font-size="detail-m">detail-m"</gds-text>
    </gds-flex>
  \`
}`,...(M=(q=x.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var D,A,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">body-s</gds-text>
      <gds-text font-size="body-m">body-m</gds-text>
      <gds-text font-size="body-l">body-l</gds-text>
    </gds-flex>
  \`
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var P,U,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">display-s</gds-text>
      <gds-text font-size="display-m">display-m</gds-text>
      <gds-text font-size="display-l">display-l</gds-text>
      <gds-text font-size="display-xl">display-xl</gds-text>
      <gds-text font-size="display-2xl">display-2xl</gds-text>
    </gds-flex>
  \`
}`,...(O=(U=c.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var E,R,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Preamble',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">preamble-xs</gds-text>
      <gds-text font-size="preamble-s">preamble-s</gds-text>
      <gds-text font-size="preamble-m">preamble-m</gds-text>
      <gds-text font-size="preamble-l">preamble-l</gds-text>
      <gds-text font-size="preamble-xl">preamble-xl</gds-text>
      <gds-text font-size="preamble-2xl">preamble-2xl</gds-text>
    </gds-flex>
  \`
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var I,N,_,j,G;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Color',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="primary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="primary" font-size="body-s">
            Color: Content Primary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="secondary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="secondary" font-size="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="tertiary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="tertiary" font-size="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  \`
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:'The `color` property that will change the text color based on the specified color token.\n\ne.g. `<gds-text level="1" color="primary"></gds-text>`',...(G=(j=o.parameters)==null?void 0:j.docs)==null?void 0:G.description}}};var J,K,Q,V,X;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=n.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:'The `text-decoration` property will change the text decoration based on the css values such as `underline`, `overline`, `line-through`, `underline dotted`, `{COLOR} wavy underline` etc.\n\n\ne.g.\n\n```html\n<gds-text\n   text-decoration="currentcolor wavy underline"\n >\n   Wavy Underline\n </gds-text>\n```',...(X=(V=n.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Y,Z,$,ee,te;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Line Clamp',
  render: args => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:2</gds-text>
        <gds-text font-size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:3</gds-text>
        <gds-text font-size="display-m" lines="3">
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
        <gds-text font-size="body-s">Lines:4</gds-text>
        <gds-text font-size="display-l" lines="4">
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
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(te=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var se,de,oe,ne,ie;r.parameters={...r.parameters,docs:{...(se=r.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(de=r.parameters)==null?void 0:de.docs)==null?void 0:oe.source},description:{story:'Check the documentation on `text-wrap` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)\n\nThe `text-wrap` property will change the text wrapping behavior based on the css values such as `wrap`, `nowrap`, `pretty`, `balance`, `stable`.\n\ne.g.\n\n```html\n<gds-text text-wrap="pretty">\n   ...\n</gds-text>\n```',...(ie=(ne=r.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var re,ae,le,ge,xe;a.parameters={...a.parameters,docs:{...(re=a.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'overflow-wrap',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Normal</gds-text>
        <gds-text overflow-wrap="normal" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Anywhere</gds-text>
        <gds-text overflow-wrap="anywhere" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Break Word</gds-text>
        <gds-text overflow-wrap="break-word" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...(le=(ae=a.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:'Check the documentation on `text-overflow` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)\n\nThe `text-overflow` property will change the text overflow behavior based on the css values such as `clip`, `ellipsis`, `string`.\n\ne.g.\n\n```html\n<gds-text overflow-wrap="break-word">\n   ...\n</gds-text>\n```',...(xe=(ge=a.parameters)==null?void 0:ge.docs)==null?void 0:xe.description}}};var me,ce,pe,fe,ue;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'white-space',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">normal</gds-text>
        <gds-text white-space="normal" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre</gds-text>
        <gds-text white-space="pre" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre-wrap</gds-text>
        <gds-text white-space="pre" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-text>Shorthand</gds-text>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">wrap</gds-text>
        <gds-text white-space="wrap" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">collapse</gds-text>
        <gds-text white-space="collapse" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">preserve nowrap</gds-text>
        <gds-text white-space="preserve nowrap" font-size="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  \`
}`,...(pe=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:'Check the documentation on `white-space` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)\n\nThe `white-space` supports all valid CSS `white-space` values such as `wrap` `collapse` or combined `preserve nowrap` etc.\n\ne.g.\n\n```html\n<gds-text white-space="pre-wrap">\n   ...\n</gds-text>\n```',...(ue=(fe=l.parameters)==null?void 0:fe.docs)==null?void 0:ue.description}}};const Oe=["Tags","Weight","Heading","Detail","Body","Display","Preamble","Color","Decoration","Lines","TextWrap","OverflowWrap","WhiteSpace"];export{m as Body,o as Color,n as Decoration,x as Detail,c as Display,d as Heading,i as Lines,a as OverflowWrap,p as Preamble,s as Tags,r as TextWrap,g as Weight,l as WhiteSpace,Oe as __namedExportsOrder,Ue as default};
