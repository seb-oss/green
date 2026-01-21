import{h as t}from"./iframe-ws1MlFGZ.js";import"./link-Cqr4CSEs.js";import"./popover-eNHQhBZa.js";import"./flex-D29d2Q1o.js";import"./card-DqN4x-W7.js";import"./text-COvUSJaP.js";import"./divider-CRmMLo-q.js";import"./magnifying-glass-BsA-Hpls.js";import"./star-DFUOiIVH.js";import"./arrow-right-BeWfs2zW.js";import"./chain-link-BcRP8rzP.js";import{a as i}from"./argTableProps-jIkb-kzq.js";import"./link.component-l2kyCtl5.js";import"./props-link-_4yBEAH1.js";import"./popover.component-kE68GLlu.js";import"./localized-decorator-Co9lq93q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B_iAO7Xh.js";import"./icon.component-CYaFRt3a.js";import"./flex.component-BHjGU510.js";import"./card.component-BZd9eAUU.js";import"./default-typography.styles-mZJAAUIR.js";import"./divider.component-vmNxNlM-.js";import"./magnifying-glass.component-B5XsLYHi.js";import"./star.component-Y-Lz_zJB.js";import"./arrow-right.component-b9Br_SBV.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
