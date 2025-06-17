import{n as l,r as L,G as pe,h as t,g as he}from"./gds-element-KHa0AloG.js";import{m as C}from"./runtime-BL31MtW8.js";import{l as be}from"./localized-decorator-DtmrKsyB.js";import{i as ve,E as d}from"./lit-element-Bx14lxc-.js";import{e as fe}from"./class-map-CXsQwv0r.js";import{e as ye,n as _e}from"./ref-R0wBYijq.js";import{u as we,s as I}from"./static-B8S6DEnV.js";import{G as ke}from"./button.component-BHtocGTN.js";import{G as xe}from"./card.component-C21NCPsO.js";import"./circle-check-DWbHlSv4.js";import"./circle-info-BgbDYey7.js";import"./cross-small-j7P_yAOc.js";import"./button-nPQff-yp.js";import{t as Se}from"./tokens.style-DC2Hb-2P.js";import"./card-d-tVEDXR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./icon-BDCl8D0g.js";import"./circle-info.component-CF6nkNJx.js";import"./cross-small.component-D1Ljw-03.js";const Ae=ve`
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
`;var Le=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,o=(e,a,m,c)=>{for(var n=c>1?void 0:c?Ce(a,m):a,S=e.length-1,A;S>=0;S--)(A=e[S])&&(n=(c?A(a,m,n):A(n))||n);return c&&n&&Le(a,m,n),n};const Ie={positive:{icon:"circle-check",card:"positive",label:"Positive alert"},warning:{icon:"triangle-exclamation",card:"warning",label:"Warning alert"},negative:{icon:"triangle-exclamation",card:"negative",label:"Negative alert"},information:{icon:"circle-info",card:"information",label:"Information alert"},notice:{icon:"circle-info",card:"notice",label:"Notice alert"}},$e=300,Te=100;let s=class extends pe{constructor(){super(),this.variant="information",this.role="alert",this.dismissible=!1,this.timeOut=0,this.buttonLabel="",this.dismissLabel="Dismiss alert",this.timerLabel="Auto-dismiss timer",this._progress=100,this._isClosing=!1,this._cardHidden=!1,this._alertRef=ye(),this._timerController={hostConnected:()=>{this.timeOut>0&&this._startTimer()},hostDisconnected:()=>this._clearTimers()},this.addController(this._timerController)}updated(e){e.has("timeOut")&&(this._clearTimers(),this.timeOut>0&&this._startTimer())}_startTimer(){const e=Date.now();this._progress=100,this._progressIntervalId=window.setInterval(()=>{const a=Date.now()-e;this._progress=Math.max(0,(this.timeOut-a)/this.timeOut*100)},Te),this._timeoutId=window.setTimeout(()=>this._dismiss("timeout"),this.timeOut)}_clearTimers(){clearTimeout(this._timeoutId),clearInterval(this._progressIntervalId),this._timeoutId=this._progressIntervalId=void 0}async _dismiss(e){this._isClosing=!0,this._clearTimers(),await this.updateComplete,await new Promise(a=>setTimeout(a,$e)),this.dispatchEvent(new CustomEvent("close",{detail:{source:e},bubbles:!0,composed:!0})),this._cardHidden=!0}_onButtonClick(e){this.dispatchEvent(new CustomEvent("action",{detail:{source:"button",event:e},bubbles:!0,composed:!0}))}_handleKeyDown(e){e.key==="Escape"&&this.dismissible&&(e.preventDefault(),this._dismiss("escape"))}get _config(){return Ie[this.variant]}_renderIcon(){const e=`gds-icon-${this._config.icon}`;return t`${we`<${I(e)} class="icon" solid aria-hidden="true" size="24px"></${I(e)}>`}`}_renderMessage(){return t`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`}_renderActionButton(e){return t`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${this._onButtonClick}
        aria-describedby="alert-message"
      >
        ${e.trim()}
      </gds-button>
    `}_renderCloseButton(){return this.dismissible?t`
          <div class="close-btn">
            <gds-button
              variant="neutral"
              rank="tertiary"
              size="small"
              aria-label=${C("Dismiss alert")}
              @click=${()=>this._dismiss("close")}
            >
              <gds-icon-cross-small size="20px"></gds-icon-cross-small>
            </gds-button>
          </div>
        `:d}_renderTimerBar(){return this.timeOut>0?t`
          <div
            class="timer-bar"
            role="timer"
            aria-label="${this.timerLabel??C("Auto-dismiss timer")}"
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:d}render(){if(this._cardHidden)return d;const e={dismissing:this._isClosing,dismissible:this.dismissible};return t`
      <gds-card
        ${_e(this._alertRef)}
        role=${this.role}
        aria-label=${this._config.label}
        variant=${this._config.card}
        level="2"
        class=${fe(e)}
        @keydown=${this._handleKeyDown}
        id="alert-message"
        padding="m"
      >
        ${this._renderIcon()} ${this._renderMessage()}
        ${this.buttonLabel?this._renderActionButton(this.buttonLabel):d}
        ${this._renderCloseButton()} ${this._renderTimerBar()}
      </gds-card>
    `}};s.styles=[Se,Ae];o([l({type:String,reflect:!0})],s.prototype,"variant",2);o([l({type:String,reflect:!0})],s.prototype,"role",2);o([l({type:Boolean})],s.prototype,"dismissible",2);o([l({type:Number,attribute:"time-out"})],s.prototype,"timeOut",2);o([l({type:String,attribute:"button-text"})],s.prototype,"buttonLabel",2);o([l({type:String,attribute:"dismiss-label"})],s.prototype,"dismissLabel",2);o([l({type:String,attribute:"timer-label"})],s.prototype,"timerLabel",2);o([L()],s.prototype,"_progress",2);o([L()],s.prototype,"_isClosing",2);o([L()],s.prototype,"_cardHidden",2);s=o([he("gds-alert",{dependsOn:[ke,xe]}),be()],s);s.define();const nt={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"],description:'ARIA role. Use "alert" for critical, "status" for less important.'},dismissible:{control:"boolean",description:"Shows close button when enabled."},timeOut:{control:"number"},buttonLabel:{control:"text",name:"Button Text (CTA)"},dismissLabel:{control:"text",name:"Dismiss Button Label",description:"Accessible label for the close button (for i18n)."},timerLabel:{control:"text",name:"Timer Bar Label",description:"Accessible label for the timer bar (for i18n)."}}},De=(e,a)=>{var m;return t`
  <gds-alert
    variant="${e.variant}"
    role="${e.role}"
    ?dismissible=${e.dismissible}
    .timeOut=${e.timeOut}
    .buttonLabel=${e.buttonLabel||""}
    .dismissLabel=${e.dismissLabel||"Dismiss alert"}
    .timerLabel=${e.timerLabel||"Auto-dismiss timer"}
  >
    ${((m=a.parameters)==null?void 0:m.content)||""}
  </gds-alert>
`},i=(e,a)=>({args:e,parameters:{content:a},render:De}),r=i({variant:"information",role:"alert",dismissible:!1,timeOut:0,buttonLabel:""},t`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`),g=i({...r.args,variant:"information"},r.parameters.content),u=i({...r.args,variant:"notice"},t`<strong>Notice</strong> Body text with link or additional context.`),p=i({...r.args,variant:"positive"},t`<strong>Positive</strong> Feedback message with optional CTA.`),h=i({...r.args,variant:"warning"},t`<strong>Warning</strong> Important information to consider.`),b=i({...r.args,variant:"negative"},t`<strong>Negative</strong> Error message requiring user attention.`),v=i({...r.args,variant:"information",dismissible:!0,buttonLabel:"Take Action"},t`<strong>Actionable</strong> Alert with a button for quick user
    interaction.`),f=i({...r.args,variant:"information",dismissible:!0},t`<strong>Dismissible</strong> User can dismiss this alert.`),y=i({...r.args,variant:"positive",timeOut:3e3},t`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.`),_=i({variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More"},t`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.`),w=i({variant:"warning",role:"alert",dismissible:!0},t`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.`),k=i({variant:"positive",role:"alert",dismissible:!0},t`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.`),x=i({variant:"warning",role:"alert",dismissible:!0,timeOut:5e3,buttonText:"Åtgärda",dismissLabel:"Stäng varning",timerLabel:"Denna varning stängs automatiskt"},t`<strong>Internationella etiketter</strong> Detta är en varning med
    svenska etiketter för stäng och timer.`);var $,T,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: false,
  timeOut: 0,
  buttonLabel: ''
}, html\`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.\`)`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var O,P,B;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information'
}, Playground.parameters!.content)`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,N,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'notice'
}, html\`<strong>Notice</strong> Body text with link or additional context.\`)`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,G,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive'
}, html\`<strong>Positive</strong> Feedback message with optional CTA.\`)`,...(j=(G=p.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var W,K,M;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'warning'
}, html\`<strong>Warning</strong> Important information to consider.\`)`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var F,H,q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'negative'
}, html\`<strong>Negative</strong> Error message requiring user attention.\`)`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,V,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true,
  buttonLabel: 'Take Action'
}, html\`<strong>Actionable</strong> Alert with a button for quick user
    interaction.\`)`,...(Y=(V=v.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true
}, html\`<strong>Dismissible</strong> User can dismiss this alert.\`)`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive',
  timeOut: 3000
}, html\`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.\`)`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,re,ie;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: true,
  buttonLabel: 'Learn More'
}, html\`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.\`)`,...(ie=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ae,oe,ne;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`makeStory({
  variant: 'warning',
  role: 'alert',
  dismissible: true
}, html\`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.\`)`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,me,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`makeStory({
  variant: 'positive',
  role: 'alert',
  dismissible: true
}, html\`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.\`)`,...(ce=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,ge,ue;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`makeStory({
  variant: 'warning',
  role: 'alert',
  dismissible: true,
  timeOut: 5000,
  buttonText: 'Åtgärda',
  dismissLabel: 'Stäng varning',
  timerLabel: 'Denna varning stängs automatiskt'
}, html\`<strong>Internationella etiketter</strong> Detta är en varning med
    svenska etiketter för stäng och timer.\`)`,...(ue=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const lt=["Playground","Information","Notice","Positive","Warning","Negative","WithAction","Dismissible","AutoDismiss","RichContent","ComplexContent","KeyboardAccessible","I18nLabels"];export{y as AutoDismiss,w as ComplexContent,f as Dismissible,x as I18nLabels,g as Information,k as KeyboardAccessible,b as Negative,u as Notice,r as Playground,p as Positive,_ as RichContent,h as Warning,v as WithAction,lt as __namedExportsOrder,nt as default};
