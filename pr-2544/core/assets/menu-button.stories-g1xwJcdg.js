import{a as o}from"./argTableProps-D94_5j3M.js";import{h as t}from"./iframe-CDTFv-C8.js";import"./menu-button-Df4AcFri.js";import"./popover-DiT1c_qB.js";import"./flex-Bk9zj1Ie.js";import"./card-BQE9D101.js";import"./magnifying-glass-DNI6hREM.js";import"./star-Cz89lRU5.js";import"./menu-button.component-BvmpAkNl.js";import"./popover.component-Bh_0CVbR.js";import"./localized-decorator-De96p8FJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BmAku09M.js";import"./icon.component-BD9gw1Q3.js";import"./flex.component-DealITh5.js";import"./card.component-CrPfjVg7.js";import"./magnifying-glass.component-Neurdvaf.js";import"./star.component-DarG0La3.js";const _={title:"Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered",docs:{description:{component:"A menu button combines button and link behaviors for navigation menus."}}},tags:["autodocs"],argTypes:{...o("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
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
