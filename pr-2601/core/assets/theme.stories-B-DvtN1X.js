import"./img-c_MA6qsR.js";import"./video-B_X4wtD5.js";import"./card-CThgPxvs.js";import"./div-Cq-4BE8p.js";import"./flex-BVlaU2K7.js";import"./text-Bi4GUguR.js";import"./divider-53e88BJg.js";import"./arrow-down-CcsmXUOq.js";import"./arrow-right-CKJWyr9h.js";import"./circles-three-DDo5JssZ.js";import{x as e}from"./iframe-CvkrKpPT.js";import"./img.component-teesOaBs.js";import"./video.component-BFjmkfZc.js";import"./card.component-Ba_9DfXW.js";import"./flex.component-3WlUjBhB.js";import"./default-typography.styles-Y5hFK-zl.js";import"./divider.component-B9P63FmF.js";import"./arrow-down.component-B0mNIxDN.js";import"./icon.component-6kdDZ56N.js";import"./arrow-right.component-ph0qqOpB.js";import"./circles-three.component-C3eaQzjf.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
