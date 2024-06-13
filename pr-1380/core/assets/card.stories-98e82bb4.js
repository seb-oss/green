import{t as R,_ as t,s as n,g as x,G as A,h as I,w as _e,a as m,b as W,c as o,d as ke,V as N,e as Ce,f as Te}from"./chunk.4PFJVOUX-da38e99a.js";import{i as X,r as q,T as Se,b as $e,s as Ee,x as v}from"./lit-element-71e04f06.js";import{n as i}from"./Reflect-8da9b77b.js";import{s as Y,n as Me}from"./static-c6782857.js";import{a as fe}from"./query-b9d3c2af.js";import{n as je}from"./when-cf7256a5.js";import{o as k}from"./if-defined-e4b5fcf9.js";import{e as Le}from"./class-map-4ef1884f.js";import{e as Ve,i as Be,t as Ge}from"./directive-12249aa5.js";import{o as ze}from"./unsafe-html-367b382d.js";import"./_commonjsHelpers-725317a4.js";var Re=X`
 
    :host {
      gap: var(--_gap-column) var(--_gap-row);
    }

    // .container {
    //   padding: var(--_padding-desktop);
    //   display: var(--_display-desktop);
    //   gap: var(--_gap-desktop);
    //   row-gap: var(--_row-gap-desktop);
    //   align-items: var(--_align-desktop);
    //   justify-content: var(--_justify-desktop, center);
    //   flex-direction: var(--_direction-desktop);
    //   grid-column-start: span var(--_span-desktop);
    // }
  }
`,Ae=Re,l=class extends A{render(){return I`<slot></slot>`}};l.styles=[R,Ae];t([n({styleTemplate:(e,r)=>{const a=r[0],s=r[1]||a;return`--_gap-column: ${a}; --_gap-row: ${s};`}})],l.prototype,"gap",2);t([n({property:"--_row-gap",valueTemplate:e=>e})],l.prototype,"rowGap",2);t([n()],l.prototype,"padding",2);t([n({property:"display",valueTemplate:e=>e})],l.prototype,"display",2);t([n({property:"position",valueTemplate:e=>e})],l.prototype,"position",2);t([n({property:"inset",valueTemplate:e=>e})],l.prototype,"inset",2);t([n({property:"overflow",valueTemplate:e=>e})],l.prototype,"overflow",2);t([n({property:"align-items",valueTemplate:e=>e})],l.prototype,"align",2);t([n({property:"justify-content",valueTemplate:e=>e})],l.prototype,"justify",2);t([n({property:"flex-direction",valueTemplate:e=>e})],l.prototype,"direction",2);t([n({property:"grid-column",valueTemplate:e=>`${e}`})],l.prototype,"column",2);t([n({property:"grid-row",valueTemplate:e=>`${e}`})],l.prototype,"row",2);t([n({property:"backdrop-filter",valueTemplate:e=>`blur(${e})`})],l.prototype,"filter",2);t([n({property:"border-radius",valueTemplate:e=>`var(--gds-sys-radii-${e})`})],l.prototype,"radius",2);t([n({property:"background",valueTemplate:e=>e})],l.prototype,"background",2);t([n({property:"color",valueTemplate:e=>`var(--gds-sys-color-${e})`})],l.prototype,"color",2);t([n({property:"height",valueTemplate:e=>e})],l.prototype,"height",2);l=t([x("gds-container")],l);var De=X`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    display: grid;
    width: 100%;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`,Ne=De,y=class extends A{render(){return I`<slot></slot>`}};y.styles=[R,Ne];t([n({property:"--_c",valueTemplate:e=>e})],y.prototype,"columns",2);t([n({styleTemplate:(e,r)=>{const a=r[0],s=r[1]||a;return`--_gap-column: ${a}; --_gap-row: ${s};`}})],y.prototype,"gap",2);t([n()],y.prototype,"padding",2);t([n({attribute:"auto-columns",property:"--_col-width",valueTemplate:e=>`${e}px`})],y.prototype,"autoColumns",2);y=t([x("gds-grid")],y);var c,h=class extends A{constructor(){super(),m(this,c,void 0),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{W(this,c,this.attachInternals())}catch{W(this,c,{form:this.closest("form"),setFormValue:r=>{this.value=r},setValidity:(r,a)=>{this.invalid=r.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}get form(){return o(this,c).form}get validity(){return o(this,c).validity}get validationMessage(){return o(this,c).validationMessage}get willValidate(){return o(this,c).willValidate}checkValidity(){return o(this,c).checkValidity()}reportValidity(){return o(this,c).reportValidity()}connectedCallback(){var e;super.connectedCallback(),(e=o(this,c).form)==null||e.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=o(this,c).form)==null||e.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){o(this,c).setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){o(this,c).setFormValue(this.value)}};c=new WeakMap;h.formAssociated=!0;t([i({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e==null?void 0:e.toString()}})],h.prototype,"invalid",2);t([i()],h.prototype,"value",2);t([i({reflect:!0})],h.prototype,"name",2);t([_e("invalid")],h.prototype,"__handleValidityChange",1);t([_e("value")],h.prototype,"__handleValueChange",1);function We(e){e.updateComplete.then(()=>{var r,a,s;const f=(r=e.shadowRoot)==null?void 0:r.querySelectorAll("slot[gds-allow]");if(!f)return;for(const p of Array.from(e.childNodes))p.nodeType===Node.TEXT_NODE&&((a=p.textContent)==null?void 0:a.trim())===""&&((s=p.parentNode)==null||s.removeChild(p));const b=p=>{var H,Z;const we=[...((H=p.getAttribute("gds-allow"))==null?void 0:H.split(" "))||[],"slot"];for(const D of Array.from(p.assignedNodes()))we.includes(D.nodeName.toLowerCase())||(Z=D.parentNode)==null||Z.removeChild(D)};f.forEach(p=>{b(p),p.addEventListener("slotchange",()=>b(p))})})}var B,G,P,Pe=class be{constructor(){m(this,B,new Map),m(this,G,new Map),m(this,P,!ke())}static get instance(){var r;return(r=globalThis.__gdsTransitionalStyles)!=null&&r[N]||(globalThis.__gdsTransitionalStyles=Ce(Te({},globalThis.__gdsTransitionalStyles),{[N]:new be})),globalThis.__gdsTransitionalStyles[N]}apply(r,a){if(!r.shadowRoot)return;const s=o(this,B).get(a);s&&(o(this,G).set(a,r),this.applyToElement(a,s))}applyToElement(r,a){const s=o(this,G).get(r);!s||!s.shadowRoot||(s._dynamicStylesController.clearAll(),s._dynamicStylesController.inject("t-styles",q(a)),s._isUsingTransitionalStyles=!0)}register(r,a){let s=a;o(this,P)&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${a}`),o(this,B).set(r,s),this.applyToElement(r,s)}};B=new WeakMap;G=new WeakMap;P=new WeakMap;var Fe=Pe,Oe=class extends Be{constructor(e){if(super(e),e.type!==Ge.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return $e}update(e,[r]){var a;const s=e.element,f=(a=e.options)==null?void 0:a.host;Array.from(f.attributes).forEach(b=>{r(b)&&s.setAttribute(b.name.replace("gds-",""),b.value)})}},Ue=Ve(Oe),Ie=`@layer tokens, a11y, core, ranks, sizes, variants, disabled;

@layer tokens {
  :host {
    --_gap: var(--gds-sys-space-spacer-m);

    --_transition: var(--gds-sys-transition);

    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);

    --_border-radius: var(--gds-sys-radii-full);
    --_border-width: 1px;
    --_border-style: solid;

    --_color-bg: var(--gds-sys-color-content-content);
    --_color-text: var(--gds-sys-color-content-content-inverse);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    --_color-outline-alpha: 60%;
    --_color-outline: var(--_color-border);

    /* These state layer variables can be variant to the correct state layer token in
    * the rank and variant specific styles. It will be blended with \`--_color-bg\`
    * for the \`background-color\` rule. */
    --_state-layer-hover: var(--gds-sys-color-state-layers-state-black);
    --_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);

    --gds-sys-transition-properties: color;

    contain: layout;
    display: inline-block;
    isolation: isolate;
    max-width: 100%;
  }
}

@layer a11y {
  @media (prefers-color-scheme: dark) {
    /* TODO */
  }
  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }
}

@layer core {
  .button {
    --gds-sys-transition-properties: color !important;

    align-items: center;
    background-color: var(--_color-bg);
    block-size: 100%;
    border-color: var(--_color-border);
    border-radius: var(--_border-radius);
    border-style: var(--_border-style);
    border-width: var(--_border-width);
    box-sizing: border-box;
    color: var(--_color-text);
    color-scheme: dark light;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    gap: var(--_gap);
    height: var(--_size);
    inline-size: 100%;
    justify-content: space-between;
    justify-items: center;
    line-height: 1.25;
    outline-color: transparent;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    position: relative;
    text-decoration: none;
    transition: var(--_transition);
    transition-property: color, border-color;

    &:focus {
      outline-color: color-mix(
        in srgb,
        var(--_color-outline),
        transparent var(--_color-outline-alpha)
      );

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-hover)
      );
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-active)
      );
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-active)
      );
    }
  }

  .button slot:not([name]) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .button.icon slot {
    display: contents;
  }
}

