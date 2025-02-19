import{x as d}from"./lit-element-C_s9q329.js";import"./card-stRHUTua.js";import"./img-ObusJX0r.js";import"./video-CBy0vxxA.js";import"./container-DDOcWLIX.js";import"./mask-Cn6mPoR2.js";import"./flex-CV3X_Fty.js";import"./text-CeWETXFs.js";import"./divider-D60QuXTY.js";import"./arrow-down-BlXBzdzP.js";import"./arrow-right-B_2xDbEI.js";import"./circles-three-D7u6EZR6.js";import"./tokens.style-CFvqdzpw.js";import"./custom-element-scoping-BEGY3AqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-D7o6hSzp.js";import"./query-p8xgzTDt.js";import"./static-_ukc2i0J.js";import"./icon-DYBgint3.js";import"./directive-CF8sV3Lr.js";const ge={title:"Components/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:`A container for content representing a single entity. e.g. a contact, article, or task.

\`gds-card\` inherits all properties from \`gds-container\`, but comes with some predefined defaults
and a shortcut property for specifiying different card variants.

@status beta

@extends \`gds-container\``}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},g={...e,args:{innerHTML:"Card content",style:"max-width: 200px"}},s={...e,render:r=>d`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary" border-color="primary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary" border-color="secondary"
              >Secondary</gds-card
            >
            <gds-card variant="tertiary">Tertiary</gds-card>
          </gds-grid>
          <gds-grid columns="5" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="4" gap="l">
            <gds-card variant="copper-01">Copper 01</gds-card>
            <gds-card variant="copper-02">Copper 02</gds-card>
            <gds-card variant="purple-01">Purple 01</gds-card>
            <gds-card variant="purple-02">Purple 02</gds-card>
            <gds-card variant="green-01">Green 01</gds-card>
            <gds-card variant="green-02">Green 02</gds-card>
            <gds-card variant="blue-01">Blue 01</gds-card>
            <gds-card variant="blue-02">Blue 02</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card>
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <!-- If the backgrouns has the same color as the card, it will be necessary to set the border-color -->
              <gds-card variant="primary" border-color="primary"
                >Primary</gds-card
              >
              <gds-card variant="secondary" border-color="secondary"
                >Secondary</gds-card
              >
              <gds-card variant="tertiary">Tertiary</gds-card>
            </gds-grid>
            <gds-grid columns="5" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="4" gap="l">
              <gds-card variant="copper-01">Copper 01</gds-card>
              <gds-card variant="copper-02">Copper 02</gds-card>
              <gds-card variant="purple-01">Purple 01</gds-card>
              <gds-card variant="purple-02">Purple 02</gds-card>
              <gds-card variant="green-01">Green 01</gds-card>
              <gds-card variant="green-02">Green 02</gds-card>
              <gds-card variant="blue-01">Blue 01</gds-card>
              <gds-card variant="blue-02">Blue 02</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
    </gds-flex>
  `},n={...e,render:r=>d`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card
        shadow="s{xs} m{xs} l{s}"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        background="secondary"
      >
        <gds-flex gap="0" flex-direction="column" align-items="stretch">
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
        padding="0"
        background="secondary"
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
      <gds-card border-radius="m" overflow="hidden" padding="0">
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
  `},a={...e,name:"Border Style",render:r=>d` <gds-grid columns="5" gap="l">
      <gds-card variant="primary" border-radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m" border="4xs">
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`},t={...e,name:"Border Radius",render:r=>d`<gds-grid columns="8" gap="l">
      <gds-card variant="tertiary" padding="xl" border-radius="0">
        <gds-flex display="flex" align-items="center" justify-content="center">
          0
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="2xs">
        <gds-flex display="flex" align-items="center" justify-content="center">
          2xs
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 xs 0 xs">
        <gds-flex display="flex" align-items="center" justify-content="center">
          xs
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 s 0 s">
        <gds-flex display="flex" align-items="center" justify-content="center">
          s
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 m 0 m">
        <gds-flex display="flex" align-items="center" justify-content="center">
          m
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 l 0 l">
        <gds-flex display="flex" align-items="center" justify-content="center">
          l
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="xl">
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="max">
        <gds-flex display="flex" align-items="center" justify-content="center">
          max</gds-flex
        >
      </gds-card>
    </gds-grid>`},i={...e,name:"Shadow",render:r=>d`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{s} m{s} l{s}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{m} m{m} l{m}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{l} m{l} l{l}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>`},o={...e,name:"Using with Grid",render:r=>d` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
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
        <gds-card border-radius="xs">
          <gds-flex
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
            <gds-text font-size="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="1 / -1">
        <gds-card border-radius="xs">
          <gds-flex
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
    </gds-grid>`};var c,l,m;g.parameters={...g.parameters,docs:{...(c=g.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px'
  }
}`,...(m=(l=g.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,x,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary" border-color="primary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary" border-color="secondary"
              >Secondary</gds-card
            >
            <gds-card variant="tertiary">Tertiary</gds-card>
          </gds-grid>
          <gds-grid columns="5" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="4" gap="l">
            <gds-card variant="copper-01">Copper 01</gds-card>
            <gds-card variant="copper-02">Copper 02</gds-card>
            <gds-card variant="purple-01">Purple 01</gds-card>
            <gds-card variant="purple-02">Purple 02</gds-card>
            <gds-card variant="green-01">Green 01</gds-card>
            <gds-card variant="green-02">Green 02</gds-card>
            <gds-card variant="blue-01">Blue 01</gds-card>
            <gds-card variant="blue-02">Blue 02</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card>
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <!-- If the backgrouns has the same color as the card, it will be necessary to set the border-color -->
              <gds-card variant="primary" border-color="primary"
                >Primary</gds-card
              >
              <gds-card variant="secondary" border-color="secondary"
                >Secondary</gds-card
              >
              <gds-card variant="tertiary">Tertiary</gds-card>
            </gds-grid>
            <gds-grid columns="5" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="4" gap="l">
              <gds-card variant="copper-01">Copper 01</gds-card>
              <gds-card variant="copper-02">Copper 02</gds-card>
              <gds-card variant="purple-01">Purple 01</gds-card>
              <gds-card variant="purple-02">Purple 02</gds-card>
              <gds-card variant="green-01">Green 01</gds-card>
              <gds-card variant="green-02">Green 02</gds-card>
              <gds-card variant="blue-01">Blue 01</gds-card>
              <gds-card variant="blue-02">Blue 02</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
    </gds-flex>
  \`
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"Examples of different color variants",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,h,v,w,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card
        shadow="s{xs} m{xs} l{s}"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        background="secondary"
      >
        <gds-flex gap="0" flex-direction="column" align-items="stretch">
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
        padding="0"
        background="secondary"
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
      <gds-card border-radius="m" overflow="hidden" padding="0">
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
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Advanced example",...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var k,C,S,B,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="l">
      <gds-card variant="primary" border-radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card variant="primary" border-radius="m" border="4xs">
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`@property border
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
\`\`\``,...(L=(B=a.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var P,q,z,D,T;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="8" gap="l">
      <gds-card variant="tertiary" padding="xl" border-radius="0">
        <gds-flex display="flex" align-items="center" justify-content="center">
          0
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="2xs">
        <gds-flex display="flex" align-items="center" justify-content="center">
          2xs
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 xs 0 xs">
        <gds-flex display="flex" align-items="center" justify-content="center">
          xs
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 s 0 s">
        <gds-flex display="flex" align-items="center" justify-content="center">
          s
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 m 0 m">
        <gds-flex display="flex" align-items="center" justify-content="center">
          m
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 l 0 l">
        <gds-flex display="flex" align-items="center" justify-content="center">
          l
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="xl">
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="max">
        <gds-flex display="flex" align-items="center" justify-content="center">
          max</gds-flex
        >
      </gds-card>
    </gds-grid>\`
}`,...(z=(q=t.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:'@property radius\n\nControls the border-radius property of the card.\nSupports all the size tokens from the design system.\n\nYou can apply radius in each corner like this:\n\n```html\n<gds-card border-radius="0 0 m m" ></gds-card>\n```\n\nAlso for different breakpoints like this:\n\n```html\n<gds-card border-radius="s{xs} m{xs} l{s}"></gds-card>\n```\n\nEach corner can have a different radius value and also different values for different breakpoints.\nThe radius styles are predfied on the tokens file and will be applied automatically based on the token value.\n\n\n```html\n<gds-card border-radius="m">All breakpoints</gds-card>\n<gds-card border-radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >\n   Specific breakpoints and sides\n</gds-card>\n```\n\nThese are the available values you can use to define Border Radius\n\n`0`, `4xs`, `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `max`\n\n#### Examples',...(T=(D=t.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var G,A,I,N,R;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          XS
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{s} m{s} l{s}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          S
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{m} m{m} l{m}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          M
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{l} m{l} l{l}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          L
        </gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        border-radius="xs"
        variant="secondary"
      >
        <gds-flex display="flex" align-items="center" justify-content="center">
          xl
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:`@property shadow

Controls the box-shadow property of the card.

Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:

\`\`\`html
<gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
\`\`\`

The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var E,M,U,F,J;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
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
        <gds-card border-radius="xs">
          <gds-flex
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
            <gds-text font-size="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="1 / -1">
        <gds-card border-radius="xs">
          <gds-flex
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
}`,...(U=(M=o.parameters)==null?void 0:M.docs)==null?void 0:U.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-container` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-container grid-column="2 / -1" grid-row="1 / -1"></gds-container>\n```',...(J=(F=o.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};const ce=["Card","Variants","CardAdvancedExample","CardBorder","CardRadius","Cardshadow","CardGrid"];export{g as Card,n as CardAdvancedExample,a as CardBorder,o as CardGrid,t as CardRadius,i as Cardshadow,s as Variants,ce as __namedExportsOrder,ge as default};
