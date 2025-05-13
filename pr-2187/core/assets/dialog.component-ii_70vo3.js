import{m as k}from"./runtime-BL31MtW8.js";import{l as $}from"./localized-decorator-DtmrKsyB.js";import{h as x,n as b,G as P,g as z}from"./custom-element-scoping-CNGU1oQ0.js";import{a as S}from"./query-p8xgzTDt.js";import{n as D}from"./when-BR7zwNJC.js";import{w as M}from"./watch-tFciLXSI.js";import{G as O,i as T}from"./tokens.style-DQsNuKSy.js";import{w as B,a as L}from"./declarative-layout-mixins-D1Y0gyd7.js";import{G as N}from"./button.component-DinZMa0g.js";import{G as I}from"./card.component-McCzQM22.js";import{G as V}from"./div.component-laA26zwj.js";import{G as A}from"./flex.component-CkL0ce-t.js";import{I as R}from"./cross-large.component-CK7gJC5Z.js";import{i as C}from"./lit-element-Bx14lxc-.js";const U=C`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    dialog {
      transition: 0.3s;
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: 100vw;
      max-height: 100vh;
      display: flex;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: 0.3s;
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default {
      width: 400px;
      max-height: 400px;
    }

    dialog.slide-out {
      width: 600px;
      height: 100vh;
      inset: 0 0 0 auto;
      @starting-style {
        transform: translateX(96px);
      }
    }

    dialog:focus {
      outline: none;
    }

    .card {
      flex-direction: column;
    }

    slot[name='footer'] > *,
    slot[name='footer']::slotted(*) {
      flex: 1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
      font-weight: 450;
    }
  }
`,m=new Set;function X(){O.instance.injectGlobalStyles("dialog-scroll-lock",C`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Y(t){if(m.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const s=q()+F();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),s<2&&(e=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",e),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${s}px`)}}function E(t){m.delete(t),m.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function q(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function F(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var j=Object.defineProperty,H=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},r=(t,s,e,d)=>{for(var i=d>1?void 0:d?H(s,e):s,h=t.length-1,p;h>=0;h--)(p=t[h])&&(i=(d?p(s,e,i):p(i))||i);return d&&i&&j(s,e,i),i},w=(t,s,e)=>s.has(t)||G("Cannot "+e),a=(t,s,e)=>(w(t,s,"read from private field"),e?e.call(t):s.get(t)),l=(t,s,e)=>s.has(t)?G("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),g=(t,s,e,d)=>(w(t,s,"write to private field"),s.set(t,e),e),J=(t,s,e)=>(w(t,s,"access private method"),e),n,u,f,v,c,y,W,_;X();let o=class extends B(L(P)){constructor(){super(...arguments),l(this,y),this.open=!1,this.variant="default",l(this,n),l(this,u,t=>{const e=t.target.returnValue;this.close(e||"native-close"),e!=="prop-change"&&a(this,f).call(this,e)}),l(this,f,t=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),a(this,c).call(this,t)}),l(this,v,t=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),a(this,c).call(this,t)}),l(this,c,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1}))}),l(this,_,t=>{this.show("slotted-trigger")})}show(t){this.open=!0,t&&a(this,v).call(this,t)}close(t){g(this,n,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),E(this)}render(){return x`<slot
        name="trigger"
        @slotchange=${J(this,y,W)}
      ></slot>
      ${D(this.open,()=>x`<dialog
            @close=${a(this,u)}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding="s"
              border-radius=${this.variant==="default"?"s":"0"}
            >
              <gds-flex
                justify-content="space-between"
                border-width="0 0 4xs 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${k("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-div id="content" padding="m 0" overflow="auto" flex="1">
                <slot></slot>
              </gds-div>
              <gds-flex
                class="footer"
                justify-content="center"
                gap="s"
                padding="s 0 0 0"
              >
                <slot name="footer">
                  <gds-button
                    value="cancel"
                    @click=${()=>this.close("btn-cancel")}
                    rank="secondary"
                    >${k("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(g(this,n,void 0),this.updateComplete.then(()=>{var s,e;(s=this._elDialog)==null||s.showModal(),Y(this),T&&((e=this._elDialog)==null||e.focus())})):(g(this,n,a(this,n)||"prop-change"),(t=this._elDialog)==null||t.close(a(this,n)),E(this),this.requestUpdate("open"))}};n=new WeakMap;u=new WeakMap;f=new WeakMap;v=new WeakMap;c=new WeakMap;y=new WeakSet;W=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",a(this,_)),t==null||t.setAttribute("aria-haspopup","dialog")}};_=new WeakMap;o.styles=[U];o.styleExpressionBaseSelector="dialog";r([b({type:Boolean,reflect:!0})],o.prototype,"open",2);r([b()],o.prototype,"heading",2);r([b()],o.prototype,"variant",2);r([S("dialog")],o.prototype,"_elDialog",2);r([S('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);r([M("open")],o.prototype,"_handleOpenChange",1);o=r([z("gds-dialog",{dependsOn:[N,I,V,A,R]}),$()],o);export{o as G};
