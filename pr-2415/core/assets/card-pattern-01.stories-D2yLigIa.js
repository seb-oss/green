import{x as e}from"./lit-element-Bx14lxc-.js";import{a as N}from"./argTableProps-qLbOTfTw.js";import"./card-pattern-01-TRyTNeJz.js";import"./button-C158i41m.js";import"./div-DjXqS0Po.js";import"./chevron-right-C22KveG6.js";import"./arrow-right-HQIFI3x0.js";import"./text-4R64gHH_.js";import"./link-DXd49q1h.js";import"./divider-CoVHlSqD.js";import"./custom-elements-BJEwZ9J0.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BcVhf7GG.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./img.component-BgNQb3sW.js";import"./props-link-CDn2X3ta.js";import"./card-linked.component-CL2OFB2C.js";import"./card.component-CxdVhKxM.js";import"./div.component-B2jkWbJ3.js";import"./flex.component-Ch_D9mFT.js";import"./chain-link-B5E7NdkP.js";import"./icon-BL_lI3bf.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./button.component-CymCYp3R.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./chevron-right.component-DwViLg7g.js";import"./default-typography.styles-CqiDF2RS.js";const ue={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...N("gds-card-pattern-01"),appearance:{control:"select",options:["neutral","outlined","plain"],description:"Visual style variant of the card",table:{defaultValue:{summary:"neutral"}}},aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"landscape"}}},size:{control:"select",options:["small","large"],description:"Content padding size",table:{defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`Features:
- Linked and non-linked variants
- Header with media or custom content
- Configurable media aspect ratio
- Optional footer with actions
- Three appearance styles
- Two content size options

Slots:
- header: Custom header content
- footer: Action items (buttons, links)`}}}},i={parameters:{docs:{description:{story:"Default card implementation showcasing basic usage."}}}},t={render:()=>e`
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
  `},n={...i,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Linked card variations showing different footer configurations."}}}},a={...i,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Non-linked cards with custom footer content."}}}},s={...i,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Different visual appearances of the card."}}}},o={...i,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Different content padding sizes."}}}};var d,c,p,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`Media Variations
Shows different media aspect ratios and responsive image handling`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var h,u,m,f,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`Header Variations
Demonstrates different header configurations:
- No header
- With media
- Custom header content`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var x,k,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,w,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var j,M,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var z,D,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const me=["Media","Headers","LinkedCardFooters","NonLinkedCustomFooter","Appearances","Sizes"];export{s as Appearances,r as Headers,n as LinkedCardFooters,t as Media,a as NonLinkedCustomFooter,o as Sizes,me as __namedExportsOrder,ue as default};
