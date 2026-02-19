import{h as t}from"./iframe-CQ47Irez.js";import"./link-CzJqrrAk.js";import"./popover-Cziibkdv.js";import"./flex-B4UbhSR3.js";import"./card-blKanRM8.js";import"./text-qXkyDatn.js";import"./divider-DA353sbV.js";import"./magnifying-glass-BeiSNNjm.js";import"./star-CPP2qzCh.js";import"./arrow-right-sT8FTa-b.js";import"./chain-link-B8-yzo_U.js";import{a as i}from"./argTableProps-DHjzjisO.js";import"./link.component-QF0jUtVd.js";import"./props-link-DPK_lpZH.js";import"./popover.component-BCsesq6b.js";import"./localized-decorator-D5IrmprM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DjpSyWUT.js";import"./icon.component-D1euM_UT.js";import"./flex.component-Bcbte0K2.js";import"./card.component-CGzbdiPm.js";import"./default-typography.styles-CvyeRQle.js";import"./divider.component-96IC2ir3.js";import"./magnifying-glass.component-B1M1pDYa.js";import"./star.component-CdMzxL3y.js";import"./arrow-right.component-B6FxG59w.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
