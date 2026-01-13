import{h as t}from"./iframe-DOJZ23y4.js";import"./link-Bjter6PN.js";import"./popover-DbzlYlKS.js";import"./flex-205Umq_N.js";import"./card-BudnkC4K.js";import"./text-Du_y_I2w.js";import"./divider-CoCmcQNO.js";import"./magnifying-glass-CIiscegr.js";import"./star-CiV7Eovr.js";import"./arrow-right-DLtRfPoj.js";import"./chain-link-BKniPgRK.js";import{a as i}from"./argTableProps-tbwtV2-L.js";import"./link.component-D2F6zDc6.js";import"./props-link-DBKHMaup.js";import"./popover.component-BVV1u9fe.js";import"./localized-decorator-BbXVxjad.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DANNROAF.js";import"./icon.component-BlpY1Aja.js";import"./flex.component-CiPQ6f85.js";import"./card.component-DKolGwEG.js";import"./default-typography.styles-CJsGbX1h.js";import"./divider.component-CdlVzjEc.js";import"./magnifying-glass.component-eAyn4Q-l.js";import"./star.component-F-Iyl_GZ.js";import"./arrow-right.component-pXmR21ft.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
