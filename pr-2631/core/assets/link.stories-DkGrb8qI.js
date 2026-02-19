import{h as t}from"./iframe-CCr7BfDW.js";import"./link-zgzq_rQG.js";import"./popover-B6ktFS5T.js";import"./flex-oQ2J-TUY.js";import"./card--yDNoFx8.js";import"./text-CgonV9pW.js";import"./divider-dejwdwPs.js";import"./magnifying-glass-iFQKXYN6.js";import"./star-DAG88IyA.js";import"./arrow-right-DG8X2PTd.js";import"./chain-link-BK_uuwxf.js";import{a as i}from"./argTableProps-Cce2ZnM5.js";import"./link.component-CdBaY0LA.js";import"./props-link-DyzSnkT3.js";import"./popover.component--HwsGcuD.js";import"./localized-decorator-Cdz-T05e.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DIdjbBdr.js";import"./icon.component-Ds_8Hvh-.js";import"./flex.component-DBdVvVF4.js";import"./card.component-QkFY-_-4.js";import"./default-typography.styles-DfN_BO-m.js";import"./divider.component-DC975Vri.js";import"./magnifying-glass.component-B356glN-.js";import"./star.component-CZ8eV8En.js";import"./arrow-right.component-KBbF6LvK.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
