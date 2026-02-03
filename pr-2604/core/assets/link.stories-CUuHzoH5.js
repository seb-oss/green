import{h as t}from"./iframe-yBlaU3uw.js";import"./link-BvjVjwRm.js";import"./popover-qRgjjRLn.js";import"./flex-T0voip7L.js";import"./card-2zxtznxO.js";import"./text-DQ1cqpq4.js";import"./divider-sj2aqyRq.js";import"./magnifying-glass-C-OHNFNM.js";import"./star-ILIWXGzg.js";import"./arrow-right-CvwKupDT.js";import"./chain-link-CDe7daJP.js";import{a as i}from"./argTableProps-W5EXrFoQ.js";import"./link.component-aCnHdnpV.js";import"./props-link-CzXvbfRB.js";import"./popover.component-L8DRza2A.js";import"./localized-decorator-C8wQAk1q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BiYiOMlz.js";import"./icon.component-CnM3VYnP.js";import"./flex.component-BpiN7Lji.js";import"./card.component-ByEYhV9a.js";import"./default-typography.styles-ugrPTiJV.js";import"./divider.component-D6y31fBs.js";import"./magnifying-glass.component-nHWQdIXf.js";import"./star.component-B0lNCYwI.js";import"./arrow-right.component-CXYHKr7L.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
