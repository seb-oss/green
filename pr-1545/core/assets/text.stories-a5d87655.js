import"./text-127fb788.js";import"./card-221ca8bc.js";import"./flex-1943003e.js";import"./divider-5c042762.js";import{x as e}from"./lit-element-71e04f06.js";import"./static-ecb8bd0e.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-aacfe7e1.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";const Q={title:"Docs/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-text\`
The gds-text element is designed to display text content flexibly. You can easily change the HTML tag it uses, wrap the text, set a maximum character length, and apply line clamping. It also allows you to adjust the text size based on design tokens that work together with line height and font size.


## Usage`}}}},j={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["heading-xl","heading-l","heading-m","heading-s","heading-xs","heading-2xs","detail-m","detail-s","detail-xs","body-l","body-m","body-s","display-2xl","display-xl","display-l","display-m","display-s ","preamble-2xl","preamble-xl","preamble-l","preamble-m","preamble-s","preamble-xs"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...j,name:"Tags",render:t=>e`<gds-flex direction="column" gap="m">
      <gds-text size="heading-xl" tag="h1">H1</gds-text>
      <gds-text size="heading-l" tag="h2">H2</gds-text>
      <gds-text size="heading-m" tag="h3">H3</gds-text>
      <gds-text size="heading-s" tag="h4">H4</gds-text>
      <gds-text size="heading-xs" tag="h5">H5</gds-text>
      <gds-text size="heading-2xs" tag="h6">H6</gds-text>
      <gds-text>Paragraph ( Default )</gds-text>
      <gds-text tag="span">Span</gds-text>
      <gds-text tag="em">Em</gds-text>
      <gds-text tag="mark">Mark</gds-text>
      <gds-text tag="strong">strong</gds-text>
      <gds-text tag="small">small</gds-text>
    </gds-flex>`},i={...j,name:"Weight",render:t=>e`<gds-flex direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>`},a={name:"Heading",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="heading-2xs">Heading 2XS</gds-text>
      <gds-text size="heading-xs">Heading XS</gds-text>
      <gds-text size="heading-s">Heading Small</gds-text>
      <gds-text size="heading-s">Heading Small</gds-text>
      <gds-text size="heading-m">Heading Medium</gds-text>
      <gds-text size="heading-l">Heading Large</gds-text>
      <gds-text size="heading-xl">Heading Extra Large</gds-text>
    </gds-flex>
  `},g={name:"Detail",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `},n={name:"Body",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-s">Body Small</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-l">Body Large</gds-text>
    </gds-flex>
  `},r={name:"Display",render:t=>e`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-s">Display Small</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `},l={name:"Preamble",render:t=>e`
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
  `};var o,m,x,p,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Tags',
  render: args => html\`<gds-flex direction="column" gap="m">
      <gds-text size="heading-xl" tag="h1">H1</gds-text>
      <gds-text size="heading-l" tag="h2">H2</gds-text>
      <gds-text size="heading-m" tag="h3">H3</gds-text>
      <gds-text size="heading-s" tag="h4">H4</gds-text>
      <gds-text size="heading-xs" tag="h5">H5</gds-text>
      <gds-text size="heading-2xs" tag="h6">H6</gds-text>
      <gds-text>Paragraph ( Default )</gds-text>
      <gds-text tag="span">Span</gds-text>
      <gds-text tag="em">Em</gds-text>
      <gds-text tag="mark">Mark</gds-text>
      <gds-text tag="strong">strong</gds-text>
      <gds-text tag="small">small</gds-text>
    </gds-flex>\`
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:"# Headings\n\nIn order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nTag: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small`, `sup` etc.\n\n#### The defualt tag is `p` and the defualt size is `body-m`",...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var u,h,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Weight',
  render: args => html\`<gds-flex direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>\`
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,z,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Heading',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="heading-2xs">Heading 2XS</gds-text>
      <gds-text size="heading-xs">Heading XS</gds-text>
      <gds-text size="heading-s">Heading Small</gds-text>
      <gds-text size="heading-s">Heading Small</gds-text>
      <gds-text size="heading-m">Heading Medium</gds-text>
      <gds-text size="heading-l">Heading Large</gds-text>
      <gds-text size="heading-xl">Heading Extra Large</gds-text>
    </gds-flex>
  \`
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var L,H,D;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  \`
}`,...(D=(H=g.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var S,w,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-s">Body Small</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-l">Body Large</gds-text>
    </gds-flex>
  \`
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var M,q,v;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(v=(q=r.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var B,k,X;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(X=(k=l.parameters)==null?void 0:k.docs)==null?void 0:X.source}}};var T,E,C,W,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};const V=["Card","Weight","Heading","Detail","Body","Display","Preamble","Lines"];export{n as Body,s as Card,g as Detail,r as Display,a as Heading,d as Lines,l as Preamble,i as Weight,V as __namedExportsOrder,Q as default};
