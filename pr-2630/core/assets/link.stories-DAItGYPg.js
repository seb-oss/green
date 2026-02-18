import{h as t}from"./iframe-DoN8QKNg.js";import"./link-DrIk_-VP.js";import"./popover-9S3g1TVT.js";import"./flex-B6t_Bvhd.js";import"./card-PnEcf9IN.js";import"./text-DBoZHSQL.js";import"./divider-CoBSgnrn.js";import"./magnifying-glass-4TVpNgAX.js";import"./star-CGBr-IEU.js";import"./arrow-right-DDyCoi9j.js";import"./chain-link-DdoQ98Hc.js";import{a as i}from"./argTableProps-eEBgmDLZ.js";import"./link.component-CIp8XrpQ.js";import"./props-link-BdvSKV0o.js";import"./popover.component-Joky28O-.js";import"./localized-decorator-BflXXV4W.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bq2t_uSa.js";import"./icon.component-BM_rlRnz.js";import"./flex.component-Cs0vbcsz.js";import"./card.component-DW9cGvxx.js";import"./default-typography.styles-D8cqy38C.js";import"./divider.component-Dal9a-3i.js";import"./magnifying-glass.component-CvPIJzzP.js";import"./star.component-QFulx0n7.js";import"./arrow-right.component-CzoBrq4U.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
