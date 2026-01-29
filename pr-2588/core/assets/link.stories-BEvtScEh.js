import{h as t}from"./iframe-CV4VHgIs.js";import"./link-HKntrXz9.js";import"./popover-YBD5YBhC.js";import"./flex-BOWnRG1i.js";import"./card-DkcJ51CH.js";import"./text-Ws9LobyT.js";import"./divider-B5weaB0f.js";import"./magnifying-glass-CUJrPaDT.js";import"./star-DBvBhSxo.js";import"./arrow-right-DYg4nDFY.js";import"./chain-link-DaG6jvaC.js";import{a as i}from"./argTableProps-DHiFLesZ.js";import"./link.component-CsuqmjsM.js";import"./props-link-BcAvkf7_.js";import"./popover.component-eRyrg-hO.js";import"./localized-decorator-BYopzF03.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BxQZD6Dp.js";import"./icon.component-XFsSxgDJ.js";import"./flex.component-DNymDvNk.js";import"./card.component-B47VLAgL.js";import"./default-typography.styles-DFTKGamX.js";import"./divider.component-CnpOrjD0.js";import"./magnifying-glass.component-Cha0Ej5m.js";import"./star.component-CCnUEuRx.js";import"./arrow-right.component-C26jTG4k.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
