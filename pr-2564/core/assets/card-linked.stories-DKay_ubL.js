import{x as e}from"./iframe-Dlk9HGlt.js";import{a as r}from"./argTableProps-Bje9zbqP.js";import"./card-linked-DEhYM1Pf.js";import"./card-linked.component-ew_T_ek3.js";import"./props-link-B6x9Wd7P.js";import"./card.component-lSzL9WaE.js";const o={title:"Components/Card/Card Linked",component:"gds-card-linked",tags:["autodocs"],argTypes:{...r("gds-card-linked")},parameters:{docs:{description:{component:`@beta

Card Linked Component

A wrapper component that adds link functionality to \`gds-card\`. <br />
Provides hover and focus states, and handles link behavior while maintaining card styling.

@extends GdsCard`}}}},l={args:{href:"#",innerHTML:"Linked Card"},parameters:{docs:{description:{story:"Basic implementation of a linked card."}}}},c={render:()=>e`
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
  `,parameters:{docs:{description:{story:'\n- `target="_self"` (default): Opens in same window/tab\n- `target="_blank"`: Opens in new tab (adds security attributes)\n- `target="_parent"`: Opens in parent frame\n- `target="_top"`: Opens in full window\n        '}}}},p={render:()=>e`
    <gds-flex gap="l">
      <gds-card-linked href="/file.pdf" download padding="m">
        Download (Browser Named)
      </gds-card-linked>

      <gds-card-linked href="/file.pdf" download="custom-name.pdf" padding="m">
        Download (Custom Name)
      </gds-card-linked>
    </gds-flex>
  `,parameters:{docs:{description:{story:'\n- `download`: Browser determines filename\n- `download="filename.pdf"`: Suggests specific filename\n        '}}}},g={render:()=>e`
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
  `,parameters:{docs:{description:{story:"\n- Automatic `noreferrer noopener` for external links\n- Custom `rel` attribute support\n- Safe external linking\n        "}}}},m={render:()=>e`
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
        `}}}},f=["Default","Target","Downloads","Security","Accessibility"];export{m as Accessibility,l as Default,p as Downloads,g as Security,c as Target,f as __namedExportsOrder,o as default};
