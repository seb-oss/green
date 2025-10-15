import{x as e}from"./lit-element-Bx14lxc-.js";import{a as T}from"./argTableProps-DsjGqQaP.js";import"./card-pattern-01-TRyTNeJz.js";import"./button-C158i41m.js";import"./div-DjXqS0Po.js";import"./flex-B_1O2oI3.js";import"./chevron-right-C22KveG6.js";import"./arrow-right-HQIFI3x0.js";import"./text-4R64gHH_.js";import"./link-DXd49q1h.js";import"./divider-CoVHlSqD.js";import"./custom-elements-ChwVcDrW.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BcVhf7GG.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./img.component-BgNQb3sW.js";import"./props-link-CDn2X3ta.js";import"./card-linked.component-CL2OFB2C.js";import"./card.component-CxdVhKxM.js";import"./div.component-B2jkWbJ3.js";import"./flex.component-Ch_D9mFT.js";import"./chain-link-B5E7NdkP.js";import"./icon-BL_lI3bf.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./button.component-CymCYp3R.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./chevron-right.component-DwViLg7g.js";import"./default-typography.styles-CqiDF2RS.js";const ke={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...T("gds-card-pattern-01"),appearance:{control:"select",options:["neutral","outlined","plain"],description:"Visual style variant of the card",table:{defaultValue:{summary:"neutral"}}},aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"landscape"}}},size:{control:"select",options:["small","large"],description:"Content padding size",table:{defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`Features:
- Linked and non-linked variants
- Header with media or custom content
- Configurable media aspect ratio
- Optional footer with actions
- Three appearance styles
- Two content size options

Slots:
- header: Custom header content
- footer: Action items (buttons, links)`}}}},n={parameters:{docs:{description:{story:"Default card implementation showcasing basic usage."}}}},t={render:()=>e`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        title="Landscape Media"
        excerpt="16:9 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
        srcset="https://api.seb.io/assets/launch-hero.jpg 800w, https://api.seb.io/assets/launch-hero.jpg 1200w"
        sizes="(max-width: 800px) 100vw, 800px"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Square Media"
        excerpt="1:1 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>
    </gds-grid>
  `},r={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Text Only -->
      <gds-card-pattern-01
        title="Text Only"
        excerpt="No header content"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- With Media -->
      <gds-card-pattern-01
        title="With Media"
        excerpt="Default media header"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Custom Header -->
      <gds-card-pattern-01
        href="#"
        title="Custom Header"
        excerpt="Using header slot"
        appearance="plain"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
          aspect-ratio="16/9"
        >
          Custom Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  `},a={...n,render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Default Link Footer -->
      <gds-card-pattern-01
        title="Default Footer"
        excerpt="Card with default link in footer."
        href="#"
        label="Read More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <!-- Button with Icon -->
      <gds-card-pattern-01
        title="Icon Button"
        excerpt="Card with icon button in footer."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>

      <!-- No Footer -->
      <gds-card-pattern-01
        title="No Footer"
        excerpt="Card without any footer content."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Linked card variations showing different footer configurations."}}}},s={...n,render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary </gds-button>
        <gds-button slot="footer" rank="secondary"> Secondary </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          Custom Link
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-link>
      </gds-card-pattern-01>

      <!-- Combined -->
      <gds-card-pattern-01
        title="Combined Link and button"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Button </gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Non-linked cards with custom footer content."}}}},o={...n,render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        appearance="neutral"
        title="Neutral"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="outlined"
        title="Outlined"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="plain"
        title="Plain"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Different visual appearances of the card."}}}},d={...n,render:()=>e`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        size="large"
        title="Large Size"
        excerpt="Default content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        size="small"
        title="Small Size"
        excerpt="Reduced content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Different content padding sizes."}}}},i={...n,render:()=>e`
    <gds-grid columns="1; m{2}" gap="0">
      <gds-theme color-scheme="light">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Light</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Light mode"
            excerpt="Card on light mode"
            appearance="outlined"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>

      <gds-theme color-scheme="dark">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Dark</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Dark mode"
            appearance="outlined"
            excerpt="Card on dark mode"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>
    </gds-grid>
  `};var c,p,l,g,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        title="Landscape Media"
        excerpt="16:9 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
        srcset="https://api.seb.io/assets/launch-hero.jpg 800w, https://api.seb.io/assets/launch-hero.jpg 1200w"
        sizes="(max-width: 800px) 100vw, 800px"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Square Media"
        excerpt="1:1 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>
    </gds-grid>
  \`
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:`Media Variations
Shows different media aspect ratios and responsive image handling`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var m,u,f,b,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Text Only -->
      <gds-card-pattern-01
        title="Text Only"
        excerpt="No header content"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- With Media -->
      <gds-card-pattern-01
        title="With Media"
        excerpt="Default media header"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Custom Header -->
      <gds-card-pattern-01
        href="#"
        title="Custom Header"
        excerpt="Using header slot"
        appearance="plain"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
          aspect-ratio="16/9"
        >
          Custom Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  \`
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:`Header Variations
Demonstrates different header configurations:
- No header
- With media
- Custom header content`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var k,C,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Default Link Footer -->
      <gds-card-pattern-01
        title="Default Footer"
        excerpt="Card with default link in footer."
        href="#"
        label="Read More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <!-- Button with Icon -->
      <gds-card-pattern-01
        title="Icon Button"
        excerpt="Card with icon button in footer."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>

      <!-- No Footer -->
      <gds-card-pattern-01
        title="No Footer"
        excerpt="Card without any footer content."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Linked card variations showing different footer configurations.'
      }
    }
  }
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var y,j,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary </gds-button>
        <gds-button slot="footer" rank="secondary"> Secondary </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          Custom Link
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-link>
      </gds-card-pattern-01>

      <!-- Combined -->
      <gds-card-pattern-01
        title="Combined Link and button"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Button </gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Non-linked cards with custom footer content.'
      }
    }
  }
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var M,v,D;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        appearance="neutral"
        title="Neutral"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="outlined"
        title="Outlined"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="plain"
        title="Plain"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Different visual appearances of the card.'
      }
    }
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var S,z,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        size="large"
        title="Large Size"
        excerpt="Default content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        size="small"
        title="Small Size"
        excerpt="Reduced content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Different content padding sizes.'
      }
    }
  }
}`,...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var F,P,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="0">
      <gds-theme color-scheme="light">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Light</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Light mode"
            excerpt="Card on light mode"
            appearance="outlined"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>

      <gds-theme color-scheme="dark">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Dark</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Dark mode"
            appearance="outlined"
            excerpt="Card on dark mode"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>
    </gds-grid>
  \`
}`,...(B=(P=i.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Ce=["Media","Headers","LinkedCardFooters","NonLinkedCustomFooter","Appearances","Sizes","Theme"];export{o as Appearances,r as Headers,a as LinkedCardFooters,t as Media,s as NonLinkedCustomFooter,d as Sizes,i as Theme,Ce as __namedExportsOrder,ke as default};
