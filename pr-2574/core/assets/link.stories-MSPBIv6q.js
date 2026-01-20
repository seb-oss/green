import{h as t}from"./iframe-BkGvYmww.js";import"./link-D6YzN-X2.js";import"./popover-Ji6lO_YZ.js";import"./flex-CddmS-ZU.js";import"./card-CAaB9dtx.js";import"./text-C0ri8XKx.js";import"./divider-CLSytDgB.js";import"./magnifying-glass-BdqlDy5J.js";import"./star-C5DLhO6j.js";import"./arrow-right-CIqmvLXy.js";import"./chain-link-D2yLTA3b.js";import{a as i}from"./argTableProps-CG7WeaAj.js";import"./link.component-Bs3cc7Rt.js";import"./props-link-Cynk73-L.js";import"./popover.component-CNOuX2Xv.js";import"./localized-decorator-CtflH7fI.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-TJwuRnEb.js";import"./icon.component-Duin8-xy.js";import"./flex.component-CsUSGEaD.js";import"./card.component-jEkPx2Ld.js";import"./default-typography.styles-_GmNU5F6.js";import"./divider.component-CcRvtMHp.js";import"./magnifying-glass.component-Dibhb1M0.js";import"./star.component-l1CMyWZa.js";import"./arrow-right.component-C34hd5LA.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
