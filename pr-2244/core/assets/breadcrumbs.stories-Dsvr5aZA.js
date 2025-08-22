import{x as e}from"./lit-element-Bx14lxc-.js";import{G as E}from"./breadcrumbs.component-CswR3itJ.js";import"./link-hVUeQve4.js";import"./flex-3DCATZGQ.js";import"./card-Dj1e6P6c.js";import"./divider-C7pepU7y.js";import"./text-CpLxPS4E.js";import"./button-DLM8JRC1.js";import"./menu-item-BdPfso01.js";import"./menu-heading-Dr8-YNyL.js";import"./folder-Dj8I1GH1.js";import"./square-grid-circle-BT0mQvYz.js";import"./dot-grid-one-horizontal-lq6PPZXO.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DJNCW3iR.js";import"./tokens.style-iX6aIK9m.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./chevron-right.component-DhYbfXgM.js";import"./icon-Ban3Gn5U.js";import"./unsafe-html-CYO4avEf.js";import"./link.component-KcyJx-0U.js";import"./static-B8S6DEnV.js";import"./flex.component-CHYyV8f-.js";import"./div.component-Cx0JXo06.js";import"./card.component-yp2NQ7aE.js";import"./divider.component-ZmBvVo9A.js";import"./text.component-sQTeJzVf.js";import"./button.component-DtoRA_WW.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BzVoiHcb.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./context-menu.component-D_jvTC_J.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-dIUgOhQO.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-DHuL3vGZ.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-DhvOsnze.js";import"./menu-heading.component-D_s0xvl0.js";import"./folder.component-dHk6nqA9.js";import"./square-grid-circle.component-CYv8ySiI.js";E.define();const Me={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

## Features
- Supports both text-only and icon+text navigation links
- Responsive design with mobile optimization showing the previous page
- Configurable sizes (large/small)
- Each breadcrumbs item is a slot that preferably uses \`gds-link\` component.

## Basic Usage

### Simple breadcrumbs
The most basic implementation using text-only links.

\`\`\`html
<gds-breadcrumbs>
  <gds-link href="/">Home</gds-link>
  <gds-link href="/products">Products</gds-link>
  <gds-link href="/products/category">Category</gds-link>
  <gds-text>Current page</gds-text>
</gds-breadcrumbs>
\`\`\``}}}},o={render:()=>e`
    <gds-breadcrumbs>
      <gds-link href="/">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/products/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumbs>
  `},s={render:()=>e`
    <gds-breadcrumbs>
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
    </gds-breadcrumbs>
  `},n={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},d={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},t={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
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
      </gds-breadcrumbs>
    </gds-flex>
  `},r={name:"Accessible Label",render:I=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `};var g,i,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumbs>
      <gds-link href="/">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/products/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumbs>
  \`
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var a,c,m,p,u;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumbs>
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
    </gds-breadcrumbs>
  \`
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:`This example shows how to use icons alongside text in the breadcrumbs links.
Icons can be used to enhance the visual representation of the links.

\`\`\`html
<gds-breadcrumbs>
 <gds-link href="/">
  <gds-icon-home-open slot="lead"></gds-icon-home-open>
  Home
 </gds-link>
</gds-breadcrumbs>
\`\`\`

For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var f,h,b,x,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:'Size of the breadcrumbs can be adjusted using the `size` attribute. <br/>\nThe default size is `large`, but you can set it to `small` for a more compact appearance.\n\n```html\n<gds-breadcrumbs size="small">...</gds-breadcrumbs>\n```',...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var S,w,C,y,H;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
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
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:`Mobile optimization is built into the breadcrumbs component. <br/>
On mobile devices, the breadcrumbs will show the previous page instead of the full path. <br/>
This is done to save space and make navigation easier on smaller screens.`,...(H=(y=d.parameters)==null?void 0:y.docs)==null?void 0:H.description}}};var z,v,D,P,T;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
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
      </gds-breadcrumbs>
    </gds-flex>
  \`
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:`The breadcrumbs component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.

### Example

\`\`\`html
<gds-breadcrumbs>
 <gds-link href="/home">Home</gds-link>
 <gds-button rank="tertiary">
   <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 </gds-button>
 <gds-link href="/current">Current</gds-link>
</gds-breadcrumbs>
\`\`\``,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var L,M,O,A,B;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Accessible Label',
  render: args => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-link href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-link>
              <gds-link href="/products">Products</gds-link>
              <gds-text>Current page</gds-text>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(O=(M=r.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:`The breadcrumbs component supports customizing the accessibility label. <br/>
This can be useful when you have multiple navigation sections
or want to provide more specific context for screen readers.

\`\`\`html
<gds-breadcrumbs label="Site Navigation">
  ...
</gds-breadcrumbs>
\`\`\``,...(B=(A=r.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};const Oe=["Simple","WithIcon","Size","Mobile","Overflow","Label"];export{r as Label,d as Mobile,t as Overflow,o as Simple,n as Size,s as WithIcon,Oe as __namedExportsOrder,Me as default};
