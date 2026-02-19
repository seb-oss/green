import{h as t}from"./iframe-CKOey5cL.js";import"./link-BgZq09XD.js";import"./popover-B9wJLcEH.js";import"./flex-BoeMuVKe.js";import"./card-DQyrowjd.js";import"./text-DA0OQrg-.js";import"./divider-B0VXrDEU.js";import"./magnifying-glass-AFOX_ZX-.js";import"./star-IGIPWV1i.js";import"./arrow-right-C7lpv9JL.js";import"./chain-link-CfdGLQw-.js";import{a as i}from"./argTableProps-Dr6zKbEE.js";import"./link.component-DdH5slfK.js";import"./props-link-BkhXrOsh.js";import"./popover.component-BgZdjnK6.js";import"./localized-decorator-EzyKryh1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-T8zeMgWc.js";import"./icon.component-mybfkHUV.js";import"./flex.component-SIwlxQ8w.js";import"./card.component-B4pI5jko.js";import"./default-typography.styles-Dmp3DqfP.js";import"./divider.component-BXsi7rYq.js";import"./magnifying-glass.component-CNolacNN.js";import"./star.component-DmvJnogl.js";import"./arrow-right.component-B1-Ub1NC.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
