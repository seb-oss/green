import{h as t}from"./iframe-B2ZAK5ky.js";import"./link-D9nCwAVU.js";import"./popover-CuM-bYeX.js";import"./flex-BgzwqeWg.js";import"./card-Dnw6ZMKi.js";import"./text-Dqmmy3JR.js";import"./divider-zclit5_7.js";import"./magnifying-glass-04DJ14Gd.js";import"./star-DiaTCiUc.js";import"./arrow-right-hySOE16q.js";import"./chain-link-Cuz_e3md.js";import{a as i}from"./argTableProps-wkae4PTT.js";import"./link.component-C5y8sD7E.js";import"./props-link-D99XkMIp.js";import"./popover.component-BfSSblA7.js";import"./localized-decorator-CNiVa-Zr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-uPD9hBCo.js";import"./icon.component-CkR84q4C.js";import"./flex.component-CU0xqsGF.js";import"./card.component-Dz94111C.js";import"./default-typography.styles-xLxdcv_U.js";import"./divider.component-DDyGmU1e.js";import"./magnifying-glass.component-CRno6WNn.js";import"./star.component-DzOhmXwA.js";import"./arrow-right.component-7cgEeBNA.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
