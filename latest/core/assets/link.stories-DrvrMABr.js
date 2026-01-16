import{h as t}from"./iframe-OLtVCvf3.js";import"./link-DO7bVlkF.js";import"./popover-Dl0N69hs.js";import"./flex-Dka5goo8.js";import"./card-vYEjmawN.js";import"./text-BaG8JG3N.js";import"./divider-CzXxVe30.js";import"./magnifying-glass-Dj2FZiz8.js";import"./star-DKubYoI9.js";import"./arrow-right-BOfIyHRC.js";import"./chain-link-BG_MKolp.js";import{a as i}from"./argTableProps-KJnHDoGa.js";import"./link.component--nIvHCMN.js";import"./props-link-BpIVBrmr.js";import"./popover.component-zPog_XeU.js";import"./localized-decorator-Bn_Y8u2H.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CZGd4hUi.js";import"./icon.component-CBMPXjbb.js";import"./flex.component-C4C0DT38.js";import"./card.component-LAF1gNJU.js";import"./default-typography.styles-C40djFVV.js";import"./divider.component-BTAvlObh.js";import"./magnifying-glass.component-BrNNovbf.js";import"./star.component-DCgxXymu.js";import"./arrow-right.component-C9GL1HOw.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
