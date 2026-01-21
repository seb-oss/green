import"./img-B2Mt_A8a.js";import"./video-C1L_5uJz.js";import"./card-BYV7RZUJ.js";import"./div-D2rdP6XW.js";import"./flex-4r-oBX8S.js";import"./text-B0enSeDh.js";import"./divider-Bxwg1A95.js";import"./arrow-down-D-8-St6l.js";import"./arrow-right-7cnFD-Fr.js";import"./circles-three-hn-f8Vey.js";import{x as e}from"./iframe-BQ8Xjw8d.js";import"./img.component-AjKr95o8.js";import"./video.component-DlkstUbG.js";import"./card.component-CHHobmy3.js";import"./flex.component--lZWSZDD.js";import"./default-typography.styles-JpAfgxcb.js";import"./divider.component-SyiKBaiz.js";import"./arrow-down.component-DplOyb_c.js";import"./icon.component-BVf0S7fu.js";import"./arrow-right.component-Dwn3qcz_.js";import"./circles-three.component-DO-vCRa9.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
