import"./img-CxVfiCxY.js";import"./video-BM2RYVAz.js";import"./card-D8R_bGCP.js";import"./div-BCBN7z1j.js";import"./flex-2hCV8jpf.js";import"./text-D6KuVJgU.js";import"./divider-C1DsRdfj.js";import"./arrow-down-v09Jqs8a.js";import"./arrow-right-Dg8h4WOL.js";import"./circles-three-DdBx-ZqE.js";import{x as e}from"./iframe-DRKs3nTV.js";import"./img.component-DjNTezzS.js";import"./video.component-CWyYFR2l.js";import"./card.component-DIPr--u9.js";import"./flex.component-DrK28tAb.js";import"./default-typography.styles-DiW_uU5w.js";import"./divider.component-v_P7wnGA.js";import"./arrow-down.component-BD8wpBuA.js";import"./icon.component-B9rMDmtx.js";import"./arrow-right.component-Bt-qf7L1.js";import"./circles-three.component-Bq6kJPmr.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
