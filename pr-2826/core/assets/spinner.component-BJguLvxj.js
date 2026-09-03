import{i as z,z as S,W as C,J as x,B as A,H as P,e as L,d as B,h as v,y as G,n as l,C as R,U as g,a as E}from"./iframe-YlrCpRF9.js";import{l as W}from"./localized-decorator-D88UzxeA.js";import{r as $,l as F,u as M}from"./scroll-lock-BfzVgcP9.js";const O=z`
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
`;var D=Object.defineProperty,H=Object.getOwnPropertyDescriptor,w=r=>{throw TypeError(r)},s=(r,e,i,p)=>{for(var n=p>1?void 0:p?H(e,i):e,d=r.length-1,h;d>=0;d--)(h=r[d])&&(n=(p?h(e,i,n):h(n))||n);return p&&n&&D(e,i,n),n},f=(r,e,i)=>e.has(r)||w("Cannot "+i),k=(r,e,i)=>(f(r,e,"read from private field"),e.get(r)),b=(r,e,i)=>e.has(r)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,i),y=(r,e,i,p)=>(f(r,e,"write to private field"),e.set(r,i),i),c=(r,e,i)=>(f(r,e,"access private method"),i),a,_,o,m,u;$();let t=class extends S(C(x(A))){constructor(){super(...arguments),b(this,a),this.label=P("Loading..."),this.labelPosition="bottom",this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,b(this,o,!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.fullscreen&&c(this,a,m).call(this),this.dispatchCustomEvent("gds-spinner-connected")}disconnectedCallback(){super.disconnectedCallback(),this._isAnimating=!1,c(this,a,u).call(this)}_handleFullscreenChange(){this.fullscreen?c(this,a,m).call(this):c(this,a,u).call(this)}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return v`
      <div part="wrapper" class=${L(c(this,a,_).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${B(this.showLabel,()=>v`<span part="label" class="spinner-label">${this.label}</span>`)}
      </div>
    `}};a=new WeakSet;_=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating,[`spinner-label-${this.labelPosition}`]:this.labelPosition}};o=new WeakMap;m=function(){k(this,o)||(F(this),y(this,o,!0))};u=function(){k(this,o)&&(M(this),y(this,o,!1))};t.styles=[G,O];s([l({type:String})],t.prototype,"label",2);s([l({type:String,reflect:!0,attribute:"label-position"})],t.prototype,"labelPosition",2);s([l({type:Boolean,reflect:!0})],t.prototype,"showLabel",2);s([l({type:Boolean,reflect:!0})],t.prototype,"cover",2);s([l({type:Boolean,reflect:!0})],t.prototype,"fullscreen",2);s([l({type:String,reflect:!0})],t.prototype,"size",2);s([R()],t.prototype,"_isAnimating",2);s([g("fullscreen")],t.prototype,"_handleFullscreenChange",1);s([g("label")],t.prototype,"_updateAriaLabel",1);t=s([E("gds-spinner"),W()],t);export{t as G};
