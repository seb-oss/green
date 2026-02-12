import{h as t}from"./iframe-D81rLJ6U.js";import"./link-n52391I_.js";import"./popover-Cxe-BJ-A.js";import"./flex-CIgC-9Fp.js";import"./card-YWWFpWCm.js";import"./text-JPxX7fDf.js";import"./divider-CgLzSSfE.js";import"./magnifying-glass-DwqpAqv9.js";import"./star-CrfLBtqU.js";import"./arrow-right-BvcvKRAc.js";import"./chain-link-BZHbV2VN.js";import{a as i}from"./argTableProps-D6vTgEqi.js";import"./link.component-DOjHA_A2.js";import"./props-link-XPXyv1jv.js";import"./popover.component-CQwKH93c.js";import"./localized-decorator-Cm8IE26K.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Sa-v6soQ.js";import"./icon.component-DTpz19Q-.js";import"./flex.component-BR9MmH-R.js";import"./card.component-BUCoIXfd.js";import"./default-typography.styles-CX69FEly.js";import"./divider.component-tr37OJXF.js";import"./magnifying-glass.component-CUzrJD8k.js";import"./star.component-DTmK-3zK.js";import"./arrow-right.component-C42ZmcXb.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},_={...e,name:"Icon: Trail",render:()=>t` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},C={...e,name:"Text Decoration",render:()=>t`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},E={...e,name:"Label",render:()=>t`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},F=["Basic","Lead","Trail","TextDecoration","Label"];export{B as Basic,E as Label,P as Lead,C as TextDecoration,_ as Trail,F as __namedExportsOrder,A as default};
