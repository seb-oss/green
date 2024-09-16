import{k as n}from"./lit-element-1d72f0ce.js";import"./badge-14ea8264.js";import"./grid-663c7711.js";import"./flex-55465298.js";import"./divider-c2c10b07.js";import"./circle-info-52fe3396.js";import"./arrow-rotate-counter-clockwise-5b92e734.js";import"./triangle-exclamation-d2ff01eb.js";import"./static-c0094392.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-b5b8efd2.js";import"./style-expression-property-0e3d4d40.js";import"./watch-c4961afe.js";import"./container-4a420bd2.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const O={title:"Docs/Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:"A badge is a small status or notification indicator that can be used to display a message or status.\n\nVariants: `information`, `notice`, `success`, `warning`, `error`"}}},tags:["autodocs"]},e={name:"Variants",parameters:{controls:{include:[]}},render:d=>n`
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
        <gds-badge variant="success">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="warning">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="error">
          <gds-icon-triangle-exclamation slot="lead">
          </gds-icon-triangle-exclamation>
          Error
        </gds-badge>
      </gds-flex>
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="success"> Success </gds-badge>
        <gds-badge variant="warning"> Success </gds-badge>
        <gds-badge variant="error"> Error </gds-badge>
      </gds-flex>
    </gds-grid>
  `},s={name:"Lead",parameters:{controls:{include:[]}},render:d=>n`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},a={name:"Trail",parameters:{controls:{include:[]}},render:d=>n`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="error">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  `};var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <gds-badge variant="success">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="warning">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="error">
          <gds-icon-triangle-exclamation slot="lead">
          </gds-icon-triangle-exclamation>
          Error
        </gds-badge>
      </gds-flex>
      <gds-flex gap="xl" flex-direction="column" width="20ch">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="success"> Success </gds-badge>
        <gds-badge variant="warning"> Success </gds-badge>
        <gds-badge variant="error"> Error </gds-badge>
      </gds-flex>
    </gds-grid>
  \`
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var g,c,t,l,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Lead',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
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
}`,...(t=(c=s.parameters)==null?void 0:c.docs)==null?void 0:t.source},description:{story:"`gds-badge` has a lead slot that can be used to add leading content to the badge like `gds-icon`.",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,b,u,f,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Trail',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="error">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  \`
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source},description:{story:"`gds-badge` has a trail slot that can be used to add additional content to the badge.",...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};const j=["Variants","Lead","Trail"];export{s as Lead,a as Trail,e as Variants,j as __namedExportsOrder,O as default};
