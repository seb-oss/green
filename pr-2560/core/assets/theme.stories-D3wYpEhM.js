import"./img-BVHCV1oE.js";import"./video-CVJjd8ds.js";import"./card-C7ymr6ot.js";import"./div-Y0WNbpDn.js";import"./flex-DoXXs9cv.js";import"./text-Cxg9YR9j.js";import"./divider-B4eb7StG.js";import"./arrow-down-BrI3t3Jd.js";import"./arrow-right-CQ-9d_ph.js";import"./circles-three-Vg1bVGBb.js";import{x as e}from"./iframe-CqKMOIX5.js";import"./img.component-BpCwRv6I.js";import"./video.component-Qs26tZC1.js";import"./card.component-H7NZpziN.js";import"./flex.component-BwnCzdl3.js";import"./default-typography.styles-MLMgocxS.js";import"./divider.component-Ct_SvqtG.js";import"./arrow-down.component-CwIr5-ef.js";import"./icon.component-BhjPPF0u.js";import"./arrow-right.component-ageB71bM.js";import"./circles-three.component-CGuX4lnV.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
