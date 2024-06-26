import{i as G,r as U,x as X}from"./lit-element-2a5e401f.js";import{n as p,r as D,g as B,G as F}from"./gds-element-24e794df.js";import{a as A}from"./query-b9d3c2af.js";import{e as I}from"./class-map-43969d56.js";import{m as z}from"./lit-localize-87611c26.js";import{a as Y,c as Q,o as q,f as J}from"./floating-ui.dom-373c8bf6.js";import{w as u}from"./watch-c4961afe.js";import{T as Z}from"./transitional-styles-494a8762.js";import"./cross-small-3fee855f.js";function j(t){return(e,i,r)=>{const a=window.matchMedia(t),h=e.connectedCallback,c=e.disconnectedCallback;e.connectedCallback=function(){var L;h==null||h.call(this);const R=H=>{var V;(V=r.value)==null||V.call(this,H.matches)};a.addEventListener("change",R),this.disconnectedCallback=function(){c==null||c.call(this),a.removeEventListener("change",R)},(L=r.value)==null||L.call(this,a.matches)}}}const tt=G`
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

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`;var et=Object.defineProperty,it=Object.getOwnPropertyDescriptor,o=(t,e,i,r)=>{for(var a=r>1?void 0:r?it(e,i):e,h=t.length-1,c;h>=0;h--)(c=t[h])&&(a=(r?c(e,i,a):c(a))||a);return r&&a&&et(e,i,a),a},P=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},l=(t,e,i)=>(P(t,e,"read from private field"),i?i.call(t):e.get(t)),n=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$=(t,e,i,r)=>(P(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),g=(t,e,i)=>(P(t,e,"access private method"),i),C,N,f,w,_,d,M,b,T,x,K,S,O,m,W,E,k,y,v;let s=class extends F{constructor(){super(...arguments),n(this,C),n(this,b),n(this,x),n(this,S),n(this,m),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>"500px",this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,n(this,f,void 0),n(this,w,!1),n(this,_,()=>{this.open=!1,l(this,d).call(this,"cancel")}),n(this,d,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:t},bubbles:!1,composed:!1}))}),n(this,M,t=>{t.stopPropagation(),t.preventDefault(),this.open=!1,l(this,d).call(this,"close"),setTimeout(()=>{var e;return(e=this._trigger)==null?void 0:e.focus()},250)}),n(this,E,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,l(this,d).call(this,"show")),t.key==="Escape"&&this.open&&l(this,_).call(this)}),n(this,k,t=>{t.preventDefault(),this.open=!this.open,l(this,d).call(this,this.open?"show":"close")}),n(this,y,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t==null||t.focus()})}),n(this,v,t=>{const e=t,i=this._elDialog;if((e.clientX>0||e.clientY>0)&&i&&this.open){const a=i.getBoundingClientRect();a.top<=e.clientY&&e.clientY<=a.top+a.height&&a.left<=e.clientX&&e.clientX<=a.left+a.width||(e.stopPropagation(),this.open=!1,l(this,d).call(this,"close"))}})}_handleTriggerRefChanged(){var t;(t=this.triggerRef)==null||t.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){var t;(t=this.anchorRef)==null||t.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){g(this,b,T).call(this),g(this,S,O).call(this)}_handleAnchorChanged(){g(this,m,W).call(this)}connectedCallback(){super.connectedCallback(),Z.instance.apply(this,"gds-popover"),g(this,b,T).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(l(this,_).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),g(this,x,K).call(this)}render(){return X`<slot
        name="trigger"
        @slotchange=${g(this,C,N)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${I({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&l(this,_).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${l(this,M)}
              class="close"
              label="${z("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{var t,e,i,r;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?((e=this._elDialog)==null||e.showModal(),l(this,y).call(this),setTimeout(()=>l(this,y).call(this),250),setTimeout(()=>{var a;return(a=this._elDialog)==null?void 0:a.addEventListener("click",l(this,v))},0)):((i=this._elDialog)==null||i.close(),(r=this._elDialog)==null||r.removeEventListener("click",l(this,v)))})}_handleMobileLayout(t){var i,r,a;var e;$(this,w,t),t&&!this.disableMobileStyles?((e=l(this,f))==null||e.call(this),(i=this._elDialog)==null||i.style.removeProperty("left"),(r=this._elDialog)==null||r.style.removeProperty("top"),(a=this._elDialog)==null||a.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var h;this.open&&((h=this._elDialog)==null||h.showModal())})):this.updateComplete.then(()=>{g(this,m,W).call(this)})}};C=new WeakSet;N=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};f=new WeakMap;w=new WeakMap;_=new WeakMap;d=new WeakMap;M=new WeakMap;b=new WeakSet;T=function(){var t,e;(t=this._trigger)==null||t.addEventListener("keydown",l(this,E)),(e=this._trigger)==null||e.addEventListener("click",l(this,k))};x=new WeakSet;K=function(){var e,i;var t;(e=this._trigger)==null||e.removeEventListener("keydown",l(this,E)),(i=this._trigger)==null||i.removeEventListener("click",l(this,k)),(t=l(this,f))==null||t.call(this)};S=new WeakSet;O=function(){var t;if(this._trigger){(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const r=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(r)===null&&this._trigger.setAttribute(r,this.popupRole)}};m=new WeakSet;W=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||l(this,w)&&!this.disableMobileStyles||(l(this,f)&&l(this,f).call(this),$(this,f,Y(t,e,()=>{Q(t,e,{placement:this.placement,middleware:[q(8),J()],strategy:"fixed"}).then(({x:i,y:r})=>Object.assign(e.style,{left:`${i}px`,top:`${r}px`,minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}))})))};E=new WeakMap;k=new WeakMap;y=new WeakMap;v=new WeakMap;s.styles=U(tt);o([p({type:Boolean,reflect:!0})],s.prototype,"open",2);o([p({attribute:"popup-role"})],s.prototype,"popupRole",2);o([p({attribute:!1})],s.prototype,"triggerRef",2);o([p({attribute:!1})],s.prototype,"anchorRef",2);o([p()],s.prototype,"label",2);o([p()],s.prototype,"placement",2);o([p()],s.prototype,"disableMobileStyles",2);o([p({attribute:!1})],s.prototype,"calcMinWidth",2);o([p({attribute:!1})],s.prototype,"calcMaxWidth",2);o([p({attribute:!1})],s.prototype,"calcMinHeight",2);o([p({attribute:!1})],s.prototype,"calcMaxHeight",2);o([D()],s.prototype,"_trigger",2);o([D()],s.prototype,"_anchor",2);o([D()],s.prototype,"_isVirtKbVisible",2);o([A("slot:not([name])")],s.prototype,"_elDefaultSlot",2);o([A('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);o([A("dialog")],s.prototype,"_elDialog",2);o([u("triggerRef")],s.prototype,"_handleTriggerRefChanged",1);o([u("anchorRef")],s.prototype,"_handleAnchorRefChanged",1);o([u("_trigger")],s.prototype,"_handleTriggerChanged",1);o([u("_anchor")],s.prototype,"_handleAnchorChanged",1);o([u("open")],s.prototype,"_handleOpenChange",1);o([j("(max-width: 576px)")],s.prototype,"_handleMobileLayout",1);s=o([B("gds-popover")],s);
