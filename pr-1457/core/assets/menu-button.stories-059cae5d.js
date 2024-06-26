import{n,g as O,G,h as C}from"./gds-element-54cd6e2a.js";import{r as L}from"./lit-element-71e04f06.js";import{e as M}from"./class-map-4ef1884f.js";import{o as g}from"./if-defined-e4b5fcf9.js";import{s as v,n as R}from"./static-c6782857.js";import{c as T}from"./constrain-slots-08d8606c.js";import{t as W}from"./tokens.style-5c270edc.js";import"./star-63bcb3aa.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";import"./icon-eb3cac34.js";const N=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_border-radius: var(--gds-sys-border-radius);--_border-width: var(--gds-sys-border-width);--_border-style: var(--gds-sys-border-style);--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;contain:layout;display:inline-block;isolation:isolate;height:100%;max-width:100%}}@layer a11y{@media (prefers-reduced-motion: reduce){:host{--_transition: none}}}@layer core{button{align-items:center;background-color:var(--gds-color-transparen);block-size:100%;border-color:var(--gds-color-transparen);border-style:none;border-bottom:solid 2px transparent;box-sizing:border-box;color:var(--text-primary-color);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;transition:var(--_transition);font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}button:focus:not(:focus-visible){outline-color:transparent}button:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}button:active{background-color:#ddd;border-color:#ddd}button.selected{background-color:#f3f3f2;border-color:#f3f3f2;border-bottom:solid 2px #353531}button.selected:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}button.compact{display:block;--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-s);font-size:.875rem;padding-bottom:.15rem}button.compact>*{display:block}button:hover ::slotted(berry-component){background-color:#85857a}button.selected ::slotted(berry-component){background-color:green}}@layer disabled{button:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var A=Object.defineProperty,F=Object.getOwnPropertyDescriptor,s=(e,o,r,c)=>{for(var a=c>1?void 0:c?F(o,r):o,b=e.length-1,f;b>=0;b--)(f=e[b])&&(a=(c?f(o,r,a):f(a))||a);return c&&a&&A(o,r,a),a},H=(e,o,r)=>{if(!o.has(e))throw TypeError("Cannot "+r)},l=(e,o,r)=>(H(e,o,"read from private field"),r?r.call(e):o.get(e)),_=(e,o,r)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,r)},i,d,h,D;let t=class extends G{constructor(){super(),_(this,i),_(this,h),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,T(this)}render(){const e={button:!0,selected:this.selected,compact:this.compact},o=l(this,i,d)?v`a`:v`button`;return R`
      <${o}
        class="${M(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${g(l(this,i,d)?this.href:void 0)}
        target=${g(l(this,i,d)?this.target:void 0)}
        rel=${g(l(this,i,d)?this.rel||l(this,h,D):void 0)}
        download=${g(l(this,i,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${o}>
    `}};i=new WeakSet;d=function(){return this.href.length>0};h=new WeakSet;D=function(){return this.target==="_blank"?"noreferrer noopener":void 0};t.styles=[W,L(N)];t.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([n()],t.prototype,"label",2);s([n()],t.prototype,"href",2);s([n()],t.prototype,"target",2);s([n()],t.prototype,"rel",2);s([n()],t.prototype,"download",2);s([n({type:Boolean})],t.prototype,"compact",2);s([n({type:Boolean})],t.prototype,"selected",2);t=s([O("gds-menu-button")],t);const oo={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},y={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},p={...y},u={...y,render:()=>C`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`},m={...y,render:()=>C`<gds-menu-button>
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        Search
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-people slot="trail"></gds-icon-people>
        Profile
      </gds-menu-button>`};var k,w,x;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,P,$;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>\`
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var z,E,B;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        Search
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-people slot="trail"></gds-icon-people>
        Profile
      </gds-menu-button>\`
}`,...(B=(E=m.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const eo=["Basic","Selected_state","Examples"];export{p as Basic,m as Examples,u as Selected_state,eo as __namedExportsOrder,oo as default};
