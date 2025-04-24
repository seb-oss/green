import{m as _}from"./runtime-BL31MtW8.js";import{l as $}from"./localized-decorator-DtmrKsyB.js";import{n as y,G as M,h as x,g as P}from"./custom-element-scoping-b4c89-hi.js";import{a as C}from"./query-p8xgzTDt.js";import{n as O}from"./when-BR7zwNJC.js";import{w as z}from"./watch-tFciLXSI.js";import{G as D}from"./button.component-D9i3kx96.js";import{G as T}from"./card.component-B5590vme.js";import{G as L}from"./flex.component-BfiuBC5x.js";import{I as B}from"./cross-large.component-BLGJR-vd.js";import{i as S}from"./lit-element-Bx14lxc-.js";import{G as N}from"./tokens.style-C9bLefPj.js";const V=S`
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
          backdrop-filter: blur(0);
        }
      }

      &::backdrop {
        transition: 0.3s;
        background: rgba(100, 100, 100, 0.3);
        backdrop-filter: blur(3px);
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
`,m=new Set;function A(){N.instance.injectGlobalStyles("dialog-scroll-lock",S`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function I(t){if(m.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=R()+U();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function E(t){m.delete(t),m.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function R(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function U(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},r=(t,e,s,d)=>{for(var l=d>1?void 0:d?F(e,s):e,h=t.length-1,p;h>=0;h--)(p=t[h])&&(l=(d?p(e,s,l):p(l))||l);return d&&l&&q(e,s,l),l},w=(t,e,s)=>e.has(t)||G("Cannot "+s),a=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),i=(t,e,s)=>e.has(t)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),g=(t,e,s,d)=>(w(t,e,"write to private field"),e.set(t,s),s),X=(t,e,s)=>(w(t,e,"access private method"),s),n,u,f,v,c,b,W,k;A();let o=class extends M{constructor(){super(...arguments),i(this,b),this.open=!1,this.variant="default",i(this,n),i(this,u,t=>{const s=t.target.returnValue;this.close(s||"native-close"),s!=="prop-change"&&a(this,f).call(this,s)}),i(this,f,t=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),a(this,c).call(this,t)}),i(this,v,t=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),a(this,c).call(this,t)}),i(this,c,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1}))}),i(this,k,t=>{this.show("slotted-trigger")})}show(t){this.open=!0,t&&a(this,v).call(this,t)}close(t){g(this,n,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),E(this)}render(){return x`<slot
        name="trigger"
        @slotchange=${X(this,b,W)}
      ></slot>
      ${O(this.open,()=>x`<dialog
            @close=${a(this,u)}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              shadow="xl"
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
                  label=${_("Close")}
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
                    >${_("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(g(this,n,void 0),this.updateComplete.then(()=>{var e;(e=this._elDialog)==null||e.showModal(),I(this)})):(g(this,n,a(this,n)||"prop-change"),(t=this._elDialog)==null||t.close(a(this,n)),E(this),this.requestUpdate("open"))}};n=new WeakMap;u=new WeakMap;f=new WeakMap;v=new WeakMap;c=new WeakMap;b=new WeakSet;W=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",a(this,k)),t==null||t.setAttribute("aria-haspopup","dialog")}};k=new WeakMap;o.styles=[V];r([y({type:Boolean,reflect:!0})],o.prototype,"open",2);r([y()],o.prototype,"heading",2);r([y()],o.prototype,"variant",2);r([C("dialog")],o.prototype,"_elDialog",2);r([C('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);r([z("open")],o.prototype,"_handleOpenChange",1);o=r([P("gds-dialog",{dependsOn:[D,T,L,B]}),$()],o);export{o as G};
