import{i as z,n as m,J as D,h as E,g as G,E as Q,au as rt,o as F,S as at,$ as nt,T as lt,O as U,f as y,H as Y}from"./iframe-BOWV0qpc.js";import{l as ot}from"./localized-decorator-BpW4MtTU.js";import{r as ct}from"./resize-observer-B9k8v2TZ.js";import{I as ht}from"./chevron-left.component-BfJ8ghSi.js";import{I as dt}from"./chevron-right.component-BRh_VDv4.js";const ut=z`
  @layer base {
    :host {
      display: block;
      outline: none;
    }

    :host([hidden]) {
      display: none;
    }
  }
`;var pt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Z=(t,e,s,i)=>{for(var r=i>1?void 0:i?ft(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&pt(e,s,r),r};let _=class extends D{constructor(){super(...arguments),this.internals=this.attachInternals(),this.name=""}render(){return E`<slot></slot>`}};_.styles=[ut];Z([m({reflect:!0})],_.prototype,"name",2);_=Z([G("gds-tab-panel")],_);const bt=z`
  @layer base {
    :host {
      display: inline-flex;
    }

    button,
    a {
      position: relative;
      border-radius: var(--gds-sys-radius-2xs);
      appearance: none;
      background: none;
      border-bottom: 2px solid transparent;
      border-left: 0;
      border-right: 0;
      border-top: 0;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      font: var(--gds-sys-text-detail-m-book);
      outline: none;
      padding: var(--gds-sys-space-xs) var(--gds-sys-space-s);
      text-decoration: none;
      white-space: nowrap;
      gap: var(--gds-sys-space-xs);

      &:hover {
        color: var(--gds-sys-color-content-neutral-01);
      }
    }

    :host([selected]) button,
    :host([selected]) a {
      color: var(--gds-sys-color-content-neutral-01);
    }

    :host([disabled]) button,
    a[aria-disabled='true'] {
      color: var(--gds-sys-color-content-disabled-01);
      cursor: not-allowed;
      pointer-events: none;
    }

    button:focus-visible,
    a:focus-visible {
      box-shadow: 0 0 0 2px var(--gds-sys-color-content-neutral-01);
    }
  }
`;var gt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,j=t=>{throw TypeError(t)},w=(t,e,s,i)=>{for(var r=i>1?void 0:i?vt(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&gt(e,s,r),r},tt=(t,e,s)=>e.has(t)||j("Cannot "+s),x=(t,e,s)=>(tt(t,e,"read from private field"),s?s.call(t):e.get(t)),J=(t,e,s)=>e.has(t)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),K=(t,e,s)=>(tt(t,e,"access private method"),s),v,k,B;let u=class extends D{constructor(){super(...arguments),J(this,k),this.internals=this.attachInternals(),this.href="",this.disabled=!1,this.selected=!1,this.panel="",J(this,v,()=>{K(this,k,B).call(this)})}connectedCallback(){super.connectedCallback()}updated(t){t.has("selected")&&K(this,k,B).call(this)}render(){return this.href?E`<a
        href=${F(this.disabled?void 0:this.href)}
        aria-disabled=${F(this.disabled?"true":void 0)}
      >
        <slot name="lead" @slotchange=${x(this,v)}></slot>
        <slot></slot>
        <slot
          name="trail"
          @slotchange=${x(this,v)}
        ></slot>
      </a>`:E`<button type="button" ?disabled=${this.disabled}>
      <slot name="lead" @slotchange=${x(this,v)}></slot>
      <slot></slot>
      <slot name="trail" @slotchange=${x(this,v)}></slot>
    </button>`}};v=new WeakMap;k=new WeakSet;B=function(){const t=["lead","trail"];for(const e of t){const s=this.renderRoot.querySelector(`slot[name="${e}"]`);for(const i of(s==null?void 0:s.assignedElements({flatten:!0}))??[])"solid"in i&&(i.solid=this.selected)}};u.styles=[Q,bt];u.shadowRootOptions={...rt.shadowRootOptions,delegatesFocus:!0};w([m()],u.prototype,"href",2);w([m({type:Boolean,reflect:!0})],u.prototype,"disabled",2);w([m({type:Boolean,reflect:!0})],u.prototype,"selected",2);w([m()],u.prototype,"panel",2);u=w([G("gds-tab")],u);const _t=z`
  @layer base {
    :host {
      display: block;
      --_gds-tab-scroll-button-width: 1.75rem;
      --_gds-tab-scroll-margin-inline: calc(
        var(--_gds-tab-scroll-button-width) + var(--gds-sys-space-xs)
      );
    }

    nav {
      align-items: center;
      display: flex;
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        background: var(--gds-sys-color-border-neutral-02);
        height: 2px;
        left: 2px;
        width: calc(100% - 2px);
        position: absolute;
        bottom: 4px;
      }
    }

    #marker {
      position: absolute;
      bottom: 4px;
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
      padding: var(--gds-sys-space-xs) 0 var(--gds-sys-space-xs) 2px;
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
`;var mt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,et=t=>{throw TypeError(t)},p=(t,e,s,i)=>{for(var r=i>1?void 0:i?yt(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&mt(e,s,r),r},st=(t,e,s)=>e.has(t)||et("Cannot "+s),n=(t,e,s)=>(st(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c=(t,e,s)=>(st(t,e,"access private method"),s),l,g,T,R,S,M,L,O,b,$,I,f,W,V,N,A,C,P,H,it;const X=(t,e)=>{let s;return()=>{clearTimeout(s),s=setTimeout(t,e)}};let h=class extends at(nt(lt(D))){constructor(){super(...arguments),d(this,l),this.selected=0,this._showPrevButton=!1,this._showNextButton=!1,this._hasResolvedInitialSelection=!1,this._isScrollListenerBound=!1,d(this,T,()=>{c(this,l,C).call(this),c(this,l,P).call(this),this.requestUpdate(),this.updateComplete.then(()=>{c(this,l,$).call(this),c(this,l,A).call(this),n(this,f).call(this),n(this,b).call(this)})}),d(this,R,t=>{const e=this.tabs.find(i=>i===t.target||i.contains(t.target));if(!e||e.disabled)return;t.preventDefault();const s=this.tabs.indexOf(e);s!==-1&&c(this,l,M).call(this,s)}),d(this,S,t=>{var r;if(!["ArrowRight","ArrowLeft","Right","Left","Home","End"].includes(t.key))return;const e=t.composedPath().find(a=>{var q;const o=a;return(o==null?void 0:o.gdsElementName)==="gds-tab"||((q=o==null?void 0:o.getAttribute)==null?void 0:q.call(o,"gds-element"))==="gds-tab"});t.preventDefault();let s=this.selected;if(e){const a=this.tabs.indexOf(e);a!==-1&&(s=a)}if(s<0||s>=this.tabs.length)return;const i=c(this,l,it).call(this,s,t.key);i!==void 0&&(c(this,l,M).call(this,i),(r=this.tabs[i])==null||r.focus())}),d(this,L,X(()=>{var t;(t=this._elMarker)==null||t.removeAttribute("data-scrolling")},150)),d(this,O,()=>{var t;(t=this._elMarker)==null||t.setAttribute("data-scrolling",""),n(this,b).call(this),n(this,L).call(this)}),d(this,b,()=>{if(!this._elMarker||!this._elNav)return;const t=n(this,l,g)[this.selected];if(!t){this._elMarker.style.setProperty("--_marker-width","0px");return}const e=this._elNav.getBoundingClientRect(),s=t.getBoundingClientRect();this._elMarker.style.setProperty("--_marker-left",`${s.left-e.left}px`),this._elMarker.style.setProperty("--_marker-width",`${s.width}px`)}),d(this,I,()=>{if(!this._elTrack)return;const t=this._elTrack.getBoundingClientRect();n(this,l,g).forEach(e=>{const s=e.getBoundingClientRect(),i=s.left>=t.left-1&&s.right<=t.right+1;e.dataset.isVisible=String(i)}),n(this,W).call(this)}),d(this,f,X(n(this,I),50)),d(this,W,()=>{const t=n(this,l,g);if(t.length===0){this._showPrevButton=!1,this._showNextButton=!1;return}if(t.some(s=>s.dataset.isVisible==="true")){this._showPrevButton=t[0].dataset.isVisible!=="true",this._showNextButton=t[t.length-1].dataset.isVisible!=="true";return}const e=Math.max(0,this._elTrack.scrollWidth-this._elTrack.clientWidth);this._showPrevButton=this._elTrack.scrollLeft>1,this._showNextButton=this._elTrack.scrollLeft<e-1}),d(this,V,()=>{const e=n(this,l,g).filter((s,i,r)=>{var a;return((a=r[i+1])==null?void 0:a.dataset.isVisible)==="true"&&s.dataset.isVisible!=="true"})[0];if(e){this._elTrack.scrollLeft-=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft-=this._elTrack.clientWidth*.8}),d(this,N,()=>{const e=n(this,l,g).filter((s,i,r)=>{var a;return((a=r[i-1])==null?void 0:a.dataset.isVisible)==="true"&&s.dataset.isVisible!=="true"}).reverse()[0];if(e){this._elTrack.scrollLeft+=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft+=this._elTrack.clientWidth*.8})}get tabs(){return this._elTabSlot?this._elTabSlot.assignedElements():[]}get panels(){return this._elPanelSlot?this._elPanelSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",n(this,S)),this.updateComplete.then(()=>{c(this,l,$).call(this)})}firstUpdated(){c(this,l,C).call(this),c(this,l,P).call(this),c(this,l,$).call(this),n(this,b).call(this),Promise.resolve().then(()=>{var t;(t=this._elMarker)==null||t.setAttribute("data-ready","")})}updated(t){t.has("selected")&&(c(this,l,C).call(this),c(this,l,P).call(this),this.updateComplete.then(()=>{c(this,l,A).call(this),n(this,f).call(this),n(this,b).call(this)}))}disconnectedCallback(){var t,e;this.removeEventListener("keydown",n(this,S)),(t=this._elTrack)==null||t.removeEventListener("scroll",n(this,f)),(e=this._elTrack)==null||e.removeEventListener("scroll",n(this,O)),super.disconnectedCallback()}_handleResize(){n(this,f).call(this),n(this,b).call(this)}render(){return E`
      <nav>
        <button
          aria-hidden=${!this._showPrevButton}
          ?inert=${!this._showPrevButton}
          id="btn-prev"
          @click=${n(this,V)}
          aria-label=${U("Scroll left")}
          tabindex="-1"
        >
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </button>

        <div id="track" role="tablist">
          <slot
            name="tab"
            @click=${n(this,R)}
            @slotchange=${n(this,T)}
            role="none"
          ></slot>
        </div>

        <button
          aria-hidden=${!this._showNextButton}
          ?inert=${!this._showNextButton}
          id="btn-next"
          @click=${n(this,N)}
          aria-label=${U("Scroll right")}
          tabindex="-1"
        >
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </button>

        <div id="marker" aria-hidden="true"></div>
      </nav>

      <section>
        <slot @slotchange=${n(this,T)} role="none"></slot>
      </section>
    `}};l=new WeakSet;g=function(){const t=this.renderRoot.querySelector('slot[name="tab"]');return(t==null?void 0:t.assignedElements())??[]};T=new WeakMap;R=new WeakMap;S=new WeakMap;M=function(t){if(this.selected===t)return;this.selected=t;const e=this.tabs[t];e&&this.dispatchCustomEvent("gds-tab-change",{detail:{index:t,tab:e},bubbles:!0,composed:!0})};L=new WeakMap;O=new WeakMap;b=new WeakMap;$=function(){!this._isScrollListenerBound&&this._elTrack&&(this._elTrack.addEventListener("scroll",n(this,f)),this._elTrack.addEventListener("scroll",n(this,O)),this._isScrollListenerBound=!0),n(this,f).call(this)};I=new WeakMap;f=new WeakMap;W=new WeakMap;V=new WeakMap;N=new WeakMap;A=function(){var t;(t=n(this,l,g)[this.selected])==null||t.scrollIntoView({block:"nearest",inline:"nearest"})};C=function(){var e;const t=this.tabs;if(t.length!==0){if(!this._hasResolvedInitialSelection){const s=t.findIndex(i=>i.selected||i.hasAttribute("selected"));s>=0&&this.selected===0&&(this.selected=s),this._hasResolvedInitialSelection=!0}(this.selected<0||this.selected>=t.length||(e=t[this.selected])!=null&&e.disabled)&&(this.selected=c(this,l,H).call(this))}};P=function(){this.tabs.forEach((t,e)=>{const s=e===this.selected,i=t.panel?this.panels.find(r=>r.name===t.panel):this.panels[e];t.internals.role="tab",t.internals.ariaSelected=s?"true":"false",i&&(t.internals.ariaControlsElements=[i]),t.tabIndex=s&&!t.disabled?0:-1,t.selected=s}),this.panels.forEach(t=>{const e=this.tabs.find(r=>r.panel?r.panel===t.name:this.tabs.indexOf(r)===this.panels.indexOf(t)),i=(e?this.tabs.indexOf(e):this.panels.indexOf(t))===this.selected;t.internals.role="tabpanel",e&&(t.internals.ariaLabelledByElements=[e]),t.internals.ariaHidden=String(!i),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")})};H=function(){const t=this.tabs.findIndex(e=>!e.disabled);return t===-1?-1:t};it=function(t,e){const s=this.tabs,i=s.length;if(i===0)return;if(e==="Home")return c(this,l,H).call(this);if(e==="End"){for(let a=i-1;a>=0;a-=1)if(!s[a].disabled)return a;return}const r=e==="ArrowRight"||e==="Right"?1:-1;for(let a=1;a<=i;a+=1){const o=(t+a*r+i)%i;if(!s[o].disabled)return o}};h.styles=[Q,_t];p([m({type:Number})],h.prototype,"selected",2);p([y("#track")],h.prototype,"_elTrack",2);p([y("#marker")],h.prototype,"_elMarker",2);p([y("nav")],h.prototype,"_elNav",2);p([y('slot[name="tab"]')],h.prototype,"_elTabSlot",2);p([y("section > slot")],h.prototype,"_elPanelSlot",2);p([Y()],h.prototype,"_showPrevButton",2);p([Y()],h.prototype,"_showNextButton",2);p([ct()],h.prototype,"_handleResize",1);h=p([G("gds-tabs",{dependsOn:[u,_,ht,dt]}),ot()],h);h.define();u.define();_.define();
