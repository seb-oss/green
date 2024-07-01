import"./card-8a8d60e1.js";import{x as l}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-880811e7.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";import"./container-11dcf82b.js";const j={title:"Docs/Layout/Container",component:"gds-container",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n## Usage"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{padding:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},gap:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},"row-gap":{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}}}},n={...m,name:"Container",render:p=>l` <gds-container> Container </gds-container>`},r={...m,name:"Using with Grid",render:p=>l` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="s{xs} m{xs} l{s}" radius="xs">
          <gds-container
            padding="l{2xl} m{l} s{xs}"
            display="flex"
            align="center"
            justify="center"
          >
            L
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var s,e,a,o,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Container',
  render: args => html\` <gds-container> Container </gds-container>\`
}`,...(a=(e=n.parameters)==null?void 0:e.docs)==null?void 0:a.source},description:{story:"Container",...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.description}}};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="s{xs} m{xs} l{s}" radius="xs">
          <gds-container
            padding="l{2xl} m{l} s{xs}"
            display="flex"
            align="center"
            justify="center"
          >
            L
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Card","CardGrid"];export{n as Card,r as CardGrid,b as __namedExportsOrder,j as default};
