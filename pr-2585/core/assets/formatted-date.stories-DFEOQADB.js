import{x as a}from"./iframe-DMCXEGAu.js";import{a as o}from"./argTableProps-DXTGrysM.js";import{d as r}from"./formatted-date.component-D7fbB4yE.js";import"./formatted-date-GbV5xACI.js";import"./flex-DzLrWfEw.js";import"./divider-CzZya_zr.js";import"./formatted-text-WbfPQLur.js";import"./text-BFdeU0QE.js";import"./default-typography.styles-C9x5wGJo.js";import"./flex.component-BKRTXpEx.js";import"./divider.component-B8mOh2HW.js";const $={title:"Components/Formatted text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...o("gds-formatted-date")},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/date)\n\n`gds-formatted-date` extends `gds-text` and formats the date to the desired format.\n\n@beta"}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},s=Object.keys(r).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),b={...d,name:"Formats",render:e=>a`<gds-flex flex-direction="column" gap="m">
      ${s.map(t=>a`<gds-flex gap="l" justify-content="space-between">
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
    </gds-flex>`},F=["Formats"];export{b as Formats,F as __namedExportsOrder,$ as default};
