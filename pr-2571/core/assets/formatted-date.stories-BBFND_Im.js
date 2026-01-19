import{x as a}from"./iframe-DMDyobL-.js";import{a as o}from"./argTableProps-BVaUXf6e.js";import{d as r}from"./formatted-date.component-D2hk0x43.js";import"./formatted-date-CK6NawMo.js";import"./flex-D8CHi21X.js";import"./divider-geM_dtYR.js";import"./formatted-text-D_ZiXYZ7.js";import"./text-B-vzt8Fz.js";import"./default-typography.styles-e6bvIdGX.js";import"./flex.component-Wi0Fp2wR.js";import"./divider.component-66l9JqmQ.js";const $={title:"Components/Formatted text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...o("gds-formatted-date")},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/date)\n\n`gds-formatted-date` extends `gds-text` and formats the date to the desired format.\n\n@beta"}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},s=Object.keys(r).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),b={...d,name:"Formats",render:e=>a`<gds-flex flex-direction="column" gap="m">
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
