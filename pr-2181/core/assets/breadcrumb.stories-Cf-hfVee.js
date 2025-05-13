import{x as g}from"./lit-element-Bx14lxc-.js";import{G as b}from"./breadcrumb.component-DknBjOKp.js";import"./link-CHntNb2B.js";import"./flex-DqgnLVUU.js";import"./card-C1zbrG7H.js";import"./divider-D8gQs4gA.js";import"./text-CDvyETQY.js";import"./button-D9FqrDJ_.js";import"./context-menu-dMC8A1Jh.js";import"./menu-item-BRWFpw0y.js";import"./menu-heading-Cosv1ajY.js";import"./folder-C3va6Pq7.js";import"./chevron-right-mprMjSET.js";import"./square-grid-circle-CK_H7wh0.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./chevron-right.component-BEaAedbo.js";import"./icon-1rFpnFmF.js";import"./link.component-rKuNL8tE.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./flex.component-DXi-h7Ch.js";import"./div.component-COo6-rOq.js";import"./card.component-a_DdskCg.js";import"./text.component-CpYv9ler.js";import"./button.component-TPtFxgGx.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-DzxZIgiE.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CpXVgFzi.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-B2GUrnOH.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-4cMP39aE.js";import"./square-grid-circle.component-DWwnQ97F.js";b.define();const fe={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},e={render:()=>g`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumb>
  `},n={render:()=>g`
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
  `},s={render:()=>g`
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
  `},d={render:()=>g`
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
  `};var t,o,r,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
      <gds-text>Current page</gds-text>
    </gds-breadcrumb>
  \`
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source},description:{story:"Basic breadcrumb with text-only links",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.description}}};var a,c,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var u,h,k;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(h=d.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const xe=["Simple","Size","Mobile","Overflow"];export{s as Mobile,d as Overflow,e as Simple,n as Size,xe as __namedExportsOrder,fe as default};
