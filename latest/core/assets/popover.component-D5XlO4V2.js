import{aj as H,i as I,n as r,H as D,f as A,a7 as y,g as K,I as U,J as G,a1 as F,a as z,O as X,h as Y}from"./iframe-BfjVQBhS.js";import{l as q}from"./localized-decorator-BcwMFhzh.js";import{o as Q,s as J,a as j,c as Z}from"./floating-ui.dom-Ceeo7fpE.js";import{I as ee}from"./cross-small.component-LD7gsb2L.js";function te(e){return(t,s,n)=>{if(H)return;const l=window.matchMedia(e),h=t.connectedCallback,f=t.disconnectedCallback;t.connectedCallback=function(){var R;h==null||h.call(this);const P=$=>{var L;(L=n.value)==null||L.call(this,$.matches)};l.addEventListener("change",P),this.disconnectedCallback=function(){f==null||f.call(this),l.removeEventListener("change",P)},(R=n.value)==null||R.call(this,l.matches)}}}const ie=I`
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
`;var se=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},o=(e,t,s,n)=>{for(var l=n>1?void 0:n?ae(t,s):t,h=e.length-1,f;h>=0;h--)(f=e[h])&&(l=(n?f(t,s,l):f(l))||l);return n&&l&&se(t,s,l),l},W=(e,t,s)=>t.has(e)||O("Cannot "+s),a=(e,t,s)=>(W(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,n)=>(W(e,t,"write to private field"),t.set(e,s),s),u=(e,t,s)=>(W(e,t,"access private method"),s),c,B,b,k,p,_,g,x,S,N,V,T,E,C,v,w,m;function oe(e,t,s){e.setAttribute("aria-expanded",String(t));const n=["A","BUTTON","INPUT","TEXTAREA"];e.nodeName.startsWith("GDS-")||n.includes(e.nodeName)||(e.setAttribute("tabindex","0"),e.setAttribute("role","button"));const h=e.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";e.getAttribute(h)===null&&e.setAttribute(h,s)}let i=class extends G{constructor(){super(...arguments),d(this,c),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,d(this,b),d(this,k,!1),d(this,p),d(this,_,()=>{a(this,g).call(this,"cancel")&&(this.open=!1)}),d(this,g,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),d(this,x,e=>{e.stopPropagation(),e.preventDefault(),a(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250))}),d(this,E,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,g).call(this,"show")),e.key==="Escape"&&this.open&&a(this,_).call(this)}),d(this,C,e=>{e.preventDefault(),a(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),d(this,v,()=>{var t;const e=(t=this._elDefaultSlot)==null?void 0:t.assignedElements()[0];this.updateComplete.then(()=>{e==null||e.focus()})}),d(this,w,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const l=s.getBoundingClientRect();!(l.top<=t.clientY&&t.clientY<=l.top+l.height&&l.left<=t.clientX&&t.clientX<=l.left+l.width)&&a(this,g).call(this,"close")&&(this.open=!1)}}),d(this,m,()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&a(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){u(this,c,S).call(this),u(this,c,V).call(this)}_handleAnchorChanged(){u(this,c,T).call(this)}connectedCallback(){super.connectedCallback(),F.instance.apply(this,"gds-popover"),u(this,c,S).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,_).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),u(this,c,N).call(this),window.removeEventListener("scroll",a(this,m))}render(){return Y`<slot
        name="trigger"
        @slotchange=${u(this,c,B)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${z({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,_).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,x)}
              class="close"
              label="${X("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,p):this._elDialog)||document;this.updateComplete.then(()=>{var t,s,n,l;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(n=this._elDialog)==null||n.setAttribute("open","true"):(s=this._elDialog)==null||s.showModal(),this.autofocus&&(a(this,v).call(this),setTimeout(()=>a(this,v).call(this),250)),requestAnimationFrame(()=>{a(this,p)&&(a(this,p).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,w)),0),window.addEventListener("scroll",a(this,m),{passive:!0})):((l=this._elDialog)==null||l.close(),e.removeEventListener("click",a(this,w)),window.removeEventListener("scroll",a(this,m)),a(this,p)&&(a(this,p).show=!1))})}_handleBackdropChange(){var t;const e=(t=this.parentElement)==null?void 0:t.getRootNode();!this.backdrop||!e||M(this,p,e.querySelector(this.backdrop))}_handleMobileLayout(e){var s,n,l,h;var t;M(this,k,e),e&&!this.disableMobileStyles?((t=a(this,b))==null||t.call(this),(s=this._elDialog)==null||s.style.removeProperty("left"),(n=this._elDialog)==null||n.style.removeProperty("top"),(l=this._elDialog)==null||l.style.removeProperty("minWidth"),(h=this._elDialog)==null||h.style.removeProperty("min-width")):this.updateComplete.then(()=>{u(this,c,T).call(this)})}};c=new WeakSet;B=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};b=new WeakMap;k=new WeakMap;p=new WeakMap;_=new WeakMap;g=new WeakMap;x=new WeakMap;S=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",a(this,E)),(t=this._trigger)==null||t.addEventListener("click",a(this,C))};N=function(){var t,s;var e;(t=this._trigger)==null||t.removeEventListener("keydown",a(this,E)),(s=this._trigger)==null||s.removeEventListener("click",a(this,C)),(e=a(this,b))==null||e.call(this)};V=function(){this._trigger&&oe(this._trigger,this.open,this.popupRole)};T=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,k)&&!this.disableMobileStyles||(a(this,b)&&a(this,b).call(this),M(this,b,j(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Z(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};E=new WeakMap;C=new WeakMap;v=new WeakMap;w=new WeakMap;m=new WeakMap;i.styles=ie;i.DefaultMiddleware=[Q(8),J({crossAxis:!0,padding:8})];o([r({type:Boolean,reflect:!0})],i.prototype,"open",2);o([r({attribute:"popup-role"})],i.prototype,"popupRole",2);o([r({attribute:!1})],i.prototype,"triggerRef",2);o([r({attribute:!1})],i.prototype,"anchorRef",2);o([r()],i.prototype,"label",2);o([r()],i.prototype,"placement",2);o([r({type:Boolean})],i.prototype,"disableMobileStyles",2);o([r({type:Boolean})],i.prototype,"disableScrollClose",2);o([r({type:Boolean})],i.prototype,"autofocus",2);o([r({attribute:!1})],i.prototype,"calcMinWidth",2);o([r({attribute:!1})],i.prototype,"calcMaxWidth",2);o([r({attribute:!1})],i.prototype,"calcMinHeight",2);o([r({attribute:!1})],i.prototype,"calcMaxHeight",2);o([r({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);o([r()],i.prototype,"backdrop",2);o([r({attribute:!1})],i.prototype,"floatingUIMiddleware",2);o([D()],i.prototype,"_trigger",2);o([D()],i.prototype,"_anchor",2);o([D()],i.prototype,"_isVirtKbVisible",2);o([A("slot:not([name])")],i.prototype,"_elDefaultSlot",2);o([A('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);o([A("dialog")],i.prototype,"_elDialog",2);o([y("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);o([y("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);o([y("_trigger")],i.prototype,"_handleTriggerChanged",1);o([y("_anchor")],i.prototype,"_handleAnchorChanged",1);o([y("open")],i.prototype,"_handleOpenChange",1);o([y("backdrop")],i.prototype,"_handleBackdropChange",1);o([te("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=o([K("gds-popover",{dependsOn:[ee]}),U({labelledBy:"dialog",describedBy:"dialog"}),q()],i);export{i as G,oe as a,te as w};
