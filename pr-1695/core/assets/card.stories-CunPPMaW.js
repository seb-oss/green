import{x as e}from"./lit-element-C_s9q329.js";import"./card-xMofMTeE.js";import"./img-DJVZxWgG.js";import"./video-BJFCEyPN.js";import"./container-Ch1CaHdc.js";import"./mask-Dn7up_GG.js";import"./flex-DxhSlQcn.js";import"./text-LNG_RezI.js";import"./divider-tua8V-qY.js";import"./arrow-right-tF2Jhvbv.js";import"./circles-three-XdbNrTn6.js";import"./tokens.style-RalixZsd.js";import"./style-expression-property-D0nhDdjH.js";import"./custom-element-scoping-CpYtbs9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./static-_ukc2i0J.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./icon-C1rUgQqA.js";const re={title:"Components/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card` is a custom element that provides a flexible card system.\n\nIt can be used to create a card with different styles and configurations.\n\nThe card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.\nIt is designed to be used in different scenarios like displaying content, images, or other elements.\nIt can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.\n\n@status beta\n\n@extends `gds-container`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},n={...s,render:d=>e`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" border-radius="xs" overflow="hidden">
        <gds-flex
          display="flex"
          gap="0"
          flex-direction="column"
          align-items="stretch"
        >
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              aspect-ratio="1/1"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">James Doe</gds-text>
              <gds-text tag="p">
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card
        shadow="l"
        border-radius="m"
        border="3xs/primary"
        overflow="hidden"
      >
        <gds-flex gap="m" flex-direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              aspect-ratio="1/1"
              border-radius="xs"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{s} l{s}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">Lorem Ipsum</gds-text>
              <gds-text tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-flex>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="m" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="tertiary/0.4"
            position="absolute"
          >
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="tertiary"
            >
              <gds-container>
                <gds-text font-size="body-l">Jane Doe</gds-text>
                <gds-text font-size="body-m">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `},t={...s,name:"Border Style",render:d=>e` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" border-radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Top
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center"
          >Right</gds-flex
        >
      </gds-card>
      <gds-card shadow="s" border-radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m" border="4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          All
        </gds-flex>
      </gds-card>
    </gds-grid>`},r={...s,name:"Border Radius",render:d=>e`<gds-grid columns="8" gap="l">
      <gds-card background="tertiary" color="tertiary" padding="xl">
        <gds-flex display="flex" align-items="center" justify-content="center">
          0
        </gds-flex>
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="2xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >2XS</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 xs 0 xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 s 0 s"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 m 0 m"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 l 0 l"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="xl"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="max"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >MAX</gds-flex
        >
      </gds-card>
    </gds-grid>`},a={...s,name:"Shadow",render:d=>e`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{s} m{s} l{s}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{m} m{m} l{m}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{l} m{l} l{l}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
    </gds-grid>`},i={...s,name:"Background",render:d=>e`<gds-grid columns="4" gap="l">
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base100">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 100</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base200">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 200</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="primary">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 300</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base400">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 400</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
    </gds-grid>`},o={...s,name:"Using with Grid",render:d=>e` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            gap="m"
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
          >
            <gds-text font-size="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font-size="body-m"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s">Span all columns [1 / -1]</gds-text>
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
      </gds-container>
    </gds-grid>`};var l,g,c,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" border-radius="xs" overflow="hidden">
        <gds-flex
          display="flex"
          gap="0"
          flex-direction="column"
          align-items="stretch"
        >
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              aspect-ratio="1/1"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">James Doe</gds-text>
              <gds-text tag="p">
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card
        shadow="l"
        border-radius="m"
        border="3xs/primary"
        overflow="hidden"
      >
        <gds-flex gap="m" flex-direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              aspect-ratio="1/1"
              border-radius="xs"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{s} l{s}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">Lorem Ipsum</gds-text>
              <gds-text tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-flex>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="m" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="tertiary/0.4"
            position="absolute"
          >
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="tertiary"
            >
              <gds-container>
                <gds-text font-size="body-l">Jane Doe</gds-text>
                <gds-text font-size="body-m">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"Card",...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var x,p,f,b,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" border-radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Top
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center"
          >Right</gds-flex
        >
      </gds-card>
      <gds-card shadow="s" border-radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m" border="4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          All
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:`@property border
Controls the border property of the card.
Supports all tokens from the design system.
Can be specified for each side using the size tokens like this:

\`\`\`html
<gds-container border="4xs 0 0 0"></gds-container>
\`\`\`



\`\`\`html
<!--Border specified for different breakpoints and side: -->
<gds-container border="s{2xs 0 2xs 0} m{3xs 0 0 0} l{4xs}"></gds-container>
\`\`\`
* The above example will apply the border style of 2xs(top) 0(right) 2xs(bottom) 0(right) for small devices, 3xs for medium devices, and 4xs for large devices with the respective sides.

\`\`\`html
<!-- Border specified for all sides and all breakpoints: -->
<gds-container border="4xs"></gds-container>
\`\`\`


To speficy the color of the border you can use the color tokens like this:

\`\`\`html
<gds-container border="4xs/primary"></gds-container>
\`\`\``,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var y,w,k,v,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="8" gap="l">
      <gds-card background="tertiary" color="tertiary" padding="xl">
        <gds-flex display="flex" align-items="center" justify-content="center">
          0
        </gds-flex>
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="2xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >2XS</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 xs 0 xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 s 0 s"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 m 0 m"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="0 l 0 l"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="xl"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
      <gds-card
        background="tertiary"
        color="tertiary"
        padding="xl"
        border-radius="max"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >MAX</gds-flex
        >
      </gds-card>
    </gds-grid>\`
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:'@property radius\n\nControls the border-radius property of the card.\nSupports all the size tokens from the design system.\n\nYou can apply radius in each corner like this:\n`<gds-card border-radius="0 0 m m" ></gds-card>\n\nAlso for different breakpoints like this:\n`<gds-card border-radius="s{xs} m{xs} l{s}"></gds-card>`\n\nEach corner can have a different radius value and also different values for different breakpoints.\nThe radius styles are predfied on the tokens file and will be applied automativally based on the token value.\n\n\n```html\n<gds-card border-radius="m">All breakpoints</gds-card>\n<gds-card border-radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >\n   Specific breakpoints and sides\n</gds-card>\n```\n\nThese are the available values you can use to define Border Radius\n\n`0`, `4XS`, `3XS`, `2XS`, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`, `4XL`, `5XL`, `6XL`, `7XL`, `8XL`, `MAX`\n\n#### Examples',...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var j,B,S,q,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{s} m{s} l{s}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{m} m{m} l{m}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{l} m{l} l{l}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
    </gds-grid>\`
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:`@property shadow

Controls the box-shadow property of the card.

Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:

\`\`\`html
<gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
\`\`\`

The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.`,...(z=(q=a.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var X,C,D,T,M;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\`<gds-grid columns="4" gap="l">
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base100">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 100</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base200">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 200</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="primary">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 300</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" border-radius="xs" background="base400">
        <gds-flex
          gap="l"
          align-items="flex-start"
          flex-direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text font-size="heading-m">Base 400</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:`@property background

Controls the background property of the card.
Supports all the color tokens from the design system.`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var P,A,R,I,U;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            gap="m"
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
          >
            <gds-text font-size="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font-size="body-m"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s">Span all columns [1 / -1]</gds-text>
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
      </gds-container>
    </gds-grid>\`
}`,...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-container` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-container grid-column="2 / -1" grid-row="1 / -1"></gds-container>\n```',...(U=(I=o.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};const ae=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{n as Card,i as CardBackground,t as CardBorder,o as CardGrid,r as CardRadius,a as Cardshadow,ae as __namedExportsOrder,re as default};
