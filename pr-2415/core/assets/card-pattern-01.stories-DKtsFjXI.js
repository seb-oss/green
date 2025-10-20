import{x as e}from"./lit-element-Bx14lxc-.js";import{a as D}from"./argTableProps-C52mvbbi.js";import"./card-pattern-01-BjBwKPj-.js";import"./button-C158i41m.js";import"./div-DjXqS0Po.js";import"./flex-B_1O2oI3.js";import"./badge-V_H_Vzkc.js";import"./chevron-right-C22KveG6.js";import"./arrow-right-HQIFI3x0.js";import"./cloudy-sun-BHEGo7kX.js";import"./text-4R64gHH_.js";import"./link-DXd49q1h.js";import"./divider-CoVHlSqD.js";import"./custom-elements-DuLaC_-d.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BcVhf7GG.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./img.component-BgNQb3sW.js";import"./props-link-CDn2X3ta.js";import"./card-linked.component-CL2OFB2C.js";import"./card.component-CxdVhKxM.js";import"./div.component-B2jkWbJ3.js";import"./flex.component-Ch_D9mFT.js";import"./chain-link-B5E7NdkP.js";import"./icon-BL_lI3bf.js";import"./unsafe-html-CYO4avEf.js";import"./button.component-CymCYp3R.js";import"./query-p8xgzTDt.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./badge.component-BUn4oixQ.js";import"./chevron-right.component-DwViLg7g.js";import"./default-typography.styles-CqiDF2RS.js";const be={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...D("gds-card-pattern-01"),appearance:{control:"select",options:["neutral","outlined","plain"],description:"Visual style variant of the card",table:{defaultValue:{summary:"neutral"}}},aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"landscape"}}},size:{control:"select",options:["small","large"],description:"Content padding size",table:{defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`Features:
- Linked and non-linked variants
- Header with media or custom content
- Configurable media aspect ratio
- Optional footer with actions
- Three appearance styles
- Two content size options

Slots:
- header: Custom header content
- footer: Action items (buttons, links)`}}}},t={args:{href:"#",title:"Card Title",excerpt:"Card description with label in footer.",label:"Read more",src:"https://api.seb.io/assets/launch-hero.jpg","max-width":"320px"},parameters:{docs:{description:{story:"Linked card with media, title, excerpt, and footer label."},source:{code:`
<gds-card-pattern-01
  href="/path"
  title="Card Title"
  excerpt="Card description with label in footer."
  label="Read more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        `,language:"html",type:"code"}}}},n={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Basic Card -->
      <gds-card-pattern-01
        title="Basic Layout"
        excerpt="Simple card with title and description for text-focused content"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Media Card -->
      <gds-card-pattern-01
        title="Media Content"
        excerpt="Enhanced visual presentation with featured image"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Custom Header -->
      <gds-card-pattern-01
        href="#"
        title="Custom Header"
        excerpt="Flexible header slot for custom content when no media is present"
      >
        <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
- Basic: Text-only layout for simple content
- Media: Image-based presentation
- Custom: Slotted content when no media present
        `},source:{code:`
<!-- Basic Layout -->
<gds-card-pattern-01
  title="Basic Layout"
  excerpt="Simple card with title and description"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- Media Content -->
<gds-card-pattern-01
  title="Media Content"
  excerpt="Enhanced with featured image"
  src="image.jpg"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- Custom Header -->
<gds-card-pattern-01
  title="Custom Header"
  excerpt="Flexible header slot for custom content"
>
  <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
</gds-card-pattern-01>`,language:"html",type:"code"}}}},r={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
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
  `,parameters:{docs:{description:{story:`
- Landscape (16:9): Default for featured content
- Square (1:1): Alternative for specific layouts
        `},source:{code:`
<!-- Landscape with responsive images -->
<gds-card-pattern-01
  title="Landscape Media"
  excerpt="16:9 aspect ratio"
  src="image.jpg"
  aspect-ratio="landscape"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>

<!-- Square aspect ratio -->
<gds-card-pattern-01
  title="Square Media"
  excerpt="1:1 aspect ratio"
  src="image.jpg"
  aspect-ratio="square"
></gds-card-pattern-01>`,language:"html",type:"code"}}}},a={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Default Link Footer -->
      <gds-card-pattern-01
        title="Linked Card"
        excerpt="Entire card acts as a single clickable element, footer link is visual only"
        href="#"
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <!-- Decorative Button -->
      <gds-card-pattern-01
        title="Visual Indicator"
        excerpt="Demonstrates non-interactive button in footer when card is linked"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer" size="small" inert>
          <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>

      <!-- No Footer -->
      <gds-card-pattern-01
        title="Minimal Linked Card"
        excerpt="Linked card without footer elements for clean presentation"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
- Default: Non-interactive link indicator
- Decorative: Visual elements without interaction
- Clean: No footer elements

> Note: When href is present, all footer content is inert as the entire card becomes clickable
        `},source:{code:`
<!-- Default Link Footer -->
<gds-card-pattern-01
  title="Linked Card"
  excerpt="Entire card acts as a single clickable element, footer link is visual only"
  href="#"
  label="Learn more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>

<!-- Decorative Button -->
<gds-card-pattern-01
  title="Visual Indicator"
  excerpt="Demonstrates non-interactive button in footer when card is linked"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button rank="secondary" slot="footer" size="small" inert>
    <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
  </gds-button>
</gds-card-pattern-01>

<!-- No Footer -->
<gds-card-pattern-01
  title="Minimal Linked Card"
  excerpt="Linked card without footer elements for clean presentation"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        `,language:"html",type:"code"}}}},s={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Multiple Actions -->
      <gds-card-pattern-01
        title="Multiple actions"
        excerpt="Card with two interactive buttons for primary and secondary actions"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-pattern-01>

      <!-- Mixed Actions -->
      <gds-card-pattern-01
        title="Combined actions"
        excerpt="Card showing both button and link interactions in footer"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Action</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Navigate
        </gds-link>
      </gds-card-pattern-01>

      <!-- Single Action -->
      <gds-card-pattern-01
        title="Single link"
        excerpt="Card with one interactive link in footer for navigation"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          Navigate
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
- Multiple Buttons: For separate clickable actions
- Single link: For standalone navigation
- Combined: Mix of button and link interactions

> Note: Without href, each footer element is independently interactive
        `},source:{code:`
<!-- Multiple Actions -->
<gds-card-pattern-01
  title="Multiple actions"
  excerpt="Card with two interactive buttons for primary and secondary actions"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button slot="footer">Primary</gds-button>
  <gds-button slot="footer" rank="secondary">Secondary</gds-button>
</gds-card-pattern-01>

<!-- Mixed Actions -->
<gds-card-pattern-01
  title="Combined actions"
  excerpt="Card showing both button and link interactions in footer"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button slot="footer">Action</gds-button>
  <gds-link href="#" slot="footer" size="medium">
    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
    Navigate
  </gds-link>
</gds-card-pattern-01>

<!-- Single Action -->
<gds-card-pattern-01
  title="Single link"
  excerpt="Card with one interactive link in footer for navigation"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-link href="#" slot="footer" size="medium">
    Navigate
    <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
  </gds-link>
</gds-card-pattern-01>
        `,language:"html",type:"code"}}}},o={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Neutral 01"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        title="Neutral 02"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        outlined
        title="Neutral 02 · Outlined"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{source:{code:`
<!-- Neutral 01 (default) -->
<gds-card-pattern-01
  title="Neutral"
  excerpt="Default style"
></gds-card-pattern-01>

<!-- Neutral 02 -->
<gds-card-pattern-01
  variant="neutral-02"
  title="Outlined"
  excerpt="With border"
></gds-card-pattern-01>

<!-- Neutral 02 · Outlined -->
<gds-card-pattern-01
  variant="neutral-02"
  outlined
  title="Plain"
  excerpt="No border"
></gds-card-pattern-01>`,language:"html",type:"code"}}}},i={render:()=>e`
    <gds-grid columns="1; m{2}" gap="">
      <gds-theme color-scheme="light">
        <gds-flex flex-direction="column" gap="xl" padding="4xl">
          <gds-badge width="max-content">Light</gds-badge>
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
          level="1"
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
          border-radius="s"
        >
          <gds-badge width="max-content">Dark</gds-badge>
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
  `,parameters:{docs:{description:{story:"Cards automatically adapt to light and dark themes when wrapped in `gds-theme` provider."},source:{code:`
<!-- Light theme -->
<gds-theme color-scheme="light">
  <gds-card-pattern-01
    title="Light mode"
    excerpt="Card on light mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>`,language:"html",type:"code"}}}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    title: 'Card Title',
    excerpt: 'Card description with label in footer.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
    'max-width': '320px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Linked card with media, title, excerpt, and footer label.'
      },
      source: {
        code: \`
<gds-card-pattern-01
  href="/path"
  title="Card Title"
  excerpt="Card description with label in footer."
  label="Read more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        \`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Basic Card -->
      <gds-card-pattern-01
        title="Basic Layout"
        excerpt="Simple card with title and description for text-focused content"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Media Card -->
      <gds-card-pattern-01
        title="Media Content"
        excerpt="Enhanced visual presentation with featured image"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Custom Header -->
      <gds-card-pattern-01
        href="#"
        title="Custom Header"
        excerpt="Flexible header slot for custom content when no media is present"
      >
        <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Basic: Text-only layout for simple content
- Media: Image-based presentation
- Custom: Slotted content when no media present
        \`
      },
      source: {
        code: \`
<!-- Basic Layout -->
<gds-card-pattern-01
  title="Basic Layout"
  excerpt="Simple card with title and description"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- Media Content -->
<gds-card-pattern-01
  title="Media Content"
  excerpt="Enhanced with featured image"
  src="image.jpg"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- Custom Header -->
<gds-card-pattern-01
  title="Custom Header"
  excerpt="Flexible header slot for custom content"
>
  <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
</gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
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
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Landscape (16:9): Default for featured content
- Square (1:1): Alternative for specific layouts
        \`
      },
      source: {
        code: \`
<!-- Landscape with responsive images -->
<gds-card-pattern-01
  title="Landscape Media"
  excerpt="16:9 aspect ratio"
  src="image.jpg"
  aspect-ratio="landscape"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>

<!-- Square aspect ratio -->
<gds-card-pattern-01
  title="Square Media"
  excerpt="1:1 aspect ratio"
  src="image.jpg"
  aspect-ratio="square"
></gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,x,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Default Link Footer -->
      <gds-card-pattern-01
        title="Linked Card"
        excerpt="Entire card acts as a single clickable element, footer link is visual only"
        href="#"
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <!-- Decorative Button -->
      <gds-card-pattern-01
        title="Visual Indicator"
        excerpt="Demonstrates non-interactive button in footer when card is linked"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer" size="small" inert>
          <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>

      <!-- No Footer -->
      <gds-card-pattern-01
        title="Minimal Linked Card"
        excerpt="Linked card without footer elements for clean presentation"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Default: Non-interactive link indicator
- Decorative: Visual elements without interaction
- Clean: No footer elements

> Note: When href is present, all footer content is inert as the entire card becomes clickable
        \`
      },
      source: {
        code: \`
<!-- Default Link Footer -->
<gds-card-pattern-01
  title="Linked Card"
  excerpt="Entire card acts as a single clickable element, footer link is visual only"
  href="#"
  label="Learn more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>

<!-- Decorative Button -->
<gds-card-pattern-01
  title="Visual Indicator"
  excerpt="Demonstrates non-interactive button in footer when card is linked"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button rank="secondary" slot="footer" size="small" inert>
    <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
  </gds-button>
</gds-card-pattern-01>

<!-- No Footer -->
<gds-card-pattern-01
  title="Minimal Linked Card"
  excerpt="Linked card without footer elements for clean presentation"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        \`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,w,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Multiple Actions -->
      <gds-card-pattern-01
        title="Multiple actions"
        excerpt="Card with two interactive buttons for primary and secondary actions"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-pattern-01>

      <!-- Mixed Actions -->
      <gds-card-pattern-01
        title="Combined actions"
        excerpt="Card showing both button and link interactions in footer"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Action</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Navigate
        </gds-link>
      </gds-card-pattern-01>

      <!-- Single Action -->
      <gds-card-pattern-01
        title="Single link"
        excerpt="Card with one interactive link in footer for navigation"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          Navigate
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Multiple Buttons: For separate clickable actions
- Single link: For standalone navigation
- Combined: Mix of button and link interactions

> Note: Without href, each footer element is independently interactive
        \`
      },
      source: {
        code: \`
<!-- Multiple Actions -->
<gds-card-pattern-01
  title="Multiple actions"
  excerpt="Card with two interactive buttons for primary and secondary actions"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button slot="footer">Primary</gds-button>
  <gds-button slot="footer" rank="secondary">Secondary</gds-button>
</gds-card-pattern-01>

<!-- Mixed Actions -->
<gds-card-pattern-01
  title="Combined actions"
  excerpt="Card showing both button and link interactions in footer"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-button slot="footer">Action</gds-button>
  <gds-link href="#" slot="footer" size="medium">
    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
    Navigate
  </gds-link>
</gds-card-pattern-01>

<!-- Single Action -->
<gds-card-pattern-01
  title="Single link"
  excerpt="Card with one interactive link in footer for navigation"
  src="https://api.seb.io/assets/launch-hero.jpg"
>
  <gds-link href="#" slot="footer" size="medium">
    Navigate
    <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
  </gds-link>
</gds-card-pattern-01>
        \`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var C,L,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Neutral 01"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        title="Neutral 02"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        outlined
        title="Neutral 02 · Outlined"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      source: {
        code: \`
<!-- Neutral 01 (default) -->
<gds-card-pattern-01
  title="Neutral"
  excerpt="Default style"
></gds-card-pattern-01>

<!-- Neutral 02 -->
<gds-card-pattern-01
  variant="neutral-02"
  title="Outlined"
  excerpt="With border"
></gds-card-pattern-01>

<!-- Neutral 02 · Outlined -->
<gds-card-pattern-01
  variant="neutral-02"
  outlined
  title="Plain"
  excerpt="No border"
></gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,S,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="">
      <gds-theme color-scheme="light">
        <gds-flex flex-direction="column" gap="xl" padding="4xl">
          <gds-badge width="max-content">Light</gds-badge>
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
          level="1"
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
          border-radius="s"
        >
          <gds-badge width="max-content">Dark</gds-badge>
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
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Cards automatically adapt to light and dark themes when wrapped in \`gds-theme\` provider.'
      },
      source: {
        code: \`
<!-- Light theme -->
<gds-theme color-scheme="light">
  <gds-card-pattern-01
    title="Light mode"
    excerpt="Card on light mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const xe=["Default","Header","Media","Footer","Actions","Variant","Theme"];export{s as Actions,t as Default,a as Footer,n as Header,r as Media,i as Theme,o as Variant,xe as __namedExportsOrder,be as default};
