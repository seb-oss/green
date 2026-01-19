import{h as t}from"./iframe-DFZq2VWP.js";import"./link-3oGpmYy9.js";import"./popover-D9Du2H6H.js";import"./flex-CgDHQ9ZX.js";import"./card-NNUU_LPK.js";import"./text-BUdUDL_i.js";import"./divider-CzAQPzRW.js";import"./magnifying-glass-CTyFFYri.js";import"./star-BfDB18C4.js";import"./arrow-right-CjGmZ7j8.js";import"./chain-link-CD-rsd8Q.js";import{a as i}from"./argTableProps-DuOp1GPf.js";import"./link.component-DYGwHVXY.js";import"./props-link-BJOGV81B.js";import"./popover.component-Df4oTtqD.js";import"./localized-decorator-Dan9MByZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CViC3XPB.js";import"./icon.component-BHY8V_GK.js";import"./flex.component-DFWMQkZC.js";import"./card.component-BBtAMepo.js";import"./default-typography.styles-DOMDS0Zr.js";import"./divider.component-DPcr8SjE.js";import"./magnifying-glass.component-B2R5wQ9M.js";import"./star.component-CY2XasSJ.js";import"./arrow-right.component--wKlLRnd.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
