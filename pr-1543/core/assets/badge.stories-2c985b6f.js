import{k as s}from"./lit-element-1d72f0ce.js";import"./badge-7a1650c6.js";import"./grid-e7f82128.js";import"./flex-6d86855b.js";import"./divider-e3315d41.js";import"./triangle-exclamation-da39395f.js";import"./arrow-rotate-counter-clockwise-5b92e734.js";import"./rocket-39575822.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-01187a75.js";import"./container-93208d58.js";import"./style-expression-property-0e3d4d40.js";import"./watch-c4961afe.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const H={title:"Docs/Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:'A badge is a small status or notification indicator that can be used to display a message or status.\n\nFeatures:\n- **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.\n- **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.\n- **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.\n- **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.\n\nExample usage:\n\n```html\n<gds-badge variant="positive">\n  <gds-icon-rocket slot="lead"></gds-icon-rocket>\n  Launch\n</gds-badge>\n<gds-badge variant="warning" disabled>\n  <gds-icon-arrow-rotate-counter-clockwise slot="lead"></gds-icon-arrow-rotate-counter-clockwise>\n  Discard\n</gds-badge>\n```'}}},tags:["autodocs"]},g={name:"Variants",render:i=>s`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="negative" disabled>
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="negative" disabled> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},e={name:"Lead",parameters:{controls:{include:[]}},render:i=>s`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},a={name:"Trail",parameters:{controls:{include:[]}},render:i=>s`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  `},n={name:"Size",render:i=>s`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  `},d={name:"Disabled",render:i=>s`
    <gds-flex gap="xl">
      <gds-badge variant="positive" disabled>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning" disabled>
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `};var t,o,r;g.parameters={...g.parameters,docs:{...(t=g.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Variants',
  render: args => html\`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="negative" disabled>
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="negative" disabled> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(r=(o=g.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,c,b,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Lead',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  \`
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source},description:{story:`The \`gds-badge\` component includes a \`lead\` slot that allows for the addition of leading content, such as icons.

This slot can be used to enhance the visual representation of the badge by including elements like \`gds-icon\`.

Example usage:

\`\`\`html
<gds-badge variant="positive">
  <gds-icon-rocket slot="lead"></gds-icon-rocket>
  Launch
</gds-badge>
<gds-badge variant="warning">
  <gds-icon-chevron-up slot="lead"></gds-icon-chevron-up>
  Discard
</gds-badge>
\`\`\``,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var v,f,x,u,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Trail',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  \`
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:'`gds-badge` has a trail slot that can be used to add additional content to the badge.\n\n```html\n<gds-badge>\n <span slot="trail">...</span>\n</gds-badge>\n```',...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var k,w,z,y,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Size',
  render: args => html\`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  \`
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:`Defines the size of the badge.
The default value is \`default\`.

@property {string} size - The size of the badge, which can be either 'default' or 'small'.

\`\`\`html
<gds-badge size="small">...</gds-badge>
\`\`\``,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};var S,T,L,N,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Disabled',
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive" disabled>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning" disabled>
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  \`
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:"Indicates whether the badge is disabled.\nWhen set to `true`, the badge will appear in a disabled state and will not be interactive.\n\n@property {boolean} disabled - Controls the disabled state of the badge.\n\n```html\n<gds-badge disabled>...</gds-badge>\n<gds-badge disabled>...</gds-badge>\n```",...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.description}}};const J=["Variants","Lead","Trail","Size","Disabled"];export{d as Disabled,e as Lead,n as Size,a as Trail,g as Variants,J as __namedExportsOrder,H as default};
