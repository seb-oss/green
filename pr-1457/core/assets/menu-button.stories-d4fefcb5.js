import{n as f,g as I,G as J,h as e}from"./gds-element-24e794df.js";import{r as K}from"./lit-element-2a5e401f.js";import{e as Q}from"./class-map-43969d56.js";import{c as U}from"./constrain-slots-08d8606c.js";import{t as V}from"./tokens.style-1e462ec5.js";import"./star-30b41c82.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";import"./icon-881ed735.js";const W=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-m);--_border-radius: var(--gds-sys-border-radius);--_border-width: var(--gds-sys-border-width);--_border-style: var(--gds-sys-border-style);--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;contain:layout;display:inline-block;isolation:isolate;height:100%;max-width:100%}}@layer a11y{@media (prefers-reduced-motion: reduce){:host{--_transition: none}}}@layer core{button{align-items:center;background-color:var(--gds-color-transparen);block-size:100%;border-color:var(--gds-color-transparen);border-style:none;border-bottom:solid 2px transparent;box-sizing:border-box;color:var(--text-primary-color);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;transition:var(--_transition);font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}button:focus:not(:focus-visible){outline-color:transparent}button:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}button:active{background-color:#ddd;border-color:#ddd}button.selected{background-color:#f3f3f2;border-color:#f3f3f2;border-bottom:solid 2px #353531}button.selected:hover{background-color:#ddd;border-color:#ddd;border-bottom:solid 2px #85857a}button.compact{display:block;--_padding-inline: var(--gds-sys-space-padding-l);--_padding-block: var(--gds-sys-space-padding-s);font-size:.875rem;padding-bottom:.15rem}button.compact>*{display:block}button:hover ::slotted(berry-component){background-color:#85857a}button.selected ::slotted(berry-component){background-color:green}}@layer disabled{button:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,n=(r,a,h,i)=>{for(var s=i>1?void 0:i?Y(a,h):a,y=r.length-1,v;y>=0;y--)(v=r[y])&&(s=(i?v(a,h,s):v(s))||s);return i&&s&&X(a,h,s),s};let o=class extends J{constructor(){super(),this.disabled=!1,this.label="",this.compact=!1,this.selected=!1,U(this)}render(){const r={selected:this.selected,compact:this.compact};return e`
      <button
        class="${Q(r)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </button>
    `}};o.styles=[V,K(W)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([f({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([f()],o.prototype,"label",2);n([f({type:Boolean})],o.prototype,"compact",2);n([f({type:Boolean})],o.prototype,"selected",2);o=n([I("gds-menu-button")],o);const lo={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},l={...t},d={...t,render:()=>e`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`},c={...t,render:()=>e`<gds-menu-button>
      <gds-icon-bell slot="trail"></gds-icon-bell>
      Notification
    </gds-menu-button>`},u={...t,render:()=>e`<gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>`},g={...t,render:()=>e`<gds-menu-button>
      <gds-icon-star slot="trail"></gds-icon-star>
      My shortcuts
    </gds-menu-button>`},m={...t,render:()=>e` <gds-menu-button>
      <gds-icon-people slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},b={...t,render:()=>e` <gds-menu-button>
      <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>`},p={...t,render:()=>e` <gds-menu-button>
      <gds-icon-globus slot="trail"></gds-icon-globus>
      Other countries
    </gds-menu-button>`};var _,x,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,P,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-magnifying-glass solid slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>\`
}`,...(w=(P=d.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var N,D,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>
      <gds-icon-bell slot="trail"></gds-icon-bell>
      Notification
    </gds-menu-button>\`
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var O,M,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>
      <gds-menu-button>
        <gds-icon-bell slot="trail"></gds-icon-bell>
        Notification
      </gds-menu-button>\`
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var E,j,C;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>
      <gds-icon-star slot="trail"></gds-icon-star>
      My shortcuts
    </gds-menu-button>\`
}`,...(C=(j=g.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var $,G,F;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <gds-menu-button>
      <gds-icon-people slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(F=(G=m.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var H,L,R;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <gds-menu-button>
      <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      Search
    </gds-menu-button>\`
}`,...(R=(L=b.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var T,q,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <gds-menu-button>
      <gds-icon-globus slot="trail"></gds-icon-globus>
      Other countries
    </gds-menu-button>\`
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const co=["Basic","Example_selected_state","Notification","Notification_unread","My_shortcuts","Profile","Search","Settings"];export{l as Basic,d as Example_selected_state,g as My_shortcuts,c as Notification,u as Notification_unread,m as Profile,b as Search,p as Settings,co as __namedExportsOrder,lo as default};
