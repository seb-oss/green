import{i as Z,x as d}from"./lit-element-C_s9q329.js";import{o as J}from"./if-defined-Ct9lF4W9.js";import{n as c,r as K,g as Q,G as X,h as z}from"./custom-element-scoping-BEGY3AqQ.js";import{e as Y}from"./class-map-Bz98xO8-.js";import{n as ee}from"./when-BR7zwNJC.js";import{T as te}from"./transitional-styles-iv5lM2WH.js";import"./div-Cnle9s5w.js";import"./flex-tnFv_7np.js";import"./text-DbVC2snl.js";import"./card-BihnooJR.js";import"./theme-QT20-m4T.js";import"./button-DMqiAWPO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-CFvqdzpw.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./static-_ukc2i0J.js";import"./default-typography.styles-Bl0hQgz1.js";import"./watch-tFciLXSI.js";import"./query-p8xgzTDt.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";const re=Z`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.275rem 0.375rem 0.375rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Theme variables - define light and dark separately first */
    --spinner-track-color-light: hsl(0 0% 81%);
    --spinner-track-color-dark: hsl(0 0% 40%);
    --spinner-active-color-light: hsl(0 0% 20%);
    --spinner-active-color-dark: hsl(0 0% 85%);
    --spinner-label-color-light: #333333;
    --spinner-label-color-dark: #ffffff;
    --spinner-backdrop-color-light: rgba(255, 255, 255, 0.8);
    --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.8);

    /* Default to light mode as fallback */
    --spinner-track-color: var(--spinner-track-color-light);
    --spinner-active-color: var(--spinner-active-color-light);
    --spinner-label-color: var(--spinner-label-color-light);
    --spinner-backdrop-color: var(--spinner-backdrop-color-light);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Media query fallback for browsers that don't support light-dark() */
  @media (prefers-color-scheme: dark) {
    :host {
      --spinner-track-color: var(--spinner-track-color-dark);
      --spinner-active-color: var(--spinner-active-color-dark);
      --spinner-label-color: var(--spinner-label-color-dark);
      --spinner-backdrop-color: var(--spinner-backdrop-color-dark);
    }
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

  /* High contrast mode support */
  @media (forced-colors: active) {
    :host {
      /* Use system colors that respect the user's high contrast theme */
      --spinner-track-color: GrayText;
      --spinner-active-color: HighlightText;
      --spinner-label-color: ButtonText;

      /* Force a transparent background for the backdrop to respect high contrast */
      --spinner-backdrop-color: transparent;
    }

    /* Ensure the spinner has a visible outline in high contrast mode */
    .gds-spinner {
      /* This ensures the spinner is visible */
      border-color: Canvas;
      border-top-color: Highlight;
      forced-color-adjust: none;
    }

    /* Make sure text remains visible */
    .spinner-label {
      color: ButtonText;
      forced-color-adjust: none;
    }

    /* For cover/fullscreen modes, use a pattern instead of transparency */
    .gds-spinner-wrapper.gds-spinner-backdrop {
      background-color: Canvas;
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        GrayText 10px,
        GrayText 20px
      );
      backdrop-filter: none;
    }
  }

  /* Increased contrast mode support */
  @media (prefers-contrast: more) {
    :host {
      /* Higher contrast between track and active part */
      --spinner-track-color-light: hsl(0 0% 75%);
      --spinner-track-color-dark: hsl(0 0% 45%);
      --spinner-active-color-light: hsl(0 0% 0%);
      --spinner-active-color-dark: hsl(0 0% 100%);

      /* Ensure text is highly visible */
      --spinner-label-color-light: #000000;
      --spinner-label-color-dark: #ffffff;

      /* More opaque backdrop for better contrast */
      --spinner-backdrop-color-light: rgba(255, 255, 255, 0.9);
      --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.9);

      /* Thicker borders for better visibility */
      --track-width-sm: 0.325rem;
      --track-width-md: 0.45rem;
      --track-width-lg: 0.45rem;
    }

    /* More pronounced label */
    .spinner-label {
      font-weight: bold;
    }
  }

  /* Reduced contrast mode support */
  @media (prefers-contrast: less) {
    :host {
      /* Softer contrast */
      --spinner-track-color-light: hsl(0 0% 85%);
      --spinner-track-color-dark: hsl(0 0% 35%);
      --spinner-active-color-light: hsl(0 0% 40%);
      --spinner-active-color-dark: hsl(0 0% 70%);

      /* Softer backdrop */
      --spinner-backdrop-color-light: rgba(255, 255, 255, 0.7);
      --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.7);
    }
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
  .gds-spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .gds-spinner {
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
  .gds-spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .gds-spinner-wrapper.gds-spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .gds-spinner-wrapper.gds-spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .gds-spinner-wrapper.gds-spinner-backdrop {
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

  /* Light-dark variants as separate rules after the fallbacks */
  @supports (color: light-dark(red, blue)) {
    :host {
      --spinner-track-color: light-dark(
        var(--spinner-track-color-light),
        var(--spinner-track-color-dark)
      );
      --spinner-active-color: light-dark(
        var(--spinner-active-color-light),
        var(--spinner-active-color-dark)
      );
      --spinner-label-color: light-dark(
        var(--spinner-label-color-light),
        var(--spinner-label-color-dark)
      );
      --spinner-backdrop-color: light-dark(
        var(--spinner-backdrop-color-light),
        var(--spinner-backdrop-color-dark)
      );
    }
  }
`;var ne=Object.defineProperty,se=Object.getOwnPropertyDescriptor,q=e=>{throw TypeError(e)},o=(e,t,r,a)=>{for(var s=a>1?void 0:a?se(t,r):t,b=e.length-1,x;b>=0;b--)(x=e[b])&&(s=(a?x(t,r,s):x(s))||s);return a&&s&&ne(t,r,s),s},k=(e,t,r)=>t.has(e)||q("Cannot "+r),L=(e,t,r)=>(k(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ie=(e,t,r,a)=>(k(e,t,"write to private field"),t.set(e,r),r),l=(e,t,r)=>(k(e,t,"access private method"),r),g,i,y,U,w;let n=class extends X{constructor(){super(...arguments),T(this,i),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="default",this._isAnimating=!1,T(this,g,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),l(this,i,y).call(this),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-shown")),te.instance.apply(this,"gds-spinner")}disconnectedCallback(){this.fullscreen&&l(this,i,w).call(this,!1),this._isAnimating=!1,this.dispatchEvent(new CustomEvent("gds-spinner-hidden")),super.disconnectedCallback()}updated(e){super.updated(e),e.has("label")&&l(this,i,y).call(this),e.has("fullscreen")&&l(this,i,w).call(this,this.fullscreen)}render(){return z`
      <div part="wrapper" class=${Y(l(this,i,U).call(this))}>
        <span part="spinner" class="gds-spinner"></span>
        ${ee(this.label&&this.showLabel,()=>z`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}};g=new WeakMap;i=new WeakSet;y=function(){this.setAttribute("aria-label",this.label||n.CONFIG.defaultLabel)};U=function(){return{"gds-spinner-wrapper":!0,"gds-spinner-fullscreen":this.fullscreen,"gds-spinner-cover":this.cover,"gds-spinner-backdrop":this.cover||this.fullscreen,"gds-spinner-animating":this._isAnimating}};w=function(e){const{style:t}=document.documentElement;e?(ie(this,g,{overflow:t.overflow,overscrollBehavior:t.overscrollBehavior}),t.overflow="hidden",t.overscrollBehavior="none"):(t.overflow=L(this,g).overflow,t.overscrollBehavior=L(this,g).overscrollBehavior)};n.CONFIG={defaultLabel:"Loading content",fullscreenZIndex:9999};n.styles=re;o([c({type:String})],n.prototype,"label",2);o([c({type:Boolean,reflect:!0})],n.prototype,"showLabel",2);o([c({type:Boolean,reflect:!0})],n.prototype,"cover",2);o([c({type:Boolean,reflect:!0})],n.prototype,"fullscreen",2);o([c({type:String,reflect:!0})],n.prototype,"size",2);o([K()],n.prototype,"_isAnimating",2);n=o([Q("gds-spinner")],n);var S=Object.freeze,oe=Object.defineProperty,ae=(e,t)=>S(oe(e,"raw",{value:S(e.slice())})),C;const Be={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
          A loading indicator component that supports various sizes and display modes.

          ## Features
          - Multiple sizes (sm, md, lg)
          - Optional text label
          - Container cover mode
          - Fullscreen mode
          - Accessibility support
          - Light/dark theme support
        `}}},argTypes:{size:{control:"select",options:["default","sm","md","lg"],description:"Size of the spinner",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"Loading text for the spinner"},showLabel:{control:"boolean",description:"Whether to display the label text visibly",table:{defaultValue:{summary:"false"}}},cover:{control:"boolean",description:"Cover parent container with backdrop",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"Cover entire viewport",table:{defaultValue:{summary:"false"}}}}},p={args:{size:"md",label:"Loading...",showLabel:!0,cover:!1,fullscreen:!1},render:e=>d`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=${e.size}
        label=${J(e.label)}
        ?showLabel=${e.showLabel}
        ?cover=${e.cover}
        ?fullscreen=${e.fullscreen}
      ></gds-spinner>
    </gds-card>
  `},m={name:"Size Variants",render:()=>d`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm"></gds-spinner>
        <gds-text tag="p" margin-top="m">Small</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="default"></gds-spinner>
        <gds-text tag="p" margin-top="m">Default</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">Medium</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg"></gds-spinner>
        <gds-text tag="p" margin-top="m">Large</gds-text>
      </gds-div>
    </gds-flex>
  `},h={name:"Label Options",render:()=>d`
    <gds-flex gap="4xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Visible Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Hidden Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">No Label</gds-text>
      </gds-div>
    </gds-flex>
  `},v={name:"Container Cover",render:()=>d`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </gds-card>
  `},f={name:"Fullscreen Mode",render:()=>{const e=t=>{const r=document.getElementById("fullscreen-demo-iframe");r&&r.contentWindow&&r.contentWindow.postMessage("toggle-overlay","*")};return setTimeout(()=>{const t=document.getElementById("external-toggle");t&&t.addEventListener("click",e)},100),d(C||(C=ae([`
      <gds-div>
        <gds-text tag="h3">Fullscreen Mode Demo</gds-text>
        <gds-text tag="p">
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </gds-text>

        <!-- Toggle button outside the iframe -->
        <gds-div margin-bottom="s">
          <gds-button id="external-toggle" padding="s m">
            Toggle Fullscreen Spinner
          </gds-button>
        </gds-div>

        <gds-card
          position="relative"
          width="600px"
          height="400px"
          border-radius="xs"
          overflow="hidden"
          level="1"
        >
          <iframe
            id="fullscreen-demo-iframe"
            width="100%"
            height="100%"
            frameborder="0"
            srcdoc="
              <html>
                <head>
                  <style>
                    body {
                      font-family: system-ui, sans-serif;
                      padding: 20px;
                      margin: 0;
                    }
                    .fullscreen-demo {
                      position: fixed;
                      inset: 0;
                      background: rgba(0,0,0,0.8);
                      backdrop-filter: blur(2px);
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }
                    .spinner {
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      border: 4px solid rgba(200,200,200,0.5);
                      border-top-color: white;
                      animation: spin 1s linear infinite;
                    }
                    .spinner-text {
                      margin-top: 16px;
                      color: white;
                      font-size: 16px;
                    }
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                  </style>
                </head>
                <body>
                  <h2>Application Content</h2>
                  <p>This represents a full application page.</p>
                  <p>The spinner will cover this entire area when active.</p>
                  <p>Try scrolling when the overlay is active - it will be prevented.</p>

                  <div style='height: 1000px; background: linear-gradient(white, #f0f0f0);'>
                    <div style='padding: 20px;'>Scroll down to see more content...</div>
                    <div style='padding: 20px; margin-top: 400px;'>More content down here</div>
                  </div>

                  <div id='overlay' style='display: none;' class='fullscreen-demo'>
                    <div class='spinner'></div>
                    <div class='spinner-text'>Loading application...</div>
                  </div>

                  <script>
                    // Listen for messages from the parent window
                    window.addEventListener('message', function(event) {
                      if (event.data === 'toggle-overlay') {
                        const overlay = document.getElementById('overlay');
                        if (overlay.style.display === 'none') {
                          overlay.style.display = 'flex';
                          document.body.style.overflow = 'hidden';
                        } else {
                          overlay.style.display = 'none';
                          document.body.style.overflow = '';
                        }
                      }
                    });
                  <\/script>
                </body>
              </html>
            "
          ></iframe>
        </gds-card>
      </gds-div>
    `])))}},u={name:"Light & Dark Theme",render:()=>{const e=t=>{const r=document.getElementById("theme-demo-container");r&&(r.getAttribute("color-scheme")==="dark"?(r.setAttribute("color-scheme","light"),t.target.textContent="Switch to Dark Theme"):(r.setAttribute("color-scheme","dark"),t.target.textContent="Switch to Light Theme"))};return setTimeout(()=>{const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",e)},100),d`
      <gds-theme id="theme-demo-container" color-scheme="light">
        <gds-div padding="2xl" border-radius="m" level="1">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <gds-div margin-bottom="m">
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
            >
              Switch to Dark Theme
            </gds-button>
          </gds-div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner size="md"></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner
                  size="md"
                  label="Loading..."
                  showLabel
                ></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
                <gds-text margin="0" color="primary">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `}};var _,E,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading...',
    showLabel: true,
    cover: false,
    fullscreen: false
  },
  render: args => html\`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=\${args.size}
        label=\${ifDefined(args.label)}
        ?showLabel=\${args.showLabel}
        ?cover=\${args.cover}
        ?fullscreen=\${args.fullscreen}
      ></gds-spinner>
    </gds-card>
  \`
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,A,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => html\`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm"></gds-spinner>
        <gds-text tag="p" margin-top="m">Small</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="default"></gds-spinner>
        <gds-text tag="p" margin-top="m">Default</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">Medium</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg"></gds-spinner>
        <gds-text tag="p" margin-top="m">Large</gds-text>
      </gds-div>
    </gds-flex>
  \`
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,W,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Label Options',
  render: () => html\`
    <gds-flex gap="4xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Visible Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <gds-text tag="p" margin-top="m">Hidden Label</gds-text>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md"></gds-spinner>
        <gds-text tag="p" margin-top="m">No Label</gds-text>
      </gds-div>
    </gds-flex>
  \`
}`,...(I=(W=h.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var $,O,H;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Container Cover',
  render: () => html\`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
      level="1"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </gds-card>
  \`
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var G,R,j;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => {
    // Function to handle the toggle
    const handleToggle = (e: Event) => {
      const iframe = (document.getElementById('fullscreen-demo-iframe') as HTMLIFrameElement);
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('toggle-overlay', '*');
      }
    };

    // Register the event listener after the component has rendered
    setTimeout(() => {
      const toggleBtn = document.getElementById('external-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', handleToggle);
      }
    }, 100);
    return html\`
      <gds-div>
        <gds-text tag="h3">Fullscreen Mode Demo</gds-text>
        <gds-text tag="p">
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </gds-text>

        <!-- Toggle button outside the iframe -->
        <gds-div margin-bottom="s">
          <gds-button id="external-toggle" padding="s m">
            Toggle Fullscreen Spinner
          </gds-button>
        </gds-div>

        <gds-card
          position="relative"
          width="600px"
          height="400px"
          border-radius="xs"
          overflow="hidden"
          level="1"
        >
          <iframe
            id="fullscreen-demo-iframe"
            width="100%"
            height="100%"
            frameborder="0"
            srcdoc="
              <html>
                <head>
                  <style>
                    body {
                      font-family: system-ui, sans-serif;
                      padding: 20px;
                      margin: 0;
                    }
                    .fullscreen-demo {
                      position: fixed;
                      inset: 0;
                      background: rgba(0,0,0,0.8);
                      backdrop-filter: blur(2px);
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }
                    .spinner {
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      border: 4px solid rgba(200,200,200,0.5);
                      border-top-color: white;
                      animation: spin 1s linear infinite;
                    }
                    .spinner-text {
                      margin-top: 16px;
                      color: white;
                      font-size: 16px;
                    }
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                  </style>
                </head>
                <body>
                  <h2>Application Content</h2>
                  <p>This represents a full application page.</p>
                  <p>The spinner will cover this entire area when active.</p>
                  <p>Try scrolling when the overlay is active - it will be prevented.</p>

                  <div style='height: 1000px; background: linear-gradient(white, #f0f0f0);'>
                    <div style='padding: 20px;'>Scroll down to see more content...</div>
                    <div style='padding: 20px; margin-top: 400px;'>More content down here</div>
                  </div>

                  <div id='overlay' style='display: none;' class='fullscreen-demo'>
                    <div class='spinner'></div>
                    <div class='spinner-text'>Loading application...</div>
                  </div>

                  <script>
                    // Listen for messages from the parent window
                    window.addEventListener('message', function(event) {
                      if (event.data === 'toggle-overlay') {
                        const overlay = document.getElementById('overlay');
                        if (overlay.style.display === 'none') {
                          overlay.style.display = 'flex';
                          document.body.style.overflow = 'hidden';
                        } else {
                          overlay.style.display = 'none';
                          document.body.style.overflow = '';
                        }
                      }
                    });
                  <\/script>
                </body>
              </html>
            "
          ></iframe>
        </gds-card>
      </gds-div>
    \`;
  }
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var V,P,N;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Light & Dark Theme',
  render: () => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container');
      if (demo) {
        const isDark = demo.getAttribute('color-scheme') === 'dark';
        if (isDark) {
          demo.setAttribute('color-scheme', 'light');
          (e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme';
        } else {
          demo.setAttribute('color-scheme', 'dark');
          (e.target as HTMLButtonElement).textContent = 'Switch to Light Theme';
        }
      }
    };

    // Register the event listener after the component has rendered
    setTimeout(() => {
      const toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', handleThemeToggle);
      }
    }, 100);
    return html\`
      <gds-theme id="theme-demo-container" color-scheme="light">
        <gds-div padding="2xl" border-radius="m" level="1">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <gds-div margin-bottom="m">
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
            >
              Switch to Dark Theme
            </gds-button>
          </gds-div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner size="md"></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-flex flex-direction="column" align-items="center">
                <gds-spinner
                  size="md"
                  label="Loading..."
                  showLabel
                ></gds-spinner>
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
              </gds-flex>
            </gds-card>

            <gds-card padding="l" border-radius="m" level="1" width="180px">
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
                <gds-text margin="0" color="primary">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    \`;
  }
}`,...(N=(P=u.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const Me=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{v as Cover,f as Fullscreen,h as LabelOptions,p as Playground,m as Sizes,u as ThemeModes,Me as __namedExportsOrder,Be as default};
