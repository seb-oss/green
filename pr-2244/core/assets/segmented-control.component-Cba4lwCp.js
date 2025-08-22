import{m as O,l as T}from"./runtime-CNluP0A8.js";import{n as g,r as z}from"./Reflect-DJ7r0WLU.js";import{a as S}from"./query-p8xgzTDt.js";import{h as $,G as P,g as W}from"./gds-element-DJNCW3iR.js";import{t as V}from"./tokens.style-iX6aIK9m.js";import{T as B}from"./transitional-styles-B1iReif-.js";import{r as G}from"./resize-observer-B9k8v2TZ.js";import{w as D}from"./watch-tFciLXSI.js";import{w as M,d as N,b as R}from"./declarative-layout-mixins-CquYcIh8.js";import{I as X,a as A}from"./chevron-right.component-DhYbfXgM.js";import{i as E}from"./lit-element-Bx14lxc-.js";const F=E`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-space-max);
      border-width: 0;
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font: var(--gds-sys-text-detail-book-m);
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      transition:
        background-color var(--gds-sys-motion-fast),
        border-color var(--gds-sys-motion-fast),
        color var(--gds-sys-motion-fast);
      outline-width: var(--gds-sys-space-3xs);
      outline-style: solid;
      outline-offset: -2px;
      outline-color: transparent;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    @media (pointer: fine) {
      :host(:not([selected])) button:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );

        &:disabled {
          background-color: transparent;
        }
      }
    }

    button:focus-visible {
      outline-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-content-tertiary) 100%
      );
    }
  }
`;var j=Object.defineProperty,q=Object.getOwnPropertyDescriptor,m=(e,t,s,i)=>{for(var r=i>1?void 0:i?q(t,s):t,a=e.length-1,h;a>=0;a--)(h=e[a])&&(r=(i?h(t,s,r):h(r))||r);return i&&r&&j(t,s,r),r};let p=class extends M(P){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return $`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};p.styles=[...V,F];m([g({type:Boolean,reflect:!0})],p.prototype,"selected",2);m([g()],p.prototype,"value",2);m([g({type:Boolean,reflect:!0})],p.prototype,"disabled",2);p=m([W("gds-segment")],p);const H=E`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-neutral-02);
      border: 0.25rem solid transparent;
      border-radius: var(--gds-sys-space-max);
      box-sizing: border-box;
      contain: layout;
      display: inline-flex;
      height: 3rem;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    :host([size='small']) {
      height: 2.5rem;
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      scroll-snap-type: inline mandatory;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      overflow-x: scroll;
      gap: 0.25rem;
      position: relative;
      scrollbar-width: none;
    }

    #track::-webkit-scrollbar {
      display: none;
    }

    #btn-prev,
    #btn-next {
      box-sizing: border-box;
      align-items: center;
      appearance: none;
      aspect-ratio: 1;
      border-radius: var(--gds-sys-space-max);
      border-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      height: 100%;
      justify-content: center;
      width: 2.5rem;
      transition: 0.2s;
      z-index: 2;
      position: absolute;

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }
    }
    #btn-prev {
      margin: 0 0.25rem 0 0;
    }
    #btn-next {
      margin: 0 0 0 0.25rem;
      right: 0;
    }

    #btn-prev[aria-hidden='true'],
    #btn-next[aria-hidden='true'] {
      opacity: 0;
      width: 0;
      margin: 0;
      padding: 0;
    }

    :host([size='small']) #btn-prev,
    :host([size='small']) #btn-next {
      width: 2rem;
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-shrink: 0;
      z-index: 1;
      scroll-margin: 0 2.75rem;
      scroll-snap-align: start;
    }

    #indicator {
      background-color: var(--gds-sys-color-l3-neutral-04);
      border-radius: var(--gds-sys-space-max);
      height: 100%;
      left: 0;
      position: absolute;
      z-index: 0;
      transition:
        transform 0.2s,
        width 0.2s;
      z-index: 0;
    }
  }
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},c=(e,t,s,i)=>{for(var r=i>1?void 0:i?K(t,s):t,a=e.length-1,h;a>=0;a--)(h=e[a])&&(r=(i?h(t,s,r):h(r))||r);return i&&r&&J(t,s,r),r},C=(e,t,s)=>t.has(e)||I("Cannot "+s),o=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s,i)=>(C(e,t,"write to private field"),t.set(e,s),s),Q=(e,t,s)=>(C(e,t,"access private method"),s),d,b,L,_,y,w,u,f,x,k;const U=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let n=class extends N(M(R(P))){constructor(){super(...arguments),l(this,b),this.size="medium",l(this,d),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,_,()=>{const e=this.segments.filter((t,s,i)=>{var r;return((r=i[s+1])==null?void 0:r.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),l(this,y,()=>{const e=this.segments.filter((t,s,i)=>{var r;return((r=i[s-1])==null?void 0:r.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),l(this,w,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,u,U(o(this,w),50)),l(this,f,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,x,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,v(this,d,t.value),o(this,f).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),l(this,k,()=>{o(this,d)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===o(this,d));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return o(this,d)}set value(e){v(this,d,e),o(this,k).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{o(this,u).call(this)})})}render(){return $`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${o(this,_)}
        aria-label=${O("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${o(this,x)}
          @slotchange=${Q(this,b,L)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${o(this,y)}
        aria-label=${O("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{o(this,u).call(this),o(this,f).call(this)})}};d=new WeakMap;b=new WeakSet;L=function(){var t,s;const e=(t=this.segments.find(i=>i.selected))==null?void 0:t.value;e&&v(this,d,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(i=>{i.forEach(r=>{const a=r.target;a._isVisible=r.intersectionRatio>.99,o(this,u).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(i=>{var r;(r=this.intersectionObserver)==null||r.observe(i)})};_=new WeakMap;y=new WeakMap;w=new WeakMap;u=new WeakMap;f=new WeakMap;x=new WeakMap;k=new WeakMap;n.styles=[V,H];c([g({reflect:!0})],n.prototype,"size",2);c([g()],n.prototype,"value",1);c([S("slot")],n.prototype,"_elSlot",2);c([S("#indicator")],n.prototype,"_elIndicator",2);c([S("#track")],n.prototype,"_elTrack",2);c([z()],n.prototype,"_showPrevButton",2);c([z()],n.prototype,"_showNextButton",2);c([G(),D("value")],n.prototype,"_recalculateMinWidth",1);n=c([W("gds-segmented-control",{dependsOn:[p,X,A]}),T()],n);export{n as G,p as a};
