import{x as g}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-DvxbhuZy.js";import"./card-pattern-01-CDdbarFF.js";import"./button-C158i41m.js";import"./div-CfqytlEJ.js";import"./chevron-right-C22KveG6.js";import"./text-CLGX1paA.js";import"./link-C9fTM5N2.js";import"./divider-CoVHlSqD.js";import"./custom-elements-DQPFj7L9.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BcVhf7GG.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./img.component-BgNQb3sW.js";import"./props-link-Bzbn9FCH.js";import"./card-linked.component-BGID1C11.js";import"./card.component-B68xpvsf.js";import"./div.component-C1ed7qf0.js";import"./flex.component-CILQJn0G.js";import"./chain-link-B5E7NdkP.js";import"./icon-BL_lI3bf.js";import"./unsafe-html-CYO4avEf.js";import"./button.component-CymCYp3R.js";import"./query-p8xgzTDt.js";import"./static-B8S6DEnV.js";import"./transitional-styles-C-VAQSys.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./chevron-right.component-DwViLg7g.js";import"./default-typography.styles-CqiDF2RS.js";const ee={title:"Patterns/Card Pattern 01",component:"gds-card-pattern-01",tags:["autodocs"],argTypes:{...f("gds-card-pattern-01"),rank:{control:"select",options:["primary","outlined","plain"],description:"Visual style of the card",table:{defaultValue:{summary:"primary"}}},media:{control:"select",options:["default","square"],description:"Aspect ratio for media content",table:{defaultValue:{summary:"default"}}}}},h={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},t={args:{title:"Card Title",href:"#",excerpt:"This is a brief description of the card content.",label:"Read more",src:"https://api.seb.io/assets/launch-hero.jpg"}},r={...h,args:{title:"Title",href:"#",label:"Read more",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}},e={...h,render:b=>g`
    <gds-grid columns="1; m{2}" gap="xl" width="100%">
      <gds-card-pattern-01
        title="This is a heading"
        href="#"
        label="Read more"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-pattern-01>
      <gds-card-pattern-01
        title="This is a heading"
        href="#"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>
      <gds-card-pattern-01
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  `};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    href: '#',
    excerpt: 'This is a brief description of the card content.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    title: 'Title',
    href: '#',
    label: 'Read more',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,l,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="1; m{2}" gap="xl" width="100%">
      <gds-card-pattern-01
        title="This is a heading"
        href="#"
        label="Read more"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-pattern-01>
      <gds-card-pattern-01
        title="This is a heading"
        href="#"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>
      <gds-card-pattern-01
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  \`
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:"Footer slot",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};const te=["Default","Link","Linked"];export{t as Default,r as Link,e as Linked,te as __namedExportsOrder,ee as default};
