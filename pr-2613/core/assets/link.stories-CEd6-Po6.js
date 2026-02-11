import{h as t}from"./iframe-CQq7046-.js";import"./link-ScmB39au.js";import"./popover-CTjTpROl.js";import"./flex-CF_tJaOy.js";import"./card-moc6iWiJ.js";import"./text-C-9GmmKD.js";import"./divider-C1OI2jr2.js";import"./magnifying-glass-lHDtbZuq.js";import"./star-BZAiTcVz.js";import"./arrow-right-j0cUX5oV.js";import"./chain-link-gW_PEtU6.js";import{a as i}from"./argTableProps-D4V1ERLU.js";import"./link.component-2app7ehM.js";import"./props-link-DmPplygA.js";import"./popover.component-DIiUus2u.js";import"./localized-decorator-CbvQAhQB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bwr3kRkD.js";import"./icon.component-DyWYKULO.js";import"./flex.component-CxtwwoO6.js";import"./card.component-Cx6vq4fa.js";import"./default-typography.styles-D2yvnV8Q.js";import"./divider.component-e1VMjPeM.js";import"./magnifying-glass.component-C93ZWP3E.js";import"./star.component-CKw5l7e5.js";import"./arrow-right.component-pbXsct8Q.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
