import{h as t}from"./iframe-C-Uylk6O.js";import"./link-BM7QbfYj.js";import"./popover-PZT-n2j7.js";import"./flex-Y2aWsY-N.js";import"./card-D-rQ090V.js";import"./text-Co7rwXRK.js";import"./divider-BxBjOhft.js";import"./magnifying-glass-D3n-TTLx.js";import"./star-z6F73vPg.js";import"./arrow-right-BvHyQXFe.js";import"./chain-link-CyqWLx7q.js";import{a as i}from"./argTableProps-BPS6FRW5.js";import"./link.component-DMVbQ39q.js";import"./props-link-D_-6XPOi.js";import"./popover.component-aWXaC6AB.js";import"./localized-decorator-CqCBDPdF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DK1urPRi.js";import"./icon.component-CbLGnDoY.js";import"./flex.component-BmOr5rhE.js";import"./card.component-C4TCglxs.js";import"./default-typography.styles-DJGjhnpg.js";import"./divider.component-CP9XjZ5V.js";import"./magnifying-glass.component-DkL_kt1d.js";import"./star.component-D6Ruw0no.js";import"./arrow-right.component-IRlrAqcu.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
