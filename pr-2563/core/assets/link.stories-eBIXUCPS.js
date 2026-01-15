import{h as t}from"./iframe-DKtVfO4i.js";import"./link-DkQ1E-Wd.js";import"./popover-C-YzVzXk.js";import"./flex-8oqxpXMB.js";import"./card-HYIK81X5.js";import"./text-DJN2fvam.js";import"./divider-BXXWivVk.js";import"./magnifying-glass-2nh-y36U.js";import"./star-D8hdpDXb.js";import"./arrow-right-D1IQFKdi.js";import"./chain-link-DF9CtXYu.js";import{a as i}from"./argTableProps-CT5EeQLh.js";import"./link.component-B6nhjlcV.js";import"./props-link-D_gp7Tte.js";import"./popover.component-DrisHnCR.js";import"./localized-decorator-ChlCLfkP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DE6lcoJt.js";import"./icon.component-Ckr318eu.js";import"./flex.component-Lw7CX6Ts.js";import"./card.component-5yyoJszG.js";import"./default-typography.styles-CFA4i-mD.js";import"./divider.component-CBY_RSfY.js";import"./magnifying-glass.component-DIDxj53H.js";import"./star.component-B7stiksd.js";import"./arrow-right.component-Br7h9vR3.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
