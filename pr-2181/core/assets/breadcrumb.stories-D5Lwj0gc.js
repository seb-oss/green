import{x as e}from"./lit-element-Bx14lxc-.js";import{G as j}from"./breadcrumb.component-BtbYkEnX.js";import"./link-D8uZu8n1.js";import"./card-BZWNLs71.js";import"./divider-DaXurB6Y.js";import"./text-BrjZcs2s.js";import"./button-GhvJAB4d.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./folder-DZ4ZHnyT.js";import"./chevron-right-D9R3rEvX.js";import"./square-grid-circle-DUPXVGu2.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flex-DDs2ZYgf.js";import"./flex.component-CkL0ce-t.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./card.component-McCzQM22.js";import"./text.component-BPAifzqH.js";import"./button.component-DinZMa0g.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-C7I1iUeq.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WMDD9A0u.js";import"./chevron-right.component-CtQt4uEn.js";import"./square-grid-circle.component-DvzVLCZu.js";j.define();const Ue={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},n={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `},s={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-button rank="tertiary" size="small">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Select Folder
      </gds-button>

      <gds-context-menu>
        <gds-menu-item>Move</gds-menu-item>
        <gds-menu-item>Copy</gds-menu-item>
        <gds-menu-item>Delete</gds-menu-item>
      </gds-context-menu>

      <span>Current Item</span>
    </gds-breadcrumb>
  `},o={render:()=>e`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="240px">Default(large)</gds-text>
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
          <gds-text width="240px">Small</gds-text>
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
          <gds-text width="240px">Default(large)</gds-text>
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
          <gds-text width="240px">Default(large)</gds-text>
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
  `},d={render:()=>e`
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
  `},t={render:()=>e`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  `},g={render:()=>e`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Slash</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Icon</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-icon-chevron-right size="s" slot="separator">
              /
            </gds-icon-chevron-right>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Dot</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">·</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `},r={render:()=>e`
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
  `};var i,l,a,m,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source},description:{story:"Basic breadcrumb with text-only links",...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var u,p,f,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-button rank="tertiary" size="small">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Select Folder
      </gds-button>

      <gds-context-menu>
        <gds-menu-item>Move</gds-menu-item>
        <gds-menu-item>Copy</gds-menu-item>
        <gds-menu-item>Delete</gds-menu-item>
      </gds-context-menu>

      <span>Current Item</span>
    </gds-breadcrumb>
  \`
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:`Breadcrumb with mixed elements (link, button, and context menu)

The breadcrumb component is not limited to links only. <br />
It can also contain buttons and context menus. <br />
The context menu can be used to show the overflow items when the breadcrumb is too long to fit in the available space.
Buttons and context menus can be used to trigger actions or show additional options. <br />

\`\`\`html
<gds-breadcrumb>
  <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
  <gds-link href="/home">
    <gds-icon-home-open slot="lead"></gds-icon-home-open>
    Home
  </gds-link>
  <gds-button rank="tertiary" size="small">
    <gds-icon-folder slot="lead"></gds-icon-folder>
    Select Folder
  </gds-button>
  <gds-context-menu>
    <gds-menu-item>Move</gds-menu-item>
    <gds-menu-item>Copy</gds-menu-item>
    <gds-menu-item>Delete</gds-menu-item>
  </gds-context-menu>
  <span>Current Item</span>
</gds-breadcrumb>
\`\`\``,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var b,k,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="m">
          <gds-text font-size="heading-m">Using links</gds-text>
          <gds-divider opacity="0.8" color="primary"></gds-divider>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-text width="240px">Default(large)</gds-text>
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
          <gds-text width="240px">Small</gds-text>
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
          <gds-text width="240px">Default(large)</gds-text>
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
          <gds-text width="240px">Default(large)</gds-text>
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
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var v,S,w,C,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
 \`\`\``,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var H,z,L,B,I;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
\`\`\``,...(I=(B=t.parameters)==null?void 0:B.docs)==null?void 0:I.description}}};var T,F,M,P,q;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Slash</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Icon</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-icon-chevron-right size="s" slot="separator">
              /
            </gds-icon-chevron-right>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text>v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Dot</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">·</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:`The separator can be any text or icon. <br/>
Is recommanded to be used the slash character. <br />

Separator can be set using the \`slot="separator"\` attribute. <br />
The separator will automatically show in between the breadcrumb items.

\`\`\`html
<gds-breadcrumb>
  <gds-text slot="separator">/</gds-text>
  <gds-link>...</gds-link>
  <gds-link>...</gds-link>
  <gds-link>...</gds-link>
</gds-breadcrumb>
\`\`\``,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var U,E,O,G,_;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(E=r.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:`Breadcrumb with context menu for overflow

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
\`\`\``,...(_=(G=r.parameters)==null?void 0:G.docs)==null?void 0:_.description}}};const Ee=["Simple","MixedElements","Size","LeadIcon","TrailIcon","Separator","Overflow"];export{d as LeadIcon,s as MixedElements,r as Overflow,g as Separator,n as Simple,o as Size,t as TrailIcon,Ee as __namedExportsOrder,Ue as default};
