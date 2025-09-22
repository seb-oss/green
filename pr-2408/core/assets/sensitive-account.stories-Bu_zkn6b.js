import{x as l}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-BkP6qGxi.js";import{Default as g}from"./formatted-account.stories-CZIX9iRL.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{n as v}from"./when-BR7zwNJC.js";import{h as b,g as y}from"./gds-element-DTROifYq.js";import{G as D}from"./blur.component-BGBTarqF.js";import{G as _,a as O}from"./formatted-account-BmaaBnFU.js";import"./custom-elements-Ch_ljYQz.js";import"./flex-hMAivL3V.js";import"./flex.component-DPp90Klp.js";import"./tokens.style-CJKwYBen.js";import"./div.component-CZSPsSo2.js";import"./declarative-layout-mixins-XrCARJjW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-Drox9_Aw.js";import"./query-p8xgzTDt.js";import"./text-D-fPwh4L.js";import"./static-B8S6DEnV.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,c=t.length-1,i;c>=0;c--)(i=t[c])&&(e=(r?i(s,a,e):i(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return v(this.hide,()=>b`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([h({type:Boolean})],n.prototype,"hide",2);n=d([y("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const Q={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...g.args,hide:!0}},o={...G,render:t=>l`<gds-sensitive-account
      .hide=${t.hide}
      .account=${t.account}
    ></gds-sensitive-account>`};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,Q as default};
