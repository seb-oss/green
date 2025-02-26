import{i as Z,x as l}from"./lit-element-C_s9q329.js";import{o as J}from"./if-defined-Ct9lF4W9.js";import{n as c,r as K,g as Q,G as X,h as z}from"./custom-element-scoping-BEGY3AqQ.js";import{e as Y}from"./class-map-Bz98xO8-.js";import{n as ee}from"./when-BR7zwNJC.js";import{T as re}from"./transitional-styles-iv5lM2WH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-CFvqdzpw.js";const ne=Z`
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
`;var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,q=e=>{throw TypeError(e)},o=(e,r,n,a)=>{for(var i=a>1?void 0:a?ie(r,n):r,b=e.length-1,y;b>=0;b--)(y=e[b])&&(i=(a?y(r,n,i):y(i))||i);return a&&i&&te(r,n,i),i},w=(e,r,n)=>r.has(e)||q("Cannot "+n),L=(e,r,n)=>(w(e,r,"read from private field"),n?n.call(e):r.get(e)),T=(e,r,n)=>r.has(e)?q("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,n),se=(e,r,n,a)=>(w(e,r,"write to private field"),r.set(e,n),n),d=(e,r,n)=>(w(e,r,"access private method"),n),p,s,x,U,k;let t=class extends X{constructor(){super(...arguments),T(this,s),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="default",this._isAnimating=!1,T(this,p,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),d(this,s,x).call(this),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-shown")),re.instance.apply(this,"gds-spinner")}disconnectedCallback(){this.fullscreen&&d(this,s,k).call(this,!1),this._isAnimating=!1,this.dispatchEvent(new CustomEvent("gds-spinner-hidden")),super.disconnectedCallback()}updated(e){super.updated(e),e.has("label")&&d(this,s,x).call(this),e.has("fullscreen")&&d(this,s,k).call(this,this.fullscreen)}render(){return z`
      <div part="wrapper" class=${Y(d(this,s,U).call(this))}>
        <span part="spinner" class="gds-spinner"></span>
        ${ee(this.label&&this.showLabel,()=>z`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}};p=new WeakMap;s=new WeakSet;x=function(){this.setAttribute("aria-label",this.label||t.CONFIG.defaultLabel)};U=function(){return{"gds-spinner-wrapper":!0,"gds-spinner-fullscreen":this.fullscreen,"gds-spinner-cover":this.cover,"gds-spinner-backdrop":this.cover||this.fullscreen,"gds-spinner-animating":this._isAnimating}};k=function(e){const{style:r}=document.documentElement;e?(se(this,p,{overflow:r.overflow,overscrollBehavior:r.overscrollBehavior}),r.overflow="hidden",r.overscrollBehavior="none"):(r.overflow=L(this,p).overflow,r.overscrollBehavior=L(this,p).overscrollBehavior)};t.CONFIG={defaultLabel:"Loading content",fullscreenZIndex:9999};t.styles=ne;o([c({type:String})],t.prototype,"label",2);o([c({type:Boolean,reflect:!0})],t.prototype,"showLabel",2);o([c({type:Boolean,reflect:!0})],t.prototype,"cover",2);o([c({type:Boolean,reflect:!0})],t.prototype,"fullscreen",2);o([c({type:String,reflect:!0})],t.prototype,"size",2);o([K()],t.prototype,"_isAnimating",2);t=o([Q("gds-spinner")],t);var S=Object.freeze,oe=Object.defineProperty,ae=(e,r)=>S(oe(e,"raw",{value:S(e.slice())})),C;const ue={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
          A loading indicator component that supports various sizes and display modes.

          ## Features
          - Multiple sizes (sm, md, lg)
          - Optional text label
          - Container cover mode
          - Fullscreen mode
          - Accessibility support
          - Light/dark theme support
        `}}},argTypes:{size:{control:"select",options:["default","sm","md","lg"],description:"Size of the spinner",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"Loading text for the spinner"},showLabel:{control:"boolean",description:"Whether to display the label text visibly",table:{defaultValue:{summary:"false"}}},cover:{control:"boolean",description:"Cover parent container with backdrop",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"Cover entire viewport",table:{defaultValue:{summary:"false"}}}}},m={args:{size:"md",label:"Loading...",showLabel:!0,cover:!1,fullscreen:!1},render:e=>l`
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
        size=${e.size}
        label=${J(e.label)}
        ?showLabel=${e.showLabel}
        ?cover=${e.cover}
        ?fullscreen=${e.fullscreen}
      ></gds-spinner>
    </div>
  `},g={name:"Size Variants",render:()=>l`
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
  `},h={name:"Label Options",render:()=>l`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <p style="margin-top: 1rem;">Hidden Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">No Label</p>
      </div>
    </div>
  `},v={name:"Container Cover",render:()=>l`
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
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </div>
  `},f={name:"Fullscreen Mode",render:()=>{const e=r=>{const n=document.getElementById("fullscreen-demo-iframe");n&&n.contentWindow&&n.contentWindow.postMessage("toggle-overlay","*")};return setTimeout(()=>{const r=document.getElementById("external-toggle");r&&r.addEventListener("click",e)},100),l(C||(C=ae([`
      <div>
        <h3>Fullscreen Mode Demo</h3>
        <p>
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </p>

        <!-- Toggle button outside the iframe -->
        <button
          id="external-toggle"
          style="margin-bottom: 10px; padding: 8px 16px;"
        >
          Toggle Fullscreen Spinner
        </button>

        <div
          style="
          position: relative;
          width: 600px;
          height: 400px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          overflow: hidden;
        "
        >
          <iframe
            id="fullscreen-demo-iframe"
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
            style="width: 100%; height: 100%; border: none;"
          ></iframe>
        </div>

        <div style="margin-top: 20px;">
          <h4>Implementation Example:</h4>
          <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow: auto;"
          >
&lt;gds-spinner
  fullscreen
  size="lg"
  label="Loading application..."
  showLabel
&gt;&lt;/gds-spinner&gt;</pre
          >
        </div>
      </div>
    `])))}},u={name:"Light & Dark Theme",render:()=>{const e=r=>{const n=document.getElementById("theme-demo-container");n&&(n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),r.target.textContent="Switch to Dark Theme"):(n.classList.add("dark-theme"),r.target.textContent="Switch to Light Theme"))};return setTimeout(()=>{const r=document.getElementById("theme-toggle");r&&r.addEventListener("click",e)},100),l`
      <style>
        .theme-demo {
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .theme-demo.dark-theme {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .spinner-container {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .spinner-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          border-radius: 8px;
          background-color: #f8f8f8;
          width: 180px;
        }

        .dark-theme .spinner-example {
          background-color: #2a2a2a;
        }

        .spinner-label {
          margin-top: 1rem;
          font-weight: 500;
        }

        button#theme-toggle {
          padding: 0.5rem 1rem;
          background-color: #0078d4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        button#theme-toggle:hover {
          background-color: #106ebe;
        }
      </style>

      <div id="theme-demo-container" class="theme-demo">
        <h3>Theme Mode Demonstration</h3>
        <p>The spinner automatically adapts to light and dark themes:</p>

        <button id="theme-toggle">Switch to Dark Theme</button>

        <div class="spinner-container">
          <div class="spinner-example">
            <gds-spinner size="md"></gds-spinner>
            <div class="spinner-label">Standard Spinner</div>
          </div>

          <div class="spinner-example">
            <gds-spinner size="md" label="Loading..." showLabel></gds-spinner>
            <div class="spinner-label">With Label</div>
          </div>

          <div
            class="spinner-example"
            style="position: relative; overflow: hidden;"
          >
            <div
              style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;"
            >
              <div
                style="width: 100px; height: 100px; background: #eee; border-radius: 8px;"
              ></div>
            </div>
            <gds-spinner size="md" cover></gds-spinner>
            <div class="spinner-label" style="z-index: 1;">With Cover</div>
          </div>
        </div>
      </div>
    `}};var _,E,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading...',
    showLabel: true,
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
        size=\${args.size}
        label=\${ifDefined(args.label)}
        ?showLabel=\${args.showLabel}
        ?cover=\${args.cover}
        ?fullscreen=\${args.fullscreen}
      ></gds-spinner>
    </div>
  \`
}`,...(B=(E=m.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,D,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var I,W,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Label Options',
  render: () => html\`
    <div style="display: flex; gap: 4rem; align-items: center;">
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With visible label"
          showLabel
        ></gds-spinner>
        <p style="margin-top: 1rem;">Visible Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner
          size="md"
          label="With hidden label (for screen readers)"
        ></gds-spinner>
        <p style="margin-top: 1rem;">Hidden Label</p>
      </div>
      <div style="text-align: center;">
        <gds-spinner size="md"></gds-spinner>
        <p style="margin-top: 1rem;">No Label</p>
      </div>
    </div>
  \`
}`,...(A=(W=h.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var $,O,H;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Container Cover',
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
        cover
        label="Loading content..."
        showLabel
        size="md"
      ></gds-spinner>
    </div>
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
      <div>
        <h3>Fullscreen Mode Demo</h3>
        <p>
          The fullscreen spinner covers the entire viewport and prevents
          scrolling. Here's a demo contained within a frame:
        </p>

        <!-- Toggle button outside the iframe -->
        <button
          id="external-toggle"
          style="margin-bottom: 10px; padding: 8px 16px;"
        >
          Toggle Fullscreen Spinner
        </button>

        <div
          style="
          position: relative;
          width: 600px;
          height: 400px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          overflow: hidden;
        "
        >
          <iframe
            id="fullscreen-demo-iframe"
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
            style="width: 100%; height: 100%; border: none;"
          ></iframe>
        </div>

        <div style="margin-top: 20px;">
          <h4>Implementation Example:</h4>
          <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow: auto;"
          >
&lt;gds-spinner
  fullscreen
  size="lg"
  label="Loading application..."
  showLabel
&gt;&lt;/gds-spinner&gt;</pre
          >
        </div>
      </div>
    \`;
  }
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var V,P,N;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Light & Dark Theme',
  render: () => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container');
      if (demo) {
        const isDark = demo.classList.contains('dark-theme');
        if (isDark) {
          demo.classList.remove('dark-theme');
          (e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme';
        } else {
          demo.classList.add('dark-theme');
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
      <style>
        .theme-demo {
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .theme-demo.dark-theme {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .spinner-container {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .spinner-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          border-radius: 8px;
          background-color: #f8f8f8;
          width: 180px;
        }

        .dark-theme .spinner-example {
          background-color: #2a2a2a;
        }

        .spinner-label {
          margin-top: 1rem;
          font-weight: 500;
        }

        button#theme-toggle {
          padding: 0.5rem 1rem;
          background-color: #0078d4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        button#theme-toggle:hover {
          background-color: #106ebe;
        }
      </style>

      <div id="theme-demo-container" class="theme-demo">
        <h3>Theme Mode Demonstration</h3>
        <p>The spinner automatically adapts to light and dark themes:</p>

        <button id="theme-toggle">Switch to Dark Theme</button>

        <div class="spinner-container">
          <div class="spinner-example">
            <gds-spinner size="md"></gds-spinner>
            <div class="spinner-label">Standard Spinner</div>
          </div>

          <div class="spinner-example">
            <gds-spinner size="md" label="Loading..." showLabel></gds-spinner>
            <div class="spinner-label">With Label</div>
          </div>

          <div
            class="spinner-example"
            style="position: relative; overflow: hidden;"
          >
            <div
              style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;"
            >
              <div
                style="width: 100px; height: 100px; background: #eee; border-radius: 8px;"
              ></div>
            </div>
            <gds-spinner size="md" cover></gds-spinner>
            <div class="spinner-label" style="z-index: 1;">With Cover</div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(N=(P=u.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const be=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{v as Cover,f as Fullscreen,h as LabelOptions,m as Playground,g as Sizes,u as ThemeModes,be as __namedExportsOrder,ue as default};
