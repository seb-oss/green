import{n as m,r as C,G as de,h as t,g as ce}from"./gds-element-KHa0AloG.js";import{i as ge,E as c}from"./lit-element-Bx14lxc-.js";import{a as me}from"./query-p8xgzTDt.js";import{e as ue}from"./class-map-CXsQwv0r.js";import{e as pe,n as he}from"./ref-R0wBYijq.js";import{u as be,s as A}from"./static-B8S6DEnV.js";import{G as fe}from"./button.component-BHtocGTN.js";import{G as ve}from"./card.component-C21NCPsO.js";import"./checkmark-D-0ZEcKl.js";import"./circle-info-BgbDYey7.js";import"./cross-small-j7P_yAOc.js";import"./button-nPQff-yp.js";import{t as ye}from"./tokens.style-DC2Hb-2P.js";import"./card-d-tVEDXR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./checkmark.component-BgKvBts3.js";import"./icon-BDCl8D0g.js";import"./circle-info.component-CF6nkNJx.js";import"./cross-small.component-D1Ljw-03.js";const _e=ge`
  :host {
    display: block;
    container-type: inline-size;
    margin: 0.3rem;
  }

  [gds-element='gds-card'] {
    --grid-areas: 'icon message close' 'icon action close';
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: var(--grid-areas);
    align-items: baseline;
    width: 100%;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    padding: 0.75rem;
  }

  [gds-element='gds-card'].dismissible {
    padding: 0.75rem;
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    [gds-element='gds-card'] {
      animation: slideIn 0.3s ease-out;
    }
  }

  [gds-element='gds-card'].dismissing {
    opacity: 0;
    transform: translateX(1rem);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    [gds-element='gds-card'].dismissing {
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
  [gds-element='gds-card']:focus-within {
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
  }

  .message-text {
    display: inline;
    white-space: normal;
  }

  /* Buttons */
  .close-btn,
  [gds-element='gds-button'] {
    /* WCAG 2.5.5 minimum touch target */
    min-width: 44px;
    min-height: 44px;
  }

  .close-btn {
    display: flex;
    justify-content: flex-end;
  }

  .close-btn > gds-icon-cross-small {
    margin: 0;
    align-self: flex-start;
    justify-self: flex-end;
  }

  .close-btn:hover {
    background-color: var(--gds-hover-bg, rgba(0, 0, 0, 0.05));
  }

  .close-btn:focus-visible {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  .close-btn > * {
    vertical-align: top;
    align-self: flex-start;
  }

  [gds-element='gds-button'] {
    grid-area: unset;
    width: auto;
    min-width: auto;
    margin: 0 0 0 1rem;
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
    [gds-element='gds-card'] {
      --grid-areas: 'icon message close' 'icon cta cta';
      grid-template-areas: var(--grid-areas);
    }

    .message {
      flex-direction: column;
      gap: 0.25rem;
    }
    .close-btn {
      grid-area: close;
      justify-self: end;
      align-self: start;
      margin: 0;
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    [gds-element='gds-card'] {
      grid-template-areas: 'icon message close';
    }
    .message {
      gap: 0.5rem;
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    [gds-element='gds-card'] {
      grid-template-columns: 1fr minmax(0, 37.5rem) auto 1fr;
      grid-template-areas: 'icon message close close';
    }
    .icon {
      grid-column: 1;
      margin-right: 1.5rem;
    }

    .message {
      grid-column: 2;
      gap: 0.75rem;
    }

    [gds-element='gds-button'] {
      grid-area: unset;
      display: inline-flex;
      flex-shrink: 0;
    }

    .close-btn {
      margin-left: 1.5rem;
      justify-self: end;
      align-self: start;
      grid-column: 4;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`;var xe=Object.defineProperty,we=Object.getOwnPropertyDescriptor,a=(e,i,l,d)=>{for(var n=d>1?void 0:d?we(i,l):i,k=e.length-1,T;k>=0;k--)(T=e[k])&&(n=(d?T(i,l,n):T(n))||n);return d&&n&&xe(i,l,n),n};const ke={positive:{icon:"checkmark",card:"positive",label:"Positive alert"},warning:{icon:"triangle-exclamation",card:"warning",label:"Warning alert"},negative:{icon:"triangle-exclamation",card:"negative",label:"Negative alert"},information:{icon:"circle-info",card:"information",label:"Information alert"},notice:{icon:"circle-info",card:"information",label:"Notice alert"}},Te=300,Ce=100;let s=class extends de{constructor(){super(),this.variant="information",this.role="alert",this.dismissible=!1,this.timeOut=0,this.buttonText="",this._progress=100,this._isClosing=!1,this._cardHidden=!1,this._alertRef=pe(),this._timerController={hostConnected:()=>{this.timeOut>0&&this._startTimer()},hostDisconnected:()=>this._clearTimers()},this.addController(this._timerController)}updated(e){e.has("timeOut")&&(this._clearTimers(),this.timeOut>0&&this._startTimer())}_startTimer(){const e=Date.now();this._progress=100,this._progressIntervalId=window.setInterval(()=>{const i=Date.now()-e;this._progress=Math.max(0,(this.timeOut-i)/this.timeOut*100)},Ce),this._timeoutId=window.setTimeout(()=>this._dismiss("timeout"),this.timeOut)}_clearTimers(){clearTimeout(this._timeoutId),clearInterval(this._progressIntervalId),this._timeoutId=this._progressIntervalId=void 0}async _dismiss(e){this._isClosing=!0,this._clearTimers(),await this.updateComplete,await new Promise(i=>setTimeout(i,Te)),this.dispatchEvent(new CustomEvent("close",{detail:{source:e},bubbles:!0,composed:!0})),this._cardHidden=!0}_onButtonClick(e){this.dispatchEvent(new CustomEvent("action",{detail:{source:"button",event:e},bubbles:!0,composed:!0}))}_handleKeyDown(e){e.key==="Escape"&&this.dismissible&&(e.preventDefault(),this._dismiss("escape"))}get _config(){return ke[this.variant]}_renderIcon(){const e=`gds-icon-${this._config.icon}`;return t`<span class="icon" role="presentation">
      ${be`<${A(e)} aria-hidden="true"></${A(e)}>`}
    </span>`}_renderMessage(){return t`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
      ${this.buttonText&&this.buttonText.trim()?t`
            <gds-button
              variant="neutral"
              rank="primary"
              size="small"
              @click=${this._onButtonClick}
              aria-describedby="alert-message"
            >
              ${this.buttonText}
            </gds-button>
          `:c}
    </div>`}_renderCloseButton(){return this.dismissible?t`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="small"
            aria-label="Dismiss alert"
            @click=${()=>this._dismiss("close")}
          >
            <gds-icon-cross-small></gds-icon-cross-small>
          </gds-button>
        `:c}_renderTimerBar(){return this.timeOut>0?t`
          <div
            class="timer-bar"
            role="timer"
            aria-label="Auto-dismiss timer"
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `:c}render(){if(this._cardHidden)return c;const e={dismissing:this._isClosing,dismissible:this.dismissible};return t`
      <gds-card
        ${he(this._alertRef)}
        role=${this.role}
        aria-label=${this._config.label}
        variant=${this._config.card}
        level="2"
        class=${ue(e)}
        @keydown=${this._handleKeyDown}
        id="alert-message"
      >
        ${this._renderIcon()} ${this._renderMessage()}
        ${this._renderCloseButton()} ${this._renderTimerBar()}
      </gds-card>
    `}};s.styles=[ye,_e];a([m({type:String,reflect:!0})],s.prototype,"variant",2);a([m({type:String,reflect:!0})],s.prototype,"role",2);a([m({type:Boolean})],s.prototype,"dismissible",2);a([m({type:Number,attribute:"time-out"})],s.prototype,"timeOut",2);a([m({type:String,attribute:"button-text"})],s.prototype,"buttonText",2);a([C()],s.prototype,"_progress",2);a([C()],s.prototype,"_isClosing",2);a([C()],s.prototype,"_cardHidden",2);a([me(".close-btn")],s.prototype,"_closeButton",2);a([me("gds-button")],s.prototype,"_actionButton",2);s=a([ce("gds-alert",{dependsOn:[fe,ve]})],s);s.define();const tt={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"],description:'ARIA role. Use "alert" for critical, "status" for less important.'},dismissible:{control:"boolean",description:"Shows close button when enabled."},timeOut:{control:"number"},buttonText:{control:"text",name:"Button Text (CTA)"}}},Ae=(e,i)=>{var l;return t`
  <gds-div padding="xs; l {m}" margin="m">
    <gds-alert
      variant="${e.variant}"
      role="${e.role}"
      ?dismissible=${e.dismissible}
      .timeOut=${e.timeOut}
      .buttonText=${e.buttonText||""}
    >
      ${((l=i.parameters)==null?void 0:l.content)||""}
    </gds-alert>
  </gds-div>
`},o=(e,i)=>({args:e,parameters:{content:i},render:Ae}),r=o({variant:"information",role:"alert",dismissible:!1,timeOut:0,buttonText:""},t`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`),g=o({...r.args,variant:"information"},r.parameters.content),u=o({...r.args,variant:"notice"},t`<strong>Notice</strong> Body text with link or additional context.`),p=o({...r.args,variant:"positive"},t`<strong>Positive</strong> Feedback message with optional CTA.`),h=o({...r.args,variant:"warning"},t`<strong>Warning</strong> Important information to consider.`),b=o({...r.args,variant:"negative"},t`<strong>Negative</strong> Error message requiring user attention.`),f=o({...r.args,variant:"information",dismissible:!0,buttonText:"Take Action"},t`<strong>Actionable</strong> Alert with a button for quick user
    interaction.`),v=o({...r.args,variant:"information",dismissible:!0},t`<strong>Dismissible</strong> User can dismiss this alert.`),y=o({...r.args,variant:"positive",timeOut:3e3},t`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.`),_=o({variant:"information",role:"alert",dismissible:!0,buttonText:"Learn More"},t`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.`),x=o({variant:"warning",role:"alert",dismissible:!0},t`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.`),w=o({variant:"positive",role:"alert",dismissible:!0},t`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.`);var S,I,$;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: false,
  timeOut: 0,
  buttonText: ''
}, html\`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.\`)`,...($=(I=r.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var O,P,D;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information'
}, Playground.parameters!.content)`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var B,E,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'notice'
}, html\`<strong>Notice</strong> Body text with link or additional context.\`)`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,j,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive'
}, html\`<strong>Positive</strong> Feedback message with optional CTA.\`)`,...(G=(j=p.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var W,K,M;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'warning'
}, html\`<strong>Warning</strong> Important information to consider.\`)`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var z,F,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'negative'
}, html\`<strong>Negative</strong> Error message requiring user attention.\`)`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,q,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true,
  buttonText: 'Take Action'
}, html\`<strong>Actionable</strong> Alert with a button for quick user
    interaction.\`)`,...(U=(q=f.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var V,X,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'information',
  dismissible: true
}, html\`<strong>Dismissible</strong> User can dismiss this alert.\`)`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`makeStory({
  ...Playground.args!,
  variant: 'positive',
  timeOut: 3000
}, html\`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.\`)`,...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,se;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`makeStory({
  variant: 'information',
  role: 'alert',
  dismissible: true,
  buttonText: 'Learn More'
}, html\`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.\`)`,...(se=(te=_.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`makeStory({
  variant: 'warning',
  role: 'alert',
  dismissible: true
}, html\`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.\`)`,...(oe=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ae,ne,le;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`makeStory({
  variant: 'positive',
  role: 'alert',
  dismissible: true
}, html\`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.\`)`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const st=["Playground","Information","Notice","Positive","Warning","Negative","WithAction","Dismissible","AutoDismiss","RichContent","ComplexContent","KeyboardAccessible"];export{y as AutoDismiss,x as ComplexContent,v as Dismissible,g as Information,w as KeyboardAccessible,b as Negative,u as Notice,r as Playground,p as Positive,_ as RichContent,h as Warning,f as WithAction,st as __namedExportsOrder,tt as default};
