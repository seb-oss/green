import{j as S}from"./jsx-runtime-u17CrQMm.js";import{e as T}from"./iframe-DvzKjYkA.js";import{o as N}from"./create-component-CVDMTe9T.js";import{c as C}from"./index-DCxONVJ-.js";import{i as W,w as z,h as $,G as B,t as R,_ as n,n as h,g as L,m as O,k as E,b as a,d as r,e as u,c as G,r as V,a as q}from"./declarative-layout-mixins-lLUuMxcp.js";import{T as I,r as P}from"./transitional-styles-DwS_oB8y.js";import{m as k,l as j}from"./runtime-Cgryh99k.js";import{e as x,w as A,a as X}from"./watch-QkQzTQuG.js";import{r as F}from"./resize-observer-CfkbZofs.js";import{I as U,a as D}from"./chevron-right.component-BZXjkWIW.js";const H=W`
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
`;var J=H;let d=class extends z(B){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),I.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return $`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};d.styles=[...R,J];n([h({type:Boolean,reflect:!0})],d.prototype,"selected",2);n([h()],d.prototype,"value",2);n([h({type:Boolean,reflect:!0})],d.prototype,"disabled",2);d=n([L("gds-segment")],d);const K=W`
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
`;var Q=K,l,f,M,b,v,y,c,g,_,w;const Y=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let i=class extends O(z(E(B))){constructor(){super(...arguments),a(this,f),this.size="medium",a(this,l,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,a(this,b,()=>{const e=this.segments.filter((t,s,o)=>o[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),a(this,v,()=>{const e=this.segments.filter((t,s,o)=>o[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),a(this,y,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),a(this,c,Y(r(this,y),50)),a(this,g,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),a(this,_,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,u(this,l,t.value),r(this,g).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),a(this,w,()=>{r(this,l)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===r(this,l));if(e){this.segments.forEach(p=>p.selected=!1),e.selected=!0;const t=e.offsetLeft,s=t+e.offsetWidth,o=this._elTrack.scrollLeft,m=this._elTrack.offsetWidth;t<o?this._elTrack.scrollLeft=t:s>o+m&&(this._elTrack.scrollLeft=s-m)}})})}get value(){return r(this,l)}set value(e){u(this,l,e),r(this,w).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),I.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{r(this,c).call(this)})})}render(){return $`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${r(this,b)}
        aria-label=${k("Scroll left")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${r(this,_)}
          @slotchange=${G(this,f,M)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${r(this,v)}
        aria-label=${k("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{r(this,c).call(this),r(this,g).call(this)})}};l=new WeakMap;f=new WeakSet;M=function(){const e=this.segments.find(t=>t.selected)?.value;e&&u(this,l,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const o=s.target;o._isVisible=s.intersectionRatio>.99,r(this,c).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};b=new WeakMap;v=new WeakMap;y=new WeakMap;c=new WeakMap;g=new WeakMap;_=new WeakMap;w=new WeakMap;i.styles=[R,Q];n([h({reflect:!0})],i.prototype,"size",2);n([h()],i.prototype,"value",1);n([x("slot")],i.prototype,"_elSlot",2);n([x("#indicator")],i.prototype,"_elIndicator",2);n([x("#track")],i.prototype,"_elTrack",2);n([V()],i.prototype,"_showPrevButton",2);n([V()],i.prototype,"_showNextButton",2);n([F(),A("value")],i.prototype,"_recalculateMinWidth",1);i=n([L("gds-segmented-control",{dependsOn:[d,U,D]}),X({labelledBy:'[role="list"]',describedBy:'[role="list"]'}),j()],i);i.define();P();const Z=N({tagName:q("gds-segmented-control"),elementClass:i,events:{onchange:"change"},react:T}),ee=N({tagName:q("gds-segment"),elementClass:d,react:T}),te=({onChange:e,className:t,...s})=>S.jsx(Z,{onchange:e,className:C(t),...s}),se=({className:e,minWidth:t,maxWidth:s,segMinWidth:o,...m})=>{const p=o?`${o}px`:void 0;return S.jsx(ee,{className:C(e),...m,"min-width":t||p,"max-width":s})};te.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"SegmentedControl",props:{value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};se.__docgenInfo={description:"@deprecated - Use the `gds-segmented-control` web component from green-core instead.",methods:[],displayName:"Segment",props:{value:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},segMinWidth:{required:!1,tsType:{name:"number"},description:"@deprecated"}}};export{te as S,se as a};
