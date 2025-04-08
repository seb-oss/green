import{n as l,g as D}from"./custom-element-scoping-b4c89-hi.js";import{G as _}from"./formatted-text-CXGohUQ8.js";import{x as c}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-DHOjuKud.js";const S={decimalsAndThousands:(e,r,n)=>{const s=Number(e),t={};return!isNaN(s)&&s%1!==0&&(t.minimumFractionDigits=2,t.maximumFractionDigits=2),n?new Intl.NumberFormat(r,{...t,style:"currency",currency:n}).format(s):new Intl.NumberFormat(r,t).format(s)}};var F=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(e,r,n,s)=>{for(var t=s>1?void 0:s?P(r,n):r,i=e.length-1,u;i>=0;i--)(u=e[i])&&(t=(s?u(r,n,t):u(t))||t);return s&&t&&F(r,n,t),t};let a=class extends _{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return S[this.format](this.value,this.locale,this.currency)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.element&&(this.value=this.element.textContent??void 0)}};m([l({attribute:!1})],a.prototype,"value",2);m([l({type:String})],a.prototype,"locale",2);m([l({type:String})],a.prototype,"currency",2);m([l()],a.prototype,"format",2);a=m([D("gds-formatted-number")],a);a.define();const T={title:"Components/Formatted Text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...w("gds-formatted-number")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified.\n\n@beta"}}}},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},o={...$,name:"Default",render:e=>c`<gds-formatted-number
      .value=${e.value}
      .locale=${e.locale}
    ></gds-formatted-number>`},C=["SEK","EUR"],d={...$,name:"Currencies",render:e=>c`<gds-flex flex-direction="column" gap="m">
      ${C.map(r=>c`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${r}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var p,f,g,h,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: args => html\`<gds-formatted-number
      .value=\${args.value}
      .locale=\${args.locale}
    ></gds-formatted-number>\`
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"The `tag` property controls the inner element tag name.\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nDepending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.\n\nThe default tag is `span` and the default size is `body-m`",...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var y,x,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const N=["Default","Currencies"],z=Object.freeze(Object.defineProperty({__proto__:null,Currencies:d,Default:o,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{o as D,a as G,z as f,S as n};
