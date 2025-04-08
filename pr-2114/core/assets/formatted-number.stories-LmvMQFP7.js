import{x as i}from"./lit-element-Bx14lxc-.js";import{a as D}from"./argTableProps-D3A_SZpm.js";import{n as c,g as _}from"./custom-element-scoping-b4c89-hi.js";import{G as S}from"./formatted-text-CXGohUQ8.js";import"./flex-DTBzRj2-.js";const w={decimalsAndThousands:(e,t,a)=>{const n=Number(e),r={};return!isNaN(n)&&n%1!==0&&(r.minimumFractionDigits=2,r.maximumFractionDigits=2),a?new Intl.NumberFormat(t,{...r,style:"currency",currency:a}).format(n):new Intl.NumberFormat(t,r).format(n)}};var C=Object.defineProperty,F=Object.getOwnPropertyDescriptor,m=(e,t,a,n)=>{for(var r=n>1?void 0:n?F(t,a):t,l=e.length-1,u;l>=0;l--)(u=e[l])&&(r=(n?u(t,a,r):u(r))||r);return n&&r&&C(t,a,r),r};let s=class extends S{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return w[this.format](this.value,this.locale,this.currency)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};m([c({attribute:!1})],s.prototype,"value",2);m([c({type:String})],s.prototype,"locale",2);m([c({type:String})],s.prototype,"currency",2);m([c({type:String})],s.prototype,"format",2);s=m([_("gds-formatted-number")],s);s.define();const P={title:"Components/Formatted Text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...D("gds-formatted-number"),currency:{type:"string"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},o={...$,name:"Default",render:e=>i`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},T=["SEK","EUR"],d={...$,name:"Currencies",render:e=>i`<gds-flex flex-direction="column" gap="m">
      ${T.map(t=>i`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${t}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var f,p,g,b,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=\${args.value}
        .locale=\${args.locale}
        .currency=\${args.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=\${args.locale} .currency=\${args.currency}
        >\${args.value}</gds-formatted-number
      ></gds-flex
    >\`
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"The `tag` property controls the inner element tag name.\n\nExample: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.\n\nDepending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.\n\nThe default tag is `span` and the default size is `body-m`",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var x,h,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const N=["Default","Currencies"],U=Object.freeze(Object.defineProperty({__proto__:null,Currencies:d,Default:o,__namedExportsOrder:N,default:P},Symbol.toStringTag,{value:"Module"}));export{o as D,s as G,U as f,w as n};
