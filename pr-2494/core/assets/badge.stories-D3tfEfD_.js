import{x as a}from"./iframe-BvO6JDjo.js";import{a as O}from"./argTableProps-BNB1wcOg.js";import"./badge-9A6SrJQ6.js";import"./flex-stimDqNa.js";import"./divider-BVh6K_e2.js";import"./triangle-exclamation-B6ECTx3g.js";import"./circle-check-CZ5xvSjO.js";import"./arrow-rotate-counter-clockwise.component-D9_ob2-d.js";import"./minus-small-C-SQA1Bu.js";import"./rocket-DvLPOPIk.js";import"./preload-helper-Dp1pzeXC.js";import"./badge.component-BcScUPg9.js";import"./flex.component-0j1zyJs2.js";import"./divider.component-d9-t5gk3.js";import"./triangle-exclamation.component-BlQKF_TS.js";import"./icon-CPKGfb59.js";import"./circle-check.component-DgGg6Hd1.js";import"./minus-small.component-BKlZpAyb.js";import"./rocket.component-DU-_RuYo.js";const le={title:"Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:'A compact visual indicator for status, counts and notifications.\n\nFeatures:\n- **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.\n- **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.\n- **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.\n- **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.\n\nExample usage:\n\n```html\n<gds-badge variant="positive">\n  <gds-icon-rocket slot="lead"></gds-icon-rocket>\n  Launch\n</gds-badge>\n```'}}},tags:["autodocs"],argTypes:{...O("gds-badge")}},o={name:"Variants",render:e=>a`
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
          <gds-badge variant="disabled">
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
          <gds-badge variant="disabled"> Disabled </gds-badge>
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
          <gds-badge size="small" variant="disabled"> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge notification></gds-badge>
          <gds-badge notification>9</gds-badge>
          <gds-badge notification>999+</gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},n={name:"Lead",parameters:{controls:{include:[]}},render:e=>a`
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
  `},s={name:"Trail",parameters:{controls:{include:[]}},render:e=>a`
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
  `},g={name:"Size",render:e=>a`
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
  `},i={name:"Notification",parameters:{actions:{handles:["mouseover","mouseout"]}},play:async()=>{document.querySelectorAll("gds-badge[notification]").forEach(e=>{let d;const K=()=>{var m;const c=((m=e.textContent)==null?void 0:m.trim())||"",r=c.replace(/\D/g,"");if(r&&!isNaN(Number(r))){const _=parseInt(r,10);let l=0;d=window.setInterval(()=>{e.textContent=l.toString()+c.replace(/\d/g,""),l===_?clearInterval(d):l++},50)}},U=()=>{d&&(clearInterval(d),d=void 0)};e.addEventListener("mouseover",K),e.addEventListener("mouseout",U)})},render:e=>a`
    <gds-flex gap="xl" align-items="center">
      <gds-badge notification></gds-badge>
      <gds-badge notification>9</gds-badge>
      <gds-badge notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  `},t={name:"Rounded",parameters:{},render:e=>a`
    <gds-flex gap="xl" flex-direction="column">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded variant="information"> 01 </gds-badge>
          <gds-badge rounded variant="notice"> 02 </gds-badge>
          <gds-badge rounded variant="positive"> 03 </gds-badge>
          <gds-badge rounded variant="warning"> 04 </gds-badge>
          <gds-badge rounded variant="negative"> 05 </gds-badge>
          <gds-badge rounded variant="negative" disabled> 06 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded size="small" variant="information"> 01 </gds-badge>
          <gds-badge rounded size="small" variant="notice"> 02 </gds-badge>
          <gds-badge rounded size="small" variant="positive"> 03 </gds-badge>
          <gds-badge rounded size="small" variant="warning"> 04 </gds-badge>
          <gds-badge rounded size="small" variant="negative"> 05 </gds-badge>
          <gds-badge rounded size="small" variant="negative" disabled>
            06
          </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `};var b,f,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <gds-badge variant="disabled">
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
          <gds-badge variant="disabled"> Disabled </gds-badge>
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
          <gds-badge size="small" variant="disabled"> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge notification></gds-badge>
          <gds-badge notification>9</gds-badge>
          <gds-badge notification>999+</gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var x,v,u,h,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source},description:{story:`The \`gds-badge\` component includes a \`lead\` slot that allows for the addition of leading content, such as icons.

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
\`\`\``,...(z=(h=n.parameters)==null?void 0:h.docs)==null?void 0:z.description}}};var w,y,k,S,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:'`gds-badge` has a trail slot that can be used to add additional content to the badge.\n\n```html\n<gds-badge>\n <span slot="trail">...</span>\n</gds-badge>\n```',...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var T,E,I,C,D;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:`Defines the size of the badge.
The default value is \`default\`.

@property {string} size - The size of the badge, which can be either 'default' or 'small'.

\`\`\`html
<gds-badge size="small">...</gds-badge>
\`\`\``,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var V,L,R,A,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      <gds-badge notification></gds-badge>
      <gds-badge notification>9</gds-badge>
      <gds-badge notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  \`
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:'The `Notification` story demonstrates the use of the `gds-badge` component in notification mode.\nIn this mode, the badge acts as a notification indicator with only two possible variants: `positive` or `negative`.\n\nExample usage:\n\n```html\n<gds-flex gap="xl">\n  <gds-badge notification>...</gds-badge>\n  <gds-badge notification>...</gds-badge>\n</gds-flex>\n```\n\n@property {boolean} notification - Controls the notification mode of the badge.',...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var W,j,B,q,F;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Rounded',
  parameters: {},
  render: args => html\`
    <gds-flex gap="xl" flex-direction="column">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded variant="information"> 01 </gds-badge>
          <gds-badge rounded variant="notice"> 02 </gds-badge>
          <gds-badge rounded variant="positive"> 03 </gds-badge>
          <gds-badge rounded variant="warning"> 04 </gds-badge>
          <gds-badge rounded variant="negative"> 05 </gds-badge>
          <gds-badge rounded variant="negative" disabled> 06 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded size="small" variant="information"> 01 </gds-badge>
          <gds-badge rounded size="small" variant="notice"> 02 </gds-badge>
          <gds-badge rounded size="small" variant="positive"> 03 </gds-badge>
          <gds-badge rounded size="small" variant="warning"> 04 </gds-badge>
          <gds-badge rounded size="small" variant="negative"> 05 </gds-badge>
          <gds-badge rounded size="small" variant="negative" disabled>
            06
          </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source},description:{story:'The `Rounded` story demonstrates the use of the `gds-badge` component with the `rounded` property.\n\nWhen set to `true`, the badge will have fully rounded corners.\n\nExample usage:\n\n```html\n<gds-badge rounded variant="information"> 01 </gds-badge>\n```\n\n@property {boolean} rounded - Controls the border radius of the badge.',...(F=(q=t.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};const ce=["Variants","Lead","Trail","Size","Notification","Rounded"];export{n as Lead,i as Notification,t as Rounded,g as Size,s as Trail,o as Variants,ce as __namedExportsOrder,le as default};
