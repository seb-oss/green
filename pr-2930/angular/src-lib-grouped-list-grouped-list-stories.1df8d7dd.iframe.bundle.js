/*! For license information please see src-lib-grouped-list-grouped-list-stories.1df8d7dd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[861],{8833(e,t,s){s.d(t,{o:()=>g});var r=s(745),o=s(4367),l=s(3539),n=s(5073),a=s(9399),d=s(4508),i=s(7526),c=s(4987),p=s(9443).AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let g=class extends((0,c.Q8)((0,c.vi)((0,c.TM)((0,c.Md)((0,c.lt)((0,c.qC)(l.j))))))){constructor(){super(...arguments),this.level="2"}render(){return i.qy`<slot></slot>`}};g.styles=[n.LU,p],(0,r.Cc)([(0,a.F)()],g.prototype,"display",2),(0,r.Cc)([(0,o.MZ)()],g.prototype,"level",2),(0,r.Cc)([(0,a.F)((0,d.T$)("content"))],g.prototype,"color",2),(0,r.Cc)([(0,a.F)((0,d.T$)("background"))],g.prototype,"background",2),(0,r.Cc)([(0,a.F)({styleTemplate:function(e,t){const s=this,[r,o=s["border-style"]||"solid",l=s["border-color"]||"subtle-01"]=t;return`border: var(--gds-sys-space-${r}) ${o} ${(0,d.ol)(l,"border",s.level)};`}})],g.prototype,"border",2),(0,r.Cc)([(0,a.F)((0,d.T$)("border"))],g.prototype,"border-color",2),(0,r.Cc)([(0,a.F)(d.MF)],g.prototype,"border-width",2),(0,r.Cc)([(0,a.F)()],g.prototype,"border-style",2),(0,r.Cc)([(0,a.F)(d.SE)],g.prototype,"border-radius",2),(0,r.Cc)([(0,a.F)({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],g.prototype,"box-shadow",2),(0,r.Cc)([(0,a.F)()],g.prototype,"opacity",2),(0,r.Cc)([(0,a.F)()],g.prototype,"overflow",2),(0,r.Cc)([(0,a.F)()],g.prototype,"box-sizing",2),(0,r.Cc)([(0,a.F)()],g.prototype,"z-index",2),(0,r.Cc)([(0,a.F)({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],g.prototype,"font",2),(0,r.Cc)([(0,a.F)({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],g.prototype,"font-weight",2),(0,r.Cc)([(0,a.F)()],g.prototype,"text-align",2),(0,r.Cc)([(0,a.F)()],g.prototype,"text-wrap",2),(0,r.Cc)([(0,a.F)()],g.prototype,"overflow-wrap",2),(0,r.Cc)([(0,a.F)()],g.prototype,"white-space",2),(0,r.Cc)([(0,a.F)({...d.MF,styleTemplate:(e,t)=>{const s=t[0];return`gap: ${s} ${t[1]||s};`},cacheOverrideKey:"flex"})],g.prototype,"gap",2),(0,r.Cc)([(0,a.F)()],g.prototype,"align-items",2),(0,r.Cc)([(0,a.F)()],g.prototype,"align-content",2),(0,r.Cc)([(0,a.F)()],g.prototype,"justify-content",2),(0,r.Cc)([(0,a.F)()],g.prototype,"justify-items",2),(0,r.Cc)([(0,a.F)()],g.prototype,"flex-direction",2),(0,r.Cc)([(0,a.F)()],g.prototype,"flex-wrap",2),(0,r.Cc)([(0,a.F)()],g.prototype,"place-items",2),(0,r.Cc)([(0,a.F)()],g.prototype,"place-content",2),(0,r.Cc)([(0,a.F)()],g.prototype,"aspect-ratio",2),(0,r.Cc)([(0,a.F)()],g.prototype,"cursor",2),(0,r.Cc)([(0,a.F)()],g.prototype,"pointer-events",2),g=(0,r.Cc)([(0,i.Y$)("gds-div")],g)},6312(e,t,s){s.d(t,{o:()=>d});var r=s(745),o=s(5073),l=s(7526),n=s(8833),a=s(9443).AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let d=class extends n.o{render(){return l.qy`<slot></slot>`}};d.styles=[o.LU,a],d=(0,r.Cc)([(0,l.Y$)("gds-flex")],d)},8585(e,t,s){s.d(t,{d:()=>g});var r=s(745),o=s(4367),l=s(505),n=s(3539),a=s(5073),d=s(4457),i=s(7526),c=s(9443).AH`
  .gds-list-heading {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-radius-s);
  }

  ::slotted([gds-element='gds-list-item']) {
    padding: var(--gds-sys-space-xs) var(--gds-sys-space-m);
    border-bottom-color: var(--gds-sys-color-border-neutral-03);
    border-bottom-width: var(--gds-sys-space-5xs);
    border-bottom-style: solid;
    display: flex;
    justify-content: space-between;
    gap: var(--gds-sys-space-3xs);
  }
`;s(2737).j.define();var p=s(6511);p.s.define();let g=class extends n.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),d.n.instance.apply(this,"gds-grouped-list")}render(){return i.qy`${(0,l.z)(this.label,()=>i.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};g.styles=[a.LU,c],(0,r.Cc)([(0,o.MZ)()],g.prototype,"label",2),g=(0,r.Cc)([(0,i.Y$)("gds-grouped-list",{dependsOn:[p.s]})],g)},6511(e,t,s){s.d(t,{s:()=>i});var r=s(745),o=s(3539),l=s(7526),n=s(5073),a=s(4987),d=s(9443).AH`
  :host {
  }

  slot:not([name]) {
  }
`;let i=class extends((0,a.lt)(o.j)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return l.qy`<slot></slot>`}};i.styles=[n.LU,d],i=(0,r.Cc)([(0,l.Y$)("gds-list-item")],i)},2737(e,t,s){s.d(t,{j:()=>d});var r=s(745),o=s(7526),l=s(5073),n=s(6312),a=s(9443).AH`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }
`;let d=class extends n.o{connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return o.qy`<slot></slot>`}};d.styles=[l.LU,a],d=(0,r.Cc)([(0,o.Y$)("gds-list")],d)},4457(e,t,s){s.d(t,{n:()=>c});var r,o,l,n=s(745),a=s(9443),d=s(1569),i=s(7526);r=new WeakMap,o=new WeakMap,l=new WeakMap;let c=class e{constructor(){(0,n.VK)(this,r,new Map),(0,n.VK)(this,o,new Map),(0,n.VK)(this,l,!(0,d.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[i.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[i.M]:new e}),globalThis.__gdsTransitionalStyles[i.M]}apply(e,t){if(!e.shadowRoot)return;const s=(0,n.S7)(this,r).get(t);s&&((0,n.S7)(this,o).set(t,e),this.applyToElement(t,s))}applyToElement(e,t){const s=(0,n.S7)(this,o).get(e);if(!s||!s.shadowRoot)return;const r=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",(0,a.iz)(t)),s._isUsingTransitionalStyles=!0},l=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let i=s.getRootNode(),c=s.closest(d);for(;null===c&&i!==document;)c=i.host?.closest(d),i=i.host?.getRootNode();if(c){const e=c,t=()=>{"2023"===e.designVersion?l():r()};if(e.addEventListener("gds-design-version-changed",t),s.addEventListener("gds-element-disconnected",()=>e.removeEventListener("gds-design-version-changed",t)),"2023"===e.designVersion)return void l()}r()}register(e,t){let s=t;(0,n.S7)(this,l)&&(s=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${t}`),(0,n.S7)(this,r).set(e,s),this.applyToElement(e,s)}}},7495(e,t,s){s.d(t,{L:()=>d});var r=s(8674),o=s(6990),l=s(5580),n=s(368),a=s(3288);let d=class{constructor(){this.viewRef=null,this.document=(0,o.WQX)(o.qQL),this.renderer=(0,o.WQX)(n.sFG),this.vcr=(0,o.WQX)(n.c1b),this.cdr=(0,o.WQX)(l.ChangeDetectorRef),this.template=(0,o.WQX)(n.C4Q),this.scopeResolver=(0,o.WQX)(a.G)}ngOnInit(){this.vcr.clear();const e=this.renderer.createElement;this.renderer.createElement=(e,t)=>this.document.createElement(this.scopeResolver.getScopedTagName(e)),this.cdr.markForCheck(),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=e}};d=(0,r.Cg)([(0,n.WLR)({selector:"[nggCoreElement]",standalone:!1})],d)},2920(e,t,s){s.d(t,{$:()=>a});var r=s(8674),o=s(3576),l=s(368),n=s(7495);let a=class{};a=(0,r.Cg)([(0,l.UQu)({declarations:[n.L],imports:[o.MD],exports:[n.L]})],a)},3288(e,t,s){s.d(t,{G:()=>l});var r=s(6990),o=s(7526);const l=new r.nKC("SCOPE_RESOLVER (for Green Core)",{providedIn:"root",factory:()=>({getScopedTagName:o.Eq})})},505(e,t,s){function r(e,t,s){return e?t(e):s?.(e)}s.d(t,{z:()=>r})},7371(e,t,s){s.r(t),s.d(t,{Default:()=>d,__namedExportsOrder:()=>i,default:()=>a});var r=s(368),o=s(2331),l=s(2920);s(745),s(8585).d.define();var n=s(4457);n.n.instance.register("gds-grouped-list","@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  @layer _base, _overrides;\n  :host {\n    display: block;\n    list-style: none;\n  }\n  @layer _base {\n    .gds-list-heading {\n      background-color: var(--gds-sys-color-base-200, #e9e9e9);\n      font-size: 0.875rem;\n      font-weight: 500;\n      padding: 0.5rem 1rem;\n    }\n    ::slotted([gds-element=gds-list-item]) {\n      all: revert;\n      border-bottom: 1px solid var(--gds-sys-color-base-200, #e9e9e9);\n      display: flex;\n      gap: 0.25rem;\n      justify-content: space-between;\n      padding: 1rem;\n    }\n  }\n}".toString());const a={title:"Components/Grouped List",decorators:[(0,o.Iz)({imports:[l.$],schemas:[r.CkJ]})],parameters:{}},d={render:e=>({template:`\n    <gds-grouped-list *nggCoreElement label="${e.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,props:e}),args:{label:"Grouped list label"}},i=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    template: `\n    <gds-grouped-list *nggCoreElement label=\"${args.label}\">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,\n    props: args\n  }),\n  args: {\n    label: 'Grouped list label'\n  }\n}",...d.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-lib-grouped-list-grouped-list-stories.1df8d7dd.iframe.bundle.js.map