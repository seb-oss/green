import{h as t}from"./iframe-D1501rwE.js";import"./link-os4hLIk0.js";import"./popover-Dh_o7WoU.js";import"./flex-BsqJUuWB.js";import"./card-BbLWJjBX.js";import"./text-xztMuV7h.js";import"./divider-DOP4vzsv.js";import"./magnifying-glass-BmsUnh87.js";import"./star-SrnN7YUV.js";import"./arrow-right-ypHMhnpv.js";import"./chain-link-BN65iuMx.js";import{a as i}from"./argTableProps-CbXzKgdZ.js";import"./link.component-DxGFoDBi.js";import"./props-link-DzGc_zXS.js";import"./popover.component-BUy_jdif.js";import"./localized-decorator-DH_n2Fgt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D_fNzNeT.js";import"./icon.component-CBmASKX5.js";import"./flex.component-CRbuC2X4.js";import"./card.component-CrOhynkA.js";import"./default-typography.styles-DeoEGzB2.js";import"./divider.component-CRrvZ_Xk.js";import"./magnifying-glass.component-DN7jEaux.js";import"./star.component-BIHYoZFd.js";import"./arrow-right.component-CsuB5mqK.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
