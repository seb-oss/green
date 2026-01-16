import{x as e}from"./iframe-DKGp6tbF.js";import"./breadcrumb-DOThGBdA.js";import"./link-Dhg8Dbw2.js";import"./context-menu-DmN1YuqS.js";import"./menu-item-B4n519Pn.js";import"./menu-heading-DldwZe15.js";import"./flex-E-ylyy_d.js";import"./card-wmZYKVU6.js";import"./divider-DxNQY0Yp.js";import"./text-CSq6BBmh.js";import"./folder-DH3JTXo1.js";import"./chevron-right-3QZw7muu.js";import"./square-grid-circle-BRYOQ_8x.js";import"./dot-grid-one-horizontal-DNNrkVKe.js";import"./breadcrumb.component-CV4tFJb_.js";import"./localized-decorator-CRfYRl6h.js";import"./chevron-left.component-8KmmacIx.js";import"./icon.component-DGVk6XJy.js";import"./link.component-DZkYrlzk.js";import"./props-link-pZ7M-2kz.js";import"./context-menu.component-C9wuE68U.js";import"./unwrap-slots-C5fuViZI.js";import"./ref-DalgA91g.js";import"./popover.component-B74XK85v.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjzBIs-o.js";import"./menu-heading.component-COf7Gx0b.js";import"./flex.component-GdH1hCnE.js";import"./card.component-CiyntDtf.js";import"./divider.component-BDDKUgw5.js";import"./default-typography.styles-DsYNgk23.js";import"./folder.component-CYcpE-Mo.js";import"./chevron-right.component-DeCZjbiM.js";import"./square-grid-circle.component-DPmorrXa.js";const _={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",subcomponents:{GdsBreadcrumb:"gds-breadcrumb"},tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

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
