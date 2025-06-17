import{n as p,r as W,G as Nt,h as r,g as Rt}from"./gds-element-KHa0AloG.js";import{m as Lt}from"./runtime-BL31MtW8.js";import{l as Wt}from"./localized-decorator-DtmrKsyB.js";import{i as Gt,E as D}from"./lit-element-Bx14lxc-.js";import{e as zt}from"./class-map-CXsQwv0r.js";import{n as Mt,e as Ft}from"./ref-R0wBYijq.js";import{u as Ht,s as M}from"./static-B8S6DEnV.js";import{G as Kt}from"./button.component-BHtocGTN.js";import{G as qt}from"./card.component-C21NCPsO.js";import"./circle-check-DWbHlSv4.js";import"./circle-info-BgbDYey7.js";import"./cross-small-j7P_yAOc.js";import"./button-nPQff-yp.js";import{t as Ut}from"./tokens.style-DC2Hb-2P.js";import"./card-d-tVEDXR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./icon-BDCl8D0g.js";import"./circle-info.component-CF6nkNJx.js";import"./cross-small.component-D1Ljw-03.js";const jt=Gt`
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
`;var Vt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,$t=t=>{throw TypeError(t)},m=(t,e,a,g)=>{for(var c=g>1?void 0:g?Yt(e,a):e,E=t.length-1,O;E>=0;E--)(O=t[E])&&(c=(g?O(e,a,c):O(c))||c);return g&&c&&Vt(e,a,c),c},G=(t,e,a)=>e.has(t)||$t("Cannot "+a),d=(t,e,a)=>(G(t,e,"read from private field"),a?a.call(t):e.get(t)),u=(t,e,a)=>e.has(t)?$t("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),I=(t,e,a,g)=>(G(t,e,"write to private field"),e.set(t,a),a),i=(t,e,a)=>(G(t,e,"access private method"),a),h,b,B,N,s,R,T,P,Dt,It,z,Tt,Pt,Et,Ot,Bt;const Jt={positive:{icon:"circle-check",card:"positive"},warning:{icon:"triangle-exclamation",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},Qt=300,Xt=100;let n=class extends Nt{constructor(){super(),u(this,s),this.variant="information",this.label="",this.role="alert",this.dismissible=!1,this.timeout=0,this.buttonLabel="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,u(this,h),u(this,b),u(this,B,Ft()),u(this,N,{hostConnected:()=>{this.timeout>0&&i(this,s,R).call(this)},hostDisconnected:()=>i(this,s,T).call(this)}),this.addController(d(this,N))}updated(t){t.has("timeout")&&(i(this,s,T).call(this),this.timeout>0&&i(this,s,R).call(this))}render(){if(this._cardHidden)return D;const t={dismissing:this._isClosing,dismissible:this.dismissible};return r`
      <gds-card
        ${Mt(d(this,B))}
        role=${this.role}
        aria-label=${this.label}
        variant=${d(this,s,z).card}
        class=${zt(t)}
        @keydown=${i(this,s,It)}
        id="alert-message"
        padding="m"
      >
        ${i(this,s,Tt).call(this)} ${i(this,s,Pt).call(this)}
        ${this.buttonLabel?i(this,s,Et).call(this,this.buttonLabel):D}
        ${i(this,s,Ot).call(this)} ${i(this,s,Bt).call(this)}
      </gds-card>
    `}};h=new WeakMap;b=new WeakMap;B=new WeakMap;N=new WeakMap;s=new WeakSet;R=function(){const t=Date.now();this._progress=100,I(this,b,window.setInterval(()=>{const e=Date.now()-t;this._progress=Math.max(0,(this.timeout-e)/this.timeout*100)},Xt)),I(this,h,window.setTimeout(()=>i(this,s,P).call(this,"timeout"),this.timeout))};T=function(){clearTimeout(d(this,h)),clearInterval(d(this,b)),I(this,h,I(this,b,void 0))};P=async function(t){this._isClosing=!0,i(this,s,T).call(this),await this.updateComplete,await new Promise(e=>setTimeout(e,Qt)),this.dispatchEvent(new CustomEvent("close",{detail:{source:t},bubbles:!0,composed:!0})),this._cardHidden=!0};Dt=function(t){this.dispatchEvent(new CustomEvent("action",{detail:{source:"button",event:t},bubbles:!0,composed:!0}))};It=function(t){t.key==="Escape"&&this.dismissible&&(t.preventDefault(),i(this,s,P).call(this,"escape"))};z=function(){return Jt[this.variant]};Tt=function(){const t=`gds-icon-${d(this,s,z).icon}`;return r`${Ht`<${M(t)} class="icon" solid aria-hidden="true" size="24px"></${M(t)}>`}`};Pt=function(){return r`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`};Et=function(t){return r`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${i(this,s,Dt)}
        aria-describedby="alert-message"
      >
        ${t.trim()}
      </gds-button>
    `};Ot=function(){return this.dismissible?r`
          <div class="close-btn">
            <gds-button
              variant="neutral"
              rank="tertiary"
              size="small"
              aria-label=${Lt("Dismiss alert")}
              @click=${()=>i(this,s,P).call(this,"close")}
            >
              <gds-icon-cross-small size="20px"></gds-icon-cross-small>
            </gds-button>
          </div>
        `:D};Bt=function(){return this.timeout>0?r`
          <div
            class="timer-bar"
            role="timer"
            aria-label=${Lt("Auto-dismiss timer")}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:D};n.styles=[Ut,jt];m([p({type:String,reflect:!0})],n.prototype,"variant",2);m([p({type:String})],n.prototype,"label",2);m([p({type:String,reflect:!0})],n.prototype,"role",2);m([p({type:Boolean})],n.prototype,"dismissible",2);m([p({type:Number})],n.prototype,"timeout",2);m([p({type:String,attribute:"button-label"})],n.prototype,"buttonLabel",2);m([W()],n.prototype,"_progress",2);m([W()],n.prototype,"_isClosing",2);m([W()],n.prototype,"_cardHidden",2);n=m([Rt("gds-alert",{dependsOn:[Kt,qt]}),Wt()],n);n.define();const De={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"],description:'ARIA role. Use "alert" for critical, "status" for less important.'},dismissible:{control:"boolean",description:"Shows close button when enabled."},timeOut:{control:"number"},buttonLabel:{control:"text",name:"Button Text (CTA)"},dismissLabel:{control:"text",name:"Dismiss Button Label",description:"Accessible label for the close button (for i18n)."},timerLabel:{control:"text",name:"Timer Bar Label",description:"Accessible label for the timer bar (for i18n)."}}},Zt=(t,e)=>{var a;return r`
  <gds-alert
    variant="${t.variant}"
    role="${t.role}"
    ?dismissible=${t.dismissible}
    .timeOut=${t.timeOut}
    .buttonLabel=${t.buttonLabel||""}
    .dismissLabel=${t.dismissLabel||"Dismiss alert"}
    .timerLabel=${t.timerLabel||"Auto-dismiss timer"}
  >
    ${((a=e.parameters)==null?void 0:a.content)||""}
  </gds-alert>
`},l=(t,e)=>({args:t,parameters:{content:e},render:Zt}),o=l({variant:"information",role:"alert",dismissible:!1,timeOut:0,buttonLabel:""},r`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`),f=l({...o.args,variant:"information"},o.parameters.content),v=l({...o.args,variant:"notice"},r`<strong>Notice</strong> Body text with link or additional context.`),y=l({...o.args,variant:"positive"},r`<strong>Positive</strong> Feedback message with optional CTA.`),w=l({...o.args,variant:"warning"},r`<strong>Warning</strong> Important information to consider.`),_=l({...o.args,variant:"negative"},r`<strong>Negative</strong> Error message requiring user attention.`),k=l({...o.args,variant:"information",dismissible:!0,buttonLabel:"Take Action"},r`<strong>Actionable</strong> Alert with a button for quick user
    interaction.`),x=l({...o.args,variant:"information",dismissible:!0},r`<strong>Dismissible</strong> User can dismiss this alert.`),S=l({...o.args,variant:"positive",timeOut:3e3},r`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.`),A=l({variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More"},r`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.`),C=l({variant:"warning",role:"alert",dismissible:!0},r`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.`),L=l({variant:"positive",role:"alert",dismissible:!0},r`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.`),$=l({variant:"warning",role:"alert",dismissible:!0,timeOut:5e3,buttonText:"Åtgärda",dismissLabel:"Stäng varning",timerLabel:"Denna varning stängs automatiskt"},r`<strong>Internationella etiketter</strong> Detta är en varning med
    svenska etiketter för stäng och timer.`);var F,H,K;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: false,
  timeOut: 0,
  buttonLabel: ''
}, html\`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.\`)`,...(K=(H=o.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var q,U,j;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information'
}, Playground.parameters!.content)`,...(j=(U=f.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var V,Y,J;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'notice'
}, html\`<strong>Notice</strong> Body text with link or additional context.\`)`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive'
}, html\`<strong>Positive</strong> Feedback message with optional CTA.\`)`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var tt,et,st;w.parameters={...w.parameters,docs:{...(tt=w.parameters)==null?void 0:tt.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'warning'
}, html\`<strong>Warning</strong> Important information to consider.\`)`,...(st=(et=w.parameters)==null?void 0:et.docs)==null?void 0:st.source}}};var rt,at,it;_.parameters={..._.parameters,docs:{...(rt=_.parameters)==null?void 0:rt.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'negative'
}, html\`<strong>Negative</strong> Error message requiring user attention.\`)`,...(it=(at=_.parameters)==null?void 0:at.docs)==null?void 0:it.source}}};var ot,nt,lt;k.parameters={...k.parameters,docs:{...(ot=k.parameters)==null?void 0:ot.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true,
  buttonLabel: 'Take Action'
}, html\`<strong>Actionable</strong> Alert with a button for quick user
    interaction.\`)`,...(lt=(nt=k.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var mt,ct,dt;x.parameters={...x.parameters,docs:{...(mt=x.parameters)==null?void 0:mt.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true
}, html\`<strong>Dismissible</strong> User can dismiss this alert.\`)`,...(dt=(ct=x.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,gt,ut;S.parameters={...S.parameters,docs:{...(pt=S.parameters)==null?void 0:pt.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive',
  timeOut: 3000
}, html\`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.\`)`,...(ut=(gt=S.parameters)==null?void 0:gt.docs)==null?void 0:ut.source}}};var ht,bt,ft;A.parameters={...A.parameters,docs:{...(ht=A.parameters)==null?void 0:ht.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: true,
  buttonLabel: 'Learn More'
}, html\`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.\`)`,...(ft=(bt=A.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var vt,yt,wt;C.parameters={...C.parameters,docs:{...(vt=C.parameters)==null?void 0:vt.docs,source:{originalSource:`makeStory({
  variant: 'warning',
  role: 'alert',
  dismissible: true
}, html\`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.\`)`,...(wt=(yt=C.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var _t,kt,xt;L.parameters={...L.parameters,docs:{...(_t=L.parameters)==null?void 0:_t.docs,source:{originalSource:`makeStory({
  variant: 'positive',
  role: 'alert',
  dismissible: true
}, html\`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.\`)`,...(xt=(kt=L.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var St,At,Ct;$.parameters={...$.parameters,docs:{...(St=$.parameters)==null?void 0:St.docs,source:{originalSource:`makeStory({
  variant: 'warning',
  role: 'alert',
  dismissible: true,
  timeOut: 5000,
  buttonText: 'Åtgärda',
  dismissLabel: 'Stäng varning',
  timerLabel: 'Denna varning stängs automatiskt'
}, html\`<strong>Internationella etiketter</strong> Detta är en varning med
    svenska etiketter för stäng och timer.\`)`,...(Ct=(At=$.parameters)==null?void 0:At.docs)==null?void 0:Ct.source}}};const Ie=["Playground","Information","Notice","Positive","Warning","Negative","WithAction","Dismissible","AutoDismiss","RichContent","ComplexContent","KeyboardAccessible","I18nLabels"];export{S as AutoDismiss,C as ComplexContent,x as Dismissible,$ as I18nLabels,f as Information,L as KeyboardAccessible,_ as Negative,v as Notice,o as Playground,y as Positive,A as RichContent,w as Warning,k as WithAction,Ie as __namedExportsOrder,De as default};
