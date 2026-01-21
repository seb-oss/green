import{h as t}from"./iframe-2bPt0s27.js";import"./link-6Zcxciyo.js";import"./popover-CU4rGVsA.js";import"./flex-DGnl2_VG.js";import"./card-ptPY6VGT.js";import"./text-a0ku0o0J.js";import"./divider-NKpHMMBB.js";import"./magnifying-glass-DA8Db8oo.js";import"./star-DuOOBuQH.js";import"./arrow-right-B9Vr6WdX.js";import"./chain-link-apBFULi1.js";import{a as i}from"./argTableProps-DdN8CUVV.js";import"./link.component-b3JDPM6l.js";import"./props-link-BSBA8St0.js";import"./popover.component-Bj59Ayi8.js";import"./localized-decorator-Dkq3yWld.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Gj2c04a4.js";import"./icon.component-wvAac8OZ.js";import"./flex.component-CDR14qMl.js";import"./card.component-CVA6Fgq6.js";import"./default-typography.styles-C7BrPbKi.js";import"./divider.component-BBeuqc59.js";import"./magnifying-glass.component-CFerm5av.js";import"./star.component-B8EoEixq.js";import"./arrow-right.component-DH_h7ZWs.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
