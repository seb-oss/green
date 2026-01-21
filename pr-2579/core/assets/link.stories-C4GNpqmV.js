import{h as t}from"./iframe-nlDDYvqR.js";import"./link-Dxj1y3gb.js";import"./popover-X-f4WAo_.js";import"./flex-B5d_sXwG.js";import"./card-Zyckcsda.js";import"./text-CktAJ6tc.js";import"./divider-DVeva5tg.js";import"./magnifying-glass-iIkA2ngZ.js";import"./star-V-dmfX_l.js";import"./arrow-right-VLqSNH_U.js";import"./chain-link-DjRghmD-.js";import{a as i}from"./argTableProps-p3q7J_-g.js";import"./link.component-CqUZpqxf.js";import"./props-link-B07C56Pg.js";import"./popover.component-5Vks968w.js";import"./localized-decorator-D8mSi4IG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-stdcHKqp.js";import"./icon.component-DuAs_fth.js";import"./flex.component-CnLDL-8K.js";import"./card.component-BOnsqJuP.js";import"./default-typography.styles-BNrcQ6g-.js";import"./divider.component-kTy9KHUv.js";import"./magnifying-glass.component-CbSrY57H.js";import"./star.component-CkOV2lT0.js";import"./arrow-right.component-B-zC62DD.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
