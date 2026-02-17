import{h as t}from"./iframe-9Cc4SVh6.js";import"./link-C-p8cYY_.js";import"./popover-DMwFFUNN.js";import"./flex-DoveuQPA.js";import"./card-BQTddVOa.js";import"./text-DGW4sABd.js";import"./divider-BHHny5v2.js";import"./magnifying-glass-BWjdKeDT.js";import"./star-BHXNO_fI.js";import"./arrow-right-Bo0eOlBy.js";import"./chain-link-BSOMqQhh.js";import{a as i}from"./argTableProps-DvCV5CVB.js";import"./link.component-BftGzPhU.js";import"./props-link-CQJzyi1b.js";import"./popover.component-CwY69XUx.js";import"./localized-decorator-DidKBAlI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BEJH3FmH.js";import"./icon.component-CkCDfQFb.js";import"./flex.component-H_OEGOx6.js";import"./card.component-C04W1d44.js";import"./default-typography.styles-Dr9H6OoG.js";import"./divider.component-D0IhhMTa.js";import"./magnifying-glass.component-DgIT_sjS.js";import"./star.component-B8-fUFyU.js";import"./arrow-right.component-G5XfIiIY.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
