import{h as o}from"./custom-element-scoping-b4c89-hi.js";import"./link-DOZiK820.js";import"./popover-6A730XoI.js";import"./flex-B8AQUA7n.js";import"./card-BDIWjU2T.js";import"./text-BgDT2iSM.js";import"./divider-D1z2XdRH.js";import"./magnifying-glass-C1AjMZ80.js";import"./star-CrTvkbl_.js";import"./arrow-right-BWrr2IHg.js";import"./cain-link-BhGX-17d.js";import{a as S}from"./argTableProps-bFgiqtqh.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-CxeMR8ZJ.js";import"./popover.component-DUkRuO7F.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-BOwn52Fb.js";import"./watch-tFciLXSI.js";import"./cross-small.component-zD4U0QzL.js";import"./icon-Bm2mwQqA.js";import"./flex.component-BDILfbvS.js";import"./div.component-Diofk0s1.js";import"./card.component-ESUepO5H.js";import"./text.component-CmSKS74a.js";import"./custom-elements-BqpxeCsd.js";const ce={title:"Components/Link",component:"gds-link",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...S("gds-link")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:"Link text"}},s={...r},e={...r,name:"Icon: Lead",render:()=>o` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`},i={...r,name:"Icon: Trail",render:()=>o` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},n={...r,name:"Text Decoration",render:()=>o`
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
  `},t={...r,name:"Accessibility",render:()=>o`
    <gds-link aria-label="Aria label is used"> Link with Aria label </gds-link>

    <!-- For test purposes will be removed on release -->
    <a href="#" aria-label="Aria label is used"> Link with Aria label </a>
  `};var a,d,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,c,m,p,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>\`
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"A link component with a leading icon.",...(x=(p=e.parameters)==null?void 0:p.docs)==null?void 0:x.description}}};var k,f,u,h,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source},description:{story:"A link component with a trailing icon.",...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var L,w,b,y,A;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};var T,D,U,I,P;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accessibility',
  render: () => html\`
    <gds-link aria-label="Aria label is used"> Link with Aria label </gds-link>

    <!-- For test purposes will be removed on release -->
    <a href="#" aria-label="Aria label is used"> Link with Aria label </a>
  \`
}`,...(U=(D=t.parameters)==null?void 0:D.docs)==null?void 0:U.source},description:{story:"On the `gds-link` component, the `aria-label` attribute is used to provide an accessible name for the link.",...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};const me=["Basic","Lead","Trail","TextDecoration","Accessibility"];export{t as Accessibility,s as Basic,e as Lead,n as TextDecoration,i as Trail,me as __namedExportsOrder,ce as default};
