import{x as e}from"./lit-element-Bx14lxc-.js";import{a as C}from"./argTableProps-COqCnyTL.js";import"./card-pattern-01-DXu0dl8Y.js";import"./button-C158i41m.js";import"./div-CfqytlEJ.js";import"./chevron-right-C22KveG6.js";import"./text-CLGX1paA.js";import"./link-C9fTM5N2.js";import"./divider-CoVHlSqD.js";import"./custom-elements-DZ1raq7O.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BcVhf7GG.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./img.component-BgNQb3sW.js";import"./props-link-Bzbn9FCH.js";import"./card-linked.component-BGID1C11.js";import"./card.component-B68xpvsf.js";import"./div.component-C1ed7qf0.js";import"./flex.component-CILQJn0G.js";import"./chain-link-B5E7NdkP.js";import"./icon-BL_lI3bf.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./button.component-CymCYp3R.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./chevron-right.component-DwViLg7g.js";import"./default-typography.styles-CqiDF2RS.js";const se={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...C("gds-card-pattern-01"),appearance:{control:"select",options:["neutral","outlined","plain"],description:"Visual style variant of the card",table:{defaultValue:{summary:"neutral"}}},aspectRatio:{control:"select",options:["landscape","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"landscape"}}},size:{control:"select",options:["small","large"],description:"Content padding size",table:{defaultValue:{summary:"large"}}}}},t={parameters:{docs:{description:{story:"Default card implementation showcasing basic usage."}}}},r={...t,render:()=>e`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- No Header -->
      <gds-card-pattern-01
        title="No Header"
        excerpt="Card without any header or image content."
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Landscape Image -->
      <gds-card-pattern-01
        title="Landscape Image"
        excerpt="Card with landscape aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
      ></gds-card-pattern-01>

      <!-- Square Image -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>

      <!-- Slotted header -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
        >
          Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Different header configurations showing no header, landscape, and square images."}}}},a={...t,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Linked card variations showing different footer configurations."}}}},n={...t,render:()=>e`
    <gds-grid columns="1; m{2}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary Action </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom Link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  `,parameters:{docs:{description:{story:"Non-linked cards with custom footer content."}}}},s={...t,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Different visual appearances of the card."}}}},o={...t,render:()=>e`
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
  `,parameters:{docs:{description:{story:"Different content padding sizes."}}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- No Header -->
      <gds-card-pattern-01
        title="No Header"
        excerpt="Card without any header or image content."
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Landscape Image -->
      <gds-card-pattern-01
        title="Landscape Image"
        excerpt="Card with landscape aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
      ></gds-card-pattern-01>

      <!-- Square Image -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>

      <!-- Slotted header -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
        >
          Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Different header configurations showing no header, landscape, and square images.'
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-grid columns="1; m{2}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary Action </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom Link
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,k,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const oe=["HeaderVariations","LinkedCardFooters","NonLinkedCustomFooter","Appearances","Sizes"];export{s as Appearances,r as HeaderVariations,a as LinkedCardFooters,n as NonLinkedCustomFooter,o as Sizes,oe as __namedExportsOrder,se as default};
