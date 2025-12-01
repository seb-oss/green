import{n as d,g as h,x as i}from"./iframe-MQTvm_E4.js";import{a as _}from"./argTableProps-xgtQ-4jK.js";import{G as D}from"./formatted-text-BsfhZSKi.js";import"./flex-BhPS_ZH8.js";const v={decimalsAndThousands:(e,r,a)=>{const t={maximumFractionDigits:2,minimumFractionDigits:2};return a?new Intl.NumberFormat(r,{...t,style:"currency",currency:a}).format(Number(e)):new Intl.NumberFormat(r,t).format(Number(e))}};var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(e,r,a,t)=>{for(var n=t>1?void 0:t?C(r,a):r,u=e.length-1,l;u>=0;u--)(l=e[u])&&(n=(t?l(r,a,n):l(n))||n);return t&&n&&S(r,a,n),n};let s=class extends D{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return v[this.format](this.value,this.locale,this.currency)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};c([d({attribute:!1})],s.prototype,"value",2);c([d({type:String})],s.prototype,"locale",2);c([d({type:String})],s.prototype,"currency",2);c([d({type:String})],s.prototype,"format",2);s=c([h("gds-formatted-number")],s);s.define();const F={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{..._("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(v)},currency:{type:"string"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},o={...$,name:"Default",render:e=>i`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},P=["SEK","EUR"],m={...$,name:"Currencies",render:e=>i`<gds-flex flex-direction="column" gap="m">
      ${P.map(r=>i`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${r}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var f,g,p;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,x,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(x=m.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const O=["Default","Currencies"],E=Object.freeze(Object.defineProperty({__proto__:null,Currencies:m,Default:o,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{o as D,s as G,E as f,v as n};
