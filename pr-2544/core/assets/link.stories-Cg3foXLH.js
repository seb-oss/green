import{h as t}from"./iframe-DhKqHReP.js";import"./link-C0e01hK5.js";import"./popover-CVpTv-Ca.js";import"./flex-BwgO2pVc.js";import"./card-Dmnzt1A3.js";import"./text-DQLnxuwM.js";import"./divider-DU7gVViv.js";import"./magnifying-glass-Cio4PFL6.js";import"./star-B9LdMLnQ.js";import"./arrow-right-Bmwlr-kh.js";import"./chain-link-fAyfnPek.js";import{a as i}from"./argTableProps-D3jBhDIv.js";import"./link.component-D3uH_uYH.js";import"./props-link-BfuzBB8Q.js";import"./popover.component-BtwVa47b.js";import"./localized-decorator-BXyLeG3q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DTAuV-L6.js";import"./icon.component-CpKlGttF.js";import"./flex.component-Daxs1y1T.js";import"./card.component-DO5dR8KV.js";import"./default-typography.styles-C-dQB73f.js";import"./divider.component-CXPwxSFF.js";import"./magnifying-glass.component-BoVlJQga.js";import"./star.component--_hpvdaY.js";import"./arrow-right.component-765yUUTP.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
