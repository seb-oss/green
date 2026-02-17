import{h as t}from"./iframe-BNaQQkJH.js";import"./link-aMTA0duu.js";import"./popover-5FPsdDx9.js";import"./flex-B3L9x4Dz.js";import"./card-DRIYPgCh.js";import"./text-CbYnrQNf.js";import"./divider-DVlc_oKh.js";import"./magnifying-glass-DzECUBhn.js";import"./star-BIydNcJp.js";import"./arrow-right-DBnKhi5l.js";import"./chain-link-CNRDLXeb.js";import{a as i}from"./argTableProps-CT9p0MjM.js";import"./link.component-BGuJInAE.js";import"./props-link-U57pezcn.js";import"./popover.component-ltKv_bSX.js";import"./localized-decorator-DnTOrFQG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-jtLIWRAq.js";import"./icon.component-BHq7_Gnp.js";import"./flex.component-BcOD8jwx.js";import"./card.component-KzQwFi6G.js";import"./default-typography.styles-BCcK9773.js";import"./divider.component-Cz8ONG5e.js";import"./magnifying-glass.component-P6LqowiB.js";import"./star.component-CdAarIgv.js";import"./arrow-right.component-o7q929UI.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
