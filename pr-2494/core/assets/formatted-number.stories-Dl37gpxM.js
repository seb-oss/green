import{x as n}from"./iframe-BY8NNjC2.js";import{a as g}from"./argTableProps-D7KRqVWO.js";import{n as f}from"./formatted-number-D4O0gYul.js";import"./flex-BRDOxjmD.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-BF5Zwpnu.js";import"./text-_hSOSfDB.js";import"./default-typography.styles-CT98w1Pc.js";import"./flex.component-DH4cMZb0.js";const S={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...g("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(f)},currency:{type:"string"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},r={...u,name:"Default",render:e=>n`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},i=["SEK","EUR"],t={...u,name:"Currencies",render:e=>n`<gds-flex flex-direction="column" gap="m">
      ${i.map(a=>n`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${a}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${a}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var s,o,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const E=["Default","Currencies"];export{t as Currencies,r as Default,E as __namedExportsOrder,S as default};
