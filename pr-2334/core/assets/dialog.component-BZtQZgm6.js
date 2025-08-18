import{m as x,l as D}from"./runtime-CNluP0A8.js";import{h as E,n as u,G as P,g as z}from"./gds-element-DKcDvDP5.js";import{a as S}from"./query-p8xgzTDt.js";import{e as M}from"./class-map-CXsQwv0r.js";import{o as O}from"./if-defined-CVqwUuaf.js";import{n as L}from"./when-BR7zwNJC.js";import{w as B}from"./watch-tFciLXSI.js";import{G as T,b as Y}from"./tokens.style-Bfj-148u.js";import{w as N,a as X}from"./declarative-layout-mixins-DHam8wVT.js";import{G as I}from"./button.component-B89ZvrSV.js";import{G as R}from"./card.component-BD3SJk3O.js";import{G as A}from"./div.component-BeQ16hT1.js";import{G as V}from"./flex.component-C2WvVTnp.js";import{I as q}from"./cross-small.component-Bs9N37Jb.js";import{i as G}from"./lit-element-Bx14lxc-.js";const F=G`
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
`,f=new Set;function K(){T.instance.injectGlobalStyles("dialog-scroll-lock",G`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function U(t){if(f.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=j()+H();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function C(t){f.delete(t),f.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function j(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function H(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},l=(t,e,s,c)=>{for(var a=c>1?void 0:c?Q(e,s):e,g=t.length-1,d;g>=0;g--)(d=t[g])&&(a=(c?d(e,s,a):d(a))||a);return c&&a&&J(e,s,a),a},k=(t,e,s)=>e.has(t)||$("Cannot "+s),o=(t,e,s)=>(k(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v=(t,e,s,c)=>(k(t,e,"write to private field"),e.set(t,s),s),Z=(t,e,s)=>(k(t,e,"access private method"),s),r,y,h,_,m,b,W,w,p;K();let i=class extends N(X(P)){constructor(){super(...arguments),n(this,b),this.open=!1,this.variant="default",this.placement="initial",n(this,r),n(this,y,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!o(this,h).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),n(this,h,t=>(this.dispatchCustomEvent("gds-close",{detail:t}),o(this,m).call(this,t))),n(this,_,t=>(this.dispatchCustomEvent("gds-show",{detail:t}),o(this,m).call(this,t))),n(this,m,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),n(this,w,t=>{this.show("slotted-trigger")}),n(this,p,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const a=s.getBoundingClientRect(),g=a.top<=e.clientY&&e.clientY<=a.top+a.height&&a.left<=e.clientX&&e.clientX<=a.left+a.width,d="click-outside";!g&&o(this,h).call(this,d)&&this.close(d)}})}show(t){this.open=!0,t&&o(this,_).call(this,t)}close(t){v(this,r,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),C(this)}render(){return E`<slot
        name="trigger"
        @slotchange=${Z(this,b,W)}
      ></slot>
      ${L(this.open,()=>E`<dialog
            @close=${o(this,y)}
            class=${M({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${O(this.heading)}
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding="l"
              gap="l"
              border-radius="s"
              min-height="min-content"
            >
              <slot name="dialog">
                <gds-flex
                  justify-content="space-between"
                  background-color="secondary"
                >
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
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(v(this,r,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),U(this),document.removeEventListener("click",o(this,p)),requestAnimationFrame(()=>document.addEventListener("click",o(this,p))),Y&&((s=this._elDialog)==null||s.focus())})):(v(this,r,o(this,r)||"prop-change"),(t=this._elDialog)==null||t.close(o(this,r)),C(this),document.removeEventListener("click",o(this,p)),this.requestUpdate("open"))}};r=new WeakMap;y=new WeakMap;h=new WeakMap;_=new WeakMap;m=new WeakMap;b=new WeakSet;W=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",o(this,w)),t==null||t.setAttribute("aria-haspopup","dialog")}};w=new WeakMap;p=new WeakMap;i.styles=[F];i.styleExpressionBaseSelector="dialog";l([u({type:Boolean,reflect:!0})],i.prototype,"open",2);l([u()],i.prototype,"heading",2);l([u()],i.prototype,"variant",2);l([u()],i.prototype,"placement",2);l([S("dialog")],i.prototype,"_elDialog",2);l([S('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);l([B("open")],i.prototype,"_handleOpenChange",1);i=l([z("gds-dialog",{dependsOn:[I,R,A,V,q]}),D()],i);export{i as G};
