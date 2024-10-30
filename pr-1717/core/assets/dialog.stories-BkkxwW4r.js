var O=t=>{throw TypeError(t)};var L=(t,e,s)=>e.has(t)||O("Cannot "+s);var d=(t,e,s)=>(L(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?O("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var x=(t,e,s)=>(L(t,e,"access private method"),s);import{s as Y,n as W,g as F,G as H,h as z}from"./custom-element-scoping-CpYtbs9r.js";import{a as R}from"./query-p8xgzTDt.js";import{n as J}from"./when-BR7zwNJC.js";import{T as K}from"./transitional-styles-Cc5JwJ9o.js";import{i as V,x as Q}from"./lit-element-C_s9q329.js";import"./button-CDW85ISG.js";import"./card-DaWIu-qR.js";import"./flex-DRZA5e5f.js";import"./cross-large-DoZOb4GU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";import"./icon-C1rUgQqA.js";const Z=V`
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
`;var _,m,f,S,p,I,U;const P=class P{constructor(){g(this,p);g(this,_,!Y());g(this,m,new Map);g(this,f,new Map);g(this,S,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new P),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(e,s){if(d(this,_)){const o=Array.isArray(s)?s.map(a=>a.toString()).join(""):s.toString();x(this,p,I).call(this,e,o)}else s.styleSheet&&x(this,p,U).call(this,e,s.styleSheet)}};_=new WeakMap,m=new WeakMap,f=new WeakMap,S=new WeakMap,p=new WeakSet,I=function(e,s){let o=d(this,f).get(e);o||(o=document.createElement("style"),d(this,f).set(e,o)),o.textContent=s,document.head.appendChild(o)},U=function(e,s){d(this,m).set(e,s),document.adoptedStyleSheets=[...d(this,S),...Array.from(d(this,m).values())]};let E=P;const C=new Set;function tt(){E.instance.injectGlobalStyles("dialog-scroll-lock",V`
      @supports (scrollbar-gutter: stable) {
        .gds-scroll-lock {
          scrollbar-gutter: var(--gds-scroll-lock-gutter) !important;
        }

        .gds-scroll-lock body {
          overflow: hidden !important;
        }
      }

      /** This can go away once Safari has scrollbar-gutter support. */
      @supports not (scrollbar-gutter: stable) {
        .gds-scroll-lock body {
          padding-right: var(--gds-scroll-lock-size) !important;
          overflow: hidden !important;
        }
      }
    `)}function et(t){if(console.log("lockingEl",t),C.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const e=st()+ot();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${e}px`)}}function B(t){C.delete(t),C.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function st(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ot(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}var lt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,q=t=>{throw TypeError(t)},u=(t,e,s,o)=>{for(var a=o>1?void 0:o?at(e,s):e,k=t.length-1,w;k>=0;k--)(w=t[k])&&(a=(o?w(e,s,a):w(a))||a);return o&&a&&lt(e,s,a),a},G=(t,e,s)=>e.has(t)||q("Cannot "+s),l=(t,e,s)=>(G(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>e.has(t)?q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c=(t,e,s,o)=>(G(t,e,"write to private field"),e.set(t,s),s),it=(t,e,s)=>(G(t,e,"access private method"),s),h,i,D,y,T,v,$,X,M;tt();let r=class extends H{constructor(){super(...arguments),n(this,$),n(this,h,!1),this.variant="default",n(this,i),this.close=t=>{this._elDialog&&(c(this,i,t),c(this,h,!1),this._elDialog.close(t??"close-method"),B(this._elDialog),l(this,y).call(this),this.requestUpdate())},n(this,D,t=>{const e=t.target,s=e.returnValue;c(this,h,!1),s||(B(e),c(this,i,"native-close"),l(this,y).call(this))}),n(this,y,()=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:l(this,i),bubbles:!1,composed:!1})),l(this,v).call(this)}),n(this,T,()=>{this.dispatchEvent(new CustomEvent("gds-show",{bubbles:!1,composed:!1})),l(this,v).call(this)}),n(this,v,()=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open},bubbles:!1,composed:!1}))}),n(this,M,t=>{t.preventDefault(),this.open=!0,l(this,T).call(this)})}get open(){return l(this,h)}set open(t){c(this,h,t),this.updateComplete.then(()=>{var e;t===!0?(c(this,i,void 0),this.updateComplete.then(()=>{this._elDialog&&(this._elDialog.showModal(),et(this._elDialog))})):(c(this,i,"open-prop-false"),(e=this._elDialog)==null||e.close(l(this,i)))})}get returnValue(){return l(this,i)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-dialog")}render(){return z`<slot
        name="trigger"
        @slotchange=${it(this,$,X)}
      ></slot>
      ${J(this.open,()=>z`<dialog
            @close=${l(this,D)}
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
          </dialog>`)}`}};h=new WeakMap;i=new WeakMap;D=new WeakMap;y=new WeakMap;T=new WeakMap;v=new WeakMap;$=new WeakSet;X=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",l(this,M))}};M=new WeakMap;r.styles=[Z];u([W({type:Boolean,reflect:!0})],r.prototype,"open",1);u([W()],r.prototype,"heading",2);u([W()],r.prototype,"variant",2);u([R("dialog")],r.prototype,"_elDialog",2);u([R('slot[name="trigger"]')],r.prototype,"_elTriggerSlot",2);r=u([F("gds-dialog")],r);const $t={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"]},nt={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},b={...nt,name:"Default",render:()=>Q`<gds-dialog @gds-close=${console.log} heading="Dialog heading">
        <gds-button slot="trigger">Open Dialog</gds-button>
        This is the content of the dialog.
      </gds-dialog>
      <gds-dialog
        @gds-close=${console.log}
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
      </gds-dialog>`};var j,A,N;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: () => html\`<gds-dialog @gds-close=\${console.log} heading="Dialog heading">
        <gds-button slot="trigger">Open Dialog</gds-button>
        This is the content of the dialog.
      </gds-dialog>
      <gds-dialog
        @gds-close=\${console.log}
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
}`,...(N=(A=b.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Wt=["Default"];export{b as Default,Wt as __namedExportsOrder,$t as default};
