import{a as L}from"./argTableProps-Bq0XLVAO.js";import{h as i}from"./custom-element-scoping-CNGU1oQ0.js";import"./menu-button-0OnQikGj.js";import"./popover-DLqc2fj7.js";import"./flex-DDs2ZYgf.js";import"./card-BZWNLs71.js";import"./theme-BGNdZOsh.js";import"./magnifying-glass-CYygC-9t.js";import"./star-Bb16yWnu.js";import"./custom-elements-DK_q3hU4.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./menu-button.component-NZ8hUgpJ.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-DQsNuKSy.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./popover.component-CjYbOnBF.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-lz-XxrEG.js";import"./watch-tFciLXSI.js";import"./cross-small.component-YAxQyR0g.js";import"./icon-BNiJwJst.js";import"./flex.component-CkL0ce-t.js";import"./div.component-laA26zwj.js";import"./card.component-McCzQM22.js";import"./theme.component-pAR5gXbf.js";import"./magnifying-glass.component-CfqzcD8u.js";import"./star.component-20Uy6i8R.js";const he={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...L("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},d={...e},n={...e,render:()=>i`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},t={...e,render:()=>i`<gds-menu-button>Search</gds-menu-button>`},s={...e,render:()=>i`<gds-div
      display="flex"
      height="70px"
      width="700px"
      border-color="secondary"
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
    </gds-card>`},o={...e,render:()=>i`<gds-flex
      width="700px"
      background="primary"
      border="0 0 3xs/secondary 0"
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
    </gds-flex>`},r={...e,name:"Dark Mode",render:()=>i`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-flex
          width="700px"
          background="primary"
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
          background="primary"
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
  `};var g,a,l;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(a=d.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,m,c,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.description}}};var b,h,x,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"The menu button can be used without an icon as well.",...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var w,k,P,S,_;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-div
      display="flex"
      height="70px"
      width="700px"
      border-color="secondary"
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
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.description}}};var q,E,D,N,T;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-flex
      width="700px"
      background="primary"
      border="0 0 3xs/secondary 0"
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
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.description}}};var j,M,C,O,B;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Dark Mode',
  render: () => html\`
    <gds-flex flex-direction="column" gap="l">
      <gds-theme color-scheme="dark">
        <gds-flex
          width="700px"
          background="primary"
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
          background="primary"
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
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(B=(O=r.parameters)==null?void 0:O.docs)==null?void 0:B.description}}};const xe=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar","Dark"];export{d as Basic,o as Compact_menu_bar,r as Dark,s as Example_menu_bar,t as Only_text,n as Selected_state,xe as __namedExportsOrder,he as default};
