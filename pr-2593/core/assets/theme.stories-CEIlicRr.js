import"./img-DntnYZC0.js";import"./video-CW17cO0n.js";import"./card-C6iZArMl.js";import"./div-DvIE1xx3.js";import"./flex-BwwAP2Of.js";import"./text-BJamJXgr.js";import"./divider-B-rWi3UA.js";import"./arrow-down-BtszHftd.js";import"./arrow-right-C_4OGAOF.js";import"./circles-three-Dcf91ZFr.js";import{x as e}from"./iframe-Bnz-Jxbc.js";import"./img.component-DAxAzxep.js";import"./video.component-z-vl8RjB.js";import"./card.component-oFDBdUNx.js";import"./flex.component-BX2aWvL_.js";import"./default-typography.styles-BZp7ZTXG.js";import"./divider.component-H6IiOyaH.js";import"./arrow-down.component-5EVJbZWf.js";import"./icon.component-DzKqo047.js";import"./arrow-right.component-ozcr319g.js";import"./circles-three.component-YvF8-eSK.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
are applied to its children. It can be used to control light and dark mode, as well as which
design version the children should use (2016 or 2023)

For the 2016 styles to work, [Transitioanl Styles](http://localhost:4400/?path=/docs/concepts-transitional-styles--docs)
must be imported and and registered for the used components.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},D={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>e`
    <gds-grid gap="m" columns="2">
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Auto mode button in a card (2023)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Light mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Dark mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Auto mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Light mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Dark mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
    </gds-grid>
  `},S=["Theme"];export{D as Theme,S as __namedExportsOrder,w as default};
