import{r as A,g as P,n as b}from"./gds-element-54cd6e2a.js";import{a as T}from"./query-b9d3c2af.js";import{o as O,f as k,a as D,c as M}from"./floating-ui.dom-373c8bf6.js";import{w}from"./watch-c4961afe.js";import{s as h}from"./style-expression-property-89161d08.js";import{i as R}from"./lit-element-71e04f06.js";import{G as U}from"./button-b9380234.js";import"./chevron-bottom-433ce854.js";import"./_commonjsHelpers-725317a4.js";import"./static-c6782857.js";import"./when-cf7256a5.js";import"./if-defined-e4b5fcf9.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-dbd95809.js";import"./tokens.style-880811e7.js";import"./lit-localize-87611c26.js";import"./icon-cbb1cac4.js";const E=R`
  :host {
    position: fixed;
    top: 0;
    left: 0;
  }
  button {
    /* TODO: Tokens! */
    box-shadow:
      0px 8px 12px 0px rgba(27, 27, 24, 0.15),
      0px 0px 1px 0px rgba(13, 13, 12, 0.3);
    border: none;
    background-color: var(--gds-sys-color-background-background-dim);
    color: var(--gds-sys-color-primary-text);
    height: 3.5rem;
    font-weight: 400;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-container-container-shade1) 10%,
        transparent
      );
    }
  }
`;var S=Object.defineProperty,F=Object.getOwnPropertyDescriptor,a=(t,e,r,s)=>{for(var n=s>1?void 0:s?F(e,r):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(n=(s?d(e,r,n):d(n))||n);return s&&n&&S(e,r,n),n},f=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},m=(t,e,r)=>(f(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},I=(t,e,r,s)=>(f(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r),B=(t,e,r)=>(f(t,e,"access private method"),r),p,l,C;let o=class extends U{constructor(){super(...arguments),g(this,l),this.floatingUIMiddleware=[O(8),k()],this._anchor=void 0,g(this,p,void 0)}connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",E)}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleAnchorChanged(){B(this,l,C).call(this)}};p=new WeakMap;l=new WeakSet;C=function(){if(!this._anchor)return;const t=this._anchor;m(this,p)&&m(this,p).call(this),I(this,p,D(t,this,()=>{M(t,this,{middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:e,y:r})=>Object.assign(this.style,{left:`${e}px`,top:`${r}px`}))}))};a([b({attribute:!1})],o.prototype,"anchorRef",2);a([h({valueTemplate:t=>t})],o.prototype,"position",2);a([h({valueTemplate:t=>t})],o.prototype,"transform",2);a([h({valueTemplate:t=>t})],o.prototype,"inset",2);a([b({attribute:!1})],o.prototype,"floatingUIMiddleware",2);a([A()],o.prototype,"_anchor",2);a([T("slot:not([name])")],o.prototype,"_elDefaultSlot",2);a([w("anchorRef")],o.prototype,"_handleAnchorRefChanged",1);a([w("_anchor")],o.prototype,"_handleAnchorChanged",1);o=a([P("gds-fab")],o);const at={title:"Docs/Components/FAB",component:"gds-fab",tags:["autodocs"],parameters:{docs:{description:{component:"A FAB is a floating action button that is used to trigger a primary action in the UI."}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
    What's new? <div slot="trail" style="width:8px;height:8px;border-radius:8px;background-color:green;box-shadow:0 0 0 4px rgba(0,85,0,0.3)"></div>
`}},i={...G};var u,_,v,y,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const st=["Usage"];export{i as Usage,st as __namedExportsOrder,at as default};
