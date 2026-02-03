import{x as r}from"./iframe-CZ05hS3M.js";import{a as e}from"./argTableProps-BlnhksLA.js";import"./card-DC3nFRR8.js";import"./img-N5cv8v5A.js";import"./video-DEkkpS6f.js";import"./div-BjvCcze3.js";import"./mask-CdFrUXM2.js";import"./flex-XqteE1sH.js";import"./text-Dg4esbyo.js";import"./divider-mNwPGmkk.js";import"./arrow-down-CakouhNH.js";import"./arrow-right-CwSuUV0g.js";import"./circles-three-D8T1N7Qx.js";import"./card.component-CjvQ4has.js";import"./img.component-BQroyotl.js";import"./video.component-DVI_v6_M.js";import"./mask.component-C-ehFsZ2.js";import"./flex.component-COAKd3b7.js";import"./default-typography.styles-DoQRGpyO.js";import"./divider.component-D2no2OZ9.js";import"./arrow-down.component-Ci9bbsGL.js";import"./icon.component-DB_HYxEe.js";import"./arrow-right.component-BS05P0I8.js";import"./circles-three.component-CcBB6xFX.js";const P={title:"Components/Card",component:"gds-card",tags:["autodocs"],argTypes:{...e("gds-card")},parameters:{docs:{description:{component:"The card groups related content into a single container.\n\n`gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults\nand a shortcut property for specifiying different card variants.\n\n\n@extends `gds-div`"}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},T={...d,args:{innerHTML:"Card content",style:"max-width: 200px"}},D={...d,render:t=>r`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary">Secondary</gds-card>
            <gds-card variant="tertiary">Tertiary</gds-card>
            <gds-card variant="brand-01">Brand-01</gds-card>
            <gds-card variant="brand-02">Brand-02</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="1" gap="l">
            <gds-card>Default</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card level="1">
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <gds-card variant="primary">Primary</gds-card>
              <gds-card variant="secondary">Secondary</gds-card>
              <gds-card variant="tertiary">Tertiary</gds-card>
              <gds-card variant="brand-01">Brand-01</gds-card>
              <gds-card variant="brand-02">Brand-02</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="1" gap="l">
              <gds-card>Default</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
    </gds-flex>
  `},N={...d,name:"Box shadow",render:t=>r`<gds-grid
      columns="1; s{6}"
      gap="2xl"
      padding="2xl"
      width="100%"
      box-sizing="border-box"
    >
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xs"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="s"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="m"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="l"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="xl"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XL
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        box-shadow="2xl"
        border-radius="xs"
        variant="secondary"
        height="100px"
        justify-content="center"
        border-width="0"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          2XL
        </gds-flex>
      </gds-card>
    </gds-grid>`},G={...d,name:"Using with Grid",render:t=>r` <gds-grid columns="4" gap="l">
      <gds-div>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
      <gds-div grid-column="1 / -1">
        <gds-card border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font="heading-s">Span all columns [1 / -1]</gds-text>
            <gds-text text-wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-div>
    </gds-grid>`},X=["Card","Variants","Cardshadow","CardGrid"];export{T as Card,G as CardGrid,N as Cardshadow,D as Variants,X as __namedExportsOrder,P as default};
