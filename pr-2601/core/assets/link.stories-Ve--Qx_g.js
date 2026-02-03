import{h as t}from"./iframe-D-XOkR_D.js";import"./link-DpuE1Y0P.js";import"./popover-1kNAqXaG.js";import"./flex-BgV95cYc.js";import"./card-CzuwSFZh.js";import"./text-D0qi6bXO.js";import"./divider-XlStGLij.js";import"./magnifying-glass-DUFMEyiR.js";import"./star-CjfuCcWE.js";import"./arrow-right-CDeVRbbd.js";import"./chain-link-BtDPMpwO.js";import{a as i}from"./argTableProps-B-R26qw_.js";import"./link.component-B_TZ8mgL.js";import"./props-link-iQgSbXE9.js";import"./popover.component-DR5YiB9p.js";import"./localized-decorator-BspQpkk2.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DCkq1wPS.js";import"./icon.component-D8hwbnN6.js";import"./flex.component-Bww2TeaM.js";import"./card.component-D0DpATwh.js";import"./default-typography.styles-CS7cXJLL.js";import"./divider.component-DYryx0io.js";import"./magnifying-glass.component-C0RQaWQz.js";import"./star.component-BWJLq2Tk.js";import"./arrow-right.component-BM4EgUQm.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
