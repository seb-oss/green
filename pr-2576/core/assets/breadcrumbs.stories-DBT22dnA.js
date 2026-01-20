import{x as e}from"./iframe-CmrrH2XL.js";import"./breadcrumb-C95urBj_.js";import"./link-BiFuoRsc.js";import"./context-menu-Dugp4gYT.js";import"./menu-item-DBnI2YGF.js";import"./menu-heading-CzYLOWDR.js";import"./flex-BbNcfE9f.js";import"./card-BdmaW9zL.js";import"./divider-DiMEKbrR.js";import"./text-CufSApbj.js";import"./folder-DB6WRXJE.js";import"./chevron-right-_4ywIbqa.js";import"./square-grid-circle-llePl106.js";import"./dot-grid-one-horizontal-BAJ_DGse.js";import"./breadcrumb.component-Dn-FBmNz.js";import"./localized-decorator-TsOf8-hd.js";import"./chevron-left.component-Fa3L5-77.js";import"./icon.component-sO0eXaYd.js";import"./link.component-DIVz1U_2.js";import"./props-link-7mv6LLl-.js";import"./context-menu.component-BK3_E0tp.js";import"./unwrap-slots-bwvwNLI9.js";import"./ref-D8-0i1re.js";import"./popover.component-BKAuFpFh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DqKFYKsw.js";import"./menu-heading.component-Dubqhr7G.js";import"./flex.component-D7AFLKmM.js";import"./card.component-skVbPrMS.js";import"./divider.component-CRrkQuFe.js";import"./default-typography.styles-Fl8KvEhp.js";import"./folder.component-BbSSqlJT.js";import"./chevron-right.component-2GWzepi2.js";import"./square-grid-circle.component-BcN3Ey6t.js";const _={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",subcomponents:{GdsBreadcrumb:"gds-breadcrumb"},tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

## Features
- Supports both text-only and icon+text navigation links
- Responsive design with mobile optimization showing the previous page
- Configurable sizes (large/small)

## Basic Usage

### Simple breadcrumbs
The most basic implementation using text-only links.

\`\`\`html
<gds-breadcrumbs>
  <gds-breadcrumb href="/">Home</gds-breadcrumb>
  <gds-breadcrumb href="/products">Products</gds-breadcrumb>
  <gds-breadcrumb href="/products/category">Category</gds-breadcrumb>
  <gds-breadcrumb>Current page</gds-breadcrumb>
</gds-breadcrumbs>
\`\`\``}}}},E={render:()=>e`
    <gds-breadcrumbs>
      <gds-breadcrumb href="/"> Home </gds-breadcrumb>
      <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
      <gds-breadcrumb href="/products/category"> Category </gds-breadcrumb>
      <gds-breadcrumb>Current page</gds-breadcrumb>
    </gds-breadcrumbs>
  `},F={render:()=>e`
    <gds-breadcrumbs>
      <gds-breadcrumb href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb>

      <gds-breadcrumb href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-breadcrumb>

      <gds-breadcrumb href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-breadcrumb>

      <gds-breadcrumb> Current page </gds-breadcrumb>
    </gds-breadcrumbs>
  `},G={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},N={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>

              <gds-breadcrumb href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumb>

              <gds-breadcrumb href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumb>

              <gds-breadcrumb> Current page </gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},R={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
        <gds-breadcrumb href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-breadcrumb>

        <gds-breadcrumb href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-breadcrumb>

        <gds-breadcrumb overflow>
          <gds-context-menu>
            <gds-menu-item>Action 1</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-breadcrumb>

        <gds-breadcrumb href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-breadcrumb>

        <gds-breadcrumb> Current page</gds-breadcrumb>
      </gds-breadcrumbs>
    </gds-flex>
  `},T={name:"Accessible Label",render:r=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>
              <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
              <gds-breadcrumb>Current page</gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-breadcrumb href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumb>
              <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
              <gds-breadcrumb>Current page</gds-breadcrumb>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},U=["Simple","WithIcon","Size","Mobile","Overflow","Label"];export{T as Label,N as Mobile,R as Overflow,E as Simple,G as Size,F as WithIcon,U as __namedExportsOrder,_ as default};
