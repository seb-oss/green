import{h as t}from"./iframe-BjnJkqwv.js";import"./link-DBPfgFK2.js";import"./popover-DzdSTZlr.js";import"./flex-ClMKmKgJ.js";import"./card-CqrK2LMs.js";import"./text-DZoM2kOk.js";import"./divider-COe4DbQA.js";import"./magnifying-glass-CTC3gJEp.js";import"./star-DQvBgGew.js";import"./arrow-right-DU1ErVwt.js";import"./chain-link-D-TOVWSM.js";import{a as i}from"./argTableProps-Blubdwx0.js";import"./link.component-BrezxSaf.js";import"./props-link-5tw8yJMG.js";import"./popover.component-DOMOHAY4.js";import"./localized-decorator-a78JXZiA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dn4ni-OB.js";import"./icon.component-CfBnFFAe.js";import"./flex.component-DYRxf4FB.js";import"./card.component-CNRv87Ji.js";import"./default-typography.styles-Ck7kK6xS.js";import"./divider.component-DPkpV_5q.js";import"./magnifying-glass.component-DwSInkFi.js";import"./star.component-u0oz5rt3.js";import"./arrow-right.component-BAj_HaNa.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
