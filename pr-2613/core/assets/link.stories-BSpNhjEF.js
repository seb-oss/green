import{h as t}from"./iframe-NCz73qay.js";import"./link-CzY3Pt25.js";import"./popover-DMNoSZOd.js";import"./flex-DshQ0Vz1.js";import"./card-LVAbUMcb.js";import"./text-BfBjpbow.js";import"./divider-Cd8aIcZo.js";import"./magnifying-glass-DC0JeubO.js";import"./star-B4y7WsnR.js";import"./arrow-right-D_sWSwRs.js";import"./chain-link-CJ-b8lx_.js";import{a as i}from"./argTableProps-CRbwnLW_.js";import"./link.component-D9QnHYG9.js";import"./props-link-AsJ-Sl5n.js";import"./popover.component-e7EQGf9e.js";import"./localized-decorator-C5ligKZT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-b-I7GJb2.js";import"./icon.component-CTR8jJcj.js";import"./flex.component-CD_9lWUd.js";import"./card.component-DjJvOxIE.js";import"./default-typography.styles-DtvMYO7g.js";import"./divider.component-C2XV53in.js";import"./magnifying-glass.component-DR1NfrpW.js";import"./star.component-CRpw1xX3.js";import"./arrow-right.component-BSw6EOjC.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
