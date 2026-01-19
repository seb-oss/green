import{h as t}from"./iframe-CJE7aiH0.js";import"./link-CfdTmXI-.js";import"./popover-DewCljDo.js";import"./flex-CeA9EXqz.js";import"./card-mAJw_7UD.js";import"./text-BJX68VAe.js";import"./divider-DvjDFFBI.js";import"./magnifying-glass-Hc9hqMKq.js";import"./star-CKQjCrJs.js";import"./arrow-right-DT_UtIfu.js";import"./chain-link-BIFXC5DO.js";import{a as i}from"./argTableProps-C8qsyRk-.js";import"./link.component-DRW_Kk7b.js";import"./props-link-DRovq5W-.js";import"./popover.component-tAjsLLnj.js";import"./localized-decorator-kFqkmb10.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CSC62mww.js";import"./icon.component-CtwQOH-4.js";import"./flex.component-JDR8gBKy.js";import"./card.component-Blz831NO.js";import"./default-typography.styles-CIawN_vj.js";import"./divider.component-DJLHKc4X.js";import"./magnifying-glass.component-rsLzPGzt.js";import"./star.component-DIECLmBl.js";import"./arrow-right.component-Be6QpB7c.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
