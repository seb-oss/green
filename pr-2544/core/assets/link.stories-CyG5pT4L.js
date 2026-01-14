import{h as t}from"./iframe-ZOlFYfLy.js";import"./link-DJOSbvpA.js";import"./popover-fGlPRA9K.js";import"./flex-DhzznBBd.js";import"./card-CZjioQHz.js";import"./text-DMlLn2te.js";import"./divider-Dk-vb4od.js";import"./magnifying-glass-BVi0O54l.js";import"./star-CmGCKV3H.js";import"./arrow-right-DICUXIlb.js";import"./chain-link-Lf7-92BQ.js";import{a as i}from"./argTableProps-Xr2WtL-R.js";import"./link.component-2-Ktw0ha.js";import"./props-link-DUAIdHxZ.js";import"./popover.component-BPSct5Hk.js";import"./localized-decorator-Dp7ZB-qa.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C4sXXw9y.js";import"./icon.component-CZj7Ui7t.js";import"./flex.component-N13VCGcr.js";import"./card.component-C62jPbK8.js";import"./default-typography.styles-Ba6dvBEY.js";import"./divider.component-BYMdI3L-.js";import"./magnifying-glass.component-D1F-xbrZ.js";import"./star.component-BfeJpG58.js";import"./arrow-right.component-C6K7Izsm.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
