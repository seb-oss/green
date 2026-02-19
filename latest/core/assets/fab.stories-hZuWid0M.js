import{h as s}from"./iframe-CQ47Irez.js";import"./signal-C5wi6mwW.js";import"./div-BDCw270I.js";import"./text-qXkyDatn.js";import"./link-CzJqrrAk.js";import"./flex-B4UbhSR3.js";import"./card-blKanRM8.js";import"./chevron-bottom-DC7qJ_fQ.js";import"./bubbles-B5zHbyBM.js";import{a as e}from"./argTableProps-DHjzjisO.js";import{DefaultParams as i}from"./button.stories-GkV29WbI.js";import"./signal.component-mKIE7s5R.js";import"./default-typography.styles-CvyeRQle.js";import"./link.component-QF0jUtVd.js";import"./props-link-DPK_lpZH.js";import"./flex.component-Bcbte0K2.js";import"./card.component-CGzbdiPm.js";import"./chevron-bottom.component-lLqd3ftu.js";import"./icon.component-D1euM_UT.js";import"./bubbles.component-BQlnnJJs.js";import"./divider-DA353sbV.js";import"./divider.component-96IC2ir3.js";import"./credit-card-CjCW7mG0.js";import"./credit-card.component-B0tlXK0n.js";import"./arrow-left-D5nZoQBH.js";import"./arrow-left.component-CwR_nxIE.js";import"./chevron-top-Bkdvs1XK.js";import"./chevron-top.component-CMLbPwUA.js";import"./arrow-up-BA59crbb.js";import"./arrow-up.component-z5lsIrmJ.js";import"./arrow-down-COSXvc4a.js";import"./arrow-down.component-dzy_AuHJ.js";import"./arrow-right-sT8FTa-b.js";import"./arrow-right.component-B6FxG59w.js";const _={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...e("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

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
