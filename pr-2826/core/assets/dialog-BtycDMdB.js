import{i as L,R as P,V as z,aa as I,B as Y,d as X,A as q,e as A,o as D,H as M,h as W,ab as U,n as p,l as B,U as F,a as K,I as N,G as R,D as V}from"./iframe-wighnWuJ.js";import{l as H}from"./localized-decorator-Bn0_3Mdy.js";import{G as J}from"./card.component-IEpm34zf.js";import{G as Q}from"./flex.component-BpivGmBq.js";import{I as Z}from"./cross-large.component-DFbB2TbH.js";import{r as j,u as G,l as tt}from"./scroll-lock-Dcaewdpa.js";const et=L`
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
      max-width: calc(100dvw - 2 * var(--_margin));
      max-height: calc(100dvh - 2 * var(--_margin));
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

    /* The dialog is fixed with inset: 0 by the UA stylesheet, so the auto
       margins absorb the free space. The side that should be anchored gets the
       fixed margin, and the opposite side gets auto. */
    dialog.default.placement-initial {
      margin: auto;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto auto auto var(--gds-sys-space-l);
    }
    dialog.default.placement-right {
      margin: auto var(--gds-sys-space-l) auto auto;
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--_in);

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
`;var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,O=t=>{throw TypeError(t)},r=(t,s,a,g)=>{for(var i=g>1?void 0:g?at(s,a):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(i=(g?b(s,a,i):b(i))||i);return g&&i&&st(s,a,i),i},S=(t,s,a)=>s.has(t)||O("Cannot "+a),e=(t,s,a)=>(S(t,s,"read from private field"),a?a.call(t):s.get(t)),l=(t,s,a)=>s.has(t)?O("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,a),n=(t,s,a,g)=>(S(t,s,"write to private field"),s.set(t,a),a),it=(t,s,a)=>(S(t,s,"access private method"),a),d,u,c,h,k,x,_,C,v,y,w,E,T,$,f;j();let o=class extends P(z(I(Y))){constructor(){super(...arguments),l(this,E),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,this.closedby="closerequest",l(this,d),l(this,u,!1),l(this,c,!1),l(this,h,t=>{e(this,v).call(this,t)&&(n(this,c,!0),this.close(t),n(this,c,!1))}),l(this,k,t=>{e(this,y).call(this,t)&&(n(this,c,!0),this.show(t),n(this,c,!1))}),l(this,x,t=>{t.preventDefault(),e(this,h).call(this,"native-close")}),l(this,_,t=>{t.key==="Escape"&&(t.preventDefault(),e(this,h).call(this,"native-close"))}),l(this,C,t=>{this.open?(n(this,c,!0),this.close("native-close"),n(this,c,!1),e(this,v).call(this,"native-close")):!e(this,c)&&e(this,d)&&e(this,d)!=="prop-change"&&e(this,v).call(this,e(this,d))}),l(this,v,t=>e(this,w).call(this,t)?(this.dispatchCustomEvent("gds-close",{detail:t}),!0):!1),l(this,y,t=>e(this,w).call(this,t)?(this.dispatchCustomEvent("gds-show",{detail:t}),!0):!1),l(this,w,t=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:this.open}})),l(this,$,t=>{e(this,k).call(this,"slotted-trigger")}),l(this,f,t=>{const s=t,a=this._elDialog;if((s.clientX>0||s.clientY>0)&&s.target===this&&a&&this.open){const i=a.getBoundingClientRect();!(i.top<=s.clientY&&s.clientY<=i.top+i.height&&i.left<=s.clientX&&s.clientX<=i.left+i.width)&&!e(this,u)&&e(this,h).call(this,"click-outside")}n(this,u,!1)})}show(t){this.open=!0,t&&e(this,y).call(this,t)}close(t){n(this,d,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),G(this)}render(){return W`<slot
        name="trigger"
        @slotchange=${it(this,E,T)}
      ></slot>
      ${X(this.open,()=>W`<dialog
            closedby=${this.closedby}
            @cancel=${e(this,x)}
            @close=${e(this,C)}
            class=${A({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
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
                    label=${M("Close")}
                    @click=${()=>e(this,h).call(this,"btn-close")}
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
                  overflow=${D(this.scrollable)?"auto":q}
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
                      @click=${()=>e(this,h).call(this,"btn-cancel")}
                      rank="secondary"
                      >${M("Cancel")}</gds-button
                    >
                    <gds-button
                      value="ok"
                      @click=${()=>e(this,h).call(this,"btn-ok")}
                    >
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(n(this,d,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),tt(this),this.removeEventListener("click",e(this,f)),requestAnimationFrame(()=>this.addEventListener("click",e(this,f))),this.closedby==="none"&&this._elDialog?.addEventListener("keydown",e(this,_)),U&&this._elDialog?.focus()})):(n(this,d,e(this,d)||"prop-change"),this._elDialog?.removeEventListener("keydown",e(this,_)),this._elDialog?.close(),G(this),document.removeEventListener("click",e(this,f)),this.requestUpdate("open"))}};d=new WeakMap;u=new WeakMap;c=new WeakMap;h=new WeakMap;k=new WeakMap;x=new WeakMap;_=new WeakMap;C=new WeakMap;v=new WeakMap;y=new WeakMap;w=new WeakMap;E=new WeakSet;T=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t?.addEventListener("click",e(this,$)),t?.setAttribute("aria-haspopup","dialog")}};$=new WeakMap;f=new WeakMap;o.styles=[et];o.styleExpressionBaseSelector="dialog";r([p({type:Boolean,reflect:!0})],o.prototype,"open",2);r([p()],o.prototype,"heading",2);r([p()],o.prototype,"variant",2);r([p()],o.prototype,"placement",2);r([p({type:Boolean})],o.prototype,"scrollable",2);r([p({reflect:!0})],o.prototype,"closedby",2);r([B("dialog")],o.prototype,"_elDialog",2);r([B('slot[name="trigger"]')],o.prototype,"_elTriggerSlot",2);r([F("open")],o.prototype,"_handleOpenChange",1);o=r([K("gds-dialog",{dependsOn:[N,J,R,Q,Z]}),V({label:"dialog",labelledBy:"dialog",describedBy:"dialog"}),H()],o);o.define();
