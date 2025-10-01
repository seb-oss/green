import{x as e}from"./lit-element-Bx14lxc-.js";import"./breadcrumbs-item-C5lWSeD7.js";import"./link-DSf3KgtY.js";import"./menu-item-CCXLgCqO.js";import"./menu-heading-CjhxJqIT.js";import"./flex-BfKnydpF.js";import"./card-B9-8IG9l.js";import"./divider-D_CnclGU.js";import"./text-BCzZBxkI.js";import"./button-BQ4gMG5W.js";import"./folder-BPKiHu4Q.js";import"./square-grid-circle-C_HRDkz3.js";import"./dot-grid-one-horizontal-D9DEpxj6.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CJKwYBen.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./chevron-right.component-Cs1IvQXA.js";import"./icon-DeOpVb_j.js";import"./unsafe-html-CYO4avEf.js";import"./static-B8S6DEnV.js";import"./query-async-MEroNOeJ.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./transitional-styles-BfqUw7Aj.js";import"./unwrap-slots-CufDiWNZ.js";import"./button.component-qvVtjlow.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./popover.component-CJKfdbo4.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-D5Wdub0G.js";import"./flex.component-Epeze9ko.js";import"./div.component-CpSRkgEJ.js";import"./card.component-CHpy_s_p.js";import"./default-typography.styles-DG7u6j1x.js";const ye={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

## Features
- Supports both text-only and icon+text navigation links
- Responsive design with mobile optimization showing the previous page
- Configurable sizes (large/small)

## Basic Usage

### Simple breadcrumbs
The most basic implementation using text-only links.

\`\`\`html
<gds-breadcrumbs>
  <gds-breadcrumbs-item href="/">Home</gds-breadcrumbs-item>
  <gds-breadcrumbs-item href="/products">Products</gds-breadcrumbs-item>
  <gds-breadcrumbs-item href="/products/category">Category</gds-breadcrumbs-item>
  <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
</gds-breadcrumbs>
\`\`\``}}}},m={render:()=>e`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/"> Home </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products"> Products </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products/category">
        Category
      </gds-breadcrumbs-item>
      <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
    </gds-breadcrumbs>
  `},s={render:()=>e`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
    </gds-breadcrumbs>
  `},r={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
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
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},t={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
        <gds-breadcrumbs-item href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item overflow>
          <gds-context-menu>
            <gds-menu-item>Action 1</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
      </gds-breadcrumbs>
    </gds-flex>
  `},n={name:"Accessible Label",render:N=>e`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item href="/products">
                Products
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item href="/products">
                Products
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `};var o,g,i;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/"> Home </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products"> Products </gds-breadcrumbs-item>
      <gds-breadcrumbs-item href="/products/category">
        Category
      </gds-breadcrumbs-item>
      <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
    </gds-breadcrumbs>
  \`
}`,...(i=(g=m.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var a,c,b,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumbs>
      <gds-breadcrumbs-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item href="/folder/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-breadcrumbs-item>

      <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
    </gds-breadcrumbs>
  \`
}`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source},description:{story:`This example shows how to use icons alongside text in the breadcrumbs item.
Icons can be used to enhance the visual representation of the breadcrumbs item.

\`\`\`html
<gds-breadcrumbs>
 <gds-breadcrumbs-item href="/">
  <gds-icon-home-open slot="lead"></gds-icon-home-open>
  Home
 </gds-breadcrumbs-item>
</gds-breadcrumbs>
\`\`\`

For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var p,f,h,x,w;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs size="small">
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:'Size of the breadcrumbs can be adjusted using the `size` attribute. <br/>\nThe default size is `large`, but you can set it to `small` for a more compact appearance.\n\n```html\n<gds-breadcrumbs size="small">...</gds-breadcrumbs>\n```',...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var S,C,k,v,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Desktop</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Mobile</gds-text>
          <gds-card background="neutral-02" width="400px">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/folder">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item href="/settings">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-breadcrumbs-item>

              <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:`Mobile optimization is built into the breadcrumbs component. <br/>
On mobile devices, the breadcrumbs will show the previous page instead of the full path. <br/>
This is done to save space and make navigation easier on smaller screens.`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var H,D,z,A,P;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-breadcrumbs>
        <gds-breadcrumbs-item href="/home">
          <gds-icon-home-open slot="lead"></gds-icon-home-open>
          Home
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item href="/folder">
          <gds-icon-folder slot="lead"></gds-icon-folder>
          Documents
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item overflow>
          <gds-context-menu>
            <gds-menu-item>Action 1</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item href="/settings">
          <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
          Settings
        </gds-breadcrumbs-item>

        <gds-breadcrumbs-item> Current page </gds-breadcrumbs-item>
      </gds-breadcrumbs>
    </gds-flex>
  \`
}`,...(z=(D=t.parameters)==null?void 0:D.docs)==null?void 0:z.source},description:{story:`The breadcrumbs component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.

### Example

\`\`\`html
<gds-breadcrumbs>
 <gds-breadcrumbs-item href="/home">Home</gds-breadcrumbs-item>
 <gds-button rank="tertiary">
   <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 </gds-button>
 <gds-breadcrumbs-item>Current</gds-breadcrumbs-item>
</gds-breadcrumbs>
\`\`\``,...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var T,L,M,O,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Accessible Label',
  render: args => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default label</gds-text>
          <gds-card flex="1" background="neutral-02">
            <gds-breadcrumbs>
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item href="/products">
                Products
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>

        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Custom label</gds-text>
          <gds-card background="neutral-02" flex="1">
            <gds-breadcrumbs label="Site Navigation">
              <gds-breadcrumbs-item href="/home">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item href="/products">
                Products
              </gds-breadcrumbs-item>
              <gds-breadcrumbs-item>Current page</gds-breadcrumbs-item>
            </gds-breadcrumbs>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:`The breadcrumbs component supports customizing the accessibility label. <br/>
This can be useful when you have multiple navigation sections
or want to provide more specific context for screen readers.

\`\`\`html
<gds-breadcrumbs label="Site Navigation">
  ...
</gds-breadcrumbs>
\`\`\``,...(I=(O=n.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};const He=["Simple","WithIcon","Size","Mobile","Overflow","Label"];export{n as Label,d as Mobile,t as Overflow,m as Simple,r as Size,s as WithIcon,He as __namedExportsOrder,ye as default};
