import{h as t}from"./iframe-CxPMWD1t.js";import"./link-O3g0ktvS.js";import"./popover-rReiKNOv.js";import"./flex-BiBCMQJy.js";import"./card-DvaPx4lE.js";import"./text-ClO9XyQG.js";import"./divider-BpjjMY59.js";import"./magnifying-glass-BH-tqtMj.js";import"./star-CJO9pEX-.js";import"./arrow-right-BE0FwpLc.js";import"./chain-link-DvZmDIxo.js";import{a as i}from"./argTableProps-DAAGqmsd.js";import"./link.component-CNy-YSZI.js";import"./props-link-DWO4XJbQ.js";import"./popover.component-YnSOsLck.js";import"./localized-decorator-eN8oFF7e.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C6Ou90KH.js";import"./icon.component-Bb4T45-R.js";import"./flex.component-DjYesgfy.js";import"./card.component-BPIgfRAY.js";import"./default-typography.styles-B9BSe6H-.js";import"./divider.component-CjrpsTeS.js";import"./magnifying-glass.component-Dryd1LIq.js";import"./star.component-DSQuI29t.js";import"./arrow-right.component-0fn_0j4_.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
