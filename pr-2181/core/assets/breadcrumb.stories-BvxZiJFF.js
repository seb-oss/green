import{x as s}from"./lit-element-Bx14lxc-.js";import{s as te}from"./declarative-layout-mixins-D1Y0gyd7.js";import{g as ge}from"./custom-element-scoping-CNGU1oQ0.js";import"./flex-DDs2ZYgf.js";import{G as re}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import"./card-BZWNLs71.js";import"./divider-DaXurB6Y.js";import"./text-BrjZcs2s.js";import"./button-GhvJAB4d.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./folder-DZ4ZHnyT.js";import"./chevron-right-D9R3rEvX.js";import"./square-grid-circle-DUPXVGu2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./card.component-McCzQM22.js";import"./text.component-BPAifzqH.js";import"./button.component-DinZMa0g.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-C7I1iUeq.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WMDD9A0u.js";import"./chevron-right.component-CtQt4uEn.js";import"./square-grid-circle.component-DvzVLCZu.js";var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,u=(t,e,n,g)=>{for(var d=g>1?void 0:g?ie(e,n):e,x=t.length-1,f;x>=0;x--)(f=t[x])&&(d=(g?f(e,n,d):f(d))||d);return g&&d&&oe(e,n,d),d};let h=class extends re{constructor(){super(),this["align-items"]="center",this.gap="s"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.setAttribute("aria-label","Breadcrumb")}render(){const t=Array.from(this.children),e=this.querySelector('[slot="separator"]');return s`
      ${t.map((n,g)=>n.getAttribute("slot")==="separator"?null:s`
          ${n}
          ${g<t.length-1?e==null?void 0:e.cloneNode(!0):null}
        `)}
    `}};u([te({styleTemplate:(t,e)=>{const n=e[0],g=`font-size: var(--gds-sys-text-size-${n});`,d=`line-height: var(--gds-sys-text-line-height-${n});`;return g+d}})],h.prototype,"font-size",2);u([te({valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],h.prototype,"font-weight",2);h=u([ge("gds-breadcrumb")],h);h.define();const ns={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},r={render:()=>s`
    <gds-breadcrumb>
      <gds-text slot="separator">/</gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `},o={render:()=>s`
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
  `},i={render:()=>s`
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
  `},l={render:()=>s`
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
  `},a={render:()=>s`
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Icon</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-icon-chevron-right size="s" slot="separator"
              >/</gds-icon-chevron-right
            >
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
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
  `},m={render:()=>s`
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
  `},c={render:()=>s`
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `},p={render:()=>s`
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `};var b,k,y,v,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-text slot="separator">/</gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"Basic breadcrumb with text-only links",...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var C,B,z,S,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source},description:{story:`Breadcrumb with mixed elements (link, button, and context menu)

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
\`\`\``,...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.description}}};var T,F,D,G,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
 \`\`\``,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.description}}};var P,_,H,M,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(_=l.parameters)==null?void 0:_.docs)==null?void 0:H.source},description:{story:`Lead and trail icons depend on the element type. <br />
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
\`\`\``,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var $,q,A,E,j;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
      <gds-flex gap="m" align-items="center">
        <gds-flex width="200px" gap="m">
          <gds-text>Icon</gds-text>
        </gds-flex>
        <gds-card flex="1">
          <gds-breadcrumb>
            <gds-icon-chevron-right size="s" slot="separator"
              >/</gds-icon-chevron-right
            >
            <gds-link href="#">
              <gds-icon-home-open slot="lead"></gds-icon-home-open>
            </gds-link>
            <gds-link href="#"> Blog </gds-link>
            <gds-link href="#"> Changelog </gds-link>
            <gds-text opacity="0.4">v2.0</gds-text>
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
}`,...(A=(q=a.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:`The separator can be any text or icon. <br/>
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
\`\`\``,...(j=(E=a.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var W,X,N,J,K;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(X=m.parameters)==null?void 0:X.docs)==null?void 0:N.source},description:{story:`Breadcrumb with context menu for overflow

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
\`\`\``,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,R,U,V,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:`The breadcrumb component supports different font sizes for its text.
Font size sets automatically line height.

All the typography tokens are available for use.

The default font size it inherits from parent.

\`\`\`html
<gds-breadcrumb font-size="body-m">...</gds-breadcrumb>
\`\`\``,...(Y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};var Z,ee,se,ne,de;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
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
            <gds-text opacity="0.4">v2.0</gds-text>
          </gds-breadcrumb>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(se=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:se.source},description:{story:'The breadcrumb gap between its elements can be set using the `gap` property. <br/>\nThe gap property accepts all the spacing tokens from the design system.<br/>\nThe default value is `s`.\n\n\n```html\n<gds-breadcrumb gap="m">...</gds-breadcrumb>\n```',...(de=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};const ds=["Simple","MixedElements","LeadIcon","TrailIcon","Separator","WithOverflow","fontSize","Gap"];export{p as Gap,i as LeadIcon,o as MixedElements,a as Separator,r as Simple,l as TrailIcon,m as WithOverflow,ds as __namedExportsOrder,ns as default,c as fontSize};
