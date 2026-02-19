import{h as t}from"./iframe-BNlHJcLe.js";import"./link-DzL1wwp4.js";import"./popover-BC4KYQqK.js";import"./flex-CWGmE_P8.js";import"./card-Cip1Dznm.js";import"./text-C515lem5.js";import"./divider-B5HgyM7i.js";import"./magnifying-glass-DWpPpp2C.js";import"./star-B8omYjMH.js";import"./arrow-right-DioQcoqh.js";import"./chain-link-DuGQP1TB.js";import{a as i}from"./argTableProps-BNFgqABZ.js";import"./link.component-DwNTH8VZ.js";import"./props-link-C5uj4ou7.js";import"./popover.component-CWwxesGR.js";import"./localized-decorator-nkBLdZC8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CSJq7CvR.js";import"./icon.component-CRA7X51f.js";import"./flex.component-Bcx4JsMO.js";import"./card.component-DN0lPKKU.js";import"./default-typography.styles-CLZsTHM9.js";import"./divider.component-CtRqpW1p.js";import"./magnifying-glass.component-ZiLQntVX.js";import"./star.component-CkYhKjEM.js";import"./arrow-right.component-wBfL5sUT.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
