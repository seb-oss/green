import{x as e}from"./lit-element-Bx14lxc-.js";import{G as U}from"./breadcrumb.component-Cns2smHS.js";import"./link-D8uZu8n1.js";import"./card-BZWNLs71.js";import"./divider-DaXurB6Y.js";import"./text-BrjZcs2s.js";import"./button-GhvJAB4d.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./folder-DZ4ZHnyT.js";import"./chevron-right-D9R3rEvX.js";import"./square-grid-circle-DUPXVGu2.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flex-DDs2ZYgf.js";import"./flex.component-CkL0ce-t.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./card.component-McCzQM22.js";import"./text.component-BPAifzqH.js";import"./button.component-DinZMa0g.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-C7I1iUeq.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WMDD9A0u.js";import"./chevron-right.component-CtQt4uEn.js";import"./square-grid-circle.component-DvzVLCZu.js";U.define();const Je={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},s={render:()=>e`
    <gds-breadcrumb>
      <gds-text slot="separator">/</gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `},n={render:()=>e`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>

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
  `},d={render:()=>e`
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
  `},t={render:()=>e`
    <gds-breadcrumb>
      <span slot="separator">·</span>

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
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        Components
      </gds-link>

      <gds-context-menu>
        <gds-menu-item>Level 1</gds-menu-item>
        <gds-menu-item>Level 2</gds-menu-item>
        <gds-menu-item>Level 3</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  `},o={render:()=>e`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Default/inherited</gds-text>
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
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body S</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-s">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body M</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-m">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `},i={render:()=>e`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: Default(s)</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: XL</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="xl">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `};var l,a,m,c,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-text slot="separator">/</gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source},description:{story:"Basic breadcrumb with text-only links",...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var x,h,f,u,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>

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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:`Breadcrumb with mixed elements (link, button, and context menu)

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
\`\`\``,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var k,v,y,w,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
 \`\`\``,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var B,S,z,L,F;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <span slot="separator">·</span>

      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  \`
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
\`\`\``,...(F=(L=t.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var T,D,I,G,H;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:`The separator can be any text or icon. <br/>
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
\`\`\``,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var M,P,q,E,O;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

      <gds-link href="/home">
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        Components
      </gds-link>

      <gds-context-menu>
        <gds-menu-item>Level 1</gds-menu-item>
        <gds-menu-item>Level 2</gds-menu-item>
        <gds-menu-item>Level 3</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  \`
}`,...(q=(P=r.parameters)==null?void 0:P.docs)==null?void 0:q.source},description:{story:`Breadcrumb with context menu for overflow

The context menu can be used to show the overflow items when the breadcrumb is too long to fit in the available space.

\`\`\`html
<gds-breadcrumb>
  <gds-text slot="separator">/</gds-text>
  <gds-link>...</gds-link>
  <gds-context-menu>
   <gds-menu-item>Level 1</gds-menu-item>
   <gds-menu-item>Level 2</gds-menu-item>
   <gds-menu-item>Level 3</gds-menu-item>
  </gds-context-menu>
  <gds-link>Current Page</gds-link>
</gds-breadcrumb>
\`\`\``,...(O=(E=r.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var W,X,_,A,j;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Default/inherited</gds-text>
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
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body S</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-s">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body M</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-m">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Font size: Body L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb font-size="body-l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(_=(X=o.parameters)==null?void 0:X.docs)==null?void 0:_.source},description:{story:`The breadcrumb component supports different font sizes for its text.
Font size sets automatically line height.

All the typography tokens are available for use.

The default font size it inherits from parent.

\`\`\`html
<gds-breadcrumb font-size="body-m">...</gds-breadcrumb>
\`\`\``,...(j=(A=o.parameters)==null?void 0:A.docs)==null?void 0:j.description}}};var J,K,N,Q,R;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: Default(s)</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-divider opacity="0.2"></gds-divider>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: L</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="l">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Gap: XL</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb gap="xl">
            <gds-text slot="separator">/</gds-text>
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text color="secondary"> v2.0 </gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(N=(K=i.parameters)==null?void 0:K.docs)==null?void 0:N.source},description:{story:'The breadcrumb gap between its elements can be set using the `gap` property. <br/>\nThe gap property accepts all the spacing tokens from the design system.<br/>\nThe default value is `s`.\n\n\n```html\n<gds-breadcrumb gap="m">...</gds-breadcrumb>\n```',...(R=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};const Ke=["Simple","MixedElements","LeadIcon","TrailIcon","Separator","WithOverflow","fontSize","Gap"];export{i as Gap,d as LeadIcon,n as MixedElements,g as Separator,s as Simple,t as TrailIcon,r as WithOverflow,Ke as __namedExportsOrder,Je as default,o as fontSize};
