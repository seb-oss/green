import{h as t}from"./iframe-Dlk9HGlt.js";import"./link-CCAzudy7.js";import"./popover-BQotuB-s.js";import"./flex-BMB7yFFS.js";import"./card-lWrALUqK.js";import"./text-CbxdQR_-.js";import"./divider-BdbNSGm1.js";import"./magnifying-glass-B6TVpxum.js";import"./star-DOPCL9Lr.js";import"./arrow-right-BMG-sZLl.js";import"./chain-link-204UZ_WU.js";import{a as i}from"./argTableProps-Bje9zbqP.js";import"./link.component-DqwD4olT.js";import"./props-link-B6x9Wd7P.js";import"./popover.component-DlvXccuF.js";import"./localized-decorator-CvGVJdnX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-SWtRA0Ps.js";import"./icon.component-961nimN5.js";import"./flex.component-BLhwhawA.js";import"./card.component-lSzL9WaE.js";import"./default-typography.styles-yCm1dJ4e.js";import"./divider.component-Cl59jFaV.js";import"./magnifying-glass.component-CYrb22iJ.js";import"./star.component-DRCfYGdV.js";import"./arrow-right.component-DEv11BbD.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
