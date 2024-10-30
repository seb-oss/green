import"./text-B9VGe3lR.js";import"./card-ZuYQL3Kq.js";import"./container-Z83N913X.js";import"./flex-DOOC34tY.js";import"./divider-DkqSgEb0.js";import{x as e}from"./lit-element-C_s9q329.js";import"./custom-element-scoping-CpYtbs9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./style-expression-property-C6V8xdlu.js";const me={title:"Components/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-text\`
The gds-text element is designed to display text content flexibly. You can easily change the HTML tag it uses, wrap the text, set a maximum character length, and apply line clamping. It also allows you to adjust the text size based on design tokens that work together with line height and font size.


## Usage`}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["heading-xl","heading-l","heading-m","heading-s","heading-xs","heading-2xs","detail-m","detail-s","detail-xs","body-l","body-m","body-s","display-2xl","display-xl","display-l","display-m","display-s ","preamble-2xl","preamble-xl","preamble-l","preamble-m","preamble-s","preamble-xs"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...m,name:"Tags",render:t=>e`<gds-flex flex-direction="column" gap="2xl">
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
    </gds-flex>`},i={...m,name:"Weight",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text font-weight="bold">Bold (700)</gds-text>
      <gds-text font-weight="medium">Medium (500)</gds-text>
      <gds-text font-weight="book">Book (450)</gds-text>
      <gds-text font-weight="regular">Regular (400)</gds-text>
      <gds-text font-weight="light">Light (300)</gds-text>
    </gds-flex>`},d={name:"Heading",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: Heading 2XS</gds-text>
      <gds-text tag="h5">H5: Heading XS</gds-text>
      <gds-text tag="h4">H4: Heading Small</gds-text>
      <gds-text tag="h3">H3: Heading Medium</gds-text>
      <gds-text tag="h2">H2: Heading Large</gds-text>
      <gds-text tag="h1">H1: Heading Extra Large</gds-text>
    </gds-flex>
  `},r={name:"Detail",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">Detail Extra Small</gds-text>
      <gds-text font-size="detail-s">Detail Small</gds-text>
      <gds-text font-size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `},l={name:"Body",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">Body Small</gds-text>
      <gds-text font-size="body-m">Body Medium</gds-text>
      <gds-text font-size="body-l">Body Large</gds-text>
    </gds-flex>
  `},g={name:"Display",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">Display Small</gds-text>
      <gds-text font-size="display-m">Display Medium</gds-text>
      <gds-text font-size="display-l">Display Large</gds-text>
      <gds-text font-size="display-xl">Display XL</gds-text>
      <gds-text font-size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `},x={name:"Preamble",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text font-size="preamble-s">Preamble Small</gds-text>
      <gds-text font-size="preamble-m">Preamble Medium</gds-text>
      <gds-text font-size="preamble-l">Preamble Large</gds-text>
      <gds-text font-size="preamble-xl">Preamble XL</gds-text>
      <gds-text font-size="preamble-2xl">Preamble 2XL</gds-text>
    </gds-flex>
  `},n={name:"Line Clamp",render:t=>e`
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
  `},a={...m,name:"Decoration",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>`};var c,p,u,f,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"In order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nThe default tag is `span` and the default size is `body-m`",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var y,b,z;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Weight',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      <gds-text font-weight="bold">Bold (700)</gds-text>
      <gds-text font-weight="medium">Medium (500)</gds-text>
      <gds-text font-weight="book">Book (450)</gds-text>
      <gds-text font-weight="regular">Regular (400)</gds-text>
      <gds-text font-weight="light">Light (300)</gds-text>
    </gds-flex>\`
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var L,v,H,D,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Heading',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: Heading 2XS</gds-text>
      <gds-text tag="h5">H5: Heading XS</gds-text>
      <gds-text tag="h4">H4: Heading Small</gds-text>
      <gds-text tag="h3">H3: Heading Medium</gds-text>
      <gds-text tag="h2">H2: Heading Large</gds-text>
      <gds-text tag="h1">H1: Heading Extra Large</gds-text>
    </gds-flex>
  \`
}`,...(H=(v=d.parameters)==null?void 0:v.docs)==null?void 0:H.source},description:{story:'> Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.\n> For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.\n> However, the `size` property can still be used to override the default size if needed.\n> This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.',...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var S,P,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">Detail Extra Small</gds-text>
      <gds-text font-size="detail-s">Detail Small</gds-text>
      <gds-text font-size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  \`
}`,...(k=(P=r.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,T,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">Body Small</gds-text>
      <gds-text font-size="body-m">Body Medium</gds-text>
      <gds-text font-size="body-l">Body Large</gds-text>
    </gds-flex>
  \`
}`,...(M=(T=l.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var q,B,X;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Display',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">Display Small</gds-text>
      <gds-text font-size="display-m">Display Medium</gds-text>
      <gds-text font-size="display-l">Display Large</gds-text>
      <gds-text font-size="display-xl">Display XL</gds-text>
      <gds-text font-size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  \`
}`,...(X=(B=g.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var E,W,U;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Preamble',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text font-size="preamble-s">Preamble Small</gds-text>
      <gds-text font-size="preamble-m">Preamble Medium</gds-text>
      <gds-text font-size="preamble-l">Preamble Large</gds-text>
      <gds-text font-size="preamble-xl">Preamble XL</gds-text>
      <gds-text font-size="preamble-2xl">Preamble 2XL</gds-text>
    </gds-flex>
  \`
}`,...(U=(W=x.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var O,I,R,j,_;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(_=(j=n.parameters)==null?void 0:j.docs)==null?void 0:_.description}}};var F,Y,A,G,J;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:A.source},description:{story:'The `gds-text` component has a `color` property that will change the text color based on the specified color token.\n\ne.g. `<gds-text level="1" color="primary"></gds-text>`',...(J=(G=o.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,N,Q,V,Z;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(N=a.parameters)==null?void 0:N.docs)==null?void 0:Q.source},description:{story:'`gds-text` component has a `text-decoration` property that will change the text decoration based on the css values such as `underline`, `overline`, `line-through`, `underline dotted`, `{COLOR} wavy underline` etc.\n\n\ne.g.\n\n```html\n<gds-text\n   text-decoration="currentcolor wavy underline"\n >\n   Wavy Underline\n </gds-text>\n```',...(Z=(V=a.parameters)==null?void 0:V.docs)==null?void 0:Z.description}}};const ce=["Card","Weight","Heading","Detail","Body","Display","Preamble","Lines","Color","Decoration"];export{l as Body,s as Card,o as Color,a as Decoration,r as Detail,g as Display,d as Heading,n as Lines,x as Preamble,i as Weight,ce as __namedExportsOrder,me as default};
