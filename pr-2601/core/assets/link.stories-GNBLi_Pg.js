import{h as t}from"./iframe-DuvJJPsW.js";import"./link-CTm_8h7m.js";import"./popover-BG4B0rMJ.js";import"./flex-CnOBYc0X.js";import"./card-BOdU0Smv.js";import"./text-CNqf1oDO.js";import"./divider-CMLeEsG1.js";import"./magnifying-glass-BjglBrSU.js";import"./star-axNaz9OV.js";import"./arrow-right-BsVkI5Cf.js";import"./chain-link-DhbhoEHj.js";import{a as i}from"./argTableProps-oo5_IWA4.js";import"./link.component-C6NkUoVk.js";import"./props-link-Bq9FaAi9.js";import"./popover.component-C1xFQGTT.js";import"./localized-decorator-xYYjw7_4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CVu18ij_.js";import"./icon.component-3WNa7gns.js";import"./flex.component-Bqj0RcrB.js";import"./card.component-DGQRvjJW.js";import"./default-typography.styles-BCJ4fFJf.js";import"./divider.component-C7UZrUrA.js";import"./magnifying-glass.component-JbjOHClJ.js";import"./star.component-CyOzsxoP.js";import"./arrow-right.component-BFFcJyBW.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
