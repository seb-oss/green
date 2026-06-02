import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{R as T}from"./iframe-CDrjByxK.js";import{o as N}from"./create-component-CPRSibq9.js";import{c as C}from"./index-jTfvCtkx.js";import{i as W,h as z,G as R,t as $,_ as a,n as g,g as B,b as l,d as n,e as u,c as O,r as L,a as V}from"./tokens.style-CvxoHPxY.js";import{w as q,d as E,b as G}from"./icon.component-BrBjHKPq.js";import{T as I,r as P}from"./transitional-styles-B4zNEBEB.js";import{m as k,l as j}from"./runtime-nRyYmvPb.js";import{e as x,w as A,a as X}from"./watch-2OEWzoh-.js";import{r as F}from"./resize-observer-B9k8v2TZ.js";import{I as U,a as D}from"./chevron-right.component-Djdio-7u.js";const H=W`
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
`;var J=H;let c=class extends q(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),I.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return z`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};c.styles=[...$,J];a([g({type:Boolean,reflect:!0})],c.prototype,"selected",2);a([g()],c.prototype,"value",2);a([g({type:Boolean,reflect:!0})],c.prototype,"disabled",2);c=a([B("gds-segment")],c);const K=W`
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
`;var Q=K,d,f,M,b,v,y,m,p,_,w;const Y=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let o=class extends E(q(G(R))){constructor(){super(...arguments),l(this,f),this.size="medium",l(this,d,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,b,()=>{const e=this.segments.filter((t,s,i)=>{var r;return((r=i[s+1])==null?void 0:r.isVisible)&&!t.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),l(this,v,()=>{const e=this.segments.filter((t,s,i)=>{var r;return((r=i[s-1])==null?void 0:r.isVisible)&&!t.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),l(this,y,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,m,Y(n(this,y),50)),l(this,p,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,_,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,u(this,d,t.value),n(this,p).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),l(this,w,()=>{n(this,d)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===n(this,d));if(e){this.segments.forEach(h=>h.selected=!1),e.selected=!0;const t=e.offsetLeft,s=t+e.offsetWidth,i=this._elTrack.scrollLeft,r=this._elTrack.offsetWidth;t<i?this._elTrack.scrollLeft=t:s>i+r&&(this._elTrack.scrollLeft=s-r)}})})}get value(){return n(this,d)}set value(e){u(this,d,e),n(this,w).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),I.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{n(this,m).call(this)})})}render(){return z`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${n(this,b)}
        aria-label=${k("Scroll left")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${n(this,_)}
          @slotchange=${O(this,f,M)}
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
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{n(this,m).call(this),n(this,p).call(this)})}};d=new WeakMap;f=new WeakSet;M=function(){var t,s;const e=(t=this.segments.find(i=>i.selected))==null?void 0:t.value;e&&u(this,d,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(i=>{i.forEach(r=>{const h=r.target;h._isVisible=r.intersectionRatio>.99,n(this,m).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(i=>{var r;(r=this.intersectionObserver)==null||r.observe(i)})};b=new WeakMap;v=new WeakMap;y=new WeakMap;m=new WeakMap;p=new WeakMap;_=new WeakMap;w=new WeakMap;o.styles=[$,Q];a([g({reflect:!0})],o.prototype,"size",2);a([g()],o.prototype,"value",1);a([x("slot")],o.prototype,"_elSlot",2);a([x("#indicator")],o.prototype,"_elIndicator",2);a([x("#track")],o.prototype,"_elTrack",2);a([L()],o.prototype,"_showPrevButton",2);a([L()],o.prototype,"_showNextButton",2);a([F(),A("value")],o.prototype,"_recalculateMinWidth",1);o=a([B("gds-segmented-control",{dependsOn:[c,U,D]}),X({labelledBy:'[role="list"]',describedBy:'[role="list"]'}),j()],o);o.define();P();const Z=N({tagName:V("gds-segmented-control"),elementClass:o,events:{onchange:"change"},react:T}),ee=N({tagName:V("gds-segment"),elementClass:c,react:T}),te=({onChange:e,className:t,...s})=>S.jsx(Z,{onchange:e,className:C(t),...s}),se=({className:e,minWidth:t,maxWidth:s,segMinWidth:i,...r})=>{const h=i?`${i}px`:void 0;return S.jsx(ee,{className:C(e),...r,"min-width":t||h,"max-width":s})};te.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"SegmentedControl",props:{value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};se.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"Segment",props:{value:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},segMinWidth:{required:!1,tsType:{name:"number"},description:"@deprecated"}}};export{te as S,se as a};
