import{x as p}from"./lit-element-Bx14lxc-.js";import{g as f}from"./custom-element-scoping-CNGU1oQ0.js";import"./flex-DDs2ZYgf.js";import{G as h}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./home-open-cgVLTZX4.js";import"./chevron-right-D9R3rEvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./context-menu.component-C7I1iUeq.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./watch-tFciLXSI.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./home-open.component-Br-MKRs0.js";import"./chevron-right.component-CtQt4uEn.js";var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,_=(n,r,t,o)=>{for(var e=o>1?void 0:o?x(r,t):r,m=n.length-1,i;m>=0;m--)(i=n[m])&&(e=(o?i(r,t,e):i(e))||e);return o&&e&&b(r,t,e),e};let d=class extends h{constructor(){super(),this["align-items"]="center",this.gap="2xs"}render(){const n=Array.from(this.children),r=this.querySelector('[slot="separator"]');return p`
      ${n.map((t,o)=>t.getAttribute("slot")==="separator"?null:p`
          ${t}
          ${o<n.length-1?r==null?void 0:r.cloneNode(!0):null}
        `)}
    `}};d=_([f("gds-breadcrumb")],d);d.define();const or={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},s={render:()=>p`
    <gds-breadcrumb gap="s">
      <span slot="separator">/</span>

      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/components">Components</gds-link>

      <gds-context-menu>
        <gds-menu-item>Action 1</gds-menu-item>
        <gds-menu-item>Action 2</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  `};var a,c,g,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
      <span slot="separator">/</span>

      <gds-link href="/home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
        Home
      </gds-link>

      <gds-link href="/components">Components</gds-link>

      <gds-context-menu>
        <gds-menu-item>Action 1</gds-menu-item>
        <gds-menu-item>Action 2</gds-menu-item>
      </gds-context-menu>

      <gds-link href="/current">Current Page</gds-link>
    </gds-breadcrumb>
  \`
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:"Basic breadcrumb with default separator",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};const nr=["Default"];export{s as Default,nr as __namedExportsOrder,or as default};
