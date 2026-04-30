import"./switch-C2JMX46V.js";import"./flex-BGpOyHJY.js";import{b as t}from"./iframe-CsT9moiw.js";import"./text-D6YmuKVt.js";import"./divider-DZPfj6YF.js";import{a as B}from"./argTableProps-A5yy1ZV7.js";import"./switch.component-DXrxsaBL.js";import"./checkmark.component-BhJ1Ystt.js";import"./icon.component-DVm-kf_1.js";import"./flex.component-DByS7Bd2.js";import"./preload-helper-Dp1pzeXC.js";import"./text.component-C-iPFyM3.js";import"./default-typography.styles-0H7Awlzh.js";import"./divider.component-CL3aSvme.js";const Q={title:"Components/Switch",component:"gds-switch",tags:["autodocs"],argTypes:{...B("gds-switch"),controlPlacement:{options:["end","start"],control:{type:"select"}},justifyContent:{options:["flex-start","space-between","flex-end"],control:{type:"select"}}},parameters:{docs:{description:{component:"A switch control for binary on/off choices with support for size, direction, disabled state, and emitted state-change events."}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},n={...s,name:"Switch",parameters:{docs:{description:{story:"Basic switch example. Use controls to change label, checked, disabled, size, and control placement."}}},args:{label:"Alerts",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>t`
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
  `},a={...s,name:"Justify",parameters:{docs:{description:{story:"Demonstrates horizontal distribution of label and control using justify-content."}}},args:{checked:!1,disabled:!1,size:"large"},render:e=>t`
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
  `},i={...s,name:"Size",parameters:{docs:{description:{story:"Compares large and small sizes with shared checked and disabled controls."}}},args:{checked:!1,disabled:!1,justifyContent:"flex-start"},render:e=>t`
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
  `},c={...s,name:"Events",parameters:{docs:{description:{story:"Shows emitted events. Switch interaction updates a text output using gds-ui-state detail.checked."}}},args:{label:"Weekly",checked:!1,disabled:!1,size:"large",controlPlacement:"end",justifyContent:"flex-start"},render:e=>{const E=T=>{var g;const r=T,o=(g=r.currentTarget.parentElement)==null?void 0:g.querySelector("#event-output");o&&(o.textContent=r.detail.checked?"State: on":"State: off")};return t`
      <gds-flex gap="s" flex-direction="column" align-items="flex-start">
        <gds-switch
          label=${e.label}
          ?checked=${e.checked}
          ?disabled=${e.disabled}
          size=${e.size}
          control-placement=${e.controlPlacement}
          justify-content=${e.justifyContent}
          @gds-ui-state=${E}
        ></gds-switch>
        <gds-text id="event-output" tag="small">State: off</gds-text>
      </gds-flex>
    `}};var f,m,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,p,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,y,$;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(y=l.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var w,z,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(z=a.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var k,j,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,P,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const R=["Switch","States","ControlPlacement","JustifyContent","Size","Events"];export{l as ControlPlacement,c as Events,a as JustifyContent,i as Size,d as States,n as Switch,R as __namedExportsOrder,Q as default};
