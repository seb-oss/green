import{x as e}from"./lit-element-Bx14lxc-.js";import{G as B}from"./breadcrumb.component-C9PyzRAY.js";import"./link-CHntNb2B.js";import"./flex-DqgnLVUU.js";import"./card-C1zbrG7H.js";import"./divider-D8gQs4gA.js";import"./text-CDvyETQY.js";import"./button-D9FqrDJ_.js";import"./context-menu-dMC8A1Jh.js";import"./menu-item-BRWFpw0y.js";import"./menu-heading-Cosv1ajY.js";import"./folder-D2HL6vSx.js";import"./chevron-right-mprMjSET.js";import"./square-grid-circle-CK_H7wh0.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./chevron-right.component-BEaAedbo.js";import"./icon-1rFpnFmF.js";import"./link.component-rKuNL8tE.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./flex.component-DXi-h7Ch.js";import"./div.component-COo6-rOq.js";import"./card.component-a_DdskCg.js";import"./text.component-CpYv9ler.js";import"./button.component-TPtFxgGx.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-DzxZIgiE.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CpXVgFzi.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-B2GUrnOH.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WGWcoYU2.js";import"./square-grid-circle.component-DWwnQ97F.js";B.define();const Le={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},n={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `},g={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
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
          <gds-card flex="1">
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
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using buttons</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
            <gds-breadcrumb>
              <gds-button href="/home" rank="tertiary">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-button>

              <gds-button href="/folder" rank="tertiary">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-button>

              <gds-button href="/settings" rank="tertiary">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-button>
              <gds-button rank="tertiary"> Current page </gds-button>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card flex="1">
            <gds-breadcrumb size="small" rank="tertiary">
              <gds-button href="/home" rank="tertiary">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-button>

              <gds-button href="/folder" rank="tertiary">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-button>

              <gds-button href="/settings" rank="tertiary">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-button>
              <gds-button rank="tertiary"> Current page </gds-button>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},r={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
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
          <gds-card flex="1">
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
  `},s={render:()=>e`
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
    </gds-breadcrumb>
  `},d={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  `},t={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        Components
      </gds-link>
      <gds-context-menu>
        <gds-menu-item>Level 1</gds-menu-item>
        <gds-menu-item>Level 2</gds-menu-item>
        <gds-menu-item>Level 3</gds-menu-item>
      </gds-context-menu>
      <gds-text>Current Page</gds-text>
    </gds-breadcrumb>
  `};var o,i,l,a,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"Basic breadcrumb with text-only links",...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.description}}};var c,f,u;g.parameters={...g.parameters,docs:{...(c=g.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
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
          <gds-card flex="1">
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
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using buttons</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
            <gds-breadcrumb>
              <gds-button href="/home" rank="tertiary">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-button>

              <gds-button href="/folder" rank="tertiary">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-button>

              <gds-button href="/settings" rank="tertiary">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-button>
              <gds-button rank="tertiary"> Current page </gds-button>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Small</gds-text>
          <gds-card flex="1">
            <gds-breadcrumb size="small" rank="tertiary">
              <gds-button href="/home" rank="tertiary">
                <gds-icon-home-open slot="lead"></gds-icon-home-open>
                Home
              </gds-button>

              <gds-button href="/folder" rank="tertiary">
                <gds-icon-folder slot="lead"></gds-icon-folder>
                Documents
              </gds-button>

              <gds-button href="/settings" rank="tertiary">
                <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
                Settings
              </gds-button>
              <gds-button rank="tertiary"> Current page </gds-button>
            </gds-breadcrumb>
          </gds-card>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(u=(f=g.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var p,x,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="200px">Default(large)</gds-text>
          <gds-card flex="1">
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
          <gds-card flex="1">
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
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,k,y,S,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
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
    </gds-breadcrumb>
  \`
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:`Lead and trail icons depend on the element type. <br />
The trail slot is used in links and buttons. <br />

For more information about the lead and trail icons, check the documentation on button and link. <br />

\`\`\`html
<gds-breadcrumb>
   <gds-text slot="separator">/</gds-text>
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
 </gds-breadcrumb>
 \`\`\``,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var D,w,C,H,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  \`
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:`Lead and trail icons depend on the element type. <br />
The trail slot is used in links and buttons. <br />

For more information about the lead and trail icons, check the documentation on button and link. 

\`\`\`html
<gds-breadcrumb>
  <gds-text slot="separator">/</gds-text>
  <gds-link href="/home">
    <gds-icon-home-open slot="trail"></gds-icon-home-open>
  </gds-link>
  <gds-link href="/settings">
    Settings
    <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
  </gds-link>
</gds-breadcrumb>
\`\`\``,...(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};var L,U,P,T,q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        Components
      </gds-link>
      <gds-context-menu>
        <gds-menu-item>Level 1</gds-menu-item>
        <gds-menu-item>Level 2</gds-menu-item>
        <gds-menu-item>Level 3</gds-menu-item>
      </gds-context-menu>
      <gds-text>Current Page</gds-text>
    </gds-breadcrumb>
  \`
}`,...(P=(U=t.parameters)==null?void 0:U.docs)==null?void 0:P.source},description:{story:`Breadcrumb with context menu for overflow

The context menu can be used to show the overflow items when the breadcrumb is too long to fit in the available space.

\`\`\`html
<gds-breadcrumb>
  <gds-link>...</gds-link>
  <gds-context-menu>
   <gds-menu-item>Level 1</gds-menu-item>
   <gds-menu-item>Level 2</gds-menu-item>
   <gds-menu-item>Level 3</gds-menu-item>
  </gds-context-menu>
  <gds-link>Current Page</gds-link>
</gds-breadcrumb>
\`\`\``,...(q=(T=t.parameters)==null?void 0:T.docs)==null?void 0:q.description}}};const Ue=["Simple","Size","Mobile","LeadIcon","TrailIcon","Overflow"];export{s as LeadIcon,r as Mobile,t as Overflow,n as Simple,g as Size,d as TrailIcon,Ue as __namedExportsOrder,Le as default};
