import{n as y,g as T,G as O,h as w}from"./custom-element-scoping-CpYtbs9r.js";import{a as E}from"./query-p8xgzTDt.js";import{n as M}from"./when-BR7zwNJC.js";import{T as W}from"./transitional-styles-Cc5JwJ9o.js";import{i as G,x as P}from"./lit-element-C_s9q329.js";import"./button-DTxVbxXJ.js";import"./card-DaWIu-qR.js";import"./flex-DRZA5e5f.js";import"./cross-large-DoZOb4GU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-RalixZsd.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";import"./icon-C1rUgQqA.js";const B=G`
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
        transform: translateX(16px);
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
`;var V=Object.defineProperty,q=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},g=(t,e,s,c)=>{for(var l=c>1?void 0:c?q(e,s):e,u=t.length-1,m;u>=0;u--)(m=t[u])&&(l=(c?m(e,s,l):m(l))||l);return c&&l&&V(e,s,l),l},_=(t,e,s)=>e.has(t)||$("Cannot "+s),o=(t,e,s)=>(_(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),r=(t,e,s,c)=>(_(t,e,"write to private field"),e.set(t,s),s),z=(t,e,s)=>(_(t,e,"access private method"),s),d,a,f,h,b,v,S,k;let i=class extends O{constructor(){super(...arguments),n(this,v),n(this,d,!1),this.variant="default",n(this,a),this.close=t=>{var e;r(this,a,t),r(this,d,!1),(e=this._elDialog)==null||e.close(t??"close-method"),o(this,h).call(this),this.requestUpdate()},n(this,f,t=>{const s=t.target.returnValue;r(this,d,!1),this.requestUpdate(),s||(r(this,a,"native-close"),o(this,h).call(this))}),n(this,h,()=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:o(this,a),bubbles:!1,composed:!1}))}),n(this,b,()=>{this.dispatchEvent(new CustomEvent("gds-show",{bubbles:!1,composed:!1}))}),n(this,k,t=>{t.preventDefault(),this.open=!0,o(this,b).call(this)})}get open(){return o(this,d)}set open(t){r(this,d,t),this.updateComplete.then(()=>{var e;t===!0?(r(this,a,void 0),this.updateComplete.then(()=>{var s;return(s=this._elDialog)==null?void 0:s.showModal()})):(r(this,a,"open-prop-false"),(e=this._elDialog)==null||e.close(o(this,a)),o(this,h).call(this))})}get returnValue(){return o(this,a)}connectedCallback(){super.connectedCallback(),W.instance.apply(this,"gds-dialog")}render(){return w`<slot
        name="trigger"
        @slotchange=${z(this,v,S)}
      ></slot>
      ${M(this.open,()=>w`<dialog
            @close=${o(this,f)}
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
          </dialog>`)}`}};d=new WeakMap;a=new WeakMap;f=new WeakMap;h=new WeakMap;b=new WeakMap;v=new WeakSet;S=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const t=this._elTriggerSlot.assignedElements()[0];t==null||t.addEventListener("click",o(this,k))}};k=new WeakMap;i.styles=[B];g([y({type:Boolean,reflect:!0})],i.prototype,"open",1);g([y()],i.prototype,"heading",2);g([y()],i.prototype,"variant",2);g([E("dialog")],i.prototype,"_elDialog",2);g([E('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);i=g([T("gds-dialog")],i);const lt={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"]},I={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...I,name:"Default",render:()=>P`<gds-dialog @gds-close=${console.log} heading="Dialog heading">
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
      </gds-dialog>`};var x,D,C;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const nt=["Default"];export{p as Default,nt as __namedExportsOrder,lt as default};
