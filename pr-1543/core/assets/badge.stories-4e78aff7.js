import{k as s}from"./lit-element-1d72f0ce.js";import"./badge-5e02330c.js";import"./grid-e6d8fc1a.js";import"./flex-b2130ae8.js";import"./divider-e3315d41.js";import"./triangle-exclamation-da39395f.js";import"./arrow-rotate-counter-clockwise-5b92e734.js";import"./rocket-39575822.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-01187a75.js";import"./style-expression-property-0e3d4d40.js";import"./watch-c4961afe.js";import"./container-e16c39c4.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const A={title:"Docs/Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:"A badge is a small status or notification indicator that can be used to display a message or status.\n\nVariants: `information`, `notice`, `positive`, `warning`, `negative`"}}},tags:["autodocs"]},d={name:"Variants",parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:i=>s`
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
  `},a={name:"Lead",parameters:{controls:{include:[]}},render:i=>s`
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
  `},e={name:"Trail",parameters:{controls:{include:[]}},render:i=>s`
    <gds-flex gap="xl">
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
  `};var n,t,o;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Variants',
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
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
}`,...(o=(t=d.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var g,r,c,l,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source},description:{story:"`gds-badge` has a lead slot that can be used to add leading content to the badge like `gds-icon`.",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,b,v,f,x;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"`gds-badge` has a trail slot that can be used to add additional content to the badge.",...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};const C=["Variants","Lead","Trail"];export{a as Lead,e as Trail,d as Variants,C as __namedExportsOrder,A as default};
