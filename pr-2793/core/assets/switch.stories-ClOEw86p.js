import"./switch-BcngPlNO.js";import"./flex-CF1KIpAj.js";import{b as t}from"./iframe-DK0RITXN.js";import"./text-CFGZV6Vb.js";import"./divider-BJE5VIaB.js";import{a as U}from"./argTableProps-DKKQpteZ.js";import"./switch.component-DeQSnNG9.js";import"./checkmark.component-DL2op7s7.js";import"./icon.component-Bo_miqGC.js";import"./flex.component-wPtAFch1.js";import"./preload-helper-Dp1pzeXC.js";import"./text.component-cCX79pHX.js";import"./default-typography.styles-DA0MYNa-.js";const Z={title:"Components/Switch",component:"gds-switch",tags:["autodocs"],argTypes:{...U("gds-switch"),controlPlacement:{options:["end","start"],control:{type:"select"}},justifyContent:{options:["flex-start","space-between","flex-end"],control:{type:"select"}}},parameters:{docs:{description:{component:"A switch control for binary on/off choices with support for size, direction, disabled state, and emitted state-change events."}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...s,name:"Switch",parameters:{docs:{description:{story:"Basic switch example. Use controls to change label, checked, disabled, size, and control placement."}}},args:{label:"Alerts",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>t`
    <gds-switch
      label=${e.label}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      size=${e.size}
      control-placement=${e.controlPlacement}
      justify-content=${e.justifyContent}
    ></gds-switch>
  `},d={...s,name:"States",parameters:{docs:{description:{story:"State overview for default, checked, and disabled. Shared controls still apply to label, size, and control placement."}}},args:{label:"Theme",size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>t`
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
  `},a={...s,name:"Control Placement",parameters:{docs:{description:{story:"Compares control placement using end (default) and start."}}},args:{checked:!1,disabled:!1,size:"large",justifyContent:"flex-start"},render:e=>t`
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
  `},l={...s,name:"Justify",parameters:{docs:{description:{story:"Demonstrates horizontal distribution of label and control using justify-content."}}},args:{checked:!1,disabled:!1,size:"large"},render:e=>t`
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
  `},c={...s,name:"Size",parameters:{docs:{description:{story:"Compares large and small sizes with shared checked and disabled controls."}}},args:{checked:!1,disabled:!1,justifyContent:"flex-start"},render:e=>t`
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
  `},r={...s,name:"Events",parameters:{docs:{description:{story:"Shows emitted events. Switch interaction updates a text output using gds-ui-state detail.checked."}}},args:{label:"Weekly",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>{const N=L=>{var f;const o=L,g=(f=o.currentTarget.parentElement)==null?void 0:f.querySelector("#event-output");g&&(g.textContent=o.detail.checked?"State: on":"State: off")};return t`
      <gds-flex gap="s" flex-direction="column" align-items="flex-start">
        <gds-switch
          label=${e.label}
          ?checked=${e.checked}
          ?disabled=${e.disabled}
          size=${e.size}
          control-placement=${e.controlPlacement}
          justify-content=${e.justifyContent}
          @gds-ui-state=${N}
        ></gds-switch>
        <gds-text id="event-output" tag="small">State: off</gds-text>
      </gds-flex>
    `}},n={...s,name:"ARIA Forwarding",render:()=>t`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="switch-description">Enabling this will send notifications</div>
      <gds-switch
        label="Email notifications"
        gds-aria-describedby="switch-description"
      ></gds-switch>
    </gds-flex>
  `};var m,x,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var p,h,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,w,$;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(w=a.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var v,z,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var j,C,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,D,E;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(D=r.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,I,T,B,F;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:`In some cases it may be necessary to describe a switch using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal switch input element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-switch), and not only the inner input.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal input element.`,...(F=(B=n.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const ee=["Switch","States","ControlPlacement","JustifyContent","Size","Events","AriaForwarding"];export{n as AriaForwarding,a as ControlPlacement,r as Events,l as JustifyContent,c as Size,d as States,i as Switch,ee as __namedExportsOrder,Z as default};
