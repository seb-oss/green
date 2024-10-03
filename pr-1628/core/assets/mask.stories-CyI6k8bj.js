import{k as o}from"./lit-element-BoQqPHl6.js";import"./mask-DBz9iP8H.js";import"./card-0z1Y0yrY.js";import"./flex-C0GhCPDY.js";import"./container-dYXZNekH.js";import"./theme-B4sINuUm.js";import"./img-OOTvP9ny.js";import"./video-CPRLz-e6.js";import"./text-s5oB_aCL.js";import"./divider-BXzs4GNy.js";import"./arrow-right-DPll1Eg6.js";import"./circles-three-BKShdskc.js";import"./static-C_6dgFWo.js";import"./gds-element-QykLKB9o.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-BL80UqHP.js";import"./tokens.style-DuOE18tp.js";import"./transitional-styles-C6IQsa0n.js";import"./watch-tFciLXSI.js";import"./query-p8xgzTDt.js";import"./class-map-BBGuaYF3.js";import"./directive-Ctav8iJK.js";import"./icon-uAHwHZ0H.js";const E={title:"Docs/Layout/Mask",component:"gds-mask",tags:["autodocs"]},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...d,render:r=>o`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex
          display="flex"
          gap="0"
          flex-direction="column"
          align-items="stretch"
        >
          <gds-container
            position="relative"
            border-radius="s"
            overflow="hidden"
          >
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
              <gds-container position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-mask>
          </gds-container>
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
              <gds-container>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m">
                  Promoting Eco-Friendly Solutions
                </gds-text>
              </gds-container>
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
  `};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
          <gds-container
            position="relative"
            border-radius="s"
            overflow="hidden"
          >
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
              <gds-container position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-mask>
          </gds-container>
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
              <gds-container>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m">
                  Promoting Eco-Friendly Solutions
                </gds-text>
              </gds-container>
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const L=["Card"];export{t as Card,L as __namedExportsOrder,E as default};
