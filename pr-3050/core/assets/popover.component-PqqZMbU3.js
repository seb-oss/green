import{a8 as O,i as H,n as r,E as T,l as A,$ as b,a as K,F as I,D as U,V as F,e as G,J as z,h as X}from"./iframe-DuBKvbTM.js";import{l as Y}from"./localized-decorator-C5acqPyk.js";import{o as q,s as Q,a as J,c as Z}from"./floating-ui.dom-DzQH3ivI.js";import{I as j}from"./cross-small.component-DUiJhwg-.js";function tt(t){return(e,o,n)=>{if(O)return;const l=window.matchMedia(t),d=e.connectedCallback,y=e.disconnectedCallback;e.connectedCallback=function(){d?.call(this);const W=N=>{n.value?.call(this,N.matches)};l.addEventListener("change",W),this.disconnectedCallback=function(){y?.call(this),l.removeEventListener("change",W)},n.value?.call(this,l.matches)}}}const et=H`
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
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,L=t=>{throw TypeError(t)},a=(t,e,o,n)=>{for(var l=n>1?void 0:n?st(e,o):e,d=t.length-1,y;d>=0;d--)(y=t[d])&&(l=(n?y(e,o,l):y(l))||l);return n&&l&&it(e,o,l),l},P=(t,e,o)=>e.has(t)||L("Cannot "+o),s=(t,e,o)=>(P(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),M=(t,e,o,n)=>(P(t,e,"write to private field"),e.set(t,o),o),f=(t,e,o)=>(P(t,e,"access private method"),o),c,B,u,k,p,_,g,x,D,V,$,S,C,E,v,w,m;function R(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}function at(t,e,o){t.setAttribute("aria-expanded",String(e));const n=["A","BUTTON","INPUT","TEXTAREA"];t.nodeName.startsWith("GDS-")||n.includes(t.nodeName)||(t.setAttribute("tabindex","0"),t.setAttribute("role","button"));const d=t.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";t.getAttribute(d)===null&&t.setAttribute(d,o)}let i=class extends U{constructor(){super(...arguments),h(this,c),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=t=>`${t.offsetWidth}px`,this.calcMaxWidth=t=>"auto",this.calcMinHeight=t=>"auto",this.calcMaxHeight=t=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=i.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,h(this,u),h(this,k,!1),h(this,p),h(this,_,()=>{s(this,g).call(this,"cancel")&&(this.open=!1)}),h(this,g,t=>{const e=t==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:e,reason:t},bubbles:!1,composed:!1,cancelable:!0})}),h(this,x,t=>{t.stopPropagation(),t.preventDefault(),s(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),h(this,C,t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.open=!0,s(this,g).call(this,"show")),t.key==="Escape"&&this.open&&s(this,_).call(this)}),h(this,E,t=>{t.preventDefault(),s(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),h(this,v,()=>{const t=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{t?.focus()})}),h(this,w,t=>{const e=t,o=this._elDialog;if((e.clientX>0||e.clientY>0)&&o&&this.open){const l=o.getBoundingClientRect();!(l.top<=e.clientY&&e.clientY<=l.top+l.height&&l.left<=e.clientX&&e.clientX<=l.left+l.width)&&s(this,g).call(this,"close")&&(this.open=!1)}}),h(this,m,()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&s(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){this.anchorRef?.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){f(this,c,D).call(this),f(this,c,$).call(this)}_handleAnchorChanged(){f(this,c,S).call(this)}connectedCallback(){super.connectedCallback(),F.instance.apply(this,"gds-popover"),f(this,c,D).call(this),this._handleOpenChange(),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.open&&(s(this,_).call(this),t.stopPropagation(),t.preventDefault())}),this.addEventListener("focusin",t=>{const e=t.target;e!==this&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",t=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,c,V).call(this),window.removeEventListener("scroll",s(this,m))}render(){return X`<slot
        name="trigger"
        @slotchange=${f(this,c,B)}
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
      </div>`}_handleOpenChange(){const t=(this.nonmodal?s(this,p):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(s(this,v).call(this),setTimeout(()=>s(this,v).call(this),250)),requestAnimationFrame(()=>{s(this,p)&&(s(this,p).show=!0)}),setTimeout(()=>t.addEventListener("click",s(this,w)),0),window.addEventListener("scroll",s(this,m),{passive:!0})):(this._elDialog?.close(),t.removeEventListener("click",s(this,w)),window.removeEventListener("scroll",s(this,m)),s(this,p)&&(s(this,p).show=!1))})}_handleBackdropChange(){const t=this.parentElement?.getRootNode();!this.backdrop||!t||M(this,p,t.querySelector(this.backdrop))}_handleMobileLayout(t){var e;M(this,k,t),t&&!this.disableMobileStyles?((e=s(this,u))==null||e.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("right"),this._elDialog?.style.removeProperty("bottom"),this._elDialog?.style.removeProperty("transform"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width")):this.updateComplete.then(()=>{f(this,c,S).call(this)})}};c=new WeakSet;B=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};u=new WeakMap;k=new WeakMap;p=new WeakMap;_=new WeakMap;g=new WeakMap;x=new WeakMap;D=function(){this._trigger?.addEventListener("keydown",s(this,C)),this._trigger?.addEventListener("click",s(this,E))};V=function(){var t;this._trigger?.removeEventListener("keydown",s(this,C)),this._trigger?.removeEventListener("click",s(this,E)),(t=s(this,u))==null||t.call(this)};$=function(){this._trigger&&at(this._trigger,this.open,this.popupRole)};S=function(){if(!this._anchor||!this._elDialog)return;const t=this._anchor,e=this._elDialog;!t||!e||s(this,k)&&!this.disableMobileStyles||(s(this,u)&&s(this,u).call(this),M(this,u,J(t,e,()=>{Object.assign(e.style,{minWidth:this.calcMinWidth(t),maxWidth:this.calcMaxWidth(t),minHeight:this.calcMinHeight(t),maxHeight:this.calcMaxHeight(t)}),Z(t,e,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:o,y:n})=>Object.assign(e.style,{left:"0",top:"0",right:"auto",bottom:"auto",transform:`translate3d(${R(o)}px, ${R(n)}px, 0)`}))})))};C=new WeakMap;E=new WeakMap;v=new WeakMap;w=new WeakMap;m=new WeakMap;i.styles=et;i.DefaultMiddleware=[q(8),Q({crossAxis:!0,padding:8})];a([r({type:Boolean,reflect:!0})],i.prototype,"open",2);a([r({attribute:"popup-role"})],i.prototype,"popupRole",2);a([r({attribute:!1})],i.prototype,"triggerRef",2);a([r({attribute:!1})],i.prototype,"anchorRef",2);a([r()],i.prototype,"label",2);a([r()],i.prototype,"placement",2);a([r({type:Boolean})],i.prototype,"disableMobileStyles",2);a([r({type:Boolean})],i.prototype,"disableScrollClose",2);a([r({type:Boolean})],i.prototype,"autofocus",2);a([r({attribute:!1})],i.prototype,"calcMinWidth",2);a([r({attribute:!1})],i.prototype,"calcMaxWidth",2);a([r({attribute:!1})],i.prototype,"calcMinHeight",2);a([r({attribute:!1})],i.prototype,"calcMaxHeight",2);a([r({type:Boolean,reflect:!0})],i.prototype,"nonmodal",2);a([r()],i.prototype,"backdrop",2);a([r({attribute:!1})],i.prototype,"floatingUIMiddleware",2);a([T()],i.prototype,"_trigger",2);a([T()],i.prototype,"_anchor",2);a([T()],i.prototype,"_isVirtKbVisible",2);a([A("slot:not([name])")],i.prototype,"_elDefaultSlot",2);a([A('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);a([A("dialog")],i.prototype,"_elDialog",2);a([b("triggerRef")],i.prototype,"_handleTriggerRefChanged",1);a([b("anchorRef")],i.prototype,"_handleAnchorRefChanged",1);a([b("_trigger")],i.prototype,"_handleTriggerChanged",1);a([b("_anchor")],i.prototype,"_handleAnchorChanged",1);a([b("open")],i.prototype,"_handleOpenChange",1);a([b("backdrop")],i.prototype,"_handleBackdropChange",1);a([tt("(max-width: 576px)")],i.prototype,"_handleMobileLayout",1);i=a([K("gds-popover",{dependsOn:[j]}),I({labelledBy:"dialog",describedBy:"dialog"}),Y()],i);export{i as G,at as a,tt as w};
