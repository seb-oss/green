import{n as r,g as M,G as W,h as x}from"./gds-element-54cd6e2a.js";import{r as A}from"./lit-element-71e04f06.js";import{e as F}from"./class-map-4ef1884f.js";import{o as u}from"./if-defined-e4b5fcf9.js";import{s as _,n as H}from"./static-c6782857.js";import{c as U}from"./constrain-slots-08d8606c.js";import{t as I}from"./tokens.style-5c270edc.js";import"./popover-4bf0f571.js";import"./star-a702df23.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./transitional-styles-3cdfb2b1.js";import"./cross-small-7364f9f6.js";import"./icon-eb3cac34.js";const J=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_border-radius: var(--gds-sys-border-radius);--_border-width: var(--gds-sys-border-width);--_border-style: var(--gds-sys-border-style);--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;contain:layout;display:inline-block;isolation:isolate;height:100%;max-width:100%}}@layer core{.button{align-items:center;background-color:var(--gds-color-transparen);block-size:100%;border-color:var(--gds-color-transparen);border-style:none;border-bottom:solid 2px transparent;box-sizing:border-box;color:var(--text-primary-color);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;transition:var(--_transition);font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}.button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:focus:not(:focus-visible){outline-color:transparent}.button:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}.button:active{background-color:#ddd;border-color:#ddd}.button.selected{background-color:#f3f3f2;border-color:#f3f3f2;border-bottom:solid 2px #353531}.button.selected:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}.compact{display:flex;flex-direction:column;--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-s);font-size:.875rem;padding-bottom:.15rem}.compact>slot[name]{order:0}.compact>slot:not([name]){order:1}:hover ::slotted(berry-component){background-color:#85857a}.selected ::slotted(berry-component){background-color:green}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,s=(t,e,n,p)=>{for(var i=p>1?void 0:p?Q(e,n):e,h=t.length-1,v;h>=0;h--)(v=t[h])&&(i=(p?v(e,n,i):v(i))||i);return p&&i&&K(e,n,i),i},V=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},d=(t,e,n)=>(V(t,e,"read from private field"),n?n.call(t):e.get(t)),w=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},a,l,y,G;let o=class extends W{constructor(){super(),w(this,a),w(this,y),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,U(this)}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=d(this,a,l)?_`a`:_`button`;return H`
      <${e}
        class="${F(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${u(d(this,a,l)?this.href:void 0)}
        target=${u(d(this,a,l)?this.target:void 0)}
        rel=${u(d(this,a,l)?this.rel||d(this,y,G):void 0)}
        download=${u(d(this,a,l)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};a=new WeakSet;l=function(){return this.href.length>0};y=new WeakSet;G=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[I,A(J)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([r({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([r()],o.prototype,"label",2);s([r()],o.prototype,"href",2);s([r()],o.prototype,"target",2);s([r()],o.prototype,"rel",2);s([r()],o.prototype,"download",2);s([r({type:Boolean,reflect:!0})],o.prototype,"compact",2);s([r({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=s([M("gds-menu-button")],o);const me={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},f={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},m={...f},b={...f,render:()=>x`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`},c={...f,render:()=>x` <div
      style="display:flex;width:700px;height:50px;border-bottom: 1px solid #ddd;"
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
    </div>`},g={...f,render:()=>x` <div
      style="display:flex;width:700px;height:50px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button compact>
        <gds-popover>
          <gds-menu-button compact slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
        compact
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </div>
    </div>`};var k,S,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(P=(S=m.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,$,q;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>\`
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,C,D,B,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <div
      style="display:flex;width:700px;height:50px;border-bottom: 1px solid #ddd;"
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
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};var T,j,L,N,R;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <div
      style="display:flex;width:700px;height:50px;border-bottom: 1px solid #ddd;"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <div style="flex-basis:50%;display:flex;justify-content:flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button compact>
        <gds-popover>
          <gds-menu-button compact slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
        compact
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
}`,...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(R=(N=g.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};const be=["Basic","Selected_state","Example_menu_bar","Compact_menu_bar"];export{m as Basic,g as Compact_menu_bar,c as Example_menu_bar,b as Selected_state,be as __namedExportsOrder,me as default};
