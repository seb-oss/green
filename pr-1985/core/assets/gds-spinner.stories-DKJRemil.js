import{i as O,x as s}from"./lit-element-C_s9q329.js";import{n as i,g as V,G as P,h as u}from"./custom-element-scoping-BEGY3AqQ.js";import{t as F}from"./tokens.style-CFvqdzpw.js";import{T as R}from"./transitional-styles-gKBkOdeg.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j=O`
  :host {
    /* Color tokens */
    --gds-ref-color-white: #ffffff;
    --gds-ref-color-black: #000000;

    --gds-ref-pallet-base400: hsl(0, 0%, 81%);
    --gds-ref-pallet-base800: hsl(0, 0%, 20%);

    /* Spinner-specific tokens */
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;
    --track-width-md: 0.375rem;
    --track-width-sm: 0.275rem;
    --spinner-backdrop-color: rgba(0, 0, 0, 0.55);

    /* High contrast mode colors */
    --spinner-track-color: var(--gds-ref-pallet-base400);
    --spinner-active-color: var(--gds-ref-pallet-base800);

    display: block;
  }

  /* High Contrast Mode Support */
  @media (forced-colors: active) {
    :host {
      --spinner-track-color: ButtonBorder;
      --spinner-active-color: ButtonText;
    }
  }

  /* Base spinner styles */
  .gds-spinner {
    height: var(--spinner-size-md);
    width: var(--spinner-size-md);
    border: var(--track-width-md) solid transparent;
    border-left-color: var(--spinner-track-color);
    border-right-color: var(--spinner-track-color);
    border-bottom-color: var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    border-radius: 50%;
    display: block;
    transform: translateZ(0);
    will-change: transform;
    animation-name: gdsSpinnerRotation;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    .gds-spinner {
      animation-duration: 2s;
    }
  }

  /* Size variants */
  .gds-spinner-sm {
    height: var(--spinner-size-sm);
    width: var(--spinner-size-sm);
    border-width: var(--track-width-sm);
  }

  .gds-spinner-lg {
    height: var(--spinner-size-lg);
    width: var(--spinner-size-lg);
    border-width: var(--track-width-md);
  }

  /* Wrapper styles */
  .gds-spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* Text styles */
  .spinner-text {
    margin-top: 1rem;
    color: var(--gds-ref-color-black);
    font-size: 1rem;
    text-align: center;
    /* Ensure this is visible */
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    overflow: visible;
  }

  /* Screen reader only class */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Position variants */
  .gds-spinner-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }

  .gds-spinner-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .gds-spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    z-index: 998;
  }

  /* Animation */
  @keyframes gdsSpinnerRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Focus styles for keyboard navigation */
  :host(:focus-visible) {
    outline: 2px solid var(--gds-ref-pallet-base800);
    outline-offset: 2px;
  }
