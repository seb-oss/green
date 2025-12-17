import{i as w,L as y,a1 as k,K as _,A as z,H as S,a as x,b as C,h as v,t as A,n as o,z as P,a4 as f,g as B,I as L}from"./iframe-Drqb4zoq.js";const R=w`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,b=e=>{throw TypeError(e)},s=(e,r,t,a)=>{for(var n=a>1?void 0:a?G(r,t):r,p=e.length-1,c;p>=0;p--)(c=e[p])&&(n=(a?c(r,t,n):c(n))||n);return a&&n&&E(r,t,n),n},h=(e,r,t)=>r.has(e)||b("Cannot "+t),m=(e,r,t)=>(h(e,r,"read from private field"),t?t.call(e):r.get(e)),u=(e,r,t)=>r.has(e)?b("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),$=(e,r,t,a)=>(h(e,r,"write to private field"),r.set(e,t),t),M=(e,r,t)=>(h(e,r,"access private method"),t),d,g,l;let i=class extends y(k(_(z))){constructor(){super(...arguments),u(this,d),this.label=S("Loading..."),this.labelPosition="bottom",this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,u(this,l,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchCustomEvent("gds-spinner-connected")}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,super.disconnectedCallback()}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return v`
      <div part="wrapper" class=${x(M(this,d,g).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${C(this.showLabel,()=>v`<span part="label" class="spinner-label">${this.label}</span>`)}
      </div>
    `}_toggleRootStyles(){const{style:e}=document.documentElement;this.fullscreen?($(this,l,{overflow:e.overflow,overscrollBehavior:e.overscrollBehavior}),e.overflow="hidden",e.overscrollBehavior="none"):(e.overflow=m(this,l).overflow,e.overscrollBehavior=m(this,l).overscrollBehavior)}};d=new WeakSet;g=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating,[`spinner-label-${this.labelPosition}`]:this.labelPosition}};l=new WeakMap;i.styles=[A,R];s([o({type:String})],i.prototype,"label",2);s([o({type:String,reflect:!0,attribute:"label-position"})],i.prototype,"labelPosition",2);s([o({type:Boolean,reflect:!0})],i.prototype,"showLabel",2);s([o({type:Boolean,reflect:!0})],i.prototype,"cover",2);s([o({type:Boolean,reflect:!0})],i.prototype,"fullscreen",2);s([o({type:String,reflect:!0})],i.prototype,"size",2);s([P()],i.prototype,"_isAnimating",2);s([f("label")],i.prototype,"_updateAriaLabel",1);s([f("fullscreen")],i.prototype,"_toggleRootStyles",1);i=s([B("gds-spinner"),L()],i);export{i as G};
