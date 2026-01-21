import{h as t}from"./iframe-QVvLFfte.js";import"./link-Bq8FaKsB.js";import"./popover-C7V7_FMB.js";import"./flex-Cp4uQWKA.js";import"./card-BamLWvut.js";import"./text-MMRPx7Ks.js";import"./divider-DK_-OK1-.js";import"./magnifying-glass-BcDHgAzj.js";import"./star-DYmdVjMo.js";import"./arrow-right-C_I0XTcq.js";import"./chain-link-Bi6ZHuNG.js";import{a as i}from"./argTableProps-CGx5Lvoq.js";import"./link.component-CTma-gPN.js";import"./props-link-D-MuwyVt.js";import"./popover.component-DD1lUmJc.js";import"./localized-decorator-o4Dzz4ZV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BrSzyNWt.js";import"./icon.component-B2_WfcN3.js";import"./flex.component-C0rle56H.js";import"./card.component-_54X5HSj.js";import"./default-typography.styles-ByyYdioH.js";import"./divider.component-BNLrYj1v.js";import"./magnifying-glass.component-SrMG68ZP.js";import"./star.component-DjXKUgP6.js";import"./arrow-right.component-BWfs8KOa.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
