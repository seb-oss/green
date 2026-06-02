import{h as d}from"./iframe-BOWV0qpc.js";import"./link-DfUqiFtE.js";import"./popover-C-bPQhkg.js";import"./flex-COaGnwRs.js";import"./card-BoGoSqQk.js";import"./text-DQkjIYNi.js";import"./divider-CFMWoTfr.js";import"./magnifying-glass-DlDbjkoI.js";import"./star-DZXRZkfQ.js";import"./arrow-right-CL-_W-RD.js";import"./chain-link-COz6UFY4.js";import{a as B}from"./argTableProps-Cre6jRDN.js";import"./preload-helper-Dp1pzeXC.js";import"./props-link-DpKcspZ0.js";import"./popover.component-DXVRxN9_.js";import"./localized-decorator-BpW4MtTU.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-BIbI6wwk.js";import"./icon.component-CpX7jBB3.js";import"./flex.component-B7JFuEAZ.js";import"./card.component-DYVr1XE7.js";import"./text.component-Bo0ErOds.js";import"./default-typography.styles-DuMe7sc-.js";import"./magnifying-glass.component-D0tyDXiq.js";import"./star.component-GQ1Is723.js";import"./arrow-right.component-5F4plaqI.js";const le={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...B("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},a={...e},n={...e,name:"Icon: Lead",render:()=>d` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},i={...e,name:"Icon: Trail",render:()=>d` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},r={...e,name:"Text Decoration",render:()=>d`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},t={...e,name:"Label",render:()=>d`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},s={...e,name:"ARIA Forwarding",render:()=>d`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="link-label">External resource</div>
      <div id="link-description">Opens in a new window</div>
      <gds-link
        href="#"
        gds-aria-labelledby="link-label"
        gds-aria-describedby="link-description"
      >
        Visit documentation
      </gds-link>
    </gds-flex>
  `};var o,l,g;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var c,m,p,x,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Lead',
  render: () => html\` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>\`
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"A link component with a leading icon.",...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var k,h,u,b,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon: Trail',
  render: () => html\` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>\`
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"A link component with a trailing icon.",...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var v,L,y,A,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Text Decoration',
  render: () => html\`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source},description:{story:'A link component has a `text-decoration` property that accepts all valid CSS `text-decoration` values.\n\nIt also supports setting `text-decoration` or disable on hover by using the `hover:` prefix.\n\n```html\n<gds-link text-decoration="hover:none">\n   Underline on Hover\n</gds-link>\n```',...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var T,I,U,P,S;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Label',
  render: () => html\`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  \`
}`,...(U=(I=t.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:`On the \`gds-link\` component, the \`label\` attribute is used to provide an accessible name for the link.

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
\`\`\``,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var H,F,O,R,E;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="link-label">External resource</div>
      <div id="link-description">Opens in a new window</div>
      <gds-link
        href="#"
        gds-aria-labelledby="link-label"
        gds-aria-describedby="link-description"
      >
        Visit documentation
      </gds-link>
    </gds-flex>
  \`
}`,...(O=(F=s.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal anchor element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...(E=(R=s.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};const ge=["Basic","Lead","Trail","TextDecoration","Label","AriaForwarding"];export{s as AriaForwarding,a as Basic,t as Label,n as Lead,r as TextDecoration,i as Trail,ge as __namedExportsOrder,le as default};
