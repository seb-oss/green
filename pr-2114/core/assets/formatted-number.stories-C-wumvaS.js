import{n as u,g as $}from"./custom-element-scoping-b4c89-hi.js";import{G as F}from"./formatted-text-CXGohUQ8.js";import"./card-VanqcJEE.js";import"./container-Cwb2897u.js";import"./flex-DTBzRj2-.js";import"./divider-D1LCDXE2.js";import{x as c}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-1b8Y0IPR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./text-BhQaTdoS.js";import"./text.component-B4D18gL7.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";import"./flex.component-QD4FtwzU.js";import"./custom-elements-DliU_OtU.js";const P={decimalsAndThousands:(e,t,a)=>a?new Intl.NumberFormat(t,{style:"currency",currency:a,minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(e)):new Intl.NumberFormat(t,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(e))};var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,d=(e,t,a,o)=>{for(var r=o>1?void 0:o?T(t,a):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=(o?l(t,a,r):l(r))||r);return o&&r&&S(t,a,r),r};let n=class extends F{get formattedValue(){return P.decimalsAndThousands(this.value,this.locale,this.currency)}};d([u({attribute:!1})],n.prototype,"value",2);d([u({type:String})],n.prototype,"locale",2);d([u({type:String})],n.prototype,"currency",2);n=d([$("gds-formatted-number")],n);n.define();const Q={title:"Components/Formatted Text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...w("gds-formatted-number")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified.\n\n@beta"}}}},D={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},s={...D,name:"Default",render:e=>c`<gds-formatted-number
      .value=${e.value}
      .locale=${e.locale}
    ></gds-formatted-number>`},_=["SEK","EUR"],m={...D,name:"Currencies",render:e=>c`<gds-flex flex-direction="column" gap="m">
      ${_.map(t=>c`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${t}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var p,g,f,h,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: args => html\`<gds-formatted-number
      .value=\${args.value}
      .locale=\${args.locale}
    ></gds-formatted-number>\`
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"The `tag` property controls the inner element tag name.\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nDepending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.\n\nThe default tag is `span` and the default size is `body-m`",...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var x,y,v;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Currencies',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${currencies.map(currency => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${currency}:</gds-text>
              <gds-formatted-number
                .value=\${args.value}
                .locale=\${args.locale}
                .currency=\${currency}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(v=(y=m.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const W=["Default","Currencies"];export{m as Currencies,s as Default,W as __namedExportsOrder,Q as default};
