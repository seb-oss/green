import{x as s}from"./lit-element-Bx14lxc-.js";import{s as te}from"./declarative-layout-mixins-D1Y0gyd7.js";import{g as re}from"./custom-element-scoping-CNGU1oQ0.js";import"./flex-DDs2ZYgf.js";import{G as ge}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import"./card-BZWNLs71.js";import"./divider-DaXurB6Y.js";import"./text-BrjZcs2s.js";import"./button-GhvJAB4d.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./folder-DZ4ZHnyT.js";import"./chevron-right-D9R3rEvX.js";import"./square-grid-circle-DUPXVGu2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./card.component-McCzQM22.js";import"./text.component-BPAifzqH.js";import"./button.component-DinZMa0g.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-C7I1iUeq.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WMDD9A0u.js";import"./chevron-right.component-CtQt4uEn.js";import"./square-grid-circle.component-DvzVLCZu.js";var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,u=(t,e,n,r)=>{for(var d=r>1?void 0:r?ie(e,n):e,x=t.length-1,f;x>=0;x--)(f=t[x])&&(d=(r?f(e,n,d):f(d))||d);return r&&d&&oe(e,n,d),d};let h=class extends ge{constructor(){super(),this["align-items"]="center",this.gap="s"}render(){const t=Array.from(this.children),e=this.querySelector('[slot="separator"]');return s`
      ${t.map((n,r)=>n.getAttribute("slot")==="separator"?null:s`
          ${n}
          ${r<t.length-1?e==null?void 0:e.cloneNode(!0):null}
        `)}
    `}};u([te({styleTemplate:(t,e)=>{const n=e[0],r=`font-size: var(--gds-sys-text-size-${n});`,d=`line-height: var(--gds-sys-text-line-height-${n});`;return r+d}})],h.prototype,"font-size",2);u([te({valueTemplate:t=>`var(--gds-sys-text-weight-${t})`})],h.prototype,"font-weight",2);h=u([re("gds-breadcrumb")],h);h.define();const ns={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},g={render:()=>s`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>
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

      <gds-link href="/folder">
        <gds-icon-folder slot="lead"></gds-icon-folder>
        Documents
      </gds-link>

      <gds-link href="/settings">
        <gds-icon-settings-gear slot="lead"></gds-icon-settings-gear>
        Settings
      </gds-link>
    </gds-breadcrumb>
  `},i={render:()=>s`
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
    <gds-breadcrumb>
      <gds-text slot="separator" color="secondary"> · </gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-text color="secondary">Current</gds-text>
    </gds-breadcrumb>
  `},c={render:()=>s`
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
  `},m={render:()=>s`
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
  `};var k,b,y,v,z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(y=(b=g.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Basic breadcrumb with text-only links",...(z=(v=g.parameters)==null?void 0:v.docs)==null?void 0:z.description}}};var C,w,B,S,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Breadcrumb with leading icons in links",...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.description}}};var F,G,P,D,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(G=i.parameters)==null?void 0:G.docs)==null?void 0:P.source},description:{story:"Breadcrumb with mixed elements (link, button, and context menu)",...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var _,H,O,I,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"Breadcrumb with trailing icons in links",...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};var W,$,q,E,A;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-text slot="separator" color="secondary"> · </gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-text color="secondary">Current</gds-text>
    </gds-breadcrumb>
  \`
}`,...(q=($=a.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Breadcrumb with text separator",...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.description}}};var j,X,N,J,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(X=c.parameters)==null?void 0:X.docs)==null?void 0:N.source},description:{story:"Breadcrumb with context menu for overflow",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,R,U,V,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:`The breadcrumb component supports different font sizes for its text.
Font size sets automatically line height.

All the typography tokens are available for use.`,...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};var Z,ee,se,ne,de;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:se.source},description:{story:"The breadcrumb gap between its elements can be set using the `gap` property.\nThe gap property accepts all the spacing tokens from the design system.\nThe default value is `2xs`.",...(de=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};const ds=["Simple","WithLeadIcons","MixedElements","WithTrailingIcons","TextSeparator","WithOverflow","fontSize","Gap"];export{p as Gap,i as MixedElements,g as Simple,a as TextSeparator,o as WithLeadIcons,c as WithOverflow,l as WithTrailingIcons,ds as __namedExportsOrder,ns as default,m as fontSize};
