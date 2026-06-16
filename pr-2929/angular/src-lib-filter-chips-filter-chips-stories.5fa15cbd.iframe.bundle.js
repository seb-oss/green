/*! For license information please see src-lib-filter-chips-filter-chips-stories.5fa15cbd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8743],{1912(e,t,s){s.d(t,{x:()=>u});var i=s(745),r=s(4367),l=s(3578),n=s(3539),a=s(4457),o=s(7526),c=s(7595),h=s(6290);const d=s(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let u=class extends n.j{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),a.n.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return o.qy`<gds-button
      class="btn"
      .size=${"large"===this.size?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${(0,l.H)(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};u.styles=[d],(0,i.Cc)([(0,r.MZ)({reflect:!0,type:Boolean})],u.prototype,"selected",2),(0,i.Cc)([(0,r.MZ)()],u.prototype,"value",2),(0,i.Cc)([(0,r.MZ)({reflect:!0,type:String})],u.prototype,"size",2),u=(0,i.Cc)([(0,o.Y$)("gds-filter-chip",{dependsOn:[c.t,h.V]})],u)},9830(e,t,s){s.d(t,{A:()=>C});var i,r,l,n,a,o,c,h=s(745),d=s(4367),u=s(3578),p=s(4338),g=s(4324),v=s(1374),f=s(6472),m=s(7526),b=s(8558),_=s(1912),y=s(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;let C=class extends b.S{constructor(){super(...arguments),(0,h.VK)(this,n),(0,h.VK)(this,o),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,(0,h.VK)(this,i,e=>{const t=this.chips.find(t=>t===e.target||t.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(e=>e!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),(0,h.VK)(this,r,3),(0,h.VK)(this,l,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return m.qy`<div
      class="chips ${(0,u.H)(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${(0,h.S7)(this,i)}
        @slotchange=${(0,h.jq)(this,o,c)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=(0,h.jq)(this,n,a).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*(0,h.S7)(this,r)&&(this._collapsed=!0,(0,h.OV)(this,l,s)),s>(0,h.S7)(this,l)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};i=new WeakMap,r=new WeakMap,l=new WeakMap,n=new WeakSet,a=function(){return this.chips[0]?.offsetHeight||0},o=new WeakSet,c=function(){if(void 0===this.value)if(this.multiple){const e=this.chips.filter(e=>e.selected).map(e=>e.value);e.length&&(this.value=e)}else{const e=this.chips.find(e=>e.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue()},C.styles=[y],(0,h.Cc)([(0,d.MZ)({converter:f.xj})],C.prototype,"value",1),(0,h.Cc)([(0,d.MZ)({type:Boolean})],C.prototype,"multiple",2),(0,h.Cc)([(0,d.MZ)()],C.prototype,"label",2),(0,h.Cc)([(0,d.MZ)({type:Boolean,attribute:"row-collapse"})],C.prototype,"rowCollapse",2),(0,h.Cc)([(0,d.wk)()],C.prototype,"_collapsed",2),(0,h.Cc)([(0,d.P)("slot")],C.prototype,"_elSlot",2),(0,h.Cc)([(0,g.b)()],C.prototype,"_handleResize",1),(0,h.Cc)([(0,v.w)("value")],C.prototype,"_updateSelectedFromValue",1),C=(0,h.Cc)([(0,m.Y$)("gds-filter-chips",{dependsOn:[_.x]}),(0,p.J)({labelledBy:'[role="listbox"]',describedBy:'[role="listbox"]'})],C)},6290(e,t,s){s.d(t,{V:()=>n});var i=s(745),r=s(7526),l=s(3832);let n=class extends l.M{};n._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',n._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80428 21.2651 9.50102 21.4442 9.16519 21.489C8.82937 21.5338 8.48975 21.4403 8.22412 21.23L2.22412 16.48C1.68285 16.0515 1.59144 15.2654 2.01994 14.7241C2.44845 14.1828 3.23461 14.0914 3.77588 14.5199L8.76236 18.4675L19.9945 3.2574C20.4046 2.70206 21.1872 2.58432 21.7426 2.99442Z" fill="currentColor"/>',n._name="checkmark",n._width=24,n._height=24,n._viewBox="0 0 24 24",n=(0,i.Cc)([(0,r.Y$)("gds-icon-checkmark")],n)},4324(e,t,s){function i(){return(e,t,s)=>{const i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}s.d(t,{b:()=>i}),s(745)},6472(e,t,s){s.d(t,{JD:()=>i,_h:()=>r,xj:()=>l}),s(745);const i={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},r={fromAttribute:e=>e.split(",").map(e=>new Date(e.trim())),toAttribute:e=>JSON.stringify(e.map(e=>e.toISOString()))},l={fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}},7495(e,t,s){s.d(t,{L:()=>o});var i=s(8674),r=s(6990),l=s(5580),n=s(368),a=s(3288);let o=class{constructor(){this.viewRef=null,this.document=(0,r.WQX)(r.qQL),this.renderer=(0,r.WQX)(n.sFG),this.vcr=(0,r.WQX)(n.c1b),this.cdr=(0,r.WQX)(l.ChangeDetectorRef),this.template=(0,r.WQX)(n.C4Q),this.scopeResolver=(0,r.WQX)(a.G)}ngOnInit(){this.vcr.clear();const e=this.renderer.createElement;this.renderer.createElement=(e,t)=>this.document.createElement(this.scopeResolver.getScopedTagName(e)),this.cdr.markForCheck(),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=e}};o=(0,i.Cg)([(0,n.WLR)({selector:"[nggCoreElement]",standalone:!1})],o)},2920(e,t,s){s.d(t,{$:()=>a});var i=s(8674),r=s(3576),l=s(368),n=s(7495);let a=class{};a=(0,i.Cg)([(0,l.UQu)({declarations:[n.L],imports:[r.MD],exports:[n.L]})],a)},3288(e,t,s){s.d(t,{G:()=>l});var i=s(6990),r=s(7526);const l=new i.nKC("SCOPE_RESOLVER (for Green Core)",{providedIn:"root",factory:()=>({getScopedTagName:r.Eq})})},9867(e,t,s){s.d(t,{OA:()=>i,WL:()=>l,u$:()=>r});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},505(e,t,s){function i(e,t,s){return e?t(e):s?.(e)}s.d(t,{z:()=>i})},4469(e,t,s){s.d(t,{OA:()=>i.OA,WL:()=>i.WL,u$:()=>i.u$});var i=s(9867)},3578(e,t,s){s.d(t,{H:()=>l});var i=s(1921),r=s(9867);const l=(0,r.u$)(class extends r.WL{constructor(e){if(super(e),e.type!==r.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const s=e.element.classList;for(const e of this.st)e in t||(s.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return i.c0}})},4652(e,t,s){s.d(t,{J:()=>r});var i=s(1921);const r=e=>e??i.s6},7639(e,t,s){s.d(t,{_:()=>n});var i=s(1921),r=s(9867);class l extends r.WL{constructor(e){if(super(e),this.it=i.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.s6||null==e)return this._t=void 0,this.it=e;if(e===i.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;const n=(0,r.u$)(l)},9295(e,t,s){s.d(t,{s6:()=>i.s6});var i=s(1921)},911(e,t,s){s.d(t,{qy:()=>h,eu:()=>a,Bk:()=>n});var i=s(1921);const r=Symbol.for(""),l=e=>{if(e?.r===r)return e?._$litStatic$},n=e=>({_$litStatic$:e,r}),a=(e,...t)=>({_$litStatic$:t.reduce((t,s,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]),r}),o=new Map,c=e=>(t,...s)=>{const i=s.length;let r,n;const a=[],c=[];let h,d=0,u=!1;for(;d<i;){for(h=t[d];d<i&&void 0!==(n=s[d],r=l(n));)h+=r+t[++d],u=!0;d!==i&&c.push(n),a.push(h),d++}if(d===i&&a.push(t[i]),u){const e=a.join("$$lit$$");void 0===(t=o.get(e))&&(a.raw=a,o.set(e,t=a)),s=c}return e(t,...s)},h=c(i.qy);c(i.JW),c(i.ej)},601(e,t,s){s.r(t),s.d(t,{Default:()=>a,__namedExportsOrder:()=>o,default:()=>n});var i=s(368),r=s(2331);s(745),s(9830).A.define(),s(1912).x.define();var l=s(2920);const n={title:"Components/Filter Chips",decorators:[(0,r.Iz)({imports:[l.$],schemas:[i.CkJ]})],parameters:{}},a={render:e=>({template:`\n  <gds-filter-chips *nggCoreElement value="top-news" label="${e.label}">\n    <gds-filter-chip *nggCoreElement value="all">All</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="top-news">Top news</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="division">Division</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="global">Global</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="country">Country</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="lcfi">\n      Large Corporate & Financial Institutions\n    </gds-filter-chip>\n  </gds-filter-chips>\n    `,props:e}),args:{label:"Select a category to filter results on"}},o=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  render: args => ({\n    template: `\n  <gds-filter-chips *nggCoreElement value="top-news" label="${args.label}">\n    <gds-filter-chip *nggCoreElement value="all">All</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="top-news">Top news</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="division">Division</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="global">Global</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="country">Country</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="lcfi">\n      Large Corporate & Financial Institutions\n    </gds-filter-chip>\n  </gds-filter-chips>\n    `,\n    props: args\n  }),\n  args: {\n    label: \'Select a category to filter results on\'\n  }\n}',...a.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-lib-filter-chips-filter-chips-stories.5fa15cbd.iframe.bundle.js.map