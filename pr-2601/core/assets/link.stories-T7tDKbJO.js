import{h as t}from"./iframe-cyAD0rhm.js";import"./link-DenfYWYZ.js";import"./popover--p1Ud_9K.js";import"./flex-DIeBed_y.js";import"./card-BEJA5BhD.js";import"./text-BM626_vL.js";import"./divider-Bm2YsuCT.js";import"./magnifying-glass-CVUZu0eJ.js";import"./star-CmZqeT1s.js";import"./arrow-right-ETMbRGKk.js";import"./chain-link-Q5sLcrGn.js";import{a as i}from"./argTableProps-DKg5GzzV.js";import"./link.component-BzrB24Tz.js";import"./props-link-DcDexn1e.js";import"./popover.component-BEl3kYQV.js";import"./localized-decorator-hSII2u8H.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-t5Zhk1ew.js";import"./icon.component-C0MD-nYh.js";import"./flex.component-UOsYcIWT.js";import"./card.component-BXbgzksP.js";import"./default-typography.styles-Bcnjlt63.js";import"./divider.component-DN1wggvl.js";import"./magnifying-glass.component-DrLz7D0z.js";import"./star.component-Bk3IElHD.js";import"./arrow-right.component-DDzx8UHB.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
