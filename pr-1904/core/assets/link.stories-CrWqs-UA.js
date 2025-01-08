import{h as s}from"./custom-element-scoping-b4lD3laR.js";import"./link-DXy6_QIx.js";import"./popover-ClmruqmN.js";import"./flex-DnAdyWkx.js";import"./card-XqiHdOAu.js";import"./text-Cp4uT8zv.js";import"./divider-B4sL62Bm.js";import"./magnifying-glass-zSavWvzJ.js";import"./star-C-ajSOXZ.js";import"./arrow-right-STNOkwn4.js";import"./cain-link-DNf9BMLY.js";import"./lit-element-C_s9q329.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-B6Zq2CtY.js";import"./style-expression-property-CYg4CGI6.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-iufJoRiP.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-TR7inlBc.js";import"./watch-tFciLXSI.js";import"./cross-small-CgIxxlLH.js";import"./icon-BAGUC4Iy.js";import"./container-C9hIB2Az.js";import"./default-typography.styles-Bl0hQgz1.js";const re={title:"Components/Link",component:"gds-link",parameters:{layout:"centered"},tags:["autodocs"]},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:"Link text"}},r={...d},e={...d,name:"Icon: Lead",render:()=>s` <gds-link href="#test">
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>`},t={...d,name:"HREF",render:()=>s` <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">With <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline" href="#test">
            Link text
          </gds-link>
          <small>
            <pre><code>&lt;gds-link href=&quot;#test&quot;&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Without <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
          <small>
            <pre><code>&lt;gds-link&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
      </gds-flex>
    </gds-flex>`},n={...d,name:"Icon: Trail",render:()=>s` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},i={...d,name:"Text Decoration",render:()=>s`
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
  `};var o,l,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var g,c,x,p,m;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link href="#test">
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>\`
}`,...(x=(c=e.parameters)==null?void 0:c.docs)==null?void 0:x.source},description:{story:"A link component with a leading icon.",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var f,k,h,u,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'HREF',
  render: () => html\` <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">With <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline" href="#test">
            Link text
          </gds-link>
          <small>
            <pre><code>&lt;gds-link href=&quot;#test&quot;&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Without <code>href</code></gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link text-decoration="underline"> Link text </gds-link>
          <small>
            <pre><code>&lt;gds-link&gt;...&lt;/gds-link&gt;</code></pre>
          </small>
        </gds-flex>
      </gds-flex>
    </gds-flex>\`
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source},description:{story:`The \`href\` property determines the URL that the link will navigate to when clicked.

If the \`href\` property is not set (i.e., it is an empty string), the component will still render as a link element (\`<a>\`),
but it will not have a valid destination. This allows the component to maintain its visual appearance and
styling as a link, while preventing any navigation. This behavior is useful for scenarios where you want
the link to appear interactive (for example, to indicate a disabled state or for use in a JavaScript event handler),
but without directing the user to a different page or resource.

Additionally, this approach helps to avoid issues in single-page applications (SPAs) where links without valid \`href\`
attributes can lead to unexpected navigation or errors in the routing logic.`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var w,L,y,T,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:y.source},description:{story:"A link component with a trailing icon.",...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var H,U,S,I,b;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(U=i.parameters)==null?void 0:U.docs)==null?void 0:S.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.description}}};const se=["Basic","Lead","Href","Trail","TextDecoration"];export{r as Basic,t as Href,e as Lead,i as TextDecoration,n as Trail,se as __namedExportsOrder,re as default};
