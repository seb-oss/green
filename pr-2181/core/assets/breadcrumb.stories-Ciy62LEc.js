import{x as t}from"./lit-element-Bx14lxc-.js";import{G as B}from"./breadcrumb.component-DDXvhxuE.js";import"./link-CHntNb2B.js";import"./flex-DqgnLVUU.js";import"./card-C1zbrG7H.js";import"./divider-D8gQs4gA.js";import"./text-CDvyETQY.js";import"./button-BXnTIaIJ.js";import"./context-menu-dMC8A1Jh.js";import"./menu-item-BRWFpw0y.js";import"./menu-heading-Cosv1ajY.js";import"./folder-C3va6Pq7.js";import"./chevron-right-mprMjSET.js";import"./square-grid-circle-CK_H7wh0.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./chevron-right.component-BEaAedbo.js";import"./icon-1rFpnFmF.js";import"./link.component-rKuNL8tE.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./flex.component-DXi-h7Ch.js";import"./div.component-COo6-rOq.js";import"./card.component-a_DdskCg.js";import"./text.component-CpYv9ler.js";import"./button.component-DlNfO7QT.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-DzxZIgiE.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CpXVgFzi.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-B2GUrnOH.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-4cMP39aE.js";import"./square-grid-circle.component-DWwnQ97F.js";B.define();const ze={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-breadcrumb\` component is a navigation element <br/>
It helps users understand their current * location within a hierarchical structure of a website or application.

## Features
- Supports both text-only and icon+text navigation links
- Responsive design with mobile optimization showing the previous page
- Configurable sizes (large/small)
- Each breadcrumb item is a slot that preferably uses \`gds-link\` components

## Basic Usage

### Simple Breadcrumb
The most basic implementation using text-only links.

\`\`\`html
<gds-breadcrumb>
  <gds-link href="/">Home</gds-link>
  <gds-link href="/products">Products</gds-link>
  <gds-link href="/products/category">Category</gds-link>
  <gds-text>Current page</gds-text>
</gds-breadcrumb>
\`\`\``}}}},o={render:()=>t`
    <gds-breadcrumb>
      <gds-link href="/">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/products/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumb>
  `},e={render:()=>t`
    <gds-breadcrumb>
      <gds-link href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-link>

      <gds-link href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-link>

      <gds-text> Current page </gds-text>
    </gds-breadcrumb>
  `},n={render:()=>t`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="secondary" flex="1">
            <gds-breadcrumb size="small">
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},s={render:()=>t`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="secondary" width="400px">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},d={render:()=>t`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumb>
        <gds-link href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-link>

        <gds-link href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-link>

        <gds-button rank="tertiary" size="small">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>

        <gds-link href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-link>

        <gds-text> Current page </gds-text>
      </gds-breadcrumb>
    </gds-flex>
  `};var r,g,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/products/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumb>
  \`
}`,...(i=(g=o.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var l,a,c,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-link>

      <gds-link href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-link>

      <gds-text> Current page </gds-text>
    </gds-breadcrumb>
  \`
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:`## Breadcrumb with Icons
This example shows how to use icons alongside text in the breadcrumb links.
Icons can be used to enhance the visual representation of the links.

\`\`\`html
<gds-breadcrumb>
 <gds-link href="/">
  <gds-icon-home-open slot="lead"></gds-icon-home-open>
  Home
 </gds-link>
</gds-breadcrumb>
\`\`\`

For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var f,u,h,b,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="secondary" flex="1">
            <gds-breadcrumb size="small">
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:'Size of the breadcrumb can be adjusted using the `size` attribute. <br/>\nThe default size is `large`, but you can set it to `small` for a more compact appearance.\n\n```html\n<gds-breadcrumb size="small">...</gds-breadcrumb>\n```',...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var k,y,S,w,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="secondary">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="secondary" width="400px">
            <gds-breadcrumb>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>

              <gds-link href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-link>

              <gds-link href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-link>

              <gds-text> Current page </gds-text>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:`Mobile optimization is built into the breadcrumb component. <br/>
On mobile devices, the breadcrumb will show the previous page instead of the full path. <br/>
This is done to save space and make navigation easier on smaller screens.`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var z,H,D,v,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumb>
        <gds-link href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-link>

        <gds-link href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-link>

        <gds-button rank="tertiary" size="small">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>

        <gds-link href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-link>

        <gds-text> Current page </gds-text>
      </gds-breadcrumb>
    </gds-flex>
  \`
}`,...(D=(H=d.parameters)==null?void 0:H.docs)==null?void 0:D.source},description:{story:`## Overflow Handling

The breadcrumb component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.


\`\`\`html
<gds-breadcrumb>
 <gds-link href="/home">Home</gds-link>
 <gds-button rank="tertiary">
   <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 </gds-button>
 <gds-link href="/current">Current</gds-link>
</gds-breadcrumb>
\`\`\``,...(T=(v=d.parameters)==null?void 0:v.docs)==null?void 0:T.description}}};const He=["Simple","WithIcon","Size","Mobile","Overflow"];export{s as Mobile,d as Overflow,o as Simple,n as Size,e as WithIcon,He as __namedExportsOrder,ze as default};
