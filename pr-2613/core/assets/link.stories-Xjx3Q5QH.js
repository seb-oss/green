import{h as t}from"./iframe-Bco6RhSF.js";import"./link-CC_2zLsI.js";import"./popover-DWyj_wIw.js";import"./flex-hlHbYuYh.js";import"./card-C8KN8YZ9.js";import"./text-D0_BBeE3.js";import"./divider-DMzEJ7bY.js";import"./magnifying-glass-VVWGIG4w.js";import"./star-BMVuMssT.js";import"./arrow-right-Dtfl-Uen.js";import"./chain-link-aFsa5iTw.js";import{a as i}from"./argTableProps-IFvRSrEh.js";import"./link.component-BZEJnRpz.js";import"./props-link-6Xz3uL-z.js";import"./popover.component-BwXNAIMk.js";import"./localized-decorator-CR2PmnBm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Wgk3m4Q6.js";import"./icon.component-Csrpw-lX.js";import"./flex.component-Cm2le16w.js";import"./card.component-DWwOkFKS.js";import"./default-typography.styles-B_G-Yi4l.js";import"./divider.component-C6IN8pTO.js";import"./magnifying-glass.component-ChQGEmmK.js";import"./star.component-D0SPLsVR.js";import"./arrow-right.component-CiWz2MWu.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
