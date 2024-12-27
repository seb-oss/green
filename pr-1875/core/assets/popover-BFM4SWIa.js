import{m as K}from"./runtime-CMQcyTl6.js";import{l as B}from"./localized-decorator-B8fm5KIw.js";import{i as H,r as U}from"./lit-element-C_s9q329.js";import{n,r as D,g as G,G as I,h as F}from"./custom-element-scoping-b4lD3laR.js";import{a as S}from"./query-p8xgzTDt.js";import{e as X}from"./class-map-Bz98xO8-.js";import{o as z,f as Y,a as q,c as Q}from"./floating-ui.dom-BmFOYU71.js";import{T as J}from"./transitional-styles-DmRlLOuq.js";import{w as b}from"./watch-tFciLXSI.js";import"./cross-small-CgIxxlLH.js";function Z(t){return(e,i,l)=>{const r=window.matchMedia(t),h=e.connectedCallback,g=e.disconnectedCallback;e.connectedCallback=function(){var P;h==null||h.call(this);const A=O=>{var R;(R=l.value)==null||R.call(this,O.matches)};r.addEventListener("change",A),this.disconnectedCallback=function(){g==null||g.call(this),r.removeEventListener("change",A)},(P=l.value)==null||P.call(this,r.matches)}}}const j=H`
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
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,L=t=>{throw TypeError(t)},a=(t,e,i,l)=>{for(var r=l>1?void 0:l?et(e,i):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(r=(l?g(e,i,r):g(r))||r);return l&&r&&tt(e,i,r),r},W=(t,e,i)=>e.has(t)||L("Cannot "+i),o=(t,e,i)=>(W(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),M=(t,e,i,l)=>(W(t,e,"write to private field"),e.set(t,i),i),f=(t,e,i)=>(W(t,e,"access private method"),i),c,N,u,k,d,m,_,C,x,V,$,T,w,E,y,v;let s=class extends I{constructor(){super(...arguments),p(this,c),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[z(8),Y()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,p(this,u),p(this,k,!1),p(this,d),p(this,m,()=>{this.open=!1,o(this,_).call(this,"cancel")}),p(this,_,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:t},bubbles:!1,composed:!1}))}),p(this,C,t=>{t.stopPropagation(),t.preventDefault(),this.open=!1,o(this,_).call(this,"close"),setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250)}),p(this,w,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,o(this,_).call(this,"show")),t.key==="Escape"&&this.open&&o(this,m).call(this)}),p(this,E,t=>{t.preventDefault(),this.open=!this.open,o(this,_).call(this,this.open?"show":"close")}),p(this,y,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),p(this,v,t=>{const e=t,i=this._elDialog;if((e.clientX>0||e.clientY>0)&&i&&this.open){const r=i.getBoundingClientRect();r.top<=e.clientY&&e.clientY<=r.top+r.height&&r.left<=e.clientX&&e.clientX<=r.left+r.width||(this.open=!1,o(this,_).call(this,"close"))}})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,c,x).call(this),f(this,c,$).call(this)}_handleAnchorChanged(){f(this,c,T).call(this)}connectedCallback(){super.connectedCallback(),J.instance.apply(this,"gds-popover"),f(this,c,x).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(o(this,m).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,c,V).call(this)}render(){return F`<slot
        name="trigger"
        @slotchange=${f(this,c,N)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${X({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&o(this,m).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${o(this,C)}
              class="close"
              label="${K("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const t=(this.nonmodal?o(this,d):this._elDialog)||document;this.updateComplete.then(()=>{var e,i,l,r;(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(l=this._elDialog)==null||l.setAttribute("open","true"):(i=this._elDialog)==null||i.showModal(),o(this,y).call(this),requestAnimationFrame(()=>{o(this,d)&&(o(this,d).show=!0)}),setTimeout(()=>o(this,y).call(this),250),setTimeout(()=>t.addEventListener("click",o(this,v)),0)):((r=this._elDialog)==null||r.close(),t.removeEventListener("click",o(this,v)),o(this,d)&&(o(this,d).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||M(this,d,t.querySelector(this.backdrop))}_handleMobileLayout(t){var i,l,r;var e;M(this,k,t),t&&!this.disableMobileStyles?((e=o(this,u))==null||e.call(this),(i=this._elDialog)==null||i.style.removeProperty("left"),(l=this._elDialog)==null||l.style.removeProperty("top"),(r=this._elDialog)==null||r.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var h;this.open&&((h=this._elDialog)==null||h.showModal())})):this.updateComplete.then(()=>{f(this,c,T).call(this)})}};c=new WeakSet;N=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;k=new WeakMap;d=new WeakMap;m=new WeakMap;_=new WeakMap;C=new WeakMap;x=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",o(this,w)),(e=this._trigger)==null||e.addEventListener("click",o(this,E))};V=function(){var e,i;var t;(e=this._trigger)==null||e.removeEventListener("keydown",o(this,w)),(i=this._trigger)==null||i.removeEventListener("click",o(this,E)),(t=o(this,u))==null||t.call(this)};$=function(){var t;if(this._trigger){(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const l=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(l)===null&&this._trigger.setAttribute(l,this.popupRole)}};T=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||o(this,k)&&!this.disableMobileStyles||(o(this,u)&&o(this,u).call(this),M(this,u,q(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),Q(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:i,y:l})=>Object.assign(e.style,{left:`${i}px`,top:`${l}px`}))})))};w=new WeakMap;E=new WeakMap;y=new WeakMap;v=new WeakMap;s.styles=U(j);a([n({type:Boolean,reflect:!0})],s.prototype,"open",2);a([n({attribute:"popup-role"})],s.prototype,"popupRole",2);a([n({attribute:!1})],s.prototype,"triggerRef",2);a([n({attribute:!1})],s.prototype,"anchorRef",2);a([n()],s.prototype,"label",2);a([n()],s.prototype,"placement",2);a([n({type:Boolean})],s.prototype,"disableMobileStyles",2);a([n({attribute:!1})],s.prototype,"calcMinWidth",2);a([n({attribute:!1})],s.prototype,"calcMaxWidth",2);a([n({attribute:!1})],s.prototype,"calcMinHeight",2);a([n({attribute:!1})],s.prototype,"calcMaxHeight",2);a([n({type:Boolean})],s.prototype,"nonmodal",2);a([n()],s.prototype,"backdrop",2);a([n({attribute:!1})],s.prototype,"floatingUIMiddleware",2);a([D()],s.prototype,"_trigger",2);a([D()],s.prototype,"_anchor",2);a([D()],s.prototype,"_isVirtKbVisible",2);a([S("slot:not([name])")],s.prototype,"_elDefaultSlot",2);a([S('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);a([S("dialog")],s.prototype,"_elDialog",2);a([b("triggerRef")],s.prototype,"_handleTriggerRefChanged",1);a([b("anchorRef")],s.prototype,"_handleAnchorRefChanged",1);a([b("_trigger")],s.prototype,"_handleTriggerChanged",1);a([b("_anchor")],s.prototype,"_handleAnchorChanged",1);a([b("open")],s.prototype,"_handleOpenChange",1);a([b("backdrop")],s.prototype,"_handleBackdropChange",1);a([Z("(max-width: 576px)")],s.prototype,"_handleMobileLayout",1);s=a([G("gds-popover"),B()],s);
