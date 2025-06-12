import{n as l,r as re,G as ae,h as s,g as ie}from"./gds-element-KHa0AloG.js";import{i as le,E as c}from"./lit-element-Bx14lxc-.js";import{a as oe}from"./query-p8xgzTDt.js";import{e as de}from"./class-map-CXsQwv0r.js";import{e as me,n as ce}from"./ref-R0wBYijq.js";import{u as ge,s as A}from"./static-B8S6DEnV.js";import{G as pe}from"./button.component-BHtocGTN.js";import{G as ue}from"./card.component-C21NCPsO.js";import"./checkmark-D-0ZEcKl.js";import"./circle-info-BgbDYey7.js";import"./cross-small-j7P_yAOc.js";import"./button-nPQff-yp.js";import{t as he}from"./tokens.style-DC2Hb-2P.js";import"./card-d-tVEDXR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D9AB5Uac.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./watch-tFciLXSI.js";import"./div.component-BLZX0vzk.js";import"./checkmark.component-BgKvBts3.js";import"./icon-BDCl8D0g.js";import"./circle-info.component-CF6nkNJx.js";import"./cross-small.component-D1Ljw-03.js";const ye=le`
  :host {
    display: block;
    container-type: inline-size;
    margin: 0.3rem;
  }

  [gds-element='gds-card'] {
    display: grid;
    align-items: baseline;
    width: 100%;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      'icon message close'
      'icon action  close';
  }

  /* Animation states */
  @media (prefers-reduced-motion: no-preference) {
    [gds-element='gds-card'] {
      animation: slideIn 0.3s ease-out;
    }
    [gds-element='gds-card'].dismissing {
      opacity: 0;
      transform: translateX(1rem);
      pointer-events: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [gds-element='gds-card'].dismissing {
      opacity: 0;
      pointer-events: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Focus styles */
  [gds-element='gds-card']:focus-within {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Core elements */
  .icon {
    grid-area: icon;
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      forced-color-adjust: none;
    }
  }

  .message {
    grid-area: message;
    font-size: var(--gds-font-size-base, 1rem);
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .message-text {
    display: inline;
    white-space: normal;
  }

  /* Interactive elements */
  .close-btn,
  gds-button {
    /* Ensure minimum touch target size (WCAG 2.5.5) */
    min-width: 44px;
    min-height: 44px;
  }

  /* Close button */
  .close-btn {
    grid-area: close;
    justify-self: end;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 1.2rem;
    line-height: 1;
    margin: 0;
    z-index: 2;
    padding: 0.5rem;
    border-radius: var(--gds-radius-sm, 0.25rem);
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background-color: var(--gds-hover-bg, rgba(0, 0, 0, 0.05));
  }

  .close-btn:focus-visible {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Button inside message */
  gds-button {
    grid-area: action;
    width: 100%;
    min-width: 7.5rem;
    margin-top: 0.75rem;
  }

  /* Timer bar */
  .timer-bar {
    position: absolute;
    inset: auto 0 0 0;
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

  /* Reduced motion: disable progress animation */
  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  /* Small: stacked */
  @container (max-width: 600px) {
    [gds-element='gds-card'] {
      grid-template-areas:
        'icon message close'
        'icon cta     cta';
      padding: 1rem;
      gap: 0.75rem;
    }
    [gds-element='gds-card'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    .message {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    gds-button {
      margin: 0.75rem 0 0;
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    [gds-element='gds-card'] {
      grid-template-areas: 'icon message close';
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      gap: 0.75rem 1rem;
    }
    [gds-element='gds-card'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    .message {
      display: flex;
      gap: 0.5rem;
    }

    gds-button {
      grid-area: unset;
      width: auto;
      margin: 0 0 0 1rem;
      display: inline-flex;
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    [gds-element='gds-card'] {
      grid-template-columns: 1fr minmax(0, 37.5rem) auto 1fr;
      grid-template-areas: 'icon message close close';
      padding: 0.75rem 1.5rem;
      min-height: 2.5rem;
    }
    [gds-element='gds-card'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    [gds-element='gds-card'].dismissing {
      opacity: 0;
      transform: translateX(1rem);
      pointer-events: none;
    }
    .icon {
      grid-column: 1;
      margin-right: 1.5rem;
    }
    .message {
      grid-column: 2;
      display: flex;
      gap: 0.75rem;
    }
    gds-button {
      grid-area: unset;
      width: auto;
      margin: 0 0 0 0.75rem;
      display: inline-flex;
      flex-shrink: 0;
    }
    .close-btn {
      grid-column: 4;
      margin-left: 1.5rem;
    }
  }
`;var be=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,a=(e,n,d,m)=>{for(var i=m>1?void 0:m?fe(n,d):n,_=e.length-1,T;_>=0;_--)(T=e[_])&&(i=(m?T(n,d,i):T(i))||i);return m&&i&&be(n,d,i),i};let r=class extends ae{constructor(){super(),this.type="info",this.showIcon=!0,this.dismissible=!1,this.timeOut=0,this.buttonText="",this._progress=100,this._isClosing=!1,this._alertRef=me(),this._timerController={hostConnected:()=>{this.timeOut>0&&this._startTimer()},hostDisconnected:()=>{this._clearTimers()}},this.addController(this._timerController)}firstUpdated(){this._announceAlert()}updated(e){e.has("timeOut")&&(this._clearTimers(),this.timeOut>0&&this._startTimer()),e.has("type")&&e.get("type")!==void 0&&this._announceAlert()}_announceAlert(){const e=this._alertRef.value;e&&(e.removeAttribute("aria-live"),requestAnimationFrame(()=>{e.setAttribute("aria-live","polite")}))}_startTimer(){const e=Date.now();this._progress=100,this._progressIntervalId=window.setInterval(()=>{this._progress=Math.max(0,(e+this.timeOut-Date.now())/this.timeOut*100)},100),this._timeoutId=window.setTimeout(()=>this._dismiss("timeout"),this.timeOut)}_clearTimers(){clearTimeout(this._timeoutId),clearInterval(this._progressIntervalId),this._timeoutId=this._progressIntervalId=void 0}async _dismiss(e){this._isClosing=!0,this._clearTimers(),await this.updateComplete,await new Promise(n=>setTimeout(n,300)),this.dispatchEvent(new CustomEvent("close",{detail:{source:e},bubbles:!0,composed:!0})),this.remove()}_onButtonClick(e){this.dispatchEvent(new CustomEvent("action",{detail:{source:"button",event:e},bubbles:!0,composed:!0}))}_handleKeyDown(e){e.key==="Escape"&&this.dismissible&&(e.preventDefault(),this._dismiss("escape"))}_getAriaLabel(){return{info:"Information alert",success:"Success alert",warning:"Warning alert",error:"Error alert"}[this.type]}_renderIcon(){if(!this.showIcon)return c;const e={success:"checkmark",warning:"triangle-exclamation",error:"triangle-exclamation",info:"circle-info"},n=`gds-icon-${e[this.type]||e.info}`;return s`<span
      class="icon"
      role="img"
      aria-label=${{success:"Success",warning:"Warning",error:"Error",info:"Information"}[this.type]}
    >
      ${ge`<${A(n)} aria-hidden="true"></${A(n)}>`}
    </span>`}_renderMessage(){const e=!!this.buttonText;return s`<div class="message" role="status">
      <span class="message-text">
        <slot @slotchange=${this._announceAlert}></slot>
      </span>
      ${e?s`
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
    </div>`}_renderCloseButton(){return this.dismissible?s`<button
          class="close-btn"
          @click=${()=>this._dismiss("close")}
          aria-label="Dismiss alert"
          type="button"
        >
          <gds-icon-cross-small
            size="l"
            aria-hidden="true"
          ></gds-icon-cross-small>
        </button>`:c}_renderTimerBar(){return this.timeOut>0?s`<div
          class="timer-bar"
          role="timer"
          aria-label="Auto-dismiss timer"
          aria-valuenow=${this._progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="timer-progress" style="width: ${this._progress}%"></div>
        </div>`:c}_getCardVariant(){return{success:"positive",warning:"warning",error:"negative",info:"information"}[this.type]}render(){const e={dismissing:this._isClosing,dismissible:this.dismissible};return s`
      <gds-card
        ${ce(this._alertRef)}
        role="alert"
        aria-label=${this._getAriaLabel()}
        aria-live="polite"
        aria-atomic="true"
        variant=${this._getCardVariant()}
        level="2"
        class=${de(e)}
        @keydown=${this._handleKeyDown}
        id="alert-message"
      >
        ${this._renderIcon()} ${this._renderMessage()}
        ${this._renderCloseButton()} ${this._renderTimerBar()}
      </gds-card>
    `}};r.styles=[he,ye];a([l({type:String,reflect:!0})],r.prototype,"type",2);a([l({type:Boolean,attribute:"show-icon"})],r.prototype,"showIcon",2);a([l({type:Boolean})],r.prototype,"dismissible",2);a([l({type:Number,attribute:"time-out"})],r.prototype,"timeOut",2);a([l({type:String,attribute:"button-text"})],r.prototype,"buttonText",2);a([re()],r.prototype,"_progress",2);a([re()],r.prototype,"_isClosing",2);a([oe(".close-btn")],r.prototype,"_closeButton",2);a([oe("gds-button")],r.prototype,"_actionButton",2);r=a([ie("gds-alert",{dependsOn:[pe,ue]})],r);r.define();const Ye={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warning","error"]},showIcon:{control:"boolean"},dismissible:{control:"boolean"},timeOut:{control:"number"},buttonText:{control:"text",name:"Button Text (CTA)"}}},o=(e,{parameters:n})=>s`
  <gds-div padding="xs; l {m}" margin="m">
    <gds-alert
      type="${e.type}"
      ?show-icon=${e.showIcon}
      ?dismissible=${e.dismissible}
      .timeOut=${e.timeOut}
      .buttonText=${e.buttonText||""}
    >
      ${(n==null?void 0:n.content)||""}
    </gds-alert>
  </gds-div>
`,t={args:{type:"info",showIcon:!0,dismissible:!1,timeOut:0,buttonText:""},parameters:{content:s`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`},render:o},g={...t,args:{...t.args,type:"info"},parameters:{content:s`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`},render:o},p={...t,args:{...t.args,type:"success"},parameters:{content:s`<strong>Success</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`},render:o},u={...t,args:{...t.args,type:"warning"},parameters:{content:s`<strong>Warning</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`},render:o},h={...t,args:{...t.args,type:"error"},parameters:{content:s`<strong>Error</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`},render:o},y={...t,args:{...t.args,type:"info",dismissible:!0,buttonText:"Take Action"},parameters:{content:s`<strong>Actionable</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`},render:o},b={...t,args:{...t.args,type:"info",dismissible:!0},parameters:{content:s`<strong>Dismissible</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`},render:o},f={...t,args:{...t.args,type:"success",timeOut:3e3},parameters:{content:s`<strong>Auto Dismiss</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`},render:o},w={...t,args:{...t.args,type:"info",showIcon:!1,dismissible:!0},parameters:{content:s`<strong>No Icon</strong> This alert does not show an icon.`},render:o},x={args:{type:"info",showIcon:!0,dismissible:!0,buttonText:"Learn More"},parameters:{content:s`<strong>Rich Content Alert</strong> This alert contains
      <a href="#" style="color: inherit; text-decoration: underline;">a link</a
      >, <em>emphasized text</em>, and
      <code
        style="background: rgba(0,0,0,0.1); padding: 2px 4px; border-radius: 3px;"
        >inline code</code
      >.`},render:o},v={args:{type:"warning",showIcon:!0,dismissible:!0,buttonText:""},parameters:{content:s`<strong>Long Content Example</strong> This is a very long
      message that demonstrates how the alert handles extensive content. The
      layout should remain stable and readable even with multiple lines of text.
      The action button and close button should maintain their positions
      appropriately.`},render:o};var I,k,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'info',
    showIcon: true,
    dismissible: false,
    timeOut: 0,
    buttonText: ''
  },
  parameters: {
    content: html\`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.\`
  },
  render: Template
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var B,$,P;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info'
  },
  parameters: {
    content: html\`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.\`
  },
  render: Template
}`,...(P=($=g.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var O,S,E;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'success'
  },
  parameters: {
    content: html\`<strong>Success</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.\`
  },
  render: Template
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var D,z,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'warning'
  },
  parameters: {
    content: html\`<strong>Warning</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.\`
  },
  render: Template
}`,...(L=(z=u.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var W,G,R;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'error'
  },
  parameters: {
    content: html\`<strong>Error</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.\`
  },
  render: Template
}`,...(R=(G=h.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var M,j,N;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    dismissible: true,
    buttonText: 'Take Action'
  },
  parameters: {
    content: html\`<strong>Actionable</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.\`
  },
  render: Template
}`,...(N=(j=y.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var F,K,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    dismissible: true
  },
  parameters: {
    content: html\`<strong>Dismissible</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.\`
  },
  render: Template
}`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var X,Y,q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'success',
    timeOut: 3000
  },
  parameters: {
    content: html\`<strong>Auto Dismiss</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.\`
  },
  render: Template
}`,...(q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var H,U,J;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    showIcon: false,
    dismissible: true
  },
  parameters: {
    content: html\`<strong>No Icon</strong> This alert does not show an icon.\`
  },
  render: Template
}`,...(J=(U=w.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,Z,ee;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: 'info',
    showIcon: true,
    dismissible: true,
    buttonText: 'Learn More'
  },
  parameters: {
    content: html\`<strong>Rich Content Alert</strong> This alert contains
      <a href="#" style="color: inherit; text-decoration: underline;">a link</a
      >, <em>emphasized text</em>, and
      <code
        style="background: rgba(0,0,0,0.1); padding: 2px 4px; border-radius: 3px;"
        >inline code</code
      >.\`
  },
  render: Template
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ne;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    showIcon: true,
    dismissible: true,
    buttonText: ''
  },
  parameters: {
    content: html\`<strong>Long Content Example</strong> This is a very long
      message that demonstrates how the alert handles extensive content. The
      layout should remain stable and readable even with multiple lines of text.
      The action button and close button should maintain their positions
      appropriately.\`
  },
  render: Template
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const qe=["Playground","Info","Success","Warning","Error","WithAction","Dismissible","AutoDismiss","NoIcon","RichContent","ComplexContent"];export{f as AutoDismiss,v as ComplexContent,b as Dismissible,h as Error,g as Info,w as NoIcon,t as Playground,x as RichContent,p as Success,u as Warning,y as WithAction,qe as __namedExportsOrder,Ye as default};
