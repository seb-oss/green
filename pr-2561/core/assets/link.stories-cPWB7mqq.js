import{h as t}from"./iframe-R-UOI5Ct.js";import"./link-CzFjKLI_.js";import"./popover-os42ZZ9G.js";import"./flex-CB30nh8h.js";import"./card-Do8AxK4z.js";import"./text-DSWNST7C.js";import"./divider-Dbjx9rCT.js";import"./magnifying-glass-DrJddB2H.js";import"./star-DKBxPRno.js";import"./arrow-right-G58wS1G4.js";import"./chain-link-BOm6P9yf.js";import{a as i}from"./argTableProps-Bw-eVafG.js";import"./link.component-C-xIpNT_.js";import"./props-link--tvBFLGz.js";import"./popover.component-DROGwjFC.js";import"./localized-decorator-pYJBvnT-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfsKXyHM.js";import"./icon.component-DkM0gJ3v.js";import"./flex.component-Dx7fs3aT.js";import"./card.component-CWlpHV50.js";import"./default-typography.styles-gzHz-hfz.js";import"./divider.component-B4KX1Fsf.js";import"./magnifying-glass.component-CuxuuIay.js";import"./star.component-CdAiz9Wc.js";import"./arrow-right.component-KdZidaZK.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
