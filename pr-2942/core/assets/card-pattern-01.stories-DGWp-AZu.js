import{b as e}from"./iframe-BFOz556-.js";import{a as l}from"./argTableProps-B4rPkO2R.js";import{G as p}from"./card-pattern-01.component-CJJNdSED.js";import"./div-C9lsGsKB.js";import"./flex--w2-iAi1.js";import"./badge-C5ou8q5u.js";import"./chevron-right-CE_EI2fl.js";import"./arrow-right-ChYo2PoW.js";import"./cloudy-sun-Cdylc6sR.js";import"./cross-large-Cb9xXkMF.js";import"./text-CvfIS86a.js";import"./link-CbmK7xJ2.js";import"./divider-DGrJgACq.js";import"./preload-helper-PPVm8Dsz.js";import"./card-linked.component-CW0oy80v.js";import"./props-link-DMfmuvxV.js";import"./card.component-FI8rcXIN.js";import"./flex.component-Bks9EXN7.js";import"./formatted-date.component-DwZ96Tjy.js";import"./formatted-text-DhAgVi-d.js";import"./text.component-Do2fdDQH.js";import"./default-typography.styles-Y2Emtnpw.js";import"./chain-link-B8y5aFv5.js";import"./icon.component-eZxdIJ4v.js";import"./img.component-Czyxywrh.js";import"./badge.component-Bzs2GNr3.js";import"./chevron-right.component-CRw3y1Xc.js";import"./arrow-right.component-BbTedfsQ.js";import"./cloudy-sun.component-OZO5CYxK.js";import"./cross-large.component-DeCkdSUF.js";p.define();const V={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...l("gds-card-pattern-01"),aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for the image",table:{defaultValue:{summary:"landscape"}}}},parameters:{docs:{description:{component:`Features:
- Linked and non-linked variants
- Header with image or custom content
- Configurable image aspect ratio
- Optional footer with actions
- Explicit variant tokens

Slots:
- media: Custom media content (used when no src image is set)
- header: Custom header content
- footer: Action items (buttons, links)`}}}},t={args:{href:"#",title:"Card Title",excerpt:"Card description with label in footer.",label:"Read more",src:"https://api.seb.io/assets/launch-hero.jpg","max-width":"320px"},parameters:{docs:{description:{story:"Linked card with image, title, excerpt, and footer label."},source:{code:`
<gds-card-pattern-01
  href="/path"
  title="Card Title"
  excerpt="Card description with label in footer."
  label="Read more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        `,language:"html",type:"code"}}}},n={render:()=>e`
    <gds-flex
      flex-direction="column"
      gap="4xl"
      max-width="680px"
      margin="0 auto"
    >
      <gds-grid columns="1; m{1}" gap="xl">
        <!-- Basic Card -->
        <gds-card-pattern-01
          title="Basic Layout"
          excerpt="Simple card with title and description for text-focused content"
          href="#"
        ></gds-card-pattern-01>

        <!-- Custom Header -->
        <gds-card-pattern-01
          href="#"
          title="Custom Header"
          excerpt="Flexible header slot for custom content when no image is present"
        >
          <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
        </gds-card-pattern-01>
      </gds-grid>
      <gds-grid columns="1; m{2}" gap="xl">
        <!-- Image Card -->
        <gds-card-pattern-01
          title="Image Content"
          excerpt="Enhanced visual presentation with featured image"
          src="https://api.seb.io/assets/launch-hero.jpg"
          href="#"
        ></gds-card-pattern-01>

        <!-- Media Slot -->
        <gds-card-pattern-01
          href="#"
          title="Media Slot"
          excerpt="Custom content rendered in the media area when no image is set"
        >
          <gds-video
            src="https://api.seb.io/components/video/video.mp4"
            slot="media"
            ratio="16/9"
            border-radius="xs"
            autoplay
            playsinline
            loop
            muted
          ></gds-video>
        </gds-card-pattern-01>
      </gds-grid>
    </gds-flex>
  `,parameters:{docs:{description:{story:`
- Basic: Text-only layout for simple content
- Image: Image-based presentation
- Custom: Slotted content when no image present
- Media Slot: Slotted custom content in the media area
        `},source:{code:`
<!-- Basic Layout -->
<gds-card-pattern-01
  title="Basic Layout"
  excerpt="Simple card with title and description"
  href="#"
  label="Learn more"
></gds-card-pattern-01>

<!-- Image Content -->
<gds-card-pattern-01
  title="Image Content"
  excerpt="Enhanced with featured image"
  src="image.jpg"
  href="#"
  label="Learn more"
></gds-card-pattern-01>

<!-- Custom Header -->
<gds-card-pattern-01
  title="Custom Header"
  excerpt="Flexible header slot for custom content"
>
  <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
</gds-card-pattern-01>

<!-- Media Slot -->
<gds-card-pattern-01
  title="Media Slot"
  excerpt="Custom content rendered in the media area"
>
  <gds-flex
    slot="media"
    align-items="center"
    justify-content="center"
    width="100%"
    height="100%"
    background="neutral-02"
    border-radius="xs"
  >
    <gds-icon-cross-large size="xl"></gds-icon-cross-large>
  </gds-flex>
</gds-card-pattern-01>`,language:"html",type:"code"}}}},a={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Landscape image"
        alt="The image alt"
        excerpt="16:9 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
        srcset="https://api.seb.io/assets/launch-hero.jpg 800w, https://api.seb.io/assets/launch-hero.jpg 1200w"
        sizes="(max-width: 800px) 100vw, 800px"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Square image"
        alt="The image alt"
        excerpt="1:1 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
- Landscape (16:9): Default for featured content
- Square (1:1): Alternative for specific layouts
- Responsive images with srcset/sizes
- Accessibility: Alt text inherits from card's alt property
- Performance: Supports loading="lazy" and decoding="async" attributes

Note: Image properties can be set directly on the card:

\`\`\`html
<gds-card-pattern-01
  src="image.jpg"
  alt="Descriptive text"
  loading="lazy"
  decoding="async"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>
\`\`\`
        `},source:{code:`
<!-- Landscape with responsive images -->
<gds-card-pattern-01
  title="Landscape image"
  alt="The image alt"
  excerpt="16:9 aspect ratio"
  src="image.jpg"
  aspect-ratio="landscape"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>

<!-- Square aspect ratio -->
<gds-card-pattern-01
  title="Square image"
  alt="The image alt"
  excerpt="1:1 aspect ratio"
  src="image.jpg"
  aspect-ratio="square"
></gds-card-pattern-01>`,language:"html",type:"code"}}}},r={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Custom heading level -->
      <gds-card-pattern-01
        title="Heading Level"
        excerpt="Using h3 tag for accessibility"
        tag="h3"
      ></gds-card-pattern-01>

      <!-- Title only -->
      <gds-card-pattern-01
        title="Without Excerpt"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Long excerpt with custom label -->
      <gds-card-pattern-01
        title="With Excerpt"
        excerpt="Long description text that demonstrates the three line limit with automatic truncation using ellipsis when content exceeds the available space"
        href="#"
        label="View details"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
- Title tag: Supports h1-h6 (default: h2) for proper document structure, it does not affect the font size
- Excerpt: Optional description with 3-line limit and ellipsis
- Label: Custom text for linked card's footer (requires href)

\`\`\`html
<!-- Custom heading level -->
<gds-card-pattern-01
  title="Heading"
  tag="h3"
></gds-card-pattern-01>

<!-- Without excerpt -->
<gds-card-pattern-01
  title="Title Only"
  href="#"
></gds-card-pattern-01>

<!-- With excerpt and custom label -->
<gds-card-pattern-01
  title="Title"
  excerpt="Description with three line limit"
  href="#"
  label="View Details"
></gds-card-pattern-01>
\`\`\`
        `},source:{code:`
<!-- Custom heading level -->
<gds-card-pattern-01
  title="Heading Level"
  excerpt="Using h3 tag for accessibility"
  tag="h3"
></gds-card-pattern-01>

<!-- Title only -->
<gds-card-pattern-01
  title="Without Excerpt"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>

<!-- Long excerpt with custom label -->
<gds-card-pattern-01
  title="With Excerpt"
  excerpt="Long description text that demonstrates the three line limit with automatic truncation using ellipsis when content exceeds the available space"
  href="#"
  label="View Details"
></gds-card-pattern-01>`,language:"html",type:"code"}}}},s={render:()=>e`
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
        `,language:"html",type:"code"}}}},i={render:()=>e`
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
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="s">
        <gds-text>Linked</gds-text>
        <gds-grid columns="1; m{4}" gap="xl">
          <gds-card-pattern-01
            title="Neutral 01"
            excerpt="Default card appearance"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02"
            title="Neutral 02"
            excerpt="Neutral surface without border emphasis"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02-outlined"
            title="Neutral 02 · Outlined"
            excerpt="Neutral surface with border emphasis"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-grid>
      </gds-flex>
      <gds-divider color="neutral-02"></gds-divider>
      <gds-flex flex-direction="column" gap="s">
        <gds-text>Static</gds-text>
        <gds-grid columns="1; m{4}" gap="xl">
          <gds-card-pattern-01
            title="Neutral 01"
            excerpt="Default card appearance"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02"
            title="Neutral 02"
            excerpt="Neutral surface without border emphasis"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02-outlined"
            title="Neutral 02 · Outlined"
            excerpt="Neutral surface with border emphasis"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-grid>
      </gds-flex>
    </gds-flex>
  `,parameters:{docs:{source:{code:`
<!-- Neutral 01 (default) -->
<gds-card-pattern-01
  title="Neutral 01"
  excerpt="Default card appearance"
></gds-card-pattern-01>

<!-- Neutral 02 -->
<gds-card-pattern-01
  variant="neutral-02"
  title="Neutral 02"
  excerpt="Neutral surface without border emphasis"
></gds-card-pattern-01>

<!-- Neutral 02 Outlined -->
<gds-card-pattern-01
  variant="neutral-02-outlined"
  title="Neutral 02 · Outlined"
  excerpt="Neutral surface with border emphasis"
></gds-card-pattern-01>`,language:"html",type:"code"}}}},d={render:()=>e`
    <gds-grid columns="1; m{2}" padding="xl">
      <gds-theme color-scheme="light">
        <gds-flex
          level="1"
          flex-direction="column"
          gap="xl"
          padding="4xl"
          background="neutral-01"
        >
          <gds-badge width="max-content">Light</gds-badge>
          <gds-card-pattern-01
            title="Light mode"
            excerpt="Card on light mode"
            href="#"
            label="Learn more"
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
            excerpt="Card on dark mode"
            href="#"
            label="Learn more"
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
    variant="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    variant="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>`,language:"html",type:"code"}}}},c={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Components"
        date="2025-11-04T10:22:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Accessibility"
        date="2025-06-30T16:59:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Tokens"
        date="2024-03-12T13:01:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
Metadata attributes provide contextual information and help organize card content.

**Category:** Classifies the content type for filtering and organization.

**Date:** Publication date in ISO 8601 format. Formatted using \`gds-formatted-date\` component with configurable format and locale.

**Date Format:** Controls the date and time display format (default: \`dateLong\`)

**Locale:** Controls the language and regional formatting (default: \`en-GB\`)
        `},source:{code:`
<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  src="image.jpg"
  category="Components"
  date="2025-11-04T10:22:00"
  href="#"
  label="Read more"
></gds-card-pattern-01>
        `,language:"html",type:"code"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        story: 'Linked card with image, title, excerpt, and footer label.'
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex
      flex-direction="column"
      gap="4xl"
      max-width="680px"
      margin="0 auto"
    >
      <gds-grid columns="1; m{1}" gap="xl">
        <!-- Basic Card -->
        <gds-card-pattern-01
          title="Basic Layout"
          excerpt="Simple card with title and description for text-focused content"
          href="#"
        ></gds-card-pattern-01>

        <!-- Custom Header -->
        <gds-card-pattern-01
          href="#"
          title="Custom Header"
          excerpt="Flexible header slot for custom content when no image is present"
        >
          <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
        </gds-card-pattern-01>
      </gds-grid>
      <gds-grid columns="1; m{2}" gap="xl">
        <!-- Image Card -->
        <gds-card-pattern-01
          title="Image Content"
          excerpt="Enhanced visual presentation with featured image"
          src="https://api.seb.io/assets/launch-hero.jpg"
          href="#"
        ></gds-card-pattern-01>

        <!-- Media Slot -->
        <gds-card-pattern-01
          href="#"
          title="Media Slot"
          excerpt="Custom content rendered in the media area when no image is set"
        >
          <gds-video
            src="https://api.seb.io/components/video/video.mp4"
            slot="media"
            ratio="16/9"
            border-radius="xs"
            autoplay
            playsinline
            loop
            muted
          ></gds-video>
        </gds-card-pattern-01>
      </gds-grid>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Basic: Text-only layout for simple content
- Image: Image-based presentation
- Custom: Slotted content when no image present
- Media Slot: Slotted custom content in the media area
        \`
      },
      source: {
        code: \`
<!-- Basic Layout -->
<gds-card-pattern-01
  title="Basic Layout"
  excerpt="Simple card with title and description"
  href="#"
  label="Learn more"
></gds-card-pattern-01>

<!-- Image Content -->
<gds-card-pattern-01
  title="Image Content"
  excerpt="Enhanced with featured image"
  src="image.jpg"
  href="#"
  label="Learn more"
></gds-card-pattern-01>

<!-- Custom Header -->
<gds-card-pattern-01
  title="Custom Header"
  excerpt="Flexible header slot for custom content"
>
  <gds-icon-cloudy-sun size="xl" slot="header"></gds-icon-cloudy-sun>
</gds-card-pattern-01>

<!-- Media Slot -->
<gds-card-pattern-01
  title="Media Slot"
  excerpt="Custom content rendered in the media area"
>
  <gds-flex
    slot="media"
    align-items="center"
    justify-content="center"
    width="100%"
    height="100%"
    background="neutral-02"
    border-radius="xs"
  >
    <gds-icon-cross-large size="xl"></gds-icon-cross-large>
  </gds-flex>
</gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Landscape image"
        alt="The image alt"
        excerpt="16:9 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
        srcset="https://api.seb.io/assets/launch-hero.jpg 800w, https://api.seb.io/assets/launch-hero.jpg 1200w"
        sizes="(max-width: 800px) 100vw, 800px"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Square image"
        alt="The image alt"
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
- Responsive images with srcset/sizes
- Accessibility: Alt text inherits from card's alt property
- Performance: Supports loading="lazy" and decoding="async" attributes

Note: Image properties can be set directly on the card:

\\\`\\\`\\\`html
<gds-card-pattern-01
  src="image.jpg"
  alt="Descriptive text"
  loading="lazy"
  decoding="async"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>
\\\`\\\`\\\`
        \`
      },
      source: {
        code: \`
<!-- Landscape with responsive images -->
<gds-card-pattern-01
  title="Landscape image"
  alt="The image alt"
  excerpt="16:9 aspect ratio"
  src="image.jpg"
  aspect-ratio="landscape"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>

<!-- Square aspect ratio -->
<gds-card-pattern-01
  title="Square image"
  alt="The image alt"
  excerpt="1:1 aspect ratio"
  src="image.jpg"
  aspect-ratio="square"
></gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Custom heading level -->
      <gds-card-pattern-01
        title="Heading Level"
        excerpt="Using h3 tag for accessibility"
        tag="h3"
      ></gds-card-pattern-01>

      <!-- Title only -->
      <gds-card-pattern-01
        title="Without Excerpt"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Long excerpt with custom label -->
      <gds-card-pattern-01
        title="With Excerpt"
        excerpt="Long description text that demonstrates the three line limit with automatic truncation using ellipsis when content exceeds the available space"
        href="#"
        label="View details"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Title tag: Supports h1-h6 (default: h2) for proper document structure, it does not affect the font size
- Excerpt: Optional description with 3-line limit and ellipsis
- Label: Custom text for linked card's footer (requires href)

\\\`\\\`\\\`html
<!-- Custom heading level -->
<gds-card-pattern-01
  title="Heading"
  tag="h3"
></gds-card-pattern-01>

<!-- Without excerpt -->
<gds-card-pattern-01
  title="Title Only"
  href="#"
></gds-card-pattern-01>

<!-- With excerpt and custom label -->
<gds-card-pattern-01
  title="Title"
  excerpt="Description with three line limit"
  href="#"
  label="View Details"
></gds-card-pattern-01>
\\\`\\\`\\\`
        \`
      },
      source: {
        code: \`
<!-- Custom heading level -->
<gds-card-pattern-01
  title="Heading Level"
  excerpt="Using h3 tag for accessibility"
  tag="h3"
></gds-card-pattern-01>

<!-- Title only -->
<gds-card-pattern-01
  title="Without Excerpt"
  href="#"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>

<!-- Long excerpt with custom label -->
<gds-card-pattern-01
  title="With Excerpt"
  excerpt="Long description text that demonstrates the three line limit with automatic truncation using ellipsis when content exceeds the available space"
  href="#"
  label="View Details"
></gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="4xl">
      <gds-flex flex-direction="column" gap="s">
        <gds-text>Linked</gds-text>
        <gds-grid columns="1; m{4}" gap="xl">
          <gds-card-pattern-01
            title="Neutral 01"
            excerpt="Default card appearance"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02"
            title="Neutral 02"
            excerpt="Neutral surface without border emphasis"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02-outlined"
            title="Neutral 02 · Outlined"
            excerpt="Neutral surface with border emphasis"
            href="#"
            label="Learn more"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-grid>
      </gds-flex>
      <gds-divider color="neutral-02"></gds-divider>
      <gds-flex flex-direction="column" gap="s">
        <gds-text>Static</gds-text>
        <gds-grid columns="1; m{4}" gap="xl">
          <gds-card-pattern-01
            title="Neutral 01"
            excerpt="Default card appearance"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02"
            title="Neutral 02"
            excerpt="Neutral surface without border emphasis"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>

          <gds-card-pattern-01
            variant="neutral-02-outlined"
            title="Neutral 02 · Outlined"
            excerpt="Neutral surface with border emphasis"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-grid>
      </gds-flex>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      source: {
        code: \`
<!-- Neutral 01 (default) -->
<gds-card-pattern-01
  title="Neutral 01"
  excerpt="Default card appearance"
></gds-card-pattern-01>

<!-- Neutral 02 -->
<gds-card-pattern-01
  variant="neutral-02"
  title="Neutral 02"
  excerpt="Neutral surface without border emphasis"
></gds-card-pattern-01>

<!-- Neutral 02 Outlined -->
<gds-card-pattern-01
  variant="neutral-02-outlined"
  title="Neutral 02 · Outlined"
  excerpt="Neutral surface with border emphasis"
></gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{2}" padding="xl">
      <gds-theme color-scheme="light">
        <gds-flex
          level="1"
          flex-direction="column"
          gap="xl"
          padding="4xl"
          background="neutral-01"
        >
          <gds-badge width="max-content">Light</gds-badge>
          <gds-card-pattern-01
            title="Light mode"
            excerpt="Card on light mode"
            href="#"
            label="Learn more"
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
            excerpt="Card on dark mode"
            href="#"
            label="Learn more"
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
    variant="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    variant="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Components"
        date="2025-11-04T10:22:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Accessibility"
        date="2025-06-30T16:59:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Tokens"
        date="2024-03-12T13:01:00"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
Metadata attributes provide contextual information and help organize card content.

**Category:** Classifies the content type for filtering and organization.

**Date:** Publication date in ISO 8601 format. Formatted using \\\`gds-formatted-date\\\` component with configurable format and locale.

**Date Format:** Controls the date and time display format (default: \\\`dateLong\\\`)

**Locale:** Controls the language and regional formatting (default: \\\`en-GB\\\`)
        \`
      },
      source: {
        code: \`
<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  src="image.jpg"
  category="Components"
  date="2025-11-04T10:22:00"
  href="#"
  label="Read more"
></gds-card-pattern-01>
        \`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const P=["Default","Header","Image","Content","Footer","Actions","Variant","Theme","Metadata"];export{i as Actions,r as Content,t as Default,s as Footer,n as Header,a as Image,c as Metadata,d as Theme,o as Variant,P as __namedExportsOrder,V as default};
