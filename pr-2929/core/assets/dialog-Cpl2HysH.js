import{i as z,a1 as T,Q as Y,S as I,ab as N,z as X,d as q,A,a as F,o as D,E as G,h as M,ac as K,n as p,f as L,$ as R,g as U,F as Q,G as V,y as j}from"./iframe-Bezf6Gyf.js";import{l as H}from"./localized-decorator-CGBAhD8S.js";import{G as J}from"./card.component-DeiCHp2U.js";import{G as Z}from"./flex.component-9-nqFDSl.js";import{I as tt}from"./cross-large.component-simSv1bu.js";const et=z`
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
`,b=new Set;function st(){T.instance.injectGlobalStyles("dialog-scroll-lock",z`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function at(t){if(b.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=it()+lt();let a=getComputedStyle(document.documentElement).scrollbarGutter;(!a||a==="auto")&&(a="stable"),e<2&&(a=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",a),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function P(t){b.delete(t),b.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function it(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function lt(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,B=t=>{throw TypeError(t)},r=(t,e,a,g)=>{for(var i=g>1?void 0:g?nt(e,a):e,v=t.length-1,k;v>=0;v--)(k=t[v])&&(i=(g?k(e,a,i):k(i))||i);return g&&i&&ot(e,a,i),i},W=(t,e,a)=>e.has(t)||B("Cannot "+a),s=(t,e,a)=>(W(t,e,"read from private field"),a?a.call(t):e.get(t)),l=(t,e,a)=>e.has(t)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),n=(t,e,a,g)=>(W(t,e,"write to private field"),e.set(t,a),a),rt=(t,e,a)=>(W(t,e,"access private method"),a),d,u,c,h,x,E,y,C,m,_,w,S,O,$,f;st();let o=class extends Y(I(N(X))){constructor(){super(...arguments),l(this,S),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,this.closedby="closerequest",l(this,d),l(this,u,!1),l(this,c,!1),l(this,h,t=>{s(this,m).call(this,t)&&(n(this,c,!0),this.close(t),n(this,c,!1))}),l(this,x,t=>{s(this,_).call(this,t)&&(n(this,c,!0),this.show(t),n(this,c,!1))}),l(this,E,t=>{t.preventDefault(),s(this,h).call(this,"native-close")}),l(this,y,t=>{t.key==="Escape"&&(t.preventDefault(),s(this,h).call(this,"native-close"))}),l(this,C,t=>{this.open?(n(this,c,!0),this.close("native-close"),n(this,c,!1),s(this,m).call(this,"native-close")):!s(this,c)&&s(this,d)&&s(this,d)!=="prop-change"&&s(this,m).call(this,s(this,d))}),l(this,m,t=>s(this,w).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),l(this,_,t=>s(this,w).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),l(this,w,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),l(this,$,t=>{s(this,x).call(this,"slotted-trigger")}),l(this,f,t=>{const e=t,a=this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===this&&a&&this.open){const i=a.getBoundingClientRect();!(i.top<=e.clientY&&e.clientY<=i.top+i.height&&i.left<=e.clientX&&e.clientX<=i.left+i.width)&&!s(this,u)&&s(this,h).call(this,"click-outside")}n(this,u,!1)})}show(t){this.open=!0,t&&s(this,_).call(this,t)}close(t){n(this,d,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),P(this)}render(){return M`<slot
        name="trigger"
        @slotchange=${rt(this,S,O)}
      ></slot>
      ${q(this.open,()=>M`<dialog
            closedby=${this.closedby}
            @cancel=${s(this,E)}
            @close=${s(this,C)}
            class=${F({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
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
                    @click=${()=>s(this,h).call(this,"btn-close")}
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
                      @click=${()=>s(this,h).call(this,"btn-cancel")}
                      rank="secondary"
                      >${G("Cancel")}</gds-button
                    >
                    <gds-button
                      value="ok"
                      @click=${()=>s(this,h).call(this,"btn-ok")}
                    >
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(n(this,d,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),at(this),this.removeEventListener("click",s(this,f)),requestAnimationFrame(()=>this.addEventListener("click",s(this,f))),this.closedby==="none"&&this._elDialog?.addEventListener("keydown",s(this,y)),K&&this._elDialog?.focus()})):(n(this,d,s(this,d)||"prop-change"),this._elDialog?.removeEventListener("keydown",s(this,y)),this._elDialog?.close(),P(this),document.removeEventListener("click",s(this,f)),this.requestUpdate("open"))}};d=new WeakMap;u=new WeakMap;c=new WeakMap;h=new WeakMap;x=new WeakMap;E=new WeakMap;y=new WeakMap;C=new WeakMap;m=new WeakMap;_=new WeakMap;w=new WeakMap;S=new WeakSet;O=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t?.addEventListener("click",s(this,$)),t?.setAttribute("aria-haspopup","dialog")}};$=new WeakMap;f=new WeakMap;o.styles=[et];o.styleExpressionBaseSelector="dialog";r([p({type:Boolean,reflect:!0})],o.prototype,"open",2);r([p()],o.prototype,"heading",2);r([p()],o.prototype,"variant",2);r([p()],o.prototype,"placement",2);r([p({type:Boolean})],o.prototype,"scrollable",2);r([p({reflect:!0})],o.prototype,"closedby",2);r([L("dialog")],o.prototype,"_elDialog",2);r([L('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);r([R("open")],o.prototype,"_handleOpenChange",1);o=r([U("gds-dialog",{dependsOn:[Q,J,V,Z,tt]}),j({labelledBy:"dialog",describedBy:"dialog"}),H()],o);o.define();
