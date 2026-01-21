import{h as t}from"./iframe-DMVDZK-F.js";import"./link-Ct1fyiZT.js";import"./popover-DEgBdhlJ.js";import"./flex-Z67iOcFC.js";import"./card-DA-6s8XK.js";import"./text-Cxwrifbo.js";import"./divider-DaQ0l-z9.js";import"./magnifying-glass-DbEQKM1F.js";import"./star-DAQpOgzb.js";import"./arrow-right-DfQ2Jv39.js";import"./chain-link-Dfgom2Rs.js";import{a as i}from"./argTableProps-DMeyZ76X.js";import"./link.component-BbKmXduC.js";import"./props-link-CHaxRURO.js";import"./popover.component-1obP0BBf.js";import"./localized-decorator-DU-mJU0o.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ccz8mlUw.js";import"./icon.component-Da4pJnMV.js";import"./flex.component-EdCVezaM.js";import"./card.component-B2BzVFUU.js";import"./default-typography.styles-DHRsuzkw.js";import"./divider.component-BWCjoVDN.js";import"./magnifying-glass.component-DDf-Vmyc.js";import"./star.component-Ch8mDlKP.js";import"./arrow-right.component-Ov6HGFxQ.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
