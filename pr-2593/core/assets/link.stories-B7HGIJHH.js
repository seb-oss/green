import{h as t}from"./iframe-CELF-Vyq.js";import"./link-xPDnpzrf.js";import"./popover-BxlQchJu.js";import"./flex-BkVBScXw.js";import"./card-CNF4-peq.js";import"./text-BIMLwBqY.js";import"./divider-CaGihetj.js";import"./magnifying-glass-BFKuwjF7.js";import"./star-CO9A878w.js";import"./arrow-right-VuXokpej.js";import"./chain-link-DpWboSaW.js";import{a as i}from"./argTableProps-DUFUo9tI.js";import"./link.component-DWX0U7pi.js";import"./props-link-CNeycfOW.js";import"./popover.component-C2sbpQpD.js";import"./localized-decorator-DerGAKJ_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-zo88JS2_.js";import"./icon.component-B-pG8KGI.js";import"./flex.component-0Gth6Pct.js";import"./card.component-Bnzv_dhj.js";import"./default-typography.styles-vxbcaer-.js";import"./divider.component-B-UHUd_S.js";import"./magnifying-glass.component-7URYOpuq.js";import"./star.component-4OGteT5o.js";import"./arrow-right.component-DN3cztpo.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
