import{i as u,S as w,a5 as y,Q as k,J as _,O as z,a as S,b as x,h,ab as C,t as A,n as a,I as P,a8 as f,g as R}from"./iframe--EOx3dpz.js";import{l as L}from"./localized-decorator-DKJ1UTxE.js";const G=u`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.1rem 0.2rem 0.3rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Default to light mode as fallback */
    --spinner-track-color: var(--gds-sys-color-l3-neutral-02);
    --spinner-active-color: var(--gds-sys-color-content-neutral-02);
    --spinner-label-color: currentColor;
    --spinner-backdrop-color: rgba(100, 100, 100, 0.4);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Size-specific host settings */
  :host([size='sm']) {
    --size: var(--spinner-size-sm);
    --track-width: var(--track-width-sm);
  }

  :host([size='md']),
  :host([size='default']) {
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);
  }

  :host([size='lg']) {
    --size: var(--spinner-size-lg);
    --track-width: var(--track-width-lg);
  }

  /* Fullscreen positioning */
  :host([fullscreen]) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--spinner-active-color);
    outline-offset: 2px;
  }

  /* Spinner component */
  .spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
    aspect-ratio: 1 / 1;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      /* Slower rotation for reduced motion preference */
      animation-duration: 2s;
      /* Smaller rotation to reduce visual intensity */
      animation-name: gdsSpinnerReducedRotation;
    }

    @keyframes gdsSpinnerReducedRotation {
      to {
        transform: rotate(180deg);
      }
    }
  }

  /* Layout components */
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spinner-wrapper.spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .spinner-wrapper.spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .spinner-wrapper.spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    backdrop-filter: blur(var(--spinner-backdrop-blur));
  }

  .spinner-wrapper.spinner-label-top {
    flex-direction: column-reverse;

    & .spinner-label {
      margin: 0 0 1rem;
    }
  }

  .spinner-wrapper.spinner-label-left {
    flex-direction: row-reverse;
    & .spinner-label {
      margin: 0 1rem 0 0;
    }
  }

  .spinner-wrapper.spinner-label-right {
    flex-direction: row;
    & .spinner-label {
      margin: 0 0 0 1rem;
    }
  }

  /* Label styling */
  .spinner-label {
    margin-top: 1rem;
    color: var(--spinner-label-color);
    text-align: center;
  }

  /* Animation keyframes */
  @keyframes gdsSpinnerRotation {
    to {
      transform: rotate(360deg);
    }
  }
`;var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},i=(e,r,t,o)=>{for(var n=o>1?void 0:o?E(r,t):r,l=e.length-1,p;l>=0;l--)(p=e[l])&&(n=(o?p(r,t,n):p(n))||n);return o&&n&&$(r,t,n),n},b=(e,r,t)=>r.has(e)||v("Cannot "+t),O=(e,r,t)=>(b(e,r,"read from private field"),t?t.call(e):r.get(e)),m=(e,r,t)=>r.has(e)?v("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),B=(e,r,t)=>(b(e,r,"access private method"),t),c,d,g;let s=class extends w(y(k(_))){constructor(){super(...arguments),m(this,d),m(this,c,u`
    html {
      overflow: hidden !important;
      overscroll-behavior: none !important;
    }
  `),this.label=z("Loading..."),this.labelPosition="bottom",this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchCustomEvent("gds-spinner-connected")}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return h`
      <div part="wrapper" class=${S(B(this,d,g).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${x(this.showLabel,()=>h`<span part="label" class="spinner-label">${this.label}</span>`)}
      </div>
    `}_toggleRootStyles(){const e=C.instance,r=`gds-spinner-fullscreen-${this.id||"default"}`;this.fullscreen?e.injectGlobalStyles(r,O(this,c)):e.clearGlobalStyles(r)}};c=new WeakMap;d=new WeakSet;g=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating,[`spinner-label-${this.labelPosition}`]:this.labelPosition}};s.styles=[A,G];i([a({type:String})],s.prototype,"label",2);i([a({type:String,reflect:!0,attribute:"label-position"})],s.prototype,"labelPosition",2);i([a({type:Boolean,reflect:!0})],s.prototype,"showLabel",2);i([a({type:Boolean,reflect:!0})],s.prototype,"cover",2);i([a({type:Boolean,reflect:!0})],s.prototype,"fullscreen",2);i([a({type:String,reflect:!0})],s.prototype,"size",2);i([P()],s.prototype,"_isAnimating",2);i([f("label")],s.prototype,"_updateAriaLabel",1);i([f("fullscreen")],s.prototype,"_toggleRootStyles",1);s=i([R("gds-spinner"),L()],s);export{s as G};
