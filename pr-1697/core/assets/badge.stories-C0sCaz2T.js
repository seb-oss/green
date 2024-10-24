import{x as a}from"./lit-element-C_s9q329.js";import"./badge-DJWOzsSK.js";import"./grid-pyUjDIof.js";import"./flex-Be9anuuV.js";import"./divider-tua8V-qY.js";import"./triangle-exclamation-D2VDkIvV.js";import"./arrow-rotate-counter-clockwise-v6M3CSXg.js";import"./plus-small-DgTtMPkT.js";import"./rocket-DLwzY6zV.js";import"./custom-element-scoping-CpYtbs9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-RalixZsd.js";import"./style-expression-property-D0nhDdjH.js";import"./container-E3m_XvWh.js";import"./icon-C1rUgQqA.js";import"./directive-CF8sV3Lr.js";const te={title:"Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:'A badge is a small status or notification indicator that can be used to display a message or status.\n\nFeatures:\n- **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.\n- **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.\n- **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.\n- **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.\n\nExample usage:\n\n```html\n<gds-badge variant="positive">\n  <gds-icon-rocket slot="lead"></gds-icon-rocket>\n  Launch\n</gds-badge>\n```'}}},tags:["autodocs"]},o={name:"Variants",render:e=>a`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="negative" disabled>
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="negative" disabled> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge size="small" variant="information"> 120 </gds-badge>
          <gds-badge size="small" variant="notice"> 428 </gds-badge>
          <gds-badge size="small" variant="positive"> 32 </gds-badge>
          <gds-badge size="small" variant="warning"> 602 </gds-badge>
          <gds-badge size="small" variant="negative"> 537 </gds-badge>
          <gds-badge size="small" variant="negative" disabled> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge variant="positive" notification></gds-badge>
          <gds-badge variant="positive" notification>9</gds-badge>
          <gds-badge variant="positive" notification>
            999
            <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
          <gds-badge variant="negative" notification></gds-badge>
          <gds-badge variant="negative" notification>9</gds-badge>
          <gds-badge variant="negative" notification>
            999 <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},s={name:"Lead",parameters:{controls:{include:[]}},render:e=>a`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},d={name:"Trail",parameters:{controls:{include:[]}},render:e=>a`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  `},i={name:"Size",render:e=>a`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  `},t={name:"Disabled",render:e=>a`
    <gds-flex gap="xl">
      <gds-badge variant="positive" disabled>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning" disabled>
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},g={name:"Notification",parameters:{actions:{handles:["mouseover","mouseout"]}},play:async()=>{document.querySelectorAll("gds-badge[notification]").forEach(e=>{let n;const U=()=>{var b;const c=((b=e.textContent)==null?void 0:b.trim())||"",l=c.replace(/\D/g,"");if(l&&!isNaN(Number(l))){const F=parseInt(l,10);let r=0;n=window.setInterval(()=>{e.textContent=r.toString()+c.replace(/\d/g,""),r===F?clearInterval(n):r++},50)}},_=()=>{n&&(clearInterval(n),n=void 0)};e.addEventListener("mouseover",U),e.addEventListener("mouseout",_)})},render:e=>a`
    <gds-flex gap="xl" align-items="center">
      <gds-badge variant="positive" notification></gds-badge>
      <gds-badge variant="positive" notification>9</gds-badge>
      <gds-badge variant="positive" notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
      <gds-badge variant="negative" notification></gds-badge>
      <gds-badge variant="negative" notification>9</gds-badge>
      <gds-badge variant="negative" notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  `};var m,v,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Variants',
  render: args => html\`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="negative" disabled>
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="negative" disabled> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge size="small" variant="information"> 120 </gds-badge>
          <gds-badge size="small" variant="notice"> 428 </gds-badge>
          <gds-badge size="small" variant="positive"> 32 </gds-badge>
          <gds-badge size="small" variant="warning"> 602 </gds-badge>
          <gds-badge size="small" variant="negative"> 537 </gds-badge>
          <gds-badge size="small" variant="negative" disabled> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge variant="positive" notification></gds-badge>
          <gds-badge variant="positive" notification>9</gds-badge>
          <gds-badge variant="positive" notification>
            999
            <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
          <gds-badge variant="negative" notification></gds-badge>
          <gds-badge variant="negative" notification>9</gds-badge>
          <gds-badge variant="negative" notification>
            999 <gds-icon-plus-small slot="trail"></gds-icon-plus-small
          ></gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(p=(v=o.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var f,x,u,h,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Lead',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  \`
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:`The \`gds-badge\` component includes a \`lead\` slot that allows for the addition of leading content, such as icons.

This slot can be used to enhance the visual representation of the badge by including elements like \`gds-icon\`.

Example usage:

\`\`\`html
<gds-badge variant="positive">
  <gds-icon-rocket slot="lead"></gds-icon-rocket>
  Launch
</gds-badge>
<gds-badge variant="warning">
  <gds-icon-chevron-up slot="lead"></gds-icon-chevron-up>
  Discard
</gds-badge>
\`\`\``,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var z,k,y,N,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Trail',
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  \`
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:'`gds-badge` has a trail slot that can be used to add additional content to the badge.\n\n```html\n<gds-badge>\n <span slot="trail">...</span>\n</gds-badge>\n```',...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};var D,I,E,L,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Size',
  render: args => html\`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  \`
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:`Defines the size of the badge.
The default value is \`default\`.

@property {string} size - The size of the badge, which can be either 'default' or 'small'.

\`\`\`html
<gds-badge size="small">...</gds-badge>
\`\`\``,...(C=(L=i.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var T,V,A,P,W;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled',
  render: args => html\`
    <gds-flex gap="xl">
      <gds-badge variant="positive" disabled>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning" disabled>
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  \`
}`,...(A=(V=t.parameters)==null?void 0:V.docs)==null?void 0:A.source},description:{story:"Indicates whether the badge is disabled.\nWhen set to `true`, the badge will appear in a disabled state and will not be interactive.\n\n@property {boolean} disabled - Controls the disabled state of the badge.\n\n```html\n<gds-badge disabled>...</gds-badge>\n<gds-badge disabled>...</gds-badge>\n```",...(W=(P=t.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var j,B,R,q,K;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Notification',
  parameters: {
    actions: {
      handles: ['mouseover', 'mouseout']
    }
  },
  play: async () => {
    document.querySelectorAll('gds-badge[notification]').forEach(badge => {
      let interval: number | undefined;
      const startAnimation = () => {
        const content = badge.textContent?.trim() || '';
        const numericContent = content.replace(/\\D/g, ''); // Remove non-numeric characters
        if (numericContent && !isNaN(Number(numericContent))) {
          const targetValue = parseInt(numericContent, 10);
          let currentValue = 0;
          interval = window.setInterval(() => {
            badge.textContent = currentValue.toString() + content.replace(/\\d/g, ''); // Preserve non-numeric characters
            if (currentValue === targetValue) {
              clearInterval(interval);
            } else {
              currentValue++;
            }
          }, 50); // Adjust the interval speed as needed
        }
      };
      const stopAnimation = () => {
        if (interval) {
          clearInterval(interval);
          interval = undefined;
        }
      };
      badge.addEventListener('mouseover', startAnimation);
      badge.addEventListener('mouseout', stopAnimation);
    });
  },
  render: args => html\`
    <gds-flex gap="xl" align-items="center">
      <gds-badge variant="positive" notification></gds-badge>
      <gds-badge variant="positive" notification>9</gds-badge>
      <gds-badge variant="positive" notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
      <gds-badge variant="negative" notification></gds-badge>
      <gds-badge variant="negative" notification>9</gds-badge>
      <gds-badge variant="negative" notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  \`
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source},description:{story:'The `Notification` story demonstrates the use of the `gds-badge` component in notification mode.\nIn this mode, the badge acts as a notification indicator with only two possible variants: `positive` or `negative`.\n\nExample usage:\n\n```html\n<gds-flex gap="xl">\n  <gds-badge notification>...</gds-badge>\n  <gds-badge notification>...</gds-badge>\n</gds-flex>\n```\n\n@property {boolean} notification - Controls the notification mode of the badge.',...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};const ge=["Variants","Lead","Trail","Size","Disabled","Notification"];export{t as Disabled,s as Lead,g as Notification,i as Size,d as Trail,o as Variants,ge as __namedExportsOrder,te as default};
