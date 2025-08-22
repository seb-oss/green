import{G as Tt,h as f,g as Dt,a as O}from"./gds-element-DJNCW3iR.js";import{l as Mt,m as ht}from"./runtime-CNluP0A8.js";import{i as $t,E as T}from"./lit-element-Bx14lxc-.js";import{n as y,r as H}from"./Reflect-DJ7r0WLU.js";import{e as ut}from"./if-defined-BAXgs-ZI.js";import{n as Lt,e as Pt}from"./ref-R0wBYijq.js";import{u as Et,s as G}from"./static-B8S6DEnV.js";import{t as St}from"./tokens.style-iX6aIK9m.js";import{G as Ht}from"./button.component-DtoRA_WW.js";import{G as Wt}from"./card.component-yp2NQ7aE.js";import{I as Bt}from"./circle-check.component-CNcE23qA.js";import{I as Ot,a as Gt}from"./triangle-exclamation.component-BSRcVOcl.js";import{I as Rt}from"./cross-small.component-DhvOsnze.js";import"./card-Dj1e6P6c.js";import"./button-DLM8JRC1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BzVoiHcb.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./watch-tFciLXSI.js";import"./div.component-Cx0JXo06.js";import"./icon-Ban3Gn5U.js";import"./unsafe-html-CYO4avEf.js";const Nt=$t`
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    --grid-areas: 'wrapper cta close';

    &.timeout {
      --grid-areas: 'wrapper cta close' 'progress-bar progress-bar progress-bar';
    }

    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-areas: var(--grid-areas);
    min-width: fit-content;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    gap: 0;
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

  .wrapper {
    grid-area: wrapper;
    display: flex;
    gap: var(--gds-sys-space-s);

    .message {
      max-width: 80ch;
    }
  }

  .dismissible .wrapper {
    margin-top: var(--gds-sys-space-2xs);
  }

  .has-action {
    padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
  }

  .has-action .wrapper {
    margin-top: var(--gds-sys-space-xs);
  }

  .has-action.dismissible .close {
    margin-top: var(--gds-sys-space-2xs);
  }

  .message {
    font: var(--gds-sys-text-body-regular-m);
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-inline-end: auto;
  }

  .message-text {
    display: inline;
    white-space: normal;
    padding-inline-end: var(--gds-sys-space-xs);
  }

  .message-text ::slotted(strong) {
    font-weight: var(--gds-sys-text-weight-book, 450);
  }

  .progress-container {
    --_fill-color: var(--gds-sys-color-border-strong);
    --_container-color: var(--gds-sys-color-l3-information-03);

    &.notice {
      --_fill-color: var(--gds-sys-color-content-notice-01);
      --_container-color: var(--gds-sys-color-l3-notice-03);
    }

    &.warning {
      --_fill-color: var(--gds-sys-color-content-warning-01);
      --_container-color: var(--gds-sys-color-l3-warning-03);
    }

    &.positive {
      --_fill-color: var(--gds-sys-color-content-positive-01);
      --_container-color: var(--gds-sys-color-l3-positive-03);
    }

    &.negative {
      --_fill-color: var(--gds-sys-color-content-negative-01);
      --_container-color: var(--gds-sys-color-l3-negative-03);
    }

    grid-area: progress-bar;
    margin-top: var(--gds-sys-space-m);
    inset: auto var(--gds-sys-space-m) var(--gds-sys-space-m);
    height: 0.25rem;
    background: var(--_container-color);
    border-radius: var(--gds-sys-radius-max);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--_fill-color);
    will-change: width;
  }

  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  @container (max-width: 600px) {
    #alert-message {
      --grid-areas: 'wrapper close' 'cta cta';

      &.timeout {
        --grid-areas: 'wrapper close' 'progress-bar progress-bar';
      }

      .action {
        grid-area: cta;
        margin-top: var(--gds-sys-space-xs);
      }
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    #alert-message {
      .close {
        margin-left: var(--gds-sys-space-xs);
      }
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    #alert-message {
      grid-template-columns: auto auto min-content;

      &.dismissible:not(.has-action) {
        grid-template-columns: 1fr auto;
      }

      &.dismissible:not(.has-action) .wrapper {
        margin-inline-start: 0;
      }

      .close {
        margin-left: var(--gds-sys-space-xs);
      }

      .icon {
        margin-inline-start: auto;
      }

      .wrapper {
        margin-left: auto;
      }

      .action {
        margin-right: auto;
      }
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`;var zt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,ft=t=>{throw TypeError(t)},d=(t,e,i,g)=>{for(var h=g>1?void 0:g?Vt(e,i):e,$=t.length-1,L;$>=0;$--)(L=t[$])&&(h=(g?L(e,i,h):L(h))||h);return g&&h&&zt(e,i,h),h},W=(t,e,i)=>e.has(t)||ft("Cannot "+i),a=(t,e,i)=>(W(t,e,"read from private field"),i?i.call(t):e.get(t)),m=(t,e,i)=>e.has(t)?ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),n=(t,e,i,g)=>(W(t,e,"write to private field"),e.set(t,i),i),r=(t,e,i)=>(W(t,e,"access private method"),i),C,v,P,p,u,c,A,E,s,S,D,vt,yt,bt,I,M,wt,_t,B,xt,kt,At,Ct,It;const Ft={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},qt=300,Ut=100;let o=class extends Tt{constructor(){super(),m(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,m(this,C),m(this,v),m(this,P,Pt()),m(this,p),m(this,u,!1),m(this,c,0),m(this,A,0),m(this,E,{hostConnected:()=>{this.timeout>0&&r(this,s,S).call(this)},hostDisconnected:()=>{r(this,s,D).call(this),r(this,s,I).call(this)}}),this.addController(a(this,E))}updated(t){t.has("timeout")&&(r(this,s,D).call(this),r(this,s,I).call(this),n(this,c,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&r(this,s,S).call(this))}render(){if(this._cardHidden)return T;const t={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return f`
      <gds-card
        ${Lt(a(this,P))}
        role=${this.role}
        aria-label=${this.label}
        variant=${a(this,s,B).card}
        class=${ut(t)}
        @keydown=${r(this,s,_t)}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${r(this,s,xt).call(this)} ${r(this,s,kt).call(this)}
        </div>
        ${!this.timeout&&this.buttonLabel?r(this,s,At).call(this,this.buttonLabel):T}
        ${r(this,s,Ct).call(this)} ${r(this,s,It).call(this)}
      </gds-card>
    `}};C=new WeakMap;v=new WeakMap;P=new WeakMap;p=new WeakMap;u=new WeakMap;c=new WeakMap;A=new WeakMap;E=new WeakMap;s=new WeakSet;S=function(){a(this,p)||(a(this,c)||n(this,c,Math.max(0,this.timeout)),n(this,p,new IntersectionObserver(t=>{const e=t[0],g=((e==null?void 0:e.intersectionRatio)??0)>=.1;g&&!a(this,u)?(n(this,u,!0),r(this,s,yt).call(this)):!g&&a(this,u)&&(n(this,u,!1),r(this,s,bt).call(this))},{root:null,threshold:[0,.1,1]})),a(this,p).observe(this))};D=function(){a(this,p)&&(a(this,p).disconnect(),n(this,p,void 0)),n(this,u,!1)};vt=function(){n(this,A,Date.now()),n(this,v,window.setInterval(()=>{const t=Date.now(),e=t-a(this,A);n(this,A,t),n(this,c,Math.max(0,a(this,c)-e)),this._progress=this.timeout>0?Math.max(0,a(this,c)/this.timeout*100):0,a(this,c)<=0&&r(this,s,M).call(this,"timeout")},Ut))};yt=function(){a(this,c)<=0||a(this,C)||a(this,v)||r(this,s,vt).call(this)};bt=function(){r(this,s,I).call(this)};I=function(){clearTimeout(a(this,C)),clearInterval(a(this,v)),n(this,C,n(this,v,void 0))};M=async function(t){this._isClosing=!0,r(this,s,D).call(this),r(this,s,I).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,qt)),this._cardHidden=!0};wt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};_t=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),r(this,s,M).call(this,"escape"))};B=function(){return Ft[this.variant]};xt=function(){const t=`gds-icon-${a(this,s,B).icon}`;return f`${Et`<${G(O(t))} class="icon" solid aria-hidden="true" size="24px"></${G(O(t))}>`}`};kt=function(){return f`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};At=function(t){return f`
      <gds-button
        class="action"
        .variant=${this.variant}
        rank="secondary"
        @click=${r(this,s,wt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};Ct=function(){return this.dismissible?f`
          <gds-button
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${ht("Dismiss alert")}
            @click=${()=>r(this,s,M).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:T};It=function(){return this.timeout>0?f`
          <div
            class=${ut({"progress-container":!0,[this.variant]:!0})}
            role="timer"
            aria-label=${ht("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:T};o.styles=[St,Nt];d([y({type:String,reflect:!0})],o.prototype,"variant",2);d([y({type:String})],o.prototype,"label",2);d([y({type:String,reflect:!0})],o.prototype,"role",2);d([y({type:Boolean})],o.prototype,"dismissible",2);d([y({type:Number})],o.prototype,"timeout",2);d([y({type:String,attribute:"button-label"})],o.prototype,"buttonLabel",2);d([H()],o.prototype,"_progress",2);d([H()],o.prototype,"_isClosing",2);d([H()],o.prototype,"_cardHidden",2);o=d([Dt("gds-alert",{dependsOn:[Ht,Wt,Bt,Ot,Gt,Rt]}),Mt()],o);o.define();const we={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`}},b={args:{},render:()=>f`
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
  `},w={...l,args:{...l.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},_={...l,args:{...l.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},x={...l,args:{...l.parameters.args,variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},k={...l,args:{...l.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var R,N,z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var V,F,q,U,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var K,J,Q,X,Z;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var j,tt,et,st,rt;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(et=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:et.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(rt=(st=_.parameters)==null?void 0:st.docs)==null?void 0:rt.description}}};var at,it,nt,ot,lt;x.parameters={...x.parameters,docs:{...(at=x.parameters)==null?void 0:at.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'positive',
    timeout: 6400,
    innerHTML: \`<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.\`
  }
}`,...(nt=(it=x.parameters)==null?void 0:it.docs)==null?void 0:nt.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(lt=(ot=x.parameters)==null?void 0:ot.docs)==null?void 0:lt.description}}};var ct,dt,mt,gt,pt;k.parameters={...k.parameters,docs:{...(ct=k.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: \`<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>\`
  }
}`,...(mt=(dt=k.parameters)==null?void 0:dt.docs)==null?void 0:mt.source},description:{story:"Alerts can contain rich content in the main slot.",...(pt=(gt=k.parameters)==null?void 0:gt.docs)==null?void 0:pt.description}}};const _e=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{x as AutoDismiss,l as DefaultParams,_ as Dismissible,k as RichContent,b as Variants,w as WithAction,_e as __namedExportsOrder,we as default};
