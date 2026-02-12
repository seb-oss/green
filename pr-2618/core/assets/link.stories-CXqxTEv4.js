import{h as t}from"./iframe-CcvMqXI-.js";import"./link-BPaH2hxs.js";import"./popover-ChdvZSDz.js";import"./flex-Cpv9R__z.js";import"./card-CrawVU_y.js";import"./text-94HkcXzq.js";import"./divider-CpmcwD9N.js";import"./magnifying-glass-Ca6Hk4O9.js";import"./star-C652i34_.js";import"./arrow-right-Dw9srj1n.js";import"./chain-link-CXP7Pois.js";import{a as i}from"./argTableProps-BITbF5py.js";import"./link.component-BS5RWiFF.js";import"./props-link-DnI5g9EA.js";import"./popover.component-DZRsbvj9.js";import"./localized-decorator-CcBU_CAK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjZ5drxH.js";import"./icon.component-BR3AQAfI.js";import"./flex.component-BaaDi53W.js";import"./card.component-DkMiRKkN.js";import"./default-typography.styles-C0seU7ww.js";import"./divider.component-DcIuraya.js";import"./magnifying-glass.component-6J1in-iU.js";import"./star.component-DJC5Lqwg.js";import"./arrow-right.component-C_QgmQVh.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
