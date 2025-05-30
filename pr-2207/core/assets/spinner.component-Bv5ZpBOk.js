import{m as b}from"./runtime-BL31MtW8.js";import{l as y}from"./localized-decorator-DtmrKsyB.js";import{h as m,n as l,r as k,G as _,g as z}from"./custom-element-scoping-CNGU1oQ0.js";import{e as S}from"./class-map-CXsQwv0r.js";import{n as C}from"./when-BR7zwNJC.js";import{t as x}from"./tokens.style-DQsNuKSy.js";import{w as u}from"./watch-tFciLXSI.js";import{b as A,e as B,w as L}from"./declarative-layout-mixins-dHcexrGz.js";import{i as R}from"./lit-element-Bx14lxc-.js";const P=R`
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
    --spinner-track-color: var(--gds-sys-color-l3-background-secondary);
    --spinner-active-color: var(--gds-sys-color-l3-content-secondary);
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,g=e=>{throw TypeError(e)},i=(e,r,t,o)=>{for(var n=o>1?void 0:o?G(r,t):r,c=e.length-1,p;c>=0;c--)(p=e[c])&&(n=(o?p(r,t,n):p(n))||n);return o&&n&&E(r,t,n),n},h=(e,r,t)=>r.has(e)||g("Cannot "+t),v=(e,r,t)=>(h(e,r,"read from private field"),t?t.call(e):r.get(e)),f=(e,r,t)=>r.has(e)?g("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),M=(e,r,t,o)=>(h(e,r,"write to private field"),r.set(e,t),t),O=(e,r,t)=>(h(e,r,"access private method"),t),d,w,a;let s=class extends A(B(L(_))){constructor(){super(...arguments),f(this,d),this.label=b("Loading..."),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,f(this,a,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-connected"))}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,super.disconnectedCallback()}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return m`
      <div part="wrapper" class=${S(O(this,d,w).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${C(this.label&&this.showLabel,()=>m`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}_toggleRootStyles(){const{style:e}=document.documentElement;this.fullscreen?(M(this,a,{overflow:e.overflow,overscrollBehavior:e.overscrollBehavior}),e.overflow="hidden",e.overscrollBehavior="none"):(e.overflow=v(this,a).overflow,e.overscrollBehavior=v(this,a).overscrollBehavior)}};d=new WeakSet;w=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating}};a=new WeakMap;s.styles=[x,P];i([l({type:String})],s.prototype,"label",2);i([l({type:Boolean,reflect:!0})],s.prototype,"showLabel",2);i([l({type:Boolean,reflect:!0})],s.prototype,"cover",2);i([l({type:Boolean,reflect:!0})],s.prototype,"fullscreen",2);i([l({type:String,reflect:!0})],s.prototype,"size",2);i([k()],s.prototype,"_isAnimating",2);i([u("label")],s.prototype,"_updateAriaLabel",1);i([u("fullscreen")],s.prototype,"_toggleRootStyles",1);s=i([z("gds-spinner"),y()],s);export{s as G};
