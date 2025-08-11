import{n as m,r as $,G as bt,h as c,g as yt,a as P}from"./gds-element-DKcDvDP5.js";import{l as wt,m as ct}from"./runtime-CNluP0A8.js";import{i as _t,E as _}from"./lit-element-Bx14lxc-.js";import{e as xt}from"./class-map-CXsQwv0r.js";import{n as At,e as kt}from"./ref-R0wBYijq.js";import{u as Ct,s as E}from"./static-B8S6DEnV.js";import{t as Tt}from"./tokens.style-CgNmoD9k.js";import{G as It}from"./button.component-C3rS62ds.js";import{G as Dt}from"./card.component-CP8Gwc3P.js";import{I as Lt}from"./circle-check.component-CI9Nwdv-.js";import{a as $t,I as Mt}from"./triangle-exclamation.component-Bnvf0G7X.js";import{I as St}from"./cross-small.component-CfvmXPlB.js";import"./card-CYq-SXjt.js";import"./button-osfSzRGG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Z3wu51Vk.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./watch-tFciLXSI.js";import"./div.component-Dmq6HYgf.js";import"./icon-BJDrYPAZ.js";import"./unsafe-html-CYO4avEf.js";const Pt=_t`
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    --grid-areas: 'icon message close' 'icon action close';
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: var(--grid-areas);
    min-width: fit-content;
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
  #alert-message:focus {
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
`;var Et=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,dt=t=>{throw TypeError(t)},o=(t,e,a,g)=>{for(var l=g>1?void 0:g?Ht(e,a):e,C=t.length-1,T;C>=0;C--)(T=t[C])&&(l=(g?T(e,a,l):T(l))||l);return g&&l&&Et(e,a,l),l},M=(t,e,a)=>e.has(t)||dt("Cannot "+a),d=(t,e,a)=>(M(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),x=(t,e,a,g)=>(M(t,e,"write to private field"),e.set(t,a),a),r=(t,e,a)=>(M(t,e,"access private method"),a),y,w,I,D,s,L,A,k,mt,gt,S,pt,ut,ht,ft,vt;const Bt={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},zt=300,Gt=100;let i=class extends bt{constructor(){super(),p(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,p(this,y),p(this,w),p(this,I,kt()),p(this,D,{hostConnected:()=>{this.timeout>0&&r(this,s,L).call(this)},hostDisconnected:()=>r(this,s,A).call(this)}),this.addController(d(this,D))}updated(t){t.has("timeout")&&(r(this,s,A).call(this),this.timeout>0&&r(this,s,L).call(this))}render(){if(this._cardHidden)return _;const t={dismissing:this._isClosing,dismissible:this.dismissible};return c`
      <gds-card
        ${At(d(this,I))}
        role=${this.role}
        aria-label=${this.label}
        variant=${d(this,s,S).card}
        class=${xt(t)}
        @keydown=${r(this,s,gt)}
        id="alert-message"
        padding="m"
      >
        ${r(this,s,pt).call(this)} ${r(this,s,ut).call(this)}
        ${this.buttonLabel?r(this,s,ht).call(this,this.buttonLabel):_}
        ${r(this,s,ft).call(this)} ${r(this,s,vt).call(this)}
      </gds-card>
    `}};y=new WeakMap;w=new WeakMap;I=new WeakMap;D=new WeakMap;s=new WeakSet;L=function(){const t=Date.now();this._progress=100,x(this,w,window.setInterval(()=>{const e=Date.now()-t;this._progress=Math.max(0,(this.timeout-e)/this.timeout*100)},Gt)),x(this,y,window.setTimeout(()=>r(this,s,k).call(this,"timeout"),this.timeout))};A=function(){clearTimeout(d(this,y)),clearInterval(d(this,w)),x(this,y,x(this,w,void 0))};k=async function(t){this._isClosing=!0,r(this,s,A).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,zt)),this._cardHidden=!0};mt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};gt=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),r(this,s,k).call(this,"escape"))};S=function(){return Bt[this.variant]};pt=function(){const t=`gds-icon-${d(this,s,S).icon}`;return c`${Ct`<${E(P(t))} class="icon" solid aria-hidden="true" size="24px"></${E(P(t))}>`}`};ut=function(){return c`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};ht=function(t){return c`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${r(this,s,mt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};ft=function(){return this.dismissible?c`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="small"
            aria-label=${ct("Dismiss alert")}
            @click=${()=>r(this,s,k).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:_};vt=function(){return this.timeout>0?c`
          <div
            class="timer-bar"
            role="timer"
            aria-label=${ct("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:_};i.styles=[Tt,Pt];o([m({type:String,reflect:!0})],i.prototype,"variant",2);o([m({type:String})],i.prototype,"label",2);o([m({type:String,reflect:!0})],i.prototype,"role",2);o([m({type:Boolean})],i.prototype,"dismissible",2);o([m({type:Number})],i.prototype,"timeout",2);o([m({type:String,attribute:"button-label"})],i.prototype,"buttonLabel",2);o([$()],i.prototype,"_progress",2);o([$()],i.prototype,"_isClosing",2);o([$()],i.prototype,"_cardHidden",2);i=o([yt("gds-alert",{dependsOn:[It,Dt,Lt,$t,Mt,St]}),wt()],i);i.define();const ge={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`}},u={args:{},render:()=>c`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
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
    </gds-flex>
  `},h={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},f={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},v={...n,args:{...n.parameters.args,variant:"positive",timeout:3e3,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},b={...n,args:{...n.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var H,B,z;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var G,R,N,W,O;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
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
    </gds-flex>
  \`
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};var F,q,V,U,Y;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var j,K,J,Q,X;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,tt,et,st,at;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'positive',
    timeout: 3000,
    innerHTML: \`<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.\`
  }
}`,...(et=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:et.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(at=(st=v.parameters)==null?void 0:st.docs)==null?void 0:at.description}}};var rt,it,nt,ot,lt;b.parameters={...b.parameters,docs:{...(rt=b.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: \`<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>\`
  }
}`,...(nt=(it=b.parameters)==null?void 0:it.docs)==null?void 0:nt.source},description:{story:"Alerts can contain rich content in the main slot.",...(lt=(ot=b.parameters)==null?void 0:ot.docs)==null?void 0:lt.description}}};const pe=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{v as AutoDismiss,n as DefaultParams,f as Dismissible,b as RichContent,u as Variants,h as WithAction,pe as __namedExportsOrder,ge as default};
