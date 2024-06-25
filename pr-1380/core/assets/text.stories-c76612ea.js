import"./card-d8eee651.js";import"./container-1fecebce.js";import"./text-40f0bbf6.js";import{x as e}from"./lit-element-2a5e401f.js";import"./gds-element-4f5906f2.js";import"./Reflect-a49e984a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-6bc9b0c8.js";import"./style-expression-property-0e3e1bae.js";import"./watch-c4961afe.js";const q={title:"Components/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-text`\n\n## Usage"}}}},B={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["label-overline","label-input-medium","label-input-large","label-information-medium","label-information-large","label-small","label-medium","label-large","body-small","body-medium","body-large","title-small","title-medium","title-large","headline-small","headline-medium","headline-large","display-small","display-medium","display-large"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...B,name:"Tags",render:t=>e`<gds-container display="flex" direction="column" gap="m">
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
    </gds-container>`},a={name:"Labels",render:t=>e`
    <gds-container display="flex" direction="column" gap="m">
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
    </gds-container>
  `},d={name:"Body",render:t=>e`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="body-small">Body: Small</gds-text>
      <gds-text size="body-medium">Body: Medium</gds-text>
      <gds-text size="body-large:">Body: Large</gds-text>
    </gds-container>
  `},n={name:"Title",render:t=>e`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="title-small">Title: Small</gds-text>
      <gds-text size="title-medium">Title: Medium</gds-text>
      <gds-text size="title-large:">Title: Large</gds-text>
    </gds-container>
  `},i={name:"Headline",render:t=>e`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="headline-small">Headline: Small</gds-text>
      <gds-text size="headline-medium">Headline: Medium</gds-text>
      <gds-text size="headline-large:">Headline: Large</gds-text>
    </gds-container>
  `},l={name:"Display",render:t=>e`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="display-small">Display: Small</gds-text>
      <gds-text size="display-medium">Display: Medium</gds-text>
      <gds-text size="display-large:">Display: Large</gds-text>
    </gds-container>
  `};var r,g,o,m,x;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Tags',
  render: args => html\`<gds-container display="flex" direction="column" gap="m">
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
    </gds-container>\`
}`,...(o=(g=s.parameters)==null?void 0:g.docs)==null?void 0:o.source},description:{story:"# Headings\n\nIn order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nTag: h1, h2, h3, h4, h5, h6, p, span, em, mark, strong etc.\n\n#### The defualt tag is `p` and the defualt size is `body-medium`",...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Labels',
  render: args => html\`
    <gds-container display="flex" direction="column" gap="m">
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
    </gds-container>
  \`
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var y,h,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="body-small">Body: Small</gds-text>
      <gds-text size="body-medium">Body: Medium</gds-text>
      <gds-text size="body-large:">Body: Large</gds-text>
    </gds-container>
  \`
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var z,f,L;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Title',
  render: args => html\`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="title-small">Title: Small</gds-text>
      <gds-text size="title-medium">Title: Medium</gds-text>
      <gds-text size="title-large:">Title: Large</gds-text>
    </gds-container>
  \`
}`,...(L=(f=n.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var H,S,I;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Headline',
  render: args => html\`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="headline-small">Headline: Small</gds-text>
      <gds-text size="headline-medium">Headline: Medium</gds-text>
      <gds-text size="headline-large:">Headline: Large</gds-text>
    </gds-container>
  \`
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,M,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-container display="flex" direction="column" gap="m">
      <gds-text size="display-small">Display: Small</gds-text>
      <gds-text size="display-medium">Display: Medium</gds-text>
      <gds-text size="display-large:">Display: Large</gds-text>
    </gds-container>
  \`
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const A=["Card","Size","Body","Title","Headline","Display"];export{d as Body,s as Card,l as Display,i as Headline,a as Size,n as Title,A as __namedExportsOrder,q as default};
