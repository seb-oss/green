import{h as t}from"./iframe-3naDiogp.js";import"./link-9d1UI8rH.js";import"./popover-DOu3HpVa.js";import"./flex-DY381AeN.js";import"./card-CK9xdid3.js";import"./text-CH-9nXLh.js";import"./divider-4LNIVyOt.js";import"./magnifying-glass-CspjAuC0.js";import"./star-QPrE-caI.js";import"./arrow-right-DOh8wHQs.js";import"./chain-link-RpQ-Qt02.js";import{a as i}from"./argTableProps-Ci-hptin.js";import"./link.component-Bcxm6jcF.js";import"./props-link-B9FXj34P.js";import"./popover.component-BURbujwz.js";import"./localized-decorator-BmxGT5a4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DwZ3QtkJ.js";import"./icon.component-3nTHe6ep.js";import"./flex.component-s2rsx7Cf.js";import"./card.component-B5sGSDD0.js";import"./default-typography.styles-BjnpkM48.js";import"./divider.component-DkT3hUjt.js";import"./magnifying-glass.component-jl4RJOQR.js";import"./star.component-CD6SuKXB.js";import"./arrow-right.component-m1HKtrBy.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
