import{k as n}from"./lit-element-BoQqPHl6.js";import"./mask-DmEkIzai.js";import"./card-h2h4ZaIW.js";import"./flex-HuK12lhR.js";import"./container-BxFejZmF.js";import"./theme-DU5KIk66.js";import"./img-Cl2psb7D.js";import"./video-C62ocq6i.js";import"./text-DKZiGorS.js";import"./divider-CmoJvVpe.js";import"./arrow-right-CxX_nF7f.js";import"./circles-three-BV-zZdHb.js";import"./static-C_6dgFWo.js";import"./gds-element-RTlSuh_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-Da3P080T.js";import"./tokens.style-Dwr4YKnv.js";import"./transitional-styles-9whFD-yV.js";import"./watch-tFciLXSI.js";import"./query-p8xgzTDt.js";import"./class-map-BBGuaYF3.js";import"./directive-Ctav8iJK.js";import"./icon-jzQ8K1tO.js";const E={title:"Docs/Layout/Mask",component:"gds-mask",tags:["autodocs"]},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...d,render:r=>n`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex display="flex" gap="0" flex-direction="column" align-items="stretch">
          <gds-container position="relative" border-radius="s" overflow="hidden">
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
          <gds-flex flex-direction="column" padding="s{xs} m{l} l{l}" align-items="flex-start" gap="l">
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l"> Sector by sector. Industry by industry. </gds-text>
              <gds-text tag="p"> Together with our clients, we're accelerating the sustainable transition. </gds-text>
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
          <gds-mask mask-image="top" background-color="tertiary/0.6" position="absolute">
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
                <gds-text font-size="body-m"> Promoting Eco-Friendly Solutions </gds-text>
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
  `};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex display="flex" gap="0" flex-direction="column" align-items="stretch">
          <gds-container position="relative" border-radius="s" overflow="hidden">
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
          <gds-flex flex-direction="column" padding="s{xs} m{l} l{l}" align-items="flex-start" gap="l">
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l"> Sector by sector. Industry by industry. </gds-text>
              <gds-text tag="p"> Together with our clients, we're accelerating the sustainable transition. </gds-text>
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
          <gds-mask mask-image="top" background-color="tertiary/0.6" position="absolute">
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
                <gds-text font-size="body-m"> Promoting Eco-Friendly Solutions </gds-text>
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
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const L=["Card"];export{t as Card,L as __namedExportsOrder,E as default};
