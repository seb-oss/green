import"./text-82b4f2ef.js";import"./card-03c2d9cc.js";import"./flex-8ee48756.js";import"./divider-4ed57d17.js";import{x as e}from"./lit-element-2a5e401f.js";import"./gds-element-24e794df.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-f52cb050.js";import"./style-expression-property-45d22dc5.js";import"./watch-c4961afe.js";const N={title:"Docs/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-text`\n\n## Usage"}}}},P={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["label-overline","label-input-medium","label-input-large","label-information-medium","label-information-large","label-small","label-medium","label-large","body-small","body-medium","body-large","title-small","title-medium","title-large","headline-small","headline-medium","headline-large","display-small","display-medium","display-large"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...P,name:"Tags",render:t=>e`<gds-flex direction="column" gap="m">
      <gds-text tag="h1">H1</gds-text>
      <gds-text tag="h2">H2</gds-text>
      <gds-text tag="h3">H3</gds-text>
      <gds-text tag="h4">H4</gds-text>
      <gds-text tag="h5">H5</gds-text>
      <gds-text tag="h6">H6</gds-text>
      <gds-text>Paragraph</gds-text>
      <gds-text tag="span">Span</gds-text>
      <gds-text tag="em">Em</gds-text>
      <gds-text tag="mark">Mark</gds-text>
      <gds-text tag="strong">strong</gds-text>
    </gds-flex>`},i={name:"Labels",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="label-overline">Label: Overline</gds-text>
      <gds-text size="label-input-medium">Label: Input Medium</gds-text>
      <gds-text size="label-input-large">Label: Input Large</gds-text>
      <gds-text size="label-information-medium"
        >Label: Input Information Medium</gds-text
      >
      <gds-text size="label-information-large"
        >Label: Input Information Large</gds-text
      >
      <gds-text size="label-small">Label: Input Small</gds-text>
      <gds-text size="label-medium">Label: Input Medium</gds-text>
      <gds-text size="label-large:">Label: Input Large</gds-text>
    </gds-flex>
  `},a={name:"Body",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-small">Body: Small</gds-text>
      <gds-text size="body-medium">Body: Medium</gds-text>
      <gds-text size="body-large:">Body: Large</gds-text>
    </gds-flex>
  `},n={name:"Title",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-small">Title: Small</gds-text>
      <gds-text size="title-medium">Title: Medium</gds-text>
      <gds-text size="title-large:">Title: Large</gds-text>
    </gds-flex>
  `},l={name:"Headline",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-small">Headline: Small</gds-text>
      <gds-text size="headline-medium">Headline: Medium</gds-text>
      <gds-text size="headline-large:">Headline: Large</gds-text>
    </gds-flex>
  `},r={name:"Display",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-small">Display: Small</gds-text>
      <gds-text size="display-medium">Display: Medium</gds-text>
      <gds-text size="display-large:">Display: Large</gds-text>
    </gds-flex>
  `},d={name:"Line Clamp",render:t=>e`
    <gds-flex direction="column" gap="2xl">
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:2</gds-text>
        <gds-text size="display-small" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:3</gds-text>
        <gds-text size="display-medium" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:4</gds-text>
        <gds-text size="display-large:" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `};var o,g,m,x,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Tags',
  render: args => html\`<gds-flex direction="column" gap="m">
      <gds-text tag="h1">H1</gds-text>
      <gds-text tag="h2">H2</gds-text>
      <gds-text tag="h3">H3</gds-text>
      <gds-text tag="h4">H4</gds-text>
      <gds-text tag="h5">H5</gds-text>
      <gds-text tag="h6">H6</gds-text>
      <gds-text>Paragraph</gds-text>
      <gds-text tag="span">Span</gds-text>
      <gds-text tag="em">Em</gds-text>
      <gds-text tag="mark">Mark</gds-text>
      <gds-text tag="strong">strong</gds-text>
    </gds-flex>\`
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:"# Headings\n\nIn order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nTag: h1, h2, h3, h4, h5, h6, p, span, em, mark, strong etc.\n\n#### The defualt tag is `p` and the defualt size is `body-medium`",...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.description}}};var u,c,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Labels',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="label-overline">Label: Overline</gds-text>
      <gds-text size="label-input-medium">Label: Input Medium</gds-text>
      <gds-text size="label-input-large">Label: Input Large</gds-text>
      <gds-text size="label-information-medium"
        >Label: Input Information Medium</gds-text
      >
      <gds-text size="label-information-large"
        >Label: Input Information Large</gds-text
      >
      <gds-text size="label-small">Label: Input Small</gds-text>
      <gds-text size="label-medium">Label: Input Medium</gds-text>
      <gds-text size="label-large:">Label: Input Large</gds-text>
    </gds-flex>
  \`
}`,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-small">Body: Small</gds-text>
      <gds-text size="body-medium">Body: Medium</gds-text>
      <gds-text size="body-large:">Body: Large</gds-text>
    </gds-flex>
  \`
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,L,H;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Title',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-small">Title: Small</gds-text>
      <gds-text size="title-medium">Title: Medium</gds-text>
      <gds-text size="title-large:">Title: Large</gds-text>
    </gds-flex>
  \`
}`,...(H=(L=n.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var S,I,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Headline',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-small">Headline: Small</gds-text>
      <gds-text size="headline-medium">Headline: Medium</gds-text>
      <gds-text size="headline-large:">Headline: Large</gds-text>
    </gds-flex>
  \`
}`,...(v=(I=l.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var T,M,q;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-small">Display: Small</gds-text>
      <gds-text size="display-medium">Display: Medium</gds-text>
      <gds-text size="display-large:">Display: Large</gds-text>
    </gds-flex>
  \`
}`,...(q=(M=r.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var D,w,B,k,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Line Clamp',
  render: args => html\`
    <gds-flex direction="column" gap="2xl">
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:2</gds-text>
        <gds-text size="display-small" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:3</gds-text>
        <gds-text size="display-medium" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:4</gds-text>
        <gds-text size="display-large:" lines="4">
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
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};const Q=["Card","Size","Body","Title","Headline","Display","Lines"];export{a as Body,s as Card,r as Display,l as Headline,d as Lines,i as Size,n as Title,Q as __namedExportsOrder,N as default};
