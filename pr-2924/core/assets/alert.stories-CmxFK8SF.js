import{a as d}from"./argTableProps-ydJwTBrt.js";import{h as i}from"./iframe-C4yZLhah.js";import"./flex-1vFUuq7t.js";import"./alert-fu9GYYzg.js";import"./card-NpjwlSRB.js";import"./rich-text-3ercOPT-.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-CP56clHh.js";import"./alert.component-CMn0qcsV.js";import"./localized-decorator-CKri8wUY.js";import"./ref-v4JQgoLC.js";import"./card.component-25DE1J97.js";import"./circle-check.component-CGRKCbt6.js";import"./icon.component-CpY061-a.js";import"./circle-info.component-ALlf5GWK.js";import"./cross-small.component-CA12FUAc.js";import"./triangle-exclamation.component-D7VAryXx.js";import"./rich-text.component-j8b6JSX7.js";import"./default-typography.styles-DhEvBON3.js";const M={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{...d("gds-alert")},args:{variant:"information",role:"alert",buttonLabel:"",innerHTML:"<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message."},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={render:()=>i`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  `},t={args:{variant:"information",buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},r={args:{variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},a={args:{variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},s={args:{variant:"information",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}},n={name:"ARIA Forwarding",args:{variant:"information"},render:()=>i`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="alert-label">System Status</div>
      <div id="alert-description">Important update regarding your account</div>
      <gds-alert
        variant="information"
        gds-aria-labelledby="alert-label"
        gds-aria-describedby="alert-description"
        role="alert"
      >
        <strong>Alert with external labels</strong> This alert demonstrates ARIA
        forwarding to associate external accessibility text.
      </gds-alert>
    </gds-flex>
  `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  \`
}`,...e.parameters?.docs?.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    buttonLabel: 'Take Action',
    innerHTML: '<strong>Actionable</strong> Alert with a button for quick user interaction.'
  }
}`,...t.parameters?.docs?.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: '<strong>Dismissible</strong> User can dismiss this alert.'
  }
}`,...r.parameters?.docs?.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML: '<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.'
  }
}`,...a.parameters?.docs?.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: '<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'
  }
}`,...s.parameters?.docs?.source},description:{story:"Alerts can contain rich content in the main slot.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        role="alert"
      >
        <strong>Alert with external labels</strong> This alert demonstrates ARIA
        forwarding to associate external accessibility text.
      </gds-alert>
    </gds-flex>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal alert element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...n.parameters?.docs?.description}}};const S=["Default","Variants","WithAction","Dismissible","AutoDismiss","RichContent","AriaForwarding"];export{n as AriaForwarding,a as AutoDismiss,o as Default,r as Dismissible,s as RichContent,e as Variants,t as WithAction,S as __namedExportsOrder,M as default};
