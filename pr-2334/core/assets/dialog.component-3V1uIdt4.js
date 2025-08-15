import{m as k,l as W}from"./runtime-CNluP0A8.js";import{h as E,n as h,G as D,g as P}from"./gds-element-DKcDvDP5.js";import{a as S}from"./query-p8xgzTDt.js";import{e as M}from"./class-map-CXsQwv0r.js";import{n as O}from"./when-BR7zwNJC.js";import{w as L}from"./watch-tFciLXSI.js";import{G as B,b as T}from"./tokens.style-Bfj-148u.js";import{w as Y,a as N}from"./declarative-layout-mixins-DHam8wVT.js";import{G as X}from"./button.component-B89ZvrSV.js";import{G as I}from"./card.component-BD3SJk3O.js";import{G as R}from"./div.component-BeQ16hT1.js";import{G as A}from"./flex.component-C2WvVTnp.js";import{I as V}from"./cross-small.component-Bs9N37Jb.js";import{i as z}from"./lit-element-Bx14lxc-.js";const q=z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
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
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.size-s {
      max-width: 300px;
    }

    dialog.default.size-m {
      max-width: 400px;
    }

    dialog.default.size-l {
      max-width: 700px;
    }

    dialog.default.position-initial {
      margin: auto;
    }

    dialog.default.position-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.position-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.position-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.position-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);

      height: auto;

      &.position-initial,
      &.position-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.position-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.position-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.position-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
      }

      @media (min-width: 648px) {
        &.position-initial,
        &.position-left,
        &.position-right {
          &.size-s {
            max-width: 320px;
          }
          ,
          &.size-m {
            max-width: 600px;
          }
          &.size-l {
            max-width: 800px;
          }
        }
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
`,v=new Set;function F(){B.instance.injectGlobalStyles("dialog-scroll-lock",z`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function K(t){if(v.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=U()+j();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function C(t){v.delete(t),v.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function U(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function j(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},n=(t,e,s,d)=>{for(var i=d>1?void 0:d?J(e,s):e,p=t.length-1,c;p>=0;p--)(c=t[p])&&(i=(d?c(e,s,i):c(i))||i);return d&&i&&H(e,s,i),i},x=(t,e,s)=>e.has(t)||G("Cannot "+s),o=(t,e,s)=>(x(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,d)=>(x(t,e,"write to private field"),e.set(t,s),s),Q=(t,e,s)=>(x(t,e,"access private method"),s),r,y,m,_,u,w,$,b,g;F();let a=class extends Y(N(D)){constructor(){super(...arguments),l(this,w),this.open=!1,this.variant="default",this.size="m",this.position="initial",l(this,r),l(this,y,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!o(this,m).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),l(this,m,t=>(this.dispatchCustomEvent("gds-close",{detail:t}),o(this,u).call(this,t))),l(this,_,t=>(this.dispatchCustomEvent("gds-show",{detail:t}),o(this,u).call(this,t))),l(this,u,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),l(this,b,t=>{this.show("slotted-trigger")}),l(this,g,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect(),p=i.top<=e.clientY&&e.clientY<=i.top+i.height&&i.left<=e.clientX&&e.clientX<=i.left+i.width,c="click-outside";!p&&o(this,m).call(this,c)&&this.close(c)}})}show(t){this.open=!0,t&&o(this,_).call(this,t)}close(t){f(this,r,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),C(this)}render(){return E`<slot
        name="trigger"
        @slotchange=${Q(this,w,$)}
      ></slot>
      ${O(this.open,()=>E`<dialog
            @close=${o(this,y)}
            class=${M({[this.variant]:!0,[`size-${this.size}`]:!0,[`position-${this.position}`]:!0})}
            aria-describedby="heading"
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
              <gds-flex
                justify-content="space-between"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${k("Close")}
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
                    >${k("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(f(this,r,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),K(this),document.removeEventListener("click",o(this,g)),requestAnimationFrame(()=>document.addEventListener("click",o(this,g))),T&&((s=this._elDialog)==null||s.focus())})):(f(this,r,o(this,r)||"prop-change"),(t=this._elDialog)==null||t.close(o(this,r)),C(this),document.removeEventListener("click",o(this,g)),this.requestUpdate("open"))}};r=new WeakMap;y=new WeakMap;m=new WeakMap;_=new WeakMap;u=new WeakMap;w=new WeakSet;$=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",o(this,b)),t==null||t.setAttribute("aria-haspopup","dialog")}};b=new WeakMap;g=new WeakMap;a.styles=[q];a.styleExpressionBaseSelector="dialog";n([h({type:Boolean,reflect:!0})],a.prototype,"open",2);n([h()],a.prototype,"heading",2);n([h()],a.prototype,"variant",2);n([h()],a.prototype,"size",2);n([h()],a.prototype,"position",2);n([S("dialog")],a.prototype,"_elDialog",2);n([S('slot[name="trigger"]')],a.prototype,"_elTriggerSlot",2);n([L("open")],a.prototype,"_handleOpenChange",1);a=n([P("gds-dialog",{dependsOn:[X,I,R,A,V]}),W()],a);export{a as G};
