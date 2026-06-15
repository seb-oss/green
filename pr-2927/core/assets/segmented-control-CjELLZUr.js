import{i as z,Q as W,z as $,T as B,h as P,v as L,n as g,g as V,H as M,I as G,E as O,f as S,w as T,$ as D,y as N}from"./iframe-DpOvTZOc.js";import{l as R}from"./localized-decorator-qE24v3JY.js";import{r as X}from"./resize-observer-CfkbZofs.js";import{I as A}from"./chevron-left.component--vIK1Dhp.js";import{I as F}from"./chevron-right.component-Dkpmge4i.js";const H=z`
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
      font: var(--gds-sys-text-detail-m-book);
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
      outline-offset: -4px;
      outline-color: transparent;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    :host([selected]) button {
      color: var(--gds-sys-color-content-neutral-03);
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
`;var Q=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(t,e,s,r)=>{for(var i=r>1?void 0:r?j(e,s):e,a=t.length-1,h;a>=0;a--)(h=t[a])&&(i=(r?h(e,s,i):h(i))||i);return r&&i&&Q(e,s,i),i};let p=class extends W($){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return P`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};p.styles=[...L,H];m([g({type:Boolean,reflect:!0})],p.prototype,"selected",2);m([g()],p.prototype,"value",2);m([g({type:Boolean,reflect:!0})],p.prototype,"disabled",2);p=m([V("gds-segment")],p);const q=z`
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
      --_gds-segment-scroll-margin-inline: 2.75rem;
    }

    :host([size='small']) {
      height: 2.5rem;
      --_gds-segment-scroll-margin-inline: 2.25rem;
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      scroll-snap-type: inline mandatory;
      scroll-padding-inline: var(--_gds-segment-scroll-margin-inline);
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
      box-shadow: 0 0 0 1px var(--gds-sys-color-l3-neutral-02);
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
      scroll-margin-inline: var(--_gds-segment-scroll-margin-inline);
      scroll-snap-align: start;
    }

    #indicator {
      background-color: var(--gds-sys-color-l3-neutral-03);
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
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},c=(t,e,s,r)=>{for(var i=r>1?void 0:r?K(e,s):e,a=t.length-1,h;a>=0;a--)(h=t[a])&&(i=(r?h(e,s,i):h(i))||i);return r&&i&&J(e,s,i),i},C=(t,e,s)=>e.has(t)||I("Cannot "+s),o=(t,e,s)=>(C(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s,r)=>(C(t,e,"write to private field"),e.set(t,s),s),U=(t,e,s)=>(C(t,e,"access private method"),s),d,b,E,_,y,w,u,f,x,k;const Y=(t,e)=>{let s;return()=>{clearTimeout(s),s=setTimeout(t,e)}};let n=class extends M(W(G($))){constructor(){super(...arguments),l(this,b),this.size="medium",l(this,d),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,_,()=>{const t=this.segments.filter((e,s,r)=>r[s+1]?.isVisible&&!e.isVisible)[0];t&&(this._elTrack.scrollLeft-=t.offsetWidth)}),l(this,y,()=>{const t=this.segments.filter((e,s,r)=>r[s-1]?.isVisible&&!e.isVisible).reverse()[0];t&&(this._elTrack.scrollLeft+=t.offsetWidth)}),l(this,w,()=>{this.segments.every(t=>!t.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,u,Y(o(this,w),50)),l(this,f,()=>{const t=this.segments.find(e=>e.selected);if(t){const e=t.offsetWidth,s=t.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${e}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,x,t=>{const e=this.segments.find(s=>s===t.target||s.contains(t.target));e&&(this.segments.forEach(s=>s.selected=!1),e.selected=!0,v(this,d,e.value),o(this,f).call(this),this.dispatchCustomEvent("change",{detail:{segment:e},bubbles:!0,composed:!0}))}),l(this,k,()=>{o(this,d)&&this.updateComplete.then(()=>{const t=this.segments.find(e=>e.value===o(this,d));if(t){this.segments.forEach(a=>a.selected=!1),t.selected=!0;const e=t.offsetLeft,s=e+t.offsetWidth,r=this._elTrack.scrollLeft,i=this._elTrack.offsetWidth;e<r?this._elTrack.scrollLeft=e:s>r+i&&(this._elTrack.scrollLeft=s-i)}})})}get value(){return o(this,d)}set value(t){v(this,d,t),o(this,k).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{o(this,u).call(this)})})}render(){return P`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${o(this,_)}
        aria-label=${O("Scroll left")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${o(this,x)}
          @slotchange=${U(this,b,E)}
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
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{o(this,u).call(this),o(this,f).call(this)})}};d=new WeakMap;b=new WeakSet;E=function(){const t=this.segments.find(e=>e.selected)?.value;t&&v(this,d,t),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(s=>{const r=s.target;r._isVisible=s.intersectionRatio>.99,o(this,u).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(e=>{this.intersectionObserver?.observe(e)})};_=new WeakMap;y=new WeakMap;w=new WeakMap;u=new WeakMap;f=new WeakMap;x=new WeakMap;k=new WeakMap;n.styles=[L,q];c([g({reflect:!0})],n.prototype,"size",2);c([g()],n.prototype,"value",1);c([S("slot")],n.prototype,"_elSlot",2);c([S("#indicator")],n.prototype,"_elIndicator",2);c([S("#track")],n.prototype,"_elTrack",2);c([T()],n.prototype,"_showPrevButton",2);c([T()],n.prototype,"_showNextButton",2);c([X(),D("value")],n.prototype,"_recalculateMinWidth",1);n=c([V("gds-segmented-control",{dependsOn:[p,A,F]}),N({labelledBy:'[role="list"]',describedBy:'[role="list"]'}),R()],n);n.define();export{p as G};
