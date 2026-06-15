import{i as Y,n as w,z as Z,h as j,g as tt,v as ct,$ as et,a as vt,H as gt,Q as yt,I as wt,E as nt,f as E,w as ht,y as kt}from"./iframe-C1LXsbkn.js";import{l as mt}from"./localized-decorator-OS1BFSQ3.js";import{r as xt}from"./resize-observer-CfkbZofs.js";import{I as Tt}from"./chevron-left.component-BGa-yVnT.js";import{I as Ct}from"./chevron-right.component-3-z4_il7.js";const St=Y`
  @layer base {
    :host {
      display: block;
      outline: none;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--gds-sys-color-content-neutral-01);
    }

    :host([hidden]) {
      display: none;
    }
  }
`;var Et=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,dt=t=>{throw TypeError(t)},pt=(t,e,s,i)=>{for(var a=i>1?void 0:i?$t(e,s):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Et(e,s,a),a},st=(t,e,s)=>e.has(t)||dt("Cannot "+s),M=(t,e,s)=>(st(t,e,"read from private field"),s?s.call(t):e.get(t)),$=(t,e,s)=>e.has(t)?dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),lt=(t,e,s,i)=>(st(t,e,"write to private field"),e.set(t,s),s),D=(t,e,s)=>(st(t,e,"access private method"),s),it,x,G,C,B;let T=class extends Z{constructor(){super(...arguments),$(this,C),$(this,it,this.attachInternals()),$(this,x),$(this,G,!1),this.name=""}get tabEl(){return M(this,x)}connectedCallback(){super.connectedCallback(),this.tabIndex=-1,D(this,C,B).call(this)}_setTabEl(t){lt(this,x,t),D(this,C,B).call(this)}_setSelected(t){lt(this,G,t),t?this.removeAttribute("hidden"):this.setAttribute("hidden",""),D(this,C,B).call(this)}render(){return j`<slot></slot>`}};it=new WeakMap;x=new WeakMap;G=new WeakMap;C=new WeakSet;B=function(){this.setAttribute("role","tabpanel"),M(this,it).ariaLabelledByElements=M(this,x)?[M(this,x)]:[]};T.styles=[St];pt([w({reflect:!0})],T.prototype,"name",2);T=pt([tt("gds-tab-panel")],T);const Pt=Y`
  @layer base {
    :host {
      display: inline-flex;
    }

    div {
      position: relative;
      border-radius: var(--gds-sys-radius-xs);
      appearance: none;
      background: none;
      border: 0;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      font: var(--gds-sys-text-detail-m-book);
      outline-width: 2px;
      outline-style: solid;
      outline-offset: -4px;
      outline-color: transparent;
      padding-inline: var(--gds-sys-space-s);
      height: 44px;
      text-decoration: none;
      transition-property: color, outline-color;
      transition-duration: 0.2s;
      white-space: nowrap;
      gap: var(--gds-sys-space-xs);

      @media (pointer: fine) {
        &:hover {
          color: var(--gds-sys-color-content-neutral-01);
        }
      }

      &.small {
        padding-inline: var(--gds-sys-space-xs);
        height: 30px;
        font: var(--gds-sys-text-detail-s-book);
      }
    }

    :host(:focus) {
      outline-color: var(--gds-sys-color-content-neutral-01);
      outline-offset: -3px;

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    :host([selected]) div {
      color: var(--gds-sys-color-content-neutral-01);
    }

    :host([disabled]) div {
      color: var(--gds-sys-color-content-disabled-01);
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;var Mt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},k=(t,e,s,i)=>{for(var a=i>1?void 0:i?Bt(e,s):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Mt(e,s,a),a},at=(t,e,s)=>e.has(t)||ut("Cannot "+s),b=(t,e,s)=>(at(t,e,"read from private field"),s?s.call(t):e.get(t)),P=(t,e,s)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Wt=(t,e,s,i)=>(at(t,e,"write to private field"),e.set(t,s),s),m=(t,e,s)=>(at(t,e,"access private method"),s),z,y,W,f,N,S;let p=class extends Z{constructor(){super(...arguments),P(this,f),P(this,z,this.attachInternals()),P(this,y),this.size="medium",this.disabled=!1,this.selected=!1,this.panel="",P(this,W,()=>{m(this,f,N).call(this)})}get panelEl(){return b(this,y)}connectedCallback(){super.connectedCallback(),m(this,f,S).call(this),this.addEventListener("click",()=>{}),this.addEventListener("keydown",t=>{t.key==="Tab"&&(t.preventDefault(),b(this,y)?.focus())})}_handleSelectedChange(){m(this,f,N).call(this),m(this,f,S).call(this)}_handleDisabledChange(){m(this,f,S).call(this)}_setPanelEl(t){Wt(this,y,t),m(this,f,S).call(this)}render(){return j`<div class=${vt({small:this.size==="small"})}>
      <slot name="lead" @slotchange=${b(this,W)}></slot>
      <slot></slot>
      <slot name="trail" @slotchange=${b(this,W)}></slot>
    </div>`}};z=new WeakMap;y=new WeakMap;W=new WeakMap;f=new WeakSet;N=function(){const t=["lead","trail"];for(const e of t){const s=this.renderRoot.querySelector(`slot[name="${e}"]`);for(const i of s?.assignedElements({flatten:!0})??[])"solid"in i&&(i.solid=this.selected)}};S=function(){this.setAttribute("role","tab"),b(this,z).ariaSelected=this.selected?"true":"false",this.tabIndex=this.selected&&!this.disabled?0:-1,b(this,z).ariaControlsElements=b(this,y)?[b(this,y)]:[]};p.styles=[ct,Pt];k([w({reflect:!0})],p.prototype,"size",2);k([w({type:Boolean,reflect:!0})],p.prototype,"disabled",2);k([w({type:Boolean,reflect:!0})],p.prototype,"selected",2);k([w()],p.prototype,"panel",2);k([et("selected")],p.prototype,"_handleSelectedChange",1);k([et("disabled")],p.prototype,"_handleDisabledChange",1);p=k([tt("gds-tab")],p);const Lt=Y`
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--gds-sys-space-xl);
      --_gds-tab-scroll-button-width: 1.75rem;
      --_gds-tab-scroll-margin-inline: calc(
        var(--_gds-tab-scroll-button-width) + var(--gds-sys-space-xs)
      );
    }

    .tabs-container {
      align-items: center;
      display: flex;
      position: relative;
      overflow: hidden;
      width: 100%;

      &:after {
        content: '';
        background: var(--gds-sys-color-border-neutral-02);
        height: 2px;
        left: 2px;
        right: 2px;
        width: calc(100% - 4px);
        position: absolute;
        bottom: 0;
      }
    }

    #marker {
      position: absolute;
      bottom: 0;
      height: 2px;
      background: var(--gds-sys-color-border-neutral-04);
      left: var(--_marker-left, 0px);
      width: var(--_marker-width, 0px);
      pointer-events: none;
      z-index: 1;

      &[data-ready]:not([data-scrolling]) {
        transition:
          left var(--gds-sys-motion-duration-fastest),
          width var(--gds-sys-motion-duration-fastest);
      }
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      gap: var(--gds-sys-space-xs);
      padding: 2px;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      scrollbar-width: none;
      scroll-padding-inline: var(--_gds-tab-scroll-margin-inline);
      width: 100%;
    }

    #track::-webkit-scrollbar {
      display: none;
    }

    #btn-prev,
    #btn-next {
      align-items: center;
      border: 0;
      border-radius: var(--gds-sys-radius-max);
      color: var(--gds-sys-color-content-neutral-01);
      background: var(--gds-sys-color-l3-neutral-01);
      display: flex;
      height: 32px;
      width: 32px;
      justify-content: center;
      padding: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: opacity var(--gds-sys-motion-duration-fastest)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      z-index: 1;
      box-shadow: var(--gds-sys-shadow-s-01), var(--gds-sys-shadow-s-02);
    }

    #btn-prev {
      left: 0;
    }

    #btn-next {
      right: 0;
    }

    #btn-prev[aria-hidden='true'],
    #btn-next[aria-hidden='true'] {
      opacity: 0;
      pointer-events: none;
    }

    #btn-prev gds-icon-chevron-left,
    #btn-next gds-icon-chevron-right {
      display: flex;
      font-size: 1rem;
    }
  }
