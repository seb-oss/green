import{x as y}from"./iframe-BZMmfzq-.js";import{a as P}from"./argTableProps-CWUlPtMf.js";import"./signal-B2mowvUP.js";import"./flex-DybpUiQt.js";import"./preload-helper-Dp1pzeXC.js";import"./signal.component-BBdOiTYN.js";import"./flex.component-Cl84FKMs.js";const w={title:"Components/Signal",component:"gds-signal",tags:["autodocs"],argTypes:{...P("gds-signal")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...o,name:"Signal"},a={...o,name:"Color",render:S=>y`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  `},e={...o,name:"Usage",render:S=>y`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `};var r,n,t,i,g;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal'
}`,...(t=(n=s.parameters)==null?void 0:n.docs)==null?void 0:t.source},description:{story:"A signal is used to draw attention to notifications and new content.<br/>",...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.description}}};var l,d,c,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  render: args => html\`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  \`
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:`The signal's style matches the button's rank and variant by default. <br/>
The color can be customized using the \`color\` property. It accepts as value all the content color tokens.

Color tokens: <a href="https://seb.io/studio/colors" target="_blank">seb.io/studio/colors</a>`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,f,x,b,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Usage',
  render: args => html\`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Signal can be used on the FAB by setting it as trail slot element.",...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};const A=["Signal","Color","Usage"];export{a as Color,s as Signal,e as Usage,A as __namedExportsOrder,w as default};
