import{x as i}from"./lit-element-Bx14lxc-.js";import{a as C}from"./argTableProps-DBcw5npv.js";import"./card-linked-B2ydBDn-.js";import"./button-CiaA8vTZ.js";import"./chevron-right-QQ-4ylv3.js";import"./text-DPpDJQjV.js";import"./link-CQz4l2c8.js";import"./divider-Br_qn0xA.js";import"./custom-elements-BaZAmYJ1.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./props-card-CK6dJNcy.js";import"./button.component-BCsZFCXC.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-CyN6927s.js";import"./transitional-styles-CxCTYKOe.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DLWGR3wk.js";import"./watch-tFciLXSI.js";import"./img.component-BmDz7Qit.js";import"./card.component-Bj1-hO0L.js";import"./div.component-TOnnwDK8.js";import"./flex.component-DFHyXBrb.js";import"./chain-link-DK2clEwB.js";import"./icon-DDIawWLs.js";import"./unsafe-html-CYO4avEf.js";import"./chevron-right.component-DZKbEk1u.js";import"./default-typography.styles-DG7u6j1x.js";const de={title:"Components/Card Linked",component:"gds-card-linked",tags:["autodocs"],argTypes:{...C("gds-card-linked"),rank:{control:"select",options:["primary","outlined","plain"],description:"Visual style of the card",table:{defaultValue:{summary:"primary"}}},media:{control:"select",options:["default","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"default"}}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},t={args:{href:"#",title:"Card Title",excerpt:"This is a brief description of the card content.",label:"Read more",src:"https://api.seb.io/assets/launch-hero.jpg",rank:"primary"}},r={...e,args:{href:"#",label:"Read more",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}},a={...e,render:d=>i`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="Primary "
        excerpt="The default variant with full background color. Best for primary content, featured items, or when you want to draw immediate attention to the card content."
        label="Explore features"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="outlined"
        title="Outlined"
        excerpt="A subtle variant with a border outline. Ideal for secondary content, supporting information, or when you want to maintain visual hierarchy without strong emphasis."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="plain"
        title="Plain"
        excerpt="The most minimal variant without background or border. Perfect for content-heavy layouts, lists, or when you want to maintain a clean, uncluttered appearance."
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
    </gds-grid>
  `},n={...e,render:d=>i`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="No media"
        excerpt="A minimal variant without any media content. Perfect for text-focused content, blog posts, or when you want to emphasize the written content without visual distraction."
        label="Read more"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="With media"
        excerpt="The standard image header uses the src property for a clean, consistent media presentation. Ideal for articles, products, or any content that benefits from visual context."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        rank="plain"
        title="Custom Header Content"
        excerpt="Using the header slot allows for complex header layouts. This example shows a card with custom header content including additional elements."
        label="Learn more"
      >
        <gds-card
          slot="header"
          variant="secondary"
          aspect-ratio="16/9"
          justify-content="center"
          align-items="center"
        >
          Content
        </gds-card>
      </gds-card-linked>
    </gds-grid>
  `},o={...e,render:d=>i`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        label="Read article"
        title="Default Link Footer"
        excerpt="This card uses the built-in label property to create a standard footer link. This is the simplest way to add a call-to-action to your card."
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="Slotted footer button"
        excerpt="Example of a card with a custom button in the footer slot. Use this pattern when you want more control over the footer's appearance and behavior."
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="No Footer"
        excerpt="Sometimes less is more. This card has no footer, focusing entirely on the content. The entire card remains clickable, making it perfect for simple navigation or when the content speaks for itself."
      >
      </gds-card-linked>
    </gds-grid>
  `},s={...e,render:d=>i`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <gds-card-linked
        href="#"
        label="View details"
        title="Landscape Format (16:9)"
        excerpt="The default media format uses a 16:9 aspect ratio, ideal for landscape photos, video thumbnails, and wide-format content. Perfect for hero images and article previews."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        label="Learn more"
        title="Square Format (1:1)"
        excerpt="The square format maintains equal width and height, making it perfect for profile pictures, product images, or any content where balanced proportions are desired."
        src="https://api.seb.io/assets/launch-hero.jpg"
        media="square"
      >
      </gds-card-linked>
    </gds-grid>
  `};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: '#',
    title: 'Card Title',
    excerpt: 'This is a brief description of the card content.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
    rank: 'primary'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    href: '#',
    label: 'Read more',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="Primary "
        excerpt="The default variant with full background color. Best for primary content, featured items, or when you want to draw immediate attention to the card content."
        label="Explore features"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="outlined"
        title="Outlined"
        excerpt="A subtle variant with a border outline. Ideal for secondary content, supporting information, or when you want to maintain visual hierarchy without strong emphasis."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="plain"
        title="Plain"
        excerpt="The most minimal variant without background or border. Perfect for content-heavy layouts, lists, or when you want to maintain a clean, uncluttered appearance."
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
    </gds-grid>
  \`
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,w,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="No media"
        excerpt="A minimal variant without any media content. Perfect for text-focused content, blog posts, or when you want to emphasize the written content without visual distraction."
        label="Read more"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="With media"
        excerpt="The standard image header uses the src property for a clean, consistent media presentation. Ideal for articles, products, or any content that benefits from visual context."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        rank="plain"
        title="Custom Header Content"
        excerpt="Using the header slot allows for complex header layouts. This example shows a card with custom header content including additional elements."
        label="Learn more"
      >
        <gds-card
          slot="header"
          variant="secondary"
          aspect-ratio="16/9"
          justify-content="center"
          align-items="center"
        >
          Content
        </gds-card>
      </gds-card-linked>
    </gds-grid>
  \`
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,v,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        label="Read article"
        title="Default Link Footer"
        excerpt="This card uses the built-in label property to create a standard footer link. This is the simplest way to add a call-to-action to your card."
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="Slotted footer button"
        excerpt="Example of a card with a custom button in the footer slot. Use this pattern when you want more control over the footer's appearance and behavior."
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="No Footer"
        excerpt="Sometimes less is more. This card has no footer, focusing entirely on the content. The entire card remains clickable, making it perfect for simple navigation or when the content speaks for itself."
      >
      </gds-card-linked>
    </gds-grid>
  \`
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var P,j,L;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <gds-card-linked
        href="#"
        label="View details"
        title="Landscape Format (16:9)"
        excerpt="The default media format uses a 16:9 aspect ratio, ideal for landscape photos, video thumbnails, and wide-format content. Perfect for hero images and article previews."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        label="Learn more"
        title="Square Format (1:1)"
        excerpt="The square format maintains equal width and height, making it perfect for profile pictures, product images, or any content where balanced proportions are desired."
        src="https://api.seb.io/assets/launch-hero.jpg"
        media="square"
      >
      </gds-card-linked>
    </gds-grid>
  \`
}`,...(L=(j=s.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const le=["Default","CardLinked","Ranks","Headers","Footer","Media"];export{r as CardLinked,t as Default,o as Footer,n as Headers,s as Media,a as Ranks,le as __namedExportsOrder,de as default};
