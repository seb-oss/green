import{i as z,a8 as I,Z as N,a1 as T,al as Y,I as X,d as q,A,a as K,o as D,N as G,h as M,am as R,n as p,f as L,a6 as F,g as U,O as V,G as Z}from"./iframe-WQFYoQO9.js";import{l as j}from"./localized-decorator-Cd55v85d.js";import{G as H}from"./card.component-ig2jaaNA.js";import{G as J}from"./flex.component-IAhzQliM.js";import{I as Q}from"./cross-large.component-DSRDOO8K.js";const tt=z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;

      --_margin: var(--gds-sys-space-l);
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: calc(100vw - var(--_margin));
      max-height: 100vh;
      display: flex;
      width: 400px;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.placement-initial {
      margin: auto;
      --_margin: 0px;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.placement-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--gds-sys-space-l);

      height: auto;

      &.placement-initial,
      &.placement-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.placement-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.placement-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.placement-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
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
      font: var(--gds-sys-text-heading-s);
      margin-block-start: var(--gds-sys-space-4xs);
    }
  }
`,b=new Set;function et(){I.instance.injectGlobalStyles("dialog-scroll-lock",z`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function st(t){if(b.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=at()+it();let a=getComputedStyle(document.documentElement).scrollbarGutter;(!a||a==="auto")&&(a="stable"),e<2&&(a=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",a),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function P(t){b.delete(t),b.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function at(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function it(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var lt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,O=t=>{throw TypeError(t)},r=(t,e,a,c)=>{for(var i=c>1?void 0:c?ot(e,a):e,v=t.length-1,w;v>=0;v--)(w=t[v])&&(i=(c?w(e,a,i):w(i))||i);return c&&i&&lt(e,a,i),i},W=(t,e,a)=>e.has(t)||O("Cannot "+a),s=(t,e,a)=>(W(t,e,"read from private field"),a?a.call(t):e.get(t)),l=(t,e,a)=>e.has(t)?O("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),n=(t,e,a,c)=>(W(t,e,"write to private field"),e.set(t,a),a),nt=(t,e,a)=>(W(t,e,"access private method"),a),d,u,h,g,x,E,y,C,m,_,k,S,B,$,f;et();let o=class extends N(T(Y(X))){constructor(){super(...arguments),l(this,S),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,this.closedby="closerequest",l(this,d),l(this,u,!1),l(this,h,!1),l(this,g,t=>{s(this,m).call(this,t)&&(n(this,h,!0),this.close(t),n(this,h,!1))}),l(this,x,t=>{s(this,_).call(this,t)&&(n(this,h,!0),this.show(t),n(this,h,!1))}),l(this,E,t=>{t.preventDefault(),s(this,g).call(this,"native-close")}),l(this,y,t=>{t.key==="Escape"&&(t.preventDefault(),s(this,g).call(this,"native-close"))}),l(this,C,t=>{this.open?(n(this,h,!0),this.close("native-close"),n(this,h,!1),s(this,m).call(this,"native-close")):!s(this,h)&&s(this,d)&&s(this,d)!=="prop-change"&&s(this,m).call(this,s(this,d))}),l(this,m,t=>s(this,k).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),l(this,_,t=>s(this,k).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),l(this,k,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),l(this,$,t=>{s(this,x).call(this,"slotted-trigger")}),l(this,f,t=>{const e=t,a=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&a&&this.open){const i=a.getBoundingClientRect();!(i.top<=e.clientY&&e.clientY<=i.top+i.height&&i.left<=e.clientX&&e.clientX<=i.left+i.width)&&!s(this,u)&&s(this,g).call(this,"click-outside")}n(this,u,!1)})}show(t){this.open=!0,t&&s(this,_).call(this,t)}close(t){n(this,d,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),P(this)}render(){return M`<slot
        name="trigger"
        @slotchange=${nt(this,S,B)}
      ></slot>
      ${q(this.open,()=>M`<dialog
            closedby=${this.closedby}
            @cancel=${s(this,E)}
            @close=${s(this,C)}
            class=${K({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${D(this.heading)}
          >
            <gds-card
              class="card"
              padding="0"
              variant="neutral-02"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              gap="0"
              @mousedown=${()=>n(this,u,!0)}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between" padding="xl xl s xl">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${G("Close")}
                    @click=${()=>s(this,g).call(this,"btn-close")}
                  >
                    <gds-icon-cross-large
                      size="m"
                      stroke="2"
                    ></gds-icon-cross-large>
                  </gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  padding="s xl"
                  overflow=${D(this.scrollable)?"auto":A}
                >
                  <slot></slot>
                </gds-div>
                <gds-flex
                  class="footer"
                  justify-content="center"
                  gap="s"
                  padding="s xl xl xl"
                  flex-wrap="wrap"
                >
                  <slot name="footer">
                    <gds-button
                      value="cancel"
                      @click=${()=>s(this,g).call(this,"btn-cancel")}
                      rank="secondary"
                      >${G("Cancel")}</gds-button
                    >
                    <gds-button
                      value="ok"
                      @click=${()=>s(this,g).call(this,"btn-ok")}
                    >
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t,e;this.open?(n(this,d,void 0),this.updateComplete.then(()=>{var a,c,i;(a=this._elDialog)==null||a.showModal(),st(this),this.removeEventListener("click",s(this,f)),requestAnimationFrame(()=>this.addEventListener("click",s(this,f))),this.closedby==="none"&&((c=this._elDialog)==null||c.addEventListener("keydown",s(this,y))),R&&((i=this._elDialog)==null||i.focus())})):(n(this,d,s(this,d)||"prop-change"),(t=this._elDialog)==null||t.removeEventListener("keydown",s(this,y)),(e=this._elDialog)==null||e.close(),P(this),document.removeEventListener("click",s(this,f)),this.requestUpdate("open"))}};d=new WeakMap;u=new WeakMap;h=new WeakMap;g=new WeakMap;x=new WeakMap;E=new WeakMap;y=new WeakMap;C=new WeakMap;m=new WeakMap;_=new WeakMap;k=new WeakMap;S=new WeakSet;B=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",s(this,$)),t==null||t.setAttribute("aria-haspopup","dialog")}};$=new WeakMap;f=new WeakMap;o.styles=[tt];o.styleExpressionBaseSelector="dialog";r([p({type:Boolean,reflect:!0})],o.prototype,"open",2);r([p()],o.prototype,"heading",2);r([p()],o.prototype,"variant",2);r([p()],o.prototype,"placement",2);r([p({type:Boolean})],o.prototype,"scrollable",2);r([p({reflect:!0})],o.prototype,"closedby",2);r([L("dialog")],o.prototype,"_elDialog",2);r([L('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);r([F("open")],o.prototype,"_handleOpenChange",1);o=r([U("gds-dialog",{dependsOn:[V,H,Z,J,Q]}),j()],o);o.define();
