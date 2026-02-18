import{h as t}from"./iframe-D3LkGrTu.js";import"./link-rrPAlUDT.js";import"./popover-Bo2-Yunh.js";import"./flex-BFq8R8XN.js";import"./card-DLwRJ7ia.js";import"./text-B-VazQsq.js";import"./divider-C4lLeWWu.js";import"./magnifying-glass-wyqJLbi4.js";import"./star-BVRFmk-D.js";import"./arrow-right-C12XxQIW.js";import"./chain-link-CIY9XXQy.js";import{a as i}from"./argTableProps-B3G29lOC.js";import"./link.component-b-ryxWYV.js";import"./props-link-Cx4sU3w-.js";import"./popover.component-BbycZSjJ.js";import"./localized-decorator-B9Zts4yp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bh33xCXa.js";import"./icon.component-BGKmC-sG.js";import"./flex.component-BNcfiOGN.js";import"./card.component-68vw3gHC.js";import"./default-typography.styles-De9gKBxa.js";import"./divider.component-D0-8fgln.js";import"./magnifying-glass.component-CAqg69XG.js";import"./star.component-CtYf_SAx.js";import"./arrow-right.component-nzuRIM2K.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
