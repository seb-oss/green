import{h as t}from"./iframe-CJoIiIdK.js";import"./link-Bzi3Grpa.js";import"./popover-BEeu1ohJ.js";import"./flex-WZpX7R1u.js";import"./card-Do3Jtmj8.js";import"./text-Br9EQg5A.js";import"./divider-14OQJgVM.js";import"./magnifying-glass-DNOxABk9.js";import"./star-DVl6-lcc.js";import"./arrow-right-CajIF80e.js";import"./chain-link-F4opVXeg.js";import{a as i}from"./argTableProps-BRcL5L6l.js";import"./link.component-F-nfQZSS.js";import"./props-link-Cg9CfTmw.js";import"./popover.component-Ce8F59gP.js";import"./localized-decorator-B52viOIE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-vI5lEVSG.js";import"./icon.component-4oiZW30k.js";import"./flex.component-D_xxqkO6.js";import"./card.component-DhSEVE0I.js";import"./default-typography.styles-D2Jg-mgg.js";import"./divider.component-DSw9e7D8.js";import"./magnifying-glass.component-qBKuJ8xu.js";import"./star.component-DY4DiuXO.js";import"./arrow-right.component-jaU1g6ie.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
