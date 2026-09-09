import{a8 as I,i as U,n,E as A,l as P,$ as y,a as F,F as G,D as z,V as X,e as Y,J as q,h as Q}from"./iframe-_t4ul9Kp.js";import{l as J}from"./localized-decorator-C2iWY0dm.js";import{o as Z,s as j,a as tt,c as et}from"./floating-ui.dom-DzQH3ivI.js";import{I as it}from"./cross-small.component-D4LAeQXU.js";function st(t){return(e,o,r)=>{if(I)return;const l=window.matchMedia(t),p=e.connectedCallback,_=e.disconnectedCallback;e.connectedCallback=function(){p?.call(this);const L=K=>{r.value?.call(this,K.matches)};l.addEventListener("change",L),this.disconnectedCallback=function(){_?.call(this),l.removeEventListener("change",L)},r.value?.call(this,l.matches)}}}const at=U`
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
`;var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,B=t=>{throw TypeError(t)},a=(t,e,o,r)=>{for(var l=r>1?void 0:r?lt(e,o):e,p=t.length-1,_;p>=0;p--)(_=t[p])&&(l=(r?_(e,o,l):_(l))||l);return r&&l&&ot(e,o,l),l},R=(t,e,o)=>e.has(t)||B("Cannot "+o),s=(t,e,o)=>(R(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),w=(t,e,o,r)=>(R(t,e,"write to private field"),e.set(t,o),o),c=(t,e,o)=>(R(t,e,"access private method"),o),d,V,u,C,f,b,$,E,m,g,S,T,N,H,W,M,x,k,D,v;function O(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}function nt(t,e,o){t.setAttribute("aria-expanded",String(e));const r=["A","BUTTON","INPUT","TEXTAREA"];t.nodeName.startsWith("GDS-")||r.includes(t.nodeName)||(t.setAttribute("tabindex","0"),t.setAttribute("role","button"));const p=t.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";t.getAttribute(p)===null&&t.setAttribute(p,o)}let i=class extends z{constructor(){super(...arguments),h(this,d),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,u),h(this,C,!1),h(this,f),h(this,b),h(this,m,()=>{s(this,g).call(this,"cancel")&&(this.open=!1)}),h(this,g,t=>{const e=t==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:e,reason:t},bubbles:!1,composed:!1,cancelable:!0})}),h(this,S,t=>{t.stopPropagation(),t.preventDefault(),s(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),h(this,M,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,s(this,g).call(this,"show")),t.key==="Escape"&&this.open&&s(this,m).call(this)}),h(this,x,t=>{t.preventDefault(),s(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),h(this,k,()=>{const t=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{t?.focus()})}),h(this,D,t=>{const e=t,o=this._elDialog;if((e.clientX>0||e.clientY>0)&&o&&this.open){const l=o.getBoundingClientRect();!(l.top<=e.clientY&&e.clientY<=l.top+l.height&&l.left<=e.clientX&&e.clientX<=l.left+l.width)&&s(this,g).call(this,"close")&&(this.open=!1)}}),h(this,v,()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&s(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){this.anchorRef?.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){c(this,d,T).call(this),c(this,d,H).call(this)}_handleAnchorChanged(){c(this,d,W).call(this)}connectedCallback(){super.connectedCallback(),X.instance.apply(this,"gds-popover"),c(this,d,T).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(s(this,m).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e!==this&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),c(this,d,N).call(this),c(this,d,E).call(this),window.removeEventListener("scroll",s(this,v))}render(){return Q`<slot
        name="trigger"
        @slotchange=${c(this,d,V)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Y({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&s(this,m).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${s(this,S)}
              class="close"
              label="${q("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(s(this,k).call(this),setTimeout(()=>s(this,k).call(this),250)),requestAnimationFrame(()=>{s(this,f)&&(s(this,f).show=!0)}),setTimeout(()=>c(this,d,$).call(this),0),window.addEventListener("scroll",s(this,v),{passive:!0})):(this._elDialog?.close(),c(this,d,E).call(this),window.removeEventListener("scroll",s(this,v)),s(this,f)&&(s(this,f).show=!1))})}_handleBackdropChange(){const t=this.parentElement?.getRootNode();!this.backdrop||!t||w(this,f,t.querySelector(this.backdrop))}_handleMobileLayout(t){var e;w(this,C,t),t&&!this.disableMobileStyles?((e=s(this,u))==null||e.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("right"),this._elDialog?.style.removeProperty("bottom"),this._elDialog?.style.removeProperty("transform"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width")):this.updateComplete.then(()=>{c(this,d,W).call(this)})}};d=new WeakSet;V=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;C=new WeakMap;f=new WeakMap;b=new WeakMap;$=function(){!this.open||!this.isConnected||(c(this,d,E).call(this),w(this,b,(this.nonmodal?s(this,f):this._elDialog)||document),s(this,b).addEventListener("click",s(this,D)))};E=function(){s(this,b)?.removeEventListener("click",s(this,D)),w(this,b,void 0)};m=new WeakMap;g=new WeakMap;S=new WeakMap;T=function(){this._trigger?.addEventListener("keydown",s(this,M)),this._trigger?.addEventListener("click",s(this,x))};N=function(){var t;this._trigger?.removeEventListener("keydown",s(this,M)),this._trigger?.removeEventListener("click",s(this,x)),(t=s(this,u))==null||t.call(this)};H=function(){this._trigger&&nt(this._trigger,this.open,this.popupRole)};W=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||s(this,C)&&!this.disableMobileStyles||(s(this,u)&&s(this,u).call(this),w(this,u,tt(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),et(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:o,y:r})=>Object.assign(e.style,{left:"0",top:"0",right:"auto",bottom:"auto",transform:`translate3d(${O(o)}px, ${O(r)}px, 0)`}))})))};M=new WeakMap;x=new WeakMap;k=new WeakMap;D=new WeakMap;v=new WeakMap;i.styles=at;i.DefaultMiddleware=[Z(8),j({crossAxis:!0,padding:8})];a([n({type:Boolean,reflect:!0})],i.prototype,"open",2);a([n({attribute:"popup-role"})],i.prototype,"popupRole",2);a([n({attribute:!1})],i.prototype,"triggerRef",2);a([n({attribute:!1})],i.prototype,"anchorRef",2);a([n()],i.prototype,"label",2);a([n()],i.prototype,"placement",2);a([n({type:Boolean})],i.prototype,"disableMobileStyles",2);a([n({type:Boolean})],i.prototype,"disableScrollClose",2);a([n({type:Boolean})],i.prototype,"autofocus",2);a([n({attribute:!1})],i.prototype,"calcMinWidth",2);a([n({attribute:!1})],i.prototype,"calcMaxWidth",2);a([n({attribute:!1})],i.prototype,"calcMinHeight",2);a([n({attribute:!1})],i.prototype,"calcMaxHeight",2);a([n({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);a([n()],i.prototype,"backdrop",2);a([n({attribute:!1})],i.prototype,"floatingUIMiddleware",2);a([A()],i.prototype,"_trigger",2);a([A()],i.prototype,"_anchor",2);a([A()],i.prototype,"_isVirtKbVisible",2);a([P("slot:not([name])")],i.prototype,"_elDefaultSlot",2);a([P('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);a([P("dialog")],i.prototype,"_elDialog",2);a([y("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);a([y("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);a([y("_trigger")],i.prototype,"_handleTriggerChanged",1);a([y("_anchor")],i.prototype,"_handleAnchorChanged",1);a([y("open")],i.prototype,"_handleOpenChange",1);a([y("backdrop")],i.prototype,"_handleBackdropChange",1);a([st("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=a([F("gds-popover",{dependsOn:[it]}),G({labelledBy:"dialog",describedBy:"dialog"}),J()],i);export{i as G,nt as a,st as w};
