import{i as I,n as v,J as L,h as T,g as R,E as D,au as F,o as z,S as U,$ as J,T as K,O as N,f as V,H as A}from"./iframe-CL7Bfxf7.js";import{l as X}from"./localized-decorator-VhPkI65L.js";import{r as Q}from"./resize-observer-B9k8v2TZ.js";import{I as Y}from"./chevron-left.component-Cd-_uHrS.js";import{I as Z}from"./chevron-right.component-4ftXW-90.js";const tt=I`
  @layer base {
    :host {
      display: block;
      outline: none;
    }

    :host([hidden]) {
      display: none;
    }
  }
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var r=i>1?void 0:i?st(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&et(e,s,r),r};let g=class extends L{constructor(){super(...arguments),this.internals=this.attachInternals(),this.name=""}render(){return T`<slot></slot>`}};g.styles=[tt];G([v({reflect:!0})],g.prototype,"name",2);g=G([R("gds-tab-panel")],g);const it=I`
  @layer base {
    :host {
      display: inline-flex;
    }

    button,
    a {
      border-radius: var(--gds-sys-radius-2xs);
      appearance: none;
      background: none;
      border-bottom: 2px solid transparent;
      border-left: 0;
      border-right: 0;
      border-top: 0;
      color: var(--gds-sys-color-content-neutral-01);
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
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-brand-05)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-brand-06)
        );
      }
    }

    :host([selected]) button,
    :host([selected]) a {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        background: var(--gds-sys-color-border-neutral-04);
        height: 2px;
        left: 0;
        bottom: calc(
          var(--gds-sys-space-s) * -0.5 + 3px - var(--gds-sys-space-4xs)
        );
      }
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
`;var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,_=(t,e,s,i)=>{for(var r=i>1?void 0:i?nt(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&rt(e,s,r),r};let h=class extends L{constructor(){super(...arguments),this.internals=this.attachInternals(),this.href="",this.disabled=!1,this.selected=!1,this.panel=""}connectedCallback(){super.connectedCallback()}render(){return this.href?T`<a
        href=${z(this.disabled?void 0:this.href)}
        aria-disabled=${z(this.disabled?"true":void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>`:T`<button type="button" ?disabled=${this.disabled}>
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </button>`}};h.styles=[D,it];h.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0};_([v()],h.prototype,"href",2);_([v({type:Boolean,reflect:!0})],h.prototype,"disabled",2);_([v({type:Boolean,reflect:!0})],h.prototype,"selected",2);_([v()],h.prototype,"panel",2);h=_([R("gds-tab")],h);const at=I`
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
      &:after {
        content: '';
        background: var(--gds-sys-color-border-neutral-02);
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 4px;
      }
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      gap: var(--gds-sys-space-xs);
      padding: var(--gds-sys-space-xs) 3px;
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

      &:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-brand-05)
        );
      }
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
`;var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},p=(t,e,s,i)=>{for(var r=i>1?void 0:i?lt(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&ot(e,s,r),r},j=(t,e,s)=>e.has(t)||H("Cannot "+s),l=(t,e,s)=>(j(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c=(t,e,s)=>(j(t,e,"access private method"),s),o,f,m,S,y,C,x,O,b,P,B,E,$,w,k,W,q;const ct=(t,e)=>{let s;return()=>{clearTimeout(s),s=setTimeout(t,e)}};let d=class extends U(J(K(L))){constructor(){super(...arguments),u(this,o),this.selected=0,this._showPrevButton=!1,this._showNextButton=!1,this._hasResolvedInitialSelection=!1,this._isScrollListenerBound=!1,u(this,m,()=>{c(this,o,w).call(this),c(this,o,k).call(this),this.requestUpdate(),this.updateComplete.then(()=>{c(this,o,x).call(this),c(this,o,$).call(this),l(this,b).call(this)})}),u(this,S,t=>{const e=this.tabs.find(i=>i===t.target||i.contains(t.target));if(!e||e.disabled)return;t.preventDefault();const s=this.tabs.indexOf(e);s!==-1&&c(this,o,C).call(this,s)}),u(this,y,t=>{var r;if(!["ArrowRight","ArrowLeft","Right","Left","Home","End"].includes(t.key))return;const e=t.composedPath().find(n=>{var M;const a=n;return(a==null?void 0:a.gdsElementName)==="gds-tab"||((M=a==null?void 0:a.getAttribute)==null?void 0:M.call(a,"gds-element"))==="gds-tab"});t.preventDefault();let s=this.selected;if(e){const n=this.tabs.indexOf(e);n!==-1&&(s=n)}if(s<0||s>=this.tabs.length)return;const i=c(this,o,q).call(this,s,t.key);i!==void 0&&(c(this,o,C).call(this,i),(r=this.tabs[i])==null||r.focus())}),u(this,O,()=>{if(!this._elTrack)return;const t=this._elTrack.getBoundingClientRect();l(this,o,f).forEach(e=>{const s=e.getBoundingClientRect(),i=s.left>=t.left-1&&s.right<=t.right+1;e.dataset.isVisible=String(i)}),l(this,P).call(this)}),u(this,b,ct(l(this,O),50)),u(this,P,()=>{const t=l(this,o,f);if(t.length===0){this._showPrevButton=!1,this._showNextButton=!1;return}if(t.some(s=>s.dataset.isVisible==="true")){this._showPrevButton=t[0].dataset.isVisible!=="true",this._showNextButton=t[t.length-1].dataset.isVisible!=="true";return}const e=Math.max(0,this._elTrack.scrollWidth-this._elTrack.clientWidth);this._showPrevButton=this._elTrack.scrollLeft>1,this._showNextButton=this._elTrack.scrollLeft<e-1}),u(this,B,()=>{const e=l(this,o,f).filter((s,i,r)=>{var n;return((n=r[i+1])==null?void 0:n.dataset.isVisible)==="true"&&s.dataset.isVisible!=="true"})[0];if(e){this._elTrack.scrollLeft-=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft-=this._elTrack.clientWidth*.8}),u(this,E,()=>{const e=l(this,o,f).filter((s,i,r)=>{var n;return((n=r[i-1])==null?void 0:n.dataset.isVisible)==="true"&&s.dataset.isVisible!=="true"}).reverse()[0];if(e){this._elTrack.scrollLeft+=e.getBoundingClientRect().width;return}this._elTrack.scrollLeft+=this._elTrack.clientWidth*.8})}get tabs(){return this._elTabSlot?this._elTabSlot.assignedElements():[]}get panels(){return this._elPanelSlot?this._elPanelSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",l(this,y)),this.updateComplete.then(()=>{c(this,o,x).call(this)})}firstUpdated(){c(this,o,w).call(this),c(this,o,k).call(this),c(this,o,x).call(this)}updated(t){t.has("selected")&&(c(this,o,w).call(this),c(this,o,k).call(this),this.updateComplete.then(()=>{c(this,o,$).call(this),l(this,b).call(this)}))}disconnectedCallback(){var t;this.removeEventListener("keydown",l(this,y)),(t=this._elTrack)==null||t.removeEventListener("scroll",l(this,b)),super.disconnectedCallback()}_handleResize(){l(this,b).call(this)}render(){return T`
      <nav>
        <button
          aria-hidden=${!this._showPrevButton}
          ?inert=${!this._showPrevButton}
          id="btn-prev"
          @click=${l(this,B)}
          aria-label=${N("Scroll left")}
          tabindex="-1"
        >
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </button>

        <div id="track" role="tablist">
          <slot
            name="tab"
            @click=${l(this,S)}
            @slotchange=${l(this,m)}
            role="none"
          ></slot>
        </div>

        <button
          aria-hidden=${!this._showNextButton}
          ?inert=${!this._showNextButton}
          id="btn-next"
          @click=${l(this,E)}
          aria-label=${N("Scroll right")}
          tabindex="-1"
        >
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </button>
      </nav>

      <section>
        <slot @slotchange=${l(this,m)} role="none"></slot>
      </section>
    `}};o=new WeakSet;f=function(){const t=this.renderRoot.querySelector('slot[name="tab"]');return(t==null?void 0:t.assignedElements())??[]};m=new WeakMap;S=new WeakMap;y=new WeakMap;C=function(t){if(this.selected===t)return;this.selected=t;const e=this.tabs[t];e&&this.dispatchCustomEvent("gds-tab-change",{detail:{index:t,tab:e},bubbles:!0,composed:!0})};x=function(){!this._isScrollListenerBound&&this._elTrack&&(this._elTrack.addEventListener("scroll",l(this,b)),this._isScrollListenerBound=!0),l(this,b).call(this)};O=new WeakMap;b=new WeakMap;P=new WeakMap;B=new WeakMap;E=new WeakMap;$=function(){var t;(t=l(this,o,f)[this.selected])==null||t.scrollIntoView({block:"nearest",inline:"nearest"})};w=function(){var e;const t=this.tabs;if(t.length!==0){if(!this._hasResolvedInitialSelection){const s=t.findIndex(i=>i.selected||i.hasAttribute("selected"));s>=0&&this.selected===0&&(this.selected=s),this._hasResolvedInitialSelection=!0}(this.selected<0||this.selected>=t.length||(e=t[this.selected])!=null&&e.disabled)&&(this.selected=c(this,o,W).call(this))}};k=function(){this.tabs.forEach((t,e)=>{const s=e===this.selected,i=t.panel?this.panels.find(r=>r.name===t.panel):this.panels[e];t.internals.role="tab",t.internals.ariaSelected=s?"true":"false",i&&(t.internals.ariaControlsElements=[i]),t.tabIndex=s&&!t.disabled?0:-1,t.selected=s}),this.panels.forEach(t=>{const e=this.tabs.find(r=>r.panel?r.panel===t.name:this.tabs.indexOf(r)===this.panels.indexOf(t)),i=(e?this.tabs.indexOf(e):this.panels.indexOf(t))===this.selected;t.internals.role="tabpanel",e&&(t.internals.ariaLabelledByElements=[e]),t.internals.ariaHidden=String(!i),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")})};W=function(){const t=this.tabs.findIndex(e=>!e.disabled);return t===-1?-1:t};q=function(t,e){const s=this.tabs,i=s.length;if(i===0)return;if(e==="Home")return c(this,o,W).call(this);if(e==="End"){for(let n=i-1;n>=0;n-=1)if(!s[n].disabled)return n;return}const r=e==="ArrowRight"||e==="Right"?1:-1;for(let n=1;n<=i;n+=1){const a=(t+n*r+i)%i;if(!s[a].disabled)return a}};d.styles=[D,at];p([v({type:Number})],d.prototype,"selected",2);p([V("#track")],d.prototype,"_elTrack",2);p([V('slot[name="tab"]')],d.prototype,"_elTabSlot",2);p([V("section > slot")],d.prototype,"_elPanelSlot",2);p([A()],d.prototype,"_showPrevButton",2);p([A()],d.prototype,"_showNextButton",2);p([Q()],d.prototype,"_handleResize",1);d=p([R("gds-tabs",{dependsOn:[h,g,Y,Z]}),X()],d);d.define();h.define();g.define();
