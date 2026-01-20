import{h as t}from"./iframe-5mjnOIbQ.js";import"./link-BUP_reRL.js";import"./popover-C3MVfome.js";import"./flex-CRTNrUwp.js";import"./card-CWZE5PU4.js";import"./text-BmsXqh_G.js";import"./divider-Dow04fOA.js";import"./magnifying-glass-CBGrK43R.js";import"./star-H14uZE59.js";import"./arrow-right-CMcM1NMZ.js";import"./chain-link-BOAZ1Z9x.js";import{a as i}from"./argTableProps-DCqSLiRU.js";import"./link.component-Cp-WieD8.js";import"./props-link-55ZDsUnL.js";import"./popover.component-DcN0PmOV.js";import"./localized-decorator-C511PcAv.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CFAaHBB5.js";import"./icon.component-BJMCEAD6.js";import"./flex.component-B61xVOzx.js";import"./card.component-Ce8OPzII.js";import"./default-typography.styles-DTC5Hohg.js";import"./divider.component-WPLFlHT6.js";import"./magnifying-glass.component--Jk18VRI.js";import"./star.component-CE8NoBc7.js";import"./arrow-right.component-CEO4RDUb.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
