import{h as s}from"./iframe-DGztXBjb.js";import"./signal-Th3-YYHW.js";import"./div-Cbj7Kv0u.js";import"./text-BhubKi_I.js";import"./link-BwJvhN1L.js";import"./flex-vU-FIwLn.js";import"./card-Cg_r2Vh4.js";import"./chevron-bottom-BAC3JNSx.js";import"./bubbles-ByNY7e-J.js";import{a as e}from"./argTableProps-qIZCpOtF.js";import{DefaultParams as i}from"./button.stories-D5ZgH2Zd.js";import"./signal.component-Df2tuWsC.js";import"./default-typography.styles-Db98ZhSe.js";import"./link.component-CFMj1HWw.js";import"./props-link-DhpZO8VO.js";import"./flex.component-DOCxKVTZ.js";import"./card.component-CY16MePX.js";import"./chevron-bottom.component-DIVuhDiX.js";import"./icon.component-J0zakHWz.js";import"./bubbles.component-Bg1-No43.js";import"./divider-DM1IjiIB.js";import"./divider.component-BMEBDq4S.js";import"./credit-card-DJbUrDKO.js";import"./credit-card.component-BEhSX32h.js";import"./arrow-left-DVZm8tsG.js";import"./arrow-left.component-BNT6yWbG.js";import"./chevron-top-B1-l_JkY.js";import"./chevron-top.component-D4_r6hcV.js";import"./arrow-up-HON9G-j7.js";import"./arrow-up.component-BZjVC-AI.js";import"./arrow-down-DGFMyGO9.js";import"./arrow-down.component-ChDswjWy.js";import"./arrow-right-CHbCrqxd.js";import"./arrow-right.component-BtxNiWO4.js";const _={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...e("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

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
