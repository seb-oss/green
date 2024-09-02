import"./text-9238e0f2.js";import"./card-d33ce9d8.js";import"./flex-f41061bb.js";import"./divider-25d5ac4b.js";import{x as e}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-c63c5f55.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";const V={title:"Docs/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-text`\n\n## Usage"}}}},j={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["headline-l","headline-m","headline-s","title-l","title-m","title-s","detail-m","detail-s","detail-xs","body-l","body-m","body-s","display-2xl","display-xl","display-l","display-m","display-s ","preamble-2xl","preamble-xl","preamble-l","preamble-m","preamble-s","preamble-xs"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...j,name:"Tags",render:t=>e`<gds-flex direction="column" gap="m">
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
    </gds-flex>`},i={name:"Headline",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-l">Headline Large</gds-text>
      <gds-text size="headline-m">Headline Medium</gds-text>
      <gds-text size="headline-s">Headline Small</gds-text>
    </gds-flex>
  `},a={name:"Title",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-l">Title Large</gds-text>
      <gds-text size="title-m">Title Medium</gds-text>
      <gds-text size="title-s">Title Small</gds-text>
    </gds-flex>
  `},r={name:"Detail",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-m">Detail Medium</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
    </gds-flex>
  `},n={name:"Body",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-l">Body Large</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-s">Body Small</gds-text>
    </gds-flex>
  `},l={name:"Display",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-2xl">Display 2XL</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-s">Display Small</gds-text>
    </gds-flex>
  `},o={name:"Preamble",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="preamble-2xl">Preamble 2XL</gds-text>
      <gds-text size="preamble-xl">Preamble XL</gds-text>
      <gds-text size="preamble-l">Preamble Large</gds-text>
      <gds-text size="preamble-m">Preamble Medium</gds-text>
      <gds-text size="preamble-s">Preamble Small</gds-text>
      <gds-text size="preamble-xs">Preamble Extra Small</gds-text>
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
  `};var g,m,x,p,c;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:"# Headings\n\nIn order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nTag: h1, h2, h3, h4, h5, h6, p, span, em, mark, strong etc.\n\n#### The defualt tag is `p` and the defualt size is `body-medium`",...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Headline',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-l">Headline Large</gds-text>
      <gds-text size="headline-m">Headline Medium</gds-text>
      <gds-text size="headline-s">Headline Small</gds-text>
    </gds-flex>
  \`
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,z,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Title',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-l">Title Large</gds-text>
      <gds-text size="title-m">Title Medium</gds-text>
      <gds-text size="title-s">Title Small</gds-text>
    </gds-flex>
  \`
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var L,D,S;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-m">Detail Medium</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
    </gds-flex>
  \`
}`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var H,P,T;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-l">Body Large</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-s">Body Small</gds-text>
    </gds-flex>
  \`
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,v,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-2xl">Display 2XL</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-s">Display Small</gds-text>
    </gds-flex>
  \`
}`,...(M=(v=l.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var w,B,X;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Preamble',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="preamble-2xl">Preamble 2XL</gds-text>
      <gds-text size="preamble-xl">Preamble XL</gds-text>
      <gds-text size="preamble-l">Preamble Large</gds-text>
      <gds-text size="preamble-m">Preamble Medium</gds-text>
      <gds-text size="preamble-s">Preamble Small</gds-text>
      <gds-text size="preamble-xs">Preamble Extra Small</gds-text>
    </gds-flex>
  \`
}`,...(X=(B=o.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var k,E,C,I,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};const W=["Card","Headline","Title","Detail","Body","Display","Preamble","Lines"];export{n as Body,s as Card,r as Detail,l as Display,i as Headline,d as Lines,o as Preamble,a as Title,W as __namedExportsOrder,V as default};
