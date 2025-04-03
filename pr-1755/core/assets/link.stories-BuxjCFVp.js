import{h as o}from"./custom-element-scoping-b4c89-hi.js";import"./link-DMJhBsnS.js";import"./popover-BfZT0i8q.js";import"./flex-DTBzRj2-.js";import"./card-VanqcJEE.js";import"./text-BhQaTdoS.js";import"./divider-D1LCDXE2.js";import"./magnifying-glass-Dn38v_bv.js";import"./star-BfUExHbg.js";import"./arrow-right-BG1E6xPR.js";import"./cain-link-cmARXoVG.js";import{a as D}from"./argTableProps-CfHTsbyq.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./popover.component-B-PbM_U9.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-DA3IwY6D.js";import"./watch-tFciLXSI.js";import"./cross-small.component-DGKi69Og.js";import"./icon-TXeUf8MR.js";import"./flex.component-QD4FtwzU.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";import"./text.component-B4D18gL7.js";import"./custom-elements-ChMs8ODk.js";const oe={title:"Components/Link",component:"gds-link",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...D("gds-link")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:"Link text"}},i={...r},e={...r,name:"Icon: Lead",render:()=>o` <gds-link>
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
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,g,c,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link>
      <gds-icon-cain-link slot="lead"></gds-icon-cain-link>
      Link text
    </gds-link>\`
}`,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"A link component with a leading icon.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var x,k,f,u,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link>
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:"A link component with a trailing icon.",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var v,L,w,y,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(L=t.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};const de=["Basic","Lead","Trail","TextDecoration"];export{i as Basic,e as Lead,t as TextDecoration,n as Trail,de as __namedExportsOrder,oe as default};
