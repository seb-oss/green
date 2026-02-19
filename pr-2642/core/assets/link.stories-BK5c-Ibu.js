import{h as t}from"./iframe-CROge5u7.js";import"./link-BhiB6QSC.js";import"./popover-BfwaMHE2.js";import"./flex-DewXf3Pn.js";import"./card-BTwHfd7X.js";import"./text-D9LVaNBY.js";import"./divider-CeuZW5aI.js";import"./magnifying-glass-COzhJySP.js";import"./star-DALJkR45.js";import"./arrow-right-Cm-vyzDI.js";import"./chain-link-Cftccq62.js";import{a as i}from"./argTableProps-FdZMBgUx.js";import"./link.component-CSs-o_rr.js";import"./props-link-DJvx8VJr.js";import"./popover.component-q5wURwUL.js";import"./localized-decorator-BsQ1YOEj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-IhdNM4vG.js";import"./icon.component-Dui71Urp.js";import"./flex.component-D9VTUB86.js";import"./card.component-DsFRrfe7.js";import"./default-typography.styles-DxQFDVPk.js";import"./divider.component-YMyCqcXl.js";import"./magnifying-glass.component-DJ4d0zGX.js";import"./star.component-D31PXpv2.js";import"./arrow-right.component-KbeVoo1H.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
