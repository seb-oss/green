import{h as t}from"./iframe-_PQ_MQ83.js";import"./link-CRaJHkdd.js";import"./popover-BuDp5-La.js";import"./flex-BtqjTgzz.js";import"./card-DmmPjolo.js";import"./text-CheufDxn.js";import"./divider-DbCTAbzk.js";import"./magnifying-glass-C9x2vNBL.js";import"./star-DcW0gngW.js";import"./arrow-right-DlpYkXdH.js";import"./chain-link-Dhix0VWd.js";import{a as i}from"./argTableProps-DRdCbFbr.js";import"./link.component-Dvjupc2N.js";import"./props-link-BZza9YyC.js";import"./popover.component-D49V2AAG.js";import"./localized-decorator-CKkXdIcu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-LsWUtBer.js";import"./icon.component-YkGRoZnr.js";import"./flex.component-Do-3NNAq.js";import"./card.component-DvQLO9ot.js";import"./default-typography.styles-BhDMmH33.js";import"./divider.component-BgvuKnOE.js";import"./magnifying-glass.component-BMZ1dK8S.js";import"./star.component-Ck0cwvzO.js";import"./arrow-right.component-C48SFoYO.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
