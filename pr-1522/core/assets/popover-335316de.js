import{i as U,r as F,x as X}from"./lit-element-52f3de9a.js";import{g as G,n as p,r as P,G as z}from"./gds-element-d19a6729.js";import{a as R}from"./query-b9d3c2af.js";import{e as Y}from"./class-map-531a0fa6.js";import{m as q}from"./lit-localize-87611c26.js";import{o as Q,f as Z,a as j,c as J}from"./floating-ui.dom-373c8bf6.js";import{w as _}from"./watch-c4961afe.js";import{T as ee}from"./transitional-styles-ec463408.js";import{G as te}from"./icon-543da64a.js";function ie(e){return(t,i,r)=>{const a=window.matchMedia(e),n=t.connectedCallback,c=t.disconnectedCallback;t.connectedCallback=function(){var V;n==null||n.call(this);const O=I=>{var N;(N=r.value)==null||N.call(this,I.matches)};a.addEventListener("change",O),this.disconnectedCallback=function(){c==null||c.call(this),a.removeEventListener("change",O)},(V=r.value)==null||V.call(this,a.matches)}}}var se=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,oe=(e,t,i,r)=>{for(var a=r>1?void 0:r?ae(t,i):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(a=(r?c(t,i,a):c(a))||a);return r&&a&&se(t,i,a),a};let m=class extends te{};m._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';m._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';m._name="cross small";m=oe([G("gds-icon-cross-small")],m);const re=U`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
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

    header {
      display: none;
    }

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`;var le=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,o=(e,t,i,r)=>{for(var a=r>1?void 0:r?ne(t,i):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(a=(r?c(t,i,a):c(a))||a);return r&&a&&le(t,i,a),a},$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l=(e,t,i)=>($(e,t,"read from private field"),i?i.call(e):t.get(e)),h=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},T=(e,t,i,r)=>($(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),d=(e,t,i)=>($(e,t,"access private method"),i),S,K,u,k,g,b,f,x,y,W,D,B,A,H,v,L,E,M,w,C;let s=class extends z{constructor(){super(...arguments),h(this,S),h(this,y),h(this,D),h(this,A),h(this,v),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[Q(8),Z()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,u,void 0),h(this,k,!1),h(this,g,void 0),h(this,b,()=>{this.open=!1,l(this,f).call(this,"cancel")}),h(this,f,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),h(this,x,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,l(this,f).call(this,"close"),setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250)}),h(this,E,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,l(this,f).call(this,"show")),e.key==="Escape"&&this.open&&l(this,b).call(this)}),h(this,M,e=>{e.preventDefault(),this.open=!this.open,l(this,f).call(this,this.open?"show":"close")}),h(this,w,()=>{var t;const e=(t=this._elDefaultSlot)==null?void 0:t.assignedElements()[0];this.updateComplete.then(()=>{e==null||e.focus()})}),h(this,C,e=>{const t=e,i=this._elDialog;if((t.clientX>0||t.clientY>0)&&i&&this.open){const a=i.getBoundingClientRect();a.top<=t.clientY&&t.clientY<=a.top+a.height&&a.left<=t.clientX&&t.clientX<=a.left+a.width||(this.open=!1,l(this,f).call(this,"close"))}})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){d(this,y,W).call(this),d(this,A,H).call(this)}_handleAnchorChanged(){d(this,v,L).call(this)}connectedCallback(){super.connectedCallback(),ee.instance.apply(this,"gds-popover"),d(this,y,W).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(l(this,b).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),d(this,D,B).call(this)}render(){return X`<slot
        name="trigger"
        @slotchange=${d(this,S,K)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Y({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&l(this,b).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${l(this,x)}
              class="close"
              label="${q("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{var e,t,i,r;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(i=this._elDialog)==null||i.setAttribute("open","true"):(t=this._elDialog)==null||t.showModal(),l(this,w).call(this),requestAnimationFrame(()=>{l(this,g)&&(l(this,g).show=!0)}),setTimeout(()=>l(this,w).call(this),250),setTimeout(()=>document.addEventListener("click",l(this,C)),0)):((r=this._elDialog)==null||r.close(),document.removeEventListener("click",l(this,C)),l(this,g)&&(l(this,g).show=!1))})}_handleBackdropChange(){var t;const e=(t=this.parentElement)==null?void 0:t.getRootNode();!this.backdrop||!e||T(this,g,e.querySelector(this.backdrop))}_handleMobileLayout(e){var i,r,a;var t;T(this,k,e),e&&!this.disableMobileStyles?((t=l(this,u))==null||t.call(this),(i=this._elDialog)==null||i.style.removeProperty("left"),(r=this._elDialog)==null||r.style.removeProperty("top"),(a=this._elDialog)==null||a.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var n;this.open&&((n=this._elDialog)==null||n.showModal())})):this.updateComplete.then(()=>{d(this,v,L).call(this)})}};S=new WeakSet;K=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;k=new WeakMap;g=new WeakMap;b=new WeakMap;f=new WeakMap;x=new WeakMap;y=new WeakSet;W=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",l(this,E)),(t=this._trigger)==null||t.addEventListener("click",l(this,M))};D=new WeakSet;B=function(){var t,i;var e;(t=this._trigger)==null||t.removeEventListener("keydown",l(this,E)),(i=this._trigger)==null||i.removeEventListener("click",l(this,M)),(e=l(this,u))==null||e.call(this)};A=new WeakSet;H=function(){var e;if(this._trigger){(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const r=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(r)===null&&this._trigger.setAttribute(r,this.popupRole)}};v=new WeakSet;L=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||l(this,k)&&!this.disableMobileStyles||(l(this,u)&&l(this,u).call(this),T(this,u,j(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),J(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:i,y:r})=>Object.assign(t.style,{left:`${i}px`,top:`${r}px`}))})))};E=new WeakMap;M=new WeakMap;w=new WeakMap;C=new WeakMap;s.styles=F(re);o([p({type:Boolean,reflect:!0})],s.prototype,"open",2);o([p({attribute:"popup-role"})],s.prototype,"popupRole",2);o([p({attribute:!1})],s.prototype,"triggerRef",2);o([p({attribute:!1})],s.prototype,"anchorRef",2);o([p()],s.prototype,"label",2);o([p()],s.prototype,"placement",2);o([p({type:Boolean})],s.prototype,"disableMobileStyles",2);o([p({attribute:!1})],s.prototype,"calcMinWidth",2);o([p({attribute:!1})],s.prototype,"calcMaxWidth",2);o([p({attribute:!1})],s.prototype,"calcMinHeight",2);o([p({attribute:!1})],s.prototype,"calcMaxHeight",2);o([p({type:Boolean})],s.prototype,"nonmodal",2);o([p()],s.prototype,"backdrop",2);o([p({attribute:!1})],s.prototype,"floatingUIMiddleware",2);o([P()],s.prototype,"_trigger",2);o([P()],s.prototype,"_anchor",2);o([P()],s.prototype,"_isVirtKbVisible",2);o([R("slot:not([name])")],s.prototype,"_elDefaultSlot",2);o([R('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);o([R("dialog")],s.prototype,"_elDialog",2);o([_("triggerRef")],s.prototype,"_handleTriggerRefChanged",1);o([_("anchorRef")],s.prototype,"_handleAnchorRefChanged",1);o([_("_trigger")],s.prototype,"_handleTriggerChanged",1);o([_("_anchor")],s.prototype,"_handleAnchorChanged",1);o([_("open")],s.prototype,"_handleOpenChange",1);o([_("backdrop")],s.prototype,"_handleBackdropChange",1);o([ie("(max-width: 576px)")],s.prototype,"_handleMobileLayout",1);s=o([G("gds-popover")],s);
