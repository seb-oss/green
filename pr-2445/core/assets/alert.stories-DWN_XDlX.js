import{a as q}from"./argTableProps-CdRWlAnZ.js";import{h as N}from"./gds-element-DTROifYq.js";import"./alert-2PucYzAS.js";import"./card-B9-8IG9l.js";import"./button-BQ4gMG5W.js";import"./rich-text-CZgJVWKv.js";import"./custom-elements-CTOy9aj9.js";import"./lit-element-Bx14lxc-.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./runtime-CNluP0A8.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./static-B8S6DEnV.js";import"./tokens.style-CJKwYBen.js";import"./button.component-qvVtjlow.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BfqUw7Aj.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./card.component-CHpy_s_p.js";import"./div.component-CpSRkgEJ.js";import"./circle-check.component-BdLUQeu6.js";import"./icon-DeOpVb_j.js";import"./unsafe-html-CYO4avEf.js";import"./triangle-exclamation.component-eeWWsEkG.js";import"./cross-small.component-D5Wdub0G.js";import"./default-typography.styles-DG7u6j1x.js";const ut={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{...q("gds-alert")},args:{variant:"information",role:"alert",buttonLabel:"",innerHTML:"<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message."},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={render:()=>N`
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
  `},e={args:{variant:"information",buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},r={args:{variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},s={args:{variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},a={args:{variant:"information",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}};var n,i,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,d,g,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.description}}};var u,h,f,v,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    buttonLabel: 'Take Action',
    innerHTML: '<strong>Actionable</strong> Alert with a button for quick user interaction.'
  }
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(b=(v=e.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var y,A,x,w,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: '<strong>Dismissible</strong> User can dismiss this alert.'
  }
}`,...(x=(A=r.parameters)==null?void 0:A.docs)==null?void 0:x.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var L,k,M,D,H;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML: '<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.'
  }
}`,...(M=(k=s.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(H=(D=s.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var I,C,S,B,E;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: '<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"Alerts can contain rich content in the main slot.",...(E=(B=a.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};const ht=["Default","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{s as AutoDismiss,o as Default,r as Dismissible,a as RichContent,t as Variants,e as WithAction,ht as __namedExportsOrder,ut as default};
