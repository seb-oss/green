import{a as m}from"./argTableProps-BV53iAhP.js";import{h as g,g as p}from"./iframe-DuBKvbTM.js";import"./flex-DduxFC4A.js";import"./alert-B8sM2moi.js";import"./card-ZjfnDToT.js";import"./rich-text-D_W0ekdB.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-Bilq_XdN.js";import"./alert.component-pdVr7H0o.js";import"./localized-decorator-C5acqPyk.js";import"./ref-CRGKxpct.js";import"./card.component-Dxb8Eqsg.js";import"./circle-check.component-DYBVnk0r.js";import"./icon.component-C_G_bdtR.js";import"./circle-info.component-D65cIEDt.js";import"./cross-small.component-DUiJhwg-.js";import"./triangle-exclamation.component-DGkGzw8e.js";import"./rich-text.component-F1Zkws_H.js";import"./default-typography.styles-moOMOm0I.js";const F={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{...m("gds-alert")},args:{variant:"information",alertRole:"alert",closed:!1,buttonLabel:"",innerHTML:"<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message."},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},u=()=>{const e=document.getElementById("dynamic-alert-target");if(!e)return;const t=document.createElement(p("gds-alert"));t.setAttribute("variant","warning"),t.setAttribute("alert-role","alert"),t.setAttribute("label","Dynamically inserted alert"),t.innerHTML="<strong>Dynamic alert</strong> This alert was inserted after activating the button.",e.replaceChildren(t)},h=()=>{const e=document.getElementById("mounted-alert-target");e&&(e.innerHTML="<strong>Mounted alert</strong> This content was added after the inner live region was already present.",e.closed=!1)},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={render:()=>g`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" alert-role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" alert-role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" alert-role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" alert-role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" alert-role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  `},a={args:{variant:"information",buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},n={args:{variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},s={args:{variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},o={render:()=>g`
    <gds-flex flex-direction="column" gap="m" align-items="flex-start">
      <gds-button @click=${u}>Insert alert</gds-button>
      <div id="dynamic-alert-target"></div>
    </gds-flex>
  `},i={render:()=>g`
    <gds-flex flex-direction="column" gap="m" align-items="flex-start">
      <gds-button @click=${h}>Show mounted alert</gds-button>
      <gds-alert
        id="mounted-alert-target"
        closed
        alert-role="alert"
        label="Mounted alert"
        variant="warning"
      ></gds-alert>
    </gds-flex>
  `},l={args:{variant:"information",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}},d={name:"ARIA Forwarding",args:{variant:"information"},render:()=>g`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="alert-label">System Status</div>
      <div id="alert-description">Important update regarding your account</div>
      <gds-alert
        variant="information"
        gds-aria-labelledby="alert-label"
        gds-aria-describedby="alert-description"
        alert-role="alert"
      >
        <strong>Alert with external labels</strong> This alert demonstrates ARIA
        forwarding to associate external accessibility text.
      </gds-alert>
    </gds-flex>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
    }
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" alert-role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" alert-role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" alert-role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" alert-role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" alert-role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    buttonLabel: 'Take Action',
    innerHTML: '<strong>Actionable</strong> Alert with a button for quick user interaction.'
  }
}`,...a.parameters?.docs?.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: '<strong>Dismissible</strong> User can dismiss this alert.'
  }
}`,...n.parameters?.docs?.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML: '<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.'
  }
}`,...s.parameters?.docs?.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="m" align-items="flex-start">
      <gds-button @click=\${insertDynamicAlert}>Insert alert</gds-button>
      <div id="dynamic-alert-target"></div>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Diagnostic story for checking whether dynamically inserting a populated alert announces the content.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="m" align-items="flex-start">
      <gds-button @click=\${showMountedAlert}>Show mounted alert</gds-button>
      <gds-alert
        id="mounted-alert-target"
        closed
        alert-role="alert"
        label="Mounted alert"
        variant="warning"
      ></gds-alert>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source},description:{story:"Diagnostic story for checking whether an already-mounted inner live region announces content changes.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: '<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'
  }
}`,...l.parameters?.docs?.source},description:{story:"Alerts can contain rich content in the main slot.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'ARIA Forwarding',
  args: {
    variant: 'information'
  },
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="alert-label">System Status</div>
      <div id="alert-description">Important update regarding your account</div>
      <gds-alert
        variant="information"
        gds-aria-labelledby="alert-label"
        gds-aria-describedby="alert-description"
        alert-role="alert"
      >
        <strong>Alert with external labels</strong> This alert demonstrates ARIA
        forwarding to associate external accessibility text.
      </gds-alert>
    </gds-flex>
  \`
}`,...d.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal alert element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...d.parameters?.docs?.description}}};const N=["Default","Variants","WithAction","Dismissible","AutoDismiss","DynamicallyInserted","MountedInnerLiveRegion","RichContent","AriaForwarding"];export{d as AriaForwarding,s as AutoDismiss,c as Default,n as Dismissible,o as DynamicallyInserted,i as MountedInnerLiveRegion,l as RichContent,r as Variants,a as WithAction,N as __namedExportsOrder,F as default};
