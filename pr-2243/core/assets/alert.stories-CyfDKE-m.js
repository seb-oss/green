import{n as m,r as L,G as vt,h as c,g as bt}from"./gds-element-KHa0AloG.js";import{m as lt}from"./runtime-BL31MtW8.js";import{l as yt}from"./localized-decorator-DtmrKsyB.js";import{i as wt,E as _}from"./lit-element-Bx14lxc-.js";import{e as _t}from"./class-map-CXsQwv0r.js";import{n as xt,e as At}from"./ref-R0wBYijq.js";import{u as kt,s as E}from"./static-B8S6DEnV.js";import{t as Ct}from"./tokens.style-DC2Hb-2P.js";import{G as Tt}from"./button.component-BHtocGTN.js";import{G as Dt}from"./card.component-C21NCPsO.js";import{I as It}from"./circle-check.component-rQ3xRYz_.js";import{a as $t,I as Lt}from"./triangle-exclamation.component-D-2uW-Eb.js";import{I as Mt}from"./cross-small.component-D1Ljw-03.js";import"./card-d-tVEDXR.js";import"./button-nPQff-yp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./icon-BDCl8D0g.js";const Pt=wt`
  /* Base host and grid layout */
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    display: grid;
    grid-template-columns: auto 1fr auto;
    min-width: fit-content;
    gap: 0.5rem;
    position: relative;
  }

  /* Main content */
  .icon {
    justify-self: start;
  }

  .message {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    min-width: 20ch;
    max-width: 100%;
    width: fit-content;
    white-space: normal;
  }

  .close-btn {
    justify-self: end;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .action-button {
    width: 100%;
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
    background: var(--gds-accent, currentColor);
    opacity: 0.6;
    transition: width 0.1s linear;
    will-change: width;
  }

  /* Accessibility and motion */
  @media (prefers-reduced-motion: reduce) {
    #alert-message.dismissing {
      transform: none;
    }
    .timer-progress {
      transition: none;
    }
  }

  @media (prefers-contrast: high) {
    :host {
      forced-color-adjust: none;
    }
  }

  /* Responsive container queries */
  @container (min-width: 601px) {
    .content-wrapper {
      flex-direction: row;
    }
    .action-button {
      width: auto;
      flex-shrink: 0;
    }
  }
`;var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,ct=t=>{throw TypeError(t)},o=(t,e,r,p)=>{for(var l=p>1?void 0:p?St(e,r):e,C=t.length-1,T;C>=0;C--)(T=t[C])&&(l=(p?T(e,r,l):T(l))||l);return p&&l&&Et(e,r,l),l},M=(t,e,r)=>e.has(t)||ct("Cannot "+r),d=(t,e,r)=>(M(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),x=(t,e,r,p)=>(M(t,e,"write to private field"),e.set(t,r),r),i=(t,e,r)=>(M(t,e,"access private method"),r),y,w,D,I,s,$,A,k,dt,mt,P,pt,gt,ut,ht,ft;const Ht={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},Bt=300,Gt=100;let a=class extends vt{constructor(){super(),g(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,g(this,y),g(this,w),g(this,D,At()),g(this,I,{hostConnected:()=>{this.timeout>0&&i(this,s,$).call(this)},hostDisconnected:()=>i(this,s,A).call(this)}),this.addController(d(this,I))}updated(t){t.has("timeout")&&(i(this,s,A).call(this),this.timeout>0&&i(this,s,$).call(this))}render(){if(this._cardHidden)return _;const t={dismissing:this._isClosing,dismissible:this.dismissible};return c`
      <gds-card
        ${xt(d(this,D))}
        role=${this.role}
        aria-label=${this.label}
        variant=${d(this,s,P).card}
        class=${_t(t)}
        @keydown=${i(this,s,mt)}
        id="alert-message"
        padding="m"
      >
        ${i(this,s,pt).call(this)}
        <div class="content-wrapper">
          ${i(this,s,gt).call(this)}
          ${this.buttonLabel?i(this,s,ut).call(this,this.buttonLabel):_}
        </div>
        ${i(this,s,ht).call(this)} ${i(this,s,ft).call(this)}
      </gds-card>
    `}};y=new WeakMap;w=new WeakMap;D=new WeakMap;I=new WeakMap;s=new WeakSet;$=function(){const t=Date.now();this._progress=100,x(this,w,window.setInterval(()=>{const e=Date.now()-t;this._progress=Math.max(0,(this.timeout-e)/this.timeout*100)},Gt)),x(this,y,window.setTimeout(()=>i(this,s,k).call(this,"timeout"),this.timeout))};A=function(){clearTimeout(d(this,y)),clearInterval(d(this,w)),x(this,y,x(this,w,void 0))};k=async function(t){this._isClosing=!0,i(this,s,A).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,Bt)),this._cardHidden=!0};dt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};mt=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),i(this,s,k).call(this,"escape"))};P=function(){return Ht[this.variant]};pt=function(){const t=`gds-icon-${d(this,s,P).icon}`;return c`${kt`<${E(t)} class="icon" solid aria-hidden="true" size="l"></${E(t)}>`}`};gt=function(){return c`<div class="message">
      <slot></slot>
    </div>`};ut=function(t){return c`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${i(this,s,dt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};ht=function(){return this.dismissible?c`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="xs"
            aria-label=${lt("Dismiss alert")}
            @click=${()=>i(this,s,k).call(this,"close")}
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
        `:_};a.styles=[Ct,Pt];o([m({type:String,reflect:!0})],a.prototype,"variant",2);o([m({type:String})],a.prototype,"label",2);o([m({type:String,reflect:!0})],a.prototype,"role",2);o([m({type:Boolean})],a.prototype,"dismissible",2);o([m({type:Number})],a.prototype,"timeout",2);o([m({type:String,attribute:"button-label"})],a.prototype,"buttonLabel",2);o([L()],a.prototype,"_progress",2);o([L()],a.prototype,"_isClosing",2);o([L()],a.prototype,"_cardHidden",2);a=o([bt("gds-alert",{dependsOn:[Tt,Dt,It,$t,Lt,Mt]}),yt()],a);a.define();const me={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
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
  `},h={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},f={...n,args:{...n.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},v={...n,args:{...n.parameters.args,variant:"positive",timeout:3e3,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},b={...n,args:{...n.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var S,H,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(H=n.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var G,R,W,N,O;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var z,q,F,V,U;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};var j,K,J,Q,X;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,tt,et,st;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'positive',
    timeout: 3000,
    innerHTML: \`<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.\`
  }
}`,...(tt=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:tt.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(st=(et=v.parameters)==null?void 0:et.docs)==null?void 0:st.description}}};var rt,it,at,nt,ot;b.parameters={...b.parameters,docs:{...(rt=b.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: \`<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>\`
  }
}`,...(at=(it=b.parameters)==null?void 0:it.docs)==null?void 0:at.source},description:{story:"Alerts can contain rich content in the main slot.",...(ot=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};const pe=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{v as AutoDismiss,n as DefaultParams,f as Dismissible,b as RichContent,u as Variants,h as WithAction,pe as __namedExportsOrder,me as default};
