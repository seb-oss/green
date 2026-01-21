import{h as t}from"./iframe-BvJ9qi3m.js";import"./link-DO0TUcho.js";import"./popover-3ybBjcJP.js";import"./flex-Ci9-TNGk.js";import"./card-D0gGr3w1.js";import"./text-BrMLrS7G.js";import"./divider-neWJ1u0u.js";import"./magnifying-glass-DO3a9KNQ.js";import"./star-CaLoXu8F.js";import"./arrow-right-DuiupOFW.js";import"./chain-link-DVNVOM18.js";import{a as i}from"./argTableProps-Dlf7tHQD.js";import"./link.component-CqTQm8jj.js";import"./props-link-DExkosJd.js";import"./popover.component-DaoLQkhy.js";import"./localized-decorator-yX1kdmUL.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Yr8S-wkI.js";import"./icon.component-HY8skLgu.js";import"./flex.component-D0FPoO6_.js";import"./card.component-Bekm9NNJ.js";import"./default-typography.styles-B98YBXGb.js";import"./divider.component-CRprEtMi.js";import"./magnifying-glass.component-fdtgeqjJ.js";import"./star.component-bDOO1sEY.js";import"./arrow-right.component-CeebtYTO.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
