import{h as t}from"./iframe-i-YM5Qxf.js";import"./link-ByOYaUyC.js";import"./popover-CkwhXJan.js";import"./flex-DKNhuzsh.js";import"./card-DBaW47M7.js";import"./text-D8ef2lmO.js";import"./divider-BcyyWE7V.js";import"./magnifying-glass-BEXtFUZK.js";import"./star-DMN4i4nD.js";import"./arrow-right-DKaYGflm.js";import"./chain-link-DSn-RMdQ.js";import{a as i}from"./argTableProps--LUrPRXA.js";import"./link.component-aEOhDjW6.js";import"./props-link-CzzvpNjo.js";import"./popover.component-DdjztAeu.js";import"./localized-decorator-CkxI7jm-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CC38gYo1.js";import"./icon.component-C7iCEPBm.js";import"./flex.component-CiVGWwuh.js";import"./card.component-BdRWpuNF.js";import"./default-typography.styles-C_STuje8.js";import"./divider.component-DPtwjZ9l.js";import"./magnifying-glass.component-BvhaubKK.js";import"./star.component-ZmEphO6b.js";import"./arrow-right.component-GtvLQCKz.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
