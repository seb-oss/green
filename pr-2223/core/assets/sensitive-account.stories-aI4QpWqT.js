import{x as l}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-CLrRqnwj.js";import{Default as g}from"./formatted-account.stories-D_Ld6s7u.js";import{h,n as v,g as b}from"./gds-element-DKcDvDP5.js";import{n as y}from"./when-BR7zwNJC.js";import{G as D}from"./blur.component-L2D1JH52.js";import{G as _,a as O}from"./formatted-account-BQhCkcro.js";import"./custom-elements-CCuQm3nr.js";import"./flex-BwgzG5qs.js";import"./flex.component-D_vuL4br.js";import"./tokens.style-BxbMzGpH.js";import"./div.component-CD5LQ9NF.js";import"./declarative-layout-mixins-mU9_fNeX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-iJrcrAkf.js";import"./query-p8xgzTDt.js";import"./text-DbbUfaRq.js";import"./static-B8S6DEnV.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,c=t.length-1,i;c>=0;c--)(i=t[c])&&(e=(r?i(s,a,e):i(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return y(this.hide,()=>h`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([v({type:Boolean})],n.prototype,"hide",2);n=d([b("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const N={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...g.args,hide:!0}},o={...G,render:t=>l`<gds-sensitive-account
      .hide=${t.hide}
      .account=${t.account}
    ></gds-sensitive-account>`};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,N as default};
