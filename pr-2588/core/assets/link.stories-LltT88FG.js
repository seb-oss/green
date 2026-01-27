import{h as t}from"./iframe-C6yopx4X.js";import"./link-BEpGeKrA.js";import"./popover-BuSbQzUm.js";import"./flex-cb4YjZNH.js";import"./card-jEXrgteg.js";import"./text-DFW5w57T.js";import"./divider-BPYyHDLn.js";import"./magnifying-glass-Yu4V47OG.js";import"./star-Bw7al6UP.js";import"./arrow-right-Bwpe79Vb.js";import"./chain-link-BWbCJlLM.js";import{a as i}from"./argTableProps-iLLtpmXh.js";import"./link.component-DmmOaL7W.js";import"./props-link-Cxos9N9m.js";import"./popover.component-cbo_Ijzz.js";import"./localized-decorator-D6Rh7gKc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-M3MMFohu.js";import"./icon.component-Dc2cITEB.js";import"./flex.component-Crx3jgrH.js";import"./card.component-DahQZrjv.js";import"./default-typography.styles-Bn-Zfr9G.js";import"./divider.component-CAdMAChh.js";import"./magnifying-glass.component-DKCpdifY.js";import"./star.component-BSGp6AGu.js";import"./arrow-right.component-BAzHj2jd.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
