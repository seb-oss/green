import{h as t}from"./iframe-CIVWH4Mv.js";import"./link-BbGd-aZB.js";import"./popover-DxrfHhwt.js";import"./flex-B3_3QfjH.js";import"./card-DdF-C0Hw.js";import"./text-D7OSEXAR.js";import"./divider-DGVpLx34.js";import"./magnifying-glass-CieTjrDI.js";import"./star-Bo-CWPTJ.js";import"./arrow-right-DvkQB3vt.js";import"./chain-link-CxNiAtwV.js";import{a as i}from"./argTableProps-DR_EqNAa.js";import"./link.component-BzheyM6Y.js";import"./props-link-B6QHQNA9.js";import"./popover.component-C-zF00cL.js";import"./localized-decorator-B2RSqNUR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DjADvGIh.js";import"./icon.component-DIi6KvFX.js";import"./flex.component--kjnXqAK.js";import"./card.component-9Yif2FC1.js";import"./default-typography.styles-t-I60LXz.js";import"./divider.component-D_8jgRDl.js";import"./magnifying-glass.component-DyPfy90c.js";import"./star.component-DkkHIe6r.js";import"./arrow-right.component-CepZItiP.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
