import{h as i}from"./custom-element-scoping-CpYtbs9r.js";import"./menu-button-C0-BF0F_.js";import"./popover-BsBF3LbE.js";import"./flex-DzVdMaKU.js";import"./card-CK9zy6HV.js";import"./theme-kqftPgIG.js";import"./magnifying-glass-CKr7Csfw.js";import"./star-DjiRAM1U.js";import"./lit-element-C_s9q329.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-Dw60-dNf.js";import"./runtime-CMQcyTl6.js";import"./query-p8xgzTDt.js";import"./floating-ui.dom-DJ1BFLcT.js";import"./transitional-styles-Cc5JwJ9o.js";import"./watch-tFciLXSI.js";import"./cross-small-Y_gLfaO0.js";import"./icon-C1rUgQqA.js";import"./style-expression-property-C6V8xdlu.js";import"./container-DUK_siK7.js";const ie={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},d={...e},n={...e,render:()=>i`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},t={...e,render:()=>i`<gds-menu-button>Search</gds-menu-button>`},s={...e,render:()=>i`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/primary 0"
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
    </gds-card>`},o={...e,render:()=>i`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/primary 0"
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
    `},r={...e,name:"Dark Mode",render:()=>i`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-card display="flex" width="700px" background="primary">
          <div style="flex-basis:50%;">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
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
              selected
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
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-card display="flex" width="700px" background="primary">
          <div style="flex-basis:50%;">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
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
              selected
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
      </gds-theme>
    </gds-flex>
  `};var a,g,l;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(g=d.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,c,m,p,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var f,h,x,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"The menu button can be used without an icon as well.",...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var w,k,P,S,_;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/primary 0"
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
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.description}}};var q,E,D,j,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/primary 0"
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
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var T,M,C,O,B;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Dark Mode',
  render: () => html\`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-card display="flex" width="700px" background="primary">
          <div style="flex-basis:50%;">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
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
              selected
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
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-card display="flex" width="700px" background="primary">
          <div style="flex-basis:50%;">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
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
              selected
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
      </gds-theme>
    </gds-flex>
  \`
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(B=(O=r.parameters)==null?void 0:O.docs)==null?void 0:B.description}}};const de=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar","Dark"];export{d as Basic,o as Compact_menu_bar,r as Dark,s as Example_menu_bar,t as Only_text,n as Selected_state,de as __namedExportsOrder,ie as default};
