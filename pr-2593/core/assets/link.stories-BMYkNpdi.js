import{h as t}from"./iframe-DafHIkju.js";import"./link-V0g592vV.js";import"./popover-D-sD6Fcv.js";import"./flex-g1Uot3jJ.js";import"./card-BFrA_GFa.js";import"./text-C5_Y1IZP.js";import"./divider-BdS3XFj4.js";import"./magnifying-glass-eY0eOmac.js";import"./star-B5BGDrWS.js";import"./arrow-right-Diuow-df.js";import"./chain-link-fGlyHBLi.js";import{a as i}from"./argTableProps-DLgyprAh.js";import"./link.component-DgtWAo1U.js";import"./props-link-CF9S_dUH.js";import"./popover.component-DtmPL3uU.js";import"./localized-decorator-WBJcVGCI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-TLW-yzG9.js";import"./icon.component-Cp3XGKFu.js";import"./flex.component-CPWa8UO7.js";import"./card.component-ykH1nxb_.js";import"./default-typography.styles-B1sQNMrh.js";import"./divider.component-CqWLEg_U.js";import"./magnifying-glass.component-CSw3wZGl.js";import"./star.component-2fKF8Gki.js";import"./arrow-right.component-ClI-JCZ9.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
