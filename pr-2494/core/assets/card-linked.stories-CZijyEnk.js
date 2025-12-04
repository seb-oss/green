import{x as t}from"./iframe-BOH9Rnwv.js";import{a as y}from"./argTableProps-xBAm5BjS.js";import"./card-linked-BmMVkn--.js";import"./preload-helper-Dp1pzeXC.js";import"./card-linked.component-DUQ1aL62.js";import"./props-link-Bw94OjvI.js";import"./card.component-BR4rr1Lh.js";const L={title:"Components/Card/Card Linked",component:"gds-card-linked",tags:["autodocs"],argTypes:{...y("gds-card-linked")},parameters:{docs:{description:{component:`@beta

Card Linked Component

A wrapper component that adds link functionality to \`gds-card\`. <br />
Provides hover and focus states, and handles link behavior while maintaining card styling.

@extends GdsCard`}}}},e={args:{href:"#",innerHTML:"Linked Card"},parameters:{docs:{description:{story:"Basic implementation of a linked card."}}}},n={render:()=>t`
    <gds-flex gap="l" flex-direction="column">
      <gds-card-linked href="#" padding="m">
        Default (Same Window)
      </gds-card-linked>

      <gds-card-linked href="#" target="_blank" padding="m">
        New Tab (Adds noreferrer noopener automatically)
      </gds-card-linked>

      <gds-card-linked href="#" target="_parent" padding="m">
        Parent Frame
      </gds-card-linked>

      <gds-card-linked href="#" target="_top" padding="m">
        Top Frame
      </gds-card-linked>
    </gds-flex>
  `,parameters:{docs:{description:{story:'\n- `target="_self"` (default): Opens in same window/tab\n- `target="_blank"`: Opens in new tab (adds security attributes)\n- `target="_parent"`: Opens in parent frame\n- `target="_top"`: Opens in full window\n        '}}}},r={render:()=>t`
    <gds-flex gap="l">
      <gds-card-linked href="/file.pdf" download padding="m">
        Download (Browser Named)
      </gds-card-linked>

      <gds-card-linked href="/file.pdf" download="custom-name.pdf" padding="m">
        Download (Custom Name)
      </gds-card-linked>
    </gds-flex>
  `,parameters:{docs:{description:{story:'\n- `download`: Browser determines filename\n- `download="filename.pdf"`: Suggests specific filename\n        '}}}},a={render:()=>t`
    <gds-flex gap="l">
      <gds-card-linked href="https://external.com" target="_blank" padding="m">
        External Link (Auto Security)
      </gds-card-linked>

      <gds-card-linked
        href="https://external.com"
        rel="nofollow noreferrer noopener"
        padding="m"
      >
        Custom Security Attributes
      </gds-card-linked>
    </gds-flex>
  `,parameters:{docs:{description:{story:"\n- Automatic `noreferrer noopener` for external links\n- Custom `rel` attribute support\n- Safe external linking\n        "}}}},d={render:()=>t`
    <gds-card-linked
      href="#"
      aria-label="Descriptive text for screen readers"
      padding="m"
    >
      Accessible card link
    </gds-card-linked>
  `,parameters:{docs:{description:{story:`
- Proper focus management
- Screen reader support
- ARIA attribute support
        `}}}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    href: '#',
    innerHTML: 'Linked Card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic implementation of a linked card.'
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex gap="l" flex-direction="column">
      <gds-card-linked href="#" padding="m">
        Default (Same Window)
      </gds-card-linked>

      <gds-card-linked href="#" target="_blank" padding="m">
        New Tab (Adds noreferrer noopener automatically)
      </gds-card-linked>

      <gds-card-linked href="#" target="_parent" padding="m">
        Parent Frame
      </gds-card-linked>

      <gds-card-linked href="#" target="_top" padding="m">
        Top Frame
      </gds-card-linked>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- \\\`target="_self"\\\` (default): Opens in same window/tab
- \\\`target="_blank"\\\`: Opens in new tab (adds security attributes)
- \\\`target="_parent"\\\`: Opens in parent frame
- \\\`target="_top"\\\`: Opens in full window
        \`
      }
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex gap="l">
      <gds-card-linked href="/file.pdf" download padding="m">
        Download (Browser Named)
      </gds-card-linked>

      <gds-card-linked href="/file.pdf" download="custom-name.pdf" padding="m">
        Download (Custom Name)
      </gds-card-linked>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- \\\`download\\\`: Browser determines filename
- \\\`download="filename.pdf"\\\`: Suggests specific filename
        \`
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,k,w;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex gap="l">
      <gds-card-linked href="https://external.com" target="_blank" padding="m">
        External Link (Auto Security)
      </gds-card-linked>

      <gds-card-linked
        href="https://external.com"
        rel="nofollow noreferrer noopener"
        padding="m"
      >
        Custom Security Attributes
      </gds-card-linked>
    </gds-flex>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Automatic \\\`noreferrer noopener\\\` for external links
- Custom \\\`rel\\\` attribute support
- Safe external linking
        \`
      }
    }
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var h,b,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <gds-card-linked
      href="#"
      aria-label="Descriptive text for screen readers"
      padding="m"
    >
      Accessible card link
    </gds-card-linked>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
- Proper focus management
- Screen reader support
- ARIA attribute support
        \`
      }
    }
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const B=["Default","Target","Downloads","Security","Accessibility"];export{d as Accessibility,e as Default,r as Downloads,a as Security,n as Target,B as __namedExportsOrder,L as default};
