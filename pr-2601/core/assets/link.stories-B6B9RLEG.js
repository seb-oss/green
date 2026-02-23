import{h as t}from"./iframe-l2jj9Yet.js";import"./link-D-sw3ac_.js";import"./popover-DjDNFjsJ.js";import"./flex-B808t1vG.js";import"./card-DYyy8mL8.js";import"./text-DksATRqR.js";import"./divider-CdrIJv26.js";import"./magnifying-glass-feQ3Odvl.js";import"./star-ChAMov1z.js";import"./arrow-right-BceIds0b.js";import"./chain-link-CwfWcEIg.js";import{a as i}from"./argTableProps-B0K9BzVB.js";import"./link.component-CfBocKE-.js";import"./props-link-BoaPTUGg.js";import"./popover.component-DRqYK9ct.js";import"./localized-decorator-BDYX6RVq.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BERuS5c3.js";import"./icon.component-BozruYzA.js";import"./flex.component-Dddci-fu.js";import"./card.component-BcFA_-GE.js";import"./default-typography.styles-B_-jf0IT.js";import"./divider.component-DymvlO12.js";import"./magnifying-glass.component-Dy33_r8n.js";import"./star.component-D_E4Zw4H.js";import"./arrow-right.component-8hjM5ODr.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
