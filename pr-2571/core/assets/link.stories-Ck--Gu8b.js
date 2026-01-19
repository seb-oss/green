import{h as t}from"./iframe-OlsBgo_r.js";import"./link-CmbxDK68.js";import"./popover-BtlKW1ZH.js";import"./flex-BytvadFX.js";import"./card-BvYojY3X.js";import"./text-BYAIfBXO.js";import"./divider-0CTyt3tT.js";import"./magnifying-glass-BlJlgvnQ.js";import"./star-COEuG1Xo.js";import"./arrow-right-By2I2bFH.js";import"./chain-link-DDvx9Fih.js";import{a as i}from"./argTableProps-gvuQkRNa.js";import"./link.component-DAZdsQ72.js";import"./props-link-C4PL4dIC.js";import"./popover.component-DKa76RI0.js";import"./localized-decorator-C6p1g9cH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BXwdOc5M.js";import"./icon.component-DeTz_6Cg.js";import"./flex.component-Dh4lRNXB.js";import"./card.component-B6VtkSNZ.js";import"./default-typography.styles-W7pRaHw0.js";import"./divider.component-CD3tPg38.js";import"./magnifying-glass.component-Bn5o0eWl.js";import"./star.component-DScStRum.js";import"./arrow-right.component-D2tgZYtW.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
