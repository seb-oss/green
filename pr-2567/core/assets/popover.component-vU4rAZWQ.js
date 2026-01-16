import{ag as H,i as I,n as r,I as S,d as A,a8 as b,J as K,a3 as U,a as G,O as z,h as F,g as X}from"./iframe-DuVF6zVk.js";import{l as Y}from"./localized-decorator-DcHh67-O.js";import{o as q,s as Q,a as J,c as Z}from"./floating-ui.dom-B1INwmQZ.js";import{I as j}from"./cross-small.component-Ir0LI5dt.js";function tt(t){return(e,s,n)=>{if(H)return;const l=window.matchMedia(t),h=e.connectedCallback,c=e.disconnectedCallback;e.connectedCallback=function(){var R;h==null||h.call(this);const P=B=>{var L;(L=n.value)==null||L.call(this,B.matches)};l.addEventListener("change",P),this.disconnectedCallback=function(){c==null||c.call(this),l.removeEventListener("change",P)},(R=n.value)==null||R.call(this,l.matches)}}}const et=I`
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
        var(--gds-sys-color-border-subtle-01);
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
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,O=t=>{throw TypeError(t)},o=(t,e,s,n)=>{for(var l=n>1?void 0:n?st(e,s):e,h=t.length-1,c;h>=0;h--)(c=t[h])&&(l=(n?c(e,s,l):c(l))||l);return n&&l&&it(e,s,l),l},W=(t,e,s)=>e.has(t)||O("Cannot "+s),a=(t,e,s)=>(W(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?O("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),x=(t,e,s,n)=>(W(t,e,"write to private field"),e.set(t,s),s),u=(t,e,s)=>(W(t,e,"access private method"),s),p,N,_,k,g,y,f,C,T,V,$,D,E,M,v,w,m;function at(t,e,s){t.setAttribute("aria-expanded",String(e));const n=["A","BUTTON","INPUT","TEXTAREA"];t.nodeName.startsWith("GDS-")||n.includes(t.nodeName)||(t.setAttribute("tabindex","0"),t.setAttribute("role","button"));const h=t.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";t.getAttribute(h)===null&&t.setAttribute(h,s)}let i=class extends K{constructor(){super(...arguments),d(this,p),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,d(this,_),d(this,k,!1),d(this,g),d(this,y,()=>{a(this,f).call(this,"cancel")&&(this.open=!1)}),d(this,f,t=>{const e=t==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:e,reason:t},bubbles:!1,composed:!1,cancelable:!0})}),d(this,C,t=>{t.stopPropagation(),t.preventDefault(),a(this,f).call(this,"close")&&(this.open=!1,setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250))}),d(this,E,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,a(this,f).call(this,"show")),t.key==="Escape"&&this.open&&a(this,y).call(this)}),d(this,M,t=>{t.preventDefault(),a(this,f).call(this,this.open?"close":"show")&&(this.open=!this.open)}),d(this,v,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),d(this,w,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const l=s.getBoundingClientRect();!(l.top<=e.clientY&&e.clientY<=l.top+l.height&&l.left<=e.clientX&&e.clientX<=l.left+l.width)&&a(this,f).call(this,"close")&&(this.open=!1)}}),d(this,m,()=>{this.open&&window.innerWidth>767&&a(this,f).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){u(this,p,T).call(this),u(this,p,$).call(this)}_handleAnchorChanged(){u(this,p,D).call(this)}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-popover"),u(this,p,T).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(a(this,y).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e!==this&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),u(this,p,V).call(this),window.removeEventListener("scroll",a(this,m))}render(){return F`<slot
        name="trigger"
        @slotchange=${u(this,p,N)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${G({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,y).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,C)}
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
      </div>`}_handleOpenChange(){const t=(this.nonmodal?a(this,g):this._elDialog)||document;this.updateComplete.then(()=>{var e,s,n,l;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(n=this._elDialog)==null||n.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),this.autofocus&&(a(this,v).call(this),setTimeout(()=>a(this,v).call(this),250)),requestAnimationFrame(()=>{a(this,g)&&(a(this,g).show=!0)}),setTimeout(()=>t.addEventListener("click",a(this,w)),0),window.addEventListener("scroll",a(this,m),{passive:!0})):((l=this._elDialog)==null||l.close(),t.removeEventListener("click",a(this,w)),window.removeEventListener("scroll",a(this,m)),a(this,g)&&(a(this,g).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||x(this,g,t.querySelector(this.backdrop))}_handleMobileLayout(t){var s,n,l,h;var e;x(this,k,t),t&&!this.disableMobileStyles?((e=a(this,_))==null||e.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(n=this._elDialog)==null||n.style.removeProperty("top"),(l=this._elDialog)==null||l.style.removeProperty("minWidth"),(h=this._elDialog)==null||h.style.removeProperty("min-width"),this.updateComplete.then(()=>{var c;this.open&&((c=this._elDialog)==null||c.showModal())})):this.updateComplete.then(()=>{u(this,p,D).call(this)})}};p=new WeakSet;N=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};_=new WeakMap;k=new WeakMap;g=new WeakMap;y=new WeakMap;f=new WeakMap;C=new WeakMap;T=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",a(this,E)),(e=this._trigger)==null||e.addEventListener("click",a(this,M))};V=function(){var e,s;var t;(e=this._trigger)==null||e.removeEventListener("keydown",a(this,E)),(s=this._trigger)==null||s.removeEventListener("click",a(this,M)),(t=a(this,_))==null||t.call(this)};$=function(){this._trigger&&at(this._trigger,this.open,this.popupRole)};D=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||a(this,k)&&!this.disableMobileStyles||(a(this,_)&&a(this,_).call(this),x(this,_,J(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),Z(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(e.style,{left:`${s}px`,top:`${n}px`}))})))};E=new WeakMap;M=new WeakMap;v=new WeakMap;w=new WeakMap;m=new WeakMap;i.styles=et;i.DefaultMiddleware=[q(8),Q({crossAxis:!0,padding:8})];o([r({type:Boolean,reflect:!0})],i.prototype,"open",2);o([r({attribute:"popup-role"})],i.prototype,"popupRole",2);o([r({attribute:!1})],i.prototype,"triggerRef",2);o([r({attribute:!1})],i.prototype,"anchorRef",2);o([r()],i.prototype,"label",2);o([r()],i.prototype,"placement",2);o([r({type:Boolean})],i.prototype,"disableMobileStyles",2);o([r({type:Boolean})],i.prototype,"autofocus",2);o([r({attribute:!1})],i.prototype,"calcMinWidth",2);o([r({attribute:!1})],i.prototype,"calcMaxWidth",2);o([r({attribute:!1})],i.prototype,"calcMinHeight",2);o([r({attribute:!1})],i.prototype,"calcMaxHeight",2);o([r({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);o([r()],i.prototype,"backdrop",2);o([r({attribute:!1})],i.prototype,"floatingUIMiddleware",2);o([S()],i.prototype,"_trigger",2);o([S()],i.prototype,"_anchor",2);o([S()],i.prototype,"_isVirtKbVisible",2);o([A("slot:not([name])")],i.prototype,"_elDefaultSlot",2);o([A('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);o([A("dialog")],i.prototype,"_elDialog",2);o([b("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);o([b("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);o([b("_trigger")],i.prototype,"_handleTriggerChanged",1);o([b("_anchor")],i.prototype,"_handleAnchorChanged",1);o([b("open")],i.prototype,"_handleOpenChange",1);o([b("backdrop")],i.prototype,"_handleBackdropChange",1);o([tt("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=o([X("gds-popover",{dependsOn:[j]}),Y()],i);export{i as G,at as a,tt as w};
