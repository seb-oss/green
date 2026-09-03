import{b as e}from"./iframe-Db8hCJ7u.js";import{a as g}from"./argTableProps-CvYua6PL.js";import{G as h}from"./card-pattern-01.component-B-xnf-lW.js";import"./div-CzNcABvM.js";import"./flex-DPWEKlvy.js";import"./badge-CUekbCL2.js";import"./chevron-right-DCQsj68L.js";import"./arrow-right-BB4NaOzc.js";import"./cloudy-sun-BWKKEzaZ.js";import"./cross-large-NTrgYV5r.js";import"./text-BpYpbPBo.js";import"./link-BTbjM2OB.js";import"./divider-BqrwFTFL.js";import"./video-EFW6vKaU.js";import"./card-de_74OEq.js";import"./preload-helper-PPVm8Dsz.js";import"./card-linked.component-BqV0hMFC.js";import"./props-link-C0pMpn4B.js";import"./card.component-CTitqTAp.js";import"./flex.component-m6iZ_CDd.js";import"./formatted-date.component-DNMBVrpU.js";import"./formatted-text-kvIEMBAG.js";import"./text.component-CxRzcGJW.js";import"./default-typography.styles-CKREnxVV.js";import"./chain-link-D0mDRsop.js";import"./icon.component-lwo9_8JP.js";import"./img.component-B5plVBoL.js";import"./badge.component-BE9sjGMb.js";import"./chevron-right.component-Cp-lCjXG.js";import"./arrow-right.component-8mUcGqa0.js";import"./cloudy-sun.component-ZAvK5jQh.js";import"./cross-large.component-Bv6okMRE.js";import"./video.component-CZt0ta-2.js";h.define();const _={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...g("gds-card-pattern-01"),aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for the image",table:{defaultValue:{summary:"landscape"}}}},parameters:{docs:{description:{component:`Features:
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
    <gds-flex flex-direction="column" gap="xl" max-width="800px">
      <!-- Basic horizontal: title + excerpt only, no media -->
      <gds-card-pattern-01
        horizontal
        title="Basic horizontal"
        excerpt="Media area is absent — just title and excerpt side by side in a clean layout."
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Horizontal with image -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with image"
        excerpt="The image sits to the left of the content on larger screens."
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Horizontal with video in the media slot -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with video"
        excerpt="A video is rendered in the media slot to the left, content sits to the right."
        href="#"
        label="Watch now"
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

      <!-- Horizontal with icon in header slot -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with icon header"
        excerpt="Header slot content is placed on the left in horizontal mode. Footer actions remain fully interactive."
      >
        <gds-card
          slot="header"
          variant="neutral-02"
          width="100%"
          height="100%"
          display="flex"
          align-items="center"
          justify-content="center"
          border-radius="xs"
        >
          <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
        </gds-card>
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-pattern-01>
    </gds-flex>
  `,parameters:{docs:{description:{story:"The `horizontal` attribute places the media to the left and content to the right. On screens narrower than 600 px the layout reverts to the default stacked arrangement."},source:{code:`
<!-- Basic horizontal -->
<gds-card-pattern-01
  horizontal
  title="Basic horizontal"
  excerpt="Just title and excerpt, no media."
  href="#"
  label="Read more"
></gds-card-pattern-01>

<!-- Horizontal with image -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with image"
  excerpt="Image on the left, content on the right."
  src="image.jpg"
  href="#"
  label="Read more"
></gds-card-pattern-01>

<!-- Horizontal with video -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with video"
  excerpt="Video rendered in the media slot."
  href="#"
  label="Watch now"
>
  <gds-video
    src="video.mp4"
    slot="media"
    ratio="16/9"
    border-radius="xs"
    autoplay
    playsinline
    loop
    muted
  ></gds-video>
</gds-card-pattern-01>

<!-- Horizontal with icon in header slot -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with icon header"
  excerpt="Header slot renders on the left in horizontal mode."
>
  <gds-card
    slot="header"
    variant="neutral-02"
    width="100%"
    height="100%"
    display="flex"
    align-items="center"
    justify-content="center"
    border-radius="xs"
  >
    <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
  </gds-card>
  <gds-button slot="footer">Primary</gds-button>
  <gds-button slot="footer" rank="secondary">Secondary</gds-button>
</gds-card-pattern-01>`,language:"html",type:"code"}}}},l={render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        height="100%"
        title="Short title"
        excerpt="Brief text."
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        height="100%"
        title="A card with a longer title to demonstrate equal heights"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Action</gds-button>
        <gds-button slot="footer" rank="secondary">Details</gds-button>
      </gds-card-pattern-01>

      <gds-card-pattern-01
        height="100%"
        title="Medium title"
        excerpt="Some excerpt text for the third card."
      >
        <gds-card
          slot="header"
          variant="neutral-02"
          width="100%"
          height="auto"
          display="flex"
          align-items="center"
          justify-content="center"
          border-radius="xs"
          aspect-ratio="16/9"
        >
          <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
        </gds-card>
        <gds-button slot="footer">Learn more</gds-button>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:'Using `height="100%"` on each card inside a grid ensures all cards stretch to equal height regardless of content length.'}}}},p={render:()=>e`
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
    <gds-flex flex-direction="column" gap="xl" max-width="800px">
      <!-- Basic horizontal: title + excerpt only, no media -->
      <gds-card-pattern-01
        horizontal
        title="Basic horizontal"
        excerpt="Media area is absent — just title and excerpt side by side in a clean layout."
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Horizontal with image -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with image"
        excerpt="The image sits to the left of the content on larger screens."
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <!-- Horizontal with video in the media slot -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with video"
        excerpt="A video is rendered in the media slot to the left, content sits to the right."
        href="#"
        label="Watch now"
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

      <!-- Horizontal with icon in header slot -->
      <gds-card-pattern-01
        horizontal
        title="Horizontal with icon header"
        excerpt="Header slot content is placed on the left in horizontal mode. Footer actions remain fully interactive."
      >
        <gds-card
          slot="header"
          variant="neutral-02"
          width="100%"
          height="100%"
          display="flex"
          align-items="center"
          justify-content="center"
          border-radius="xs"
        >
          <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
        </gds-card>
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-pattern-01>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'The \`horizontal\` attribute places the media to the left and content to the right. On screens narrower than 600 px the layout reverts to the default stacked arrangement.'
      },
      source: {
        code: \`
<!-- Basic horizontal -->
<gds-card-pattern-01
  horizontal
  title="Basic horizontal"
  excerpt="Just title and excerpt, no media."
  href="#"
  label="Read more"
></gds-card-pattern-01>

<!-- Horizontal with image -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with image"
  excerpt="Image on the left, content on the right."
  src="image.jpg"
  href="#"
  label="Read more"
></gds-card-pattern-01>

<!-- Horizontal with video -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with video"
  excerpt="Video rendered in the media slot."
  href="#"
  label="Watch now"
>
  <gds-video
    src="video.mp4"
    slot="media"
    ratio="16/9"
    border-radius="xs"
    autoplay
    playsinline
    loop
    muted
  ></gds-video>
</gds-card-pattern-01>

<!-- Horizontal with icon in header slot -->
<gds-card-pattern-01
  horizontal
  title="Horizontal with icon header"
  excerpt="Header slot renders on the left in horizontal mode."
>
  <gds-card
    slot="header"
    variant="neutral-02"
    width="100%"
    height="100%"
    display="flex"
    align-items="center"
    justify-content="center"
    border-radius="xs"
  >
    <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
  </gds-card>
  <gds-button slot="footer">Primary</gds-button>
  <gds-button slot="footer" rank="secondary">Secondary</gds-button>
</gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        height="100%"
        title="Short title"
        excerpt="Brief text."
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Read more"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        height="100%"
        title="A card with a longer title to demonstrate equal heights"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Action</gds-button>
        <gds-button slot="footer" rank="secondary">Details</gds-button>
      </gds-card-pattern-01>

      <gds-card-pattern-01
        height="100%"
        title="Medium title"
        excerpt="Some excerpt text for the third card."
      >
        <gds-card
          slot="header"
          variant="neutral-02"
          width="100%"
          height="auto"
          display="flex"
          align-items="center"
          justify-content="center"
          border-radius="xs"
          aspect-ratio="16/9"
        >
          <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
        </gds-card>
        <gds-button slot="footer">Learn more</gds-button>
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Using \`height="100%"\` on each card inside a grid ensures all cards stretch to equal height regardless of content length.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const K=["Default","Header","Image","Content","Footer","Actions","Variant","Theme","Horizontal","GridFullHeight","Metadata"];export{i as Actions,r as Content,t as Default,s as Footer,l as GridFullHeight,n as Header,c as Horizontal,a as Image,p as Metadata,d as Theme,o as Variant,K as __namedExportsOrder,_ as default};
