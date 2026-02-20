import{h as t}from"./iframe-kVMXU6GJ.js";import"./link-DuKD5N1A.js";import"./popover-Ied1qFia.js";import"./flex-IuQb6K84.js";import"./card-L8zt_2eG.js";import"./text-gpHilPNi.js";import"./divider-DDmnUgs4.js";import"./magnifying-glass-DlQtdnzx.js";import"./star-BRbQDGG_.js";import"./arrow-right-D6wdn0HW.js";import"./chain-link-BWwsCO1e.js";import{a as i}from"./argTableProps-kewaEdtf.js";import"./link.component-8KriCGGm.js";import"./props-link-wvGebkhw.js";import"./popover.component-C5Nzbov6.js";import"./localized-decorator-Bsmy9fs6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Gvuhmtl9.js";import"./icon.component-CyQAwmLS.js";import"./flex.component-C5eQ4OQn.js";import"./card.component-BlOAxrX3.js";import"./default-typography.styles-WHhdsZOR.js";import"./divider.component-DTE9Vt74.js";import"./magnifying-glass.component-Cs7lmi-7.js";import"./star.component-BuqgCLGe.js";import"./arrow-right.component-3MOYfzzr.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
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
