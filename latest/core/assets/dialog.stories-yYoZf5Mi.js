var L=t=>{throw TypeError(t)};var A=(t,e,o)=>e.has(t)||L("Cannot "+o);var l=(t,e,o)=>(A(t,e,"read from private field"),o?o.call(t):e.get(t)),g=(t,e,o)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);var C=(t,e,o)=>(A(t,e,"access private method"),o);import{s as mt,n as W,g as ft,G as yt,h as z}from"./custom-element-scoping-CpYtbs9r.js";import{a as rt}from"./query-p8xgzTDt.js";import{n as bt}from"./when-BR7zwNJC.js";import{w as vt}from"./watch-tFciLXSI.js";import{i as dt,x as ct}from"./lit-element-C_s9q329.js";import"./button-Lb43jKZV.js";import"./card-DaWIu-qR.js";import"./flex-DRZA5e5f.js";import"./cross-large-DoZOb4GU.js";import{m as j}from"./runtime-CMQcyTl6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./transitional-styles-Cc5JwJ9o.js";import"./observe-light-dom-CmJPHUQ4.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";import"./icon-C1rUgQqA.js";const wt=dt`
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
`;var k,b,v,S,h,gt,ht;const I=class I{constructor(){g(this,h);g(this,k,!mt());g(this,b,new Map);g(this,v,new Map);g(this,S,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new I),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,o){if(l(this,k)){const s=Array.isArray(o)?o.map(a=>a.toString()).join(""):o.toString();C(this,h,gt).call(this,e,s)}else o.styleSheet&&C(this,h,ht).call(this,e,o.styleSheet)}};k=new WeakMap,b=new WeakMap,v=new WeakMap,S=new WeakMap,h=new WeakSet,gt=function(e,o){let s=l(this,v).get(e);s||(s=document.createElement("style"),l(this,v).set(e,s)),s.textContent=o,document.head.appendChild(s)},ht=function(e,o){l(this,b).set(e,o),document.adoptedStyleSheets=[...l(this,S),...Array.from(l(this,b).values())]};let D=I;const T=new Set;function kt(){D.instance.injectGlobalStyles("dialog-scroll-lock",dt`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function St(t){if(T.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=_t()+Et();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",o),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function N(t){T.delete(t),T.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function _t(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Et(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var Ct=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,pt=t=>{throw TypeError(t)},c=(t,e,o,s)=>{for(var a=s>1?void 0:s?xt(e,o):e,_=t.length-1,E;_>=0;_--)(E=t[_])&&(a=(s?E(e,o,a):E(a))||a);return s&&a&&Ct(e,o,a),a},B=(t,e,o)=>e.has(t)||pt("Cannot "+o),i=(t,e,o)=>(B(t,e,"read from private field"),o?o.call(t):e.get(t)),r=(t,e,o)=>e.has(t)?pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),x=(t,e,o,s)=>(B(t,e,"write to private field"),e.set(t,o),o),Dt=(t,e,o)=>(B(t,e,"access private method"),o),d,$,O,P,w,G,ut,M;kt();let n=class extends yt{constructor(){super(...arguments),r(this,G),this.open=!1,this.variant="default",r(this,d),r(this,$,t=>{const o=t.target.returnValue;this.close(o||"native-close"),o!=="prop-change"&&i(this,O).call(this,o)}),r(this,O,t=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),i(this,w).call(this,t)}),r(this,P,t=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),i(this,w).call(this,t)}),r(this,w,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1}))}),r(this,M,t=>{this.show("slotted-trigger")})}show(t){this.open=!0,t&&i(this,P).call(this,t)}close(t){x(this,d,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),N(this)}render(){return z`<slot
        name="trigger"
        @slotchange=${Dt(this,G,ut)}
      ></slot>
      ${bt(this.open,()=>z`<dialog
            @close=${i(this,$)}
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
                border="0 0 4xs/primary 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${j("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-container
                id="content"
                padding="m 0"
                overflow="auto"
                flex="1"
              >
                <slot></slot>
              </gds-container>
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
                    >${j("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(x(this,d,void 0),this.updateComplete.then(()=>{var e;(e=this._elDialog)==null||e.showModal(),St(this)})):(x(this,d,i(this,d)||"prop-change"),(t=this._elDialog)==null||t.close(i(this,d)),N(this),this.requestUpdate("open"))}};d=new WeakMap;$=new WeakMap;O=new WeakMap;P=new WeakMap;w=new WeakMap;G=new WeakSet;ut=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",i(this,M)),t==null||t.setAttribute("aria-haspopup","dialog")}};M=new WeakMap;n.styles=[wt];c([W({type:Boolean,reflect:!0})],n.prototype,"open",2);c([W()],n.prototype,"heading",2);c([W()],n.prototype,"variant",2);c([rt("dialog")],n.prototype,"_elDialog",2);c([rt('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);c([vt("open")],n.prototype,"_handleOpenChange",1);n=c([ft("gds-dialog")],n);const Jt={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog is a type of modal window that appears in front of app content
to provide critical information or ask for a decision. Dialogs disable
all app functionality when they appear, and remain on screen until confirmed,
dismissed, or a required action has been taken.

@beta`}}}},y={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{heading:"Dialog heading",innerHTML:`<gds-button slot="trigger">Open Dialog</gds-button>

This is the content of the dialog.`}},p={...y},u={...y,args:{...y.args,variant:"slide-out"}},m={...y,render:()=>ct`<gds-button
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
      </gds-dialog>`},f={...y,render:()=>ct`<gds-dialog
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
    </gds-dialog>`};var Y,R,V,q,U;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:`The easiest way to set up a dialog is to put a button in the trigger slot. This will
automatically open the dialog when the button is clicked.`,...(U=(q=p.parameters)==null?void 0:q.docs)==null?void 0:U.description}}};var H,X,F,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out'
  }
}`,...(F=(X=u.parameters)==null?void 0:X.docs)==null?void 0:F.source},description:{story:"You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.",...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Z,tt,et,ot;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(tt=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:tt.source},description:{story:'You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.\nIn this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get\nthis attribute automatically.\n\nInside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.',...(ot=(et=m.parameters)==null?void 0:et.docs)==null?void 0:ot.description}}};var st,at,nt,it,lt;f.parameters={...f.parameters,docs:{...(st=f.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(nt=(at=f.parameters)==null?void 0:at.docs)==null?void 0:nt.source},description:{story:"You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.\n\nWhen `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the\nevent will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or\nclose the dialog, the event will be emitted with the parameter as the event detail.",...(lt=(it=f.parameters)==null?void 0:it.docs)==null?void 0:lt.description}}};const Kt=["Default","SlideOut","CustomButtons","Events"];export{m as CustomButtons,p as Default,f as Events,u as SlideOut,Kt as __namedExportsOrder,Jt as default};
