import{m as E}from"./runtime-BL31MtW8.js";import{l as D}from"./localized-decorator-DtmrKsyB.js";import{h as x,n as _,G as P,g as z}from"./custom-element-scoping-CNGU1oQ0.js";import{a as S}from"./query-p8xgzTDt.js";import{n as M}from"./when-BR7zwNJC.js";import{w as O}from"./watch-tFciLXSI.js";import{G as L,i as B}from"./tokens.style-CfX8-1wa.js";import{a as T,c as N}from"./declarative-layout-mixins-dHcexrGz.js";import{G as X}from"./button.component-CHPsMAjI.js";import{G as Y}from"./card.component-CvmYXsVs.js";import{G as I}from"./div.component-TOxNJhjo.js";import{G as R}from"./flex.component-BoXEzmcd.js";import{I as A}from"./cross-small.component-iybmygMG.js";import{i as G}from"./lit-element-Bx14lxc-.js";const V=G`
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
      --_in: var(--gds-sys-space-l);
      width: 600px;
      height: auto;
      inset: 0 0 0 auto;
      @starting-style {
        transform: translateX(96px);
      }
      @media (min-width: 648px) {
        inset: var(--_in) var(--_in) var(--_in) auto;
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
      font-size: var(--gds-sys-text-size-heading-s);
      font-weight: 400;
    }
  }
`,f=new Set;function q(){L.instance.injectGlobalStyles("dialog-scroll-lock",G`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function F(t){if(f.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=K()+U();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function C(t){f.delete(t),f.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function K(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function U(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var j=Object.defineProperty,H=Object.getOwnPropertyDescriptor,W=t=>{throw TypeError(t)},r=(t,e,s,d)=>{for(var o=d>1?void 0:d?H(e,s):e,h=t.length-1,c;h>=0;h--)(c=t[h])&&(o=(d?c(e,s,o):c(o))||o);return d&&o&&j(e,s,o),o},w=(t,e,s)=>e.has(t)||W("Cannot "+s),i=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?W("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),m=(t,e,s,d)=>(w(t,e,"write to private field"),e.set(t,s),s),J=(t,e,s)=>(w(t,e,"access private method"),s),n,v,g,y,u,b,$,k,p;q();let a=class extends T(N(P)){constructor(){super(...arguments),l(this,b),this.open=!1,this.variant="default",l(this,n),l(this,v,t=>{const s=t.target.returnValue;if(s!=="prop-change"){if(!i(this,g).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),l(this,g,t=>(this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),i(this,u).call(this,t))),l(this,y,t=>(this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),i(this,u).call(this,t))),l(this,u,t=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1,cancelable:!0}))),l(this,k,t=>{this.show("slotted-trigger")}),l(this,p,t=>{const e=t,s=this._elDialog;if((e.clientX>0||e.clientY>0)&&s&&this.open){const o=s.getBoundingClientRect(),h=o.top<=e.clientY&&e.clientY<=o.top+o.height&&o.left<=e.clientX&&e.clientX<=o.left+o.width,c="click-outside";!h&&i(this,g).call(this,c)&&this.close(c)}})}show(t){this.open=!0,t&&i(this,y).call(this,t)}close(t){m(this,n,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),C(this)}render(){return x`<slot
        name="trigger"
        @slotchange=${J(this,b,$)}
      ></slot>
      ${M(this.open,()=>x`<dialog
            @close=${i(this,v)}
            class=${this.variant}
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
                  label=${E("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-small></gds-icon-cross-small
                ></gds-button>
              </gds-flex>
              <gds-div id="content" overflow="auto" flex="1">
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
                    >${E("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(m(this,n,void 0),this.updateComplete.then(()=>{var e,s;(e=this._elDialog)==null||e.showModal(),F(this),document.removeEventListener("click",i(this,p)),requestAnimationFrame(()=>document.addEventListener("click",i(this,p))),B&&((s=this._elDialog)==null||s.focus())})):(m(this,n,i(this,n)||"prop-change"),(t=this._elDialog)==null||t.close(i(this,n)),C(this),document.removeEventListener("click",i(this,p)),this.requestUpdate("open"))}};n=new WeakMap;v=new WeakMap;g=new WeakMap;y=new WeakMap;u=new WeakMap;b=new WeakSet;$=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",i(this,k)),t==null||t.setAttribute("aria-haspopup","dialog")}};k=new WeakMap;p=new WeakMap;a.styles=[V];a.styleExpressionBaseSelector="dialog";r([_({type:Boolean,reflect:!0})],a.prototype,"open",2);r([_()],a.prototype,"heading",2);r([_()],a.prototype,"variant",2);r([S("dialog")],a.prototype,"_elDialog",2);r([S('slot[name="trigger"]')],a.prototype,"_elTriggerSlot",2);r([O("open")],a.prototype,"_handleOpenChange",1);a=r([z("gds-dialog",{dependsOn:[X,Y,I,R,A]}),D()],a);export{a as G};
