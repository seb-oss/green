import{x as t}from"./iframe-Dp9IHT7M.js";import{a as d}from"./argTableProps-R5F9VmLh.js";import{n as m}from"./formatted-number-DSEUt-Xh.js";import"./flex-BwWHANmJ.js";import"./formatted-text-BBTqO6nh.js";import"./text-DBbTD983.js";import"./default-typography.styles-C-XkYi72.js";import"./flex.component-_Iuoz229.js";const x={title:"Components/Formatted text/Number",component:"gds-formatted-number",tags:["autodocs"],argTypes:{...d("gds-formatted-number"),format:{control:{type:"select"},options:Object.keys(m)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)\n\n`gds-formatted-number` extends `gds-text` and formats the number to the desired format.\n\n@beta"}}}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:1234.5}},b={...o,name:"Default",render:e=>t`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${e.value}
        .locale=${e.locale}
        .currency=${e.currency}
        .decimals=${e.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${e.locale} .currency=${e.currency}
        >${e.value}</gds-formatted-number
      ></gds-flex
    >`},n=["SEK","EUR"],$={...o,name:"Currencies",render:e=>t`<gds-flex flex-direction="column" gap="m">
      ${n.map(r=>t`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${r}
                .decimals=${e.decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`},s=[0,2,4],y={...o,name:"Decimals",render:e=>t`<gds-flex flex-direction="column" gap="m">
      ${s.map(r=>t`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${r}:</gds-text>
              <gds-formatted-number
                .value=${e.value}
                .locale=${e.locale}
                .currency=${e.currency}
                .decimals=${s}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`},v=["Default","Currencies","Decimals"];export{$ as Currencies,y as Decimals,b as Default,v as __namedExportsOrder,x as default};
