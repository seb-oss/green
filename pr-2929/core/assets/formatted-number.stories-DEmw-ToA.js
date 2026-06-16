import{b as r}from"./iframe-WmA5gf4D.js";import{a as m}from"./argTableProps-D-ADgv_g.js";import{n as o}from"./formatted-number-B4tLt6Yo.js";import"./flex-DTeM_M18.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D8ErdvF4.js";import"./text-Cj_ZtiZq.js";import"./text.component-O6HWmemq.js";import"./default-typography.styles-B8UhQWwR.js";import"./flex.component-_6X8CS5F.js";const D={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...m("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},t={...c,name:"Default",render:e=>r`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
        .decimals=${e.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},l=["SEK","EUR"],n={...c,name:"Currencies",render:e=>r`<gds-flex flex-direction="column" gap="m">
      ${l.map(a=>r`<gds-flex gap="l" justify-content="space-between">
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
    </gds-flex>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const h=["Default","Currencies","Decimals"];export{n as Currencies,s as Decimals,t as Default,h as __namedExportsOrder,D as default};
