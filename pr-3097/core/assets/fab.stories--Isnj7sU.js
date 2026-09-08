import{h as o}from"./iframe-DlIMbJFh.js";import"./signal-CJTRbEEL.js";import"./div-B3t4acnI.js";import"./text-BVO-0UxU.js";import"./link-v4S1C2TI.js";import"./flex-WBRZJ0Gr.js";import"./card-D2BOE6NS.js";import"./chevron-bottom-CNvo9PxW.js";import"./bubbles-79uOrfa6.js";import{a as g}from"./argTableProps-B6MCuoK1.js";import{DefaultParams as l}from"./button.stories-B6db3wgl.js";import"./preload-helper-PPVm8Dsz.js";import"./signal.component-BRyjkXjB.js";import"./text.component-0srPIWId.js";import"./default-typography.styles-BzSf7jm1.js";import"./props-link-dA8lr4wB.js";import"./flex.component-00d2Alrn.js";import"./card.component-Bz_iF5U6.js";import"./chevron-bottom.component-CCxajB5W.js";import"./icon.component-DrnCov5X.js";import"./bubbles.component-BWTKbdjl.js";import"./divider-ChxItsQP.js";import"./context-menu-B0JJrhAc.js";import"./context-menu.component-1Sya5mjs.js";import"./localized-decorator-F27hhgrH.js";import"./menu-listbox.style-C9cuvsmH.js";import"./ref-C3iu974b.js";import"./dot-grid-one-horizontal-B_uAZzlZ.js";import"./popover.component-sHvIUiiE.js";import"./floating-ui.dom-DzQH3ivI.js";import"./cross-small.component-993yaYbI.js";import"./menu-heading.component-Dij18y_3.js";import"./menu-item-CAXN6k6F.js";import"./menu-heading-BggPbAOX.js";import"./credit-card-DDhpdU6j.js";import"./credit-card.component-Czuh1B9W.js";import"./arrow-left-xuWY9Kr0.js";import"./arrow-left.component-BEDoYP-b.js";import"./chevron-top-DD3n-WEn.js";import"./chevron-top.component-CNpEt0h_.js";import"./arrow-up-BxqgnfQG.js";import"./arrow-up.component-ClyGBi7e.js";import"./arrow-down-DgwgfFEm.js";import"./arrow-down.component-BwUrEOGh.js";import"./arrow-right-C4KUizQf.js";import"./arrow-right.component-CDPZlfmq.js";const na={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...g("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},a={...l,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px",position:"relative"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},d={...a},s={...a,name:"Signal ",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},e={...a,name:"Icon Button",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `},n={...a,name:"Color",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="secondary" variant="positive">
        Secondary
        <gds-signal slot="trail" level="3" color="positive-01"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},t={...a,name:"Position",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  `},i={...a,name:"z-index",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="neutral-02" flex="1" height="300px" outline> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="neutral-02" flex="1" height="300px" outline> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal ',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...s.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon Button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  \`
}`,...e.parameters?.docs?.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="secondary" variant="positive">
        Secondary
        <gds-signal slot="trail" level="3" color="positive-01"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Default color of the signal within the FAB is the same as the button color.\n\nIf you want to change the color of the signal, you can use the `color` property.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Position',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  \`
}`,...t.parameters?.docs?.source},description:{story:`You can position the FAB using the \`inset\` property.
It takes all the default CSS inset values.

e.g

\`\`\`html
<gds-fab inset="auto 48px 48px auto">
   I'm a FAB
</gds-fab>
\`\`\`

And also the \`position\` property can be set to use any valid CSS position values.

e.g

\`\`\`html
<gds-fab position="absolute">
   Absolute Position
</gds-fab>
\`\`\``,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'z-index',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="neutral-02" flex="1" height="300px" outline> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="neutral-02" flex="1" height="300px" outline> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source},description:{story:`The z order of the FAB is set by default to \`1050\`.

This is recommended to keep the FAB above other elements.

If you want to change the z-index, that should be done in the CSS or wrap FAB in a container with a higher z-index value.`,...i.parameters?.docs?.description}}};const ta=["Usage","RanksAndVariants","IconButton","Color","Position","ZIndex"];export{n as Color,e as IconButton,t as Position,s as RanksAndVariants,d as Usage,i as ZIndex,ta as __namedExportsOrder,na as default};
