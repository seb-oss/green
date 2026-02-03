import{h as t}from"./iframe-DY4zMYuy.js";import"./link-DZelFNYR.js";import"./popover-kx8OC6iW.js";import"./flex-ofrsO3A5.js";import"./card-Dinyssf6.js";import"./text-DBWKmB1x.js";import"./divider-cJRzIicI.js";import"./magnifying-glass-Bo6zyqp5.js";import"./star-Rhydoe96.js";import"./arrow-right-qA1dt1IL.js";import"./chain-link-Bags_TSs.js";import{a as i}from"./argTableProps-CdcpGbWc.js";import"./link.component-BKoetLfJ.js";import"./props-link-Db2Kl-LM.js";import"./popover.component-BNjy2HzE.js";import"./localized-decorator-BXYk1OcL.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D-aIl8Wk.js";import"./icon.component-DYtvIxiB.js";import"./flex.component-RC8ATDCr.js";import"./card.component-_Nmo-84j.js";import"./default-typography.styles-BWEPvTIt.js";import"./divider.component-DmMhfZ_d.js";import"./magnifying-glass.component-DBf1Rta_.js";import"./star.component-BLuWCViJ.js";import"./arrow-right.component-JeqCVSn2.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
