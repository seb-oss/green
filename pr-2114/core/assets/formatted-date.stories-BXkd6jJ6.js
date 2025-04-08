import{d as m}from"./formatted-date-anxk04TA.js";import"./card-VanqcJEE.js";import"./container-Cwb2897u.js";import"./flex-DTBzRj2-.js";import"./divider-D1LCDXE2.js";import{x as r}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-DDHozcjK.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-CXGohUQ8.js";import"./query-p8xgzTDt.js";import"./text-BhQaTdoS.js";import"./text.component-B4D18gL7.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";import"./flex.component-QD4FtwzU.js";import"./custom-elements-CEyY4Bg1.js";const E={title:"Components/Formatted Text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...n("gds-formatted-date")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified.\n\n@beta"}}}},p={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},i=Object.keys(m).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),a={...p,name:"Formats",render:e=>r`<gds-flex flex-direction="column" gap="m">
      ${i.map(t=>r`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t.name}:</gds-text>
              <gds-formatted-date
                .value=${e.value}
                .locale=${e.locale}
                .format=${t.value}
              ></gds-formatted-date>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Formats',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${formats.map(format => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${format.name}:</gds-text>
              <gds-formatted-date
                .value=\${args.value}
                .locale=\${args.locale}
                .format=\${format.value}
              ></gds-formatted-date>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const O=["Formats"];export{a as Formats,O as __namedExportsOrder,E as default};
