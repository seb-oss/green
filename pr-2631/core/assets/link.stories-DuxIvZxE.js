import{h as t}from"./iframe-BPDGtI50.js";import"./link-zK8MBptR.js";import"./popover-D0PtNJgc.js";import"./flex-D9MHy26o.js";import"./card-DzlNl7VO.js";import"./text-L76GdXtH.js";import"./divider-BqlDtvWp.js";import"./magnifying-glass-t42I3D9q.js";import"./star-D1LxqV6Q.js";import"./arrow-right-BVXzyXxB.js";import"./chain-link-BQULsj9E.js";import{a as i}from"./argTableProps-DDixqn5h.js";import"./link.component-Cdtxv8nm.js";import"./props-link-BubWP99A.js";import"./popover.component-BN_kq-3g.js";import"./localized-decorator-HZus4naQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-vDiTs1L1.js";import"./icon.component-BgFn_o8U.js";import"./flex.component-DPBmp18V.js";import"./card.component-DYwYNPg1.js";import"./default-typography.styles-DvVXRwYN.js";import"./divider.component-C_g2kExF.js";import"./magnifying-glass.component-BUScjG-X.js";import"./star.component-tmX7cZR2.js";import"./arrow-right.component-LZnlbA_0.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
