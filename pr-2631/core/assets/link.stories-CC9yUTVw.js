import{h as t}from"./iframe-VsbkeGCl.js";import"./link-RHajIjkH.js";import"./popover-D9NQSill.js";import"./flex-DE8WVljZ.js";import"./card-ByC98Q4W.js";import"./text-c91g1Ae9.js";import"./divider-BVH9aoDm.js";import"./magnifying-glass-19v0lR5z.js";import"./star-CMENgNpk.js";import"./arrow-right-BjTINIWR.js";import"./chain-link-DVfqBYiF.js";import{a as i}from"./argTableProps-B_m1l0iu.js";import"./link.component-BcLZqyfS.js";import"./props-link-YMy0BP6e.js";import"./popover.component-B5cKVuVT.js";import"./localized-decorator-C6DN-AeH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bj4PYORy.js";import"./icon.component-melMtIU4.js";import"./flex.component-BrpdvwZj.js";import"./card.component-DZHBtaXg.js";import"./default-typography.styles-CWQ9K0n8.js";import"./divider.component-w_x4V01S.js";import"./magnifying-glass.component-Dk5yLeXM.js";import"./star.component-Dub1_EqA.js";import"./arrow-right.component-CNGBG5Gb.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
