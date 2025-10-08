import{x as p}from"./lit-element-Bx14lxc-.js";import{a as m}from"./argTableProps-C_JvnYJo.js";import"./card-dynamic-Cy2_OAp8.js";import"./button-CT2IHTkG.js";import"./text-DqywFqXI.js";import"./link-BQaEz6UV.js";import"./divider-7lswerea.js";import"./custom-elements-CAYmC4bS.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-CVqwUuaf.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CyN6927s.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./button.component-BMTHyITM.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CxCTYKOe.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./card.component-C4tAIpeI.js";import"./div.component-B_lon1CO.js";import"./flex.component-My6tsEL-.js";import"./chain-link-DD3U4VL8.js";import"./icon-CNS-fQND.js";import"./unsafe-html-CYO4avEf.js";import"./img.component-BvK3KN7H.js";import"./default-typography.styles-DG7u6j1x.js";const M={title:"Components/Card Dynamic",component:"gds-card-dynamic",tags:["autodocs"],argTypes:{...m("gds-card-dynamic")}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},a={...l,args:{href:"#",title:"test",excerpt:"test",label:"test",src:"https://api.seb.io/assets/launch-hero.jpg"}},s={...l,render:g=>p`
    <gds-grid columns="3" gap="xl">
      <gds-card-dynamic
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="outlined"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="plain"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <!-- 
      <gds-card-dynamic
        href="#"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <span slot="header">header slot</span>

        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic> -->
    </gds-grid>
  `};var t,e,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    href: '#',
    title: 'test',
    excerpt: 'test',
    label: 'test',
    src: 'https://api.seb.io/assets/launch-hero.jpg'
  }
}`,...(r=(e=a.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};var n,o,i,d,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="3" gap="xl">
      <gds-card-dynamic
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="outlined"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="plain"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <!-- 
      <gds-card-dynamic
        href="#"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <span slot="header">header slot</span>

        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic> -->
    </gds-grid>
  \`
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Examples of different color variants",...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};const N=["CardDynamic","Patterns"];export{a as CardDynamic,s as Patterns,N as __namedExportsOrder,M as default};
