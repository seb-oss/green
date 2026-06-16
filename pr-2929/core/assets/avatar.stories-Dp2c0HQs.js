import{b as a}from"./iframe-DR7_L-1p.js";import"./avatar-DLPyV0Rp.js";import"./flex-gnJls8Qu.js";import"./badge-Ct3fgb51.js";import"./preload-helper-PPVm8Dsz.js";import"./avatar.component-B8kApZ3O.js";import"./people-profile.component-DzRi-tK5.js";import"./icon.component-DtjDdRH9.js";import"./flex.component-BWUkr1rl.js";import"./badge.component-D22w_wDD.js";const x={title:"Components/Avatar",component:"gds-avatar",parameters:{layout:"centered",docs:{description:{component:"A visual element representing a user or entity.\nSupports image, text, and icon fallbacks, optional badge content, and grouped layouts.\n\nFeatures:\n- **Image**: Use the `src` and `alt` attributes to render a profile image.\n- **Text fallback**: Add short text in the default slot when no image is available.\n- **Icon fallback**: When neither image nor slot content is provided, a default person icon is shown.\n- **Sizes**: Choose from `xs`, `s`, `m`, or `l`.\n- **Shapes**: Choose from `circular` (default) or `square`.\n- **Badge slot**: Add a `gds-badge` in the `badge` slot for counters or notifications.\n- **Group support**: Use `gds-avatar-group` to render stacked avatars with overlap and cutout.\n\nExample usage:\n\n```html\n<gds-avatar>AB</gds-avatar>\n```"}}},tags:["autodocs"]},s={name:"Default",parameters:{docs:{description:{story:`
      Shows the default avatar state with no image or slot content provided.
The component renders its built-in fallback icon.
        `}}},render:()=>a`<gds-avatar></gds-avatar>`},r={name:"Text",parameters:{docs:{description:{story:"\nDemonstrates the\ndefault-slot text fallback across supported avatar sizes (`xs`, `s`, `m`, and `l`).\nUse this pattern when profile images are unavailable.\n        "}}},render:()=>a`
    <gds-flex gap="m" align-items="center">
      <gds-avatar size="xs">AB</gds-avatar>
      <gds-avatar size="s">AB</gds-avatar>
      <gds-avatar size="m">AB</gds-avatar>
      <gds-avatar size="l">AB</gds-avatar>
    </gds-flex>
  `},t={name:"Sizes",parameters:{docs:{description:{story:"\nShows the visual scale progression of the avatar component from\n`xs` to `l`.\nUseful for validating layout spacing and hierarchy in different UI contexts.\n        "}}},render:()=>a`
    <gds-flex gap="m" align-items="center">
      <gds-avatar size="xs"></gds-avatar>
      <gds-avatar size="s"></gds-avatar>
      <gds-avatar size="m"></gds-avatar>
      <gds-avatar size="l"></gds-avatar>
    </gds-flex>
  `},e={name:"Color & Background",parameters:{docs:{description:{story:`
Demonstrates semantic color and background combinations for avatars.
Useful for quickly previewing positive, notice, and negative states.
        `}}},render:()=>a`
    <gds-flex gap="m" align-items="center">
      <gds-avatar background="positive-01" color="positive-01" size="l">
        AB
      </gds-avatar>
      <gds-avatar background="notice-01" color="notice-01" size="l">
        AB
      </gds-avatar>
      <gds-avatar background="negative-01" color="negative-01" size="l">
        AB
      </gds-avatar>
    </gds-flex>
  `},n={name:"Image",parameters:{docs:{description:{story:"\nDisplays avatar images using the\n`src` and `alt` attributes.\nIncludes both `circular` and `square` shapes for profile and utility use cases.\n        "}}},render:()=>a`
    <gds-flex gap="l" align-items="center">
      <gds-avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="Jane Doe"
        shape="circular"
        size="l"
      ></gds-avatar>
      <gds-avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="Jane Doe"
        shape="square"
        size="l"
      ></gds-avatar>
    </gds-flex>
  `},i={name:"Shapes",parameters:{docs:{description:{story:"\nCompares the available avatar shape options:\n`circular` (default) and `square`.\nChoose a shape that aligns with the surrounding design language.\n        "}}},render:()=>a`
    <gds-flex gap="m" align-items="center">
      <gds-avatar shape="circular">AB</gds-avatar>
      <gds-avatar shape="square">AB</gds-avatar>
    </gds-flex>
  `},g={name:"Badge",parameters:{docs:{description:{story:`
Demonstrates badge usage in the \`badge\` slot for notification and status counts.
Useful for chat, inbox, or activity scenarios where an avatar needs supplementary context.
        `}}},render:()=>a`
    <gds-flex gap="l" align-items="center">
      <gds-avatar size="l">
        AB
        <gds-badge slot="badge" size="small" variant="positive" notification>
          9
        </gds-badge>
      </gds-avatar>
      <gds-avatar size="l">
        CD
        <gds-badge slot="badge" size="small" variant="negative" notification>
          10+
        </gds-badge>
      </gds-avatar>
      <gds-avatar size="l">
        EF
        <gds-badge slot="badge" size="small" variant="notice" notification>
          99+
        </gds-badge>
      </gds-avatar>
    </gds-flex>
  `},d={name:"Group",parameters:{docs:{description:{story:'\nShows grouped avatars with automatic overflow handling in\n`gds-avatar-group`.\nIncludes examples with text fallback and images at different sizes to represent teams or participants.\nFor accessibility, provide an `aria-label` on each group (for example, `aria-label="Authors"`).\n        '}}},render:()=>a`
    <gds-flex flex-direction="column" gap="xl" padding="l">
      <gds-avatar-group aria-label="Authors">
        <gds-avatar>AB</gds-avatar>
        <gds-avatar>CD</gds-avatar>
        <gds-avatar>EF</gds-avatar>
        <gds-avatar>GH</gds-avatar>
        <gds-avatar>IJ</gds-avatar>
        <gds-avatar>KL</gds-avatar>
        <gds-avatar>MN</gds-avatar>
        <gds-avatar>+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Project team">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="l"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="l"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="l"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="l"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="l"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="l"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="l">+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Contributors">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar>+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Small avatars">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="s"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="s"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="s"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="s"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="s"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="s"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="s">+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Extra small avatars">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="xs"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="xs"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="xs"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="xs"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="xs"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="xs"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="xs">+5</gds-avatar>
      </gds-avatar-group>
    </gds-flex>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: \`
      Shows the default avatar state with no image or slot content provided.
The component renders its built-in fallback icon.
        \`
      }
    }
  },
  render: () => html\`<gds-avatar></gds-avatar>\`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Text',
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the
default-slot text fallback across supported avatar sizes (\\\`xs\\\`, \\\`s\\\`, \\\`m\\\`, and \\\`l\\\`).
Use this pattern when profile images are unavailable.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="m" align-items="center">
      <gds-avatar size="xs">AB</gds-avatar>
      <gds-avatar size="s">AB</gds-avatar>
      <gds-avatar size="m">AB</gds-avatar>
      <gds-avatar size="l">AB</gds-avatar>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: \`
Shows the visual scale progression of the avatar component from
\\\`xs\\\` to \\\`l\\\`.
Useful for validating layout spacing and hierarchy in different UI contexts.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="m" align-items="center">
      <gds-avatar size="xs"></gds-avatar>
      <gds-avatar size="s"></gds-avatar>
      <gds-avatar size="m"></gds-avatar>
      <gds-avatar size="l"></gds-avatar>
    </gds-flex>
  \`
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Color & Background',
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates semantic color and background combinations for avatars.
Useful for quickly previewing positive, notice, and negative states.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="m" align-items="center">
      <gds-avatar background="positive-01" color="positive-01" size="l">
        AB
      </gds-avatar>
      <gds-avatar background="notice-01" color="notice-01" size="l">
        AB
      </gds-avatar>
      <gds-avatar background="negative-01" color="negative-01" size="l">
        AB
      </gds-avatar>
    </gds-flex>
  \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Image',
  parameters: {
    docs: {
      description: {
        story: \`
Displays avatar images using the
\\\`src\\\` and \\\`alt\\\` attributes.
Includes both \\\`circular\\\` and \\\`square\\\` shapes for profile and utility use cases.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="l" align-items="center">
      <gds-avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="Jane Doe"
        shape="circular"
        size="l"
      ></gds-avatar>
      <gds-avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="Jane Doe"
        shape="square"
        size="l"
      ></gds-avatar>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Shapes',
  parameters: {
    docs: {
      description: {
        story: \`
Compares the available avatar shape options:
\\\`circular\\\` (default) and \\\`square\\\`.
Choose a shape that aligns with the surrounding design language.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="m" align-items="center">
      <gds-avatar shape="circular">AB</gds-avatar>
      <gds-avatar shape="square">AB</gds-avatar>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Badge',
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates badge usage in the \\\`badge\\\` slot for notification and status counts.
Useful for chat, inbox, or activity scenarios where an avatar needs supplementary context.
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="l" align-items="center">
      <gds-avatar size="l">
        AB
        <gds-badge slot="badge" size="small" variant="positive" notification>
          9
        </gds-badge>
      </gds-avatar>
      <gds-avatar size="l">
        CD
        <gds-badge slot="badge" size="small" variant="negative" notification>
          10+
        </gds-badge>
      </gds-avatar>
      <gds-avatar size="l">
        EF
        <gds-badge slot="badge" size="small" variant="notice" notification>
          99+
        </gds-badge>
      </gds-avatar>
    </gds-flex>
  \`
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Group',
  parameters: {
    docs: {
      description: {
        story: \`
Shows grouped avatars with automatic overflow handling in
\\\`gds-avatar-group\\\`.
Includes examples with text fallback and images at different sizes to represent teams or participants.
For accessibility, provide an \\\`aria-label\\\` on each group (for example, \\\`aria-label="Authors"\\\`).
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" padding="l">
      <gds-avatar-group aria-label="Authors">
        <gds-avatar>AB</gds-avatar>
        <gds-avatar>CD</gds-avatar>
        <gds-avatar>EF</gds-avatar>
        <gds-avatar>GH</gds-avatar>
        <gds-avatar>IJ</gds-avatar>
        <gds-avatar>KL</gds-avatar>
        <gds-avatar>MN</gds-avatar>
        <gds-avatar>+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Project team">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="l"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="l"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="l"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="l"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="l"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="l"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="l">+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Contributors">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar>+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Small avatars">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="s"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="s"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="s"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="s"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="s"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="s"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="s">+5</gds-avatar>
      </gds-avatar-group>
      <gds-avatar-group aria-label="Extra small avatars">
        <gds-avatar
          src="https://i.pravatar.cc/150?img=1"
          size="xs"
          alt="Person 1"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=2"
          size="xs"
          alt="Person 2"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=3"
          size="xs"
          alt="Person 3"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=4"
          size="xs"
          alt="Person 4"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=5"
          size="xs"
          alt="Person 5"
        ></gds-avatar>
        <gds-avatar
          src="https://i.pravatar.cc/150?img=6"
          size="xs"
          alt="Person 6"
        ></gds-avatar>
        <gds-avatar size="xs">+5</gds-avatar>
      </gds-avatar-group>
    </gds-flex>
  \`
}`,...d.parameters?.docs?.source}}};const b=["Default","WithText","Sizes","ColorAndBackground","WithImage","Shapes","WithBadge","Group"];export{e as ColorAndBackground,s as Default,d as Group,i as Shapes,t as Sizes,g as WithBadge,n as WithImage,r as WithText,b as __namedExportsOrder,x as default};
