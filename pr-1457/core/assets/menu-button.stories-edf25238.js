import{n as s,g as L,G as R,h as O}from"./gds-element-54cd6e2a.js";import{r as T}from"./lit-element-71e04f06.js";import{e as G}from"./class-map-4ef1884f.js";import{o as g}from"./if-defined-e4b5fcf9.js";import{s as y,n as M}from"./static-c6782857.js";import{c as W}from"./constrain-slots-08d8606c.js";import{t as j}from"./tokens.style-5c270edc.js";import"./popover-4bf0f571.js";import"./star-a702df23.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./transitional-styles-3cdfb2b1.js";import"./cross-small-7364f9f6.js";import"./icon-eb3cac34.js";const A=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_border-radius: var(--gds-sys-border-radius);--_border-width: var(--gds-sys-border-width);--_border-style: var(--gds-sys-border-style);--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;contain:layout;display:inline-block;isolation:isolate;height:100%;max-width:100%}}@layer core{.button{align-items:center;background-color:var(--gds-color-transparen);block-size:100%;border-color:var(--gds-color-transparen);border-style:none;border-bottom:solid 2px transparent;box-sizing:border-box;color:var(--text-primary-color);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;transition:var(--_transition);font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}.button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:focus:not(:focus-visible){outline-color:transparent}.button:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}.button:active{background-color:#ddd;border-color:#ddd}.button.selected{background-color:#f3f3f2;border-color:#f3f3f2;border-bottom:solid 2px #353531}.button.selected:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}.compact{display:block;--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-s);font-size:.875rem;padding-bottom:.15rem}.compact>*{display:block}:hover ::slotted(berry-component){background-color:#85857a}.selected ::slotted(berry-component){background-color:green}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,n=(t,e,r,p)=>{for(var a=p>1?void 0:p?F(e,r):e,b=t.length-1,f;b>=0;b--)(f=t[b])&&(a=(p?f(e,r,a):f(a))||a);return p&&a&&N(e,r,a),a},H=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},l=(t,e,r)=>(H(t,e,"read from private field"),r?r.call(t):e.get(t)),_=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},i,d,h,q;let o=class extends R{constructor(){super(),_(this,i),_(this,h),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,W(this)}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=l(this,i,d)?y`a`:y`button`;return M`
      <${e}
        class="${G(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${g(l(this,i,d)?this.href:void 0)}
        target=${g(l(this,i,d)?this.target:void 0)}
        rel=${g(l(this,i,d)?this.rel||l(this,h,q):void 0)}
        download=${g(l(this,i,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};i=new WeakSet;d=function(){return this.href.length>0};h=new WeakSet;q=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[j,T(A)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([s({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([s()],o.prototype,"label",2);n([s()],o.prototype,"href",2);n([s()],o.prototype,"target",2);n([s()],o.prototype,"rel",2);n([s()],o.prototype,"download",2);n([s({type:Boolean,reflect:!0})],o.prototype,"compact",2);n([s({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=n([L("gds-menu-button")],o);const le={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},v={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},u={...v},m={...v,render:()=>O`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`},c={...v,render:()=>O` <div
      style="display:flex;width:700px;height:44px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </div>
    </div>`};var x,w,k;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,P,E;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>\`
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var $,z,B,C,D;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <div
      style="display:flex;width:700px;height:44px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </div>
    </div>\`
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};const de=["Basic","Selected_state","Example_menu_bar"];export{u as Basic,c as Example_menu_bar,m as Selected_state,de as __namedExportsOrder,le as default};
