import{x as n}from"./lit-element-Bx14lxc-.js";import{a as g}from"./argTableProps-DnFR7ou5.js";import{n as i}from"./formatted-number-BgtT8vT_.js";import"./flex-COHx0Pry.js";import"./custom-elements-BfFVO-mj.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./gds-element-DTROifYq.js";import"./formatted-text-4fE8DEPu.js";import"./query-p8xgzTDt.js";import"./text-Z9s1gHys.js";import"./static-B8S6DEnV.js";import"./tokens.style-CQAfIFlK.js";import"./declarative-layout-mixins-C4FFYA_h.js";import"./div.component-D6IvvHfw.js";import"./default-typography.styles-B_Uut80G.js";import"./flex.component-BYRotL8F.js";const _={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...g("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},r={...u,name:"Default",render:e=>n`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},p=["SEK","EUR"],t={...u,name:"Currencies",render:e=>n`<gds-flex flex-direction="column" gap="m">
      ${p.map(a=>n`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${a}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${a}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var o,s,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const k=["Default","Currencies"];export{t as Currencies,r as Default,k as __namedExportsOrder,_ as default};
