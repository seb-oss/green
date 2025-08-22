import{m as x,l as P}from"./runtime-CNluP0A8.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{a as G}from"./query-p8xgzTDt.js";import{e as z,o as E}from"./if-defined-BAXgs-ZI.js";import{n as M}from"./when-BR7zwNJC.js";import{h as C,G as O,g as L}from"./gds-element-DJNCW3iR.js";import{w as B}from"./watch-tFciLXSI.js";import{G as T,b as Y}from"./tokens.style-iX6aIK9m.js";import{w as N,a as X}from"./declarative-layout-mixins-CquYcIh8.js";import{G as I}from"./button.component-CrTOAC5w.js";import{G as R}from"./card.component-yp2NQ7aE.js";import{G as A}from"./div.component-Cx0JXo06.js";import{G as V}from"./flex.component-CHYyV8f-.js";import{I as q}from"./cross-small.component-DhvOsnze.js";import{i as $}from"./lit-element-Bx14lxc-.js";const F=$`
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
    }
  }
`,f=new Set;function K(){T.instance.injectGlobalStyles("dialog-scroll-lock",$`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function U(t){if(f.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=j()+H();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function S(t){f.delete(t),f.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function j(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function H(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,W=t=>{throw TypeError(t)},n=(t,e,s,c)=>{for(var a=c>1?void 0:c?Q(e,s):e,g=t.length-1,d;g>=0;g--)(d=t[g])&&(a=(c?d(e,s,a):d(a))||a);return c&&a&&J(e,s,a),a},k=(t,e,s)=>e.has(t)||W("Cannot "+s),i=(t,e,s)=>(k(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?W("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s,c)=>(k(t,e,"write to private field"),e.set(t,s),s),Z=(t,e,s)=>(k(t,e,"access private method"),s),r,y,m,_,u,b,D,w,p;K();let o=class extends N(X(O)){constructor(){super(...arguments),l(this,b),this.open=!1,this.variant="default",this.placement="initial",this.padding="l",l(this,r),l(this,y,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!i(this,m).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),l(this,m,t=>(this.dispatchCustomEvent("gds-close",{detail:t}),i(this,u).call(this,t))),l(this,_,t=>(this.dispatchCustomEvent("gds-show",{detail:t}),i(this,u).call(this,t))),l(this,u,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),l(this,w,t=>{this.show("slotted-trigger")}),l(this,p,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const a=s.getBoundingClientRect(),g=a.top<=e.clientY&&e.clientY<=a.top+a.height&&a.left<=e.clientX&&e.clientX<=a.left+a.width,d="click-outside";!g&&i(this,m).call(this,d)&&this.close(d)}})}show(t){this.open=!0,t&&i(this,_).call(this,t)}close(t){v(this,r,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),S(this)}render(){return C`<slot
        name="trigger"
        @slotchange=${Z(this,b,D)}
      ></slot>
      ${M(this.open,()=>C`<dialog
            @close=${i(this,y)}
            class=${z({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${E(this.heading)}
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding=${E(this.padding)}
              gap="l"
              border-radius="s"
              min-height="min-content"
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="secondary"
                    size="small"
                    label=${x("Close")}
                    @click=${()=>this.close("btn-close")}
                    ><gds-icon-cross-small></gds-icon-cross-small
                  ></gds-button>
                </gds-flex>
                <gds-div id="content" flex="1">
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
                      >${x("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                      >Ok</gds-button
                    >
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(v(this,r,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),U(this),document.removeEventListener("click",i(this,p)),requestAnimationFrame(()=>document.addEventListener("click",i(this,p))),Y&&((s=this._elDialog)==null||s.focus())})):(v(this,r,i(this,r)||"prop-change"),(t=this._elDialog)==null||t.close(i(this,r)),S(this),document.removeEventListener("click",i(this,p)),this.requestUpdate("open"))}};r=new WeakMap;y=new WeakMap;m=new WeakMap;_=new WeakMap;u=new WeakMap;b=new WeakSet;D=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",i(this,w)),t==null||t.setAttribute("aria-haspopup","dialog")}};w=new WeakMap;p=new WeakMap;o.styles=[F];o.styleExpressionBaseSelector="dialog";n([h({type:Boolean,reflect:!0})],o.prototype,"open",2);n([h()],o.prototype,"heading",2);n([h()],o.prototype,"variant",2);n([h()],o.prototype,"placement",2);n([h()],o.prototype,"padding",2);n([G("dialog")],o.prototype,"_elDialog",2);n([G('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);n([B("open")],o.prototype,"_handleOpenChange",1);o=n([L("gds-dialog",{dependsOn:[I,R,A,V,q]}),P()],o);export{o as G};
