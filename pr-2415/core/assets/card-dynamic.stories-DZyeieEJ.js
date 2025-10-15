import{x as i}from"./lit-element-Bx14lxc-.js";import{a as j}from"./argTableProps-CWgUY18T.js";import"./card-dynamic-CWyxfXPR.js";import"./button-CTnIGJVU.js";import"./text-BgS_Y91N.js";import"./link-DXIreaSo.js";import"./divider-laMyIv3d.js";import"./custom-elements-BoowByNo.js";import"./if-defined-CVqwUuaf.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./props-card-CYs4JhgO.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./button.component-cNcNxtec.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./tokens.style-BcVhf7GG.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DLWGR3wk.js";import"./watch-tFciLXSI.js";import"./img.component-CkdFuKSo.js";import"./props-link-Bzbn9FCH.js";import"./card.component-6SGXofUs.js";import"./div.component-CnBonc2D.js";import"./flex.component-DCtNQdiu.js";import"./chain-link-COH1QB85.js";import"./icon-Do1Fh5UP.js";import"./unsafe-html-CYO4avEf.js";import"./default-typography.styles-CqiDF2RS.js";const se={title:"Patterns/Card Dynamic",component:"gds-card-dynamic",tags:["autodocs"],argTypes:{...j("gds-card-dynamic")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},a={...n,args:{href:"#",title:"Card title",excerpt:"Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both.",label:"This is a link",src:"https://api.seb.io/assets/launch-hero.jpg"}},s={...n,render:r=>i`
    <gds-div background="neutral-02">
      <gds-grid columns="3" gap="xl">
        <gds-card-dynamic
          href="#"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
        <gds-card-dynamic
          href="#"
          rank="outlined"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
        <gds-card-dynamic
          href="#"
          rank="plain"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
      </gds-grid>
    </gds-div>
  `},e={...n,render:r=>i`
    <gds-grid columns="3" gap="xl">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>

      <!-- Buttons only -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
    </gds-grid>
  `},t={...n,render:r=>i`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        aspect-ratio="square"
        src="https://api.seb.io/assets/launch-hero.jpg"
        srcset="https://api.seb.io/assets/launch-hero.jpg 300w, https://api.seb.io/assets/primitives_hero.png 900w"
        sizes="(max-width: 600px) 300px, 900px"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
    </gds-grid>
  `};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    href: '#',
    title: 'Card title',
    excerpt: 'Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both.',
    label: 'This is a link',
    src: 'https://api.seb.io/assets/launch-hero.jpg'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-div background="neutral-02">
      <gds-grid columns="3" gap="xl">
        <gds-card-dynamic
          href="#"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
        <gds-card-dynamic
          href="#"
          rank="outlined"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
        <gds-card-dynamic
          href="#"
          rank="plain"
          title="This is a heading"
          excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
          label="Link text"
          src="https://api.seb.io/assets/launch-hero.jpg"
        >
        </gds-card-dynamic>
      </gds-grid>
    </gds-div>
  \`
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,p,m,k,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>

      <!-- Buttons only -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
    </gds-grid>
  \`
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Footer slot",...(b=(k=e.parameters)==null?void 0:k.docs)==null?void 0:b.description}}};var f,y,x,T,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        aspect-ratio="square"
        src="https://api.seb.io/assets/launch-hero.jpg"
        srcset="https://api.seb.io/assets/launch-hero.jpg 300w, https://api.seb.io/assets/primitives_hero.png 900w"
        sizes="(max-width: 600px) 300px, 900px"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
    </gds-grid>
  \`
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Footer slot",...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};const ne=["CardDynamic","Ranks","Actions","Media"];export{e as Actions,a as CardDynamic,t as Media,s as Ranks,ne as __namedExportsOrder,se as default};