@layer ranks {
  :host([rank*='secondary']) .button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
    }
  }

  :host([rank*='tertiary']) .button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: transparent;

    &:hover {
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }
  }

  .button.circle {
    display: flex;
    align-items: center;
    height: var(--_size);
    width: var(--_size);
    aspect-ratio: 1/1;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}

@layer sizes {
  :host([size='small']) .button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-s);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) .button {
    --_padding-inline: var(--gds-sys-space-padding-l);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 2.5rem;
  }

  :host([size='large']) .button {
    --_padding-inline: var(--gds-sys-space-padding-xl);
    --_padding-block: var(--gds-sys-space-padding-m);
    --_size: 3rem;
  }
}

@layer variants {
  :host([rank='primary'][variant='positive']) .button {
    --_bg: var(--gds-sys-color-container-container-positive);
    --_color-bg: var(--_bg);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([rank='secondary'][variant='positive']) .button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: var(--gds-sys-color-stroke-stroke-positive);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-positive-dim
      );
    }
  }

  :host([rank='tertiary'][variant='positive']) .button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-positive-dim
      );
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }
  }

  :host([rank='primary'][variant='negative']) .button {
    --_bg: var(--gds-sys-color-container-container-negative);
    --_color-bg: var(--_bg);
    --_color-text: var(--gds-sys-color-status-negative-on-negative);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([rank='secondary'][variant='negative']) .button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-negative-dim
      );
    }
  }

  :host([rank='tertiary'][variant='negative']) .button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }

    &:active {
      --_state-layer-active: var(
        --gds-sys-color-state-layers-state-negative-dim
      );
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }
  }
}

