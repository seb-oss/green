import{a as l}from"./argTableProps-DtkOeEgw.js";import{h as e}from"./iframe-CvioxKsZ.js";import"./flex-CLjkIF0U.js";import"./menu-button-DIL5li7I.js";import"./popover-GT5q1VXf.js";import"./card-DA-gcGu1.js";import"./magnifying-glass-C-qmJikH.js";import"./star-DSjauxW7.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-7SkbwbpD.js";import"./menu-button.component-O9vRyJ_z.js";import"./popover.component-CZEi4Kln.js";import"./localized-decorator-29B4Mu16.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-DEdNpBnu.js";import"./icon.component-F4h9FH7k.js";import"./card.component-BUsObuD9.js";import"./magnifying-glass.component-BjHC87G2.js";import"./star.component-DXYYr_z7.js";const M={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered",docs:{description:{component:"A menu button combines button and link behaviors for navigation menus."}}},tags:["autodocs"],argTypes:{...l("gds-datepicker")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
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
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...t.parameters?.docs?.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...s.parameters?.docs?.source},description:{story:"The menu button can be used without an icon as well.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels, descriptions, and controls to be associated with the internal button element.\nUses `gds-aria-labelledby`, `gds-aria-describedby`, and `gds-aria-controls` to wire up external accessibility text.",...d.parameters?.docs?.description}}};const A=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar","Dark","AriaForwarding"];export{d as AriaForwarding,a as Basic,r as Compact_menu_bar,i as Dark,o as Example_menu_bar,s as Only_text,t as Selected_state,A as __namedExportsOrder,M as default};
