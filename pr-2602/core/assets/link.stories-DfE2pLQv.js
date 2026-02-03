import{h as t}from"./iframe-BwkPDoxN.js";import"./link-CMbp3XE5.js";import"./popover--NG_zMRg.js";import"./flex-COwZRp-g.js";import"./card-BmIA69L6.js";import"./text-CGGKdvw_.js";import"./divider-s2y26Phw.js";import"./magnifying-glass-BZ_tEmQl.js";import"./star-oZRqTYg8.js";import"./arrow-right-OZqgrQ_5.js";import"./chain-link-CKTk6pu4.js";import{a as i}from"./argTableProps-CaSK2nfy.js";import"./link.component-ColQ7sqZ.js";import"./props-link-CF3vauQG.js";import"./popover.component-eUvH0i4y.js";import"./localized-decorator-B-qp9NjG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3MPeq7F.js";import"./icon.component-JGK0YT_U.js";import"./flex.component-D2nCY6Na.js";import"./card.component-DaCxy0yf.js";import"./default-typography.styles-YTALL5T0.js";import"./divider.component-DPgTMegT.js";import"./magnifying-glass.component-DZ768SUQ.js";import"./star.component-DTPehDlt.js";import"./arrow-right.component-CFZWMAHp.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
