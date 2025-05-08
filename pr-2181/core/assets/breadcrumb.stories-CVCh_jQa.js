import{x as m}from"./lit-element-Bx14lxc-.js";import{n as L,g as I}from"./custom-element-scoping-CNGU1oQ0.js";import{w as N,b as z,d as F}from"./declarative-layout-mixins-D1Y0gyd7.js";import"./flex-DDs2ZYgf.js";import"./chevron-right-D9R3rEvX.js";import{G as M}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import{G as X}from"./link.component-DT8Pz70K.js";import"./home-open-cgVLTZX4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chevron-right.component-CtQt4uEn.js";import"./icon-BNiJwJst.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./home-open.component-Br-MKRs0.js";var q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,$=(n,r,d,s)=>{for(var e=s>1?void 0:s?J(r,d):r,t=n.length-1,o;t>=0;t--)(o=n[t])&&(e=(s?o(r,d,e):o(e))||e);return s&&e&&q(r,d,e),e};class A extends M{constructor(){super(),this.label="Breadcrumb",this["align-items"]="center",this.gap="2xs"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation"),this.setAttribute("aria-label",this.label)}render(){return m`
      <gds-link href="/" aria-label="Home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
      </gds-link>
      <span>/</span>
      <gds-link href="/components" aria-label="Home"> Components </gds-link>
      <span>/</span>
      <gds-link href="/components/button" aria-label="button">
        Button
      </gds-link>
    `}}$([L({type:String})],A.prototype,"label",2);let b=class extends N(z(F(A))){};b=$([I("gds-breadcrumb")],b);b.define();var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,R=(n,r,d,s)=>{for(var e=s>1?void 0:s?Q(r,d):r,t=n.length-1,o;t>=0;t--)(o=n[t])&&(e=(s?o(r,d,e):o(e))||e);return s&&e&&K(r,d,e),e};let u=class extends X{render(){return m`
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    `}};u=R([I("gds-breadcrumb-item")],u);u.define();const be={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},a={render:()=>m`
    <gds-breadcrumb>
      <span slot="separator">/</span>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `},i={render:()=>m`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">Categories</gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `},c={render:()=>m`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">Home</gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `},g={render:()=>m`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">
            Categories
            <gds-icon-chevron-down slot="trail"></gds-icon-chevron-down>
          </gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">
        Products
        <gds-badge slot="trail">New</gds-badge>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  `};var p,l,h,f,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <span slot="separator">/</span>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  \`
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source},description:{story:"Basic breadcrumb with default separator",...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var C,w,P,x,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">Categories</gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  \`
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source},description:{story:"Breadcrumb with dropdown menu",...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var _,H,B,O,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">Home</gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">Products</gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  \`
}`,...(B=(H=c.parameters)==null?void 0:H.docs)==null?void 0:B.source},description:{story:"Breadcrumb with custom icon separator",...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.description}}};var S,G,j,E,W;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb>
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>
      <gds-breadcrumb-item href="/">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-breadcrumb-item>
      <gds-breadcrumb-item>
        <gds-dropdown>
          <gds-button slot="trigger">
            Categories
            <gds-icon-chevron-down slot="trail"></gds-icon-chevron-down>
          </gds-button>
          <gds-menu>
            <gds-menu-item>Category 1</gds-menu-item>
            <gds-menu-item>Category 2</gds-menu-item>
          </gds-menu>
        </gds-dropdown>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item href="/products">
        Products
        <gds-badge slot="trail">New</gds-badge>
      </gds-breadcrumb-item>
      <gds-breadcrumb-item active>Current Page</gds-breadcrumb-item>
    </gds-breadcrumb>
  \`
}`,...(j=(G=g.parameters)==null?void 0:G.docs)==null?void 0:j.source},description:{story:"Complex example with mixed content",...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};const ue=["Default","WithDropdown","WithIconSeparator","ComplexExample"];export{g as ComplexExample,a as Default,i as WithDropdown,c as WithIconSeparator,ue as __namedExportsOrder,be as default};
