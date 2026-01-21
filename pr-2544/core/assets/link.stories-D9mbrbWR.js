import{h as t}from"./iframe-C3UwppBg.js";import"./link-CYkQDkFw.js";import"./popover-hIa4Wt_m.js";import"./flex-Dq56nI52.js";import"./card-BIOnC_Md.js";import"./text-Ddneac50.js";import"./divider-Wl2zLTyE.js";import"./magnifying-glass-fdxhgKeU.js";import"./star-BmVCmAGX.js";import"./arrow-right-FoWH_hY4.js";import"./chain-link-9w5oxh4l.js";import{a as i}from"./argTableProps-DVltGU8L.js";import"./link.component-p14BlCh0.js";import"./props-link-5aaRftdO.js";import"./popover.component--pZ90zgR.js";import"./localized-decorator-r9IxuSjn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C-AwTQGo.js";import"./icon.component-B-gqN3-z.js";import"./flex.component-Cm_b3atb.js";import"./card.component-Cjw_WW6s.js";import"./default-typography.styles-C9C139HU.js";import"./divider.component-BFjrsZ0J.js";import"./magnifying-glass.component-R3r9xEHt.js";import"./star.component-CGtuOqj8.js";import"./arrow-right.component-BpR6CnUE.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
