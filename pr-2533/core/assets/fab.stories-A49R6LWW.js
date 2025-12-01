import{h as o}from"./iframe-B_7VDQZA.js";import"./signal-BXpammxq.js";import"./div-DZzah8Lt.js";import"./text-DlNpezDt.js";import"./link-C7R2Tpjc.js";import"./flex-OIDLvq6T.js";import"./card-2cSXUTpr.js";import"./chevron-bottom-DBzcpvwv.js";import"./bubbles-Cro70Yba.js";import{a as V}from"./argTableProps-DijzQAUo.js";import{DefaultParams as Z}from"./button.stories-WR0UNqIw.js";import"./preload-helper-Dp1pzeXC.js";import"./default-typography.styles-CyeDCQwX.js";import"./props-link-DwlXg-oh.js";import"./flex.component-CW36NNeC.js";import"./card.component-CkRf2nwJ.js";import"./chevron-bottom.component-xnPHarsq.js";import"./icon.component-DgivRYtk.js";import"./divider-C4hWexXG.js";import"./credit-card-DHMgA06R.js";import"./arrow-left-CAYh1wo_.js";import"./chevron-top-C65L7sbQ.js";import"./arrow-up-BLPPgXWu.js";import"./arrow-up.component-CT8wC-aL.js";import"./arrow-down-DwqtAorg.js";import"./arrow-right-BDzFXZhF.js";const pa={title:"Components/FAB",component:"gds-fab",tags:["autodocs"],argTypes:{...V("gds-fab")},parameters:{docs:{description:{component:`Floating action button persists across screens for constant access to features that needs to be accessible at all times.

The button is always floating visible in the users viewport, typically in the lower right
corner. This button can be used with an icon only.`}}}},a={...Z,parameters:{docs:{source:{format:!0,type:"dynamic"},story:{height:"200px",position:"relative"}},controls:{expanded:!0}},args:{innerHTML:`See what's new! <gds-signal slot="trail"></gds-signal>`}},d={...a},s={...a,name:"Signal ",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},e={...a,name:"Icon Button",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  `},n={...a,name:"Color",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="secondary" variant="positive">
        Secondary
        <gds-signal slot="trail" level="3" color="positive-01"></gds-signal>
      </gds-fab>
    </gds-flex>
  `},t={...a,name:"Position",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  `},i={...a,name:"z-index",parameters:{...a.parameters,controls:{include:[]}},render:r=>o`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  `};var g,l,p;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,u,b,m,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Signal ',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" variant="positive">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        variant="positive"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 300px 100px auto" variant="positive" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" variant="negative">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        variant="negative"
        rank="secondary"
      >
        Secondary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
      <gds-fab inset="auto 500px 100px auto" variant="negative" rank="tertiary">
        Tertiary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:`The FAB can be used with a signal to indicate that there is something new or updated.

Signal style matches the button rank and variant.`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var f,h,v,y,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon Button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="600px">
      <gds-fab inset="auto 100px 300px auto">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 200px auto" rank="secondary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab inset="auto 100px 100px auto" rank="tertiary">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 300px 300px auto" size="medium" variant="positive">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 200px auto"
        size="medium"
        variant="positive"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 300px 100px auto"
        size="medium"
        variant="positive"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>

      <gds-fab inset="auto 500px 300px auto" size="small" variant="negative">
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 200px auto"
        size="small"
        variant="negative"
        rank="secondary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
      <gds-fab
        inset="auto 500px 100px auto"
        size="small"
        variant="negative"
        rank="tertiary"
      >
        <gds-icon-bubbles></gds-icon-bubbles>
      </gds-fab>
    </gds-flex>
  \`
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"The FAB can be used with all the `gds-button` properties.",...(k=(y=e.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var P,S,w,T,z;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Color',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" rank="secondary" variant="positive">
        Secondary
        <gds-signal slot="trail" level="3" color="positive-01"></gds-signal>
      </gds-fab>
    </gds-flex>
  \`
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Default color of the signal within the FAB is the same as the button color.\n\nIf you want to change the color of the signal, you can use the `color` property.",...(z=(T=n.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};var A,B,D,F,C;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Position',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex height="300px">
      <gds-fab inset="auto 48px 48px auto" position="absolute">
        I'm a FAB
      </gds-fab>
    </gds-flex>
  \`
}`,...(D=(B=t.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:`You can position the FAB using the \`inset\` property.
It takes all the default CSS inset values.

e.g

\`\`\`html
<gds-fab inset="auto 48px 48px auto">
   I'm a FAB
</gds-fab>
\`\`\`

And also the \`position\` property can be set to use any valid CSS position values.

e.g

\`\`\`html
<gds-fab position="absolute">
   Absolute Position
</gds-fab>
\`\`\``,...(C=(F=t.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var I,L,q,R,U;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'z-index',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex
      height="400px"
      flex-direction="column"
      gap="4xl"
      padding="0"
      overflow="hidden scroll"
      border-radius="s"
    >
      <gds-fab inset="auto 40px 40px auto"> Show above other things </gds-fab>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
      <gds-div
        border-radius="s"
        width="100%"
        height="max-content"
        background="notice"
        padding="4xl"
      >
        <gds-flex gap="xl">
          <gds-flex
            flex-direction="column"
            gap="xl"
            flex="1"
            align-items="flex-start"
            padding="m 0 0 0"
          >
            <gds-text tag="h1"> Title example </gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-link href="#" variant="secondary">
              <gds-icon-credit-card></gds-icon-credit-card> Click me!
            </gds-link>
          </gds-flex>
          <gds-card variant="secondary" flex="1" height="300px"> </gds-card>
        </gds-flex>
      </gds-div>
    </gds-flex>
  \`
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:`The z order of the FAB is set by default to \`1050\`.

This is recommended to keep the FAB above other elements.

If you want to change the z-index, that should be done in the CSS or wrap FAB in a container with a higher z-index value.`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const ca=["Usage","RanksAndVariants","IconButton","Color","Position","ZIndex"];export{n as Color,e as IconButton,t as Position,s as RanksAndVariants,d as Usage,i as ZIndex,ca as __namedExportsOrder,pa as default};
