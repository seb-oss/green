import{b as r}from"./iframe-C01hbSNl.js";import{a as t}from"./argTableProps-kTFLZNyl.js";import"./signal-DcFAfxLA.js";import"./flex-BCIT_pCB.js";import"./preload-helper-PPVm8Dsz.js";import"./signal.component-Dhcw-7R5.js";import"./flex.component-BIxNmTAN.js";const u={title:"Components/Signal",component:"gds-signal",tags:["autodocs"],argTypes:{...t("gds-signal")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...o,name:"Signal"},a={...o,name:"Color",render:n=>r`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  `},e={...o,name:"Usage",render:n=>r`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal'
}`,...s.parameters?.docs?.source},description:{story:"A signal is used to draw attention to notifications and new content.<br/>",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  render: args => html\`
    <gds-flex gap="4xl">
      <gds-signal></gds-signal>
      <gds-signal color="positive-01"></gds-signal>
      <gds-signal color="negative-01"></gds-signal>
      <gds-signal color="notice-01"></gds-signal>
    </gds-flex>
  \`
}`,...a.parameters?.docs?.source},description:{story:`The signal's style matches the button's rank and variant by default. <br/>
The color can be customized using the \`color\` property. It accepts as value all the content color tokens.

Color tokens: <a href="https://seb.io/studio/colors" target="_blank">seb.io/studio/colors</a>`,...a.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Usage',
  render: args => html\`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...e.parameters?.docs?.source},description:{story:"Signal can be used on the FAB by setting it as trail slot element.",...e.parameters?.docs?.description}}};const f=["Signal","Color","Usage"];export{a as Color,s as Signal,e as Usage,f as __namedExportsOrder,u as default};
