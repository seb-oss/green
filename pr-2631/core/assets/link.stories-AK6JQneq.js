import{h as t}from"./iframe-BVoLPnv3.js";import"./link-BsTfqv1H.js";import"./popover-DucirZTr.js";import"./flex-CEVsZ2mS.js";import"./card-D4qSE8kB.js";import"./text-DFkDUm4n.js";import"./divider-wY-eOcJT.js";import"./magnifying-glass-9p1eaSi2.js";import"./star-DHC9MYCw.js";import"./arrow-right-DOGNns2C.js";import"./chain-link-DGKFCUOC.js";import{a as i}from"./argTableProps-CY2QTUI5.js";import"./link.component-C4K7cvzC.js";import"./props-link-_BTLDE7F.js";import"./popover.component-Byj8vsry.js";import"./localized-decorator-BLYPI52E.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dgkwmafn.js";import"./icon.component-Bnk9i1lH.js";import"./flex.component-CNqmiosl.js";import"./card.component-J6cqnWpe.js";import"./default-typography.styles-D2kjhLCA.js";import"./divider.component-C3cQM1mE.js";import"./magnifying-glass.component-CoM99S5s.js";import"./star.component-DyULME50.js";import"./arrow-right.component-CK97EW6f.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
