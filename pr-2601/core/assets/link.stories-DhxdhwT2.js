import{h as t}from"./iframe-BavzDZMV.js";import"./link-WMWYsOXF.js";import"./popover-BnG0kT73.js";import"./flex-Dp2zcodN.js";import"./card-B9lFZzJK.js";import"./text-CpmbrUWp.js";import"./divider-DyYQpQoQ.js";import"./magnifying-glass-DLpdllcy.js";import"./star-CzodtEoP.js";import"./arrow-right-BuH_Qisv.js";import"./chain-link-BPdfWeaf.js";import{a as i}from"./argTableProps-gX0lf344.js";import"./link.component-kyDdkP77.js";import"./props-link-B9Dm1hOG.js";import"./popover.component-CPbYpuQr.js";import"./localized-decorator-B6A2Gnt2.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Df8LNFan.js";import"./icon.component-Cev4K6id.js";import"./flex.component-Do3AdSpB.js";import"./card.component-CUPSPXah.js";import"./default-typography.styles-CLT6BhIi.js";import"./divider.component-4lsnXpc3.js";import"./magnifying-glass.component-BQNqcW4P.js";import"./star.component-DpdOyVm-.js";import"./arrow-right.component-Bc5K8cmK.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
