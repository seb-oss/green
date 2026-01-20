import{h as t}from"./iframe-CdkNm90d.js";import"./link-UUj3UfY-.js";import"./popover-BQvS7BFi.js";import"./flex-Dqx94wbI.js";import"./card-B0dlcJPg.js";import"./text-DolJvl3u.js";import"./divider-Dx9INIw3.js";import"./magnifying-glass-CfzQFrb8.js";import"./star-CCaWn8O7.js";import"./arrow-right-_EPzcdJQ.js";import"./chain-link-Clz48STf.js";import{a as i}from"./argTableProps-BcVyA3w1.js";import"./link.component-DPZbMBGv.js";import"./props-link-T2vbGLTY.js";import"./popover.component-B6k9T_hf.js";import"./localized-decorator-ManM-QDy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C7uVfe56.js";import"./icon.component-CSACcb-9.js";import"./flex.component-CR4a_v6h.js";import"./card.component-BzQ8QK_Z.js";import"./default-typography.styles-C4zuZ3To.js";import"./divider.component-DkdzoKKs.js";import"./magnifying-glass.component-ndPFfbFq.js";import"./star.component-BioeW9QX.js";import"./arrow-right.component-EXjpSuZX.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
