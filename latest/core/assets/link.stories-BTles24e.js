import{h as t}from"./iframe-iTp6uJWY.js";import"./link-CV4RKDgW.js";import"./popover-CyLGCGcD.js";import"./flex-CCIVfaSE.js";import"./card-DN2oGusX.js";import"./text-CcUR_mMe.js";import"./divider-B-XtOCfi.js";import"./magnifying-glass-DuEEM2xZ.js";import"./star-CgOvUr7t.js";import"./arrow-right-D2o1MNlJ.js";import"./chain-link-DSs1B6QF.js";import{a as i}from"./argTableProps-P7fL4tZk.js";import"./props-link-Rpc7hPgz.js";import"./popover.component-BKRREik1.js";import"./localized-decorator-D-ZR5rvT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-1Q6k81jQ.js";import"./icon.component-CSYMpqUX.js";import"./flex.component-nuwIDH92.js";import"./card.component-DGl-TPP7.js";import"./default-typography.styles-CdOQY8qz.js";import"./divider.component-DmoWd1Eo.js";import"./magnifying-glass.component-Cw2Mxq5b.js";import"./star.component-DkjTmI1-.js";import"./arrow-right.component-D2nA9Pst.js";const I={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},A={...e},B={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
