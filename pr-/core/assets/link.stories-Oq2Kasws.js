import{h as t}from"./iframe-BZiKkoLE.js";import"./link-Cz8YrCra.js";import"./popover-wlUg9pKZ.js";import"./flex-CZyw3eXd.js";import"./card-CqK0AtFj.js";import"./text-BUiW9ujq.js";import"./divider-BMH9c5RQ.js";import"./magnifying-glass-jqZzRvYY.js";import"./star-BDKwcDl9.js";import"./arrow-right-CkhvMWCA.js";import"./chain-link-CC-oPwst.js";import{a as i}from"./argTableProps-Cpq9k_Rz.js";import"./props-link-DgfbCiYI.js";import"./popover.component-C4jM8zoB.js";import"./localized-decorator-D-weAOVX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-llXbPVVc.js";import"./icon.component-DS4xUZ2N.js";import"./flex.component-DkRYPV9U.js";import"./card.component-oFyQ3psH.js";import"./default-typography.styles-CYhmgng3.js";import"./divider.component-fVhIzMad.js";import"./magnifying-glass.component-Cfw5o4PE.js";import"./star.component-Lt7wZgi2.js";import"./arrow-right.component-3w5qOkvU.js";const I={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},A={...e},B={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},P={...e,name:"Icon: Trail",render:()=>t` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},_={...e,name:"Text Decoration",render:()=>t`
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
  `},C={...e,name:"Label",render:()=>t`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},E=["Basic","Lead","Trail","TextDecoration","Label"];export{A as Basic,C as Label,B as Lead,_ as TextDecoration,P as Trail,E as __namedExportsOrder,I as default};
