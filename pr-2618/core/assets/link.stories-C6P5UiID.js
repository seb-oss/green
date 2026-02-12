import{h as t}from"./iframe-CpY1XI_F.js";import"./link-Dlg9b2J6.js";import"./popover--pJINSef.js";import"./flex-BPeximib.js";import"./card-Dk0EqaEb.js";import"./text-DeqYPGMd.js";import"./divider-DTb9_DFU.js";import"./magnifying-glass-CKQDa7O_.js";import"./star-BQnfgzpG.js";import"./arrow-right-hdgFqFfC.js";import"./chain-link-BgG5JJDR.js";import{a as i}from"./argTableProps-8dH89c3h.js";import"./link.component-C2VmV6o3.js";import"./props-link-BTzEtFZm.js";import"./popover.component-CWey9yAA.js";import"./localized-decorator-OYUXpxX4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-An5jg8v9.js";import"./icon.component-GpGYD9eN.js";import"./flex.component-BmF7ws3m.js";import"./card.component-Cxuf-lUX.js";import"./default-typography.styles-DZ86AK0R.js";import"./divider.component-zTbTIw3s.js";import"./magnifying-glass.component-CI0Ba-oX.js";import"./star.component-DOTf-3Cx.js";import"./arrow-right.component-Cmxtrrfg.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
