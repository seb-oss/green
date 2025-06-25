import{h as s}from"./gds-element-DKcDvDP5.js";import"./link-CaQ84ypy.js";import"./popover-Cmq1Xw94.js";import"./flex-BwgzG5qs.js";import"./card-Cxq2g4Y6.js";import"./text-DbbUfaRq.js";import"./divider-s9xm2YVw.js";import"./magnifying-glass-DEJhn_3H.js";import"./star-DywWnSFN.js";import"./arrow-right-BNIvzUIz.js";import"./cain-link-CcI48Bdr.js";import{a as S}from"./argTableProps-CLrRqnwj.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./link.component-CCm02Urb.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-BxbMzGpH.js";import"./declarative-layout-mixins-mU9_fNeX.js";import"./popover.component-DDNaOynm.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-CacJDsVN.js";import"./watch-tFciLXSI.js";import"./cross-small.component-Crfojz5L.js";import"./icon-CylpkmXP.js";import"./flex.component-D_vuL4br.js";import"./div.component-CD5LQ9NF.js";import"./card.component-COqggkVo.js";import"./magnifying-glass.component-CaNDgnVC.js";import"./star.component-CtfDRfYl.js";import"./arrow-right.component-BREprczJ.js";import"./cain-link.component-BZaBr2hI.js";import"./custom-elements-CCuQm3nr.js";const fe={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...S("gds-link")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:"Link text"}},o={...r},e={...r,name:"Icon: Lead",render:()=>s` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`},n={...r,name:"Icon: Trail",render:()=>s` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},t={...r,name:"Text Decoration",render:()=>s`
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
  `},i={...r,name:"Label",render:()=>s`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `};var d,a,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var g,c,m,p,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>\`
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"A link component with a leading icon.",...(x=(p=e.parameters)==null?void 0:p.docs)==null?void 0:x.description}}};var f,k,u,h,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(u=(k=n.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:"A link component with a trailing icon.",...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.description}}};var v,w,b,y,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var D,U,I,A,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Label',
  render: () => html\`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  \`
}`,...(I=(U=i.parameters)==null?void 0:U.docs)==null?void 0:I.source},description:{story:`On the \`gds-link\` component, the \`label\` attribute is used to provide an accessible name for the link.

It will be forwarded to the \`aria-label\` attribute of the underlying anchor element.


Use this when:
- The link contains only an icon
- The visual text needs a different description for screen readers
- Additional context is needed for accessibility

\`\`\`html
<!-- Icon-only link -->
<gds-link href="/settings" label="Open settings">
 <gds-icon-settings></gds-icon-settings>
</gds-link>

<!-- Different screen reader text -->
<gds-link href="/article" label="Read full article about climate change">
 Read more
</gds-link>
\`\`\``,...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};const ke=["Basic","Lead","Trail","TextDecoration","Label"];export{o as Basic,i as Label,e as Lead,t as TextDecoration,n as Trail,ke as __namedExportsOrder,fe as default};