@layer disabled {
  .button:disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`,J=new WeakMap;function Xe(e){return(r,...a)=>{let s=J.get(r);return s||(s=r.map(f=>f.replace(/\n[\s]+</gm,"<")),s.raw=r.raw,J.set(r,s)),e(s,...a)}}var qe=Xe(I),T,g,u,F,xe,O,U,d=class extends h{constructor(){super(),m(this,g),m(this,F),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",m(this,T,!1),m(this,O,()=>{var e,r;const a=(r=(e=this._mainSlot)==null?void 0:e.assignedNodes())!=null?r:[];W(this,T,a.length===1&&a.some(s=>s.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),m(this,U,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!o(this,g,u)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),We(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),Fe.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:o(this,T),icon:o(this,T),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},r=o(this,g,u)?Y`a`:Y`button`;return Me`
      <${r}
        class=${Le(e)}
        type="${k(o(this,g,u)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||Se}
        href=${k(o(this,g,u)?this.href:void 0)}
        target=${k(o(this,g,u)?this.target:void 0)}
        rel=${k(o(this,g,u)?this.rel||o(this,F,xe):void 0)}
        download=${k(o(this,g,u)?this.download:void 0)}
        part="_button"
        @click="${o(this,U)}"
        ${Ue(a=>a.name.startsWith("gds-aria")||a.name==="gds-role")}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${o(this,O)}></slot>
        <slot name="trail"></slot>
        ${je(!this._isUsingTransitionalStyles,()=>qe`<gds-ripple></gds-ripple>`)}
      </${r}>
    `}};T=new WeakMap;g=new WeakSet;u=function(){return this.href.length>0};F=new WeakSet;xe=function(){return this.target==="_blank"?"noreferrer noopener":void 0};O=new WeakMap;U=new WeakMap;d.styles=[R,q(Ie)];d.shadowRootOptions={mode:"open",delegatesFocus:!0};t([i({type:Boolean,reflect:!0})],d.prototype,"disabled",2);t([i({reflect:!0})],d.prototype,"type",2);t([i({reflect:!0})],d.prototype,"rank",2);t([i({reflect:!0})],d.prototype,"variant",2);t([i({reflect:!0})],d.prototype,"size",2);t([i()],d.prototype,"label",2);t([i()],d.prototype,"href",2);t([i()],d.prototype,"target",2);t([i()],d.prototype,"rel",2);t([i()],d.prototype,"download",2);t([fe("slot:not([name])")],d.prototype,"_mainSlot",2);d=t([x("gds-button")],d);var He=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name)
    var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function)
    var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count)
    var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode)
    var(--gds-sys-motion-play-state);
  border-radius: var(--gds-sys-radii-full);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-radii-full);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`,z=class extends Ee{constructor(){super(...arguments),this.onmousedown=e=>{const a=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-a.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-a.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return v`<div></div>`}};z.styles=[R,q(He)];t([fe("div")],z.prototype,"_rippleEl",2);z=t([x("gds-ripple")],z);var Ze=X`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`,Ye=Ze,_=class extends A{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){const e=`<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return v`${ze(e)}`}};_.styles=[Ye];t([i({type:Number})],_.prototype,"width",2);t([i({type:Number})],_.prototype,"height",2);t([i({type:Boolean})],_.prototype,"solid",2);t([i({type:String})],_.prototype,"label",2);var S=class extends _{};S._regularSVG='<path d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';S._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.6685 21 11.3506 20.8683 11.1161 20.6339L5.36612 14.8839C4.87796 14.3957 4.87796 13.6043 5.36612 13.1161C5.85427 12.628 6.64573 12.628 7.13388 13.1161L10.75 16.7322V4.25C10.75 3.55964 11.3097 3 12 3C12.6904 3 13.25 3.55964 13.25 4.25V16.7322L16.8661 13.1161C17.3543 12.628 18.1457 12.628 18.6339 13.1161C19.122 13.6043 19.122 14.3957 18.6339 14.8839L12.8839 20.6339C12.6495 20.8683 12.3315 21 12 21Z" fill="currentColor"/>';S._name="arrow down";S=t([x("gds-icon-arrow-down")],S);var $=class extends _{};$._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';$._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>';$._name="arrow right";$=t([x("gds-icon-arrow-right")],$);const it={title:"Components/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card`\n\n## Usage"}}}},w={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{padding:{control:{type:"object",value:{l:"{xs}",m:"{xs}",s:"{xs}"},options:["xs","s","m","l","xl","2xl"]}},gap:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},"row-gap":{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},shadow:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},border:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}},radius:{control:{type:"object",value:{l:"2xl",m:"l",s:"xs"},options:["xs","s","m","l","xl","2xl"]}}}},C={...w,name:"Basic Card",render:e=>v` <gds-card shadow="l:m m:m s:m" radius="l:xs m:xs s:xs">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`},E={...w,name:"Border Style",render:e=>v` <gds-card> Border Style </gds-card>`},M={...w,name:"Border Radius",render:e=>v` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>`},j={...w,name:"shadow",render:e=>v`<gds-grid columns="5" gap="xl">
      <gds-card shadow="l:xs m:xs s:xs" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="l:s m:s s:s" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="l:m m:m s:m" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="l:l m:l s:l" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="l:xl m:xl s:xl" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`},L={...w,name:"Background",render:e=>v` <gds-card background="grey-70"> Background </gds-card>`},V={...w,name:"Using with Grid",render:e=>v` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="l:xl m:xl s:xl" radius="l:2xl m:2xl s:2xl">
          <gds-container
            padding="s{xs} m{l} l{2xl}"
            display="flex"
            align="center"
            justify="center"
            gap="2xl"
            row-gap="2xl"
            direction="column"
          >
            <div>Example One</div>
            <div>Example Two</div>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var Q,K,ee,te,re;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Basic Card',
  render: args => html\` <gds-card shadow="l:m m:m s:m" radius="l:xs m:xs s:xs">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>\`
}`,...(ee=(K=C.parameters)==null?void 0:K.docs)==null?void 0:ee.source},description:{story:"Card",...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ae,oe;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-card> Border Style </gds-card>\`
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,le,ie;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>\`
}`,...(ie=(le=M.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'shadow',
  render: args => html\`<gds-grid columns="5" gap="xl">
      <gds-card shadow="l:xs m:xs s:xs" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="l:s m:s s:s" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="l:m m:m s:m" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="l:l m:l s:l" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="l:xl m:xl s:xl" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(pe=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,me,ue;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\` <gds-card background="grey-70"> Background </gds-card>\`
}`,...(ue=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ve,ye,he;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="l:xl m:xl s:xl" radius="l:2xl m:2xl s:2xl">
          <gds-container
            padding="s{xs} m{l} l{2xl}"
            display="flex"
            align="center"
            justify="center"
            gap="2xl"
            row-gap="2xl"
            direction="column"
          >
            <div>Example One</div>
            <div>Example Two</div>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(he=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const dt=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{C as Card,L as CardBackground,E as CardBorder,V as CardGrid,M as CardRadius,j as Cardshadow,dt as __namedExportsOrder,it as default};
