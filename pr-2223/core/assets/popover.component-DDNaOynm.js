import{m as B}from"./runtime-BL31MtW8.js";import{l as H}from"./localized-decorator-DtmrKsyB.js";import{i as K,r as I}from"./lit-element-Bx14lxc-.js";import{n,r as D,G as U,h as G,g as z}from"./gds-element-DKcDvDP5.js";import{a as S}from"./query-p8xgzTDt.js";import{e as F}from"./class-map-CXsQwv0r.js";import{o as X,s as Y,a as q,c as Q}from"./floating-ui.dom-BmFOYU71.js";import{T as J}from"./transitional-styles-CacJDsVN.js";import{w as m}from"./watch-tFciLXSI.js";import{b as Z}from"./tokens.style-BxbMzGpH.js";import{I as j}from"./cross-small.component-Crfojz5L.js";function tt(t){return(e,s,l)=>{if(Z)return;const r=window.matchMedia(t),h=e.connectedCallback,g=e.disconnectedCallback;e.connectedCallback=function(){var P;h==null||h.call(this);const W=V=>{var R;(R=l.value)==null||R.call(this,V.matches)};r.addEventListener("change",W),this.disconnectedCallback=function(){g==null||g.call(this),r.removeEventListener("change",W)},(P=l.value)==null||P.call(this,r.matches)}}}const et=K`
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
      /*transform: translate3d(0, 0, 0);*/
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
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 767px) {
      dialog.use-modal-in-mobile {
        border-radius: 1rem 1rem 0 0;
        transition: all 200ms ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        max-height: 50svh;
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
          transition: opacity 200ms ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 768px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 768px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},a=(t,e,s,l)=>{for(var r=l>1?void 0:l?st(e,s):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(r=(l?g(e,s,r):g(r))||r);return l&&r&&it(e,s,r),r},A=(t,e,s)=>e.has(t)||$("Cannot "+s),o=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),M=(t,e,s,l)=>(A(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(A(t,e,"access private method"),s),d,L,_,w,c,b,u,C,E,N,O,T,k,x,y,v;let i=class extends U{constructor(){super(...arguments),p(this,d),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,p(this,_),p(this,w,!1),p(this,c),p(this,b,()=>{o(this,u).call(this,"cancel")&&(this.open=!1)}),p(this,u,t=>{const e=t==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:e,reason:t},bubbles:!1,composed:!1,cancelable:!0})}),p(this,C,t=>{t.stopPropagation(),t.preventDefault(),o(this,u).call(this,"close")&&(this.open=!1,setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250))}),p(this,k,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,o(this,u).call(this,"show")),t.key==="Escape"&&this.open&&o(this,b).call(this)}),p(this,x,t=>{t.preventDefault(),o(this,u).call(this,this.open?"close":"show")&&(this.open=!this.open)}),p(this,y,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),p(this,v,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect();!(r.top<=e.clientY&&e.clientY<=r.top+r.height&&r.left<=e.clientX&&e.clientX<=r.left+r.width)&&o(this,u).call(this,"close")&&(this.open=!1)}})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,d,E).call(this),f(this,d,O).call(this)}_handleAnchorChanged(){f(this,d,T).call(this)}connectedCallback(){super.connectedCallback(),J.instance.apply(this,"gds-popover"),f(this,d,E).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(o(this,b).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e!==this&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,d,N).call(this)}render(){return G`<slot
        name="trigger"
        @slotchange=${f(this,d,L)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${F({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&o(this,b).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${o(this,C)}
              class="close"
              label="${B("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const t=(this.nonmodal?o(this,c):this._elDialog)||document;this.updateComplete.then(()=>{var e,s,l,r;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(l=this._elDialog)==null||l.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),this.autofocus&&(o(this,y).call(this),setTimeout(()=>o(this,y).call(this),250)),requestAnimationFrame(()=>{o(this,c)&&(o(this,c).show=!0)}),setTimeout(()=>t.addEventListener("click",o(this,v)),0)):((r=this._elDialog)==null||r.close(),t.removeEventListener("click",o(this,v)),o(this,c)&&(o(this,c).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||M(this,c,t.querySelector(this.backdrop))}_handleMobileLayout(t){var s,l,r;var e;M(this,w,t),t&&!this.disableMobileStyles?((e=o(this,_))==null||e.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(l=this._elDialog)==null||l.style.removeProperty("top"),(r=this._elDialog)==null||r.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var h;this.open&&((h=this._elDialog)==null||h.showModal())})):this.updateComplete.then(()=>{f(this,d,T).call(this)})}};d=new WeakSet;L=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};_=new WeakMap;w=new WeakMap;c=new WeakMap;b=new WeakMap;u=new WeakMap;C=new WeakMap;E=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",o(this,k)),(e=this._trigger)==null||e.addEventListener("click",o(this,x))};N=function(){var e,s;var t;(e=this._trigger)==null||e.removeEventListener("keydown",o(this,k)),(s=this._trigger)==null||s.removeEventListener("click",o(this,x)),(t=o(this,_))==null||t.call(this)};O=function(){var t;if(this._trigger){(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const l=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(l)===null&&this._trigger.setAttribute(l,this.popupRole)}};T=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||o(this,w)&&!this.disableMobileStyles||(o(this,_)&&o(this,_).call(this),M(this,_,q(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),Q(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:l})=>Object.assign(e.style,{left:`${s}px`,top:`${l}px`}))})))};k=new WeakMap;x=new WeakMap;y=new WeakMap;v=new WeakMap;i.styles=I(et);i.DefaultMiddleware=[X(8),Y({crossAxis:!0,padding:8})];a([n({type:Boolean,reflect:!0})],i.prototype,"open",2);a([n({attribute:"popup-role"})],i.prototype,"popupRole",2);a([n({attribute:!1})],i.prototype,"triggerRef",2);a([n({attribute:!1})],i.prototype,"anchorRef",2);a([n()],i.prototype,"label",2);a([n()],i.prototype,"placement",2);a([n({type:Boolean})],i.prototype,"disableMobileStyles",2);a([n({type:Boolean})],i.prototype,"autofocus",2);a([n({attribute:!1})],i.prototype,"calcMinWidth",2);a([n({attribute:!1})],i.prototype,"calcMaxWidth",2);a([n({attribute:!1})],i.prototype,"calcMinHeight",2);a([n({attribute:!1})],i.prototype,"calcMaxHeight",2);a([n({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);a([n()],i.prototype,"backdrop",2);a([n({attribute:!1})],i.prototype,"floatingUIMiddleware",2);a([D()],i.prototype,"_trigger",2);a([D()],i.prototype,"_anchor",2);a([D()],i.prototype,"_isVirtKbVisible",2);a([S("slot:not([name])")],i.prototype,"_elDefaultSlot",2);a([S('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);a([S("dialog")],i.prototype,"_elDialog",2);a([m("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);a([m("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);a([m("_trigger")],i.prototype,"_handleTriggerChanged",1);a([m("_anchor")],i.prototype,"_handleAnchorChanged",1);a([m("open")],i.prototype,"_handleOpenChange",1);a([m("backdrop")],i.prototype,"_handleBackdropChange",1);a([tt("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=a([z("gds-popover",{dependsOn:[j]}),H()],i);export{i as G};
