import{k as d}from"./lit-element-1d72f0ce.js";import"./badge-9f8c5a25.js";import"./grid-0a8721f0.js";import"./flex-0e931cf8.js";import"./divider-8a7306e0.js";import"./triangle-exclamation-da39395f.js";import"./arrow-rotate-counter-clockwise-5b92e734.js";import"./rocket-39575822.js";import"./static-c0094392.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-dc3ad24e.js";import"./style-expression-property-0e3d4d40.js";import"./watch-c4961afe.js";import"./container-b1fc3909.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const C={title:"Docs/Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:"A badge is a small status or notification indicator that can be used to display a message or status.\n\nVariants: `information`, `notice`, `positive`, `warning`, `negative`"}}},tags:["autodocs"]},n={name:"Variants",parameters:{controls:{include:[]}},render:s=>d`
    <gds-grid columns="2" gap="2xl">
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
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
      </gds-flex>
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="positive"> Positive </gds-badge>
        <gds-badge variant="warning"> Warning </gds-badge>
        <gds-badge variant="negative"> Negative </gds-badge>
      </gds-flex>
    </gds-grid>
  `},a={name:"Lead",parameters:{controls:{include:[]}},render:s=>d`
    <gds-flex gap="xl" width="20ch">
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
  `},e={name:"Trail",parameters:{controls:{include:[]}},render:s=>d`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  `};var i,t,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Variants',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-grid columns="2" gap="2xl">
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
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
      </gds-flex>
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="positive"> Positive </gds-badge>
        <gds-badge variant="warning"> Warning </gds-badge>
        <gds-badge variant="negative"> Negative </gds-badge>
      </gds-flex>
    </gds-grid>
  \`
}`,...(g=(t=n.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var o,r,c,l,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Lead',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
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
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source},description:{story:"`gds-badge` has a lead slot that can be used to add leading content to the badge like `gds-icon`.",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,b,v,f,x;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Trail',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  \`
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"`gds-badge` has a trail slot that can be used to add additional content to the badge.",...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};const E=["Variants","Lead","Trail"];export{a as Lead,e as Trail,n as Variants,E as __namedExportsOrder,C as default};
