import{h as t}from"./iframe-HiFJV8bk.js";import"./link-C-9HyMrx.js";import"./popover-CjAm5GjW.js";import"./flex-O4TBLgje.js";import"./card-DJk5Pxku.js";import"./text-D-o_ZTVi.js";import"./divider-BhkZXFPa.js";import"./magnifying-glass-Bwajyo1T.js";import"./star-CsRrufW-.js";import"./arrow-right-BHwS0FVu.js";import"./chain-link-B1j3rFd8.js";import{a as i}from"./argTableProps-DBp_PM4G.js";import"./link.component-BFpjLRI3.js";import"./props-link-DpsfDGUl.js";import"./popover.component-Cx-T2aYB.js";import"./localized-decorator-Dmej81GR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-O5n-8TM7.js";import"./icon.component-BK5A2ge7.js";import"./flex.component-BtZj_Xnn.js";import"./card.component-BDYeFBPt.js";import"./default-typography.styles-7vsrIjs3.js";import"./divider.component-D17d9aYB.js";import"./magnifying-glass.component-qMIUbhIX.js";import"./star.component-8IwMMI8J.js";import"./arrow-right.component-BJekzg-v.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
