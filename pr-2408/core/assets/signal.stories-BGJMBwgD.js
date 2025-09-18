import{x as y}from"./lit-element-Bx14lxc-.js";import{a as P}from"./argTableProps-CzRg75Np.js";import"./signal-COpgFT69.js";import"./flex---FK__lW.js";import"./custom-elements-wQ6fOUdJ.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-XrCARJjW.js";import"./button-Bm284tJa.js";import"./button.component-CpGiPPR4.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-BS_h03Rl.js";import"./transitional-styles-D2m6PuZd.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./flex.component-CK9zIHJP.js";import"./div.component-DevXYBKS.js";const M={title:"Components/Signal",component:"gds-signal",tags:["autodocs"],argTypes:{...P("gds-signal")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...r,name:"Signal"},a={...r,name:"Color",render:S=>y`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  `},o={...r,name:"Usage",render:S=>y`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `};var e,t,n,i,g;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal'
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source},description:{story:"A signal is used to draw attention to notifications and new content.<br/>",...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.description}}};var l,d,p,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:`The signal's style matches the button's rank and variant by default. <br/>
The color can be customized using the \`color\` property. It accepts as value all the content color tokens.

Color tokens: <a href="https://seb.io/studio/colors" target="_blank">seb.io/studio/colors</a>`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var u,f,x,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Usage',
  render: args => html\`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Signal can be used on the FAB by setting it as trail slot element.",...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};const N=["Signal","Color","Usage"];export{a as Color,s as Signal,o as Usage,N as __namedExportsOrder,M as default};
