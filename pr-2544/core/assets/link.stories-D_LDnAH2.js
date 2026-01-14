import{h as t}from"./iframe-DHyn3rYy.js";import"./link-tPy7pJJV.js";import"./popover-7bfYfIUl.js";import"./flex-CtdbGu15.js";import"./card-DOhmmrRz.js";import"./text-BzInb03K.js";import"./divider-0bhTBlO5.js";import"./magnifying-glass-mLVMINjq.js";import"./star-Cp5aqpwY.js";import"./arrow-right-BfEZDtgi.js";import"./chain-link-BRLCIyj8.js";import{a as i}from"./argTableProps-BmcGX8vU.js";import"./link.component-Cv9aX75z.js";import"./props-link-DVx6LwYr.js";import"./popover.component-D_9uIu6P.js";import"./localized-decorator-1ASOYd7l.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CwSpiLiu.js";import"./icon.component-DIcPDEU1.js";import"./flex.component-DdHhs7J9.js";import"./card.component-ee3MQ_1G.js";import"./default-typography.styles-yyNpi92v.js";import"./divider.component-Bi3VN3Lw.js";import"./magnifying-glass.component-uMYawypc.js";import"./star.component-wTGURIfB.js";import"./arrow-right.component-CLJ3te2O.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
