import{h as t}from"./iframe-DMCXEGAu.js";import"./link-CNmGdcbR.js";import"./popover-CUhykd8K.js";import"./flex-DzLrWfEw.js";import"./card-BuYc4qkW.js";import"./text-BFdeU0QE.js";import"./divider-CzZya_zr.js";import"./magnifying-glass-DPhzHkmw.js";import"./star-t608XapZ.js";import"./arrow-right-BdPw1i0M.js";import"./chain-link-CqEKeq7N.js";import{a as i}from"./argTableProps-DXTGrysM.js";import"./link.component-KI83s08Z.js";import"./props-link-De4m45d6.js";import"./popover.component-BMzFlfQP.js";import"./localized-decorator-BZdAib6r.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BXsopI24.js";import"./icon.component-Biye4ssi.js";import"./flex.component-BKRTXpEx.js";import"./card.component-Pu_1pl35.js";import"./default-typography.styles-C9x5wGJo.js";import"./divider.component-B8mOh2HW.js";import"./magnifying-glass.component-BzPBh_WF.js";import"./star.component-BdjpSf8K.js";import"./arrow-right.component-Csl2u3wC.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
