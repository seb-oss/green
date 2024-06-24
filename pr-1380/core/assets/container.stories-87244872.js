import"./chunk.WCRFJ5FI-316671ac.js";import{x as l}from"./lit-element-2a5e401f.js";import"./chunk.ZQ4D5K7J-ef571d48.js";import"./Reflect-a49e984a.js";import"./_commonjsHelpers-725317a4.js";const f={title:"Components/Layouts/Container",component:"gds-container",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n## Usage"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{padding:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},gap:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},"row-gap":{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}}}},n={...m,name:"Container",render:g=>l` <gds-container> Container </gds-container>`},s={...m,name:"Using with Grid",render:g=>l` <gds-grid columns="4">
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
    </gds-grid>`};var r,e,a,o,t;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Container',
  render: args => html\` <gds-container> Container </gds-container>\`
}`,...(a=(e=n.parameters)==null?void 0:e.docs)==null?void 0:a.source},description:{story:"Container",...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.description}}};var d,c,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Card","CardGrid"];export{n as Card,s as CardGrid,h as __namedExportsOrder,f as default};
