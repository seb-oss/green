import{i as k,h as S,G as z,t as C,_ as i,n as u,g as V,b as l,d as r,e as p,c as L,r as W}from"./tokens.style-BwUmgGen.js";import{m as w,l as O}from"./runtime-nRyYmvPb.js";import{e as x,w as T}from"./watch-Bh1rs_BK.js";import{r as E}from"./resize-observer-B9k8v2TZ.js";import{w as $,a as P,b as G}from"./icon.component-C7EKY0is.js";import{I as N,a as R}from"./chevron-right.component-Cvu1YgXi.js";import{T as B}from"./transitional-styles-Hrl55WqK.js";const X=k`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      color: var(--gds-sys-color-content-neutral-02);
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
        background-color var(--gds-sys-motion-duration-fast),
        border-color var(--gds-sys-motion-duration-fast),
        color var(--gds-sys-motion-duration-fast);
      outline-width: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-offset: -2px;
      outline-color: transparent;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    :host([selected]) button {
      color: var(--gds-sys-color-content-neutral-01);
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
`;var A=X;let c=class extends $(z){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return S`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};c.styles=[...C,A];i([u({type:Boolean,reflect:!0})],c.prototype,"selected",2);i([u()],c.prototype,"value",2);i([u({type:Boolean,reflect:!0})],c.prototype,"disabled",2);c=i([V("gds-segment")],c);const j=k`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-neutral-02);
      border: 0.25rem solid transparent;
      border-radius: var(--gds-sys-radius-max);
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
      border-radius: var(--gds-sys-radius-max);
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
      border-radius: var(--gds-sys-radius-max);
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
`;var D=j,d,m,M,b,f,v,h,g,y,_;const F=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let n=class extends P($(G(z))){constructor(){super(...arguments),l(this,m),this.size="medium",l(this,d),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,b,()=>{const e=this.segments.filter((t,s,a)=>{var o;return((o=a[s+1])==null?void 0:o.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),l(this,f,()=>{const e=this.segments.filter((t,s,a)=>{var o;return((o=a[s-1])==null?void 0:o.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),l(this,v,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,h,F(r(this,v),50)),l(this,g,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,y,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,p(this,d,t.value),r(this,g).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),l(this,_,()=>{r(this,d)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===r(this,d));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return r(this,d)}set value(e){p(this,d,e),r(this,_).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{r(this,h).call(this)})})}render(){return S`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${r(this,b)}
        aria-label=${w("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${r(this,y)}
          @slotchange=${L(this,m,M)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${r(this,f)}
        aria-label=${w("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{r(this,h).call(this),r(this,g).call(this)})}};d=new WeakMap;m=new WeakSet;M=function(){var t,s;const e=(t=this.segments.find(a=>a.selected))==null?void 0:t.value;e&&p(this,d,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(o=>{const I=o.target;I._isVisible=o.intersectionRatio>.99,r(this,h).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(a=>{var o;(o=this.intersectionObserver)==null||o.observe(a)})};b=new WeakMap;f=new WeakMap;v=new WeakMap;h=new WeakMap;g=new WeakMap;y=new WeakMap;_=new WeakMap;n.styles=[C,D];i([u({reflect:!0})],n.prototype,"size",2);i([u()],n.prototype,"value",1);i([x("slot")],n.prototype,"_elSlot",2);i([x("#indicator")],n.prototype,"_elIndicator",2);i([x("#track")],n.prototype,"_elTrack",2);i([W()],n.prototype,"_showPrevButton",2);i([W()],n.prototype,"_showNextButton",2);i([E(),T("value")],n.prototype,"_recalculateMinWidth",1);n=i([V("gds-segmented-control",{dependsOn:[c,N,R]}),O()],n);export{n as G,c as a};
