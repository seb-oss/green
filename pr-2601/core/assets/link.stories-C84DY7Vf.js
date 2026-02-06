import{h as t}from"./iframe-CvkrKpPT.js";import"./link-CkRk3IIz.js";import"./popover-Br_9dQFB.js";import"./flex-BVlaU2K7.js";import"./card-CThgPxvs.js";import"./text-Bi4GUguR.js";import"./divider-53e88BJg.js";import"./magnifying-glass-BEl38TU_.js";import"./star-DI5KZ3ym.js";import"./arrow-right-CKJWyr9h.js";import"./chain-link-rqE94Oah.js";import{a as i}from"./argTableProps-CK-y38vv.js";import"./link.component-C-mQPBiX.js";import"./props-link-ht2lYvLf.js";import"./popover.component-DC9k34bS.js";import"./localized-decorator-2DBRLQZG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BgnfA2oV.js";import"./icon.component-6kdDZ56N.js";import"./flex.component-3WlUjBhB.js";import"./card.component-Ba_9DfXW.js";import"./default-typography.styles-Y5hFK-zl.js";import"./divider.component-B9P63FmF.js";import"./magnifying-glass.component-ESMP8Gaj.js";import"./star.component-B_KScl_5.js";import"./arrow-right.component-ph0qqOpB.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