`;var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,t=(e,o,m,a)=>{for(var r=a>1?void 0:a?D(o,m):o,v=e.length-1,h;v>=0;v--)(h=e[v])&&(r=(a?h(o,m,r):h(r))||r);return a&&r&&A(o,m,r),r};let n=class extends P{constructor(){super(...arguments),this.visualText=!0,this.cover=!1,this.fullscreen=!1,this.size="default"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-busy","true"),R.instance.apply(this,"gds-spinner")}_getWrapperClasses(){const e=["gds-spinner-wrapper"];return this.fullscreen&&e.push("gds-spinner-fullscreen"),this.cover&&e.push("gds-spinner-cover"),(this.cover||this.fullscreen)&&e.push("gds-spinner-backdrop"),e.join(" ")}_getSpinnerClasses(){return`gds-spinner ${this.size?`gds-spinner-${this.size}`:""}`}_renderText(){return this.text?this.visualText?u`<span class="spinner-text" aria-live="polite"
        >${this.text}</span
      >`:u`<span class="sr-only" aria-live="polite">${this.text}</span>`:null}render(){return u`
      <div role="status" aria-live="polite">
        <div class=${this._getWrapperClasses()}>
          <span class=${this._getSpinnerClasses()}></span>
          ${this._renderText()}
        </div>
      </div>
    `}};n.styles=[F,O`
      :host {
        display: block;
      }
    `,j];t([i({type:String})],n.prototype,"text",2);t([i({type:Boolean})],n.prototype,"visualText",2);t([i({type:Boolean})],n.prototype,"cover",2);t([i({type:Boolean})],n.prototype,"fullscreen",2);t([i({type:String})],n.prototype,"size",2);n=t([V("gds-spinner")],n);const q={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
          A loading indicator component that supports various sizes and display modes.
        `}}},argTypes:{size:{control:"select",options:["default","sm","md","lg"],description:"Size of the spinner"},text:{control:"text",description:"Loading text"},visualText:{control:"boolean",description:"Show text visually or for screen readers only"},cover:{control:"boolean",description:"Cover container with backdrop"},fullscreen:{control:"boolean",description:"Cover entire viewport"}}},p={args:{size:"md",text:"Loading...",visualText:!0,cover:!1,fullscreen:!1},render:e=>s`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .size=${e.size}
        .text=${e.text}
        .visualText=${e.visualText}
        .cover=${e.cover}
        .fullscreen=${e.fullscreen}
      ></gds-spinner>
    </div>
  `},l={name:"Size Variants",render:()=>s`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner size="sm"></gds-spinner>
        <p style="margin-top: 1rem;">Small</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="default"></gds-spinner>
        <p style="margin-top: 1rem;">Default</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">Medium</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="lg"></gds-spinner>
        <p style="margin-top: 1rem;">Large</p>
      </div>
    </div>
  `},d={name:"Text Options",render:()=>s`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Visible loading text"
          .visualText=${!0}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Text</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Screen reader only text"
          .visualText=${!1}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Screen Reader Only</p>
      </div>
    </div>
  `},c={name:"Container Coverage",render:()=>s`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .cover=${!0}
        text="Loading content..."
        size="md"
      ></gds-spinner>
    </div>
  `},g={name:"Fullscreen Mode",render:()=>s`
    <div
      style="
      position: relative;
      width: 100%;
      height: 400px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Page Content</h3>
        <p>This represents a full page of content.</p>
        <p>The spinner will cover this entire area.</p>
      </div>

      <gds-spinner
        .fullscreen=${!0}
        text="Loading application..."
        size="lg"
      ></gds-spinner>
    </div>
  `};var x,f,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'md',
    text: 'Loading...',
    visualText: true,
    cover: false,
    fullscreen: false
  },
  render: args => html\`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .size=\${args.size}
        .text=\${args.text}
        .visualText=\${args.visualText}
        .cover=\${args.cover}
        .fullscreen=\${args.fullscreen}
      ></gds-spinner>
    </div>
  \`
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,z,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => html\`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner size="sm"></gds-spinner>
        <p style="margin-top: 1rem;">Small</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="default"></gds-spinner>
        <p style="margin-top: 1rem;">Default</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">Medium</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="lg"></gds-spinner>
        <p style="margin-top: 1rem;">Large</p>
      </div>
    </div>
  \`
}`,...(w=(z=l.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var T,S,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Text Options',
  render: () => html\`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Visible loading text"
          .visualText=\${true}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Text</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          text="Screen reader only text"
          .visualText=\${false}
        ></gds-spinner>
        <p style="margin-top: 1rem;">Screen Reader Only</p>
      </div>
    </div>
  \`
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,$,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Container Coverage',
  render: () => html\`
    <div
      style="
      position: relative;
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Container Content</h3>
        <p>This is some sample content in the container.</p>
        <p>More content here...</p>
      </div>

      <gds-spinner
        .cover=\${true}
        text="Loading content..."
        size="md"
      ></gds-spinner>
    </div>
  \`
}`,...(_=($=c.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var M,B,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => html\`
    <div
      style="
      position: relative;
      width: 100%;
      height: 400px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      overflow: hidden;
    "
    >
      <div style="padding: 1rem;">
        <h3 style="margin-top: 0;">Page Content</h3>
        <p>This represents a full page of content.</p>
        <p>The spinner will cover this entire area.</p>
      </div>

      <gds-spinner
        .fullscreen=\${true}
        text="Loading application..."
        size="lg"
      ></gds-spinner>
    </div>
  \`
}`,...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const I=["Basic","Sizes","TextVisibility","Cover","Fullscreen"];export{p as Basic,c as Cover,g as Fullscreen,l as Sizes,d as TextVisibility,I as __namedExportsOrder,q as default};
