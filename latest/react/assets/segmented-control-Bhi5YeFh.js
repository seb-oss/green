import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{R as N}from"./iframe-k4DB83LA.js";import{o as T}from"./create-component-CPRSibq9.js";import{c as C}from"./index-pMdPIytM.js";import{i as z,h as W,G as R,t as $,_ as o,n as m,g as V,b as l,d as n,e as u,c as O,r as B,a as I}from"./tokens.style-BXOjG97O.js";import{w as q,d as L,b as G}from"./icon.component-D-KSF2uV.js";import{T as M,r as P}from"./transitional-styles-BuelKE2F.js";import{m as k,l as j}from"./runtime-nRyYmvPb.js";import{e as x,w as A}from"./watch-Bh1rs_BK.js";import{r as X}from"./resize-observer-B9k8v2TZ.js";import{I as U,a as D}from"./chevron-right.component-BEKGCY3C.js";const F=z`
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
`;var H=F;let c=class extends q(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),M.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return W`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};c.styles=[...$,H];o([m({type:Boolean,reflect:!0})],c.prototype,"selected",2);o([m()],c.prototype,"value",2);o([m({type:Boolean,reflect:!0})],c.prototype,"disabled",2);c=o([V("gds-segment")],c);const J=z`
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
`;var K=J,d,f,E,b,v,y,h,g,w,_;const Q=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let i=class extends L(q(G(R))){constructor(){super(...arguments),l(this,f),this.size="medium",l(this,d,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,b,()=>{const e=this.segments.filter((t,s,a)=>{var r;return((r=a[s+1])==null?void 0:r.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),l(this,v,()=>{const e=this.segments.filter((t,s,a)=>{var r;return((r=a[s-1])==null?void 0:r.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),l(this,y,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,h,Q(n(this,y),50)),l(this,g,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,w,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,u(this,d,t.value),n(this,g).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),l(this,_,()=>{n(this,d)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===n(this,d));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,e.scrollIntoView({block:"nearest",inline:"nearest"}))})})}get value(){return n(this,d)}set value(e){u(this,d,e),n(this,_).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),M.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{n(this,h).call(this)})})}render(){return W`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${n(this,b)}
        aria-label=${k("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${n(this,w)}
          @slotchange=${O(this,f,E)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${n(this,v)}
        aria-label=${k("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{n(this,h).call(this),n(this,g).call(this)})}};d=new WeakMap;f=new WeakSet;E=function(){var t,s;const e=(t=this.segments.find(a=>a.selected))==null?void 0:t.value;e&&u(this,d,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(r=>{const p=r.target;p._isVisible=r.intersectionRatio>.99,n(this,h).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(a=>{var r;(r=this.intersectionObserver)==null||r.observe(a)})};b=new WeakMap;v=new WeakMap;y=new WeakMap;h=new WeakMap;g=new WeakMap;w=new WeakMap;_=new WeakMap;i.styles=[$,K];o([m({reflect:!0})],i.prototype,"size",2);o([m()],i.prototype,"value",1);o([x("slot")],i.prototype,"_elSlot",2);o([x("#indicator")],i.prototype,"_elIndicator",2);o([x("#track")],i.prototype,"_elTrack",2);o([B()],i.prototype,"_showPrevButton",2);o([B()],i.prototype,"_showNextButton",2);o([X(),A("value")],i.prototype,"_recalculateMinWidth",1);i=o([V("gds-segmented-control",{dependsOn:[c,U,D]}),j()],i);i.define();P();const Y=T({tagName:I("gds-segmented-control"),elementClass:i,events:{onchange:"change"},react:N}),Z=T({tagName:I("gds-segment"),elementClass:c,react:N}),ee=({onChange:e,className:t,...s})=>S.jsx(Y,{onchange:e,className:C(t),...s}),te=({className:e,minWidth:t,maxWidth:s,segMinWidth:a,...r})=>{const p=a?`${a}px`:void 0;return S.jsx(Z,{className:C(e),...r,"min-width":t||p,"max-width":s})};ee.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"SegmentedControl",props:{value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};te.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"Segment",props:{value:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},segMinWidth:{required:!1,tsType:{name:"number"},description:"@deprecated"}}};export{ee as S,te as a};
