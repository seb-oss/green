import{h as t}from"./iframe-DrpbGOBy.js";import"./link-Ca6UNsYX.js";import"./popover-nwntPgYl.js";import"./flex-CBHUutJ_.js";import"./card-C5x0x5LV.js";import"./text-YmIhC6ea.js";import"./divider-C94oy4rz.js";import"./magnifying-glass-C8hoG8_P.js";import"./star-B6zLzuTs.js";import"./arrow-right-DUvI7OdV.js";import"./chain-link-DnDolfnF.js";import{a as i}from"./argTableProps-bZqWRwhQ.js";import"./link.component-mOWME4sV.js";import"./props-link-CXEgDqvw.js";import"./popover.component-B-Z3uz9-.js";import"./localized-decorator-CZeAc3pd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CUpQdpA6.js";import"./icon.component-FS7sQWzM.js";import"./flex.component-BBy4cixO.js";import"./card.component-TDhnY8Bn.js";import"./default-typography.styles-D6Os5mfZ.js";import"./divider.component-CjGxvDo9.js";import"./magnifying-glass.component-BrwKKRZ4.js";import"./star.component-NKA2bwI7.js";import"./arrow-right.component-CA1Tq8zS.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
