import{n as r,g as K,G as Q,h as y}from"./gds-element-54cd6e2a.js";import{r as V}from"./lit-element-71e04f06.js";import{e as X}from"./class-map-4ef1884f.js";import{o as f}from"./if-defined-e4b5fcf9.js";import{s as w,n as Y}from"./static-c6782857.js";import{c as Z}from"./constrain-slots-08d8606c.js";import{t as ee}from"./tokens.style-880811e7.js";import"./popover-5da172d5.js";import"./flex-829b8835.js";import"./card-e1ea4a71.js";import"./star-c84eb4cf.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./transitional-styles-6e766826.js";import"./cross-small-edc2ae06.js";import"./icon-35869773.js";import"./style-expression-property-89161d08.js";const te=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_padding-inline: var(--gds-space-m);--_padding-block: var(--gds-space-xs);--_color-bg: transparent;--_color-text: var(--gds-sys-color-primary-text);--_color-border: transparent;--_color-outline-alpha: 60%;--_color-outline: var(--gds-sys-color-stroke-stroke);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;display:inline-block;isolation:isolate;max-width:100%;height:100%}}@layer core{.button{align-items:center;background-color:var(--_color-bg);border-color:var(--_color-border);border-style:none;border-bottom-style:solid;border-bottom-width:2px;box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}.button:focus-visible{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:hover,.button.selected:hover,.button:active{--_color-bg: var(--gds-sys-color-base200);--_color-border: var(--gds-sys-color-base600)}.button.selected{--_color-bg: var(--gds-sys-color-base100);--_color-border: var(--gds-sys-color-base700)}.compact{display:flex;flex-direction:column;--_padding-inline: var(--gds-space-s);--_gap: 1px;font-size:.875rem;height:56px;justify-content:center}.compact>slot[name]{order:0}.compact>slot:not([name]){order:1}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,n=(t,e,s,b)=>{for(var a=b>1?void 0:b?se(e,s):e,v=t.length-1,x;v>=0;v--)(x=t[v])&&(a=(b?x(e,s,a):x(a))||a);return b&&a&&oe(e,s,a),a},ne=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},l=(t,e,s)=>(ne(t,e,"read from private field"),s?s.call(t):e.get(t)),k=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},i,d,_,J;let o=class extends Q{constructor(){super(),k(this,i),k(this,_),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,Z(this)}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=l(this,i,d)?w`a`:w`button`;return Y`
      <${e}
        class="${X(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${f(l(this,i,d)?this.href:void 0)}
        target=${f(l(this,i,d)?this.target:void 0)}
        rel=${f(l(this,i,d)?this.rel||l(this,_,J):void 0)}
        download=${f(l(this,i,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};i=new WeakSet;d=function(){return this.href.length>0};_=new WeakSet;J=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[ee,V(te)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([r({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([r()],o.prototype,"label",2);n([r()],o.prototype,"href",2);n([r()],o.prototype,"target",2);n([r()],o.prototype,"rel",2);n([r()],o.prototype,"download",2);n([r({type:Boolean,reflect:!0})],o.prototype,"compact",2);n([r({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=n([K("gds-menu-button")],o);const Se={title:"Docs/Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},h={...m},c={...m,render:()=>y`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},g={...m,render:()=>y`<gds-menu-button>Search</gds-menu-button>`},p={...m,render:()=>y`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/base300 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
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
      </gds-flex>
    </gds-card>`},u={...m,render:()=>y`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/base300 0"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
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
      </gds-flex>
    </gds-card>`};var P,S,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var $,D,q,C,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};var z,B,T,j,L;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(T=(B=g.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:"The menu button can be used without an icon as well.",...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};var N,R,G,M,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/base300 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
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
      </gds-flex>
    </gds-card>\`
}`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};var A,F,H,U,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/base300 0"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
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
      </gds-flex>
    </gds-card>\`
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(I=(U=u.parameters)==null?void 0:U.docs)==null?void 0:I.description}}};const Ee=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar"];export{h as Basic,u as Compact_menu_bar,p as Example_menu_bar,g as Only_text,c as Selected_state,Ee as __namedExportsOrder,Se as default};
