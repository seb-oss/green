import{a as V}from"./argTableProps-BT2RR-hs.js";import{h as U}from"./iframe-CPRCDjfR.js";import"./flex-Fi0_kUhV.js";import"./alert-CvHfB8pu.js";import"./card-DxyU527-.js";import"./rich-text-SCtsWpMy.js";import"./preload-helper-Dp1pzeXC.js";import"./flex.component-C9uw9EMv.js";import"./alert.component-Bb97ivmo.js";import"./localized-decorator-BGUdOJjD.js";import"./ref-eYWibahW.js";import"./card.component-CJelrqzn.js";import"./circle-check.component-Dnz4Gqoj.js";import"./icon.component-B1VasaLS.js";import"./circle-info.component-BQB39Eyd.js";import"./cross-small.component-Cc1LMIlN.js";import"./triangle-exclamation.component-YsSc9gaK.js";import"./rich-text.component-BUem9BfI.js";import"./default-typography.styles-Cn8QmHeu.js";const ie={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{...V("gds-alert")},args:{variant:"information",role:"alert",buttonLabel:"",innerHTML:"<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message."},parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={render:()=>U`
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
  `},t={args:{variant:"information",buttonLabel:"Take Action",innerHTML:"<strong>Actionable</strong> Alert with a button for quick user interaction."}},r={args:{variant:"information",dismissible:!0,innerHTML:"<strong>Dismissible</strong> User can dismiss this alert."}},a={args:{variant:"positive",timeout:6400,innerHTML:"<strong>Auto Dismiss</strong> This alert disappears automatically after a delay."}},s={args:{variant:"information",dismissible:!0,buttonLabel:"Learn More",innerHTML:'<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'}},n={name:"ARIA Forwarding",args:{variant:"information"},render:()=>U`
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
  `};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,g,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var h,f,b,v,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    buttonLabel: 'Take Action',
    innerHTML: '<strong>Actionable</strong> Alert with a button for quick user interaction.'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var x,A,w,T,L;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: '<strong>Dismissible</strong> User can dismiss this alert.'
  }
}`,...(w=(A=r.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.description}}};var k,I,D,M,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML: '<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.'
  }
}`,...(D=(I=a.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var H,R,C,F,B;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: '<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>'
  }
}`,...(C=(R=s.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Alerts can contain rich content in the main slot.",...(B=(F=s.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var E,q,N,W,P;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(q=n.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal alert element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...(P=(W=n.parameters)==null?void 0:W.docs)==null?void 0:P.description}}};const de=["Default","Variants","WithAction","Dismissible","AutoDismiss","RichContent","AriaForwarding"];export{n as AriaForwarding,a as AutoDismiss,o as Default,r as Dismissible,s as RichContent,e as Variants,t as WithAction,de as __namedExportsOrder,ie as default};
