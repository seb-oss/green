import{h as t}from"./iframe-DgD2fjN1.js";import"./link-FMX5OFI7.js";import"./popover-kruevm9M.js";import"./flex-Bkq2Loe3.js";import"./card-BmD8jQHF.js";import"./text-BqTZL6xg.js";import"./divider-BnSDu6qJ.js";import"./magnifying-glass-MgZixW6y.js";import"./star-DTZY0nFX.js";import"./arrow-right-C3rS6YbM.js";import"./chain-link-ftjfYdVl.js";import{a as i}from"./argTableProps-Dqz34gYQ.js";import"./link.component-6Q9wTXhL.js";import"./props-link-oSE3IYFj.js";import"./popover.component-Bj62IjO1.js";import"./localized-decorator-WEI3dB5R.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CkkOmtzm.js";import"./icon.component-Hxs4rkhS.js";import"./flex.component-B01_mVld.js";import"./card.component-ByseI5GP.js";import"./default-typography.styles-yEtprrs8.js";import"./divider.component-DIq7eaaX.js";import"./magnifying-glass.component-FHfB80BC.js";import"./star.component-D3SwhP_z.js";import"./arrow-right.component-B7F9k6m7.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
