import{n as u,g as j,x as l}from"./iframe-CdPrjy8Z.js";import{a as C}from"./argTableProps-DySw3caf.js";import{G as F}from"./formatted-text-qYY01a_0.js";import"./flex-BuIFGyj9.js";const P={decimalsAndThousands:(e,r,n,a)=>{const t={maximumFractionDigits:a??2,minimumFractionDigits:a??2};return n?new Intl.NumberFormat(r,{...t,style:"currency",currency:n}).format(Number(e)):new Intl.NumberFormat(r,t).format(Number(e))}};var w=Object.defineProperty,N=Object.getOwnPropertyDescriptor,o=(e,r,n,a)=>{for(var t=a>1?void 0:a?N(r,n):r,i=e.length-1,g;i>=0;i--)(g=e[i])&&(t=(a?g(r,n,t):g(t))||t);return a&&t&&w(r,n,t),t};let s=class extends F{constructor(){super(...arguments),this.format="decimalsAndThousands"}get formattedValue(){return P[this.format](this.value,this.locale,this.currency,this.decimals)}firstUpdated(e){super.firstUpdated(e),!this.value&&this.textContent&&(this.value=this.textContent)}};o([u({attribute:!1})],s.prototype,"value",2);o([u({type:String})],s.prototype,"locale",2);o([u({type:String})],s.prototype,"currency",2);o([u({type:Number})],s.prototype,"decimals",2);o([u({type:String})],s.prototype,"format",2);s=o([j("gds-formatted-number")],s);s.define();const O={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...C("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(P)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},f={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},c={...f,name:"Default",render:e=>l`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
        .decimals=${e.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},T=["SEK","EUR"],d={...f,name:"Currencies",render:e=>l`<gds-flex flex-direction="column" gap="m">
      ${T.map(r=>l`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${r}
                .decimals=${e.decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`},p=[0,2,4],m={...f,name:"Decimals",render:e=>l`<gds-flex flex-direction="column" gap="m">
      ${p.map(r=>l`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${e.currency}
                .decimals=${p}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var b,x,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=\${args.value}
        .locale=\${args.locale}
        .currency=\${args.currency}
        .decimals=\${args.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=\${args.locale} .currency=\${args.currency}
        >\${args.value}</gds-formatted-number
      ></gds-flex
    >\`
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var $,v,h;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Currencies',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${currencies.map(currency => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${currency}:</gds-text>
              <gds-formatted-number
                .value=\${args.value}
                .locale=\${args.locale}
                .currency=\${currency}
                .decimals=\${args.decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var D,_,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Decimals',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${decimals.map(currency => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${currency}:</gds-text>
              <gds-formatted-number
                .value=\${args.value}
                .locale=\${args.locale}
                .currency=\${args.currency}
                .decimals=\${decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const E=["Default","Currencies","Decimals"],z=Object.freeze(Object.defineProperty({__proto__:null,Currencies:d,Decimals:m,Default:c,__namedExportsOrder:E,default:O},Symbol.toStringTag,{value:"Module"}));export{c as D,s as G,z as f,P as n};
