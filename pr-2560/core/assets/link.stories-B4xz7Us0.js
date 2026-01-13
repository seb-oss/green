import{h as t}from"./iframe-B2lF6KQV.js";import"./link-B4BRoe6F.js";import"./popover-DD6BSvXi.js";import"./flex-rejaARhW.js";import"./card-BL0rftLJ.js";import"./text-CMlMgij5.js";import"./divider-BXmCsbMD.js";import"./magnifying-glass-DS2cncMp.js";import"./star-C_8FXj5k.js";import"./arrow-right-B6DKREDv.js";import"./chain-link-ccEx0KV2.js";import{a as i}from"./argTableProps-D0Z9HkZ-.js";import"./link.component-C8ozSBVS.js";import"./props-link-Bt5j5dIM.js";import"./popover.component-CJEMT2tn.js";import"./localized-decorator-DmwnpXt5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BF21MkLi.js";import"./icon.component-QmmjEKmh.js";import"./flex.component-D3FiEuxa.js";import"./card.component-LS_eywYY.js";import"./default-typography.styles-B9QM9L-E.js";import"./divider.component-D4ToaO02.js";import"./magnifying-glass.component-CmdBeZib.js";import"./star.component-DmTU7RCm.js";import"./arrow-right.component-BUuZjNpf.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
