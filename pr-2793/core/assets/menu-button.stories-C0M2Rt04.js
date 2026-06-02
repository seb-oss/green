import{a as H}from"./argTableProps-Cre6jRDN.js";import{h as e}from"./iframe-BOWV0qpc.js";import"./flex-COaGnwRs.js";import"./menu-button-moABew61.js";import"./popover-C-bPQhkg.js";import"./card-BoGoSqQk.js";import"./magnifying-glass-DlDbjkoI.js";import"./star-DZXRZkfQ.js";import"./preload-helper-Dp1pzeXC.js";import"./flex.component-B7JFuEAZ.js";import"./menu-button.component-C7xu-fL0.js";import"./popover.component-DXVRxN9_.js";import"./localized-decorator-BpW4MtTU.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-BIbI6wwk.js";import"./icon.component-CpX7jBB3.js";import"./card.component-DYVr1XE7.js";import"./magnifying-glass.component-D0tyDXiq.js";import"./star.component-GQ1Is723.js";const ae={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered",docs:{description:{component:"A menu button combines button and link behaviors for navigation menus."}}},tags:["autodocs"],argTypes:{...H("gds-datepicker")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},a={...n},t={...n,render:()=>e`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},s={...n,render:()=>e`<gds-menu-button>Search</gds-menu-button>`},o={...n,render:()=>e`<gds-div
      display="flex"
      height="70px"
      width="700px"
      border-color="strong"
      border-width="0 0 4xs 0"
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
    </gds-card>`},r={...n,render:()=>e`<gds-flex
      width="700px"
      background="neutral-01"
      border="0 0 3xs/subtle-01 0"
      align-items="center"
    >
      <gds-flex flex="1">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </gds-flex>
      <gds-flex justify-content="flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger" compact>
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          compact
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
    </gds-flex>`},i={...n,name:"Dark Mode",render:()=>e`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-flex
          width="700px"
          background="neutral-01"
          height="80px"
          border="0 0 3xs/secondary 0"
        >
          <gds-flex flex="1">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
              Search
            </gds-menu-button>
          </gds-flex>
          <gds-flex>
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
        </gds-flex>
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-flex
          width="700px"
          background="neutral-01"
          height="80px"
          border="0 0 3xs/secondary 0"
        >
          <gds-flex flex="1">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
              Search
            </gds-menu-button>
          </gds-flex>
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
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `},d={name:"ARIA Forwarding",render:()=>e`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="menubutton-label">Main Menu</div>
      <div id="menubutton-description">Toggle the main navigation menu</div>
      <div id="menu-controlled">Menu controlled element</div>
      <gds-menu-button
        gds-aria-labelledby="menubutton-label"
        gds-aria-describedby="menubutton-description"
        gds-aria-controls="menu-controlled"
      >
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        Menu
      </gds-menu-button>
    </gds-flex>
  `};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var c,m,p,b,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var x,h,y,v,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"The menu button can be used without an icon as well.",...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var k,P,S,_,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-div
      display="flex"
      height="70px"
      width="700px"
      border-color="strong"
      border-width="0 0 4xs 0"
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
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var D,E,M,A,T;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-flex
      width="700px"
      background="neutral-01"
      border="0 0 3xs/subtle-01 0"
      align-items="center"
    >
      <gds-flex flex="1">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </gds-flex>
      <gds-flex justify-content="flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger" compact>
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          compact
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
    </gds-flex>\`
}`,...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(T=(A=r.parameters)==null?void 0:A.docs)==null?void 0:T.description}}};var N,j,F,R,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Dark Mode',
  render: () => html\`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-flex
          width="700px"
          background="neutral-01"
          height="80px"
          border="0 0 3xs/secondary 0"
        >
          <gds-flex flex="1">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
              Search
            </gds-menu-button>
          </gds-flex>
          <gds-flex>
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
        </gds-flex>
      </gds-theme>
      <gds-theme color-scheme="light">
        <gds-flex
          width="700px"
          background="neutral-01"
          height="80px"
          border="0 0 3xs/secondary 0"
        >
          <gds-flex flex="1">
            <gds-menu-button>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
              Search
            </gds-menu-button>
          </gds-flex>
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
        </gds-flex>
      </gds-theme>
    </gds-flex>
  \`
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var I,O,B,L,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="menubutton-label">Main Menu</div>
      <div id="menubutton-description">Toggle the main navigation menu</div>
      <div id="menu-controlled">Menu controlled element</div>
      <gds-menu-button
        gds-aria-labelledby="menubutton-label"
        gds-aria-describedby="menubutton-description"
        gds-aria-controls="menu-controlled"
      >
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        Menu
      </gds-menu-button>
    </gds-flex>
  \`
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels, descriptions, and controls to be associated with the internal button element.\nUses `gds-aria-labelledby`, `gds-aria-describedby`, and `gds-aria-controls` to wire up external accessibility text.",...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.description}}};const le=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar","Dark","AriaForwarding"];export{d as AriaForwarding,a as Basic,r as Compact_menu_bar,i as Dark,o as Example_menu_bar,s as Only_text,t as Selected_state,le as __namedExportsOrder,ae as default};
