import{x as m}from"./lit-element-Bx14lxc-.js";import{a as k}from"./argTableProps-CiWyUcrd.js";import"./card-dynamic-Dg2gTW0f.js";import"./button-CT2IHTkG.js";import"./text-DqywFqXI.js";import"./link-BQaEz6UV.js";import"./divider-7lswerea.js";import"./custom-elements-BCzrNgot.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-CVqwUuaf.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CyN6927s.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./button.component-BMTHyITM.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CxCTYKOe.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./card.component-C4tAIpeI.js";import"./div.component-B_lon1CO.js";import"./flex.component-My6tsEL-.js";import"./chain-link-DD3U4VL8.js";import"./icon-CNS-fQND.js";import"./unsafe-html-CYO4avEf.js";import"./img.component-BvK3KN7H.js";import"./default-typography.styles-DG7u6j1x.js";const V={title:"Components/Card Dynamic",component:"gds-card-dynamic",tags:["autodocs"],argTypes:{...k("gds-card-dynamic")}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},e={...s,args:{href:"#",title:"test",excerpt:"test",label:"test",src:"https://api.seb.io/assets/launch-hero.jpg"}},a={...s,render:b=>m`
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
  `},t={...s,render:b=>m`
    <gds-grid columns="3" gap="xl">
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
        rank="outlined"
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
        rank="plain"
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

      <!-- Buttons only -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
    </gds-grid>
  `};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    href: '#',
    title: 'test',
    excerpt: 'test',
    label: 'test',
    src: 'https://api.seb.io/assets/launch-hero.jpg'
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
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
  \`
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,h,u,g,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
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
        rank="outlined"
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
        rank="plain"
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

      <!-- Buttons only -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="tertiary">Tertiary</gds-button>
      </gds-card-dynamic>
    </gds-grid>
  \`
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Footer slot",...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.description}}};const W=["CardDynamic","Ranks","Actions"];export{t as Actions,e as CardDynamic,a as Ranks,W as __namedExportsOrder,V as default};
