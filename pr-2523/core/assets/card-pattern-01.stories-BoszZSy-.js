import{i as oe,x as p}from"./lit-element-Bx14lxc-.js";import{a as de}from"./argTableProps-C58ol04L.js";import{n as l}from"./Reflect-DJ7r0WLU.js";import{e as ce}from"./class-map-CXsQwv0r.js";import{o}from"./if-defined-CVqwUuaf.js";import{n as r}from"./when-BR7zwNJC.js";import{G as le}from"./card-linked.component-cURQvTYZ.js";import{G as pe}from"./card.component-DECYILLa.js";import{G as ge}from"./flex.component-BadMY1FQ.js";import{d as he}from"./date-time-formatter-CDCzkLUh.js";import{I as me}from"./chain-link-C9nZXOoH.js";import{w as ue,G as fe}from"./img.component-CI8_z0OC.js";import{G as be}from"./text-BKUjny80.js";import{h as t,g as xe,G as ye}from"./gds-element-DTROifYq.js";import{t as we}from"./tokens.style-CQAfIFlK.js";import{w as ve,b as ke,d as Ce}from"./declarative-layout-mixins-DFPXvh_g.js";import{w as Le}from"./props-link-q-kPEFpu.js";import"./button-ZXavVDm2.js";import"./div-CpSyvpKv.js";import"./flex-BpGRuM2l.js";import"./badge-CWu4bfFS.js";import"./chevron-right-DI2r2gUB.js";import"./arrow-right-GB-dKs3I.js";import"./cloudy-sun-CcURLxaK.js";import"./link-BRKRZrfV.js";import"./divider-28MpoDNs.js";import"./custom-elements-CY29-qw6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./div.component-CXtUXgO1.js";import"./icon-Cy15sWHK.js";import"./unsafe-html-CYO4avEf.js";import"./static-B8S6DEnV.js";import"./default-typography.styles-B_Uut80G.js";import"./button.component-B9IS2xn2.js";import"./query-p8xgzTDt.js";import"./transitional-styles-DSirreiK.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./badge.component-DCmZDmwH.js";import"./chevron-right.component-5AAkwWpn.js";const je=oe`
  :host {
    display: inline-block;
    height: max-content;
    text-align: left;
  }

  .card-media {
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-property: opacity;

    @starting-style {
      opacity: 0;
    }
  }
`;var Se=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},d=(e,n,c,h)=>{for(var g=h>1?void 0:h?De(n,c):n,C=e.length-1,L;C>=0;C--)(L=e[C])&&(g=(h?L(n,c,g):L(g))||g);return h&&g&&Se(n,c,g),g},ze=(e,n,c)=>n.has(e)||ae("Cannot "+c),Ne=(e,n,c)=>n.has(e)?ae("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,c),i=(e,n,c)=>(ze(e,n,"access private method"),c),a,j,S,D,ne,re,se,ie,z;let s=class extends ve(ke(Ce(Le(ue(ye))))){constructor(){super(...arguments),Ne(this,a),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.tag="h2",this.ratio="landscape",this.category="",this.date=""}render(){return r(this.href,()=>i(this,a,ne).call(this),()=>i(this,a,se).call(this))}};a=new WeakSet;j=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};S=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};D=function(e){return ce({card:!0,outlined:this.outlined,[`card-${e}`]:!!e,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};ne=function(){return t`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${o(this.href)}
        target=${o(this.target)}
        rel=${o(this.rel)}
        variant=${i(this,a,S).call(this)}
        class=${i(this,a,D).call(this,"linked")}
      >
        ${i(this,a,z).call(this)}
      </gds-card-linked>
    `};re=function(){return r(i(this,a,j).call(this,!0),()=>t`
        <gds-flex
          font="detail-book-m"
          align-items="center"
          gap="s"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${r(this.label,()=>t`
                <gds-link href=${o(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};se=function(){return t`
      <gds-card
        padding="0"
        gap="0"
        variant=${i(this,a,S).call(this)}
        class=${i(this,a,D).call(this,"static")}
      >
        ${i(this,a,z).call(this)}
      </gds-card>
    `};ie=function(){return r(i(this,a,j).call(this),()=>t`
        <gds-flex font="detail-book-m" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};z=function(){return t`
      ${r(this.src,()=>t`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${o(this.src)}
              srcset=${o(this.srcset)}
              sizes=${o(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
              loading=${o(this.loading)}
              decoding=${o(this.decoding)}
              alt=${o(this.alt)}
              class="card-media"
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${r(!this.src,()=>t`<slot name="header"></slot>`)}
        ${r(this.title||this.excerpt,()=>t`
            <gds-flex flex-direction="column" gap="xs">
              ${r(this.category||this.date,()=>t`
                  <gds-flex gap="s" align-items="center">
                    ${r(this.category,()=>t` <gds-text tag="p" font="detail-book-s">
                          ${this.category}
                        </gds-text>`)}
                    ${r(this.date,()=>t`
                        <gds-text font="detail-book-s" color="neutral-02">
                          ${he.dateShort(this.date,"sv-SE")}
                        </gds-text>
                      `)}
                  </gds-flex>
                `)}
              ${r(this.title,()=>t`
                  <gds-text tag=${o(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${r(this.excerpt,()=>t`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${r(this.href,()=>i(this,a,re).call(this),()=>i(this,a,ie).call(this))}
      </gds-flex>
    `};s.styles=[we,je];d([l({reflect:!1})],s.prototype,"title",2);d([l({reflect:!1})],s.prototype,"excerpt",2);d([l({reflect:!1})],s.prototype,"label",2);d([l({reflect:!1})],s.prototype,"variant",2);d([l({type:Boolean,reflect:!1})],s.prototype,"outlined",2);d([l({reflect:!1})],s.prototype,"tag",2);d([l({reflect:!1,attribute:"aspect-ratio"})],s.prototype,"ratio",2);d([l({reflect:!1})],s.prototype,"category",2);d([l({reflect:!1})],s.prototype,"date",2);s=d([xe("gds-card-pattern-01",{dependsOn:[pe,le,fe,be,ge,me]})],s);s.define();const bt={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...de("gds-card-pattern-01"),appearance:{control:"select",options:["neutral","outlined","plain"],description:"Visual style variant of the card",table:{defaultValue:{summary:"neutral"}}},aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for the image",table:{defaultValue:{summary:"landscape"}}},size:{control:"select",options:["small","large"],description:"Content padding size",table:{defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`Features:
- Linked and non-linked variants
- Header with image or custom content
- Configurable image aspect ratio
- Optional footer with actions
- Three appearance styles
- Two content size options

Slots:
- header: Custom header content
- footer: Action items (buttons, links)`}}}},m={args:{href:"#",title:"Card Title",excerpt:"Card description with label in footer.",label:"Read more",src:"https://api.seb.io/assets/launch-hero.jpg","max-width":"320px"},parameters:{docs:{description:{story:"Linked card with image, title, excerpt, and footer label."},source:{code:`
<gds-card-pattern-01
  href="/path"
  title="Card Title"
  excerpt="Card description with label in footer."
  label="Read more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        `,language:"html",type:"code"}}}},u={render:()=>p`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Basic Card -->
      <gds-card-pattern-01
        title="Basic Layout"
        excerpt="Simple card with title and description for text-focused content"
        href="#"
        label="Learn more"
      ></gds-card-pattern-01>

      <!-- Image Card -->
      <gds-card-pattern-01
        title="Image Content"
        excerpt="Enhanced visual presentation with featured image"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn more"
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
  `,parameters:{docs:{description:{story:`
- Basic: Text-only layout for simple content
- Image: Image-based presentation
- Custom: Slotted content when no image present
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
</gds-card-pattern-01>`,language:"html",type:"code"}}}},f={render:()=>p`
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
></gds-card-pattern-01>`,language:"html",type:"code"}}}},b={render:()=>p`
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
></gds-card-pattern-01>`,language:"html",type:"code"}}}},x={render:()=>p`
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
        `,language:"html",type:"code"}}}},y={render:()=>p`
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
        `,language:"html",type:"code"}}}},w={render:()=>p`
    <gds-grid columns="1; m{3}" gap="xl">
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
        excerpt="Secondary variant"
        href="#"
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        outlined
        title="Neutral 02 · Outlined"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn more"
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
></gds-card-pattern-01>`,language:"html",type:"code"}}}},v={render:()=>p`
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
    appearance="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    appearance="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>`,language:"html",type:"code"}}}},k={render:()=>p`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Components"
        date="2025-11-20"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Accessibility"
        date="2025-11-15"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Tokens"
        date="2025-11-10"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:`
Metadata attributes provide contextual information and help organize card content.

**Category:** Classifies the content type for filtering and organization. Displayed as a visual label on the card.

**Date:** Publication date in ISO 8601 format (YYYY-MM-DD). Automatically adapted with locale-specific display (e.g., "20 nov 2025" for Swedish locale, "Nov 20, 2025" for English).

        `},source:{code:`
<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Components"
  date="2025-11-20"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>

<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Accessibility"
  date="2025-11-15"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>

<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Tokens"
  date="2025-11-10"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>
        `,language:"html",type:"code"}}}};var N,T,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,M,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Basic Card -->
      <gds-card-pattern-01
        title="Basic Layout"
        excerpt="Simple card with title and description for text-focused content"
        href="#"
        label="Learn more"
      ></gds-card-pattern-01>

      <!-- Image Card -->
      <gds-card-pattern-01
        title="Image Content"
        excerpt="Enhanced visual presentation with featured image"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn more"
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
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Basic: Text-only layout for simple content
- Image: Image-based presentation
- Custom: Slotted content when no image present
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
</gds-card-pattern-01>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var E,I,_;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(I=f.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var F,P,R;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,O,V;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(O=x.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var B,H,G;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(H=y.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var Y,U,X;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
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
        excerpt="Secondary variant"
        href="#"
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        outlined
        title="Neutral 02 · Outlined"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn more"
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
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    appearance="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    appearance="outlined"
    href="#"
    label="Learn more"
  ></gds-card-pattern-01>
</gds-theme>\`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Components"
        date="2025-11-20"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Accessibility"
        date="2025-11-15"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>

      <gds-card-pattern-01
        title="Card title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        src="https://api.seb.io/assets/launch-hero.jpg"
        category="Tokens"
        date="2025-11-10"
        href="#"
        label="Read more"
      >
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
Metadata attributes provide contextual information and help organize card content.

**Category:** Classifies the content type for filtering and organization. Displayed as a visual label on the card.

**Date:** Publication date in ISO 8601 format (YYYY-MM-DD). Automatically adapted with locale-specific display (e.g., "20 nov 2025" for Swedish locale, "Nov 20, 2025" for English).

        \`
      },
      source: {
        code: \`
<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Components"
  date="2025-11-20"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>

<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Accessibility"
  date="2025-11-15"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>

<gds-card-pattern-01
  title="Card title"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  src="https://api.seb.io/assets/launch-hero.jpg"
  category="Tokens"
  date="2025-11-10"
  href="#"
  label="Read more"
>
</gds-card-pattern-01>
        \`,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const xt=["Default","Header","Image","Content","Footer","Actions","Variant","Theme","Metadata"];export{y as Actions,b as Content,m as Default,x as Footer,u as Header,f as Image,k as Metadata,v as Theme,w as Variant,xt as __namedExportsOrder,bt as default};
