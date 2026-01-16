import{h as t}from"./iframe-DuVF6zVk.js";import"./link-BWr1_1oS.js";import"./popover-Bfy6SQ1d.js";import"./flex-CBqihlny.js";import"./card-CGH-LlWp.js";import"./text-BZaLyQX1.js";import"./divider-Dt_sBQDH.js";import"./magnifying-glass-Bc6FrP8X.js";import"./star-C2oiXNbV.js";import"./arrow-right-BKb0jzFf.js";import"./chain-link-Dn4zoKfm.js";import{a as i}from"./argTableProps-BUb9CR76.js";import"./link.component-FcKxNnYR.js";import"./props-link-53meLxBw.js";import"./popover.component-vU4rAZWQ.js";import"./localized-decorator-DcHh67-O.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ir0LI5dt.js";import"./icon.component-BqgcTKSc.js";import"./flex.component-BwNBNAnb.js";import"./card.component-BgsBKdNt.js";import"./default-typography.styles-DdbJf-w2.js";import"./divider.component-CwaRNHdd.js";import"./magnifying-glass.component-BzV1ziMb.js";import"./star.component-CRWyJHCT.js";import"./arrow-right.component-CbGV42Ht.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
