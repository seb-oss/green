import{h as t}from"./iframe-B2R2niah.js";import"./link-BBZoWo_X.js";import"./popover-CqJygtOs.js";import"./flex-DjGHvj_p.js";import"./card-HYhgumRA.js";import"./text-BulaahWq.js";import"./divider-BVuVmCj7.js";import"./magnifying-glass-D3LgPEFw.js";import"./star-DtWW8JI1.js";import"./arrow-right-CeZn1AnY.js";import"./chain-link-BssSnEpQ.js";import{a as i}from"./argTableProps-DuPywhpa.js";import"./link.component-CWG_5kdO.js";import"./props-link-DLFbe9uE.js";import"./popover.component-SilQDNdY.js";import"./localized-decorator-BD8WDM4_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CbmukxUq.js";import"./icon.component-D_rcXQJU.js";import"./flex.component-B1UtaQMG.js";import"./card.component-BUD21ONz.js";import"./default-typography.styles-BWLySImQ.js";import"./divider.component-Cd2eEtPN.js";import"./magnifying-glass.component-BSvYRqFc.js";import"./star.component-DCknID10.js";import"./arrow-right.component-DHAkQJ5L.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
