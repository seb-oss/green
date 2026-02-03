import{a as o}from"./argTableProps-DUFUo9tI.js";import{h as t}from"./iframe-CELF-Vyq.js";import"./menu-button-C-DIR74P.js";import"./popover-BxlQchJu.js";import"./flex-BkVBScXw.js";import"./card-CNF4-peq.js";import"./magnifying-glass-BFKuwjF7.js";import"./star-CO9A878w.js";import"./menu-button.component-Cy9xPqQs.js";import"./popover.component-C2sbpQpD.js";import"./localized-decorator-DerGAKJ_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-zo88JS2_.js";import"./icon.component-B-pG8KGI.js";import"./flex.component-0Gth6Pct.js";import"./card.component-Bnzv_dhj.js";import"./magnifying-glass.component-7URYOpuq.js";import"./star.component-4OGteT5o.js";const _={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered",docs:{description:{component:"A menu button combines button and link behaviors for navigation menus."}}},tags:["autodocs"],argTypes:{...o("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},k={...e},w={...e,render:()=>t`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},P={...e,render:()=>t`<gds-menu-button>Search</gds-menu-button>`},q={...e,render:()=>t`<gds-div
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
    </gds-card>`},S={...e,render:()=>t`<gds-flex
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
    </gds-flex>`},E={...e,name:"Dark Mode",render:()=>t`
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
  `},D=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar","Dark"];export{k as Basic,S as Compact_menu_bar,E as Dark,q as Example_menu_bar,P as Only_text,w as Selected_state,D as __namedExportsOrder,_ as default};
