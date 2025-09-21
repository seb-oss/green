import{o as R}from"./class-map-Cyfzw29o.js";import{h as t}from"./gds-element-4C_whPou.js";import"./alert-DTiNWJFj.js";import"./card-CCsdehCg.js";import"./button-CTNZ7gkP.js";import"./lit-element-DurN2HL2.js";import"./directive-CF8sV3Lr.js";import"./Reflect-BIo-zK4X.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./runtime-CNluP0A8.js";import"./ref-BXLtqtyl.js";import"./directive-helpers-C27VMaVy.js";import"./static-Bn3NESYl.js";import"./tokens.style-Boei6TBQ.js";import"./button.component-as79-sbl.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BwDo8TOz.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-TUy19cvx.js";import"./watch-tFciLXSI.js";import"./card.component-Cn4Jd3Vz.js";import"./div.component-BwtVtTeM.js";import"./circle-check.component-BKNMVOnY.js";import"./icon-DGKumniH.js";import"./unsafe-html-BGx-1t7Q.js";import"./triangle-exclamation.component-BKMramr9.js";import"./cross-small.component-BOq_QA_r.js";const dt={title:"Components/Alert",component:"gds-alert",tags:["autodocs"],argTypes:{variant:{control:"select",options:["information","notice","positive","warning","negative"]},role:{control:"select",options:["alert","status"]},timeout:{control:"number",description:"Time in milliseconds before the alert is automatically dismissed"}},args:{variant:"information",role:"alert",buttonLabel:"",innerHTML:t`<strong>Information</strong> Body text starts on the same
      row as heading. A link (optional) always ends the message.`},render:o=>t`
    <gds-alert
      variant="${o.variant}"
      role="alert"
      ?dismissible="${o.dismissible}"
      timeout="${R(o.timeout)}"
    >
      ${o.innerHTML}
    </gds-alert>
  `,parameters:{docs:{description:{component:"Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message."}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={args:{},render:()=>t`
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
  `},r={args:{variant:"information",dismissible:!1,buttonLabel:"Take Action",innerHTML:t`<strong>Actionable</strong> Alert with a button for quick
      user interaction.`}},s={args:{variant:"information",dismissible:!0,innerHTML:t`<strong>Dismissible</strong> User can dismiss this alert.`}},n={args:{variant:"positive",timeout:6400,innerHTML:t`<strong>Auto Dismiss</strong> This alert disappears
      automatically after a delay.`}},a={args:{variant:"information",role:"alert",dismissible:!0,buttonLabel:"Learn More",innerHTML:t`<gds-rich-text
      ><strong>Rich Content</strong> Includes <a href="#">a link</a>,
      <em>emphasis</em>, and <code>code</code>.</gds-rich-text
    >`}};var l,m,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,g,p,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
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
}`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source},description:{story:`Alert is avaliable in multiple variants to indicate different types of messages.
Each variant has a specific color and icon to convey the message type.`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var f,v,b,y,A;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: false,
    buttonLabel: 'Take Action',
    innerHTML: html\`<strong>Actionable</strong> Alert with a button for quick
      user interaction.\`
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Alerts can have a action button to allow users to take an immediate action.",...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};var x,w,T,L,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: html\`<strong>Dismissible</strong> User can dismiss this alert.\`
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.",...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.description}}};var M,D,H,I,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML: html\`<strong>Auto Dismiss</strong> This alert disappears
      automatically after a delay.\`
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:"Alerts can automatically dismiss themselves after a specified timeout.",...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.description}}};var S,B,E,q,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML: html\`<gds-rich-text
      ><strong>Rich Content</strong> Includes <a href="#">a link</a>,
      <em>emphasis</em>, and <code>code</code>.</gds-rich-text
    >\`
  }
}`,...(E=(B=a.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"Alerts can contain rich content in the main slot.",...(N=(q=a.parameters)==null?void 0:q.docs)==null?void 0:N.description}}};const gt=["Default","Variants","WithAction","Dismissible","AutoDismiss","RichContent"];export{n as AutoDismiss,i as Default,s as Dismissible,a as RichContent,e as Variants,r as WithAction,gt as __namedExportsOrder,dt as default};
