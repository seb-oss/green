import{x as e}from"./lit-element-Bx14lxc-.js";import"./breadcrumb-v4cGq-9z.js";import"./link-BRKRZrfV.js";import"./menu-item-Dg32jM5J.js";import"./menu-heading-CuIBP1rq.js";import"./flex-BpGRuM2l.js";import"./card-DNtTZdvR.js";import"./divider-28MpoDNs.js";import"./text-BKUjny80.js";import"./button-ZXavVDm2.js";import"./folder-o6HiyO1j.js";import"./chevron-right-DI2r2gUB.js";import"./square-grid-circle-C3Dc6tU5.js";import"./dot-grid-one-horizontal-pYIlqHJl.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CQAfIFlK.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./chevron-left.component-DLqOjwSY.js";import"./icon-Cy15sWHK.js";import"./unsafe-html-CYO4avEf.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./props-link-q-kPEFpu.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./transitional-styles-DSirreiK.js";import"./unwrap-slots-CdkSbl-V.js";import"./watch-tFciLXSI.js";import"./button.component-B9IS2xn2.js";import"./observe-light-dom-CmJPHUQ4.js";import"./popover.component-FNbu8UxX.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-BsaCNDtl.js";import"./flex.component-BadMY1FQ.js";import"./div.component-CXtUXgO1.js";import"./card.component-DECYILLa.js";import"./default-typography.styles-B_Uut80G.js";import"./chevron-right.component-5AAkwWpn.js";const ze={title:"Components/Breadcrumbs",component:"gds-breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`A breadcrumb is a secondary navigation showing the website hierarchy.

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
\`\`\``}}}},g={render:()=>e`
    <gds-breadcrumbs>
      <gds-breadcrumb href="/"> Home </gds-breadcrumb>
      <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
      <gds-breadcrumb href="/products/category"> Category </gds-breadcrumb>
      <gds-breadcrumb>Current page</gds-breadcrumb>
    </gds-breadcrumbs>
  `},r={render:()=>e`
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
  `},d={render:()=>e`
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
  `},s={render:()=>e`
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
  `},n={render:()=>e`
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
  `},o={name:"Accessible Label",render:N=>e`
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
  `};var t,a,c;g.parameters={...g.parameters,docs:{...(t=g.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumbs>
      <gds-breadcrumb href="/"> Home </gds-breadcrumb>
      <gds-breadcrumb href="/products"> Products </gds-breadcrumb>
      <gds-breadcrumb href="/products/category"> Category </gds-breadcrumb>
      <gds-breadcrumb>Current page</gds-breadcrumb>
    </gds-breadcrumbs>
  \`
}`,...(c=(a=g.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,b,i,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(i=(b=r.parameters)==null?void 0:b.docs)==null?void 0:i.source},description:{story:`This example shows how to use icons alongside text in the breadcrumbs item.
Icons can be used to enhance the visual representation of the breadcrumbs item.

\`\`\`html
<gds-breadcrumbs>
 <gds-breadcrumb href="/">
  <gds-icon-home-open slot="lead"></gds-icon-home-open>
  Home
 </gds-breadcrumb>
</gds-breadcrumbs>
\`\`\`

For more information on lead and trail icon, please refer to the [Link documentation](https://storybook.seb.io/latest/core/?path=/docs/components-link--docs).`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var p,f,h,x,w;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:'Size of the breadcrumbs can be adjusted using the `size` attribute. <br/>\nThe default size is `large`, but you can set it to `small` for a more compact appearance.\n\n```html\n<gds-breadcrumbs size="small">...</gds-breadcrumbs>\n```',...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var S,C,k,v,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:`Mobile optimization is built into the breadcrumbs component. <br/>
On mobile devices, the breadcrumbs will show the previous page instead of the full path. <br/>
This is done to save space and make navigation easier on smaller screens.`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var H,D,z,A,P;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.source},description:{story:`The breadcrumbs component is designed with flexibility in mind, allowing developers to implement * custom overflow solutions that best fit their specific needs.

### Example

\`\`\`html
<gds-breadcrumbs>
 <gds-breadcrumb href="/home">Home</gds-breadcrumb>
 <gds-button rank="tertiary">
   <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
 </gds-button>
 <gds-breadcrumb>Current</gds-breadcrumb>
</gds-breadcrumbs>
\`\`\``,...(P=(A=n.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var T,L,M,O,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Accessible Label',
  render: args => html\`
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
  \`
}`,...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:`The breadcrumbs component supports customizing the accessibility label. <br/>
This can be useful when you have multiple navigation sections
or want to provide more specific context for screen readers.

\`\`\`html
<gds-breadcrumbs label="Site Navigation">
  ...
</gds-breadcrumbs>
\`\`\``,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};const Ae=["Simple","WithIcon","Size","Mobile","Overflow","Label"];export{o as Label,s as Mobile,n as Overflow,g as Simple,d as Size,r as WithIcon,Ae as __namedExportsOrder,ze as default};
