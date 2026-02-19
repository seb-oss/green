import{h as t}from"./iframe-DdeT6vR5.js";import"./link-o53iVFGe.js";import"./popover-7FlqCypj.js";import"./flex-CFp8mWqe.js";import"./card-D0knA0Mw.js";import"./text-CKwU0Yxn.js";import"./divider-BxAdvnnC.js";import"./magnifying-glass-Chw9U3F0.js";import"./star-C0yQ3JAe.js";import"./arrow-right-CGt_XGp9.js";import"./chain-link-CqqBTNO1.js";import{a as i}from"./argTableProps-RrJqzOaK.js";import"./link.component-BRoEi07i.js";import"./props-link-D9fuJjnA.js";import"./popover.component-NnhnhCKU.js";import"./localized-decorator-FTgULxfn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BRquWdbu.js";import"./icon.component-CaUNXTa8.js";import"./flex.component-B4NskaHn.js";import"./card.component-lGrm7vkC.js";import"./default-typography.styles-e6Ej32el.js";import"./divider.component-DA84A6My.js";import"./magnifying-glass.component-wXBt86ag.js";import"./star.component-zFL6_HTL.js";import"./arrow-right.component-C8Rxagvj.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
