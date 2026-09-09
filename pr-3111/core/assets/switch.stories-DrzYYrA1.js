import"./switch-BWbVzUGF.js";import"./flex-C0SES4rt.js";import{b as t}from"./iframe-D9F9vJcX.js";import"./text-WzEQU6ym.js";import"./divider-CTGT3VjQ.js";import{a as x}from"./argTableProps-DBuN_qZI.js";import"./switch.component-BlWuhdTG.js";import"./checkmark.component-Bel0vMFw.js";import"./icon.component-C5a9Z25y.js";import"./flex.component-CwPQBbIL.js";import"./preload-helper-PPVm8Dsz.js";import"./text.component-DtBvUMwf.js";import"./default-typography.styles-BKGLsxiw.js";const A={title:"Components/Switch",component:"gds-switch",tags:["autodocs"],argTypes:{...x("gds-switch"),controlPlacement:{options:["end","start"],control:{type:"select"}},justifyContent:{options:["flex-start","space-between","flex-end"],control:{type:"select"}}},parameters:{docs:{description:{component:"A switch control for binary on/off choices with support for size, direction, disabled state, and emitted state-change events."}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},d={...s,name:"Switch",parameters:{docs:{description:{story:"Basic switch example. Use controls to change label, checked, disabled, size, and control placement."}}},args:{label:"Alerts",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>t`
    <gds-switch
      label=${e.label}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      size=${e.size}
      control-placement=${e.controlPlacement}
      justify-content=${e.justifyContent}
    ></gds-switch>
  `},i={...s,name:"States",parameters:{docs:{description:{story:"State overview for default, checked, and disabled. Shared controls still apply to label, size, and control placement."}}},args:{label:"Theme",size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>t`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="4xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label=${e.label}
            size=${e.size}
            control-placement=${e.controlPlacement}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>

        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Checked</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Autosave"
            ?checked=${!0}
            size=${e.size}
            control-placement=${e.controlPlacement}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>

        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Disabled</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Biometric"
            ?disabled=${!0}
            size=${e.size}
            control-placement=${e.controlPlacement}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Disabled</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Biometric"
            ?disabled=${!0}
            checked
            size=${e.size}
            control-placement=${e.controlPlacement}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  `},n={...s,name:"Readonly",render:()=>t`
    <gds-flex gap="2xl">
      <gds-switch label="Autosave" readonly></gds-switch>
      <gds-switch label="Autosave" readonly checked></gds-switch>
    </gds-flex>
  `},l={...s,name:"Control Placement",parameters:{docs:{description:{story:"Compares control placement using end (default) and start."}}},args:{checked:!1,disabled:!1,size:"large",justifyContent:"flex-start"},render:e=>t`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">end (default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Label left"
            control-placement="end"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            size=${e.size}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">start</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Label right"
            control-placement="start"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            size=${e.size}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  `},c={...s,name:"Justify",parameters:{docs:{description:{story:"Demonstrates horizontal distribution of label and control using justify-content."}}},args:{checked:!1,disabled:!1,size:"large"},render:e=>t`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="3" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">flex-start</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="flex-start"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            size=${e.size}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">space-between</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="space-between"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            size=${e.size}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">flex-end</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="flex-end"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            size=${e.size}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  `},r={...s,name:"Size",parameters:{docs:{description:{story:"Compares large and small sizes with shared checked and disabled controls."}}},args:{checked:!1,disabled:!1,justifyContent:"flex-start"},render:e=>t`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">large(default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Size large"
            size="large"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Size small"
            size="small"
            ?checked=${e.checked}
            ?disabled=${e.disabled}
            justify-content=${e.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  `},o={...s,name:"Events",parameters:{docs:{description:{story:"Shows emitted events. Switch interaction updates a text output using gds-ui-state detail.checked."}}},args:{label:"Weekly",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>{const f=u=>{const g=u,m=g.currentTarget.parentElement?.querySelector("#event-output");m&&(m.textContent=g.detail.checked?"State: on":"State: off")};return t`
      <gds-flex gap="s" flex-direction="column" align-items="flex-start">
        <gds-switch
          label=${e.label}
          ?checked=${e.checked}
          ?disabled=${e.disabled}
          size=${e.size}
          control-placement=${e.controlPlacement}
          justify-content=${e.justifyContent}
          @gds-ui-state=${f}
        ></gds-switch>
        <gds-text id="event-output" tag="small">State: off</gds-text>
      </gds-flex>
    `}},a={...s,name:"ARIA Forwarding",render:()=>t`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="switch-description">Enabling this will send notifications</div>
      <gds-switch
        label="Email notifications"
        gds-aria-describedby="switch-description"
      ></gds-switch>
    </gds-flex>
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Switch',
  parameters: {
    docs: {
      description: {
        story: 'Basic switch example. Use controls to change label, checked, disabled, size, and control placement.'
      }
    }
  },
  args: {
    label: 'Alerts',
    checked: false,
    disabled: false,
    size: 'large',
    controlPlacement: 'end',
    justifyContent: 'flex-start'
  },
  render: args => html\`
    <gds-switch
      label=\${args.label}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      size=\${args.size}
      control-placement=\${args.controlPlacement}
      justify-content=\${args.justifyContent}
    ></gds-switch>
  \`
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'State overview for default, checked, and disabled. Shared controls still apply to label, size, and control placement.'
      }
    }
  },
  args: {
    label: 'Theme',
    size: 'large',
    controlPlacement: 'end',
    justifyContent: 'flex-start'
  },
  render: args => html\`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="4xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label=\${args.label}
            size=\${args.size}
            control-placement=\${args.controlPlacement}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>

        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Checked</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Autosave"
            ?checked=\${true}
            size=\${args.size}
            control-placement=\${args.controlPlacement}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>

        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Disabled</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Biometric"
            ?disabled=\${true}
            size=\${args.size}
            control-placement=\${args.controlPlacement}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">Disabled</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Biometric"
            ?disabled=\${true}
            checked
            size=\${args.size}
            control-placement=\${args.controlPlacement}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Readonly',
  render: () => html\`
    <gds-flex gap="2xl">
      <gds-switch label="Autosave" readonly></gds-switch>
      <gds-switch label="Autosave" readonly checked></gds-switch>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source},description:{story:"The `readonly` property can be set to make a switch read-only. Unlike `disabled`, the switch\nstays focusable and its value is still submitted with the form, but it can't be toggled.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Control Placement',
  parameters: {
    docs: {
      description: {
        story: 'Compares control placement using end (default) and start.'
      }
    }
  },
  args: {
    checked: false,
    disabled: false,
    size: 'large',
    justifyContent: 'flex-start'
  },
  render: args => html\`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">end (default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Label left"
            control-placement="end"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            size=\${args.size}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">start</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Label right"
            control-placement="start"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            size=\${args.size}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Justify',
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates horizontal distribution of label and control using justify-content.'
      }
    }
  },
  args: {
    checked: false,
    disabled: false,
    size: 'large'
  },
  render: args => html\`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="3" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">flex-start</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="flex-start"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            size=\${args.size}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">space-between</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="space-between"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            size=\${args.size}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="stretch">
          <gds-text tag="small">flex-end</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Newsletter"
            justify-content="flex-end"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            size=\${args.size}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  \`
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  parameters: {
    docs: {
      description: {
        story: 'Compares large and small sizes with shared checked and disabled controls.'
      }
    }
  },
  args: {
    checked: false,
    disabled: false,
    justifyContent: 'flex-start'
  },
  render: args => html\`
    <gds-flex gap="2xl" flex-direction="column" align-items="flex-start">
      <gds-grid columns="2" gap="2xl">
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">large(default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Size large"
            size="large"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" align-items="flex-start">
          <gds-text tag="small">small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-switch
            label="Size small"
            size="small"
            ?checked=\${args.checked}
            ?disabled=\${args.disabled}
            justify-content=\${args.justifyContent}
          ></gds-switch>
        </gds-flex>
      </gds-grid>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Events',
  parameters: {
    docs: {
      description: {
        story: 'Shows emitted events. Switch interaction updates a text output using gds-ui-state detail.checked.'
      }
    }
  },
  args: {
    label: 'Weekly',
    checked: false,
    disabled: false,
    size: 'large',
    controlPlacement: 'end',
    justifyContent: 'flex-start'
  },
  render: args => {
    const handleUiState = (event: Event) => {
      const customEvent = event as CustomEvent<{
        checked: boolean;
      }>;
      const host = customEvent.currentTarget as HTMLElement;
      const output = host.parentElement?.querySelector('#event-output');
      if (output) {
        output.textContent = customEvent.detail.checked ? 'State: on' : 'State: off';
      }
    };
    return html\`
      <gds-flex gap="s" flex-direction="column" align-items="flex-start">
        <gds-switch
          label=\${args.label}
          ?checked=\${args.checked}
          ?disabled=\${args.disabled}
          size=\${args.size}
          control-placement=\${args.controlPlacement}
          justify-content=\${args.justifyContent}
          @gds-ui-state=\${handleUiState}
        ></gds-switch>
        <gds-text id="event-output" tag="small">State: off</gds-text>
      </gds-flex>
    \`;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="switch-description">Enabling this will send notifications</div>
      <gds-switch
        label="Email notifications"
        gds-aria-describedby="switch-description"
      ></gds-switch>
    </gds-flex>
  \`
}`,...a.parameters?.docs?.source},description:{story:`In some cases it may be necessary to describe a switch using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal switch input element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-switch), and not only the inner input.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal input element.`,...a.parameters?.docs?.description}}};const E=["Switch","States","Readonly","ControlPlacement","JustifyContent","Size","Events","AriaForwarding"];export{a as AriaForwarding,l as ControlPlacement,o as Events,c as JustifyContent,n as Readonly,r as Size,i as States,d as Switch,E as __namedExportsOrder,A as default};
