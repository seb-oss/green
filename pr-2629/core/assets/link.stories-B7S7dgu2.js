import{h as t}from"./iframe-VaDQQqNL.js";import"./link-Bi48qgGA.js";import"./popover-C19IN-Jy.js";import"./flex-Cu6M8lwt.js";import"./card-DJgBiCQM.js";import"./text-Dudlpren.js";import"./divider-BerjubCq.js";import"./magnifying-glass-BJWou8lP.js";import"./star-BLnBAOyQ.js";import"./arrow-right-CG4SLnt3.js";import"./chain-link-BdaHWETq.js";import{a as i}from"./argTableProps-BljQh9az.js";import"./link.component-EgrVi1Jc.js";import"./props-link-Clmnwqek.js";import"./popover.component-Co9q3Vtw.js";import"./localized-decorator-BPWxYv1n.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-JRg-ClxR.js";import"./icon.component-QlhbWuMT.js";import"./flex.component-D7YmM62P.js";import"./card.component-Dm81EWb_.js";import"./default-typography.styles-COrXqByj.js";import"./divider.component-gh-O2RiD.js";import"./magnifying-glass.component-m6D3-cQM.js";import"./star.component-Dn4u0h9v.js";import"./arrow-right.component-BEHnTDjO.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
