import{a9 as O,i as V,n,w as D,f as A,$ as b,g as H,y as K,z as I,T as U,a as G,E as z,h as F}from"./iframe-CFZ-i8aF.js";import{l as X}from"./localized-decorator-CdnZUrII.js";import{o as Y,s as q,a as Q,c as J}from"./floating-ui.dom-DPpwG6Py.js";import{I as Z}from"./cross-small.component-D8aKtQTD.js";function j(e){return(t,o,r)=>{if(O)return;const l=window.matchMedia(e),d=t.connectedCallback,y=t.disconnectedCallback;t.connectedCallback=function(){d?.call(this);const P=N=>{r.value?.call(this,N.matches)};l.addEventListener("change",P),this.disconnectedCallback=function(){y?.call(this),l.removeEventListener("change",P)},r.value?.call(this,l.matches)}}}const ee=V`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host > div:not([hidden]) {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      visibility: visible;
    }

    dialog {
      display: flex;
      flex-direction: column;
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow: var(--gds-sys-shadow-l-01);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-02);
      border-radius: var(--gds-sys-radius-s);
      overscroll-behavior: contain;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 576px) {
      dialog.use-modal-in-mobile {
        border-radius: var(--gds-sys-radius-m) var(--gds-sys-radius-m) 0 0;
        transition: transform var(--gds-sys-motion-duration-fastest) ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        padding-bottom: 0;

        transform: translateY(0);
        @starting-style {
          transform: translateY(100%);
        }

        &::backdrop {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          position: fixed;
          opacity: 1;
          transition: opacity var(--gds-sys-motion-duration-fast) ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 577px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 577px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,R=e=>{throw TypeError(e)},a=(e,t,o,r)=>{for(var l=r>1?void 0:r?ie(t,o):t,d=e.length-1,y;d>=0;d--)(y=e[d])&&(l=(r?y(t,o,l):y(l))||l);return r&&l&&te(t,o,l),l},W=(e,t,o)=>t.has(e)||R("Cannot "+o),s=(e,t,o)=>(W(e,t,"read from private field"),o?o.call(e):t.get(e)),h=(e,t,o)=>t.has(e)?R("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),M=(e,t,o,r)=>(W(e,t,"write to private field"),t.set(e,o),o),f=(e,t,o)=>(W(e,t,"access private method"),o),c,L,u,k,p,_,g,x,S,$,B,T,C,E,v,w,m;function se(e,t,o){e.setAttribute("aria-expanded",String(t));const r=["A","BUTTON","INPUT","TEXTAREA"];e.nodeName.startsWith("GDS-")||r.includes(e.nodeName)||(e.setAttribute("tabindex","0"),e.setAttribute("role","button"));const d=e.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";e.getAttribute(d)===null&&e.setAttribute(d,o)}let i=class extends I{constructor(){super(...arguments),h(this,c),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,u),h(this,k,!1),h(this,p),h(this,_,()=>{s(this,g).call(this,"cancel")&&(this.open=!1)}),h(this,g,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),h(this,x,e=>{e.stopPropagation(),e.preventDefault(),s(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),h(this,C,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,s(this,g).call(this,"show")),e.key==="Escape"&&this.open&&s(this,_).call(this)}),h(this,E,e=>{e.preventDefault(),s(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),h(this,v,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),h(this,w,e=>{const t=e,o=this._elDialog;if((t.clientX>0||t.clientY>0)&&o&&this.open){const l=o.getBoundingClientRect();!(l.top<=t.clientY&&t.clientY<=l.top+l.height&&l.left<=t.clientX&&t.clientX<=l.left+l.width)&&s(this,g).call(this,"close")&&(this.open=!1)}}),h(this,m,()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&s(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,c,S).call(this),f(this,c,B).call(this)}_handleAnchorChanged(){f(this,c,T).call(this)}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-popover"),f(this,c,S).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(s(this,_).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,c,$).call(this),window.removeEventListener("scroll",s(this,m))}render(){return F`<slot
        name="trigger"
        @slotchange=${f(this,c,L)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${G({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&s(this,_).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${s(this,x)}
              class="close"
              label="${z("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?s(this,p):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(s(this,v).call(this),setTimeout(()=>s(this,v).call(this),250)),requestAnimationFrame(()=>{s(this,p)&&(s(this,p).show=!0)}),setTimeout(()=>e.addEventListener("click",s(this,w)),0),window.addEventListener("scroll",s(this,m),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",s(this,w)),window.removeEventListener("scroll",s(this,m)),s(this,p)&&(s(this,p).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||M(this,p,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;M(this,k,e),e&&!this.disableMobileStyles?((t=s(this,u))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width")):this.updateComplete.then(()=>{f(this,c,T).call(this)})}};c=new WeakSet;L=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;k=new WeakMap;p=new WeakMap;_=new WeakMap;g=new WeakMap;x=new WeakMap;S=function(){this._trigger?.addEventListener("keydown",s(this,C)),this._trigger?.addEventListener("click",s(this,E))};$=function(){var e;this._trigger?.removeEventListener("keydown",s(this,C)),this._trigger?.removeEventListener("click",s(this,E)),(e=s(this,u))==null||e.call(this)};B=function(){this._trigger&&se(this._trigger,this.open,this.popupRole)};T=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||s(this,k)&&!this.disableMobileStyles||(s(this,u)&&s(this,u).call(this),M(this,u,Q(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),J(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:o,y:r})=>Object.assign(t.style,{left:`${o}px`,top:`${r}px`}))})))};C=new WeakMap;E=new WeakMap;v=new WeakMap;w=new WeakMap;m=new WeakMap;i.styles=ee;i.DefaultMiddleware=[Y(8),q({crossAxis:!0,padding:8})];a([n({type:Boolean,reflect:!0})],i.prototype,"open",2);a([n({attribute:"popup-role"})],i.prototype,"popupRole",2);a([n({attribute:!1})],i.prototype,"triggerRef",2);a([n({attribute:!1})],i.prototype,"anchorRef",2);a([n()],i.prototype,"label",2);a([n()],i.prototype,"placement",2);a([n({type:Boolean})],i.prototype,"disableMobileStyles",2);a([n({type:Boolean})],i.prototype,"disableScrollClose",2);a([n({type:Boolean})],i.prototype,"autofocus",2);a([n({attribute:!1})],i.prototype,"calcMinWidth",2);a([n({attribute:!1})],i.prototype,"calcMaxWidth",2);a([n({attribute:!1})],i.prototype,"calcMinHeight",2);a([n({attribute:!1})],i.prototype,"calcMaxHeight",2);a([n({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);a([n()],i.prototype,"backdrop",2);a([n({attribute:!1})],i.prototype,"floatingUIMiddleware",2);a([D()],i.prototype,"_trigger",2);a([D()],i.prototype,"_anchor",2);a([D()],i.prototype,"_isVirtKbVisible",2);a([A("slot:not([name])")],i.prototype,"_elDefaultSlot",2);a([A('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);a([A("dialog")],i.prototype,"_elDialog",2);a([b("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);a([b("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);a([b("_trigger")],i.prototype,"_handleTriggerChanged",1);a([b("_anchor")],i.prototype,"_handleAnchorChanged",1);a([b("open")],i.prototype,"_handleOpenChange",1);a([b("backdrop")],i.prototype,"_handleBackdropChange",1);a([j("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=a([H("gds-popover",{dependsOn:[Z]}),K({labelledBy:"dialog",describedBy:"dialog"}),X()],i);export{i as G,se as a,j as w};
