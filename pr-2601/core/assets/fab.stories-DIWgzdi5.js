import{h as s}from"./iframe-CQ6C5171.js";import"./signal-BuMsLbfx.js";import"./div-Ch6qw6kt.js";import"./text-CszMod1C.js";import"./link-BtR8Fif0.js";import"./flex-CPbiCARk.js";import"./card-BZV32SAu.js";import"./chevron-bottom-BHC7OpU6.js";import"./bubbles-B02zr2qb.js";import{a as e}from"./argTableProps-DPj_u8QI.js";import{DefaultParams as i}from"./button.stories-wOKxXtLH.js";import"./signal.component-Bdu2yCbJ.js";import"./default-typography.styles-DVh8uprT.js";import"./link.component-DpTUYnoq.js";import"./props-link-C3T_dU3s.js";import"./flex.component-DFXFpgUj.js";import"./card.component-C6dS-oCl.js";import"./chevron-bottom.component-DoOuMjBM.js";import"./icon.component-DN5ag0d3.js";import"./bubbles.component-m96P9FvP.js";import"./divider-s92vxJ5z.js";import"./divider.component-2ygXj9zS.js";import"./credit-card-CL_eTbAD.js";import"./credit-card.component-Do_DraJv.js";import"./arrow-left-DW78vtIJ.js";import"./arrow-left.component-sN3TksiU.js";import"./chevron-top-zh7Jziui.js";import"./chevron-top.component-vLCKuOr-.js";import"./arrow-up-BgXNpyf5.js";import"./arrow-up.component-Cvc9SU0P.js";import"./arrow-down-CjP0f-4U.js";import"./arrow-down.component-C5Kpz-Ka.js";import"./arrow-right-BTqJgyEm.js";import"./arrow-right.component-CMDHjSSN.js";const _={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...e("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},a={...i,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px",position:"relative"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},E={...a},H={...a,name:"Signal ",parameters:{...a.parameters,controls:{include:[]}},render:t=>s`
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
  `},M={...a,name:"Icon Button",parameters:{...a.parameters,controls:{include:[]}},render:t=>s`
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
  `},O={...a,name:"Color",parameters:{...a.parameters,controls:{include:[]}},render:t=>s`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="secondary" variant="positive">
        Secondary
        <gds-signal slot="trail" level="3" color="positive-01"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},$={...a,name:"Position",parameters:{...a.parameters,controls:{include:[]}},render:t=>s`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  `},j={...a,name:"z-index",parameters:{...a.parameters,controls:{include:[]}},render:t=>s`
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
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
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
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  `},G=["Usage","RanksAndVariants","IconButton","Color","Position","ZIndex"];export{O as Color,M as IconButton,$ as Position,H as RanksAndVariants,E as Usage,j as ZIndex,G as __namedExportsOrder,_ as default};
