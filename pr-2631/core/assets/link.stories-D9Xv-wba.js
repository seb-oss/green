import{h as t}from"./iframe-XCkOX_Dk.js";import"./link-CsxU7QhH.js";import"./popover-D8SpJz4V.js";import"./flex-CctrsQiv.js";import"./card-DicnVQgg.js";import"./text-DGnSjNfA.js";import"./divider-D0AFivGY.js";import"./magnifying-glass-CuBYzBde.js";import"./star-BLcNkzv7.js";import"./arrow-right-Dkhzs8_Q.js";import"./chain-link-BeLxuus3.js";import{a as i}from"./argTableProps-DqGmbBtA.js";import"./link.component-CKACbs1s.js";import"./props-link-CM35snaD.js";import"./popover.component-M2TfNuDo.js";import"./localized-decorator-Du6THOix.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DGevY4g_.js";import"./icon.component-CEoqNPUd.js";import"./flex.component-DKiKeHQX.js";import"./card.component-D5NoxMXZ.js";import"./default-typography.styles-BNcNdRUi.js";import"./divider.component-C9itpI5a.js";import"./magnifying-glass.component-CJdYce1m.js";import"./star.component-CGdKg0WQ.js";import"./arrow-right.component-DL1H9RRJ.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
