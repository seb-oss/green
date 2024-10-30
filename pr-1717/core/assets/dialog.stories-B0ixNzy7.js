var M=t=>{throw TypeError(t)};var P=(t,e,s)=>e.has(t)||M("Cannot "+s);var i=(t,e,s)=>(P(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var S=(t,e,s)=>(P(t,e,"access private method"),s);import{s as X,n as T,g as Y,G as F,h as L}from"./custom-element-scoping-CpYtbs9r.js";import{a as N}from"./query-p8xgzTDt.js";import{n as H}from"./when-BR7zwNJC.js";import{w as J}from"./watch-tFciLXSI.js";import{i as R,x as K}from"./lit-element-C_s9q329.js";import"./button-CDW85ISG.js";import"./card-DaWIu-qR.js";import"./flex-DRZA5e5f.js";import"./cross-large-DoZOb4GU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./transitional-styles-Cc5JwJ9o.js";import"./runtime-CMQcyTl6.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";import"./icon-C1rUgQqA.js";const Q=R`
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
`;var y,p,u,b,h,V,I;const O=class O{constructor(){g(this,h);g(this,y,!X());g(this,p,new Map);g(this,u,new Map);g(this,b,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new O),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,s){if(i(this,y)){const o=Array.isArray(s)?s.map(n=>n.toString()).join(""):s.toString();S(this,h,V).call(this,e,o)}else s.styleSheet&&S(this,h,I).call(this,e,s.styleSheet)}};y=new WeakMap,p=new WeakMap,u=new WeakMap,b=new WeakMap,h=new WeakSet,V=function(e,s){let o=i(this,u).get(e);o||(o=document.createElement("style"),i(this,u).set(e,o)),o.textContent=s,document.head.appendChild(o)},I=function(e,s){i(this,p).set(e,s),document.adoptedStyleSheets=[...i(this,b),...Array.from(i(this,p).values())]};let k=O;const x=new Set;function Z(){k.instance.injectGlobalStyles("dialog-scroll-lock",R`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function tt(t){if(x.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=et()+st();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function z(t){x.delete(t),x.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function et(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function st(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,U=t=>{throw TypeError(t)},c=(t,e,s,o)=>{for(var n=o>1?void 0:o?nt(e,s):e,v=t.length-1,_;v>=0;v--)(_=t[v])&&(n=(o?_(e,s,n):_(n))||n);return o&&n&&ot(e,s,n),n},G=(t,e,s)=>e.has(t)||U("Cannot "+s),l=(t,e,s)=>(G(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),w=(t,e,s,o)=>(G(t,e,"write to private field"),e.set(t,s),s),at=(t,e,s)=>(G(t,e,"access private method"),s),r,E,C,D,f,$,q,W;Z();let a=class extends F{constructor(){super(...arguments),d(this,$),this.open=!1,this.variant="default",d(this,r),d(this,E,t=>{const s=t.target.returnValue;this.close(s||"native-close"),s!=="prop-change"&&l(this,C).call(this,s)}),d(this,C,t=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:t,bubbles:!1,composed:!1})),l(this,f).call(this,t)}),d(this,D,t=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:t,bubbles:!1,composed:!1})),l(this,f).call(this,t)}),d(this,f,t=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:this.open},bubbles:!1,composed:!1}))}),d(this,W,t=>{this.show("slotted-trigger")})}show(t){this.open=!0,t&&l(this,D).call(this,t)}close(t){w(this,r,t),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),z(this)}render(){return L`<slot
        name="trigger"
        @slotchange=${at(this,$,q)}
      ></slot>
      ${H(this.open,()=>L`<dialog
            @close=${l(this,E)}
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
                    >Cancel</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var t;this.open?(w(this,r,void 0),this.updateComplete.then(()=>{var e;(e=this._elDialog)==null||e.showModal(),tt(this)})):(w(this,r,l(this,r)||"prop-change"),(t=this._elDialog)==null||t.close(l(this,r)),z(this),this.requestUpdate("open"))}};r=new WeakMap;E=new WeakMap;C=new WeakMap;D=new WeakMap;f=new WeakMap;$=new WeakSet;q=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",l(this,W))}};W=new WeakMap;a.styles=[Q];c([T({type:Boolean,reflect:!0})],a.prototype,"open",2);c([T()],a.prototype,"heading",2);c([T()],a.prototype,"variant",2);c([N("dialog")],a.prototype,"_elDialog",2);c([N('slot[name="trigger"]')],a.prototype,"_elTriggerSlot",2);c([J("open")],a.prototype,"_handleOpenChange",1);a=c([Y("gds-dialog")],a);const $t={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"]},lt={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},m={...lt,name:"Default",render:()=>K`<gds-dialog @gds-close=${console.log} heading="Dialog heading">
        <gds-button slot="trigger">Open Dialog</gds-button>
        This is the content of the dialog.
      </gds-dialog>
      <gds-dialog
        @gds-close=${console.log}
        @gds-show=${console.log}
        @gds-ui-state=${console.log}
        heading="Dialog heading"
        variant="slide-out"
        id="my-dialog"
      >
        <gds-button slot="trigger">Open Slide-out dialog</gds-button>
        This is the content of the dialog.
        <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
        <gds-button
          slot="footer"
          @click=${()=>{var t;return(t=document.getElementById("my-dialog"))==null?void 0:t.close("closed it")}}
          >Custom btn 2</gds-button
        >
      </gds-dialog>`};var B,j,A;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: () => html\`<gds-dialog @gds-close=\${console.log} heading="Dialog heading">
        <gds-button slot="trigger">Open Dialog</gds-button>
        This is the content of the dialog.
      </gds-dialog>
      <gds-dialog
        @gds-close=\${console.log}
        @gds-show=\${console.log}
        @gds-ui-state=\${console.log}
        heading="Dialog heading"
        variant="slide-out"
        id="my-dialog"
      >
        <gds-button slot="trigger">Open Slide-out dialog</gds-button>
        This is the content of the dialog.
        <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
        <gds-button
          slot="footer"
          @click=\${() => (document.getElementById('my-dialog') as GdsDialog)?.close('closed it')}
          >Custom btn 2</gds-button
        >
      </gds-dialog>\`
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const Tt=["Default"];export{m as Default,Tt as __namedExportsOrder,$t as default};
