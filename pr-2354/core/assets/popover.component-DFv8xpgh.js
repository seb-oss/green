import{m as H,l as K}from"./runtime-CNluP0A8.js";import{i as I,r as U}from"./lit-element-Bx14lxc-.js";import{n,r as S,G,h as z,g as F}from"./gds-element-DKcDvDP5.js";import{a as W}from"./query-p8xgzTDt.js";import{e as X}from"./class-map-CXsQwv0r.js";import{o as Y,s as q,a as Q,c as J}from"./floating-ui.dom-BmFOYU71.js";import{T as Z}from"./transitional-styles-unlae3Cp.js";import{w as m}from"./watch-tFciLXSI.js";import{i as j}from"./tokens.style-Cct4pBht.js";import{I as tt}from"./cross-small.component-D9XbEW7U.js";function et(t){return(e,s,l)=>{if(j)return;const r=window.matchMedia(t),p=e.connectedCallback,f=e.disconnectedCallback;e.connectedCallback=function(){var R;p==null||p.call(this);const P=B=>{var L;(L=l.value)==null||L.call(this,B.matches)};r.addEventListener("change",P),this.disconnectedCallback=function(){f==null||f.call(this),r.removeEventListener("change",P)},(R=l.value)==null||R.call(this,r.matches)}}}const it=I`
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
      overscroll-behavior: contain;
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
`;var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},o=(t,e,s,l)=>{for(var r=l>1?void 0:l?at(e,s):e,p=t.length-1,f;p>=0;p--)(f=t[p])&&(r=(l?f(e,s,r):f(r))||r);return l&&r&&st(e,s,r),r},A=(t,e,s)=>e.has(t)||$("Cannot "+s),a=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),M=(t,e,s,l)=>(A(t,e,"write to private field"),e.set(t,s),s),u=(t,e,s)=>(A(t,e,"access private method"),s),d,N,_,k,c,b,g,C,T,O,V,D,x,E,v,w,y;let i=class extends G{constructor(){super(...arguments),h(this,d),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,_),h(this,k,!1),h(this,c),h(this,b,()=>{a(this,g).call(this,"cancel")&&(this.open=!1)}),h(this,g,t=>{const e=t==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:e,reason:t},bubbles:!1,composed:!1,cancelable:!0})}),h(this,C,t=>{t.stopPropagation(),t.preventDefault(),a(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250))}),h(this,x,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,a(this,g).call(this,"show")),t.key==="Escape"&&this.open&&a(this,b).call(this)}),h(this,E,t=>{t.preventDefault(),a(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),h(this,v,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),h(this,w,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect();!(r.top<=e.clientY&&e.clientY<=r.top+r.height&&r.left<=e.clientX&&e.clientX<=r.left+r.width)&&a(this,g).call(this,"close")&&(this.open=!1)}}),h(this,y,()=>{this.open&&window.innerWidth>767&&a(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){u(this,d,T).call(this),u(this,d,V).call(this)}_handleAnchorChanged(){u(this,d,D).call(this)}connectedCallback(){super.connectedCallback(),Z.instance.apply(this,"gds-popover"),u(this,d,T).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(a(this,b).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e!==this&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),u(this,d,O).call(this),window.removeEventListener("scroll",a(this,y))}render(){return z`<slot
        name="trigger"
        @slotchange=${u(this,d,N)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${X({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,b).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,C)}
              class="close"
              label="${H("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const t=(this.nonmodal?a(this,c):this._elDialog)||document;this.updateComplete.then(()=>{var e,s,l,r;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(l=this._elDialog)==null||l.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),this.autofocus&&(a(this,v).call(this),setTimeout(()=>a(this,v).call(this),250)),requestAnimationFrame(()=>{a(this,c)&&(a(this,c).show=!0)}),setTimeout(()=>t.addEventListener("click",a(this,w)),0),window.addEventListener("scroll",a(this,y),{passive:!0})):((r=this._elDialog)==null||r.close(),t.removeEventListener("click",a(this,w)),window.removeEventListener("scroll",a(this,y)),a(this,c)&&(a(this,c).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||M(this,c,t.querySelector(this.backdrop))}_handleMobileLayout(t){var s,l,r;var e;M(this,k,t),t&&!this.disableMobileStyles?((e=a(this,_))==null||e.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(l=this._elDialog)==null||l.style.removeProperty("top"),(r=this._elDialog)==null||r.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var p;this.open&&((p=this._elDialog)==null||p.showModal())})):this.updateComplete.then(()=>{u(this,d,D).call(this)})}};d=new WeakSet;N=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};_=new WeakMap;k=new WeakMap;c=new WeakMap;b=new WeakMap;g=new WeakMap;C=new WeakMap;T=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",a(this,x)),(e=this._trigger)==null||e.addEventListener("click",a(this,E))};O=function(){var e,s;var t;(e=this._trigger)==null||e.removeEventListener("keydown",a(this,x)),(s=this._trigger)==null||s.removeEventListener("click",a(this,E)),(t=a(this,_))==null||t.call(this)};V=function(){var t;if(this._trigger){(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const l=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(l)===null&&this._trigger.setAttribute(l,this.popupRole)}};D=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||a(this,k)&&!this.disableMobileStyles||(a(this,_)&&a(this,_).call(this),M(this,_,Q(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),J(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:l})=>Object.assign(e.style,{left:`${s}px`,top:`${l}px`}))})))};x=new WeakMap;E=new WeakMap;v=new WeakMap;w=new WeakMap;y=new WeakMap;i.styles=U(it);i.DefaultMiddleware=[Y(8),q({crossAxis:!0,padding:8})];o([n({type:Boolean,reflect:!0})],i.prototype,"open",2);o([n({attribute:"popup-role"})],i.prototype,"popupRole",2);o([n({attribute:!1})],i.prototype,"triggerRef",2);o([n({attribute:!1})],i.prototype,"anchorRef",2);o([n()],i.prototype,"label",2);o([n()],i.prototype,"placement",2);o([n({type:Boolean})],i.prototype,"disableMobileStyles",2);o([n({type:Boolean})],i.prototype,"autofocus",2);o([n({attribute:!1})],i.prototype,"calcMinWidth",2);o([n({attribute:!1})],i.prototype,"calcMaxWidth",2);o([n({attribute:!1})],i.prototype,"calcMinHeight",2);o([n({attribute:!1})],i.prototype,"calcMaxHeight",2);o([n({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);o([n()],i.prototype,"backdrop",2);o([n({attribute:!1})],i.prototype,"floatingUIMiddleware",2);o([S()],i.prototype,"_trigger",2);o([S()],i.prototype,"_anchor",2);o([S()],i.prototype,"_isVirtKbVisible",2);o([W("slot:not([name])")],i.prototype,"_elDefaultSlot",2);o([W('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);o([W("dialog")],i.prototype,"_elDialog",2);o([m("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);o([m("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);o([m("_trigger")],i.prototype,"_handleTriggerChanged",1);o([m("_anchor")],i.prototype,"_handleAnchorChanged",1);o([m("open")],i.prototype,"_handleOpenChange",1);o([m("backdrop")],i.prototype,"_handleBackdropChange",1);o([et("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=o([F("gds-popover",{dependsOn:[tt]}),K()],i);export{i as G};
