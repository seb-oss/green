import{x as r}from"./iframe-BqGQMgre.js";import{a as $}from"./argTableProps-CAUpexYb.js";import{n as b}from"./formatted-number-DIyjQDpp.js";import"./flex-CgpeA6DV.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CYqmMm-p.js";import"./text-B8fzJkGN.js";import"./default-typography.styles-CRFJxRoL.js";import"./flex.component-BYJoTcL2.js";const F={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...$("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(b)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},t={...c,name:"Default",render:e=>r`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
        .decimals=${e.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},y=["SEK","EUR"],n={...c,name:"Currencies",render:e=>r`<gds-flex flex-direction="column" gap="m">
      ${y.map(a=>r`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${a}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${a}
                .decimals=${e.decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`},d=[0,2,4],s={...c,name:"Decimals",render:e=>r`<gds-flex flex-direction="column" gap="m">
      ${d.map(a=>r`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${a}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${e.currency}
                .decimals=${d}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var m,o,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var u,g,i;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(g=n.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var f,p,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const O=["Default","Currencies","Decimals"];export{n as Currencies,s as Decimals,t as Default,O as __namedExportsOrder,F as default};
