import{h as o}from"./custom-element-scoping-BEGY3AqQ.js";import"./link-ghI14llV.js";import"./popover-Vhl5uRI3.js";import"./flex-baHQsfJg.js";import"./card-CqKrRvik.js";import"./text-DUQaXtZz.js";import"./divider-31Cl9TWu.js";import"./magnifying-glass-D8m8MP8D.js";import"./star-DECBff52.js";import"./arrow-right-B_2xDbEI.js";import"./cain-link-BNOtP2DL.js";import"./lit-element-C_s9q329.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-CFvqdzpw.js";import"./style-expression-property-w7JDbrjA.js";import"./declarative-layout-mixins-DZOZCYEp.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-iufJoRiP.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-gKBkOdeg.js";import"./watch-tFciLXSI.js";import"./cross-small-CIJy4RQ0.js";import"./icon-DYBgint3.js";import"./div-CwAlVl-X.js";import"./default-typography.styles-Bl0hQgz1.js";const ee={title:"Components/Link",component:"gds-link",parameters:{layout:"centered"},tags:["autodocs"]},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:"Link text"}},i={...r},e={...r,name:"Icon: Lead",render:()=>o` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`},n={...r,name:"Icon: Trail",render:()=>o` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},t={...r,name:"Text Decoration",render:()=>o`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link>
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `};var d,s,a;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,g,c,m,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>\`
}`,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"A link component with a leading icon.",...(x=(m=e.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var p,k,f,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:"A link component with a trailing icon.",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var v,L,w,y,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Text Decoration',
  render: () => html\`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link>
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(w=(L=t.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};const ne=["Basic","Lead","Trail","TextDecoration"];export{i as Basic,e as Lead,t as TextDecoration,n as Trail,ne as __namedExportsOrder,ee as default};
