import{b as u,h as f,n as v,g,x as h}from"./iframe-CGsiwAoU.js";import{a as b}from"./argTableProps-Cz-Kr6qk.js";import{G as y}from"./blur.component-BaklXJpj.js";import{G as D,d as $}from"./formatted-date.component-CaBOcwFK.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-BYgSV_zZ.js";import"./text-DQ_j5u45.js";import"./default-typography.styles-B3yy1ysv.js";var O=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,s,n,r)=>{for(var t=r>1?void 0:r?_(s,n):s,d=e.length-1,i;d>=0;d--)(i=e[d])&&(t=(r?i(s,n,t):i(t))||t);return r&&t&&O(s,n,t),t};let o=class extends D{constructor(){super(...arguments),this.hide=!1}render(){return u(this.hide,()=>f`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};c([v({type:Boolean})],o.prototype,"hide",2);o=c([g("gds-sensitive-date",{dependsOn:[y]})],o);o.define();const T={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...b("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys($)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},P={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},a={...P,render:e=>h`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-date
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .format=\${args.format}
    ></gds-sensitive-date>\`
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,T as default};
