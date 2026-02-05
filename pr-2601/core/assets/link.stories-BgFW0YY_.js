import{h as t}from"./iframe-DnvYCRWK.js";import"./link-BKdB7ZiD.js";import"./popover-CY6U8_Nd.js";import"./flex-t5Geaw_O.js";import"./card-cb9qzkLG.js";import"./text-CTq8Cotr.js";import"./divider-BoMvOSyo.js";import"./magnifying-glass-h3b6mU9N.js";import"./star-BXeB74m_.js";import"./arrow-right-BnbwwcOO.js";import"./chain-link-7rRinqgv.js";import{a as i}from"./argTableProps-BD3g7wIm.js";import"./link.component-BeAD-d9w.js";import"./props-link-BzyOj9RA.js";import"./popover.component-C9lk2xfE.js";import"./localized-decorator-CQPXyEqC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvhWqvuR.js";import"./icon.component-B4Fq6qNB.js";import"./flex.component-C-jKumqM.js";import"./card.component-EIdXABdd.js";import"./default-typography.styles-iWo6J2iW.js";import"./divider.component-R6L6dixY.js";import"./magnifying-glass.component-B7gnBdRJ.js";import"./star.component-BSsrixIE.js";import"./arrow-right.component-C3eFMM0c.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
