import{x as r}from"./lit-element-Bx14lxc-.js";import{g as J}from"./custom-element-scoping-CNGU1oQ0.js";import"./flex-DDs2ZYgf.js";import{G as K}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import"./text-BrjZcs2s.js";import"./button-GhvJAB4d.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./folder-DZ4ZHnyT.js";import"./chevron-right-D9R3rEvX.js";import"./square-grid-circle-DUPXVGu2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./text.component-BPAifzqH.js";import"./button.component-DinZMa0g.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./context-menu.component-C7I1iUeq.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./folder.component-WMDD9A0u.js";import"./chevron-right.component-CtQt4uEn.js";import"./square-grid-circle.component-DvzVLCZu.js";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,U=(t,e,n,o)=>{for(var s=o>1?void 0:o?R(e,n):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(s=(o?p(e,n,s):p(s))||s);return o&&s&&Q(e,n,s),s};let u=class extends K{constructor(){super(),this["align-items"]="center",this.gap="2xs"}render(){const t=Array.from(this.children),e=this.querySelector('[slot="separator"]');return r`
      ${t.map((n,o)=>n.getAttribute("slot")==="separator"?null:r`
          ${n}
          ${o<t.length-1?e==null?void 0:e.cloneNode(!0):null}
        `)}
    `}};u=U([J("gds-breadcrumb")],u);u.define();const Ge={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},d={render:()=>r`
    <gds-breadcrumb gap="s">
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  `},i={render:()=>r`
    <gds-breadcrumb gap="s">
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
  `},g={render:()=>r`
    <gds-breadcrumb gap="s">
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
  `},m={render:()=>r`
    <gds-breadcrumb gap="s">
      <span slot="separator">·</span>

      <gds-link href="/home">
        <gds-icon-home-open slot="trail"></gds-icon-home-open>
      </gds-link>

      <gds-link href="/settings">
        Settings
        <gds-icon-settings-gear slot="trail"></gds-icon-settings-gear>
      </gds-link>
    </gds-breadcrumb>
  `},c={render:()=>r`
    <gds-breadcrumb gap="s">
      <gds-text slot="separator" color="secondary"> · </gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-text color="secondary">Current</gds-text>
    </gds-breadcrumb>
  `},a={render:()=>r`
    <gds-breadcrumb gap="s">
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
  `};var h,b,k,f,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
      <gds-icon-chevron-right
        size="s"
        slot="separator"
      ></gds-icon-chevron-right>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-link href="/category">Category</gds-link>
    </gds-breadcrumb>
  \`
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Basic breadcrumb with text-only links",...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var x,y,S,C,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
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
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"Breadcrumb with leading icons in links",...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var P,z,B,H,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
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
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Breadcrumb with mixed elements (link, button, and context menu)",...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.description}}};var _,O,D,I,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source},description:{story:"Breadcrumb with trailing icons in links",...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var q,E,M,T,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
      <gds-text slot="separator" color="secondary"> · </gds-text>
      <gds-link href="/home">Home</gds-link>
      <gds-link href="/products">Products</gds-link>
      <gds-text color="secondary">Current</gds-text>
    </gds-breadcrumb>
  \`
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Breadcrumb with text separator",...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};var G,$,j,A,N;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
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
}`,...(j=($=a.parameters)==null?void 0:$.docs)==null?void 0:j.source},description:{story:"Breadcrumb with context menu for overflow",...(N=(A=a.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};const $e=["Simple","WithLeadIcons","MixedElements","WithTrailingIcons","TextSeparator","WithOverflow"];export{g as MixedElements,d as Simple,c as TextSeparator,i as WithLeadIcons,a as WithOverflow,m as WithTrailingIcons,$e as __namedExportsOrder,Ge as default};
