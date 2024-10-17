import"./text-ab3cMMk8.js";import"./card-B_e1BIMU.js";import"./container-BYFQQCI3.js";import"./flex-CKVJn-Vg.js";import"./divider-BbJjCjHe.js";import{k as e}from"./lit-element-BoQqPHl6.js";import"./class-map-BBGuaYF3.js";import"./directive-Ctav8iJK.js";import"./static-C_6dgFWo.js";import"./gds-element-RTlSuh_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DI3Y9gRF.js";import"./style-expression-property-Da3P080T.js";const ie={title:"Docs/Content/Text",component:"gds-text",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-text\`
The gds-text element is designed to display text content flexibly. You can easily change the HTML tag it uses, wrap the text, set a maximum character length, and apply line clamping. It also allows you to adjust the text size based on design tokens that work together with line height and font size.


## Usage`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{options:["heading-xl","heading-l","heading-m","heading-s","heading-xs","heading-2xs","detail-m","detail-s","detail-xs","body-l","body-m","body-s","display-2xl","display-xl","display-l","display-m","display-s ","preamble-2xl","preamble-xl","preamble-l","preamble-m","preamble-s","preamble-xs"],control:{type:"select"}},tag:{options:["h1","h2","h3","h4","h5","h6","p","span","em","mark","strong"],control:{type:"select"}},wrap:{options:["balance","nowrap","pretty","wrap"],control:{type:"select"}},length:{control:{type:"number"}},min:{control:{type:"number"}},align:{options:["left","center","right","justify"],control:{type:"select"}},font:{control:{type:"string"}}}},s={...G,name:"Tags",render:t=>e`<gds-flex flex-direction="column" gap="2xl">
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
    </gds-flex>`},i={...G,name:"Weight",render:t=>e`<gds-flex flex-direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>`},d={name:"Heading",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: Heading 2XS</gds-text>
      <gds-text tag="h5">H5: Heading XS</gds-text>
      <gds-text tag="h4">H4: Heading Small</gds-text>
      <gds-text tag="h3">H3: Heading Medium</gds-text>
      <gds-text tag="h2">H2: Heading Large</gds-text>
      <gds-text tag="h1">H1: Heading Extra Large</gds-text>
    </gds-flex>
  `},o={name:"Detail",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">Detail Extra Small</gds-text>
      <gds-text font-size="detail-s">Detail Small</gds-text>
      <gds-text font-size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `},r={name:"Body",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">Body Small</gds-text>
      <gds-text font-size="body-m">Body Medium</gds-text>
      <gds-text font-size="body-l">Body Large</gds-text>
    </gds-flex>
  `},l={name:"Display",render:t=>e`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">Display Small</gds-text>
      <gds-text font-size="display-m">Display Medium</gds-text>
      <gds-text font-size="display-l">Display Large</gds-text>
      <gds-text font-size="display-xl">Display XL</gds-text>
      <gds-text font-size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `},g={name:"Preamble",render:t=>e`
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
  `},a={name:"Color",render:t=>e`
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
  `};var x,m,c,p,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"In order to have more flexibility the tag it self and the sizing are controlled by the user.\nThe `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nThe default tag is `span` and the default size is `body-m`",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var f,h,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Weight',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>\`
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,z,L,H,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:'> Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.\n> For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.\n> However, the `size` property can still be used to override the default size if needed.\n> This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.',...(v=(H=d.parameters)==null?void 0:H.docs)==null?void 0:v.description}}};var S,D,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Detail',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">Detail Extra Small</gds-text>
      <gds-text font-size="detail-s">Detail Small</gds-text>
      <gds-text font-size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  \`
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,P,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Body',
  render: args => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">Body Small</gds-text>
      <gds-text font-size="body-m">Body Medium</gds-text>
      <gds-text font-size="body-l">Body Large</gds-text>
    </gds-flex>
  \`
}`,...(C=(P=r.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var M,q,B;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var T,X,E;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(X=g.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var W,I,j,R,_;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source},description:{story:"The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.",...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var F,O,U,Y,A;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(O=a.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:'The `gds-text` component has a `color` property that will change the text color based on the specified color token.\n\ne.g. `<gds-text level="1" color="primary"></gds-text>`',...(A=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:A.description}}};const oe=["Card","Weight","Heading","Detail","Body","Display","Preamble","Lines","Color"];export{r as Body,s as Card,a as Color,o as Detail,l as Display,d as Heading,n as Lines,g as Preamble,i as Weight,oe as __namedExportsOrder,ie as default};
