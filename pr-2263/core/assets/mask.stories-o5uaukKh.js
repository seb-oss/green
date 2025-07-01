import{x as n}from"./lit-element-Bx14lxc-.js";import{a as d}from"./argTableProps-BMxYqZd3.js";import"./mask-CiViWp-H.js";import"./card-CG3L3yHc.js";import"./flex-DwjGT5wG.js";import"./container-BFAH9Qed.js";import"./theme-BPIxIbLf.js";import"./img-Dh8qSW1X.js";import"./video-DngMlw9F.js";import"./text-BjIbrtUS.js";import"./divider-B6dJhqny.js";import"./arrow-down-DDJQuA8l.js";import"./arrow-right-DmZRW5KL.js";import"./circles-three-C0f4dvE6.js";import"./custom-elements-IIMYxOac.js";import"./mask.component-CBAXECpL.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9n1Y52h.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-Bw_LIblW.js";import"./flex.component-CAtj-g7K.js";import"./div.component-BCJhG5xx.js";import"./card.component-Bb9UhwqR.js";import"./container.component-DaEOkzUY.js";import"./theme.component-CfS96kcK.js";import"./transitional-styles-BOV6aykc.js";import"./watch-tFciLXSI.js";import"./img.component-CBExE9Bp.js";import"./video.component-rIK5Wo5N.js";import"./query-p8xgzTDt.js";import"./arrow-down.component-C3l37N46.js";import"./icon-g07EMYwp.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-ki0RsmjU.js";import"./circles-three.component-DnkfDM-b.js";const N={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...d("gds-mask")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...r,render:i=>n`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex
          display="flex"
          gap="0"
          flex-direction="column"
          align-items="stretch"
        >
          <gds-div position="relative" border-radius="s" overflow="hidden">
            <gds-img
              src="https://github.com/user-attachments/assets/fdbfca17-c5b7-43cc-b846-6e1ab68e5d69"
              aspect-ratio="1/1"
              object-fit="cover"
            ></gds-img>
            <gds-mask
              mask-image="top"
              background-color="tertiary/0.9"
              z-index="2"
              position="absolute"
              inset="50% 0 0 0"
            >
              <gds-div position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-div>
            </gds-mask>
          </gds-div>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">
                Sector by sector. Industry by industry.
              </gds-text>
              <gds-text tag="p">
                Together with our clients, we're accelerating the sustainable
                transition.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>Client stories</gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="s" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/user-attachments/assets/f556d859-466a-416c-95fb-ee908ffccfdd"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="tertiary/0.6"
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
              <gds-div>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m">
                  Promoting Eco-Friendly Solutions
                </gds-text>
              </gds-div>
              <gds-flex gap="s">
                <gds-button rank="secondary">Get Involved</gds-button>
                <gds-theme color-scheme="dark">
                  <gds-button rank="tertiary">Learn more</gds-button>
                </gds-theme>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `};var s,e,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex
          display="flex"
          gap="0"
          flex-direction="column"
          align-items="stretch"
        >
          <gds-div position="relative" border-radius="s" overflow="hidden">
            <gds-img
              src="https://github.com/user-attachments/assets/fdbfca17-c5b7-43cc-b846-6e1ab68e5d69"
              aspect-ratio="1/1"
              object-fit="cover"
            ></gds-img>
            <gds-mask
              mask-image="top"
              background-color="tertiary/0.9"
              z-index="2"
              position="absolute"
              inset="50% 0 0 0"
            >
              <gds-div position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-div>
            </gds-mask>
          </gds-div>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">
                Sector by sector. Industry by industry.
              </gds-text>
              <gds-text tag="p">
                Together with our clients, we're accelerating the sustainable
                transition.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>Client stories</gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="s" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/user-attachments/assets/f556d859-466a-416c-95fb-ee908ffccfdd"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="tertiary/0.6"
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
              <gds-div>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m">
                  Promoting Eco-Friendly Solutions
                </gds-text>
              </gds-div>
              <gds-flex gap="s">
                <gds-button rank="secondary">Get Involved</gds-button>
                <gds-theme color-scheme="dark">
                  <gds-button rank="tertiary">Learn more</gds-button>
                </gds-theme>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Q=["Card"];export{t as Card,Q as __namedExportsOrder,N as default};
