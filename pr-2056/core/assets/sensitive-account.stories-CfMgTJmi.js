import{x as l}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-CoueaF2u.js";import{Default as g}from"./formatted-account.stories-BA3izdEk.js";import{h,n as v,g as b}from"./custom-element-scoping-b4c89-hi.js";import{n as y}from"./when-BR7zwNJC.js";import{G as D}from"./blur.component-By-0qWsb.js";import{G as _,a as O}from"./formatted-account-C2H7XNL1.js";import"./custom-elements-CCmkIVPY.js";import"./flex-CTdMRMNH.js";import"./flex.component-BfiuBC5x.js";import"./tokens.style-C9bLefPj.js";import"./div.component-BVZXVbvc.js";import"./declarative-layout-mixins-C09DP4OO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-pSOsRuWS.js";import"./query-p8xgzTDt.js";import"./text-B3C6ZHvv.js";import"./text.component-C2Xpvbcw.js";import"./static-B8S6DEnV.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,c=t.length-1,i;c>=0;c--)(i=t[c])&&(e=(r?i(s,a,e):i(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return y(this.hide,()=>h`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([v({type:Boolean})],n.prototype,"hide",2);n=d([b("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const Q={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,Q as default};
