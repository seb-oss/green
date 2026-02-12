import{h as t}from"./iframe-Dp9IHT7M.js";import"./link-Bxv4cAW_.js";import"./popover-uy2Fi1il.js";import"./flex-BwWHANmJ.js";import"./card-7V_T-afe.js";import"./text-DBbTD983.js";import"./divider-DNfVJICO.js";import"./magnifying-glass-Dbj9660o.js";import"./star-VuHxougZ.js";import"./arrow-right-RYpGXRRZ.js";import"./chain-link-Brx4QkDF.js";import{a as i}from"./argTableProps-R5F9VmLh.js";import"./link.component-D6LCHukF.js";import"./props-link-3ZZgSdjh.js";import"./popover.component-DtrkYBYr.js";import"./localized-decorator-DE1HqyVs.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CVCCZJcL.js";import"./icon.component-BLFwunDp.js";import"./flex.component-_Iuoz229.js";import"./card.component-BwAAcLuz.js";import"./default-typography.styles-C-XkYi72.js";import"./divider.component-Chx4EO26.js";import"./magnifying-glass.component-Bm6zDH7_.js";import"./star.component-lDKJdRW1.js";import"./arrow-right.component-B-0zskSm.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
