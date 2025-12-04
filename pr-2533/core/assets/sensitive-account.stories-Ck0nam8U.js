import{b as l,h as f,n as g,g as h,x as v}from"./iframe-Cv5Y80HS.js";import{a as b}from"./argTableProps-DLoS4gKv.js";import{Default as y}from"./formatted-account.stories-DvatEJ62.js";import{G as D}from"./blur.component-C3y2pBxp.js";import{G as _,a as O}from"./formatted-account-CTponfKk.js";import"./preload-helper-Dp1pzeXC.js";import"./flex-CDsehZBt.js";import"./flex.component-D3qOof_c.js";import"./formatted-text-Db5gDg67.js";import"./text-CYR_g_Vb.js";import"./default-typography.styles-DsNqMO9o.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,m=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,c=t.length-1,i;c>=0;c--)(i=t[c])&&(e=(r?i(s,a,e):i(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return l(this.hide,()=>f`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};m([g({type:Boolean})],n.prototype,"hide",2);n=m([h("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const z={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...b("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...y.args,hide:!0}},o={...G,render:t=>v`<gds-sensitive-account
      .hide=${t.hide}
      .account=${t.account}
    ></gds-sensitive-account>`};var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,z as default};
