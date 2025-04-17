import{m as D}from"./runtime-BL31MtW8.js";import{l as et}from"./localized-decorator-DtmrKsyB.js";import{n as C,G as ot,h as G,g as st}from"./custom-element-scoping-b4c89-hi.js";import{a as J}from"./query-p8xgzTDt.js";import{n as at}from"./when-BR7zwNJC.js";import{w as nt}from"./watch-tFciLXSI.js";import{G as it}from"./button.component-DtF9Ct8d.js";import{G as lt}from"./card.component-NhDjIX8u.js";import{G as rt}from"./flex.component-CPPMsy9S.js";import{I as dt}from"./cross-large.component-q0mIQ94A.js";import{i as K,x as Q}from"./lit-element-Bx14lxc-.js";import{G as ct}from"./tokens.style-FJSmZZcv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CLkQCQV5.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./div.component-BuGkGqpt.js";import"./icon-61apcvHX.js";const gt=K`
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
`,v=new Set;function pt(){ct.instance.injectGlobalStyles("dialog-scroll-lock",K`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function ht(t){if(v.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=ut()+mt();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",o),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function $(t){v.delete(t),v.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function ut(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function mt(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var ft=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Z=t=>{throw TypeError(t)},r=(t,e,o,d)=>{for(var n=d>1?void 0:d?bt(e,o):e,f=t.length-1,b;f>=0;f--)(b=t[f])&&(n=(d?b(e,o,n):b(n))||n);return d&&n&&ft(e,o,n),n},x=(t,e,o)=>e.has(t)||Z("Cannot "+o),a=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),i=(t,e,o)=>e.has(t)?Z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),y=(t,e,o,d)=>(x(t,e,"write to private field"),e.set(t,o),o),yt=(t,e,o)=>(x(t,e,"access private method"),o),l,w,k,_,m,E,tt,S;pt();let s=class extends ot{constructor(){super(...arguments),i(this,E),this.open=!1,this.variant="default",i(this,l),i(this,w,t=>{const o=t.target.returnValue;this.close(o||"native-close"),o!=="prop-change"&&a(this,k).call(this,o)}),i(this,k,t=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),a(this,m).call(this,t)}),i(this,_,t=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),a(this,m).call(this,t)}),i(this,m,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1}))}),i(this,S,t=>{this.show("slotted-trigger")})}show(t){this.open=!0,t&&a(this,_).call(this,t)}close(t){y(this,l,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),$(this)}render(){return G`<slot
        name="trigger"
        @slotchange=${yt(this,E,tt)}
      ></slot>
      ${at(this.open,()=>G`<dialog
            @close=${a(this,w)}
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
                  label=${D("Close")}
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
                    >${D("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(y(this,l,void 0),this.updateComplete.then(()=>{var e;(e=this._elDialog)==null||e.showModal(),ht(this)})):(y(this,l,a(this,l)||"prop-change"),(t=this._elDialog)==null||t.close(a(this,l)),$(this),this.requestUpdate("open"))}};l=new WeakMap;w=new WeakMap;k=new WeakMap;_=new WeakMap;m=new WeakMap;E=new WeakSet;tt=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",a(this,S)),t==null||t.setAttribute("aria-haspopup","dialog")}};S=new WeakMap;s.styles=[gt];r([C({type:Boolean,reflect:!0})],s.prototype,"open",2);r([C()],s.prototype,"heading",2);r([C()],s.prototype,"variant",2);r([J("dialog")],s.prototype,"_elDialog",2);r([J('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);r([nt("open")],s.prototype,"_handleOpenChange",1);s=r([st("gds-dialog",{dependsOn:[it,lt,rt,dt]}),et()],s);s.define();const Yt={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog is a type of modal window that appears in front of app content
to provide critical information or ask for a decision. Dialogs disable
all app functionality when they appear, and remain on screen until confirmed,
dismissed, or a required action has been taken.

@beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{heading:"Dialog heading",innerHTML:`<gds-button slot="trigger">Open Dialog</gds-button>

This is the content of the dialog.`}},c={...u},g={...u,args:{...u.args,variant:"slide-out"}},p={...u,render:()=>Q`<gds-button
        aria-haspopup="dialog"
        onclick="document.getElementById('my-dialog').show()"
        >Open dialog</gds-button
      >
      <gds-dialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <gds-button
          slot="footer"
          onclick="document.getElementById('my-dialog') as GdsDialog)?.close('cusom close')"
          >Custom close button</gds-button
        >
      </gds-dialog>`},h={...u,render:()=>Q`<gds-dialog
      @gds-close=${console.log}
      @gds-show=${console.log}
      @gds-ui-state=${console.log}
      heading="Dialog heading"
      id="my-dialog"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
      <gds-button
        slot="footer"
        onclick="document.getElementById('my-dialog').close('cusom close')"
        >Custom btn 2</gds-button
      >
    </gds-dialog>`};var O,P,T,W,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:`The easiest way to set up a dialog is to put a button in the trigger slot. This will
automatically open the dialog when the button is clicked.`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var I,M,z,L,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out'
  }
}`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:"You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.",...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var N,Y,V,q,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-button
        aria-haspopup="dialog"
        onclick="document.getElementById('my-dialog').show()"
        >Open dialog</gds-button
      >
      <gds-dialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <gds-button
          slot="footer"
          onclick="document.getElementById('my-dialog') as GdsDialog)?.close('cusom close')"
          >Custom close button</gds-button
        >
      </gds-dialog>\`
}`,...(V=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:'You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.\nIn this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get\nthis attribute automatically.\n\nInside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.',...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.description}}};var U,F,H,X,j;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-dialog
      @gds-close=\${console.log}
      @gds-show=\${console.log}
      @gds-ui-state=\${console.log}
      heading="Dialog heading"
      id="my-dialog"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
      <gds-button
        slot="footer"
        onclick="document.getElementById('my-dialog').close('cusom close')"
        >Custom btn 2</gds-button
      >
    </gds-dialog>\`
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.\n\nWhen `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the\nevent will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or\nclose the dialog, the event will be emitted with the parameter as the event detail.",...(j=(X=h.parameters)==null?void 0:X.docs)==null?void 0:j.description}}};const Vt=["Default","SlideOut","CustomButtons","Events"];export{p as CustomButtons,c as Default,h as Events,g as SlideOut,Vt as __namedExportsOrder,Yt as default};
