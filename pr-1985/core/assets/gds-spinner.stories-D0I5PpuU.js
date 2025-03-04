import{i as X,x as d}from"./lit-element-C_s9q329.js";import{o as Y}from"./if-defined-Ct9lF4W9.js";import{n as m,r as ee,g as re,G as te,h as z}from"./custom-element-scoping-BEGY3AqQ.js";import{e as ne}from"./class-map-Bz98xO8-.js";import{n as se}from"./when-BR7zwNJC.js";import"./div-Cnle9s5w.js";import"./flex-tnFv_7np.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./theme-QT20-m4T.js";import"./button-DMqiAWPO.js";import"./divider-Dm4d-5N4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./tokens.style-CFvqdzpw.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./watch-tFciLXSI.js";import"./query-p8xgzTDt.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";const ie=X`
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
      --spinner-label-color: currentColor;

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
      color: var(--spinner-label-color);
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
    --spinner-label-color: #fff;
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
      --spinner-label-color: currentColor;
      --spinner-backdrop-color: light-dark(
        var(--spinner-backdrop-color-light),
        var(--spinner-backdrop-color-dark)
      );
    }
  }
`;var ae=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,K=e=>{throw TypeError(e)},o=(e,r,t,i)=>{for(var n=i>1?void 0:i?oe(r,t):r,u=e.length-1,x;u>=0;u--)(x=e[u])&&(n=(i?x(r,t,n):x(n))||n);return i&&n&&ae(r,t,n),n},y=(e,r,t)=>r.has(e)||K("Cannot "+t),L=(e,r,t)=>(y(e,r,"read from private field"),t?t.call(e):r.get(e)),C=(e,r,t)=>r.has(e)?K("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),de=(e,r,t,i)=>(y(e,r,"write to private field"),r.set(e,t),t),l=(e,r,t)=>(y(e,r,"access private method"),t),h,a,k,Q,w;let s=class extends te{constructor(){super(...arguments),C(this,a),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="default",this._isAnimating=!1,C(this,h,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),l(this,a,k).call(this),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-shown"))}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&l(this,a,w).call(this,!1),this._isAnimating=!1,this.dispatchEvent(new CustomEvent("gds-spinner-hidden")),super.disconnectedCallback()}updated(e){super.updated(e),e.has("label")&&l(this,a,k).call(this),e.has("fullscreen")&&l(this,a,w).call(this,this.fullscreen)}render(){return z`
      <div part="wrapper" class=${ne(l(this,a,Q).call(this))}>
        <span part="spinner" class="gds-spinner"></span>
        ${se(this.label&&this.showLabel,()=>z`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}};h=new WeakMap;a=new WeakSet;k=function(){this.setAttribute("aria-label",this.label||s.CONFIG.defaultLabel)};Q=function(){return{"gds-spinner-wrapper":!0,"gds-spinner-fullscreen":this.fullscreen,"gds-spinner-cover":this.cover,"gds-spinner-backdrop":this.cover||this.fullscreen,"gds-spinner-animating":this._isAnimating}};w=function(e){const{style:r}=document.documentElement;e?(de(this,h,{overflow:r.overflow,overscrollBehavior:r.overscrollBehavior}),r.overflow="hidden",r.overscrollBehavior="none"):(r.overflow=L(this,h).overflow,r.overscrollBehavior=L(this,h).overscrollBehavior)};s.CONFIG={defaultLabel:"Loading content",fullscreenZIndex:9999};s.styles=ie;o([m({type:String})],s.prototype,"label",2);o([m({type:Boolean,reflect:!0})],s.prototype,"showLabel",2);o([m({type:Boolean,reflect:!0})],s.prototype,"cover",2);o([m({type:Boolean,reflect:!0})],s.prototype,"fullscreen",2);o([m({type:String,reflect:!0})],s.prototype,"size",2);o([ee()],s.prototype,"_isAnimating",2);s=o([re("gds-spinner")],s);const De={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],argTypes:{size:{control:"select",options:["default","sm","md","lg"],description:"Size of the spinner",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"Loading text for the spinner"},showLabel:{control:"boolean",description:"Whether to display the label text visibly",table:{defaultValue:{summary:"false"}}},cover:{control:"boolean",description:"Cover parent container with backdrop",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"Cover entire viewport",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:`A loading indicator component that supports various sizes and display modes.

@status beta

## Features
- Multiple sizes (sm, md, lg)
- Optional text label
- Container cover mode
- Fullscreen mode
- Accessibility support
- Light/dark theme support`}}}},b={args:{size:"md",label:"Loading...",showLabel:!0,cover:!1,fullscreen:!1},render:e=>d`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
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
        label=${Y(e.label)}
        ?showLabel=${e.showLabel}
        ?cover=${e.cover}
        ?fullscreen=${e.fullscreen}
      ></gds-spinner>
    </gds-card>
  `},f={name:"Size Variants",render:()=>d`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="default" label="Default" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  `},c={name:"Label Options",render:()=>d`
    <gds-flex gap="4xl" align-items="stretch">
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Visible Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With visible label"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Hidden Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With hidden label (for screen readers)"
          ></gds-spinner>
        </gds-card>
      </gds-flex>
    </gds-flex>
  `},v={name:"Container Cover",render:()=>d`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
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
  `},g={name:"Fullscreen Mode",render:()=>d`
      <gds-div height="400px">
        <gds-spinner
          fullscreen
          label="Loading content..."
          showLabel
        ></gds-spinner>
      </gds-div>
    `},p={name:"Light & Dark Theme",render:(e,{context:r})=>{const t=i=>{const n=document.getElementById("theme-demo-container");n&&(n.getAttribute("color-scheme")==="dark"?(n.setAttribute("color-scheme","light"),i.target.textContent="Switch to Dark Theme"):(n.setAttribute("color-scheme","dark"),i.target.textContent="Switch to Light Theme"))};return d`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${r.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=${t}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
                <gds-spinner size="md"></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
                <gds-spinner
                  size="md"
                  label="Loading..."
                  showLabel
                ></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
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
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `}};var S,T,_;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(T=b.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var M,A,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => html\`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="default" label="Default" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  \`
}`,...(D=(A=f.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var $,E,B,F,W;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Label Options',
  render: () => html\`
    <gds-flex gap="4xl" align-items="stretch">
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Visible Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With visible label"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Hidden Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With hidden label (for screen readers)"
          ></gds-spinner>
        </gds-card>
      </gds-flex>
    </gds-flex>
  \`
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source},description:{story:`The label is hidden by default, but can also be shown visually.

A label should always be provided for accessibility reasons.`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var O,G,V;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Container Cover',
  render: () => html\`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
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
}`,...(V=(G=v.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var H,R,I,j,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => {
    return html\`
      <gds-div height="400px">
        <gds-spinner
          fullscreen
          label="Loading content..."
          showLabel
        ></gds-spinner>
      </gds-div>
    \`;
  }
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source},description:{story:`The fullscreen spinner covers the entire viewport and prevents scrolling.

Check this example in story view by clicking on it in the menu on the left.`,...(P=(j=g.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};var q,N,U,Z,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Light & Dark Theme',
  render: (args, {
    context
  }) => {
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
    return html\`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=\${context.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=\${handleThemeToggle}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
                <gds-spinner size="md"></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
                <gds-spinner
                  size="md"
                  label="Loading..."
                  showLabel
                ></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
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
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    \`;
  }
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:`The spinner colors adaps to the current user settings, and the label uses currentColor
to inherit the text color.`,...(J=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:J.description}}};const $e=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{v as Cover,g as Fullscreen,c as LabelOptions,b as Playground,f as Sizes,p as ThemeModes,$e as __namedExportsOrder,De as default};
