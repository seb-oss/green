import{x as f}from"./lit-element-Bx14lxc-.js";import{a as $}from"./argTableProps-sFs1n6qK.js";import{n as c,g as h}from"./custom-element-scoping-b4c89-hi.js";import{G as _}from"./formatted-text-CXGohUQ8.js";import"./flex-DTBzRj2-.js";const D={decimalsAndThousands:(e,r,a)=>{const t={maximumFractionDigits:2};return a?new Intl.NumberFormat(r,{...t,style:"currency",currency:a}).format(Number(e)):new Intl.NumberFormat(r,t).format(Number(e))}};var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,d=(e,r,a,t)=>{for(var n=t>1?void 0:t?C(r,a):r,u=e.length-1,l;u>=0;u--)(l=e[u])&&(n=(t?l(r,a,n):l(n))||n);return t&&n&&S(r,a,n),n};let s=class extends _{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return D[this.format](this.value,this.locale,this.currency)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};d([c({attribute:!1})],s.prototype,"value",2);d([c({type:String})],s.prototype,"locale",2);d([c({type:String})],s.prototype,"currency",2);d([c({type:String})],s.prototype,"format",2);s=d([h("gds-formatted-number")],s);s.define();const P={title:"Components/Formatted Text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...$("gds-formatted-number"),currency:{type:"string"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},v={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},o={...v,name:"Default",render:e=>f`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},F=["SEK","EUR"],m={...v,name:"Currencies",render:e=>f`<gds-flex flex-direction="column" gap="m">
      ${F.map(r=>f`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${r}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var i,g,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(y=(x=m.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const N=["Default","Currencies"],G=Object.freeze(Object.defineProperty({__proto__:null,Currencies:m,Default:o,__namedExportsOrder:N,default:P},Symbol.toStringTag,{value:"Module"}));export{o as D,s as G,G as f,D as n};
