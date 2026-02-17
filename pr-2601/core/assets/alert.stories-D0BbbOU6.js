import{a as t}from"./argTableProps-gX0lf344.js";import{h as e}from"./iframe-BavzDZMV.js";import"./alert-BlIlyA7-.js";import"./card-B9lFZzJK.js";import"./rich-text-D3I0ODwX.js";import"./alert.component-OAZNXiXA.js";import"./localized-decorator-B6A2Gnt2.js";import"./ref-CNgy3l5F.js";import"./card.component-CUPSPXah.js";import"./circle-check.component-CSDmdiwF.js";import"./icon.component-Cev4K6id.js";import"./triangle-exclamation.component-B_6hKlEp.js";import"./cross-small.component-Df8LNFan.js";import"./rich-text.component-BYhgFLZt.js";import"./default-typography.styles-CLT6BhIi.js";const b={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{...t("gds-alert")},args:{variant:"information",role:"alert",buttonLabel:"",innerHTML:"<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message."},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},v={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},y={render:()=>e`
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
  `},A={args:{variant:"information",buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},x={args:{variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},T={args:{variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},w={args:{variant:"information",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}},L=["Default","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{T as AutoDismiss,v as Default,x as Dismissible,w as RichContent,y as Variants,A as WithAction,L as __namedExportsOrder,b as default};
