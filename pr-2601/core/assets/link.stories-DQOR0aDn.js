import{h as t}from"./iframe-CbQmVrJu.js";import"./link-DyloQMCX.js";import"./popover-CNnNlZyv.js";import"./flex-BVHTcgK0.js";import"./card-BbXGlqu6.js";import"./text-BkOl0jgx.js";import"./divider-6ru1Sg_E.js";import"./magnifying-glass-B9Nv7cIv.js";import"./star-SZqVi6zs.js";import"./arrow-right-JteUVBcC.js";import"./chain-link-CHdEUH4V.js";import{a as i}from"./argTableProps-6RZ4Adjy.js";import"./link.component-rJrLwFAX.js";import"./props-link-CBr1nCEN.js";import"./popover.component-N5PG70YB.js";import"./localized-decorator-CniegUPT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnnVf8QW.js";import"./icon.component-BSD2zYIb.js";import"./flex.component-Drc1OxU4.js";import"./card.component-CR6-9Dgp.js";import"./default-typography.styles-BqbogdW3.js";import"./divider.component-yhvo8-nN.js";import"./magnifying-glass.component-BKjHY5rT.js";import"./star.component-BWvythZy.js";import"./arrow-right.component-DDO-TGa5.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
