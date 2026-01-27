import{h as t}from"./iframe-1F4SKICq.js";import"./link-UdM1hkvz.js";import"./popover-CvAxyWJk.js";import"./flex-CrFbvP8x.js";import"./card-BVOukmD1.js";import"./text-CmOQqe3d.js";import"./divider-CEgdTz4M.js";import"./magnifying-glass-Cbu1z8hb.js";import"./star-DDawevTU.js";import"./arrow-right-Bludd8N-.js";import"./chain-link-iD9xCvn9.js";import{a as i}from"./argTableProps-BdjseJtq.js";import"./link.component-BEdymvl9.js";import"./props-link-B4Td3Ix8.js";import"./popover.component-r8YlN6Fa.js";import"./localized-decorator-B9zHb0OH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CoJsr_cV.js";import"./icon.component-0VF-ANJx.js";import"./flex.component-DSn4JYs1.js";import"./card.component-DgL5FTy7.js";import"./default-typography.styles-Ci50o2me.js";import"./divider.component-Cmb3ziVo.js";import"./magnifying-glass.component-5qiyhVyP.js";import"./star.component-_G_bs5bU.js";import"./arrow-right.component-DJj1Aavm.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
