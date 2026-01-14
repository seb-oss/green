import{h as t}from"./iframe-CqMRxf4t.js";import"./link-CL1ICu-y.js";import"./popover-BGy1cma5.js";import"./flex-DFeOhYoa.js";import"./card-DmvFaZ-3.js";import"./text-CB7_rb84.js";import"./divider-BEKo5l9w.js";import"./magnifying-glass-DjwCmGUY.js";import"./star-hJyQZjDP.js";import"./arrow-right-BDlGy5Jm.js";import"./chain-link-Db47uono.js";import{a as i}from"./argTableProps-BB_wX5CW.js";import"./link.component-Cw6ztZPB.js";import"./props-link-CBV5vpQ_.js";import"./popover.component-C443CdSQ.js";import"./localized-decorator-BUOryX8v.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BeTsQhGl.js";import"./icon.component-DG8vwsfl.js";import"./flex.component-D01Szg88.js";import"./card.component-C5zEme9g.js";import"./default-typography.styles-EquihxG1.js";import"./divider.component-DvdTisv8.js";import"./magnifying-glass.component-mD3nxej3.js";import"./star.component-DHQZCIRm.js";import"./arrow-right.component-DkxIMVXS.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
