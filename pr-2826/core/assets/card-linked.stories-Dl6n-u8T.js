import{b as t}from"./iframe-P4Ox4Kkx.js";import{a as s}from"./argTableProps-D0L2oOd1.js";import"./card-linked-Rd9VIXhA.js";import"./preload-helper-PPVm8Dsz.js";import"./card-linked.component-BqIepSe8.js";import"./props-link-B2khwW9g.js";import"./card.component-i21J4gbb.js";const f={title:"Components/Card/Card Linked",component:"gds-card-linked",tags:["autodocs"],argTypes:{...s("gds-card-linked")},parameters:{docs:{description:{component:`@beta

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
        `}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const u=["Default","Target","Downloads","Security","Accessibility"];export{d as Accessibility,e as Default,r as Downloads,a as Security,n as Target,u as __namedExportsOrder,f as default};
