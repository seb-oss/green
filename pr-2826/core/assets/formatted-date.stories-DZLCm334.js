import{b as o}from"./iframe-Ddc77rkg.js";import{a as r}from"./argTableProps-BNIjOmCg.js";import{d}from"./formatted-date.component-XyuuNTLk.js";import"./formatted-date-289cbSVr.js";import"./flex-C3tCFzFu.js";import"./divider-BajFizdv.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D-3fO1aT.js";import"./text-7M97Nx9Z.js";import"./text.component-Dz28oxSf.js";import"./default-typography.styles-Qmwj8D13.js";import"./flex.component-CY1YtVva.js";const h={title:"Components/Formatted text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...r("gds-formatted-date")},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/date)\n\n`gds-formatted-date` extends `gds-text` and formats the date to the desired format.\n\n@beta"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},m=Object.keys(d).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),a={...s,name:"Formats",render:e=>o`<gds-flex flex-direction="column" gap="m">
      ${m.map(t=>o`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t.name}:</gds-text>
              <gds-flex gap="m" flex-direction="column">
                <gds-formatted-date
                  .value=${e.value}
                  .locale=${e.locale}
                  .format=${t.value}
                ></gds-formatted-date>
                <gds-formatted-date
                  .locale=${e.locale}
                  .format=${t.value}
                >
                  ${e.value}
                </gds-formatted-date>
              </gds-flex>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Formats',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${formats.map(format => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${format.name}:</gds-text>
              <gds-flex gap="m" flex-direction="column">
                <gds-formatted-date
                  .value=\${args.value}
                  .locale=\${args.locale}
                  .format=\${format.value}
                ></gds-formatted-date>
                <gds-formatted-date
                  .locale=\${args.locale}
                  .format=\${format.value}
                >
                  \${args.value}
                </gds-formatted-date>
              </gds-flex>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...a.parameters?.docs?.source}}};const F=["Formats"];export{a as Formats,F as __namedExportsOrder,h as default};
