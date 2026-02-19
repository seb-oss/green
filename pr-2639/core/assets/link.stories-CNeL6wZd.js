import{h as t}from"./iframe-rcFkWJ69.js";import"./link-lXWC0pjo.js";import"./popover-BpiiwsFs.js";import"./flex-DRRu73nS.js";import"./card-DA_bPOpI.js";import"./text-idtJcQ7D.js";import"./divider-CU1Szs95.js";import"./magnifying-glass-ByUC5lH1.js";import"./star-m2nuL43d.js";import"./arrow-right-Dz-84_p9.js";import"./chain-link-C7HG5uRG.js";import{a as i}from"./argTableProps-DzACYdmW.js";import"./link.component-C7jWsrAh.js";import"./props-link-DXaJ9DGO.js";import"./popover.component-DXX30aB6.js";import"./localized-decorator-DzDeBWJc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BmLiBrlv.js";import"./icon.component-Ro73QoBG.js";import"./flex.component-DH9URAyl.js";import"./card.component-vR8v_fSK.js";import"./default-typography.styles-BCLaw0j1.js";import"./divider.component-Bjj_Itf3.js";import"./magnifying-glass.component-CLhBo3Kh.js";import"./star.component-DAr2NAeW.js";import"./arrow-right.component-CxjfLDSJ.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
