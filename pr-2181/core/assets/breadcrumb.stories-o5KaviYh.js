import{x as u}from"./lit-element-Bx14lxc-.js";import{g as h}from"./custom-element-scoping-CNGU1oQ0.js";import"./flex-DDs2ZYgf.js";import{G as f}from"./flex.component-CkL0ce-t.js";import"./link-D8uZu8n1.js";import"./context-menu-Drj9FUuH.js";import"./menu-item-120BDuth.js";import"./menu-heading-Cosv1ajY.js";import"./home-open-cgVLTZX4.js";import"./chevron-right-D9R3rEvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-DQsNuKSy.js";import"./div.component-laA26zwj.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./link.component-DT8Pz70K.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./context-menu.component-C7I1iUeq.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-async-MEroNOeJ.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-lz-XxrEG.js";import"./unwrap-slots-C4xryOWd.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./popover.component-CjYbOnBF.js";import"./floating-ui.dom-BmFOYU71.js";import"./watch-tFciLXSI.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./menu-heading.component-B6mtOJhl.js";import"./home-open.component-Br-MKRs0.js";import"./chevron-right.component-CtQt4uEn.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,x=(i,n,t,r)=>{for(var e=r>1?void 0:r?v(n,t):n,s=i.length-1,o;s>=0;s--)(o=i[s])&&(e=(r?o(n,t,e):o(e))||e);return r&&e&&b(n,t,e),e};let a=class extends f{constructor(){super(),this["align-items"]="center",this.gap="2xs"}render(){return u` <slot @slotchange=${this._handleSlotChange}></slot> `}_handleSlotChange(i){const t=i.target.assignedElements({flatten:!0});this.querySelectorAll("[data-breadcrumb-separator]").forEach(e=>e.remove());const r=this.querySelector('[slot="separator"]');r&&t.forEach((e,s)=>{if(s===t.length-1)return;const o=r.cloneNode(!0);o.setAttribute("data-breadcrumb-separator",""),e.after(o)})}};a=x([h("gds-breadcrumb")],a);a.define();const oe={title:"Components/Breadcrumb",component:"gds-breadcrumb",tags:["autodocs"]},m={render:()=>u`
    <gds-breadcrumb gap="s">
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

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
  `};var d,p,c,g,l;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <gds-breadcrumb gap="s">
      <gds-icon-chevron-right slot="separator"></gds-icon-chevron-right>

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
}`,...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"Basic breadcrumb with default separator",...(l=(g=m.parameters)==null?void 0:g.docs)==null?void 0:l.description}}};const ne=["Default"];export{m as Default,ne as __namedExportsOrder,oe as default};
