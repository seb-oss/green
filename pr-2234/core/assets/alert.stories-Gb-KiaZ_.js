import{n as m,r as $,G as vt,h as c,g as bt}from"./gds-element-KHa0AloG.js";import{m as lt}from"./runtime-BL31MtW8.js";import{l as yt}from"./localized-decorator-DtmrKsyB.js";import{i as wt,E as _}from"./lit-element-Bx14lxc-.js";import{e as _t}from"./class-map-CXsQwv0r.js";import{n as xt,e as At}from"./ref-R0wBYijq.js";import{u as kt,s as S}from"./static-B8S6DEnV.js";import{t as Ct}from"./tokens.style-DC2Hb-2P.js";import{G as It}from"./button.component-BHtocGTN.js";import{G as Tt}from"./card.component-C21NCPsO.js";import{I as Dt}from"./circle-check.component-rQ3xRYz_.js";import"./triangle-exclamation-BdflJaYA.js";import"./cross-small-j7P_yAOc.js";import{a as Lt,I as $t}from"./triangle-exclamation.component-D-2uW-Eb.js";import{I as Mt}from"./cross-small.component-D1Ljw-03.js";import"./card-d-tVEDXR.js";import"./button-nPQff-yp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./icon-BDCl8D0g.js";const Pt=wt`
  :host {
    display: block;
    container-type: inline-size;
    margin: 0.3rem;
  }

  #alert-message {
    --grid-areas: 'icon message close' 'icon action close';
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: var(--grid-areas);
    width: 100%;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    gap: var(--gds-sys-space-xs);
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    #alert-message {
      animation: slideIn 0.3s ease-out;
    }
  }

  #alert-message.dismissing {
    opacity: 0;
    transform: translateY(-1rem);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    #alert-message.dismissing {
      transform: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }

  /* Focus styles */
  #alert-message:focus-within {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Layout elements */
  .icon {
    grid-area: icon;
  }

  .message {
    grid-area: message;
    font-size: var(--gds-font-size-base, 1rem);
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin: 0 0 0 var(--gds-sys-space-2xs);
  }

  .message-text {
    display: inline;
    white-space: normal;
    line-height: var(--gds-sys-text-line-height-body-m);
    font-size: var(--gds-sys-text-size-body-m);
  }

  /* Buttons */

  [gds-element='gds-button'] {
    grid-area: unset;
    width: auto;
    min-width: auto;
    display: inline-flex;
  }

  /* Timer bar */
  .timer-bar {
    position: absolute;
    inset: auto 0 0;
    height: 0.25rem;
    background: var(--gds-border-color, rgba(0, 0, 0, 0.1));
    border-radius: 0 0 var(--gds-radius-md, 0.25rem)
      var(--gds-radius-md, 0.25rem);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--gds-accent, currentColor);
    opacity: 0.6;
    will-change: width;
  }

  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  /* Responsive layouts */
  /* Small: stacked */
  @container (max-width: 600px) {
    #alert-message {
      grid-template-areas: 'icon message close' 'cta cta cta';
    }

    .action-button {
      grid-area: cta;
      margin-top: var(--gds-sys-space-xs);
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    #alert-message {
      grid-template-areas: 'icon message cta close';
    }
    .message {
      gap: 0.5rem;
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    #alert-message {
      grid-template-columns: auto 1fr auto auto;
      grid-template-areas: 'icon message cta close';
    }

    .message {
      justify-content: center;
    }

    .close-btn {
      grid-area: close;
      justify-self: end;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`;var St=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,ct=t=>{throw TypeError(t)},o=(t,e,r,g)=>{for(var l=g>1?void 0:g?Et(e,r):e,C=t.length-1,I;C>=0;C--)(I=t[C])&&(l=(g?I(e,r,l):I(l))||l);return g&&l&&St(e,r,l),l},M=(t,e,r)=>e.has(t)||ct("Cannot "+r),d=(t,e,r)=>(M(t,e,"read from private field"),r?r.call(t):e.get(t)),p=(t,e,r)=>e.has(t)?ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),x=(t,e,r,g)=>(M(t,e,"write to private field"),e.set(t,r),r),a=(t,e,r)=>(M(t,e,"access private method"),r),y,w,T,D,s,L,A,k,dt,mt,P,gt,pt,ut,ht,ft;const Ht={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},Bt=300,Gt=100;let i=class extends vt{constructor(){super(),p(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,p(this,y),p(this,w),p(this,T,At()),p(this,D,{hostConnected:()=>{this.timeout>0&&a(this,s,L).call(this)},hostDisconnected:()=>a(this,s,A).call(this)}),this.addController(d(this,D))}updated(t){t.has("timeout")&&(a(this,s,A).call(this),this.timeout>0&&a(this,s,L).call(this))}render(){if(this._cardHidden)return _;const t={dismissing:this._isClosing,dismissible:this.dismissible};return c`
      <gds-card
        ${xt(d(this,T))}
        role=${this.role}
        aria-label=${this.label}
        variant=${d(this,s,P).card}
        class=${_t(t)}
        @keydown=${a(this,s,mt)}
        id="alert-message"
        padding="m"
      >
        ${a(this,s,gt).call(this)} ${a(this,s,pt).call(this)}
        ${this.buttonLabel?a(this,s,ut).call(this,this.buttonLabel):_}
        ${a(this,s,ht).call(this)} ${a(this,s,ft).call(this)}
      </gds-card>
    `}};y=new WeakMap;w=new WeakMap;T=new WeakMap;D=new WeakMap;s=new WeakSet;L=function(){const t=Date.now();this._progress=100,x(this,w,window.setInterval(()=>{const e=Date.now()-t;this._progress=Math.max(0,(this.timeout-e)/this.timeout*100)},Gt)),x(this,y,window.setTimeout(()=>a(this,s,k).call(this,"timeout"),this.timeout))};A=function(){clearTimeout(d(this,y)),clearInterval(d(this,w)),x(this,y,x(this,w,void 0))};k=async function(t){this._isClosing=!0,a(this,s,A).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,Bt)),this._cardHidden=!0};dt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};mt=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),a(this,s,k).call(this,"escape"))};P=function(){return Ht[this.variant]};gt=function(){const t=`gds-icon-${d(this,s,P).icon}`;return c`${kt`<${S(t)} class="icon" solid aria-hidden="true" size="24px"></${S(t)}>`}`};pt=function(){return c`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};ut=function(t){return c`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${a(this,s,dt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};ht=function(){return this.dismissible?c`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="small"
            aria-label=${lt("Dismiss alert")}
            @click=${()=>a(this,s,k).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:_};ft=function(){return this.timeout>0?c`
          <div
            class="timer-bar"
            role="timer"
            aria-label=${lt("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:_};i.styles=[Ct,Pt];o([m({type:String,reflect:!0})],i.prototype,"variant",2);o([m({type:String})],i.prototype,"label",2);o([m({type:String,reflect:!0})],i.prototype,"role",2);o([m({type:Boolean})],i.prototype,"dismissible",2);o([m({type:Number})],i.prototype,"timeout",2);o([m({type:String,attribute:"button-label"})],i.prototype,"buttonLabel",2);o([$()],i.prototype,"_progress",2);o([$()],i.prototype,"_isClosing",2);o([$()],i.prototype,"_cardHidden",2);i=o([bt("gds-alert",{dependsOn:[It,Tt,Dt,Lt,$t,Mt]}),yt()],i);i.define();const pe={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`}},u={args:{},render:()=>c`
    <gds-alert variant="information" role="alert">
      <strong>Information</strong> Body text starts on the same row as heading.
      A link (optional) always ends the message.
    </gds-alert>
    <gds-alert variant="notice" role="alert">
      <strong>Notice</strong> Body text with link or additional context.
    </gds-alert>
    <gds-alert variant="positive" role="alert">
      <strong>Positive</strong> Feedback message with optional CTA.
    </gds-alert>
    <gds-alert variant="warning" role="alert">
      <strong>Warning</strong> Important information to consider.
    </gds-alert>
    <gds-alert variant="negative" role="alert">
      <strong>Negative</strong> Error message requiring user attention.
    </gds-alert>
  `},h={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},f={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},v={...n,args:{...n.parameters.args,variant:"positive",timeout:3e3,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},b={...n,args:{...n.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var E,H,B;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
    }
  },
  args: {
    variant: 'information',
    role: 'alert',
    dismissible: true,
    timeout: 0,
    buttonLabel: '',
    innerHTML: \`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.\`
  }
}`,...(B=(H=n.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var G,R,z,W,N;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <gds-alert variant="information" role="alert">
      <strong>Information</strong> Body text starts on the same row as heading.
      A link (optional) always ends the message.
    </gds-alert>
    <gds-alert variant="notice" role="alert">
      <strong>Notice</strong> Body text with link or additional context.
    </gds-alert>
    <gds-alert variant="positive" role="alert">
      <strong>Positive</strong> Feedback message with optional CTA.
    </gds-alert>
    <gds-alert variant="warning" role="alert">
      <strong>Warning</strong> Important information to consider.
    </gds-alert>
    <gds-alert variant="negative" role="alert">
      <strong>Negative</strong> Error message requiring user attention.
    </gds-alert>
  \`
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(N=(W=u.parameters)==null?void 0:W.docs)==null?void 0:N.description}}};var O,F,q,V,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};var Y,j,K,J,Q;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(K=(j=f.parameters)==null?void 0:j.docs)==null?void 0:K.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,tt,et,st;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'positive',
    timeout: 3000,
    innerHTML: \`<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.\`
  }
}`,...(tt=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:tt.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(st=(et=v.parameters)==null?void 0:et.docs)==null?void 0:st.description}}};var rt,at,it,nt,ot;b.parameters={...b.parameters,docs:{...(rt=b.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: \`<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>\`
  }
}`,...(it=(at=b.parameters)==null?void 0:at.docs)==null?void 0:it.source},description:{story:"Alerts can contain rich content in the main slot.",...(ot=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};const ue=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{v as AutoDismiss,n as DefaultParams,f as Dismissible,b as RichContent,u as Variants,h as WithAction,ue as __namedExportsOrder,pe as default};
