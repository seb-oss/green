import{h as t}from"./iframe-C8yoY-xQ.js";import"./link-Bj4Q174s.js";import"./popover-DUgsNB6q.js";import"./flex-Du6h-PG3.js";import"./card-Dpe_0NiL.js";import"./text-CH6ttDw6.js";import"./divider-Chlj4JHr.js";import"./magnifying-glass-Cunxgonb.js";import"./star-B0kn7kNX.js";import"./arrow-right-D7fZ47BP.js";import"./chain-link-C3y9J7fK.js";import{a as i}from"./argTableProps-7IVUxd4z.js";import"./link.component-CEvvw78o.js";import"./props-link-C-t3gY2k.js";import"./popover.component-DLIwdy8R.js";import"./localized-decorator-BtPhTmnz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CxdBGnkr.js";import"./icon.component-CGjS-CdK.js";import"./flex.component-DbEOKgSd.js";import"./card.component-CAAlfCMQ.js";import"./default-typography.styles-1biRtNjh.js";import"./divider.component-CSt9JGyb.js";import"./magnifying-glass.component-B72Y-d09.js";import"./star.component-C7_2CiL8.js";import"./arrow-right.component-DF1Hbg4Q.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
