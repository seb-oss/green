import{x as a}from"./lit-element-Bx14lxc-.js";import{a as X}from"./argTableProps-DLhuueLD.js";import"./badge-C4CVan_9.js";import"./grid-Db-deLW2.js";import"./flex-B5mJpYvo.js";import"./divider-n_6ghmO9.js";import"./triangle-exclamation-BmgbORtM.js";import"./circle-check-Dr_KPV2X.js";import"./plus-small-DkMe32kn.js";import"./rocket-Be9v5LhX.js";import"./custom-elements-fB1Z3nnq.js";import"./badge.component-BnmUSE-M.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BY4y5f1K.js";import"./declarative-layout-mixins-CxeMR8ZJ.js";import"./flex.component-BpIVa_-p.js";import"./div.component-C5EmBRSK.js";import"./triangle-exclamation.component-Cm8mgKyy.js";import"./icon-FwGo_aVM.js";import"./directive-CF8sV3Lr.js";const ue={title:"Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:'A badge is a small status or notification indicator that can be used to display a message or status.\n\nFeatures:\n- **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.\n- **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.\n- **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.\n- **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.\n\nExample usage:\n\n```html\n<gds-badge variant="positive">\n  <gds-icon-rocket slot="lead"></gds-icon-rocket>\n  Launch\n</gds-badge>\n```'}}},tags:["autodocs"],argTypes:{...X("gds-badge")}},r={name:"Variants",render:e=>a`
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
  `},g={name:"Disabled",render:e=>a`
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
  `},t={name:"Notification",parameters:{actions:{handles:["mouseover","mouseout"]}},play:async()=>{document.querySelectorAll("gds-badge[notification]").forEach(e=>{let d;const J=()=>{var m;const b=((m=e.textContent)==null?void 0:m.trim())||"",l=b.replace(/\D/g,"");if(l&&!isNaN(Number(l))){const Q=parseInt(l,10);let c=0;d=window.setInterval(()=>{e.textContent=c.toString()+b.replace(/\d/g,""),c===Q?clearInterval(d):c++},50)}},M=()=>{d&&(clearInterval(d),d=void 0)};e.addEventListener("mouseover",J),e.addEventListener("mouseout",M)})},render:e=>a`
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
  `},o={name:"Rounded",parameters:{},render:e=>a`
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
  `};var v,p,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,u,h,z,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`The \`gds-badge\` component includes a \`lead\` slot that allows for the addition of leading content, such as icons.

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
\`\`\``,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.description}}};var y,k,S,N,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:'`gds-badge` has a trail slot that can be used to add additional content to the badge.\n\n```html\n<gds-badge>\n <span slot="trail">...</span>\n</gds-badge>\n```',...(D=(N=s.parameters)==null?void 0:N.docs)==null?void 0:D.description}}};var I,T,E,C,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:`Defines the size of the badge.
The default value is \`default\`.

@property {string} size - The size of the badge, which can be either 'default' or 'small'.

\`\`\`html
<gds-badge size="small">...</gds-badge>
\`\`\``,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};var V,R,A,P,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source},description:{story:"Indicates whether the badge is disabled.\nWhen set to `true`, the badge will appear in a disabled state and will not be interactive.\n\n@property {boolean} disabled - Controls the disabled state of the badge.\n\n```html\n<gds-badge disabled>...</gds-badge>\n<gds-badge disabled>...</gds-badge>\n```",...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var j,B,q,F,K;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(B=t.parameters)==null?void 0:B.docs)==null?void 0:q.source},description:{story:'The `Notification` story demonstrates the use of the `gds-badge` component in notification mode.\nIn this mode, the badge acts as a notification indicator with only two possible variants: `positive` or `negative`.\n\nExample usage:\n\n```html\n<gds-flex gap="xl">\n  <gds-badge notification>...</gds-badge>\n  <gds-badge notification>...</gds-badge>\n</gds-flex>\n```\n\n@property {boolean} notification - Controls the notification mode of the badge.',...(K=(F=t.parameters)==null?void 0:F.docs)==null?void 0:K.description}}};var U,_,O,G,H;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(_=o.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:'The `Rounded` story demonstrates the use of the `gds-badge` component with the `rounded` property.\n\nWhen set to `true`, the badge will have fully rounded corners.\n\nExample usage:\n\n```html\n<gds-badge rounded variant="information"> 01 </gds-badge>\n```\n\n@property {boolean} rounded - Controls the border radius of the badge.',...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const he=["Variants","Lead","Trail","Size","Disabled","Notification","Rounded"];export{g as Disabled,n as Lead,t as Notification,o as Rounded,i as Size,s as Trail,r as Variants,he as __namedExportsOrder,ue as default};
