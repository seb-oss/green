/*! For license information please see src-lib-grouped-list-grouped-list-stories.63982401.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[861],{8833(e,t,s){s.d(t,{o:()=>g});var r=s(745),o=s(4367),l=s(3539),n=s(5073),i=s(9399),d=s(4508),a=s(7526),c=s(4987),p=s(9443).AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let g=class extends((0,c.Q8)((0,c.vi)((0,c.TM)((0,c.Md)((0,c.lt)((0,c.qC)(l.j))))))){constructor(){super(...arguments),this.level="2"}render(){return a.qy`<slot></slot>`}};g.styles=[n.LU,p],(0,r.Cc)([(0,i.F)()],g.prototype,"display",2),(0,r.Cc)([(0,o.MZ)()],g.prototype,"level",2),(0,r.Cc)([(0,i.F)((0,d.T$)("content"))],g.prototype,"color",2),(0,r.Cc)([(0,i.F)((0,d.T$)("background"))],g.prototype,"background",2),(0,r.Cc)([(0,i.F)({styleTemplate:function(e,t){const s=this,[r,o=s["border-style"]||"solid",l=s["border-color"]||"subtle-01"]=t;return`border: var(--gds-sys-space-${r}) ${o} ${(0,d.ol)(l,"border",s.level)};`}})],g.prototype,"border",2),(0,r.Cc)([(0,i.F)((0,d.T$)("border"))],g.prototype,"border-color",2),(0,r.Cc)([(0,i.F)(d.MF)],g.prototype,"border-width",2),(0,r.Cc)([(0,i.F)()],g.prototype,"border-style",2),(0,r.Cc)([(0,i.F)(d.SE)],g.prototype,"border-radius",2),(0,r.Cc)([(0,i.F)({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],g.prototype,"box-shadow",2),(0,r.Cc)([(0,i.F)()],g.prototype,"opacity",2),(0,r.Cc)([(0,i.F)()],g.prototype,"overflow",2),(0,r.Cc)([(0,i.F)()],g.prototype,"box-sizing",2),(0,r.Cc)([(0,i.F)()],g.prototype,"z-index",2),(0,r.Cc)([(0,i.F)({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],g.prototype,"font",2),(0,r.Cc)([(0,i.F)({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],g.prototype,"font-weight",2),(0,r.Cc)([(0,i.F)()],g.prototype,"text-align",2),(0,r.Cc)([(0,i.F)()],g.prototype,"text-wrap",2),(0,r.Cc)([(0,i.F)()],g.prototype,"overflow-wrap",2),(0,r.Cc)([(0,i.F)()],g.prototype,"white-space",2),(0,r.Cc)([(0,i.F)({...d.MF,styleTemplate:(e,t)=>{const s=t[0];return`gap: ${s} ${t[1]||s};`},cacheOverrideKey:"flex"})],g.prototype,"gap",2),(0,r.Cc)([(0,i.F)()],g.prototype,"align-items",2),(0,r.Cc)([(0,i.F)()],g.prototype,"align-content",2),(0,r.Cc)([(0,i.F)()],g.prototype,"justify-content",2),(0,r.Cc)([(0,i.F)()],g.prototype,"justify-items",2),(0,r.Cc)([(0,i.F)()],g.prototype,"flex-direction",2),(0,r.Cc)([(0,i.F)()],g.prototype,"flex-wrap",2),(0,r.Cc)([(0,i.F)()],g.prototype,"place-items",2),(0,r.Cc)([(0,i.F)()],g.prototype,"place-content",2),(0,r.Cc)([(0,i.F)()],g.prototype,"aspect-ratio",2),(0,r.Cc)([(0,i.F)()],g.prototype,"cursor",2),(0,r.Cc)([(0,i.F)()],g.prototype,"pointer-events",2),g=(0,r.Cc)([(0,a.Y$)("gds-div")],g)},6312(e,t,s){s.d(t,{o:()=>d});var r=s(745),o=s(5073),l=s(7526),n=s(8833),i=s(9443).AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let d=class extends n.o{render(){return l.qy`<slot></slot>`}};d.styles=[o.LU,i],d=(0,r.Cc)([(0,l.Y$)("gds-flex")],d)},8585(e,t,s){s.d(t,{d:()=>g});var r=s(745),o=s(4367),l=s(505),n=s(3539),i=s(5073),d=s(4457),a=s(7526),c=s(9443).AH`
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
`;s(2737).j.define();var p=s(5248);p.s.define();let g=class extends n.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),d.n.instance.apply(this,"gds-grouped-list")}render(){return a.qy`${(0,l.z)(this.label,()=>a.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};g.styles=[i.LU,c],(0,r.Cc)([(0,o.MZ)()],g.prototype,"label",2),g=(0,r.Cc)([(0,a.Y$)("gds-grouped-list",{dependsOn:[p.s]})],g)},5248(e,t,s){s.d(t,{s:()=>d});var r=s(745),o=s(3539),l=s(7526),n=s(5073),i=s(4987);let d=class extends((0,i.lt)(o.j)){connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return l.qy`<slot></slot>`}};d.styles=n.LU,d=(0,r.Cc)([(0,l.Y$)("gds-list-item")],d)},2737(e,t,s){s.d(t,{j:()=>c});var r,o=s(745),l=s(4367),n=s(7526),i=s(5073),d=s(6312),a=s(9443).AH`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  :host ::slotted(*:not(:first-child)) {
    padding-top: var(--gds-sys-space-s);
  }

  :host ::slotted(*:not(:last-child)) {
    padding-bottom: var(--gds-sys-space-s);
  }

  :host([dividers]) ::slotted(*:not(:last-child)) {
    border-bottom: 1px solid var(--gds-sys-color-border-neutral-03);
    border-radius: 0;
  }

  @media (pointer: fine) {
    :host([dividers])
      ::slotted([href]:not([selectable]):not(:last-child):hover) {
      border-bottom-color: transparent;
    }

    :host([dividers]) ::slotted([hide-prev-border]:not(:last-child)) {
      border-bottom-color: transparent;
    }
  }
`;let c=class extends d.o{constructor(){super(...arguments),this.dividers=!1,(0,o.VK)(this,r,e=>{if(!this.dividers)return;const t=e.target.closest?.("[href]:not([selectable])");t?.parentElement===this&&t.previousElementSibling?.toggleAttribute("hide-prev-border","pointerover"===e.type)})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list"),this.addEventListener("pointerover",(0,o.S7)(this,r)),this.addEventListener("pointerout",(0,o.S7)(this,r))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerover",(0,o.S7)(this,r)),this.removeEventListener("pointerout",(0,o.S7)(this,r))}render(){return n.qy`<slot></slot>`}};r=new WeakMap,c.styles=[i.LU,a],(0,o.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],c.prototype,"dividers",2),c=(0,o.Cc)([(0,n.Y$)("gds-list")],c)},4457(e,t,s){s.d(t,{n:()=>y});var r,o,l,n,i,d,a=s(745),c=s(9443),p=s(1569),g=s(7526);r=new WeakMap,o=new WeakMap,l=new WeakMap,n=new WeakMap,i=new WeakSet,d=function(e,t,s){const r="[gds-element=gds-theme]";let o=e.getRootNode(),l=e.closest(r);for(;null===l&&o!==document;)l=o.host?.closest(r),o=o.host?.getRootNode();if(l){const r=l,o=()=>{"2023"===r.designVersion?s():t()};if(r.addEventListener("gds-design-version-changed",o),e.addEventListener("gds-element-disconnected",()=>r.removeEventListener("gds-design-version-changed",o)),"2023"===r.designVersion)return void s()}t()};let y=class e{constructor(){(0,a.VK)(this,i),(0,a.VK)(this,r,new Map),(0,a.VK)(this,o,new Map),(0,a.VK)(this,l,new Map),(0,a.VK)(this,n,!(0,p.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[g.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[g.M]:new e}),globalThis.__gdsTransitionalStyles[g.M]}apply(e,t){if(!e.shadowRoot)return;const s=(0,a.S7)(this,r).get(t);s&&((0,a.S7)(this,o).set(t,e),this.applyToElement(t,s))}applyScoped(e,t,s){if(!e.shadowRoot)return;const o=(0,a.S7)(this,r).get(t);o&&((0,a.S7)(this,l).set(t,{element:e,injectKey:s}),this.applyScopedToElement(t,o))}applyScopedToElement(e,t){const s=(0,a.S7)(this,l).get(e);if(!s||!s.element.shadowRoot)return;const{element:r,injectKey:o}=s;(0,a.jq)(this,i,d).call(this,r,()=>r._dynamicStylesController.inject(o,(0,c.iz)(t)),()=>r._dynamicStylesController.clear(o))}applyToElement(e,t){const s=(0,a.S7)(this,o).get(e);s&&s.shadowRoot&&(0,a.jq)(this,i,d).call(this,s,()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",(0,c.iz)(t)),s._isUsingTransitionalStyles=!0},()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()})}register(e,t){let s=t;(0,a.S7)(this,n)&&(s=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${t}`),(0,a.S7)(this,r).set(e,s),this.applyToElement(e,s),this.applyScopedToElement(e,s)}}},7495(e,t,s){s.d(t,{L:()=>d});var r=s(8674),o=s(6990),l=s(5580),n=s(368),i=s(3288);let d=class{constructor(){this.viewRef=null,this.document=(0,o.WQX)(o.qQL),this.renderer=(0,o.WQX)(n.sFG),this.vcr=(0,o.WQX)(n.c1b),this.cdr=(0,o.WQX)(l.ChangeDetectorRef),this.template=(0,o.WQX)(n.C4Q),this.scopeResolver=(0,o.WQX)(i.G)}ngOnInit(){this.vcr.clear();const e=this.renderer.createElement;this.renderer.createElement=(e,t)=>this.document.createElement(this.scopeResolver.getScopedTagName(e)),this.cdr.markForCheck(),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=e}};d=(0,r.Cg)([(0,n.WLR)({selector:"[nggCoreElement]",standalone:!1})],d)},2920(e,t,s){s.d(t,{$:()=>i});var r=s(8674),o=s(3576),l=s(368),n=s(7495);let i=class{};i=(0,r.Cg)([(0,l.UQu)({declarations:[n.L],imports:[o.MD],exports:[n.L]})],i)},3288(e,t,s){s.d(t,{G:()=>l});var r=s(6990),o=s(7526);const l=new r.nKC("SCOPE_RESOLVER (for Green Core)",{providedIn:"root",factory:()=>({getScopedTagName:o.Eq})})},505(e,t,s){function r(e,t,s){return e?t(e):s?.(e)}s.d(t,{z:()=>r})},7371(e,t,s){s.r(t),s.d(t,{Default:()=>d,__namedExportsOrder:()=>a,default:()=>i});var r=s(368),o=s(2331),l=s(2920);s(745),s(8585).d.define();var n=s(4457);n.n.instance.register("gds-grouped-list","@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  @layer _base, _overrides;\n  :host {\n    display: block;\n    list-style: none;\n  }\n  @layer _base {\n    .gds-list-heading {\n      background-color: var(--gds-sys-color-base-200, #e9e9e9);\n      font-size: 0.875rem;\n      font-weight: 500;\n      padding: 0.5rem 1rem;\n    }\n    ::slotted([gds-element=gds-list-item]) {\n      all: revert;\n      border-bottom: 1px solid var(--gds-sys-color-base-200, #e9e9e9);\n      display: flex;\n      gap: 0.25rem;\n      justify-content: space-between;\n      padding: 1rem;\n    }\n  }\n}".toString());const i={title:"Components/Grouped List",decorators:[(0,o.Iz)({imports:[l.$],schemas:[r.CkJ]})],parameters:{}},d={render:e=>({template:`\n    <gds-grouped-list *nggCoreElement label="${e.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,props:e}),args:{label:"Grouped list label"}},a=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  render: args => ({\n    template: `\n    <gds-grouped-list *nggCoreElement label=\"${args.label}\">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,\n    props: args\n  }),\n  args: {\n    label: 'Grouped list label'\n  }\n}",...d.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-lib-grouped-list-grouped-list-stories.63982401.iframe.bundle.js.map