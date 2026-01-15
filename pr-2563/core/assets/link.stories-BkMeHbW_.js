import{h as t}from"./iframe-DB_oVbyA.js";import"./link-CGRT58t-.js";import"./popover-DM5XOS9R.js";import"./flex-B1McPFGg.js";import"./card-BHdlXxFm.js";import"./text-Ca5QqvNs.js";import"./divider-ObtYvyAY.js";import"./magnifying-glass-DmLptQ4l.js";import"./star-ClIpGB7E.js";import"./arrow-right-DtCgb2to.js";import"./chain-link-atDNoLwV.js";import{a as i}from"./argTableProps-B76e1JNV.js";import"./link.component-DRP0dM5F.js";import"./props-link-CSqjHC8s.js";import"./popover.component-BUPAN7Fk.js";import"./localized-decorator-DlNuqE9w.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CQtxVTMV.js";import"./icon.component-vvk5QY31.js";import"./flex.component-BuewdMkP.js";import"./card.component-Cs6wsFd_.js";import"./default-typography.styles-CDGosH0E.js";import"./divider.component-t6_THFj_.js";import"./magnifying-glass.component-C2QTuk9E.js";import"./star.component-BlIiMh6J.js";import"./arrow-right.component-Do4b1hNj.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
