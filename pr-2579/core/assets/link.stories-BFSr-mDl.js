import{h as t}from"./iframe-BQ8Xjw8d.js";import"./link-BqL0zAaU.js";import"./popover-BGYI9HN2.js";import"./flex-4r-oBX8S.js";import"./card-BYV7RZUJ.js";import"./text-B0enSeDh.js";import"./divider-Bxwg1A95.js";import"./magnifying-glass-Bqs6cYoJ.js";import"./star-DXihXSq-.js";import"./arrow-right-7cnFD-Fr.js";import"./chain-link-HeH5mRRH.js";import{a as i}from"./argTableProps-Da36wL0g.js";import"./link.component-xFryRwpU.js";import"./props-link-T2FHuhyh.js";import"./popover.component-BXOkNRrJ.js";import"./localized-decorator-Dv8nsHvA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnL56KOG.js";import"./icon.component-BVf0S7fu.js";import"./flex.component--lZWSZDD.js";import"./card.component-CHHobmy3.js";import"./default-typography.styles-JpAfgxcb.js";import"./divider.component-SyiKBaiz.js";import"./magnifying-glass.component-CJ6Y8rhG.js";import"./star.component--VhxCCH8.js";import"./arrow-right.component-Dwn3qcz_.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
