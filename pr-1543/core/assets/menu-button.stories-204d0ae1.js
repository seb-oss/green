import{h as a}from"./gds-element-86064462.js";import"./menu-button-7015da99.js";import"./popover-dd11fc1b.js";import"./flex-2de9d652.js";import"./card-28884858.js";import"./magnifying-glass-0fce063b.js";import"./star-1ec95fe1.js";import"./lit-element-1d72f0ce.js";import"./_commonjsHelpers-725317a4.js";import"./class-map-f04c1558.js";import"./directive-dd518ee3.js";import"./if-defined-5f576255.js";import"./static-c0094392.js";import"./constrain-slots-08d8606c.js";import"./tokens.style-dc3ad24e.js";import"./query-b9d3c2af.js";import"./runtime-c06dc943.js";import"./floating-ui.dom-7bad3c97.js";import"./watch-c4961afe.js";import"./transitional-styles-8ea9588a.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./style-expression-property-0e3d4d40.js";import"./container-c5e68c84.js";const ee={title:"Docs/Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},r={...o},e={...o,render:()=>a`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},t={...o,render:()=>a`<gds-menu-button>Search</gds-menu-button>`},n={...o,render:()=>a`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/l2-stroke-primary 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify-content="flex-end">
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
    </gds-card>`},s={...o,render:()=>a`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/l2-stroke-primary 0"
        background="base-white"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify-content="flex-end">
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
    </gds-card>
    `};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,c,m,u,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var b,f,h,x,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"The menu button can be used without an icon as well.",...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var v,w,_,k,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/l2-stroke-primary 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify-content="flex-end">
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
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(P=(k=n.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var S,q,E,D,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/l2-stroke-primary 0"
        background="base-white"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify-content="flex-end">
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
    </gds-card>
    \`
}`,...(E=(q=s.parameters)==null?void 0:q.docs)==null?void 0:E.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(j=(D=s.parameters)==null?void 0:D.docs)==null?void 0:j.description}}};const te=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar"];export{r as Basic,s as Compact_menu_bar,n as Example_menu_bar,t as Only_text,e as Selected_state,te as __namedExportsOrder,ee as default};
