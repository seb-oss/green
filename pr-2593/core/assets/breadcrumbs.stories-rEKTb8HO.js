import{x as e}from"./iframe-BZT1zFLW.js";import"./breadcrumb-BhgFBLM-.js";import"./link-C8jy4GqE.js";import"./context-menu-LhhyeqdF.js";import"./menu-item-BgB9p4G2.js";import"./menu-heading-BBAb8Sie.js";import"./flex-DcffHiXI.js";import"./card-B8n1pUrM.js";import"./divider-BmW8Fj4N.js";import"./text-DCAtWyOV.js";import"./folder-SN2-gJ0h.js";import"./chevron-right-DInPj-Xw.js";import"./square-grid-circle-C37xbRLR.js";import"./dot-grid-one-horizontal-Ck3PGPYB.js";import"./breadcrumb.component-wcAfxYWo.js";import"./localized-decorator-CcBxja47.js";import"./chevron-left.component-DqHKUCg8.js";import"./icon.component-Bq1dliJE.js";import"./link.component-Bjb4SV4e.js";import"./props-link-BWji1RUR.js";import"./context-menu.component-D0RVrF0K.js";import"./unwrap-slots-rpciDVh1.js";import"./ref-CC9SNLfc.js";import"./popover.component-DS5Gi422.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3Y5f_gL.js";import"./menu-heading.component-CT8ZNkn8.js";import"./flex.component-qMZM1TSb.js";import"./card.component-iRV4bi_g.js";import"./divider.component-CvWLlsnC.js";import"./default-typography.styles-fFf3-tfn.js";import"./folder.component-C0-Pnm1K.js";import"./chevron-right.component-oJYgnXZ_.js";import"./square-grid-circle.component-Bp42Tygk.js";const _={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",subcomponents:{GdsBreadcrumb:"gds-breadcrumb"},tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

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
