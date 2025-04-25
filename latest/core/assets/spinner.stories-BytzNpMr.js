import{i as Y,x as a}from"./lit-element-Bx14lxc-.js";import{o as Z}from"./if-defined-CVqwUuaf.js";import{m as ee}from"./runtime-BL31MtW8.js";import{l as te}from"./localized-decorator-DtmrKsyB.js";import{h as w,n as m,r as se,G as re,g as ne}from"./custom-element-scoping-b4c89-hi.js";import{e as ie}from"./class-map-CXsQwv0r.js";import{n as oe}from"./when-BR7zwNJC.js";import{t as ae}from"./tokens.style-C9bLefPj.js";import{w as N}from"./watch-tFciLXSI.js";import{b as de,e as le,d as ce}from"./declarative-layout-mixins-CxeMR8ZJ.js";import"./div-DhZaiuyC.js";import"./flex-B8AQUA7n.js";import"./text-BgDT2iSM.js";import"./card-BDIWjU2T.js";import"./theme-CFKoa4eW.js";import"./button-vt7hjEAK.js";import"./divider-D1z2XdRH.js";import{a as ge}from"./argTableProps-Ceu6qWgM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./div.component-Diofk0s1.js";import"./flex.component-BDILfbvS.js";import"./text.component-CmSKS74a.js";import"./static-B8S6DEnV.js";import"./card.component-ESUepO5H.js";import"./transitional-styles-Cduvqqe2.js";import"./button.component-B-lvYzve.js";import"./query-p8xgzTDt.js";import"./observe-light-dom-CmJPHUQ4.js";import"./custom-elements-BtZlKibW.js";const pe=Y`
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
    --spinner-track-color: var(--gds-color-l3-background-secondary);
    --spinner-active-color: var(--gds-color-l3-content-secondary);
    --spinner-label-color: currentColor;
    --spinner-backdrop-color: rgba(0, 0, 0, 0.8);

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
    --spinner-label-color: #fff;
    --spinner-track-color: var(--gds-color-l3-content-secondary);
    --spinner-active-color: var(--gds-color-l3-background-secondary);
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
`;var me=Object.defineProperty,he=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},i=(e,t,s,o)=>{for(var r=o>1?void 0:o?he(t,s):t,h=e.length-1,f;h>=0;h--)(f=e[h])&&(r=(o?f(t,s,r):f(r))||r);return o&&r&&me(t,s,r),r},b=(e,t,s)=>t.has(e)||Q("Cannot "+s),y=(e,t,s)=>(b(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ue=(e,t,s,o)=>(b(e,t,"write to private field"),t.set(e,s),s),xe=(e,t,s)=>(b(e,t,"access private method"),s),v,X,p;let n=class extends de(le(ce(re))){constructor(){super(...arguments),k(this,v),this.label=ee("Loading..."),this.showLabel=!1,this.cover=!1,this.fullscreen=!1,this.size="md",this._isAnimating=!1,k(this,p,{overflow:"visible",overscrollBehavior:"auto"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchEvent(new CustomEvent("gds-spinner-connected"))}disconnectedCallback(){super.disconnectedCallback(),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,super.disconnectedCallback()}_updateAriaLabel(){this.setAttribute("aria-label",this.label)}render(){return w`
      <div part="wrapper" class=${ie(xe(this,v,X).call(this))}>
        <span part="spinner" class="spinner"></span>
        ${oe(this.label&&this.showLabel,()=>w`<span part="label" class="spinner-label">${this.label}</span>`,()=>null)}
      </div>
    `}_toggleRootStyles(){const{style:e}=document.documentElement;this.fullscreen?(ue(this,p,{overflow:e.overflow,overscrollBehavior:e.overscrollBehavior}),e.overflow="hidden",e.overscrollBehavior="none"):(e.overflow=y(this,p).overflow,e.overscrollBehavior=y(this,p).overscrollBehavior)}};v=new WeakSet;X=function(){return{"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating}};p=new WeakMap;n.styles=[ae,pe];i([m({type:String})],n.prototype,"label",2);i([m({type:Boolean,reflect:!0})],n.prototype,"showLabel",2);i([m({type:Boolean,reflect:!0})],n.prototype,"cover",2);i([m({type:Boolean,reflect:!0})],n.prototype,"fullscreen",2);i([m({type:String,reflect:!0})],n.prototype,"size",2);i([se()],n.prototype,"_isAnimating",2);i([N("label")],n.prototype,"_updateAriaLabel",1);i([N("fullscreen")],n.prototype,"_toggleRootStyles",1);n=i([ne("gds-spinner"),te()],n);n.define();const Je={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],argTypes:{...ge("gds-textarea")},parameters:{docs:{description:{component:`A loading indicator component that supports various sizes and display modes.

@status beta

## Features
- Multiple sizes (sm, md, lg)
- Optional text label
- Container cover mode
- Fullscreen mode
- Accessibility support
- Light/dark theme support`}}}},u={args:{size:"md",showLabel:!0,cover:!1,fullscreen:!1},render:e=>a`
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
        label=${Z(e.label)}
        ?showLabel=${e.showLabel}
        ?cover=${e.cover}
        ?fullscreen=${e.fullscreen}
      ></gds-spinner>
    </gds-card>
  `},x={name:"Size Variants",render:()=>a`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium (default)" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  `},d={name:"Label Options",render:()=>a`
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
  `},l={name:"Container Cover",render:()=>a`
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

      <gds-spinner cover showLabel size="md"></gds-spinner>
    </gds-card>
  `},c={name:"Fullscreen Mode",render:()=>a`
      <gds-div height="400px">
        <gds-spinner fullscreen showLabel></gds-spinner>
      </gds-div>
    `},g={name:"Light & Dark Theme",render:(e,{context:t})=>{const s=o=>{const r=document.getElementById("theme-demo-container");r&&(r.getAttribute("color-scheme")==="dark"?(r.setAttribute("color-scheme","light"),o.target.textContent="Switch to Dark Theme"):(r.setAttribute("color-scheme","dark"),o.target.textContent="Switch to Light Theme"))};return a`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${t.globals.style}
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
              @click=${s}
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
    `}};var z,L,S;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'md',
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
}`,...(S=(L=u.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var C,_,T;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => html\`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium (default)" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  \`
}`,...(T=(_=x.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var A,M,$,D,B;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source},description:{story:`The label is hidden by default, but can also be shown visually.

A label should always be provided for accessibility reasons.`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var E,W,P,F,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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

      <gds-spinner cover showLabel size="md"></gds-spinner>
    </gds-card>
  \`
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:"By setting the container position to relative, the spinner can cover the entire container by using the `cover` attribute.",...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var R,V,G,H,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => {
    return html\`
      <gds-div height="400px">
        <gds-spinner fullscreen showLabel></gds-spinner>
      </gds-div>
    \`;
  }
}`,...(G=(V=c.parameters)==null?void 0:V.docs)==null?void 0:G.source},description:{story:`The fullscreen spinner covers the entire viewport and prevents scrolling.

Check this example in story view by clicking on it in the menu on the left.`,...(j=(H=c.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var I,U,q,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`The spinner colors adaps to the current user settings, and the label uses currentColor
to inherit the text color.`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const Ke=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{l as Cover,c as Fullscreen,d as LabelOptions,u as Playground,x as Sizes,g as ThemeModes,Ke as __namedExportsOrder,Je as default};
