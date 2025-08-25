import{n as b,r as H,G as Ct,h as f,g as It,a as O}from"./gds-element-DKcDvDP5.js";import{l as Dt,m as ht}from"./runtime-CNluP0A8.js";import{i as Mt,E as I}from"./lit-element-Bx14lxc-.js";import{e as Lt}from"./class-map-CXsQwv0r.js";import{n as $t,e as St}from"./ref-R0wBYijq.js";import{u as Pt,s as R}from"./static-B8S6DEnV.js";import{t as Et}from"./tokens.style-Cct4pBht.js";import{G as Ht}from"./button.component-LlNp-C7s.js";import{G as Wt}from"./card.component-DkFuee-h.js";import{I as Bt}from"./circle-check.component-BVGxgGNk.js";import{a as Ot,I as Rt}from"./triangle-exclamation.component-BQNg54Op.js";import{I as zt}from"./cross-small.component-D9XbEW7U.js";import"./card-CjyDFxo8.js";import"./button-BM3aZOv1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DNKDJRMg.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./watch-tFciLXSI.js";import"./div.component-CLY16RHW.js";import"./icon-BXUh_f_p.js";import"./unsafe-html-CYO4avEf.js";const Gt=Mt`
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
`;var Nt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,ut=t=>{throw TypeError(t)},d=(t,e,i,g)=>{for(var h=g>1?void 0:g?Vt(e,i):e,L=t.length-1,$;L>=0;L--)($=t[L])&&(h=(g?$(e,i,h):$(h))||h);return g&&h&&Nt(e,i,h),h},W=(t,e,i)=>e.has(t)||ut("Cannot "+i),r=(t,e,i)=>(W(t,e,"read from private field"),i?i.call(t):e.get(t)),m=(t,e,i)=>e.has(t)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),n=(t,e,i,g)=>(W(t,e,"write to private field"),e.set(t,i),i),a=(t,e,i)=>(W(t,e,"access private method"),i),T,v,S,p,u,c,A,P,s,E,D,ft,vt,bt,C,M,yt,wt,B,_t,xt,kt,At,Tt;const Ft={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},qt=300,Ut=100;let o=class extends Ct{constructor(){super(),m(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,m(this,T),m(this,v),m(this,S,St()),m(this,p),m(this,u,!1),m(this,c,0),m(this,A,0),m(this,P,{hostConnected:()=>{this.timeout>0&&a(this,s,E).call(this)},hostDisconnected:()=>{a(this,s,D).call(this),a(this,s,C).call(this)}}),this.addController(r(this,P))}updated(t){t.has("timeout")&&(a(this,s,D).call(this),a(this,s,C).call(this),n(this,c,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&a(this,s,E).call(this))}render(){if(this._cardHidden)return I;const t={dismissing:this._isClosing,dismissible:this.dismissible};return f`
      <gds-card
        ${$t(r(this,S))}
        role=${this.role}
        aria-label=${this.label}
        variant=${r(this,s,B).card}
        class=${Lt(t)}
        @keydown=${a(this,s,wt)}
        id="alert-message"
        padding="m"
      >
        ${a(this,s,_t).call(this)} ${a(this,s,xt).call(this)}
        ${this.buttonLabel?a(this,s,kt).call(this,this.buttonLabel):I}
        ${a(this,s,At).call(this)} ${a(this,s,Tt).call(this)}
      </gds-card>
    `}};T=new WeakMap;v=new WeakMap;S=new WeakMap;p=new WeakMap;u=new WeakMap;c=new WeakMap;A=new WeakMap;P=new WeakMap;s=new WeakSet;E=function(){r(this,p)||(r(this,c)||n(this,c,Math.max(0,this.timeout)),n(this,p,new IntersectionObserver(t=>{const e=t[0],g=((e==null?void 0:e.intersectionRatio)??0)>=.1;g&&!r(this,u)?(n(this,u,!0),a(this,s,vt).call(this)):!g&&r(this,u)&&(n(this,u,!1),a(this,s,bt).call(this))},{root:null,threshold:[0,.1,1]})),r(this,p).observe(this))};D=function(){r(this,p)&&(r(this,p).disconnect(),n(this,p,void 0)),n(this,u,!1)};ft=function(){n(this,A,Date.now()),n(this,v,window.setInterval(()=>{const t=Date.now(),e=t-r(this,A);n(this,A,t),n(this,c,Math.max(0,r(this,c)-e)),this._progress=this.timeout>0?Math.max(0,r(this,c)/this.timeout*100):0,r(this,c)<=0&&a(this,s,M).call(this,"timeout")},Ut))};vt=function(){r(this,c)<=0||r(this,T)||r(this,v)||a(this,s,ft).call(this)};bt=function(){a(this,s,C).call(this)};C=function(){clearTimeout(r(this,T)),clearInterval(r(this,v)),n(this,T,n(this,v,void 0))};M=async function(t){this._isClosing=!0,a(this,s,D).call(this),a(this,s,C).call(this),await this.updateComplete,this.dispatchCustomEvent("gds-close",{detail:{source:t},bubbles:!0,composed:!0}),await new Promise(e=>setTimeout(e,qt)),this._cardHidden=!0};yt=function(t){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:t},bubbles:!0,composed:!0})};wt=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),a(this,s,M).call(this,"escape"))};B=function(){return Ft[this.variant]};_t=function(){const t=`gds-icon-${r(this,s,B).icon}`;return f`${Pt`<${R(O(t))} class="icon" solid aria-hidden="true" size="24px"></${R(O(t))}>`}`};xt=function(){return f`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};kt=function(t){return f`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${a(this,s,yt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};At=function(){return this.dismissible?f`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="small"
            aria-label=${ht("Dismiss alert")}
            @click=${()=>a(this,s,M).call(this,"close")}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `:I};Tt=function(){return this.timeout>0?f`
          <div
            class="timer-bar"
            role="timer"
            aria-label=${ht("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:I};o.styles=[Et,Gt];d([b({type:String,reflect:!0})],o.prototype,"variant",2);d([b({type:String})],o.prototype,"label",2);d([b({type:String,reflect:!0})],o.prototype,"role",2);d([b({type:Boolean})],o.prototype,"dismissible",2);d([b({type:Number})],o.prototype,"timeout",2);d([b({type:String,attribute:"button-label"})],o.prototype,"buttonLabel",2);d([H()],o.prototype,"_progress",2);d([H()],o.prototype,"_isClosing",2);d([H()],o.prototype,"_cardHidden",2);o=d([It("gds-alert",{dependsOn:[Ht,Wt,Bt,Ot,Rt,zt]}),Dt()],o);o.define();const we={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]}},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{variant:"information",role:"alert",dismissible:!0,timeout:0,buttonLabel:"",innerHTML:`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`}},y={args:{},render:()=>f`
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
  `},w={...l,args:{...l.parameters.args,variant:"information",dismissible:!0,buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},_={...l,args:{...l.parameters.args,variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},x={...l,args:{...l.parameters.args,variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},k={...l,args:{...l.parameters.args,variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var z,G,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(G=l.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var V,F,q,U,Y;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(F=y.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(Y=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var j,K,J,Q,X;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Take Action',
    innerHTML: \`<strong>Actionable</strong> Alert with a button for quick user interaction.\`
  }
}`,...(J=(K=w.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,tt,et,st,at;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    variant: 'information',
    dismissible: true,
    innerHTML: \`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(et=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:et.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(at=(st=_.parameters)==null?void 0:st.docs)==null?void 0:at.description}}};var rt,it,nt,ot,lt;x.parameters={...x.parameters,docs:{...(rt=x.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(mt=(dt=k.parameters)==null?void 0:dt.docs)==null?void 0:mt.source},description:{story:"Alerts can contain rich content in the main slot.",...(pt=(gt=k.parameters)==null?void 0:gt.docs)==null?void 0:pt.description}}};const _e=["DefaultParams","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{x as AutoDismiss,l as DefaultParams,_ as Dismissible,k as RichContent,y as Variants,w as WithAction,_e as __namedExportsOrder,we as default};
