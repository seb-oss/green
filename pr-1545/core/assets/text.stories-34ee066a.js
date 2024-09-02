import"./text-8c7adfe7.js";import"./card-cc5f02a5.js";import"./flex-521a9c9a.js";import"./divider-ce7c39d4.js";import{x as e}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-5dcc1eb8.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";const $={title:"Docs/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-text`\n\n## Usage"}}}},U={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["headline-xl","headline-l","headline-m","headline-s","title-l","title-m","title-s","detail-m","detail-s","detail-xs","body-l","body-m","body-s","display-2xl","display-xl","display-l","display-m","display-s ","preamble-2xl","preamble-xl","preamble-l","preamble-m","preamble-s","preamble-xs"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...U,name:"Tags",render:t=>e`<gds-flex direction="column" gap="m">
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
    </gds-flex>`},i={...U,name:"Weight",render:t=>e`<gds-flex direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>`},a={name:"Headline",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-s">Headline Small</gds-text>
      <gds-text size="headline-m">Headline Medium</gds-text>
      <gds-text size="headline-l">Headline Large</gds-text>
      <gds-text size="headline-xl">Headline Extra Large</gds-text>
    </gds-flex>
  `},r={name:"Title",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-s">Title Small</gds-text>
      <gds-text size="title-m">Title Medium</gds-text>
      <gds-text size="title-l">Title Large</gds-text>
    </gds-flex>
  `},n={name:"Detail",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `},l={name:"Body",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-s">Body Small</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-l">Body Large</gds-text>
    </gds-flex>
  `},g={name:"Display",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-s">Display Small</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `},o={name:"Preamble",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text size="preamble-s">Preamble Small</gds-text>
      <gds-text size="preamble-m">Preamble Medium</gds-text>
      <gds-text size="preamble-l">Preamble Large</gds-text>
      <gds-text size="preamble-xl">Preamble XL</gds-text>
      <gds-text size="preamble-2xl">Preamble 2XL</gds-text>
    </gds-flex>
  `},d={name:"Line Clamp",render:t=>e`
    <gds-flex direction="column" gap="2xl">
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:2</gds-text>
        <gds-text size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:3</gds-text>
        <gds-text size="display-m" lines="3">
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
        <gds-text tag="h2" size="body-s">Lines:4</gds-text>
        <gds-text size="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `};var m,x,p,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source},description:{story:"# Headings\n\nIn order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nTag: h1, h2, h3, h4, h5, h6, p, span, em, mark, strong etc.\n\n#### The defualt tag is `p` and the defualt size is `body-medium`",...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.description}}};var h,y,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Weight',
  render: args => html\`<gds-flex direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>\`
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,z,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Headline',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-s">Headline Small</gds-text>
      <gds-text size="headline-m">Headline Medium</gds-text>
      <gds-text size="headline-l">Headline Large</gds-text>
      <gds-text size="headline-xl">Headline Extra Large</gds-text>
    </gds-flex>
  \`
}`,...(L=(z=a.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var D,S,H;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Title',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-s">Title Small</gds-text>
      <gds-text size="title-m">Title Medium</gds-text>
      <gds-text size="title-l">Title Large</gds-text>
    </gds-flex>
  \`
}`,...(H=(S=r.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var P,w,T;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  \`
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var M,q,v;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-s">Body Small</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-l">Body Large</gds-text>
    </gds-flex>
  \`
}`,...(v=(q=l.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var B,k,E;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-s">Display Small</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  \`
}`,...(E=(k=g.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var X,C,W;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Preamble',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text size="preamble-s">Preamble Small</gds-text>
      <gds-text size="preamble-m">Preamble Medium</gds-text>
      <gds-text size="preamble-l">Preamble Large</gds-text>
      <gds-text size="preamble-xl">Preamble XL</gds-text>
      <gds-text size="preamble-2xl">Preamble 2XL</gds-text>
    </gds-flex>
  \`
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var I,R,_,j,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Line Clamp',
  render: args => html\`
    <gds-flex direction="column" gap="2xl">
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:2</gds-text>
        <gds-text size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:3</gds-text>
        <gds-text size="display-m" lines="3">
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
        <gds-text tag="h2" size="body-s">Lines:4</gds-text>
        <gds-text size="display-l" lines="4">
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
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(O=(j=d.parameters)==null?void 0:j.docs)==null?void 0:O.description}}};const ee=["Card","Weight","Headline","Title","Detail","Body","Display","Preamble","Lines"];export{l as Body,s as Card,n as Detail,g as Display,a as Headline,d as Lines,o as Preamble,r as Title,i as Weight,ee as __namedExportsOrder,$ as default};
