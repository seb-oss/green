import{h as t}from"./iframe-BuI_3Mva.js";import"./link-BBGMCEcg.js";import"./popover-BBO7yQjF.js";import"./flex-CfDPvhY7.js";import"./card-DbQsAO0o.js";import"./text-CnP7Ryfb.js";import"./divider-BQy6A393.js";import"./magnifying-glass-DBaFQVW4.js";import"./star-CmlU-spd.js";import"./arrow-right-avFtpePh.js";import"./chain-link-t4qIld6S.js";import{a as i}from"./argTableProps-CNZq1neL.js";import"./link.component-BcEPjfoK.js";import"./props-link-DCsE2Cwz.js";import"./popover.component-wX-3OT-k.js";import"./localized-decorator-WRRZVpPy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjanmNQ-.js";import"./icon.component-5RBNwOY8.js";import"./flex.component-eYoLGB_i.js";import"./card.component-BbIheG_I.js";import"./default-typography.styles-BQYP8mX0.js";import"./divider.component-jfzfo0Qb.js";import"./magnifying-glass.component-BEQ9t8bD.js";import"./star.component-c6zAmj4f.js";import"./arrow-right.component-CrOKKQ1w.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