`;var Ot=Object.defineProperty,It=Object.getOwnPropertyDescriptor,ft=t=>{throw TypeError(t)},u=(t,e,s,i)=>{for(var a=i>1?void 0:i?It(e,s):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Ot(e,s,a),a},_t=(t,e,s)=>e.has(t)||ft("Cannot "+s),r=(t,e,s)=>(_t(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o=(t,e,s)=>(_t(t,e,"access private method"),s),n,g,L,H,O,q,F,V,v,I,U,_,K,Q,X,J,R,A,rt,bt;const ot=(t,e)=>{let s;return()=>{clearTimeout(s),s=setTimeout(t,e)}};let c=class extends gt(yt(wt(Z))){constructor(){super(...arguments),d(this,n),this.selected=0,this.label="",this._showPrevButton=!1,this._showNextButton=!1,this._hasResolvedInitialSelection=!1,this._isScrollListenerBound=!1,d(this,L,()=>{o(this,n,R).call(this),o(this,n,A).call(this),this.requestUpdate(),this.updateComplete.then(()=>{o(this,n,I).call(this),o(this,n,J).call(this),r(this,_).call(this),r(this,v).call(this)})}),d(this,H,t=>{const e=this.tabs.find(i=>i===t.target||i.contains(t.target));if(!e||e.disabled)return;t.preventDefault();const s=this.tabs.indexOf(e);s!==-1&&o(this,n,q).call(this,s)}),d(this,O,t=>{if(!["ArrowRight","ArrowLeft","Right","Left","Home","End"].includes(t.key))return;const e=t.target;if(!(e instanceof p))return;t.preventDefault();const s=this.tabs.indexOf(e);if(s<0||s>=this.tabs.length)return;const i=o(this,n,bt).call(this,s,t.key);i!==void 0&&(o(this,n,q).call(this,i),this.tabs[i]?.focus())}),d(this,F,ot(()=>{this._elMarker?.removeAttribute("data-scrolling")},150)),d(this,V,()=>{this._elMarker?.setAttribute("data-scrolling",""),r(this,v).call(this),r(this,F).call(this)}),d(this,v,()=>{if(!this._elMarker||!this._elTabsContainer)return;const t=r(this,n,g)[this.selected];if(!t){this._elMarker.style.setProperty("--_marker-width","0px");return}const e=this._elTabsContainer.getBoundingClientRect(),s=t.getBoundingClientRect();this._elMarker.style.setProperty("--_marker-left",`${s.left-e.left}px`),this._elMarker.style.setProperty("--_marker-width",`${s.width}px`)}),d(this,U,()=>{if(!this._elTrack)return;const t=this._elTrack.getBoundingClientRect();r(this,n,g).forEach(e=>{const s=e.getBoundingClientRect(),i=s.left>=t.left-1&&s.right<=t.right+1;e.dataset.isVisible=String(i)}),r(this,K).call(this)}),d(this,_,ot(r(this,U),50)),d(this,K,()=>{const t=r(this,n,g);if(t.length===0){this._showPrevButton=!1,this._showNextButton=!1;return}if(t.some(s=>s.dataset.isVisible==="true")){this._showPrevButton=t[0].dataset.isVisible!=="true",this._showNextButton=t[t.length-1].dataset.isVisible!=="true";return}const e=Math.max(0,this._elTrack.scrollWidth-this._elTrack.clientWidth);this._showPrevButton=this._elTrack.scrollLeft>1,this._showNextButton=this._elTrack.scrollLeft<e-1}),d(this,Q,()=>{const e=r(this,n,g).filter((s,i,a)=>a[i+1]?.dataset.isVisible==="true"&&s.dataset.isVisible!=="true")[0];if(e){this._elTrack.scrollLeft-=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft-=this._elTrack.clientWidth*.8}),d(this,X,()=>{const e=r(this,n,g).filter((s,i,a)=>a[i-1]?.dataset.isVisible==="true"&&s.dataset.isVisible!=="true").reverse()[0];if(e){this._elTrack.scrollLeft+=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft+=this._elTrack.clientWidth*.8})}get tabs(){return this._elTabSlot?this._elTabSlot.assignedElements():[]}get panels(){return this._elPanelSlot?this._elPanelSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",r(this,O)),this.updateComplete.then(()=>{o(this,n,I).call(this)})}firstUpdated(){o(this,n,R).call(this),o(this,n,A).call(this),o(this,n,I).call(this),r(this,v).call(this),Promise.resolve().then(()=>{this._elMarker?.setAttribute("data-ready","")})}disconnectedCallback(){this.removeEventListener("keydown",r(this,O)),this._elTrack?.removeEventListener("scroll",r(this,_)),this._elTrack?.removeEventListener("scroll",r(this,V)),super.disconnectedCallback()}_handleResize(){r(this,_).call(this),r(this,v).call(this)}_handleSelectedChange(){o(this,n,R).call(this),o(this,n,A).call(this),this.updateComplete.then(()=>{o(this,n,J).call(this),r(this,_).call(this),r(this,v).call(this)})}render(){return j`
      <div class="tabs-container">
        <button
          aria-hidden=${!this._showPrevButton}
          ?inert=${!this._showPrevButton}
          id="btn-prev"
          @click=${r(this,Q)}
          aria-label=${nt("Scroll left")}
          tabindex="-1"
        >
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </button>

        <div id="track" role="tablist" aria-label=${this.label}>
          <slot
            name="tab"
            @click=${r(this,H)}
            @slotchange=${r(this,L)}
            role="none"
          ></slot>
        </div>

        <button
          aria-hidden=${!this._showNextButton}
          ?inert=${!this._showNextButton}
          id="btn-next"
          @click=${r(this,X)}
          aria-label=${nt("Scroll right")}
          tabindex="-1"
        >
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </button>

        <div id="marker" aria-hidden="true"></div>
      </div>
      <slot
        id="panelslot"
        @slotchange=${r(this,L)}
        role="none"
      ></slot>
    `}};n=new WeakSet;g=function(){return this.renderRoot.querySelector('slot[name="tab"]')?.assignedElements()??[]};L=new WeakMap;H=new WeakMap;O=new WeakMap;q=function(t){if(this.selected===t)return;this.selected=t;const e=this.tabs[t];e&&this.dispatchCustomEvent("gds-tab-change",{detail:{index:t,tab:e},bubbles:!0,composed:!0})};F=new WeakMap;V=new WeakMap;v=new WeakMap;I=function(){!this._isScrollListenerBound&&this._elTrack&&(this._elTrack.addEventListener("scroll",r(this,_)),this._elTrack.addEventListener("scroll",r(this,V)),this._isScrollListenerBound=!0),r(this,_).call(this)};U=new WeakMap;_=new WeakMap;K=new WeakMap;Q=new WeakMap;X=new WeakMap;J=function(){r(this,n,g)[this.selected]?.scrollIntoView({block:"nearest",inline:"nearest"})};R=function(){const t=this.tabs;if(t.length!==0){if(!this._hasResolvedInitialSelection){const e=t.findIndex(s=>s.selected||s.hasAttribute("selected"));e>=0&&this.selected===0&&(this.selected=e),this._hasResolvedInitialSelection=!0}(this.selected<0||this.selected>=t.length||t[this.selected]?.disabled)&&(this.selected=o(this,n,rt).call(this))}};A=function(){this.tabs.forEach((t,e)=>{const s=e===this.selected,i=t.panel?this.panels.find(a=>a.name===t.panel):this.panels[e];t._setPanelEl(i),t.selected=s}),this.panels.forEach(t=>{const e=this.tabs.find(a=>a.panel?a.panel===t.name:this.tabs.indexOf(a)===this.panels.indexOf(t)),i=(e?this.tabs.indexOf(e):this.panels.indexOf(t))===this.selected;t._setTabEl(e),t._setSelected(i)})};rt=function(){const t=this.tabs.findIndex(e=>!e.disabled);return t===-1?-1:t};bt=function(t,e){const s=this.tabs,i=s.length;if(i===0)return;if(e==="Home")return o(this,n,rt).call(this);if(e==="End"){for(let l=i-1;l>=0;l-=1)if(!s[l].disabled)return l;return}const a=e==="ArrowRight"||e==="Right"?1:-1;for(let l=1;l<=i;l+=1){const h=(t+l*a+i)%i;if(!s[h].disabled)return h}};c.styles=[ct,Lt];u([w({type:Number})],c.prototype,"selected",2);u([w()],c.prototype,"label",2);u([E("#track")],c.prototype,"_elTrack",2);u([E("#marker")],c.prototype,"_elMarker",2);u([E(".tabs-container")],c.prototype,"_elTabsContainer",2);u([E('slot[name="tab"]')],c.prototype,"_elTabSlot",2);u([E("#panelslot")],c.prototype,"_elPanelSlot",2);u([ht()],c.prototype,"_showPrevButton",2);u([ht()],c.prototype,"_showNextButton",2);u([xt()],c.prototype,"_handleResize",1);u([et("selected")],c.prototype,"_handleSelectedChange",1);c=u([tt("gds-tabs",{dependsOn:[p,T,Tt,Ct]}),mt(),kt({labelledBy:"#track",describedBy:"#track"})],c);c.define();p.define();T.define();
