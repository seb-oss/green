import{i as U,r as I}from"./lit-element-1d72f0ce.js";import{n as h,r as R,g as G,G as F,h as X}from"./gds-element-86064462.js";import{a as P}from"./query-b9d3c2af.js";import{R as z}from"./class-map-f04c1558.js";import{m as Y}from"./runtime-c06dc943.js";import{o as q,f as Q,a as J,c as Z}from"./floating-ui.dom-7bad3c97.js";import{w as _}from"./watch-c4961afe.js";import{T as j}from"./transitional-styles-8ea9588a.js";import"./cross-small-7e719cb3.js";function tt(t){return(e,i,n)=>{const r=window.matchMedia(t),p=e.connectedCallback,d=e.disconnectedCallback;e.connectedCallback=function(){var V;p==null||p.call(this);const N=H=>{var O;(O=n.value)==null||O.call(this,H.matches)};r.addEventListener("change",N),this.disconnectedCallback=function(){d==null||d.call(this),r.removeEventListener("change",N)},(V=n.value)==null||V.call(this,r.matches)}}}const et=U`
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

    header {
      display: none;
    }

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,a=(t,e,i,n)=>{for(var r=n>1?void 0:n?st(e,i):e,p=t.length-1,d;p>=0;p--)(d=t[p])&&(r=(n?d(e,i,r):d(r))||r);return n&&r&&it(e,i,r),r},L=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},o=(t,e,i)=>(L(t,e,"read from private field"),i?i.call(t):e.get(t)),l=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},M=(t,e,i,n)=>(L(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),g=(t,e,i)=>(L(t,e,"access private method"),i),T,$,u,w,c,b,f,x,m,S,W,K,D,B,y,A,E,C,v,k;let s=class extends F{constructor(){super(...arguments),l(this,T),l(this,m),l(this,W),l(this,D),l(this,y),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[q(8),Q()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,l(this,u,void 0),l(this,w,!1),l(this,c,void 0),l(this,b,()=>{this.open=!1,o(this,f).call(this,"cancel")}),l(this,f,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:t},bubbles:!1,composed:!1}))}),l(this,x,t=>{t.stopPropagation(),t.preventDefault(),this.open=!1,o(this,f).call(this,"close"),setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250)}),l(this,E,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,o(this,f).call(this,"show")),t.key==="Escape"&&this.open&&o(this,b).call(this)}),l(this,C,t=>{t.preventDefault(),this.open=!this.open,o(this,f).call(this,this.open?"show":"close")}),l(this,v,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),l(this,k,t=>{const e=t,i=this._elDialog;if((e.clientX>0||e.clientY>0)&&i&&this.open){const r=i.getBoundingClientRect();r.top<=e.clientY&&e.clientY<=r.top+r.height&&r.left<=e.clientX&&e.clientX<=r.left+r.width||(this.open=!1,o(this,f).call(this,"close"))}})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){g(this,m,S).call(this),g(this,D,B).call(this)}_handleAnchorChanged(){g(this,y,A).call(this)}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-popover"),g(this,m,S).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(o(this,b).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),g(this,W,K).call(this)}render(){return X`<slot
        name="trigger"
        @slotchange=${g(this,T,$)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${z({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&o(this,b).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${o(this,x)}
              class="close"
              label="${Y("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const t=(this.nonmodal?o(this,c):this._elDialog)||document;this.updateComplete.then(()=>{var e,i,n,r;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(n=this._elDialog)==null||n.setAttribute("open","true"):(i=this._elDialog)==null||i.showModal(),o(this,v).call(this),requestAnimationFrame(()=>{o(this,c)&&(o(this,c).show=!0)}),setTimeout(()=>o(this,v).call(this),250),setTimeout(()=>t.addEventListener("click",o(this,k)),0)):((r=this._elDialog)==null||r.close(),t.removeEventListener("click",o(this,k)),o(this,c)&&(o(this,c).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||M(this,c,t.querySelector(this.backdrop))}_handleMobileLayout(t){var i,n,r;var e;M(this,w,t),t&&!this.disableMobileStyles?((e=o(this,u))==null||e.call(this),(i=this._elDialog)==null||i.style.removeProperty("left"),(n=this._elDialog)==null||n.style.removeProperty("top"),(r=this._elDialog)==null||r.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var p;this.open&&((p=this._elDialog)==null||p.showModal())})):this.updateComplete.then(()=>{g(this,y,A).call(this)})}};T=new WeakSet;$=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;w=new WeakMap;c=new WeakMap;b=new WeakMap;f=new WeakMap;x=new WeakMap;m=new WeakSet;S=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",o(this,E)),(e=this._trigger)==null||e.addEventListener("click",o(this,C))};W=new WeakSet;K=function(){var e,i;var t;(e=this._trigger)==null||e.removeEventListener("keydown",o(this,E)),(i=this._trigger)==null||i.removeEventListener("click",o(this,C)),(t=o(this,u))==null||t.call(this)};D=new WeakSet;B=function(){var t;if(this._trigger){(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const n=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(n)===null&&this._trigger.setAttribute(n,this.popupRole)}};y=new WeakSet;A=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||o(this,w)&&!this.disableMobileStyles||(o(this,u)&&o(this,u).call(this),M(this,u,J(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),Z(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:i,y:n})=>Object.assign(e.style,{left:`${i}px`,top:`${n}px`}))})))};E=new WeakMap;C=new WeakMap;v=new WeakMap;k=new WeakMap;s.styles=I(et);a([h({type:Boolean,reflect:!0})],s.prototype,"open",2);a([h({attribute:"popup-role"})],s.prototype,"popupRole",2);a([h({attribute:!1})],s.prototype,"triggerRef",2);a([h({attribute:!1})],s.prototype,"anchorRef",2);a([h()],s.prototype,"label",2);a([h()],s.prototype,"placement",2);a([h({type:Boolean})],s.prototype,"disableMobileStyles",2);a([h({attribute:!1})],s.prototype,"calcMinWidth",2);a([h({attribute:!1})],s.prototype,"calcMaxWidth",2);a([h({attribute:!1})],s.prototype,"calcMinHeight",2);a([h({attribute:!1})],s.prototype,"calcMaxHeight",2);a([h({type:Boolean})],s.prototype,"nonmodal",2);a([h()],s.prototype,"backdrop",2);a([h({attribute:!1})],s.prototype,"floatingUIMiddleware",2);a([R()],s.prototype,"_trigger",2);a([R()],s.prototype,"_anchor",2);a([R()],s.prototype,"_isVirtKbVisible",2);a([P("slot:not([name])")],s.prototype,"_elDefaultSlot",2);a([P('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);a([P("dialog")],s.prototype,"_elDialog",2);a([_("triggerRef")],s.prototype,"_handleTriggerRefChanged",1);a([_("anchorRef")],s.prototype,"_handleAnchorRefChanged",1);a([_("_trigger")],s.prototype,"_handleTriggerChanged",1);a([_("_anchor")],s.prototype,"_handleAnchorChanged",1);a([_("open")],s.prototype,"_handleOpenChange",1);a([_("backdrop")],s.prototype,"_handleBackdropChange",1);a([tt("(max-width: 576px)")],s.prototype,"_handleMobileLayout",1);s=a([G("gds-popover")],s);
